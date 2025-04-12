
import { useEffect } from "react";
import { Music, Paintbrush, Utensils, Shirt } from "lucide-react";
import ThreeDScene from "../components/ThreeDScene";
import CountdownTimer from "../components/CountdownTimer";
import TraditionCard from "../components/TraditionCard";
import BoishakhBanner from "../components/BoishakhBanner";
import Header from "../components/Header";
import FloatingElements from "../components/FloatingElements";
import { toast } from "sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  useEffect(() => {
    toast("শুভ নববর্ষ ১৪৩২", {
      description: "Welcome to Bengali New Year Celebration!",
      duration: 5000,
    });
  }, []);

  const traditions = [
    {
      title: "Mangal Shobhajatra",
      description: "Colorful processions with traditional masks and motifs that symbolize Bengali culture and heritage.",
      icon: <Paintbrush />,
      color: "bg-bengali-red",
    },
    {
      title: "Boishakhi Food",
      description: "Traditional Bengali cuisine including Panta Bhat (fermented rice), Ilish (Hilsa fish), and various sweets.",
      icon: <Utensils />,
      color: "bg-bengali-yellow",
    },
    {
      title: "Boishakhi Mela",
      description: "Traditional fairs featuring handicrafts, folk music, and cultural performances.",
      icon: <Music />,
      color: "bg-bengali-green",
    },
    {
      title: "Traditional Attire",
      description: "Men wearing Panjabi-Pajama and women adorning white sarees with red borders.",
      icon: <Shirt />,
      color: "bg-bengali-purple",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen alpana-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-bengali-blue to-transparent opacity-80"></div>
        
        <FloatingElements />
        
        <div className="relative h-full container mx-auto px-4 pt-24 pb-12 flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow mb-4">
              <span className="font-bengali">পহেলা বৈশাখ</span>
              <span className="block">Pohela Boishakh 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-white text-shadow mb-8">
              Bengali New Year Celebration - April 14, 2025
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-bengali-red text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors animate-pulse-gentle">
                Join Celebration
              </button>
              <button className="bg-white text-bengali-blue px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Personal Greeting Section with Dynamic Design */}
          <div className="bg-gradient-to-br from-bengali-red to-bengali-orange rounded-xl p-8 shadow-xl max-w-sm mx-auto my-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-bengali-yellow opacity-20 rounded-full -ml-10 -mb-10"></div>
            
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-bengali-orange via-bengali-red to-bengali-purple rounded-full animate-spin-slow opacity-70"></div>
                <div className="absolute inset-2 bg-white rounded-full"></div>
                <Avatar className="w-32 h-32 border-4 border-white relative z-10 animate-float">
                  <AvatarImage src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/487216496_650713390886824_3893499008514343840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GxP2nxEiUwsQ7kNvwF4MK_W&_nc_oc=AdlGCeBFeoVXuzT5FJFA619YY6D020RQAwlajGEXg-rQHwCYQm4kqIa6jwsZaA7oarc&_nc_zt=23&_nc_ht=scontent.fcgp3-1.fna&_nc_gid=hGiz9WXNh6yZLx9CRYPAig&oh=00_AfGNkrXyNHo0d7I6JdYxom-gZkZS4ovXZ7cfxHugUTZmfQ&oe=6800751C" alt="Debarjun Chakraborty" />
                  <AvatarFallback className="bg-bengali-red text-white text-2xl">DC</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative Bengali Symbols */}
              <span className="absolute top-2 left-2 text-white opacity-30 text-2xl rotate-12">৳</span>
              <span className="absolute bottom-2 right-2 text-white opacity-30 text-2xl -rotate-12">ঔ</span>
              
              <h3 className="text-white text-xl font-bold mb-1 mt-4 drop-shadow-md">Debarjun Chakraborty</h3>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full my-2">
                <p className="text-white font-bengali text-xl font-bold animate-pulse-gentle">শুভ নববর্ষ ১৪৩২</p>
              </div>
              <p className="text-white/90 font-medium">Happy Nobo Borsho 1432</p>
            </div>
          </div>
          
          <div className="w-full h-[60vh] mt-8">
            <ThreeDScene className="w-full h-full" />
          </div>
        </div>
      </section>
      
      <BoishakhBanner />
      
      {/* Traditions Section */}
      <section id="traditions" className="py-16 px-4 bg-gray-50 alpana-pattern">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Bengali New Year Traditions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {traditions.map((tradition, index) => (
              <TraditionCard 
                key={index}
                title={tradition.title}
                description={tradition.description}
                icon={tradition.icon}
                color={tradition.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pohela Boishakh Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="relative aspect-square rounded-xl overflow-hidden card-hover"
              >
                <div className={`absolute inset-0 flex items-center justify-center bg-bengali-${
                  ['red', 'orange', 'yellow', 'green', 'blue', 'purple'][item % 6]
                } bg-opacity-80`}>
                  <div className="text-white text-center p-4">
                    <div className="text-6xl font-bengali mb-2">
                      {['১৪৩২', 'বৈশাখ', 'উৎসব', 'শুভ', 'নববর্ষ', 'আনন্দ'][item % 6]}
                    </div>
                    <div className="text-xl">
                      {['1432', 'Boishakh', 'Festival', 'Shubho', 'Noboborsho', 'Joy'][item % 6]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section id="countdown" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <CountdownTimer />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-bengali-blue text-white">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold font-bengali mb-2">
            পহেলা বৈশাখ ১৪৩২
          </div>
          <div className="mb-4">Pohela Boishakh 1432 (2025)</div>
          <div className="text-sm text-gray-300">
            © 2025 Bengali New Year Celebration
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
