// import { useNavigate } from "react-router-dom"


const Project = ({image, title, liveLink, gitLink}) => {

    // const navigate = useNavigate()

  return (
    <div className="w-full h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden relative rounded-xl group">
          <img className="relative top-0 left-0 w-full h-auto transition-transform duration-1000 ease-in-out transform lg:group-hover:-translate-y-[calc(100%-450px)] group-hover:-translate-y-[calc(100%-400px)]" src={image} alt="" />
          <div className="absolute flex esm:flex-row flex-col w-full h-[450px] top-0 left-0 bg-orange-400 bg-opacity-60 opacity-0 transition-opacity duration-150 delay-1000 group-hover:flex items-center justify-center gap-4 group-hover:opacity-100">
            <button className=" hover:scale-[1.1] transition duration-300 bg-slate-50 hover:text-orange-500 text-md sm:text-lg font-semibold px-4 py-2 rounded-xl font-urbanist">
              <a href={liveLink} target="_blank">Live View</a>
            </button>
            <button className=" hover:scale-[1.1] transition duration-300 bg-slate-50 hover:text-orange-500 text-md sm:text-lg font-semibold px-4 py-2 rounded-xl font-urbanist">
              <a href={gitLink} target="_blank">Client Code</a>
            </button>
          </div>
    </div>
  )
}

export default Project