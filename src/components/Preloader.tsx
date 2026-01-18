import { useEffect, useState } from "react";
import preloaderVideo from "@/assets/preloader.mp4";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [showSkip, setShowSkip] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const skipTimer = setTimeout(() => setShowSkip(true), 800);
    
    return () => {
      clearTimeout(skipTimer);
    };
  }, []);

  const handleComplete = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onComplete, 500);
  };

  const handleVideoEnd = () => {
    handleComplete();
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <video 
          autoPlay 
          muted 
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-ful object-fill min-w-full min-h-full"
        >
          <source src={preloaderVideo} type="video/mp4" />
        </video>
        
        <p className="absolute bottom-24 text-muted-foreground text-lg animate-pulse-slow">
          Preparing your study nest…
        </p>

        {showSkip && !isExiting && (
          <button
            onClick={handleComplete}
            className="absolute bottom-12 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default Preloader;
