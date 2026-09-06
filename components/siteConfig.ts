export const brandName = "Rebecca Wang";

export const logo = {
  src: "/figma-assets/logo-dot.svg",
  width: 72,
  height: 69,
};

export const navItems = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
];

export const socialLinks = [
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
