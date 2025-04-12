
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className={`font-bold text-2xl ${isScrolled ? 'text-bengali-red' : 'text-white text-shadow'}`}>
            পহেলা <span className="text-bengali-yellow">বৈশাখ</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Traditions', 'Gallery', 'Countdown'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:text-bengali-red transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white text-shadow'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button 
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            isScrolled 
              ? 'bg-bengali-red text-white' 
              : 'bg-white text-bengali-red'
          }`}
        >
          Celebrate
        </button>
      </div>
    </header>
  );
};

export default Header;
