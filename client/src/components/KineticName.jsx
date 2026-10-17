import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const BASE = 300; // normal weight
const PEAK = 800; // cursor ke paas weight
const RADIUS = 240; // cursor ka asar kitni door tak

function Letter({ char, index, mx, my, reduce }) {
  const ref = useRef(null);
  const weight = useSpring(reduce ? 500 : PEAK, { stiffness: 140, damping: 16 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = (w) => {
      el.style.fontVariationSettings = `"wght" ${Math.round(w)}`;
    };
    apply(weight.get());
    if (reduce) return;

    // 1) Page load par letters 800 se 300 par aate hain, ek ke baad ek
    const timer = setTimeout(() => weight.set(BASE), 350 + index * 70);

    // 2) Cursor ke qareeb aane par letter mota ho jata hai
    const onMove = () => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dist = Math.hypot(mx.get() - cx, my.get() - cy);
      const t = Math.max(0, 1 - dist / RADIUS);
      weight.set(BASE + (PEAK - BASE) * t);
    };

    const offW = weight.on("change", apply);
    const offX = mx.on("change", onMove);
    const offY = my.on("change", onMove);
    return () => {
      clearTimeout(timer);
      offW();
      offX();
      offY();
    };
  }, [weight, mx, my, index, reduce]);

  return (
    <span ref={ref} className="inline-block">
      {char}
    </span>
  );
}

export default function KineticName({ lines }) {
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const reduce = useReducedMotion();

  return (
    <motion.h1
      aria-label={lines.join(" ")}
      onPointerMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      onPointerLeave={() => {
        mx.set(-9999);
        my.set(-9999);
      }}
      className="font-display text-[clamp(3.5rem,14vw,11.5rem)] leading-[0.88] tracking-tighter"
    >
      {lines.map((line, li) => (
        <span key={li} aria-hidden="true" className="block">
          {[...line].map((ch, ci) => (
            <Letter
              key={ci}
              char={ch}
              index={li * 8 + ci}
              mx={mx}
              my={my}
              reduce={reduce}
            />
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
