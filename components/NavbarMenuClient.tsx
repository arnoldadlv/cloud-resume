"use client";
import React, { useState } from "react";
import {
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { Input } from "@nextui-org/input";

const NavbarMenuClient = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      placeholder="Search..."
    />
  );

  return (
    <>
      <NavbarMenuToggle onClick={() => setIsDropDownOpen(!isDropDownOpen)} />
      {isDropDownOpen && (
        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  onClick={() => setIsDropDownOpen(false)}
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      )}
    </>
  );
};

export default NavbarMenuClient;
