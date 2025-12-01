import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroMan from '../../assets/heroimg2.png';
import heroWoman from '../../assets/image_13.jpg';

const slides = [
  {
    id: 1,
    bgColor: "bg-[#23856D]",
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    desc: "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    btnText: "ADD TO CART",
    img: heroMan,
  },
  {
    id: 2,
    bgColor: "bg-[#00B5DC]",
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    desc: "We know how large objects will act, but things on a small scale.",
    price: "",
    btnText: "SHOP NOW",
    img: heroWoman,
  }
];

const ShopHero = () => {
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
    <div className="relative w-full overflow-hidden font-sans text-white">
      <div 
        className="flex transition-transform duration-700 ease-out h-[600px] md:h-[700px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={`w-full h-full flex-shrink-0 relative ${slide.bgColor}`}>
            <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between">
              
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-20 md:pt-0 gap-6 z-10">
                <h5 className="font-bold text-base tracking-wide uppercase">
                  {slide.subtitle}
                </h5>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl max-w-xs md:max-w-sm mx-auto md:mx-0 text-gray-100">
                  {slide.desc}
                </p>
                <div className="flex items-center gap-6 mt-4">
                  {slide.price && <span className="text-2xl font-bold">{slide.price}</span>}
                  <button className="bg-[#2DC071] hover:bg-[#25a360] text-white text-sm font-bold py-4 px-10 rounded-md uppercase transition-colors">
                    {slide.btnText}
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 h-full flex items-end justify-center relative">
                 <img 
                    src={slide.img} 
                    alt={slide.title} 
                    className="object-contain h-[500px] md:h-[600px] w-auto relative bottom-0" 
                  />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-4 text-white hover:bg-white/20 p-2 rounded-full hidden md:block z-20"><ChevronLeft size={48}/></button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 text-white hover:bg-white/20 p-2 rounded-full hidden md:block z-20"><ChevronRight size={48}/></button>

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

export default ShopHero;