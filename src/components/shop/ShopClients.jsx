import React from 'react';
import { Github, Slack, Twitter, Linkedin, Facebook, Figma } from 'lucide-react';

const ShopClients = () => {
  return (
    <div className="bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          
          <div className="flex items-center gap-2 text-[#737373] text-4xl font-bold">
             <span className="transform -rotate-12">hooli</span>
          </div>

          <div className="flex items-center gap-2 text-[#737373] text-4xl font-bold">
             lyft
          </div>

          <div className="flex items-center gap-2 text-[#737373] text-4xl font-bold">
             <span className="italic">stripe</span>
          </div>

          <div className="flex items-center gap-2 text-[#737373] text-4xl font-bold">
             aws
          </div>

          <div className="flex items-center gap-2 text-[#737373] text-4xl font-bold">
             reddit
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopClients;