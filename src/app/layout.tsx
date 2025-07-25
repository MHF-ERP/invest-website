import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Provider } from "./provider";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apex Stocks",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/smallLogo.png" />
      </head>
      <body>
        <Provider>{children}</Provider>
        <ToastContainer />
        <div className="w-full absolute bottom-0 left-0 right-0 flex justify-center items-center  p-4">
          <span className=" text-gray-300 text-sm flex items-center gap-1">
            Designed and Developed
            <Link href="https://sailentra.com">
              <Image
                src="/images/Sailentra.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </span>
        </div>
      </body>
    </html>
  );
}
