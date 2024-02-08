export default function PopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center absolute top-0 left-0 z-50">
      <div className="p-[24px] w-[480px] h-fit bg-white rounded-[12px] ">
        {children}
      </div>
    </div>
  );
}
