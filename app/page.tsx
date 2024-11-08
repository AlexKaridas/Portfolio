import Image from "next/image";
import Project from "@/components/Project";
import { BackgroundBeams } from "@/components/ui/background-beams";
import SkillCard from "@/components/SkillCard";
import { FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative z-20 flex flex-col gap-40 items-center pl-0 md:pl-24 md:pr-24 w-full h-full">
      <section className="relative w-full h-full p-0 m-0 flex flex-col my-40 gap-40 sm:my-0 sm:gap-0">
        {/* Profile Image and description */}
        <div className="relative sm:min-h-screen flex items-center justify-center">
        {/*<BackgroundBeams className="absolute inset-0" />*/}
          <div className="flex flex-col md:flex-row items-center justify-center z-20">
            <div className="relative flex w-[256px] h-[256px] rounded-full md:mr-10">
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                fill={true}
                className="rounded-full ring-2 ring-gray-100"
                priority={true}
                sizes="256px"
              />
            </div>
            <div className="flex mt-5 flex-col md:mt-0 items-center justify-center">
              <h1 className="items-center justify-center text-3xl font-bold">
                👋 Alexandros Karydas
              </h1>
              <div className="flex items-center md:pl-14 mt-3">
              {/*<FaReact size={30} color="lightblue" />*/}
                <p className="text-lg ml-2 ">Web Developer | Software Engineer</p>
              </div>

            </div>
          </div>
        </div>
        {/* Skills */}
        <section className="flex flex-col gap-5 sm:mx-0 mx-5">
          <h2 className="text-3xl font-extralight md:ml-0" >Skills</h2>
          <div className="grid grid-cols-2 mx-0 sm:mx-0 sm:grid-cols-3 gap-5 mt-14">
            <SkillCard skill="Next.js" category="Web Development" />
            <SkillCard skill="React.js" category="Web Development" />
            <SkillCard skill="React Native" category="App Development" />
            <SkillCard skill="Scss" category="Web Development" />
            <SkillCard skill="Typescript" category="Web Development" />
            <SkillCard skill="Tailwind" category="Web Development" />
            <SkillCard skill="HTML5" category="Web Development" />
            <SkillCard skill="CSS" category="Web Development" />
            <SkillCard skill="Javascript" category="Web Development" />
            <SkillCard skill="Expo" category="App Development" />
            <SkillCard skill="Rust" category="Backend | Software Development" />
          </div>
        </section>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col relative mb-24 items-start justify-start" id={'projects'}>
        <h2 className="text-3xl font-extralight ml-11 md:ml-0" >My Projects</h2>
        <Project
          imageSource={"/stonevilla.png"}
          imageAlt={"stovevilla.online screenshot"}
          link={"https://www.stonevillamouzaki.online/"}
          title={"Airbnb Stone Villa Landing Page"}
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
