
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Bengali New Year (Pohela Boishakh) 2025: April 14, 2025
  const targetDate = new Date('April 14, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-bengali-blue">Countdown to Pohela Boishakh 2025</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item) => (
          <div 
            key={item.label} 
            className="bg-white rounded-lg shadow-lg p-4 w-20 md:w-24 text-center border-2 border-bengali-yellow animate-pulse-gentle"
          >
            <div className="text-bengali-red font-bold text-2xl md:text-3xl">{item.value}</div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
