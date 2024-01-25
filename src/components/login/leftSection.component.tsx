import Image from "next/image";

export default function LeftSection() {
  return (
    <div className="h-full py-3 w-1/2 overflow-hidden md:flex md:flex-col hidden rounded-2xl items-center justify-center bg-cover !bg-[url('/images/login/Section.png')]">
      <Image
        width={450}
        height={450}
        src={"/images/login/Mockup.png"}
        alt="section"
        className="z-10"
        style={{ userSelect: "none" }}
      />
      <Image
        width={350}
        height={350}
        src={"/images/login/title.png"}
        alt="section"
        className="z-10"
        style={{ userSelect: "none" }}
      />
      <p className="text-white z-10 text-center mt-1">
        Start investing today and your future will change <br /> for the better.
      </p>
    </div>
  );
}
