import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '../../assets/image_13.jpg';
import heroMan from '../../assets/heroimg2.png';
const slides = [
  {
    id: 1,
    bgColor: "bg-[#00B5DC]",
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    desc: "We know how large objects will act, but things on a small scale.",
    btnText: "SHOP NOW",
    img: heroImage,
    layout: "collection",
  },
  {
    id: 2,
    bgColor: "bg-[#23856D]",
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    desc: "We know how large objects will act, We know",
    price: "$16.48",
    btnText: "ADD TO CART",
    img: heroMan,
    layout: "vita",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-auto md:h-[calc(100vh-136px)] min-h-[750px] md:min-h-[600px] overflow-hidden font-sans text-white">

      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={`w-full h-full flex-shrink-0 relative ${slide.bgColor}`}>

            <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center md:justify-start">

              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-24 md:pt-0 gap-8 z-10 px-4">
                <h5 className="font-bold text-base tracking-wide uppercase">
                  {slide.subtitle}
                </h5>
                <h1 className="text-[40px] md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl max-w-xs md:max-w-sm mx-auto md:mx-0 text-gray-100 leading-normal">
                  {slide.desc}
                </p>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4">
                  {slide.price && (
                    <span className="text-2xl font-bold">{slide.price}</span>
                  )}
                  <button className="bg-[#2DC071] hover:bg-[#25a360] text-white text-xl font-bold py-4 px-10 rounded-md uppercase transition-colors">
                    {slide.btnText}
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 h-full flex items-end justify-center relative overflow-hidden md:overflow-visible mt-10 md:mt-0">
                {slide.layout === 'collection' && (
                  <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white opacity-10 rounded-full top-10 right-0 md:top-20 md:right-10"></div>
                )}

                <img
                  src={slide.img}
                  alt={slide.title}
                  className={`w-full min-w-[414px] h-full object-cover scale-[1.3] md:scale-100 md:w-full md:min-w-0 md:h-full md:object-cover${slide.layout === 'vita' ? 'md:translate-y-10' : ''}`}
                  style={{ objectPosition: 'top center' }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute top-[60%] md:top-1/2 left-4 text-white hover:bg-white/20 p-2 rounded-full z-20"><ChevronLeft size={48} /></button>
      <button onClick={nextSlide} className="absolute top-[60%] md:top-1/2 right-4 text-white hover:bg-white/20 p-2 rounded-full z-20"><ChevronRight size={48} /></button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <div key={index} onClick={() => setCurrentSlide(index)}
            className={`cursor-pointer transition-all duration-300 h-2 shadow-sm ${currentSlide === index ? "bg-white w-16" : "bg-white/50 w-8 hover:bg-white/80"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;