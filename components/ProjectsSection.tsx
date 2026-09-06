import Link from "next/link";

type Project = {
  title: string;
  discipline: string;
  description: string;
  /** Case-study page, when one exists. */
  href?: string;
};

const projects: Project[] = [
  {
    title: "Goal Mountain",
    discipline: "AI Product Design / Agentic UX / Web App",
    description:
      "An AI-powered goal achievement platform that turns long-term goals into adaptive mountain journeys.",
    href: "/projects/goal-mountain",
  },
  {
    title: "Sakura Matcha",
    discipline: "Visual Design / Responsive Web / Customer Experience",
    description:
      "A responsive website for a modern matcha brand, designed around warm visuals, menu discovery, and a simple customer journey.",
    href: "/projects/sakura-matcha",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex min-h-[380px] flex-col rounded-figma-panel border border-black bg-white px-5 py-6 sm:px-8 lg:h-[380px] lg:flex-row lg:items-start lg:px-[55px] lg:pb-0 lg:pt-[28px] ${
        project.href
          ? "transition-shadow duration-200 group-hover:shadow-[0_10px_30px_rgba(10,22,128,0.15)]"
          : ""
      }`}
    >
      <div className="h-[260px] w-full shrink-0 rounded-figma-panel bg-portfolio-gold sm:w-[257px] lg:h-[302px]" />

      <div className="mt-7 max-w-[792px] lg:ml-[78px] lg:mt-[10px]">
        <h3 className="font-display text-[32px] font-bold leading-tight text-portfolio-navy sm:text-[40px] sm:leading-none">
          {project.title}
        </h3>
        <p className="mt-4 text-[16px] leading-normal text-black sm:text-[20px] lg:mt-[30px]">
          {project.discipline}
        </p>
        <p className="mt-8 max-w-[617px] text-[17px] leading-[1.5] text-black sm:text-[20px] sm:leading-[30px] lg:mt-[24px]">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto mt-14 w-[calc(100vw-40px)] max-w-figma-content rounded-figma-panel bg-portfolio-paper px-6 pb-12 pt-8 sm:w-full sm:px-9 lg:mt-[115px] lg:min-h-[1158px] lg:px-[60px] lg:pb-[54px] lg:pt-[70px]"
    >
      <h2 className="font-display text-[36px] font-bold leading-tight text-portfolio-navy sm:text-[50px] sm:leading-none">
        Some Recent Projects
      </h2>

      <div className="mt-9 space-y-8 lg:mt-[74px] lg:space-y-[77px]">
        {projects.map((project) =>
          project.href ? (
            <Link
              key={project.title}
              href={project.href}
              aria-label={`${project.title} case study`}
              className="group block rounded-figma-panel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-navy"
            >
              <ProjectCard project={project} />
            </Link>
          ) : (
            <ProjectCard key={project.title} project={project} />
          ),
        )}
      </div>
    </section>
  );
}
