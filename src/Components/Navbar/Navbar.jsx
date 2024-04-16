import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaFacebookF, FaDiscord, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";





const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  const mobileMenu = showNavbar ? 'lg:hidden w-full esm:w-[320px] h-[100vh] top-0 right-0 flex flex-col justify-evenly py-10 fixed bg-slate-100 dutation-300' : 'lg:hidden w-[320px] h-[100vh] top-0 right-[-200%] flex flex-col justify-evenly py-10 fixed bg-slate-100 dutation-300'
  const closeBtn = showNavbar ? 'fixed top-8 right-4' : 'right-[-200%]'



  return (
    <nav className="relative z-40 flex justify-between lg:justify-around items-center h-20 px-8 lg:px-20">
        <div className="">
            <h2 className='text-slate-800 font-urbanist text-4xl font-semibold'>Maruf</h2>
        </div>

        <ul className="hidden relative lg:flex items-center px-12 rounded-t-[-2xl] rounded-b-[50px] gap-10 bg-[#070707] h-full">
            <li className="list-none font-urbanist text-white"><a href="">Home</a></li>
            <li className="list-none font-urbanist text-white"><a href="">About</a></li>
            <li className="list-none font-urbanist text-white"><a href="">Skills</a></li>
            <li className="list-none font-urbanist text-white"><a href="">Portfolio</a></li>
            <div className="w-16 rounded-tl-full border-t-[20px] border-l-[20px] border-[#070707] bg-base h-14 absolute top-[-20px] right-[-44px]"></div>
            <div className="w-16 rounded-tr-full border-t-[20px] border-r-[20px] border-[#070707] bg-base h-14 absolute top-[-20px] left-[-44px]"></div>
        </ul>


        <div className="hidden lg:block">
            <button className="font-urbanist font-medium py-2 px-4 border border-[#070707] rounded-md flex items-center gap-2 hover:text-orange-500 duration-300">Contact Me <BsArrowRight /></button>
        </div>

        <div className="block lg:hidden">
          <span className="text-2xl" onClick={() => setShowNavbar(true)}><IoMdMenu /></span>
        </div>

        <div className={mobileMenu}>
          <div className={closeBtn}>
              <span className="text-2xl" onClick={() => setShowNavbar(false)}><AiOutlineCloseCircle /></span>
          </div>
          <div>
          <h2 className='text-slate-800 font-urbanist text-3xl font-semibold px-4'>Maruf</h2>
          </div>
          <ul className="flex flex-col p-2 gap-2">
            <li className="list-none font-urbanist font-semibold text-black py-2 px-4 hover:bg-orange-50 duration-300 rounded-md"><a href="">Home</a></li>
            <li className="list-none font-urbanist font-semibold text-black py-2 px-4 hover:bg-orange-50 duration-300 rounded-md"><a href="">About</a></li>
            <li className="list-none font-urbanist font-semibold text-black py-2 px-4 hover:bg-orange-50 duration-300 rounded-md"><a href="">Skills</a></li>
            <li className="list-none font-urbanist font-semibold text-black py-2 px-4 hover:bg-orange-50 duration-300 rounded-md"><a href="">Portfolio</a></li>
          </ul>

          <div className="px-4">
            <h3 className="font-urbanist text-2xl mb-4">Contact</h3>
            <p className="font-urbanist mt-2">Abdullahpur, keranigonj</p>
            <p className="font-urbanist mt-2">Dhaka - 1311</p>
            <p className="font-urbanist mt-2">marufsiyam9123@gmail.com</p>
            <p className="font-urbanist mt-2">+880 126096711</p>

            <div className="flex gap-4 mt-2">
                <div className="text-white w-8 h-8 text-md bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300"><FaFacebookF /></div>
                <div className="text-white w-8 h-8 text-md bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300"><FaLinkedinIn /></div>
                <div className="text-white w-8 h-8 text-md bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300"><FaDiscord /></div>
                <div className="text-white w-8 h-8 text-md bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300"><FaGithub /></div>
            </div>
          </div>

        </div>
    </nav>
  )
}

export default Navbar