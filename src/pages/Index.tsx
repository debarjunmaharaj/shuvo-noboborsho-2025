
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
import FriendGallery from "../components/FriendGallery";

const Index = () => {
  useEffect(() => {
    toast("শুভ নববর্ষ ১৪৩২", {
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
    "https://scontent.fcgp3-2.fna.fbcdn.net/v/t51.75761-15/488553901_17872745538323620_7899721053754853040_n.jpg?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHaJNAGwlZZChpaTtgDk8VkniKHrfPZS2-eIoet89lLb1XJkf9w0GK2St00SEEvIkCSn-wXi4-4sQ3XAG1QuXI5&_nc_ohc=7Py-1jbBHE0Q7kNvwHr7kRb&_nc_oc=AdmYMnAPvsgMEcoPg1MKKoMFxuhdwRIq1SbADXjoC_CExSe3bOFnnxwaZmGTgKAWoYg&_nc_zt=23&_nc_ht=scontent.fcgp3-2.fna&_nc_gid=N-yhdP2OgFZKf_zuEopFCg&oh=00_AfGnIphfchvLxdc9Ci0H2mCiNo6gAjBV5nwW6ep-4k6bpQ&oe=68019B86",
    "https://scontent.fcgp3-1.fna.fbcdn.net/v/t51.75761-15/476195138_17864899296323620_2567357247874024606_n.jpg?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEDl9CUB8Bh9HON6TTDESD_Lv6RlhkTJW0u_pGWGRMlbeAVay56djXv0Cx2qwX4t8PsYn0cPbp-LNG7RtXNlFCB&_nc_ohc=wahAHlelT0cQ7kNvwELFITk&_nc_oc=AdnzBiVvcW2fQjVtlKei5ZqfXxY5wbQ4Ls3NuRaQwdgC_-VEVWfaAbG2MwlyxGcb4Zg&_nc_zt=23&_nc_ht=scontent.fcgp3-1.fna&_nc_gid=L2ELSjSXLxtxWd__-TDF5A&oh=00_AfH76ykXdBWcI7Dd1O261A4DIzkonyCtNHg8cxHjyF0vhw&oe=6801A353",
    "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/485652881_620146220862360_5863674025891453930_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFBNA6PjfbhamePsnroXpWvSJdLSPh3u-tIl0tI-He769qsqsvtphfoX947GQVwqUiM1MualmnC-j12hsPgR2us&_nc_ohc=0CyY_GibETcQ7kNvwHtnkXE&_nc_oc=AdnVtOuaC26S7Ex0WXQGUplzCmIeizG1-snkjbRzUd10VFup8wKjt_OfO1BFccPxRpw&_nc_zt=23&_nc_ht=scontent.fcgp3-2.fna&_nc_gid=1-dE6abe5usHUuAyb8BLMQ&oh=00_AfHUFXZBG-ZOqrrsCkv7O093yku1_uilYYrFzGiTdxc-Kw&oe=68018AC3",
    "https://scontent.fcgp3-2.fna.fbcdn.net/v/t51.75761-15/482315209_17868452127323620_6982352382874607306_n.jpg?stp=dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEMZU0DmyfZdgjTEagGhA_sohJeydx6tD-iEl7J3Hq0P0e3B2bU2syStk7w6jw3Oul86l8EvfEDKdINwJlBWyL3&_nc_ohc=PuXxQZ9L-dkQ7kNvwHGoxcm&_nc_oc=AdlNfPRS6SCkcAgCbfAgFlJRhD9DUcub-ALBkbPfgs9On3xsSRAfZEtEQlOrP5Xj0Jo&_nc_zt=23&_nc_ht=scontent.fcgp3-2.fna&_nc_gid=SByCDQRqBWJRSLC5useyOQ&oh=00_AfEo2bwk71mVedYRuWPBYxku3kglDie1cj8EHBpmyNGmBg&oe=680184EC",
    "https://scontent.fcgp3-1.fna.fbcdn.net/v/t51.75761-15/476341412_17864985666323620_335610114122054091_n.jpg?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFbrqsDN_Kq0gJUXbKq8cFPDRt-bjSjhKwNG35uNKOErG3N-YrHfqsKIbFwT-NCOGuTt03EUX5kdy5uhI5izVgP&_nc_ohc=YBzDCLHIc7IQ7kNvwH9XCDf&_nc_oc=AdlfHohbUNxWxVTwI7yd-EgagBcTeyKA_AprBGkEPB89sYzMC5ot-gUvZELxP8v3KTc&_nc_zt=23&_nc_ht=scontent.fcgp3-1.fna&_nc_gid=09Y6qxptdJqSf-fOLGqAWg&oh=00_AfFRKxAoHSWl-xDmqUBf4SsxIDpwACTJtia1CgYI1lCfuQ&oe=6801A224",
    "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/483969228_612292614981054_3570390996405755866_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHczH4dVk3JqHfFZm-pgsXoIustyf-eH6Ii6y3J_54for5_3ji6-9o0FjA11A33WhxJcKS0z0NutQCacY7P2nBw&_nc_ohc=0rFXlFWrEdEQ7kNvwEYvJsO&_nc_oc=AdnYprWv-dNK5oYTBkwnB6yPBeBYPplpCBdbqy-rKDEUd-XadQK0Cc2zJ7JkDR5uIfs&_nc_zt=23&_nc_ht=scontent.fcgp3-2.fna&_nc_gid=D67L3PdE8PGYzw10HTKqQw&oh=00_AfGR9oXaB7xUVuKJ8Ixmy-FUMbDy665VXPFbo5thEQX6Zw&oe=680170D0"
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
              <span className="block">পহেলা বৈশাখ ১৪৩২</span>
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
                  <AvatarImage src={friendImages[0]} alt="Friend" />
                  <AvatarFallback className="bg-bengali-red text-white text-2xl">বন্ধু</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative Bengali Symbols */}
              <span className="absolute top-2 left-2 text-white opacity-30 text-2xl rotate-12">৳</span>
              <span className="absolute bottom-2 right-2 text-white opacity-30 text-2xl -rotate-12">ঔ</span>
              
              <h3 className="text-white text-xl font-bold mb-1 mt-4 drop-shadow-md font-bengali">আমার বন্ধু</h3>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full my-2">
                <p className="text-white font-bengali text-xl font-bold animate-pulse-gentle">শুভ নববর্ষ ১৪৩২</p>
              </div>
              <p className="text-white/90 font-medium font-bengali">শুভ নববর্ষ ১৪৩২</p>
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
      
      {/* Gallery Section with Friend's Photos */}
      <section id="gallery" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-bengali">
            বন্ধুর গ্যালারি
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
            পহেলা বৈশাখ ১৪৩২
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
