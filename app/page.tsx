import Image from "next/image";
import Project from "@/components/Project";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="relative z-20 flex flex-col min-h-screen items-center pl-0 md:pl-24 md:pr-24 w-full h-full sm:py-32">
      <BackgroundBeams className="absolute inset-0" />
      {/* Profile Image and description */}
      <section className="">
        <div className="flex flex-col md:flex-row items-center justify-center my-24">
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
            <p className="text-lg ml-0 md:pl-14">React Developer</p>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl">Skills</h2>
        <div className="flex">
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
      </section>
      <section className="flex flex-col relative mb-24 items-start justify-start sm:mt-40" id={'projects'}>
        <h2 className="text-2xl font-bold ml-11 md:ml-0" >My Projects</h2>
        <Project
          imageSource={"/stonevilla.png"}
          imageAlt={"stovevilla.online screenshot"}
          link={"https://www.stonevillamouzaki.online/"}
          title={"stonevillamouzaki.online"}
          description={
            "A beautifull custom AirBnb landing page for an old stone villa in Mouzaki, Greece. Made with Next.js, Scss"
          }
        />
        <Project
          imageSource={"/ancient-olympia.png"}
          imageAlt={"ancientOlympia landing page screenshot"}
          link={"https://ancient-olympia.vercel.app/"}
          title={"Ancient Olympia Landing Page"}
          description={
            "A landing page for Ancient Olympia, Greece that explores the sites of the ancient city and provides some fun history facts for the ancient city of olympia. Made with Next.js, Tailwind and Typescript."
          }
        />
      </section>
    </div>
  );
}
