import About_info from "../About_info"
import { FaFacebookF, FaDiscord, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";






const About_info_card = () => {
  return (
    <div className="w-full h-[320px] esm:[400px] sm:h-[500px] bg-[#000000] p-4 esm:p-10 2xl:p-16 rounded-xl flex flex-col justify-between">
        <About_info title={'Name'} info={'Md. Maruf Hossain Siyam'}/>
        <About_info title={'Email'} info={'marufsiyam9123@gmail.com'}/>
        <About_info title={'Phone'} info={'+880 1826096711'}/>
        <About_info title={'Address'} info={'Keranigonj, Dhaka'}/>
        <div className="flex items-center justify-between">
            <p className="text-white font-urbanist text-lg esm:text-xl lg:text-2xl">Follow Me</p>

            <div className="flex gap-2 lg:gap-4">
                <div className="text-white w-6 esm:w-8 lg:w-10 h-6 esm:h-8 lg:h-10 bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300"><FaFacebookF /></div>
                <div className="text-white w-6 esm:w-8 lg:w-10 h-6 esm:h-8 lg:h-10 bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300"><FaLinkedinIn /></div>
                <div className="text-white w-6 esm:w-8 lg:w-10 h-6 esm:h-8 lg:h-10 bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300"><FaDiscord /></div>
                <div className="text-white w-6 esm:w-8 lg:w-10 h-6 esm:h-8 lg:h-10 bg-slate-600 flex items-center justify-center rounded-full hover:bg-orange-100 hover:text-stone-900 duration-300"><FaGithub /></div>
            </div>
        </div>
    </div>
  )
}

export default About_info_card