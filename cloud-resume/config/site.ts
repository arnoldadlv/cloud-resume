export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "https://arnolddelavega.com",
    },
    {
      label: "Resume (PDF)",
      href: "/resume/resume.pdf",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact Me",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Resume (PDF)",
      href: "/resume",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact Me",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/arnoldadlv",
  },
};
