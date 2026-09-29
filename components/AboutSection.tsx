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
  portrait: ImageAsset;
};

export function AboutSection({
  id,
  title,
  paragraphs,
  portrait,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="mx-auto mt-14 w-[calc(100vw-40px)] max-w-figma-content rounded-figma-panel bg-portfolio-paper px-6 py-10 sm:w-full sm:px-10 lg:mt-[72px] lg:p-14"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="lg:max-w-[470px]">
          <h1 className="font-brand text-[36px] font-normal leading-none text-portfolio-navy sm:text-[44px]">
            {title}
          </h1>

          <div className="mt-8 space-y-5 break-words text-[17px] font-bold leading-[1.6] sm:text-[18px] lg:mt-12">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-none text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Centred in the space beside the text rather than pushed against the
            panel's padding, which is where the design places it. */}
        <div className="lg:flex lg:flex-1 lg:justify-center">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            priority
            className="w-[214px] shrink-0 rounded-figma-shot"
          />
        </div>
      </div>
    </section>
  );
}
