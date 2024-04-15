import { BsArrowRight } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="flex justify-between lg:justify-around items-center h-20 sm:px-10 lg:px-20">
        <div className="">
            <h2 className='text-slate-800 font-urbanist text-4xl font-semibold'>Maruf</h2>
        </div>

        <ul className="hidden relative lg:flex items-center px-12 rounded-t-[-2xl] rounded-b-[50px] gap-10 bg-[#070707] h-full">
            <li className="list-none font-urbanist text-white"><a href="">Home</a></li>
            <li className="list-none font-urbanist text-white"><a href="">About</a></li>
            <li className="list-none font-urbanist text-white"><a href="">Skills</a></li>
            <li className="list-none font-urbanist text-white"><a href="">Portfolio</a></li>
            <div className="w-16 rounded-tl-full border-t-[20px] border-l-[20px] border-[#070707] bg-[#F8F6DF] h-14 absolute top-[-20px] right-[-44px]"></div>
            <div className="w-16 rounded-tr-full border-t-[20px] border-r-[20px] border-[#070707] bg-[#F8F6DF] h-14 absolute top-[-20px] left-[-44px]"></div>
        </ul>


        <div className="">
            <button className="font-urbanist font-medium py-2 px-4 border border-[#070707] rounded-md flex items-center gap-2 hover:text-orange-500 duration-300">Contact Me <BsArrowRight /></button>
        </div>
    </nav>
  )
}

export default Navbar