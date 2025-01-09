"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import ViewCount from "@/components/ViewCount";

import trackVisit from "../utils/trackVisit";
import MoviesAPIWindow from "@/components/MovieAPIWindow";

export default function Home() {
  useEffect(() => {
    trackVisit();
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-full inline-block text-center justify-center">
        <span className={title()}>Hello, I'm Arnold,&nbsp;</span>
        <br />

        <span className={title()}>And this page has been viewed </span>
        <span className={title({ color: "violet" })}>
          <ViewCount />
          &nbsp;{" "}
        </span>
        <br />
        <span className={title()}>times.</span>
      </div>
      <div className="w-full flex gap-3 mt-5 items-center justify-center">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
        <div className="flex flex-col items-center text-center mt-5">
          <h2 className={`${title({ color: "violet" })}`}>Skills</h2>
          <span className={subtitle()}>
            <ul className="md: list-disc list-inside text-left inline-block mx-auto">
              <li>Azure</li>
              <li>Microsoft 365 (GCCH)</li>
              <li>Networking</li>
              <li>NIST 800-171</li>
              <li>IaC (Azure Bicep)</li>
              <li>Powershell & Bash</li>
              <li>Endpoint Security</li>
              <li>Cloud Migration</li>
            </ul>
          </span>
        </div>
        <div>
          <div className="flex flex-col items-center text-center mt-5">
            <h2 className={`${title({ color: "violet" })}`}>Certs</h2>
            <span className={subtitle()}>
              <ul className="md: list-disc list-inside text-left inline-block mx-auto">
                <li>CCNA 200-301</li>
                <li>AZ-104</li>
                <li>AZ-305</li>
                <li>AZ-500</li>
                <li>SC-300</li>
                <li>CompTIA Network+</li>
                <li>CompTIA Security+</li>
                <li>PCNSA (Palo Alto)</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
