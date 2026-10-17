import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { sendMessage } from "../api/contact";
import SectionHeading from "./SectionHeading";

const empty = { name: "", email: "", message: "", website: "" }; // website = honeypot (spam trap)

const inputClass =
  "mt-2 w-full rounded-xl border-2 border-ink bg-white/60 px-4 py-3 text-lg outline-none transition-colors focus:border-violet focus:bg-white";

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await sendMessage(form);
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-sun">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <SectionHeading id="contact-title">Let's talk</SectionHeading>
          <p className="mt-8 max-w-md text-xl leading-relaxed">
            I'm open to full-time roles, internships and freelance projects. Send a message and I'll
            reply within two days.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block font-display text-2xl font-semibold underline decoration-2 underline-offset-4 hover:text-violet"
          >
            {profile.email}
          </a>
          <div className="mt-6 flex gap-6 text-lg font-semibold">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-violet">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-violet">
              GitHub
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate={false} className="space-y-5">
          <div>
            <label htmlFor="name" className="font-semibold">Your name</label>
            <input id="name" name="name" required maxLength={80} value={form.name} onChange={onChange} className={inputClass} autoComplete="name" />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold">Email address</label>
            <input id="email" name="email" type="email" required maxLength={120} value={form.email} onChange={onChange} className={inputClass} autoComplete="email" />
          </div>

          <div>
            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea id="message" name="message" required minLength={10} maxLength={2000} rows={5} value={form.message} onChange={onChange} className={inputClass} />
          </div>

          {/* Honeypot: insaan ko nazar nahi aata, bots bhar dete hain */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={onChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-ink px-8 py-4 text-lg font-semibold text-mist transition-colors hover:bg-violet disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <div aria-live="polite" className="min-h-[3rem]">
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="ok"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-mint px-4 py-3 text-lg font-semibold"
                >
                  Message sent. Thanks, I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="err"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-ink px-4 py-3 text-lg font-semibold text-mist"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
}
