export type SocialIconName = "linkedin" | "mail" | "github";

type SocialIconProps = {
  name: SocialIconName;
};

/**
 * The three header marks, drawn as vectors on a shared 24x24 grid so they stay
 * crisp at any size and share one fill colour. Rendered sizes are tuned by eye
 * rather than set equal: the round GitHub mark needs a little more room than
 * the upright "in" to carry the same weight.
 */
export function SocialIcon({ name }: SocialIconProps) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    focusable: false,
  } as const;

  if (name === "linkedin") {
    return (
      <svg {...common} width={19} height={19}>
        {/* Drawn on LinkedIn's own 448x512 grid, scaled into the 24x24 box. */}
        <g transform="translate(1.5 0) scale(0.046875)">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </g>
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common} width={19} height={19}>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    );
  }

  return (
    <svg {...common} width={20} height={20}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7 0-.7 0-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.2 4.9 18.2 5.2 18.2 5.2c.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  );
}
