import React from "react";

export default function Slider({
  overlay,
  children,
  setOverlay,
}: {
  overlay: number;
  children: React.ReactNode;
  setOverlay: any;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div
      className={` ${
        overlay === 2 && "over"
      } p-[40px] flex flex-col gap-4 absolute top-0 right-0 xl:w-[400px] gl:w-[400px] md:w-[400px] w-[300px] h-full z-[20] bg-white`}
    >
      {children}
    </div>
  );
}
