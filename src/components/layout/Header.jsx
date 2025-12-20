import React, { useState } from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, Menu, X, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="font-sans relative z-50">
      <div className="hidden md:block bg-bandage-dark text-white text-sm py-3 font-bold">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-5">
            <div className="flex items-center gap-1"><Phone size={16} /> (225) 555-0118</div>
            <div className="flex items-center gap-1"><Mail size={16} /> michelle.rivera@example.com</div>
          </div>
          <div>Follow Us and get a chance to win 80% off</div>
          <div className="flex gap-3 items-center">
            <span>Follow Us :</span>
            <Instagram size={16} /> <Youtube size={16} /> <Facebook size={16} /> <Twitter size={16} />
          </div>
        </div>
      </div>

      <div className="bg-white py-4 shadow-sm sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center relative">

            <Link to="/" className="text-2xl md:text-4xl font-bold text-[#252B42] shrink-0">Bandage</Link>

            <nav className="hidden md:flex gap-6 text-gray-500 font-bold text-sm items-center">
              <Link to="/" className="hover:text-bandage-dark">Home</Link>
              <div className="group relative py-4">
                <Link to="/shop" className="flex items-center gap-1 hover:text-bandage-dark cursor-pointer">
                  Shop <ChevronDown size={14} />
                </Link>
                <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-md p-6 hidden group-hover:flex gap-10 min-w-[400px] z-50">
                  <ul className="flex flex-col gap-3 text-left">
                    <li className="font-bold text-bandage-dark text-base mb-2">Category 1</li>
                    <li><Link to="/shop" className="hover:text-bandage-blue">Item 1</Link></li>
                    <li><Link to="/shop" className="hover:text-bandage-blue">Item 2</Link></li>
                  </ul>
                  <ul className="flex flex-col gap-3 text-left">
                    <li className="font-bold text-bandage-dark text-base mb-2">Category 2</li>
                    <li><Link to="/shop" className="hover:text-bandage-blue">Item 1</Link></li>
                    <li><Link to="/shop" className="hover:text-bandage-blue">Item 2</Link></li>
                  </ul>
                </div>
              </div>
              <Link to="/about" className="hover:text-bandage-dark">About</Link>
              <Link to="/blog" className="hover:text-bandage-dark">Blog</Link>
              <Link to="/contact" className="hover:text-bandage-dark">Contact</Link>
              <Link to="/pages" className="hover:text-bandage-dark">Pages</Link>
            </nav>

            <div className="hidden md:flex items-center gap-6 text-bandage-blue font-bold text-sm">
              <Link to="/login" className="flex items-center gap-1 cursor-pointer hover:text-opacity-80">
                <User size={16} /> <span>Login / Register</span>
              </Link>
              <Search size={16} className="cursor-pointer hover:text-opacity-80" />
              <div className="flex items-center gap-1 cursor-pointer hover:text-opacity-80">
                <ShoppingCart size={16} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-opacity-80">
                <Heart size={16} />
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none text-[#252B42]">
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center gap-8 py-16 animate-fade-in text-center font-sans">

              <Link to="/" onClick={toggleMenu} className="text-[#737373] text-[30px] font-normal leading-[45px]">Home</Link>
              <Link to="/shop" onClick={toggleMenu} className="text-[#737373] text-[30px] font-normal leading-[45px]">Shop</Link>
              <Link to="/about" onClick={toggleMenu} className="text-[#737373] text-[30px] font-normal leading-[45px]">About</Link>
              <Link to="/blog" onClick={toggleMenu} className="text-[#737373] text-[30px] font-normal leading-[45px]">Blog</Link>
              <Link to="/contact" onClick={toggleMenu} className="text-[#737373] text-[30px] font-normal leading-[45px]">Contact</Link>
              <Link to="/pages" onClick={toggleMenu} className="text-[#737373] text-[30px] font-normal leading-[45px]">Pages</Link>
              <Link to="/login" onClick={toggleMenu} className="text-[#23A6F0] text-[30px] font-normal leading-[45px] flex items-center justify-center gap-2 mt-2">
                <User size={30} className="inline-block" /> Login / Register
              </Link>

              <div className="flex flex-col gap-6 items-center text-[#23A6F0] mt-4">
                <button className="hover:text-blue-600 transition-colors">
                  <Search size={30} strokeWidth={1.5} />
                </button>

                <Link to="/cart" onClick={toggleMenu} className="flex flex-col items-center hover:text-blue-600 transition-colors">
                  <div className="flex items-center gap-2">
                    <ShoppingCart size={30} strokeWidth={1.5} />
                    <span className="text-xs hidden">1</span>
                  </div>
                </Link>

                <Link to="/wishlist" onClick={toggleMenu} className="flex flex-col items-center hover:text-blue-600 transition-colors">
                  <div className="flex items-center gap-2">
                    <Heart size={30} strokeWidth={1.5} />
                    <span className="text-xs hidden">1</span>
                  </div>
                </Link>
              </div>

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;