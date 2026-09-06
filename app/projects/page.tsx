import { CraftSection } from "@/components/CraftSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-portfolio-cream px-5 py-8 text-black sm:px-8 lg:min-h-[2308px] lg:px-0 lg:pb-[31px] lg:pt-figma-header-top">
      <SiteHeader activeHref="/projects" />
      <CraftSection />
      <ProjectsSection />
    </main>
  );
}
