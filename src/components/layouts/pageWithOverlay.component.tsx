export default function PageWithOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="  flex  h-screen max-w-screen  bg-[#0C111D]">
      {children}
    </main>
  );
}
