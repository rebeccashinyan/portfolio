import Image from "next/image";
import Link from "next/link";

import { brandName, logo, navItems, socialLinks } from "@/components/siteConfig";

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

      <nav
        aria-label="Main navigation"
        className="order-3 mx-auto flex h-[69px] w-[236px] items-center rounded-figma-pill bg-portfolio-paper p-[14px] text-[18px] sm:order-none sm:mt-0 lg:absolute lg:left-1/2 lg:top-0 lg:-translate-x-1/2"
      >
        {navItems.map((item) => {
          const isActive = item.href === activeHref;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "flex h-[41px] w-[96px] items-center justify-center rounded-figma-pill bg-portfolio-navy text-white"
                  : "flex h-[41px] flex-1 items-center justify-center rounded-figma-pill text-black"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

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
