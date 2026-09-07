import type { SocialIconName } from "@/components/SocialIcon";

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

export const socialLinks: {
  label: string;
  href: string;
  icon: SocialIconName;
}[] = [
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/",
    icon: "linkedin",
  },
  {
    label: "Email Rebecca",
    href: "mailto:sw6543@nyu.edu",
    icon: "mail",
  },
  {
    label: "GitHub profile",
    href: "https://github.com/",
    icon: "github",
  },
];
