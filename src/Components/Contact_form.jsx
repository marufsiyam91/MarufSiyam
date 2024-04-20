

const Contact_form = () => {
  return (
    <div className="w-full xl:w-1/2">
        <form className="bg-transparent max-w-full flex flex-col gap-2 sm:gap-4 rounded-2xl">
            <div className="flex gap-2 sm:gap-4 flex-col xl:flex-row">
                <input className="xl:w-1/2 w-full p-4 border rounded-xl bg-white" type="text" name="name" placeholder="Enter Name"/>
                <input className="xl:w-1/2 w-full p-4 border rounded-xl" type="email" name="email" placeholder="Enter Email" />
            </div>

            <div className="flex gap-2 sm:gap-4 flex-col xl:flex-row">
                <input className="xl:w-1/2 w-full p-4 border rounded-xl bg-white" type="text" name="mobile" placeholder="Enter Mobile"/>
                <input className="xl:w-1/2 w-full p-4 border rounded-xl bg-white" type="text" name="subject" placeholder="Enter Subject" />
            </div>

            <textarea className="w-full border p-4 rounded-xl" name="message" cols="30" rows="8"  placeholder="Enter Message"></textarea>
        </form>
    </div>
  )
}

export default Contact_form