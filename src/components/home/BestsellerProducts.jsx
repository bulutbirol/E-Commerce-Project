import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link import edildi

import product1 from '../../assets/img1.jpg';
import product2 from '../../assets/img2.jpg';
import product3 from '../../assets/img3.jpg';
import product4 from '../../assets/img4.jpg';
import product5 from '../../assets/img5.jpg';
import product6 from '../../assets/img6.jpg';
import product7 from '../../assets/img7.jpg';
import product8 from '../../assets/img8.jpg';

const products = [
  { id: 1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: product1 },
  { id: 2, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: product2 },
  { id: 3, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: product3 },
  { id: 4, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: product4 },
  { id: 5, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: product5 },
  { id: 6, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: product6 },
  { id: 7, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: product7 },
  { id: 8, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: product8 },
];

const BestsellerProducts = () => {
  return (
    <div className="bg-white py-10 font-sans mt-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h4 className="text-[#737373] text-xl mb-2 font-medium">Featured Products</h4>
          <h3 className="text-bandage-dark text-2xl font-bold uppercase mb-2">BESTSELLER PRODUCTS</h3>
          <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 md:px-0">
          {products.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="flex flex-col items-center group w-full shadow-sm hover:shadow-md transition-shadow"
            >
              
              <div className="w-full h-[400px] mb-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="text-center flex flex-col gap-2 pb-8 px-4">
                <h5 className="text-bandage-dark font-bold text-base">{product.title}</h5>
                <p className="text-[#737373] text-sm font-bold">{product.department}</p>
                <div className="flex justify-center gap-2 font-bold py-1 px-1">
                  <span className="text-[#BDBDBD]">{product.oldPrice}</span>
                  <span className="text-[#23856D]">{product.newPrice}</span>
                </div>
                
                <div className="flex justify-center gap-1.5 mt-1">
                  <div className="w-4 h-4 rounded-full bg-[#23A6F0] cursor-pointer"></div>
                  <div className="w-4 h-4 rounded-full bg-[#23856D] cursor-pointer"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E77C40] cursor-pointer"></div>
                  <div className="w-4 h-4 rounded-full bg-[#252B42] cursor-pointer"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BestsellerProducts;