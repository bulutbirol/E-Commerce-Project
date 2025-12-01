import React from 'react';
import neuralImage from '../../assets/banner.png';

const NeuralUniverse = () => {
  return (
    <div className="bg-white font-sans w-full">
      <div className="flex flex-col md:flex-row w-full">
        
        <div className="w-full md:w-1/2 h-[500px] md:h-[700px]">
          <img 
            src={neuralImage} 
            alt="Neural Universe" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 md:px-20 lg:px-32 py-16">
          <h5 className="text-[#BDBDBD] font-bold text-base tracking-wide uppercase mb-6">
            SUMMER 2020
          </h5>
          
          <h2 className="text-[#252B42] text-4xl md:text-[40px] font-bold leading-tight mb-6 max-w-lg">
            Part of the Neural Universe
          </h2>
          
          <p className="text-[#737373] text-xl mb-8 max-w-md leading-normal">
            We know how large objects will act, but things on a small scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#2DC071] hover:bg-[#25a360] text-white font-bold py-4 px-10 rounded-md uppercase transition-colors">
              BUY NOW
            </button>
            
            <button className="bg-white border-2 border-[#2DC071] text-[#2DC071] hover:bg-gray-50 font-bold py-4 px-10 rounded-md uppercase transition-colors">
              READ MORE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NeuralUniverse;