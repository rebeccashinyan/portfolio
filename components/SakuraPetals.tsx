import type { CSSProperties } from "react";

type Petal = {
  left: string;
  size: number;
  tone: "pink" | "cream";
  opacity: number;
  drift: number;
  rotate: number;
  duration: number;
  delay: number;
};

/**
 * Deterministic petal table. Hardcoded rather than randomized so the server
 * and client render identical markup (no hydration mismatch).
 */
const petals: Petal[] = [
  { left: "4%", size: 11, tone: "pink", opacity: 0.18, drift: 34, rotate: 210, duration: 24, delay: -19 },
  { left: "9%", size: 14, tone: "cream", opacity: 0.12, drift: -28, rotate: 175, duration: 29, delay: -5 },
  { left: "16%", size: 9, tone: "pink", opacity: 0.24, drift: 47, rotate: 265, duration: 21, delay: -14 },
  { left: "22%", size: 12, tone: "cream", opacity: 0.1, drift: -41, rotate: 195, duration: 27, delay: -8 },
  { left: "28%", size: 16, tone: "pink", opacity: 0.15, drift: 22, rotate: 230, duration: 31, delay: -23 },
  { left: "34%", size: 10, tone: "cream", opacity: 0.21, drift: -52, rotate: 165, duration: 22, delay: -3 },
  { left: "40%", size: 13, tone: "pink", opacity: 0.13, drift: 39, rotate: 245, duration: 26, delay: -17 },
  { left: "46%", size: 9, tone: "cream", opacity: 0.27, drift: -24, rotate: 205, duration: 20, delay: -11 },
  { left: "52%", size: 15, tone: "pink", opacity: 0.09, drift: 56, rotate: 180, duration: 30, delay: -26 },
  { left: "58%", size: 11, tone: "cream", opacity: 0.19, drift: -35, rotate: 255, duration: 23, delay: -6 },
  { left: "64%", size: 12, tone: "pink", opacity: 0.14, drift: 29, rotate: 220, duration: 28, delay: -20 },
  { left: "70%", size: 10, tone: "cream", opacity: 0.23, drift: -46, rotate: 170, duration: 25, delay: -2 },
  { left: "75%", size: 14, tone: "pink", opacity: 0.11, drift: 43, rotate: 275, duration: 29, delay: -15 },
  { left: "81%", size: 9, tone: "cream", opacity: 0.26, drift: -20, rotate: 200, duration: 21, delay: -9 },
  { left: "86%", size: 13, tone: "pink", opacity: 0.16, drift: 51, rotate: 240, duration: 27, delay: -24 },
  { left: "90%", size: 11, tone: "cream", opacity: 0.2, drift: -31, rotate: 185, duration: 24, delay: -12 },
  { left: "94%", size: 16, tone: "pink", opacity: 0.1, drift: 25, rotate: 280, duration: 30, delay: -4 },
  { left: "96%", size: 10, tone: "cream", opacity: 0.22, drift: -55, rotate: 160, duration: 22, delay: -18 },
];

export function SakuraPetals() {
  return (
    <div className="sakura-petals-layer" aria-hidden="true">
      {petals.map((petal, index) => (
        <span
          key={index}
          className={`sakura-petal sakura-petal--${petal.tone}`}
          style={
            {
              left: petal.left,
              width: `${petal.size}px`,
              height: `${Math.round(petal.size * 1.4)}px`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              "--sakura-opacity": petal.opacity,
              "--sakura-drift": `${petal.drift}px`,
              "--sakura-rotate-end": `${petal.rotate}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
