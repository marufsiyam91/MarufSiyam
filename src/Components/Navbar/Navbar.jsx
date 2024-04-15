import { BsArrowRight } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-20">
        <div>
            <h2 className='text-slate-800 font-urbanist text-2xl font-semibold'>Maruf</h2>
        </div>

        <ul className="hidden relative md:flex items-center px-12 rounded-t-[-2xl] rounded-b-[50px] gap-10 bg-[#212121] h-full">
            <li className="list-none font-urbanist text-slate-100"><a href="">Home</a></li>
            <li className="list-none font-urbanist text-slate-100"><a href="">About</a></li>
            <li className="list-none font-urbanist text-slate-100"><a href="">Skills</a></li>
            <li className="list-none font-urbanist text-slate-100"><a href="">Portfolio</a></li>
            <div className="w-16 rounded-tl-full border-t-[20px] border-l-[20px] border-[#212121] bg-[#F8F6DF] h-14 absolute top-[-20px] right-[-44px]"></div>
            <div className="w-16 rounded-tr-full border-t-[20px] border-r-[20px] border-[#212121] bg-[#F8F6DF] h-14 absolute top-[-20px] left-[-44px]"></div>
        </ul>

        <div>
            <button className="font-urbanist font-medium py-2 px-4 border border-[#212121] rounded-md flex items-center gap-2 hover:text-orange-500 duration-300">Contact Me <BsArrowRight /></button>
        </div>
    </nav>
  )
}

export default Navbar