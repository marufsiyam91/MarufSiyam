import { TbLocationFilled } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const ContactCart = () => {
  return (
    <div className="flex justify-between sm:p-6 flex-col md:flex-row lg:flex-col gap-4 w-full xl:w-1/2">
        <div className='flex md:flex-col lg:flex-row md:items-start lg:items-center gap-2 sm:gap-4 group/icon'>
            <div className='text-white w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center text-xl sm:text-2xl rounded-full bg-slate-600'>
                <span className="group-hover/icon:-translate-y-[3px] transition"><TbLocationFilled/></span>
            </div>
            <div>
                <h3 className="font-urbanist text-2xl text-black font-bold mb-2">Address:</h3>
                <p className='font-primary text-black font-semibold'>Abdullahpur, Keraniganj</p>
                <p className='font-primary text-black font-semibold'>Dhaka-1311</p>
            </div>
        </div>

        <div className='flex md:flex-col lg:flex-row md:items-start lg:items-center gap-2 sm:gap-4 group/icon'>
            <div className='text-white w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center text-xl sm:text-2xl rounded-full bg-slate-600'>
                <span className="group-hover/icon:-translate-y-[3px] transition"><IoMail/></span>
            </div>
            <div>
                <h3 className="font-urbanist text-2xl text-black font-bold mb-2">Email:</h3>
                <p className='font-primary text-black font-semibold'>marufsiyam9123@gmail.com</p>
                <p className='font-primary text-black font-semibold'>example@gmail.com</p>
            </div>
        </div>

        <div className='flex md:flex-col lg:flex-row md:items-start lg:items-center gap-2 sm:gap-4 group/icon'>
            <div className='text-white w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center text-xl sm:text-2xl rounded-full bg-slate-600'>
                <span className="group-hover/icon:-translate-y-[3px] transition"><FaPhone/></span>
            </div>
            <div>
                <h3 className="font-urbanist text-2xl text-black font-bold mb-2">Phone:</h3>
                <p className='font-primary text-black font-semibold'>+880 1826096711</p>
            </div>
        </div>
    </div>
  )
}

export default ContactCart