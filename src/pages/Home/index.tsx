import { Link } from 'react-router-dom'
import { QuillPenLineSVG, ShareSquareSVG, UsersSVG } from '@/icons/utils'

const Home = () => {
  return (
    <main className="bg-[#22272E]">
      <section className="bg-gradient-to-r from-slate-300 to-slate-800 py-10 px-3 flex flex-col items-center h-[3/4] ">
        <h2 className=" text-white text-4xl md:text-6xl tracking-wider mt-16 mb-20 font-extrabold uppercase text-center max-w-3/4">
          The place to share what's happening
        </h2>
        <div className="flex justify-center items-center flex-col md:flex-row gap-2 my-6">
          <Link to={'/register'}>
            <button className=" bg-zinc-900 px-4 py-2 rounded text-white text-lg shadow-lg hover:scale-105 transition">
              Get started
            </button>
          </Link>
          <Link to={'/login'}>
            <button className=" bg-white px-4 py-2 rounded text-lg shadow-md hover:scale-105 transition">
              Explore trends
            </button>
          </Link>
        </div>
      </section>
      <section className=" flex justify-center items-center flex-wrap gap-3  mx-6 py-6 px-2 flex-1">
        <div className=" flex flex-col items-center  w-80 min-w-[320px] bg-white text-xl rounded  aspect-video pt-4">
          <QuillPenLineSVG size="1.9em" className="mb-4 fill-zinc-800" />
          <ul>
            <li className=" font-medium text-base text-center"> Create</li>
            <li className=" font-thin text-base text-center">
              250 characteres to print your ideas
            </li>
            <li className=" font-thin text-base text-center">
              Feel free to share anything
            </li>
          </ul>
        </div>
        <div className=" flex flex-col items-center  w-80 min-w-[320px] bg-white text-xl rounded  aspect-video pt-4">
          <ShareSquareSVG size="1.8em" className="mb-4 fill-zinc-800" />
          <ul>
            <li className=" font-medium text-base text-center"> Share</li>
            <li className=" font-thin text-base text-center">
              250 characteres to print your ideas
            </li>
            <li className=" font-thin text-base text-center">
              Feel free to share anything
            </li>
          </ul>
        </div>
        <div className=" flex flex-col items-center  w-80 min-w-[320px] bg-white text-xl rounded  aspect-video pt-4">
          <UsersSVG size="1.8em" className="mb-4 fill-zinc-800" />
          <ul>
            <li className=" font-medium text-base text-center"> Be part of</li>
            <li className=" font-thin text-base text-center">
              250 characteres to print your ideas
            </li>
            <li className=" font-thin text-base text-center">
              Feel free to share anything
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
export default Home
