import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import AnimatedElement from "@/components/AnimatedElement";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <AnimatedElement>
              <footer className="w-full flex flex-col items-center justify-center py-3">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <Link
                    href="mailto:arnolddlvs@gmail.com"
                    className="text-blue-500"
                  >
                    arnolddlvs@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <Link href="tel:+12066818920" className="text-blue-500">
                    +1 (206)-681-8920
                  </Link>
                </div>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="/"
                >
                  <span className="text-default-600">Made by </span>
                  <p className="text-primary">Arnold</p>
                </Link>
              </footer>
            </AnimatedElement>
          </div>
        </Providers>
      </body>
    </html>
  );
}
