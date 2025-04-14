import React, { useEffect } from "react";
import { Music, Paintbrush, Utensils, Shirt, Camera, Heart, GiftIcon, Sparkles } from "lucide-react";
import ThreeDScene from "../components/ThreeDScene";
import CountdownTimer from "../components/CountdownTimer";
import TraditionCard from "../components/TraditionCard";
import BoishakhBanner from "../components/BoishakhBanner";
import Header from "../components/Header";
import FloatingElements from "../components/FloatingElements";
import { toast } from "sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import FriendGallery from "../components/FriendGallery";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Index = () => {
  useEffect(() => {
    toast("টোনিমা শাথী", {
      description: "বাংলা নববর্ষ উদযাপনে স্বাগতম!",
      duration: 5000,
    });
  }, []);

  const traditions = [
    {
      title: "মঙ্গল শোভাযাত্রা",
      description: "বাংলা সংস্কৃতি ও ঐতিহ্য প্রতীকী ঐতিহ্যবাহী মুখোশ ও মোটিফ সহ রঙিন শোভাযাত্রা।",
      icon: <Paintbrush />,
      color: "bg-bengali-red",
    },
    {
      title: "বৈশাখী খাবার",
      description: "পান্তা ভাত (ফার্মেন্টেড চাল), ইলিশ (হিলসা মাছ) এবং বিভিন্ন মিষ্টি সহ ঐতিহ্যবাহী বাঙালি রান্না।",
      icon: <Utensils />,
      color: "bg-bengali-yellow",
    },
    {
      title: "বৈশাখী মেলা",
      description: "হস্তশিল্প, লোক সংগীত এবং সাংস্কৃতিক অনুষ্ঠান বৈশিষ্ট্যযুক্ত ঐতিহ্যবাহী মেলা।",
      icon: <Music />,
      color: "bg-bengali-green",
    },
    {
      title: "ঐতিহ্যবাহী পোশাক",
      description: "পুরুষেরা পাঞ্জাবি-পায়জামা এবং মহিলারা লাল বর্ডার সহ সাদা শাড়ি পরিধান করে।",
      icon: <Shirt />,
      color: "bg-bengali-purple",
    },
  ];

  const friendImages = [
    "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/448973188_781091880790066_3709247269644610555_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sQvmfaFIR5gQ7kNvwFX9ggc&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfDvmA_kZe6V6NXaZK2cWYVX3ZKJGLlxiihHkqBHWqhM7g&oe=663AF2CF",
    "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/448965860_781091794123408_2192031575387899462_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LcHlRXA7L_QQ7kNvwFXRxVG&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfAC0G4iU7eUDjwJeG-VZ9dYFLVQD_8pyfhz-xqmLQvpvQ&oe=663AF350",
    "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/448961990_781091697456751_3127575830013307693_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m8qx6JQyJGsQ7kNvwGaHyhh&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfDRoFRfLqIJ8WF_Vux1cUeaRyKlxqkUC6cGqWq_h7G3qA&oe=663AF49B",
    "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/448958195_781091637456757_5254186395043405070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pL4UBpXaT8wQ7kNvwHN9qVy&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfBcBU9jR_q2w8nO8DG8n3XOdGJn0_4r5SoHRSg5obVEzg&oe=663AF7E5",
    "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/448954195_781091570790097_1186462645428400288_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w4X51HiMz7QQ7kNvwFpRlOG&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfCTDUjEWyLzCCJJ7TyMFTsGqNl_G8OXaODLfVvfQKiKhw&oe=663AF71D",
    "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/448947598_781091504123437_1267380024567414514_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wEzX_oGYoQgQ7kNvwEZJCzJ&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfB4QRr6nVDjDluQi8G8Fes4lBjpVKJsBEYCF8aElH4Wig&oe=663AF8BD"
  ];

  // Bengali wishes for the slider
  const wishes = [
    {
      message: "শুভেচ্ছা জানাই টোনিমা",
      icon: <Heart className="h-5 w-5 text-bengali-red" fill="#E63946" />,
      color: "bg-bengali-red/10"
    },
    {
      message: "তোমার জন্য শুভকামনা",
      icon: <GiftIcon className="h-5 w-5 text-bengali-yellow" />,
      color: "bg-bengali-yellow/10"
    },
    {
      message: "টোনিমা, তুমি সব সময় হাসো",
      icon: <Sparkles className="h-5 w-5 text-bengali-green" />,
      color: "bg-bengali-green/10"
    },
    {
      message: "তোমার জীবন আনন্দময় হোক",
      icon: <Music className="h-5 w-5 text-bengali-purple" />,
      color: "bg-bengali-purple/10"
    }
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
              <span className="font-bengali">টোনিমা শাথী</span>
              <span className="block font-bengali">পহেলা বৈশাখ ১৪৩২</span>
            </h1>
            <p className="text-xl md:text-2xl text-white text-shadow mb-8 font-bengali">
              বাংলা নববর্ষ উদযাপন - ১৪ এপ্রিল, ২০২৫
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-bengali-red text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors animate-pulse-gentle font-bengali">
                উৎসবে যোগ দিন
              </button>
              <button className="bg-white text-bengali-blue px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors font-bengali">
                আরও জানুন
              </button>
            </div>
          </div>
          
          {/* Wishes Carousel */}
          <div className="max-w-md mx-auto my-8">
            <Carousel className="w-full">
              <CarouselContent>
                {wishes.map((wish, index) => (
                  <CarouselItem key={index}>
                    <div className={`${wish.color} p-6 rounded-xl shadow-inner border border-white/20 backdrop-blur-sm`}>
                      <div className="flex items-center justify-center gap-3">
                        {wish.icon}
                        <p className="text-xl font-bengali font-bold">{wish.message}</p>
                        {wish.icon}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          
          {/* Personal Greeting Section with Friend's Image */}
          <div className="bg-gradient-to-br from-bengali-red to-bengali-orange rounded-xl p-8 shadow-xl max-w-sm mx-auto my-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-bengali-yellow opacity-20 rounded-full -ml-10 -mb-10"></div>
            
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-bengali-orange via-bengali-red to-bengali-purple rounded-full animate-spin-slow opacity-70"></div>
                <div className="absolute inset-2 bg-white rounded-full"></div>
                <Avatar className="w-32 h-32 border-4 border-white relative z-10 animate-float">
                  <AvatarImage src={friendImages[0]} alt="টোনিমা শাথী" />
                  <AvatarFallback className="bg-bengali-red text-white text-2xl font-bengali">টোনিমা</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative Bengali Symbols */}
              <span className="absolute top-2 left-2 text-white opacity-30 text-2xl rotate-12">৳</span>
              <span className="absolute bottom-2 right-2 text-white opacity-30 text-2xl -rotate-12">ঔ</span>
              
              <h3 className="text-white text-xl font-bold mb-1 mt-4 drop-shadow-md font-bengali">টোনিমা শাথী</h3>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full my-2">
                <p className="text-white font-bengali text-xl font-bold animate-pulse-gentle">শুভ নববর্ষ ১৪৩২</p>
              </div>
              <p className="text-white/90 font-medium font-bengali">আমার প্রিয় বন্ধু</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-bengali">
            বাংলা নববর্ষের ঐতিহ্য
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
      
      {/* Special Message for Adhora */}
      <section className="py-12 bg-gradient-to-r from-bengali-pink to-bengali-purple">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold mb-4 font-bengali">টোনিমার জন্য বিশেষ শুভেচ্ছা</h3>
              <div className="flex justify-center mb-4">
                <div className="w-20 h-1 bg-white"></div>
              </div>
              <p className="text-white/90 mb-6 font-bengali text-lg">
                তোমার জীবনে সব সময় আনন্দ, সাফল্য এবং সুখ থাকুক। তুমি যেমন সুন্দর, তোমার জীবনও তেমনি সুন্দর হোক।
              </p>
              <div className="flex items-center justify-center gap-4">
                <Heart className="h-6 w-6 text-white fill-bengali-red animate-pulse-gentle" />
                <Sparkles className="h-6 w-6 text-bengali-yellow animate-spin-slow" />
                <Heart className="h-6 w-6 text-white fill-bengali-red animate-pulse-gentle" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section with Friend's Photos */}
      <section id="gallery" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-bengali">
            টোনিমার গ্যালারি
          </h2>
          
          <FriendGallery images={friendImages} />
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
            টোনিমা শাথী - পহেলা বৈশাখ ১৪৩২
          </div>
          <div className="mb-4 font-bengali">পহেলা বৈশাখ ১৪৩২ (২০২৫)</div>
          <div className="text-sm text-gray-300 font-bengali mb-2">
            © ২০২৫ বাংলা নববর্ষ উদযাপন
          </div>
          <div className="text-sm text-gray-300">
            তৈরি করেছেন <a href="https://www.facebook.com/Debarjunmaharaj" target="_blank" rel="noopener noreferrer" className="underline hover:text-bengali-yellow transition-colors">দেবার্জুন চক্রবর্তী</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
