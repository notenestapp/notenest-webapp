import { useRef } from "react";
import { BookOpen, Upload, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import novi from "@/assets/novi.png";
import novionbook from "@/assets/novionbook.png";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const mascotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden pattern-bg"
    >
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Welcome to <span className="text-gradient">NoteNest</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-display">
                Study Smarter, Not Harder
              </p>
            </motion.div>

            <motion.p 
              className="text-lg text-muted-foreground max-w-lg"
              variants={itemVariants}
            >
              Tired of losing track in class? NoteNest is your 24/7 study companion on a mission to help you truly understand.
            </motion.p>

            <motion.ul className="space-y-4" variants={containerVariants}>
              {[
                { icon: Upload, text: "Upload your study materials" },
                { icon: BookOpen, text: "Understand concepts fast" },
                { icon: MessageCircle, text: "Ace your exams with confidence" },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <a href="#download" className="btn-primary">
                Get Android App
              </a>
              <p className="text-sm text-muted-foreground self-center">
                Download APK directly for Android.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Mascot */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={mascotVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              <img 
                src={novionbook} 
                alt="Novi - NoteNest Mascot" 
                className="relative w-64 md:w-80 lg:w-96 h-auto animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-pulse-slow">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
