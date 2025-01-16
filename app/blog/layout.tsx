// app/blog/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Arnold Delavega Blog",
    default: "Blog | Arnold Delavega",
  },
  description: "Personal blog about software development and technology",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Common header or navigation could go here */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          {children}
        </div>
        {/* Common footer could go here */}
      </div>
    </main>
  );
}
