import Image from "next/image";

type Illustration = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type AboutSectionProps = {
  id: string;
  title: string;
  paragraphs: string[];
  illustration: Illustration;
};

export function AboutSection({
  id,
  title,
  paragraphs,
  illustration,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="mx-auto mt-14 w-[calc(100vw-40px)] max-w-figma-content overflow-hidden rounded-figma-panel bg-portfolio-paper px-7 pb-10 pt-9 sm:w-full sm:px-9 lg:mt-[78px] lg:h-[888px] lg:pt-[39px]"
    >
      <h1 className="font-display text-[42px] font-normal leading-none text-portfolio-navy sm:text-[64px]">
        {title}
      </h1>

      <div className="mt-7 max-w-full space-y-[22px] break-words text-[17px] font-bold leading-[1.5] sm:text-[20px] sm:leading-[30px] lg:mt-[39px] lg:max-w-[1124px]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="relative mt-12 aspect-[941/490] w-full max-w-[941px] overflow-hidden lg:ml-[98px] lg:mt-[63px]">
        <div className="absolute left-[42%] top-[24.7%] h-[44.1%] w-[17.2%] rounded-figma-panel bg-portfolio-periwinkle" />
        <Image
          src={illustration.src}
          alt={illustration.alt}
          width={illustration.width}
          height={illustration.height}
          priority
          className="absolute left-0 top-0 z-10 h-[108.04%] w-full max-w-none object-fill"
        />
      </div>
    </section>
  );
}
