import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 py-8 border border-red-600 md:py-10">
      <div className="w-full inline-block text-center justify-center">
        <span className={title()}>Hello, I'm Arnold,&nbsp;</span>
        <br />
        <span className={title()}>And this page has been viewed </span>
        <span className={title({ color: "violet" })}>3003&nbsp;</span>
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
        <div className="items-center text-center mt-5">
          <h2 className={`${title({ color: "violet" })}`}>Skills</h2>
          <span className={subtitle()}>
            <ul className="list-disc pl-5 text-left md:mx-40">
              <li>GCCH Administration</li>
              <li>Azure</li>
              <li>Intune</li>
              <li>NIST 800-171</li>
              <li>IaC</li>
              <li>Bash</li>
            </ul>
          </span>
        </div>
        <div>
          <div className="items-center text-center mt-5">
            <h2 className={`${title({ color: "violet" })}`}>Certs</h2>
            <span className={subtitle()}>
              <ul className="list-disc pl-5 mx-auto md:mx-40 text-left md:text-left">
                <li>CompTIA Network+</li>
                <li>CompTIA Security+</li>
                <li>AZ-104</li>
                <li>AZ-305</li>
                <li>SC-300</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
