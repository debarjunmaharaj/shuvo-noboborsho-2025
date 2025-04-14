
import React from 'react';
import { cn } from '@/lib/utils';

interface FriendGalleryProps {
  images: string[];
  className?: string;
}

const FriendGallery: React.FC<FriendGalleryProps> = ({ images, className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src={image}
              alt={`Friend ${index + 1}`}
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
            
            {/* Decorative Bengali elements */}
            <div className="absolute top-4 right-4 bg-bengali-red/80 w-12 h-12 rounded-full flex items-center justify-center text-white font-bengali text-lg font-bold transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {['১', '২', '৩', '৪', '৫', '৬'][index % 6]}
            </div>
            
            {/* Alpana pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23FFFFFF%27%20fill-opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
          
          {/* Festive border that appears on hover */}
          <div className="absolute inset-0 border-0 group-hover:border-4 border-bengali-yellow border-dashed rounded-lg transition-all duration-500"></div>
        </div>
      ))}
    </div>
  );
};

export default FriendGallery;
