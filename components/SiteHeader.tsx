import Link from "next/link";

import { SiteNav } from "@/components/SiteNav";
import { SocialIcon } from "@/components/SocialIcon";
import { brandName, socialLinks } from "@/components/siteConfig";

type SiteHeaderProps = {
  /** Nav item to mark as the current page. Omit on pages that are not in the nav. */
  activeHref?: string;
  /** Brand wordmark color: dark on the light pages, light on the dark case-study pages. */
  tone?: "dark" | "light";
};

export function SiteHeader({ activeHref, tone = "dark" }: SiteHeaderProps) {
  return (
    <header className="relative mx-auto flex w-[calc(100vw-40px)] max-w-figma-content flex-col items-start gap-4 sm:w-full sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-5 lg:h-[62px] lg:flex-nowrap">
      <Link href="/">
        <span
          className={`font-display text-[22px] font-normal leading-none ${
            tone === "light" ? "text-white" : "text-black"
          }`}
        >
          {brandName}
        </span>
      </Link>

      <SiteNav activeHref={activeHref} />

      <div className="flex items-center gap-[6px]">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className={`flex size-[39px] items-center justify-center rounded-figma-sm bg-black text-white focus-visible:outline-2 focus-visible:outline-offset-4 ${
              tone === "light"
                ? "focus-visible:outline-white"
                : "focus-visible:outline-portfolio-navy"
            }`}
          >
            <SocialIcon name={link.icon} />
          </a>
        ))}
      </div>
    </header>
  );
}
