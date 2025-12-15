import React from 'react';

const categories = [
  { id: 1, title: "CLOTHS", items: "5 Items", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "CLOTHS", items: "5 Items", img: "https://images.unsplash.com/photo-1529139574466-a302c27e3844?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "CLOTHS", items: "5 Items", img: "https://images.unsplash.com/photo-1550614000-4b9519e0947f?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "CLOTHS", items: "5 Items", img: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "CLOTHS", items: "5 Items", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" },
];

const ShopCategories = () => {
  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-[#252B42]">Shop</h3>
          <div className="flex items-center gap-2 font-bold text-sm mt-4 md:mt-0">
            <span className="text-[#252B42]">Home</span>
            <span className="text-[#BDBDBD]">{'>'}</span>
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="relative w-full h-[300px] md:h-[223px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10"></div>
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
                <h5 className="font-bold text-base uppercase mb-2">{cat.title}</h5>
                <p className="text-sm">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;