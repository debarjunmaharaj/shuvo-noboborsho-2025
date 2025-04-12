
import { useEffect, useState } from 'react';

const BoishakhBanner = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-24 md:h-32 lg:h-48 overflow-hidden festive-gradient">
      <div 
        className="absolute inset-0 flex items-center overflow-hidden"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {[...Array(10)].map((_, index) => (
          <div 
            key={index} 
            className="whitespace-nowrap text-xl md:text-2xl lg:text-4xl font-bold text-white font-bengali mx-6"
          >
            শুভ নববর্ষ ১৪৩২
          </div>
        ))}
      </div>
      
      <div 
        className="absolute inset-0 flex items-center overflow-hidden"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {[...Array(10)].map((_, index) => (
          <div 
            key={index} 
            className="whitespace-nowrap text-xl md:text-2xl lg:text-4xl font-bold text-white mx-6"
          >
            Shubho Noboborsho 1432
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoishakhBanner;
