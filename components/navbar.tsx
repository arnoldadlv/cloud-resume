"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
import { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Track which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  // Track if component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side only rendering to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const handleDropdownOpenChange = (isOpen: boolean, index: number) => {
    setOpenDropdown(isOpen ? index : null);
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">De La Vega</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href || `dropdown-${index}`}>
              {isMounted && item.children ? (
                <Dropdown
                  isOpen={openDropdown === index}
                  onOpenChange={(isOpen) =>
                    handleDropdownOpenChange(isOpen, index)
                  }
                >
                  <DropdownTrigger>
                    <button
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium",
                        "px-4 py-2 rounded-lg hover:bg-default-100 transition-colors flex items-center gap-1"
                      )}
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`ml-1 transition-transform duration-200 ${openDropdown === index ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label={`${item.label} dropdown`}
                    className="bg-background border-1 border-default-200 shadow-lg z-50"
                  >
                    {item.children.map((child) => (
                      <DropdownItem
                        key={child.href}
                        className="hover:bg-default-100 rounded-md px-3 py-2"
                      >
                        <NextLink
                          href={child.href}
                          className="w-full block"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </NextLink>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium px-4 py-2 rounded-lg hover:bg-default-100 transition-colors"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              )}
              {!isMounted && item.children && (
                <button
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                    "px-4 py-2 rounded-lg hover:bg-default-100 transition-colors flex items-center gap-1"
                  )}
                >
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href || index}`}>
              {isMounted && item.children ? (
                <div className="flex flex-col">
                  <span className="font-medium text-foreground py-2">
                    {item.label}
                  </span>
                  <div className="ml-3 flex flex-col border-l-2 border-default-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        as={NextLink}
                        href={child.href}
                        className="text-sm py-1.5 pl-3 hover:bg-default-50 rounded-r-md"
                        onPress={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  as={NextLink}
                  className="w-full"
                  href={item.href}
                  color={
                    index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  size="lg"
                  onPress={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
              {!isMounted && item.children && (
                <div className="flex flex-col">
                  <span className="font-medium text-foreground py-2">
                    {item.label}
                  </span>
                </div>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
