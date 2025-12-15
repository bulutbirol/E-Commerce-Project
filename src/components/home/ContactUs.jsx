import React from 'react';
import contactImg from '../../assets/contact-img.jpg';

const ContactUs = () => {
  return (
    <section className="font-sans w-full">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[640px] overflow-hidden">
        
        <div className="bg-[#2A7CC7] text-white w-full md:w-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 py-16 md:px-32 gap-8">
          
          <h5 className="font-bold text-base uppercase tracking-wide">
            WORK WITH US
          </h5>
          
          <h2 className="font-bold text-[40px] leading-[50px] md:text-5xl md:leading-[60px] max-w-md">
            Now Let’s grow Yours
          </h2>
          
          <p className="text-sm leading-relaxed max-w-sm font-normal text-white/90">
            The gradual accumulation of information about atomic and 
            small-scale behavior during the first quarter of the 20th 
          </p>
          
          <button className="border border-white text-white font-bold py-3.5 px-10 rounded-md hover:bg-white hover:text-[#2A7CC7] transition-colors mt-2">
            Contact Us
          </button>
          
        </div>

        <div className="hidden md:block w-2/5 h-full relative">
          <img 
            src={contactImg}
            alt="Woman with clothes" 
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUs;