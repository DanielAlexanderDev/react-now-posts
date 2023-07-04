import { CopyrightSVG, GithubSVG, LinkedinSVG } from '@/icons/social'

export const Footer = () => {
  return (
    <footer className=" bg-[#2D333B] w-full lg:max-h-[10vh] p-4 lg:px-3 mx-auto">
      <div className="container flex flex-col lg:flex-row lg:justify-between items-start justify-center lg:items-center gap-y-2 mx-auto">
        <div className="flex items-center">
          <h2 className="text-3xl font-normal  text-gray-400 whitespace-nowrap">
            now
          </h2>
          <CopyrightSVG size="0.8em" className="fill-gray-400" />
        </div>
        <p className=" text-lg font-thin text-gray-300">
          Developed by
          <span className="italic font-medium"> Daniel Alexander</span>
        </p>
        <div className="flex items-center justify-center gap-x-4 ">
          <a target="_blank" href="https://www.github.com/DanielAlexanderDev">
            <GithubSVG size="1.8em" className="fill-gray-400" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/daniel-llumiquinga-campoverde-4ab0a91b9/"
          >
            <LinkedinSVG size="1.8em" className="fill-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  )
}
