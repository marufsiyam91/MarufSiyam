import Project from "../Components/Project"
import taskly from '../assets/taskly.png'
import fazzfood from '../assets/faazfood.png'
import travic from '../assets/travic website.png'
import SectionBtn from './../Components/SectionBtn';


const Portfolio = () => {



  return (
    <div className="py-20 max-w-screen-4xl mx-auto lg:px-6 px-4">
      <div className="flex justify-center mb-12">
        <SectionBtn>Portfolio</SectionBtn>
      </div>
        <div className="flex md:flex-row flex-col w-full gap-6">
            <Project image={fazzfood} title={'Taskly'} liveLink={'https://faazfood.netlify.app/'} gitLink={'https://github.com/marufsiyam91/faazfood'}/>
            <Project image={travic} title={'Taskly'} liveLink={'https://travik-booking.netlify.app/'} gitLink={'https://github.com/marufsiyam91/Travel_Booking'}/>
        </div>
        <div className="relative w-full md:w-[70%] mx-auto mt-8">
          <img className="w-full h-full rounded-xl" src={taskly} alt="" />
          <div className="rounded-xl absolute flex flex-col sm:flex-row w-full h-full top-0 left-0 bg-orange-400 bg-opacity-60 opacity-0 transition-opacity duration-150 delay-200 hover:flex items-center justify-center gap-4 hover:opacity-100">
            <button className=" hover:scale-[1.1] transition duration-300 bg-slate-50 hover:text-orange-500 text-md sm:text-lg font-semibold px-4 py-2 rounded-xl font-urbanist">
              <a href="https://taskly-tasker.netlify.app/" target="_blank">Live View</a>
            </button>
            <button className=" hover:scale-[1.1] transition duration-300 bg-slate-50 hover:text-orange-500 text-md sm:text-lg font-semibold px-4 py-2 rounded-xl font-urbanist">
              <a href="https://github.com/marufsiyam91/Taskly" target="_blank">Client Code</a>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Portfolio