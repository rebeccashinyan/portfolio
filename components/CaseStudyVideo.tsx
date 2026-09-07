type CaseStudyVideoProps = {
  /** Path to a file in `public/`, e.g. "/figma-assets/sakura-matcha/mvp-demo.mp4". */
  src: string;
  /** Still frame shown before playback starts. */
  poster?: string;
  /** What the recording shows, for assistive tech. */
  label: string;
  /** Sizing + aspect classes for the frame, e.g. "w-full aspect-[1178/590]". */
  className: string;
  /** Frame border: black inside the light panels, white on the dark background, or none. */
  frame?: "dark" | "light" | "none";
  /** Corner radius: screenshot-sized or full panel. */
  radius?: "shot" | "panel";
  /** "contain" letterboxes the recording, "cover" fills the frame and crops it. */
  fit?: "contain" | "cover";
};

const frames = {
  dark: "border border-black",
  light: "border border-white",
  none: "",
};

const radii = {
  shot: "rounded-figma-shot",
  panel: "rounded-figma-panel",
};

export function CaseStudyVideo({
  src,
  poster,
  label,
  className,
  frame = "light",
  radius = "shot",
  fit = "contain",
}: CaseStudyVideoProps) {
  return (
    <div
      className={`overflow-hidden bg-sakura-stone ${radii[radius]} ${frames[frame]} ${className}`}
    >
      <video
        src={src}
        poster={poster}
        aria-label={label}
        controls
        playsInline
        preload="metadata"
        className={`size-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
      />
    </div>
  );
}
