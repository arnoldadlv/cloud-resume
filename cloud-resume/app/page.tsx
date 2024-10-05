import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Hello, I'm Arnold,&nbsp;</span>
        <br />
        <span className={title()}>And this page has been viewed </span>
        <span className={title({ color: "violet" })}>3003&nbsp;</span>
        <br />
        <span className={title()}>times.</span>
      </div>

      <div className="flex gap-3 mt-5">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="items-center text-center mt-5">
        <h2 className={`${title({ color: "violet" })}`}>Skills</h2>
        <span className={subtitle()}>
          <ul className="list-disc text-left">
            <li>GCCH Administration</li>
            <li>Azure</li>
            <li>Intune</li>
            <li>NIST 800-171</li>
            <li>IaC</li>
            <li>Bash</li>
          </ul>
        </span>
        <div className="items-center text-center mt-5">
          <h2 className={`${title({ color: "violet" })}`}>Certifications</h2>
          <span className={subtitle()}>
            <ul className="list-disc text-left">
              <li>CompTIA Network+</li>
              <li>CompTIA Security+</li>
              <li>AZ-104</li>
              <li>AZ-305</li>
              <li>SC-300</li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
}
