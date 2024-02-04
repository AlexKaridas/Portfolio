import Image from "next/image";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen  items-start pl-24 pr-24 w-full h-full">
      <div className="flex items-center h-[90vh] justify-center">
        <div className="relative flex w-[180px] h-[180px] rounded-full mr-10">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill={true}
            className="rounded-full ring-2 ring-gray-100"
          />
        </div>
        <div className="flex-col">
          <h1 className="text-3xl font-bold">👋 Alexander The Great Karydas</h1>
          <p className="text-lg pl-14">Front-End Web Developer</p>
          <div className="pt-2 pl-14 flex flex-row overflow-hidden">
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[2px] py-[2px] mx-1">
              Next.js
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[2px] py-[2px] mx-1">
              React.js
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[2px] py-[2px] mx-1">
              React Native
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[2px] py-[2px] mx-1">
              Scss
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[2px] py-[2px] mx-1">
              Typescript
            </p>
            <p className="bg-gray-100 text-black font-bold text-xs rounded-md px-[2px] py-[2px] mx-1">
              Tailwind
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative mt-10 mb-24">
        <h2 className="text-2xl font-bold">My Projects</h2>
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
