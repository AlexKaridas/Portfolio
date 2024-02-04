import Image from "next/image";
import Link from "next/link";

const Project = ({ imageSource, imageAlt, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row mt-14 md:mt-24 mb-24">
      <div className="flex items-start w-4/4 md:w-2/4">
        <Image
          src={imageSource}
          alt={imageAlt}
          width={300}
          height={300}
          className="ring-1 ring-gray-100 rounded-sm md:mb-0 mb-5"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-3/4">
        <h2 className="text-lg font-semibold hover:text-sky-200	transition-all">
          <Link href="https://www.stonevillamouzaki.online/" target="_blank">
            {title}
          </Link>
        </h2>
        <p className="text-sm mt-5">{description}</p>
      </div>
    </div>
  );
};
export default Project;
