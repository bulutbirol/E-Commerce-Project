import React from "react";
import { LayoutGrid, List } from "lucide-react";
import { Link } from "react-router-dom";

const products = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  title: "Graphic Design",
  dept: "English Department",
  oldPrice: "$16.48",
  newPrice: "$6.48",
  img: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1000&auto=format&fit=crop",
}));

const ShopProducts = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-6 mb-10 gap-6 md:gap-0">
          <div className="text-[#737373] font-bold text-sm">Showing all 12 results</div>

          <div className="flex items-center gap-4">
            <span className="text-[#737373] font-bold text-sm">Views:</span>
            <div className="p-3 border border-[#ECECEC] rounded cursor-pointer hover:bg-gray-50">
              <LayoutGrid size={16} className="text-[#252B42]" />
            </div>
            <div className="p-3 border border-[#ECECEC] rounded cursor-pointer hover:bg-gray-50">
              <List size={16} className="text-[#737373]" />
            </div>
          </div>

          <div className="flex gap-4">
            <select className="border border-[#DDDDDD] bg-[#F9F9F9] text-[#737373] px-4 py-3 rounded text-sm outline-none cursor-pointer">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
            </select>
            <button className="bg-[#23A6F0] text-white px-6 py-3 rounded text-sm font-bold hover:bg-blue-500 transition-colors">
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full h-[360px] mb-6 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="text-center flex flex-col gap-2.5 pb-8 px-4">
                <h5 className="text-[#252B42] font-bold text-base">{product.title}</h5>
                <p className="text-[#737373] text-sm font-bold">{product.dept}</p>

                <div className="flex justify-center gap-2 font-bold py-1">
                  <span className="text-[#BDBDBD]">{product.oldPrice}</span>
                  <span className="text-[#23856D]">{product.newPrice}</span>
                </div>

                <div className="flex justify-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12 mb-8">
          <div className="flex border border-[#E8E8E8] rounded shadow-sm bg-white font-bold text-[#23A6F0]">
            <button className="px-6 py-6 border-r border-[#E9E9E9] text-[#BDBDBD] cursor-not-allowed hover:bg-gray-50">
              First
            </button>
            <button className="px-5 py-6 border-r border-[#E9E9E9] text-[#23A6F0] bg-white hover:bg-gray-50">
              1
            </button>
            <button className="px-5 py-6 border-r border-[#E9E9E9] bg-[#23A6F0] text-white">
              2
            </button>
            <button className="px-5 py-6 border-r border-[#E9E9E9] text-[#23A6F0] bg-white hover:bg-gray-50">
              3
            </button>
            <button className="px-6 py-6 text-[#23A6F0] hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
