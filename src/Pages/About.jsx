import About_info_card from "../Components/About_info_card/About_info_card"
import about_profile from '../assets/1692521537641.jpeg'


const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center py-20 px-4 esm:px-8 sm:px-20">
            <button className="text-2xl font-urbanist text-orange-200 border py-4 px-6 rounded-[5rem]"> About Me</button>

            <div className="mt-12 text-center">
                <h2 className="text-white font-urbanist font-semibold text-xl sm:text-2xl lg:text-3xl mb-2">Assalamualaikum ! I'm Maruf Siyam, a frontend web developer Based in Dhaka.</h2>
                <h2 className="text-white font-urbanist font-semibold text-xl sm:text-2xl lg:text-3xl">Passionate about turning imaginative designs into seamless and responsive user interfaces.</h2>
            </div>
            
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-4 w-full mt-12 xl:mt-16">
                <div className="w-full xl:w-1/2">
                    <About_info_card/>
                </div>
                <div className=" h-[320px] esm:h-[500px] w-full xl:w-1/2 rounded-xl  overflow-hidden">
                    <img className="object-cover max-h-full w-full rounded-xl" src={about_profile} alt="" />
                </div>
            </div>
    </div>
  )
}

export default About