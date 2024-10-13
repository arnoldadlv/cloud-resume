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
      href: "https://blog.arnolddelavega.com",
    },
    {
      label: "Resume (PDF)",
      href: "/resume.pdf",
    },
    {
      label: "Movies API",
      href: "/movies-api",
    },
    {
      label: "Contact Me",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Blog",
      href: "https://blog.arnolddelavega.com",
    },
    {
      label: "Resume (PDF)",
      href: "/resume.pdf",
    },

    {
      label: "Movies API",
      href: "/movies-api",
    },
    {
      label: "Contact Me",
      href: "tel:+12066818920",
    },
  ],
  links: {
    github: "https://github.com/arnoldadlv",
  },
};
