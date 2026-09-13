import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  discipline: string;
  description: string;
  /** Case-study page, when one exists. */
  href?: string;
  /** Cover image; projects without one show the gold placeholder. */
  cover?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** Crop focus for the portrait cover inside the squarer frame. */
    position: string;
  };
};

const coverFrame =
  "h-[260px] w-full shrink-0 rounded-figma-panel sm:w-[232px] lg:h-[272px]";

const projects: Project[] = [
  {
    title: "Goal Mountain",
    discipline: "AI Product Design / Agentic UX",
    description:
      "An AI goal-planning web app that turns long-term ambitions into structured routes, then adapts weekly plans based on progress and learned user patterns.",
    href: "/projects/goal-mountain",
    cover: {
      src: "/figma-assets/goal-mountain/cover.png",
      alt: "Goal Mountain web app on a laptop, showing a goal path up a mountain",
      width: 1024,
      height: 1536,
      // Flag logo keeps headroom; the whole laptop stays in frame.
      position: "object-[50%_15%]",
    },
  },
  {
    title: "Sakura Matcha",
    discipline: "Responsive Web Design / AI Interaction",
    description:
      "A matcha café website designed to build strong brand recognition and enhance the overall customer experience through thoughtful UI/UX and an AI assistant.",
    href: "/projects/sakura-matcha",
    cover: {
      src: "/figma-assets/sakura-matcha/cover.png",
      alt: "Sakura Matcha website on a laptop and phone, showing matcha drinks and desserts",
      width: 887,
      height: 1404,
      // Squarer small-screen frames keep the logo's headroom and let the devices run off the bottom; desktop fits the whole scene.
      position: "object-[50%_15%] lg:object-[50%_35%]",
    },
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex flex-col rounded-figma-panel border border-black bg-white px-5 py-6 sm:p-8 lg:flex-row lg:items-start lg:p-10 ${
        project.href
          ? "transition-shadow duration-200 group-hover:shadow-[0_10px_30px_rgba(10,22,128,0.15)]"
          : ""
      }`}
    >
      {project.cover ? (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          sizes="(min-width: 640px) 232px, 100vw"
          className={`${coverFrame} object-cover ${project.cover.position}`}
        />
      ) : (
        <div className={`${coverFrame} bg-portfolio-gold`} />
      )}

      <div className="mt-7 lg:ml-[70px] lg:mt-2">
        <h3 className="font-display text-[32px] font-bold leading-tight text-portfolio-navy sm:text-[36px] sm:leading-none">
          {project.title}
        </h3>
        <p className="mt-4 text-[16px] leading-normal text-black sm:text-[18px] lg:mt-7">
          {project.discipline}
        </p>
        <p className="mt-8 max-w-[560px] text-[17px] leading-[1.5] text-black sm:text-[18px] lg:mt-5">
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
      className="mx-auto mt-14 w-[calc(100vw-40px)] max-w-figma-content rounded-figma-panel bg-portfolio-paper px-6 py-10 sm:w-full sm:px-10 lg:mt-[72px] lg:p-14"
    >
      <h2 className="font-display text-[36px] font-bold leading-tight text-portfolio-navy sm:text-[42px] sm:leading-none">
        Some Recent Projects
      </h2>

      <div className="mt-9 space-y-8 lg:mt-16 lg:space-y-16">
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
