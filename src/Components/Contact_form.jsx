

const Contact_form = () => {
  return (
    <div className="w-full xl:w-1/2">
        <form className="bg-[#F8F6DF] shadow-[5px_5px_15px_0.2px_rgba(0,0,0,0.2)] max-w-full flex flex-col gap-2 sm:gap-4 p-4 sm:p-8 rounded-2xl">
            <div className="flex gap-2 sm:gap-4 flex-col xl:flex-row">
                <input className="xl:w-1/2 w-full p-4 border rounded-xl" type="text" name="name" placeholder="Enter Name"/>
                <input className="xl:w-1/2 w-full p-4 border rounded-xl" type="email" name="email" placeholder="Enter Email" />
            </div>

            <div className="flex gap-2 sm:gap-4 flex-col xl:flex-row">
                <input className="xl:w-1/2 w-full p-4 border rounded-xl" type="text" name="mobile" placeholder="Enter Mobile"/>
                <input className="xl:w-1/2 w-full p-4 border rounded-xl" type="text" name="subject" placeholder="Enter Subject" />
            </div>

            <textarea className="w-full border p-4 rounded-xl" name="message" cols="30" rows="8"  placeholder="Enter Message"></textarea>
        </form>
    </div>
  )
}

export default Contact_form