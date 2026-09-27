import type { SocialIconName } from "@/components/SocialIcon";

export const brandName = "Rebecca Wang";

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
    href: "https://www.linkedin.com/in/rebecca-wang-b7233b307/",
    icon: "linkedin",
  },
  {
    label: "Email Rebecca",
    href: "mailto:rebeccashinyan@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub profile",
    href: "https://github.com/rebeccashinyan",
    icon: "github",
  },
];
