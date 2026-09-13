import { AboutSection } from "@/components/AboutSection";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-portfolio-cream px-5 py-8 text-black sm:px-8 lg:px-0 lg:pb-[72px] lg:pt-figma-header-top">
      <SiteHeader activeHref="/" />
      <AboutSection
        id="about"
        title="Hi, I'm Rebecca."
        paragraphs={[
          "I'm a junior at New York University, majoring in Data Science and minoring in Integrated Design and Media.",
          "I'm interested in product design and UI/UX, using both design thinking and data analysis to create thoughtful digital experiences.",
        ]}
        illustration={{
          src: "/figma-assets/about-illustration.png",
          width: 1672,
          height: 941,
          alt: "Black line illustration of Rebecca surrounded by design, data, and digital experience sketches.",
        }}
      />
    </main>
  );
}
