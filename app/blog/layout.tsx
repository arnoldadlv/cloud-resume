// app/blog/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Arnold Delavega Blog",
    default: "Blog | Arnold Delavega",
  },
  description: "Personal blog about everything tech",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="container">
        {/* Common header or navigation could go here */}
        <div className="rounded-xl shadow-sm p-8 md:p-12">{children}</div>
        {/* Common footer could go here */}
      </div>
    </main>
  );
}
