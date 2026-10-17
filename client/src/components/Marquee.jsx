// Ek row jo lagatar side par chalti rehti hai. Hover par ruk jati hai.
export default function Marquee({ items, reverse = false, filled = false }) {
  const doubled = [...items, ...items]; // loop seamless rakhne ke liye 2 copies

  return (
    <div className="group flex overflow-hidden py-2">
      <ul
        className={`flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className={`whitespace-nowrap rounded-full px-8 py-4 font-display text-2xl font-semibold md:text-3xl ${
              filled ? "bg-ink text-mist" : "border-2 border-ink"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
