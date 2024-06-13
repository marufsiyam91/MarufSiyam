import SectionBtn from "../Components/SectionBtn"
import Skillset from "../Components/Skillset"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";








const Skills = () => {
  return (
    <div id="skills" className="max-w-screen-4xl mx-auto h-full flex flex-col items-center py-20 px-4 esm:px-8 sm:px-10 lg:px-20">
        <SectionBtn>My Skills</SectionBtn>
        <h2 className="text-white font-urbanist font-semibold text-xl text-center lg:text-start sm:text-2xl lg:text-3xl mt-12 indent-16 sm:indent-20 md:indent-30 lg:indent-40 leading-10">Elevating User Experiences: A Frontend Developer's Portfolio Spotlight. A Fresh Perspective in Interactive Design and Collaborative Endeavors</h2>

        <div className="flex gap-4 esm:gap-8 p-4 lg:p-8 flex-wrap justify-center">
            <Skillset icon={<FaHtml5 />} title={'HTML'} color={'#FC4F13'}/>
            <Skillset icon={<IoLogoCss3 />} title={'CSS'} color={'#0899DD'}/>
            <Skillset icon={<SiTailwindcss  />} title={'TAILWIND'} color={'#3EBFF8'}/>
            <Skillset icon={<IoLogoJavascript />} title={'JAVASCRIPT'} color={'#FFDF2B'}/>
            <Skillset icon={<IoLogoReact />} title={'REACT'} color={'#08D9FF'}/>
            <Skillset icon={<FaGitAlt />} title={'GIT'} color={'#F05539'}/>
            <Skillset icon={<IoLogoFirebase />} title={'FIREBASE'} color={'#FFCD35'}/>
        </div>
    </div>
  )
}

export default Skills