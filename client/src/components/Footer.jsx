import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-8 text-center text-mist/80">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.
      </p>
    </footer>
  );
}
