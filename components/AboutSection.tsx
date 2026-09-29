import Image from "next/image";

type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type AboutSectionProps = {
  id: string;
  title: string;
  paragraphs: string[];
  illustration: ImageAsset;
  portrait: ImageAsset;
};

export function AboutSection({
  id,
  title,
  paragraphs,
  illustration,
  portrait,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="mx-auto mt-14 w-[calc(100vw-40px)] max-w-figma-content overflow-hidden rounded-figma-panel bg-portfolio-paper px-6 py-10 sm:w-full sm:px-10 lg:mt-[72px] lg:p-14"
    >
      <h1 className="font-brand text-[42px] font-normal leading-none text-portfolio-navy sm:text-[56px]">
        {title}
      </h1>

      <div className="mt-7 max-w-figma-text space-y-5 break-words text-[17px] font-bold leading-[1.6] sm:text-[18px] lg:mt-9">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="relative mx-auto mt-12 aspect-[941/490] w-full max-w-[847px] overflow-hidden lg:mt-14">
        <div className="absolute left-[42%] top-[24.7%] z-20 h-[44.1%] w-[17.2%] overflow-hidden rounded-figma-panel bg-portfolio-periwinkle">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            priority
            className="h-full w-full object-cover"
          />
        </div>
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
