import Image from "next/image";
import Link from "next/link";

const Project = ({ imageSource, imageAlt, title, description, link }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start gap-20 items-center mt-14 mb-24 w-full">
      <Link className="relative flex justify-start items-start h-[300px] w-3/4 sm:mx-0 sm:w-1/2" href={`${link}`} target="_blank">
        <Image
          src={imageSource}
          alt={imageAlt}
          fill
          className="ring-1 ring-gray-100 ring-opacity-30 hover:ring-sky-200 transition-all duration-300 rounded-xl object-contain sm:object-cover sm:object-top"
        />
      </Link>
      <div className="flex flex-col justify-start items-start w-3/4 sm:w-1/2">
        <h2 className="text-xl font-medium hover:text-sky-200	transition-all">
          <Link href={`${link}`} target="_blank">
            {title}
          </Link>
        </h2>
        <p className="text-md mt-5 font-extralight">{description}</p>
      </div>
    </div>
  );
};
export default Project;
