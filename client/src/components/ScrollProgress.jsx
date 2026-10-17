import { motion, useScroll, useSpring } from "framer-motion";

// Page ke top par patli si bar jo scroll ke saath bharti hai
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-violet"
    />
  );
}
