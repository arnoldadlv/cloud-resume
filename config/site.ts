export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Arnold De La Vega",
  description: "Systems Administrator",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Portfolio", // Changed from Movies API
      href: "#",
      children: [
        // Added dropdown items
        {
          label: "Movies API",
          href: "/movies-api",
        },
        {
          label: "Azure Tenant Lookup",
          href: "https://www.azuretenantlookup.com",
        },
      ],
    },
  ],
  navMenuItems: [
    // Mirror desktop structure
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Portfolio",
      href: "#",
      children: [
        {
          label: "Movies API",
          href: "/movies-api",
        },
        {
          label: "Azure Tenant Lookup",
          href: "https://www.azuretenantlookup.com",
        },
      ],
    },
  ],
  links: {
    github: "https://github.com/arnoldadlv",
  },
};
