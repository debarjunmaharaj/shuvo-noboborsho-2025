
import { useEffect, useRef } from 'react';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements = ({ className }: FloatingElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Mouse move handler for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate mouse position relative to center
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Move elements based on their index (different speeds)
      elementsRef.current.forEach((element, index) => {
        if (!element) return;
        
        const speed = 0.01 + (index % 3) * 0.01;
        const xOffset = mouseX * speed * (index % 2 ? 1 : -1);
        const yOffset = mouseY * speed * (index % 3 ? 1 : -1);
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Bengali pattern symbols
  const patterns = [
    '◉', '✿', '❁', '✾', '❀', '❃', '✽', '✼', '✺',
    '✹', '✸', '✷', '✶', '✵', '✴', '✳', '⚹', '✲'
  ];
  
  // Colors for the patterns
  const colors = [
    'text-bengali-red', 'text-bengali-orange', 'text-bengali-yellow', 
    'text-bengali-green', 'text-bengali-blue', 'text-bengali-pink', 'text-bengali-purple'
  ];
  
  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {patterns.map((pattern, index) => (
        <div 
          key={index}
          ref={(el) => el && (elementsRef.current[index] = el)}
          className={`absolute text-3xl md:text-4xl lg:text-5xl ${colors[index % colors.length]} animate-float`}
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            opacity: 0.5 + Math.random() * 0.5,
            animationDelay: `${Math.random() * 5}s`,
            transform: 'translateZ(0)'
          }}
        >
          {pattern}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
