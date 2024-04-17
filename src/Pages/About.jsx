import About_info_card from "../Components/About_info_card/About_info_card"
import about_profile from '../assets/1692521537641.jpeg'
import SectionBtn from './../Components/SectionBtn';


const About = () => {
  return (
    <div className="max-w-screen-4xl mx-auto h-full flex flex-col items-center py-20 px-4 esm:px-8 lg:px-10">
            <SectionBtn>About Me</SectionBtn>

            <div className="mt-12 text-center">
                <h2 className="text-white font-urbanist font-semibold text-xl sm:text-2xl lg:text-3xl mb-2">Assalamualaikum ! I'm Maruf Siyam, a frontend web developer Based in Dhaka.</h2>
                <h2 className="text-white font-urbanist font-semibold text-xl sm:text-2xl lg:text-3xl">Passionate about turning imaginative designs into seamless and responsive user interfaces.</h2>
            </div>
            
            <div className="flex flex-col xl:flex-row gap-8 w-full mt-12 xl:mt-16">
                <div className="w-full xl:w-1/2">
                    <About_info_card/>
                </div>
                <div className=" h-[320px] esm:[400px] sm:h-[500px] w-full xl:w-1/2 rounded-xl  overflow-hidden">
                    <img className="object-cover max-h-full w-full rounded-xl" src={about_profile} alt="" />
                </div>
            </div>
    </div>
  )
}

export default About