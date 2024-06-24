import Image from "next/image";
import Link from "next/link";

const Project = ({ imageSource, imageAlt, title, description, link }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start gap-20 items-center mt-14 md:mt-24 mb-24 w-full">
      <div className="relative flex justify-start items-start h-[300px] w-3/4 sm:mx-0 sm:w-1/2">
        <Image
          src={ imageSource }
          alt={ imageAlt }
          fill
          className="ring-1 ring-gray-100 rounded-sm object-contain sm:object-cover sm:object-top"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-3/4 sm:w-1/2">
        <h2 className="text-lg font-bold sm:font-semibold hover:text-sky-200	transition-all">
          <Link href={ `${link}` } target="_blank">
            { title }
          </Link>
        </h2>
        <p className="text-sm mt-5">{ description }</p>
      </div>
    </div>
  );
};
export default Project;
