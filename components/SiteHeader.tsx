import Image from "next/image";
import Link from "next/link";

import { SiteNav } from "@/components/SiteNav";
import { brandName, logo, socialLinks } from "@/components/siteConfig";

type SiteHeaderProps = {
  /** Nav item to mark as the current page. Omit on pages that are not in the nav. */
  activeHref?: string;
  /** Brand wordmark color: dark on the light pages, light on the dark case-study pages. */
  tone?: "dark" | "light";
};

export function SiteHeader({ activeHref, tone = "dark" }: SiteHeaderProps) {
  return (
    <header className="relative mx-auto flex w-[calc(100vw-40px)] max-w-figma-content flex-col items-start gap-4 sm:w-full sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-5 lg:flex-nowrap">
      <Link href="/" className="flex items-center gap-[19px]">
        <Image
          src={logo.src}
          alt=""
          width={logo.width}
          height={logo.height}
          priority
          className="h-[69px] w-[72px]"
        />
        <span
          className={`font-display text-[25px] font-normal leading-none ${
            tone === "light" ? "text-white" : "text-black"
          }`}
        >
          {brandName}
        </span>
      </Link>

      <SiteNav activeHref={activeHref} />

      <div className="flex items-center gap-[7px]">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className={`relative size-[43px] overflow-hidden rounded-figma-sm ${link.className ?? ""}`}
          >
            {link.underlay ? (
              <Image
                src={link.underlay.src}
                alt=""
                width={link.underlay.width}
                height={link.underlay.height}
                className={link.underlay.className}
              />
            ) : null}
            <Image
              src={link.icon.src}
              alt=""
              width={link.icon.width}
              height={link.icon.height}
              className={link.iconClassName ?? "size-full object-cover"}
            />
          </a>
        ))}
      </div>
    </header>
  );
}
