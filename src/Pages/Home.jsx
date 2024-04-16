import Navbar from "../Components/Navbar/Navbar"
import profile from '../assets/maruf_siyam.png'


const Home = () => {
  return (
    <div className="p-4 lg:p-6">
        <div className="h-auto sm:h-[80vh] lg:h-[100vh] bg-[#F8F6DF] rounded-[20px] lg:rounded-[30px] overflow-hidden">
            <Navbar/>

            <div className="mx-auto py-4 w-full h-[40vh] sm:h-[calc(80vh-80px)] lg:h-[calc(100vh-80px)] relative justify-center flex flex-col">
              <h2 className="mt-16 font-primary font-bold text-[2.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] 2xl:text-[10rem] text-center leading-4 sm:leading-10">HI THERE I'M</h2>
              <h2 className="font-primary font-bold text-[2.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] 2xl:text-[10rem] text-center mt-4">MAR<span id="text_stroke" className="relative z-10 text-transparent .text-stroke-black">UF SI</span>YAM</h2>

              <div className="flex justify-center relative z-10 gap-4 sm:gap-[100px] mt-8">
                <p className="font-cursive text-xl sm:text-2xl lg:text-3xl text-slate-200">Frontend Developer</p>
                <p className="font-cursive text-xl sm:text-2xl lg:text-3xl text-slate-200">Based in Dhaka</p>
              </div>
              <div>
                <img className="max-h-full sm:max-h-full lg:max-h-full absolute bottom-0 right-[50%] translate-x-[50%]"  src={profile} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home