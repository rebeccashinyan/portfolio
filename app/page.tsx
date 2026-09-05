import { AboutSection } from "@/components/AboutSection";
import { SiteHeader } from "@/components/SiteHeader";

const navItems = [
  { label: "About", href: "#about", active: true },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/",
    icon: {
      src: "/figma-assets/social-linkedin.png",
      width: 450,
      height: 450,
    },
  },
  {
    label: "Email Rebecca",
    href: "mailto:sw6543@nyu.edu",
    icon: {
      src: "/figma-assets/social-mail.png",
      width: 1024,
      height: 1024,
    },
    iconClassName: "absolute left-0.5 top-[3px] size-10 rounded-figma-sm",
    underlay: {
      src: "/figma-assets/mail-ellipse.svg",
      width: 26,
      height: 24,
      className: "absolute left-[9px] top-3 h-6 w-[26px]",
    },
    className: "bg-black",
  },
  {
    label: "GitHub profile",
    href: "https://github.com/",
    icon: {
      src: "/figma-assets/social-github.png",
      width: 512,
      height: 512,
    },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-portfolio-cream px-5 py-8 text-black sm:px-8 lg:min-h-[1259px] lg:px-0 lg:pb-[31px] lg:pt-figma-header-top">
      <SiteHeader
        brandName="Rebecca Wang"
        logo={{ src: "/figma-assets/logo-dot.svg", width: 72, height: 69 }}
        navItems={navItems}
        socialLinks={socialLinks}
      />
      <AboutSection
        id="about"
        title="Hi, I'm Rebecca."
        paragraphs={[
          "I'm an undergraduate at New York University, majoring in Data Science and minoring in Integrated Design and Media.",
          "I'm interested in product design, UI/UX, and creating digital experiences at the intersection of design, technology, and human-centered problem solving.",
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
