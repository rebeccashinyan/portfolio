import Image from "next/image";

type HeaderImage = {
  src: string;
  width: number;
  height: number;
};

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

type SocialLink = {
  label: string;
  href: string;
  icon: HeaderImage;
  className?: string;
  iconClassName?: string;
  underlay?: HeaderImage & {
    className: string;
  };
};

type SiteHeaderProps = {
  brandName: string;
  logo: HeaderImage;
  navItems: NavItem[];
  socialLinks: SocialLink[];
};

export function SiteHeader({
  brandName,
  logo,
  navItems,
  socialLinks,
}: SiteHeaderProps) {
  return (
    <header className="relative mx-auto flex w-[calc(100vw-40px)] max-w-figma-content flex-col items-start gap-4 sm:w-full sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-5 lg:flex-nowrap">
      <a href="#about" className="flex items-center gap-[19px]">
        <Image
          src={logo.src}
          alt=""
          width={logo.width}
          height={logo.height}
          priority
          className="h-[69px] w-[72px]"
        />
        <span className="font-display text-[25px] font-normal leading-none">
          {brandName}
        </span>
      </a>

      <nav
        aria-label="Main navigation"
        className="order-3 mx-auto flex h-[69px] w-[236px] items-center rounded-figma-pill bg-portfolio-paper p-[14px] text-[18px] sm:order-none sm:mt-0 lg:absolute lg:left-1/2 lg:top-0 lg:-translate-x-1/2"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={
              item.active
                ? "flex h-[41px] w-[96px] items-center justify-center rounded-figma-pill bg-portfolio-navy text-white"
                : "flex h-[41px] flex-1 items-center justify-center rounded-figma-pill text-black"
            }
          >
            {item.label}
          </a>
        ))}
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
