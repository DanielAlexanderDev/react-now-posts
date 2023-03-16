import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className=" flex flex-col md:flex-row md:justify-evenly items-start justify-center md:items-center gap-y-2 md:h-[10vh] p-4">
      <div className="flex items-center">
        <h2 className="text-3xl font-normal  text-gray-500 whitespace-nowrap">
          now
        </h2>
        <BiCopyright size={"0.8em"} />
      </div>
      <p className=" text-lg font-thin">
        Developed by
        <span className="italic font-medium"> Daniel Alexander</span>
      </p>
      <div className="flex items-center justify-center gap-x-4">
        <a target="_blank" href="https://www.github.com/DanielAlexanderDev">
          <BsGithub size={"1.8em"} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/daniel-llumiquinga-campoverde-4ab0a91b9/"
        >
          <BsLinkedin size={"1.8em"} />
        </a>
      </div>
    </footer>
  );
};
