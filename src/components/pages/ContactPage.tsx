import React from "react";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";

const ContactPage = () => {
  return (
    <div className="bg-base-100 pt-20">
      <div className="content-container px-4 lg:px-0">
        <div className="md:w-[70%] m-auto">
          <h1 className="text-title-section pt-12 pb-10 font-bold text-primary-green text-center">
            Contact Us
          </h1>
          <p className="text-center text-lg">
            Contact us for any questions or help with our education and courses.
            Our team is ready to help and can be contacted via the contact
            information provided.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-h-[400px] mt-16 text-base-content font-bold ">
          <div className="w-full bg-base-200 p-12 flex items-center gap-4 rounded-3xl shadow-lg">
            <HiLocationMarker className="text-6xl sm:text-2xl " />
            <p className="text-base-content">
              Jl. Ngagel Madya V No.17, Baratajaya, Kec. Gubeng, Kota SBY, Jawa
              Timur 60284
            </p>
          </div>
          <div className="w-full bg-base-200 p-12 flex items-center gap-4 rounded-3xl shadow-lg">
            <HiPhone className="text-2xl" />
            <div className="flex flex-col sm:gap-6 sm:flex-row w-full">
              <p className="text-base-content">+62 815-5540-9479</p>
              <p className="text-base-content">+62 858-5321-8883</p>
            </div>
          </div>
          <div className="w-full bg-base-200 p-12 flex items-center gap-4 rounded-3xl shadow-lg flex-wrap">
            <HiMail className="text-2xl" />
            <p className="text-base-content">fairus@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-16 h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5674955067693!2d112.7594586211365!3d-7.289948522843445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbdf837c46a1%3A0x966fd6285a261142!2sAthalia&#39;s%20Blessing%20Special%20Education!5e0!3m2!1sid!2sid!4v1678075158790!5m2!1sid!2sid"
          loading="lazy"
          className="w-full h-full bg-slate-300"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
