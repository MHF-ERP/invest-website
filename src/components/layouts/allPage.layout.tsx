export default function AllPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" bg-main flex  h-screen max-w-screen">{children}</main>
  );
}
