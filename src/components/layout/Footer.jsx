import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="font-sans">
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center py-10 border-b border-[#E6E6E6] gap-4">
            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
            <div className="flex gap-5 text-[#23A6F0]">
              <Facebook fill="currentColor" size={24} className="cursor-pointer hover:text-opacity-80" />
              <Instagram size={24} className="cursor-pointer hover:text-opacity-80" />
              <Twitter fill="currentColor" size={24} className="cursor-pointer hover:text-opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:grid md:grid-cols-5 gap-8">
            
            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold">Company Info</h5>
              <div className="flex flex-col gap-2.5 text-[#737373] text-sm font-bold">
                <a href="#" className="hover:text-[#23A6F0]">About Us</a>
                <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
                <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
                <a href="#" className="hover:text-[#23A6F0]">Blog</a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold">Legal</h5>
              <div className="flex flex-col gap-2.5 text-[#737373] text-sm font-bold">
                <a href="#" className="hover:text-[#23A6F0]">About Us</a>
                <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
                <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
                <a href="#" className="hover:text-[#23A6F0]">Blog</a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold">Features</h5>
              <div className="flex flex-col gap-2.5 text-[#737373] text-sm font-bold">
                <a href="#" className="hover:text-[#23A6F0]">Business Marketing</a>
                <a href="#" className="hover:text-[#23A6F0]">User Analytic</a>
                <a href="#" className="hover:text-[#23A6F0]">Live Chat</a>
                <a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold">Resources</h5>
              <div className="flex flex-col gap-2.5 text-[#737373] text-sm font-bold">
                <a href="#" className="hover:text-[#23A6F0]">IOS & Android</a>
                <a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a>
                <a href="#" className="hover:text-[#23A6F0]">Customers</a>
                <a href="#" className="hover:text-[#23A6F0]">API</a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h5 className="text-[#252B42] text-base font-bold">Get In Touch</h5>
              <div className="flex flex-col gap-2">
                <div className="flex h-[58px] max-w-full">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-[#F9F9F9] border border-[#E6E6E6] px-5 py-4 text-sm text-[#737373] outline-none rounded-l-md w-full focus:border-[#23A6F0]"
                  />
                  <button className="bg-[#23A6F0] text-white px-6 py-4 text-sm font-normal rounded-r-md hover:bg-[#1d8ccb] transition-colors whitespace-nowrap border border-[#23A6F0]">
                    Subscribe
                  </button>
                </div>
                <p className="text-[#737373] text-xs leading-normal font-normal">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start items-center">
            <h6 className="text-[#737373] text-sm font-bold w-[60%] md:w-auto text-center md:text-left mx-auto md:mx-0">
              Made With Love By Finland All Right Reserved
            </h6>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;