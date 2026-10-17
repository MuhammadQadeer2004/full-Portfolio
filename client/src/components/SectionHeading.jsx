import { motion } from "framer-motion";

// Section ka title: neeche se "unmask" hota hai jab screen par aata hai
export default function SectionHeading({ id, children }) {
  return (
    <div className="overflow-hidden">
      <motion.h2
        id={id}
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl font-bold tracking-tight md:text-7xl"
      >
        {children}
      </motion.h2>
    </div>
  );
}
