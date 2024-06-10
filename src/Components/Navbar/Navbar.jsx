import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaFacebookF, FaDiscord, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";





const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  // const mobileMenu = showNavbar ? 'lg:hidden w-full esm:w-[320px] h-[100vh] top-0 right-0 flex flex-col justify-evenly py-10 fixed bg-slate-100 dutation-300' : 'lg:hidden w-[320px] h-[100vh] top-0 right-[-200%] flex flex-col justify-evenly py-10 fixed bg-slate-100 dutation-300'
  const mobileMenu = showNavbar 
  ? 'right-0 w-full esm:w-[320px] h-[100vh] top-0 flex flex-col justify-evenly py-10 fixed bg-slate-100 duration-300 transition-all opacity-100'
  : 'right-[-200%] w-[320px] h-[100vh] top-0 flex flex-col justify-evenly py-10 fixed bg-slate-100 duration-300 transition-all opacity-0';

  // const closeBtn = showNavbar ? 'fixed top-8 right-4' : 'right-[-200%]'



  return (
    <nav className="max-w-screen-4xl relative z-40 flex justify-between lg:justify-around items-center h-20 w-full px-8  mx-auto">
        <div className="">
            <h2 className='text-slate-800 font-urbanist text-4xl font-semibold'>Maruf</h2>
        </div>

        <ul className="hidden relative lg:flex items-center px-12 rounded-t-[-2xl] rounded-b-[50px] gap-10 bg-[#070707] h-full">
            <li className="list-none font-urbanist text-white"><AnchorLink href="#home">Home</AnchorLink></li>
            <li className="list-none font-urbanist text-white"><AnchorLink href="#about">About</AnchorLink></li>
            <li className="list-none font-urbanist text-white"><AnchorLink href="#skills">Skills</AnchorLink></li>
            <li className="list-none font-urbanist text-white"><AnchorLink href="#portfolio">Portfolio</AnchorLink></li>
            <div className="w-16 rounded-tl-full border-t-[20px] border-l-[20px] border-[#070707] bg-base h-14 absolute top-[-20px] right-[-44px]"></div>
            <div className="w-16 rounded-tr-full border-t-[20px] border-r-[20px] border-[#070707] bg-base h-14 absolute top-[-20px] left-[-44px]"></div>
        </ul>


        <div className="hidden lg:block">
            <AnchorLink href="#contact" className="font-urbanist font-medium py-2 px-4 border border-[#070707] rounded-md flex items-center gap-2 hover:text-orange-500 duration-300">Contact Me <BsArrowRight /></AnchorLink>
        </div>

        <div className="block lg:hidden">
          <span className="text-3xl" onClick={() => setShowNavbar(true)}><IoMdMenu /></span>
        </div>


<div className="absolute block lg:hidden">

        <div className={mobileMenu}>
          {/* <div className={closeBtn}> */}
          <div className="absolute top-6 right-6">
              <span className="text-3xl" onClick={() => setShowNavbar(false)}><AiOutlineCloseCircle /></span>
          </div>
          <div>
          <h2 className='text-slate-800 font-urbanist text-3xl font-semibold px-4'>Maruf</h2>
          </div>
          <ul className="flex flex-col p-2 gap-2">
            <li className="list-none font-urbanist font-semibold text-black py-2 px-4 hover:bg-orange-50 duration-300 rounded-md"><AnchorLink href="#home">Home</AnchorLink></li>
            <li className="list-none font-urbanist font-semibold text-black py-2 px-4 hover:bg-orange-50 duration-300 rounded-md"><AnchorLink href="#about">About</AnchorLink></li>
            <li className="list-none font-urbanist font-semibold text-black py-2 px-4 hover:bg-orange-50 duration-300 rounded-md"><AnchorLink href="#skills">Skills</AnchorLink></li>
            <li className="list-none font-urbanist font-semibold text-black py-2 px-4 hover:bg-orange-50 duration-300 rounded-md"><AnchorLink href="#portfolio">Portfolio</AnchorLink></li>
          </ul>

          <div className="px-4">
            <AnchorLink href="#contact" className="font-urbanist text-2xl mb-4">Contact</AnchorLink>
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
</div>
    </nav>
  )
}

export default Navbar