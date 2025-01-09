export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto max-w-6xl pt-6 px-12 flex-grow">
      {children}
    </main>
  );
}
