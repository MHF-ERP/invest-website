"use client";
import Process from "./process/process.component";

export default function LeftSection() {
  return (
    <div
      className="h-full relative  overflow-hidden xl:flex lg:flex md:flex  hidden rounded-xl bg-[url('/images/login/Section2.png')]   "
      style={{ width: "500px" }}
    >
      <Process />
    </div>
  );
}
