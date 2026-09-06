import Image from "next/image";

type CaseStudyShotProps = {
  src: string;
  alt: string;
  /** Intrinsic pixel size of the source file, for Next.js image optimization. */
  width: number;
  height: number;
  /** Sizing + aspect classes for the frame, e.g. "w-full max-w-[515px] aspect-[515/299]". */
  className: string;
  /** Frame border: black inside the light panels, white on the dark background, or none. */
  frame?: "dark" | "light" | "none";
  /** Which edge of a tall screenshot stays visible when the frame crops it. */
  align?: "top" | "center" | "bottom";
  sizes?: string;
};

const frames = {
  dark: "rounded-figma-shot border border-black",
  light: "rounded-figma-shot border border-white",
  none: "",
};

const alignment = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

export function CaseStudyShot({
  src,
  alt,
  width,
  height,
  className,
  frame = "dark",
  align = "center",
  sizes = "(max-width: 1024px) 92vw, 800px",
}: CaseStudyShotProps) {
  return (
    <div
      className={`overflow-hidden ${frames[frame]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={`size-full max-w-none object-cover ${alignment[align]}`}
      />
    </div>
  );
}
