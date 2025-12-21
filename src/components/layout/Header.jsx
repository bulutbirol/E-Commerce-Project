import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, Instagram, Youtube, Facebook, Twitter, 
  Search, ShoppingCart, Heart, User, Menu, X, LogOut, ChevronDown 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();

  const getUserFromStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        console.log(error)
        return null;
      }
    }
    return null;
  };

  const [user, setUser] = useState(getUserFromStorage);
  
  const [gravatarUrl, setGravatarUrl] = useState(() => {
    const initialUser = getUserFromStorage();
    return initialUser 
      ? `https://ui-avatars.com/api/?name=${initialUser.name}&background=random` 
      : "";
  });

  useEffect(() => {
    const currentUser = getUserFromStorage();
    const currentEmail = currentUser?.email;
    const previousEmail = user?.email;

    if (currentEmail !== previousEmail) {
      setUser(currentUser);
      if (currentUser) {
        setGravatarUrl(`https://ui-avatars.com/api/?name=${currentUser.name}&background=random`);
      } else {
        setGravatarUrl("");
      }
    }
  }, [location.pathname]); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setGravatarUrl("");
    window.location.href = "/";
  };

  return (
    <header className="font-sans">
      <div className="bg-[#252B42] text-white hidden md:block">
        <div className="container mx-auto px-4 h-[58px] flex justify-between items-center text-sm font-bold">
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <Phone size={16} />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          <div>
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          <div className="flex items-center gap-3">
             <span>Follow Us :</span>
             <Instagram size={16} className="cursor-pointer"/>
             <Youtube size={16} className="cursor-pointer"/>
             <Facebook size={16} className="cursor-pointer"/>
             <Twitter size={16} className="cursor-pointer"/>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-[80px] flex items-center justify-between">
          
          <Link to="/" className="text-[#252B42] text-2xl font-bold tracking-wider">
            Bandage
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[#737373] font-bold text-sm">
            <Link to="/" className="hover:text-[#252B42] transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-[#252B42] transition-colors flex items-center gap-1">
                Shop <ChevronDown size={14}/>
            </Link>
            <Link to="/about" className="hover:text-[#252B42] transition-colors">About</Link>
            <Link to="/blog" className="hover:text-[#252B42] transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-[#252B42] transition-colors">Contact</Link>
            <Link to="/pages" className="hover:text-[#252B42] transition-colors">Pages</Link>
          </nav>

          <div className="hidden md:flex items-center gap-6 text-[#23A6F0] font-bold text-sm">
            
            {user ? (
              <div className="relative flex items-center gap-2 cursor-pointer" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                 <img 
                    src={gravatarUrl} 
                    alt={user.name} 
                    className="w-8 h-8 rounded-full border border-gray-200"
                 />
                 <span>{user.name}</span>
                 
                 <button 
                    onClick={(e) => { e.stopPropagation(); handleLogout(); }}
                    className="flex items-center gap-1 text-red-500 hover:text-red-700 ml-2 text-xs border border-red-200 px-2 py-1 rounded"
                 >
                    <LogOut size={14} /> Log Out
                 </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-1 cursor-pointer hover:text-opacity-80">
                <User size={16}/> <span>Login / Register</span>
              </Link>
            )}

            <Search size={16} className="cursor-pointer hover:text-opacity-80"/>
            
            <div className="flex items-center gap-1 cursor-pointer hover:text-opacity-80">
              <ShoppingCart size={16}/>
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-opacity-80">
              <Heart size={16}/>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <div className="flex items-center gap-1 cursor-pointer text-[#252B42]">
                <ShoppingCart size={22}/>
             </div>

             <button onClick={toggleMenu} className="text-[#252B42]">
               {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
             </button>
          </div>

        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-8 py-16 bg-white text-[#737373] text-[30px] font-normal leading-[45px] shadow-lg animate-fade-in-down">
            <Link to="/" onClick={toggleMenu} className="hover:text-[#252B42]">Home</Link>
            <Link to="/product" onClick={toggleMenu} className="hover:text-[#252B42]">Product</Link>
            <Link to="/pricing" onClick={toggleMenu} className="hover:text-[#252B42]">Pricing</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-[#252B42]">Contact</Link>
            
            {user ? (
                <div className="flex flex-col items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                        <img src={gravatarUrl} alt={user.name} className="w-10 h-10 rounded-full"/>
                        <span className="text-xl text-[#23A6F0]">{user.name}</span>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="text-red-500 text-xl flex items-center gap-2"
                    >
                        <LogOut size={24} /> Log Out
                    </button>
                </div>
            ) : (
                <Link to="/login" onClick={toggleMenu} className="text-[#23A6F0] text-[30px] font-normal leading-[45px] flex items-center justify-center gap-2 mt-2">
                    <User size={30} className="inline-block" /> Login / Register
                </Link>
            )}
            
            <div className="flex flex-col items-center gap-4 text-[#23A6F0]">
               <Search size={30} className="cursor-pointer"/>
               <div className="flex items-center gap-1 cursor-pointer">
                 <ShoppingCart size={30}/>
               </div>
               <div className="flex items-center gap-1 cursor-pointer">
                 <Heart size={30}/>
               </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;