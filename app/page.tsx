import Image from "next/image";
import Project from "@/components/Project";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen items-center pl-0 md:pl-24 md:pr-24 w-full h-full justify-center gap-10 sm:py-32">
      <div className="hidden sm:block fixed inset-0 w-full h-10 bg-black z-20 bg-opacity-10 backdrop-blur-sm">
        <div className="flex gap-6 pr-10 py-2 items-center justify-end">
          <h3 className="border-b-2 border-b-black hover:border-b-purple-700 duration-200">
            <Link href="">Projects</Link>
          </h3>
          <h3 className="border-b-2 border-b-black hover:border-b-purple-700 duration-200">
            <Link href="">Blog</Link>
          </h3>
        </div>
      </div>
      <BackgroundBeams className="absolute inset-0" />
      <div className="flex flex-col md:flex-row items-center justify-center mt-24">
        <div className="relative flex w-[150px] h-[140px] rounded-full md:mr-10">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill={true}
            className="rounded-full ring-2 ring-gray-100"
          />
        </div>
        <div className="flex mt-5 flex-col md:mt-0 items-center justify-center">
          <h1 className="items-center justify-center text-3xl font-bold">
            👋 Alexandros Karydas
          </h1>
          <p className="text-lg ml-0 md:pl-14">Front-End Web Developer</p>
          <div className="pt-2 pl-0 items-center justify-center md:pl-14 flex flex-row overflow-hidden">
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[3px] py-[3px] mx-0">
              Next.js
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[2px] py-[3px] mx-1">
              React.js
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[0px] md:px-[3px] py-[3px] mx-1">
              React Native
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[3px] py-[3px] mx-1">
              Scss
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[3px] py-[3px] mx-1">
              Typescript
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[3px] py-[3px] mx-1">
              Tailwind
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative mb-24 items-start justify-center mt-24 sm:mt-40">
        <h2 className="text-2xl font-bold ml-11 md:ml-0">My Projects</h2>
        <Project
          imageSource={"/stonevilla.png"}
          imageAlt={"stovevilla.online screenshot"}
          title={"stonevillamouzaki.online"}
          description={
            "A beautifull custom AirBnb landing page for an old stone villa in Mouzaki, Greece. Made with Next.js, Scss, and Vercel."
          }
        />
      </div>
    </main>
  );
}
