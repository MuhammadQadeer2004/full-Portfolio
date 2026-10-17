import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v) => String(v ?? "").trim();

function getTransporter() {
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
}

router.post("/", async (req, res) => {
  const name = clean(req.body.name).replace(/[\r\n]+/g, " ");
  const email = clean(req.body.email);
  const message = clean(req.body.message);
  const honeypot = clean(req.body.website);

  // Bots ko "success" dikha do magar email na bhejo
  if (honeypot) return res.json({ ok: true });

  if (name.length < 2 || name.length > 80) {
    return res.status(400).json({ error: "Please enter your name (2 to 80 characters)." });
  }
  if (!emailRe.test(email) || email.length > 120) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (message.length < 10 || message.length > 2000) {
    return res.status(400).json({ error: "Your message should be 10 to 2000 characters." });
  }

  const transporter = getTransporter();

  // Email set nahi hai: local development me sirf console par dikha do
  if (!transporter) {
    console.log("[contact] EMAIL_USER / EMAIL_PASS not set. Message received:", { name, email, message });
    if (process.env.NODE_ENV === "production") {
      return res.status(500).json({ error: "The email service is not set up yet." });
    }
    return res.json({ ok: true, dev: true });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail failed:", err.message);
    res.status(500).json({ error: "Could not send your message. Please email me directly." });
  }
});

export default router;
