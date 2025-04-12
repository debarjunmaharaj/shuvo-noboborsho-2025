
import { ReactNode } from 'react';

interface TraditionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const TraditionCard = ({ title, description, icon, color }: TraditionCardProps) => {
  return (
    <div className={`card-hover h-full bg-white rounded-xl shadow-md overflow-hidden`}>
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className={`text-4xl ${color.replace('bg-', 'text-')}`}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default TraditionCard;
