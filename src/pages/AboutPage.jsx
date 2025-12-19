import React from 'react';
import { Play } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MeetOurTeam from '../components/home/MeetOurTeam';
import ShopClient from '../components/shop/ShopClients';
import ContactUs from '../components/home/ContactUs';
import aboutHero from '../assets/about-hero.png';

const AboutPage = () => {
  return (
    <div className="font-sans">
      <Header />

      <section className="bg-white py-10 md:py-0 overflow-hidden relative font-sans">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-auto md:min-h-[800px]">
          
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-8 mb-10 md:mb-0 z-20">
            <h5 className="text-[#252B42] font-bold text-base uppercase hidden md:block">
              ABOUT COMPANY
            </h5>
            <h1 className="text-[#252B42] text-4xl md:text-[58px] font-bold leading-tight">
              ABOUT US
            </h1>
            <p className="text-[#737373] text-xl max-w-sm leading-[30px]">
              We know how large objects will act, 
              but things on a small scale
            </p>
            <button className="bg-[#23A6F0] text-white font-bold py-3.5 px-10 rounded-md hover:bg-blue-600 transition-colors">
              Get Quote Now
            </button>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end h-full items-center">
            
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#FFE9EA] rounded-full -z-10 hidden md:block"></div>
            
            <div className="absolute top-20 left-0 w-4 h-4 bg-[#977DF4] rounded-full hidden md:block z-0"></div>
            <div className="absolute bottom-20 left-10 w-8 h-8 bg-[#FFE9EA] rounded-full hidden md:block z-0"></div>
            
            <img 
              src={aboutHero} 
              alt="About Hero" 
              className="relative z-10 w-full h-auto md:h-[700px] lg:h-[800px] object-cover object-center rounded-lg md:rounded-none"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="w-full md:w-1/2">
              <span className="text-[#E74040] text-sm font-bold mb-4 block">Problems trying</span>
              <h3 className="text-[#252B42] text-2xl font-bold max-w-sm leading-8">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-[#737373] text-sm leading-relaxed">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col">
              <span className="text-[#252B42] text-[58px] font-bold">15K</span>
              <span className="text-[#737373] font-bold text-base">Happy Customers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#252B42] text-[58px] font-bold">150K</span>
              <span className="text-[#737373] font-bold text-base">Monthly Visitors</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#252B42] text-[58px] font-bold">15</span>
              <span className="text-[#737373] font-bold text-base">Countries Worldwide</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#252B42] text-[58px] font-bold">100+</span>
              <span className="text-[#737373] font-bold text-base">Top Partners</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 px-8 md:px-32">
          <div className="relative w-full h-[300px] md:h-[540px] rounded-[20px] overflow-hidden shadow-lg group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#23A6F0] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play fill="white" stroke="white" size={32} className="ml-1" />
            </div>
          </div>
        </div>
      </section>

      <MeetOurTeam />

      <ShopClient />

      <ContactUs />

      <Footer />
    </div>
  );
};

export default AboutPage;