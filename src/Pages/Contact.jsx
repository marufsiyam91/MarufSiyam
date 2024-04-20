import SectionBtn from "./../Components/SectionBtn";
import ContactCart from "./../Components/ContactCart";
import Contact_form from "../Components/Contact_form";

const Contact = () => {
  return (
    <div id="contact" className="w-full p-4 lg:p-6">
      <div className=" bg-[#F8F6DF] rounded-[20px] lg:rounded-[30px] overflow-hidden">
        <div className="py-8 xl:py-20 max-w-screen-4xl mx-auto px-4 sm:px-10 xl:px-20">
          <div className="text-center">
            <SectionBtn>Get In Touch</SectionBtn>
            <h2 className="text-orange-400 font-primary text-3xl sm:text-5xl mt-8">
              Reach out and let's create something great together
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-around items-center py-16">
            <ContactCart />
            <Contact_form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
