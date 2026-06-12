import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import GetApp from "@/components/GetApp";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {showContent && (
        <div className="animate-fade-in">
          <Navbar />
          <main>
            <Hero />
            <Problem />
            <Solution />
            <Features />
            <Benefits />
            <GetApp />
            <Team />
            <Contact />
          </main>
          <Footer />
          <MobileCTA />
        </div>
      )}
    </>
  );
};

export default Index;