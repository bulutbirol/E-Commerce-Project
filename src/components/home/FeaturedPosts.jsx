import React from 'react';
import { Clock, ChevronRight, ChartArea } from 'lucide-react';
import post1 from '../../assets/featured1.jpg';
import post2 from '../../assets/featured2.jpg';
import post3 from '../../assets/featured3.jpg';

const posts = [
  {
    id: 1,
    image: post1,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments"
  },
  {
    id: 2,
    image: post2,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments"
  },
  {
    id: 3,
    image: post3,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments"
  }
];

const FeaturedPosts = () => {
  return (
    <div className="bg-white py-24 font-sans">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h6 className="text-[#23A6F0] font-bold text-sm mb-3">Practice Advice</h6>
          <h2 className="text-[#252B42] text-4xl font-bold mb-3">Featured Posts</h2>
          <p className="text-[#737373] text-sm max-w-[470px] mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg flex flex-col w-full group">
              
              <div className="relative w-full h-[300px] overflow-hidden">
                <span className="absolute top-5 left-5 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded shadow-sm z-10">
                  NEW
                </span>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex gap-4 text-xs">
                  <span className="text-[#8EC2F2]">Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>

                <h4 className="text-[#252B42] text-xl font-normal leading-snug">
                  {post.title}
                </h4>

                <p className="text-[#737373] text-sm leading-normal">
                  {post.desc}
                </p>

                <div className="flex justify-between items-center py-4 mt-auto">
                  <div className="flex items-center gap-1.5 text-[#737373] text-xs">
                    <Clock size={16} className="text-[#23A6F0]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#737373] text-xs">
                    <ChartArea size={16} className="text-[#23856D]" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#737373] font-bold text-sm cursor-pointer group-hover:text-[#23A6F0] transition-colors">
                  <span>Learn More</span>
                  <ChevronRight size={20} className="text-[#23A6F0]" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturedPosts;