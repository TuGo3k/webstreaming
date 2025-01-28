import React from "react";
import ContactForm from "../components/ContactForm";
import Information from "../components/Information";
import bg from "../assets/images/episode_bg.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div
        className="px-6 md:px-[15%] flex flex-col w-full  md:mt-[5%] py-6 md:py-[5%] gap-8 md:gap-16"
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
      <Footer />
    </>
  );
};

export default Contact;
