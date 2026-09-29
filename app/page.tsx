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
          "I'm an undergraduate at New York University, majoring in Data Science and minoring in Integrated Design and Media.",
          "I'm interested in product design, UI/UX, and creating digital experiences at the intersection of design, technology, and human-centered problem solving.",
        ]}
        portrait={{
          src: "/figma-assets/about-portrait.jpg",
          width: 571,
          height: 856,
          alt: "Portrait of Rebecca Wang.",
        }}
      />
    </main>
  );
}
