import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import contactRouter from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Render/Vercel jaise hosts proxy ke peeche hote hain
app.set("trust proxy", 1);

const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      // Postman / server-to-server (no origin) bhi allow
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json({ limit: "10kb" }));

// Spam se bachne ke liye: ek IP se 15 min me sirf 5 messages
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages. Please try again in a few minutes." },
});

app.get("/", (_req, res) => res.send("Portfolio API is running."));
app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/contact", contactLimiter, contactRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
