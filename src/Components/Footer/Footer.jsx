import { FaFacebookF, FaDiscord, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="max-w-screen-4xl mx-auto flex lg:flex-row flex-col h-auto ga-4 items-center justify-between p-4 lg:p-12 relative">
      <div className="flex-1">
        <h2 className="text-slate-50 text-md lg:text-xl text-center">@2024 - All Rights Reserved Maruf Siyam</h2>
      </div>
      <div className="flex gap-3 lg:gap-4">
        <div className="text-white w-8 h-8 text-md bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300">
          <FaFacebookF />
        </div>
        <div className="text-white w-8 h-8 text-md bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300">
          <FaLinkedinIn />
        </div>
        <div className="text-white w-8 h-8 text-md bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300">
          <FaDiscord />
        </div>
        <div className="text-white w-8 h-8 text-md bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300">
          <FaGithub />
        </div>
      </div>

      <div className="flex-1 flex justify-end lg:relative absolute right-8 bottom-2">
        <div className="text-slate-800 bg-orange-50 border w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center rounded-full text-md lg:text-[1.2rem]">
        <AnchorLink href="#home">
            <FaArrowUpLong />
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
