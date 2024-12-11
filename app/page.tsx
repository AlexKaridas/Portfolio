import Image from "next/image";
import Project from "@/components/Project";
import SkillCard from "@/components/SkillCard";
import Link from "next/link";
import { SiRust } from 'react-icons/si';

export default function Home() {
  return (
    <div className="relative z-20 flex flex-col gap-40 items-center md:items-start pl-0 md:pl-24 md:pr-24 w-full h-full">
      <section className="relative w-full h-full p-0 m-0 flex gap-32 sm:gap-0 flex-col my-40 sm:my-0 ">
        {/* Profile Image and description */}
        <div className="relative sm:min-h-screen flex items-center justify-center">
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
                <p className="text-lg ml-2 ">
                  Web Developer | Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <section className="flex flex-col gap-5 sm:mx-0 mx-5">
          <h2 className="text-3xl font-extralight md:ml-0">Skills</h2>
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
      {/*Highlights*/}
      <section className="flex flex-col gap-5 sm:mx-0 mx-5">
        <h2 className="text-3xl font-extralight md:ml-0">Highlights</h2>
        <div className="grid grid-cols-1 gap-10 grid-rows-2 sm:grid-rows-1 mx-0 sm:mx-0 sm:grid-cols-3 sm:gap-10 mt-14">

          {/*HighlightCard*/}
          <Link href="https://www.credly.com/badges/f6f1c1f0-7d44-410a-a578-0ff7ecccf9df" className="flex-col bg-zinc-900 rounded-lg flex items-center gap-4 p-4 border-gray-800 border z-20 sm:gap-6 sm:p-6">
            <div className="flex-shrink-0">
              <div className="relative  flex items-center justify-center">
                <Image src="/01.jpg" className="rounded-lg" width={450} height={200} alt="Cybersecurity Certificate Image" />
              </div>
            </div>
            <div className="flex flex-row gap-5 items-center justify-center">
              <Image src="/mentormecollective_logo.jpg" className="rounded-lg bg-cover" width={50} height={20} alt="Cybersecurity Certificate Image" />
              <div className="flex flex-col items-start justify-start">
                <p className="font-semibold text-md sm:text-lg text-gray-100">Google CyberSecurity Certificate</p>
                <p className="font-light text-sm sm:text-md text-gray-400">Grow With Google - Coursera</p>
              </div>
            </div>
          </Link>

          {/*HighlightCard*/}
          <Link href="https://adventofcode.com/" className="bg-zinc-900 rounded-lg flex flex-col justify-between h-full items-center gap-4 p-4 border-gray-800 border z-20 sm:gap-12 sm:p-6">
            <div className="relative flex items-center justify-center w-full sm:h-full bg-cover h-full md:h-64 sm:w-full">
              <Image src="/proxy-image.jpg" className="rounded-lg" fill alt="Advent of code image" />
            </div>
            <div className="flex flex-row w-full gap-5 items-center justify-start">
              <div className="relative sm:w-12 sm:h-12 flex items-center justify-center">
                <SiRust className="w-10 h-10" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <p className="font-semibold text-md sm:text-lg text-gray-100">Advent of Code with </p>
                <p className="font-semibold text-md sm:text-lg text-gray-100 flex ">Rust</p>
                <p className="font-light text-sm sm:text-md text-gray-400">Currently in Event 2015 Day04</p>
              </div>
            </div>
          </Link>

        </div>
      </section >

      {/* Projects Section */}
      <section
        className="flex flex-col relative mb-24 items-start justify-start"
        id={"projects"}
      >
        <h2 className="text-3xl font-extralight ml-11 md:ml-0">My Projects</h2>
        <Project
          imageSource={"/stonevilla.png"}
          imageAlt={"stovevilla.online screenshot"}
          link={"https://www.stonevillamouzaki.online/"}
          title={"Airbnb Stone Villa Landing Page"}
          description={"A beautifull custom AirBnb landing page for an old stone villa in Mouzaki, Greece. Made with Next.js, Scss"}
        />
        <Project
          imageSource={"/ancient-olympia.png"}
          imageAlt={"ancientOlympia landing page screenshot"}
          link={"https://ancient-olympia.vercel.app/"}
          title={"Ancient Olympia Landing Page"}
          description={"A landing page for Ancient Olympia, Greece that explores the sites of the ancient city and provides some fun history facts for the ancient city of olympia. Made with Next.js, Tailwind and Typescript."}
        />
      </section>
    </div>
  );
}
