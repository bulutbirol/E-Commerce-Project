import React from 'react';
import menImage from '../../assets/image_14.jpg';
import womenImage from '../../assets/image_10.jpg';
import accessoriesImage from '../../assets/image_12.jpg';
import kidsImage from '../../assets/image_11.jpg';

const EditorsPick = () => {
  return (
    <div className="bg-[#FAFAFA] py-12 font-sans">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-bandage-dark uppercase mb-2">EDITOR’S PICK</h2>
          <p className="text-gray-500">Problems trying to resolve the conflict between</p>
        </div>

        {/* ANA GRID: Mobilde auto, Desktopta 500px sabit yükseklik */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:h-[500px]">
          
          {/* MEN (Sol Büyük) */}
          <div className="md:col-span-2 relative w-full h-[500px] group overflow-hidden">
            <img 
              src={menImage} 
              alt="Men" 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <button className="bg-white text-bandage-dark font-bold px-12 py-3 shadow-md hover:bg-gray-100 uppercase tracking-wide">
                MEN
              </button>
            </div>
          </div>

          {/* WOMEN (Orta) */}
          <div className="md:col-span-1 relative w-full h-[500px] group overflow-hidden">
            <img 
              src={womenImage} 
              alt="Women" 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <button className="bg-white text-bandage-dark font-bold px-8 py-3 shadow-md hover:bg-gray-100 uppercase tracking-wide">
                WOMEN
              </button>
            </div>
          </div>

          {/* SAĞ KOLON (Accessories + Kids) */}
          <div className="md:col-span-1 flex flex-col gap-8 h-[500px]">
            
            {/* Accessories */}
            <div className="relative w-full h-1/2 group overflow-hidden">
              <img 
                src={accessoriesImage} 
                alt="Accessories" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <button className="bg-white text-bandage-dark font-bold px-6 py-3 shadow-md hover:bg-gray-100 uppercase tracking-wide text-sm">
                  ACCESSORIES
                </button>
              </div>
            </div>

            {/* Kids */}
            <div className="relative w-full h-1/2 group overflow-hidden">
              <img 
                src={kidsImage} 
                alt="Kids" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <button className="bg-white text-bandage-dark font-bold px-6 py-3 shadow-md hover:bg-gray-100 uppercase tracking-wide text-sm">
                  KIDS
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default EditorsPick;