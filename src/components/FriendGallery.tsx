
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Heart, Star, Sparkles } from 'lucide-react';

interface FriendGalleryProps {
  images: string[];
  className?: string;
}

const FriendGallery: React.FC<FriendGalleryProps> = ({ images, className }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className={cn("relative", className)}>
      {/* Decorative Elements */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-bengali-yellow/30 rounded-full blur-xl"></div>
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-bengali-pink/30 rounded-full blur-xl"></div>
      
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group transition-all duration-500 transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image}
                alt={`বন্ধু ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay with Bengali festive elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-bengali-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <div className="font-bengali text-white text-3xl font-bold mb-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  {['বন্ধু', 'মিতালি', 'সখ্য', 'সাথী', 'আত্মীয়', 'প্রিয়জন'][index % 6]}
                </div>
                <div className="text-white/80 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  পহেলা বৈশাখ ১৪৩২
                </div>
              </div>
              
              {/* Interactive Decoration Elements */}
              <div className="absolute top-4 right-4 bg-bengali-red/80 w-12 h-12 rounded-full flex items-center justify-center text-white font-bengali text-lg font-bold transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse-gentle">
                {['১', '২', '৩', '৪', '৫', '৬'][index % 6]}
              </div>
              
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <Heart className="text-bengali-red h-6 w-6 drop-shadow animate-pulse-gentle" fill="#E63946" />
              </div>
              
              {/* Alpana pattern overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23FFFFFF%27%20fill-opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
            
            {/* Festive border that appears on hover */}
            <div className="absolute inset-0 border-0 group-hover:border-4 border-bengali-yellow border-dashed rounded-lg transition-all duration-500"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <Star className="text-bengali-yellow h-8 w-8 animate-spin-slow" fill="#F8B400" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Large View Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[selectedImage]} 
              alt="Selected friend" 
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="font-bengali text-white text-xl">
                শুভ নববর্ষ ১৪৩২
              </div>
            </div>
            
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="text-bengali-yellow h-5 w-5" />
                <span className="font-bengali text-white text-shadow">বন্ধুর ছবি {selectedImage + 1}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Decorative scattered elements */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`decoration-${i}`}
          className="absolute hidden md:block"
          style={{
            top: `${15 + i * 15}%`,
            left: i % 2 === 0 ? '-5%' : '102%',
            transform: `rotate(${i * 30}deg)`
          }}
        >
          <Sparkles 
            className={`h-8 w-8 ${
              i % 3 === 0 
                ? 'text-bengali-yellow' 
                : i % 3 === 1 
                  ? 'text-bengali-red' 
                  : 'text-bengali-green'
            } animate-pulse-gentle`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        </div>
      ))}
    </div>
  );
};

export default FriendGallery;
