import React from "react";
import ContactForm from "../components/ContactForm";
import Information from "../components/Information";
import bg from "../assets/images/episode_bg.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div
        className="px-6 md:px-[15%] flex flex-col w-full  md:mt-[5%] pb-[5%] pt-[20%] md:py-[9%] gap-8 md:gap-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-2/3">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/3">
            <Information />
          </div>
        </div>
      </div>
      <div class="w-full">
    <iframe 
        class="w-full h-[500px] border-0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe>
</div>

      <Footer />
    </>
  );
};

export default Contact;
