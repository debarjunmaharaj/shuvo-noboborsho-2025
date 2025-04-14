
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, Music, Heart, GiftIcon } from 'lucide-react';

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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500", 
        isScrolled 
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo/Title with animated elements */}
          <div className="relative">
            {!isScrolled && (
              <div className="absolute -top-6 -left-6 w-12 h-12">
                <div className="absolute inset-0 bg-bengali-yellow rounded-full opacity-70 animate-ping"></div>
                <Star className="absolute text-bengali-red h-6 w-6 left-3 top-3 animate-spin-slow" />
              </div>
            )}
            
            <div className={cn(
              "font-bold text-2xl font-bengali flex items-center",
              isScrolled ? 'text-bengali-red' : 'text-white text-shadow'
            )}>
              <span className="relative inline-block">
                প
                {!isScrolled && <span className="absolute -top-1 -right-1 text-xs text-bengali-yellow">✦</span>}
              </span>
              <span>হেলা</span>
              {' '}
              <span className={cn(
                "relative",
                isScrolled ? "text-bengali-yellow" : "text-bengali-yellow text-shadow"
              )}>
                <span>বৈশাখ</span>
                {!isScrolled && (
                  <span className="absolute -bottom-1 -right-1 text-xs text-bengali-yellow">✦</span>
                )}
              </span>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { en: 'Home', bn: 'হোম', icon: <Heart className="h-3 w-3" /> },
            { en: 'Traditions', bn: 'ঐতিহ্য', icon: <Music className="h-3 w-3" /> },
            { en: 'Gallery', bn: 'গ্যালারি', icon: <Star className="h-3 w-3" /> },
            { en: 'Countdown', bn: 'কাউন্টডাউন', icon: <GiftIcon className="h-3 w-3" /> }
          ].map((item) => (
            <a 
              key={item.en} 
              href={`#${item.en.toLowerCase()}`}
              className={cn(
                "font-medium hover:text-bengali-red transition-colors flex items-center gap-1 group font-bengali",
                isScrolled ? 'text-gray-700' : 'text-white text-shadow'
              )}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                {item.icon}
              </span>
              {item.bn}
            </a>
          ))}
        </nav>
        
        <button 
          className={cn(
            "px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-bengali flex items-center gap-2",
            isScrolled 
              ? 'bg-bengali-red text-white' 
              : 'bg-white text-bengali-red'
          )}
        >
          <span className="hidden sm:inline">শুভ</span>
          <span>উদযাপন</span>
          <span className="animate-spin-slow hidden sm:inline">✦</span>
        </button>
      </div>
      
      {/* Decorative bottom border that appears when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-bengali-red via-bengali-yellow to-bengali-green"></div>
      )}
    </header>
  );
};

export default Header;
