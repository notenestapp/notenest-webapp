import { Upload, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Solution = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Take a photo or upload your notes, textbooks, or any study material",
      step: "01",
    },
    {
      icon: Sparkles,
      title: "AI Explains",
      description: "Get simplified explanations with real-world examples that click",
      step: "02",
    },
    {
      icon: MessageCircle,
      title: "Chat Tutor",
      description: "Ask follow-up questions 24/7 and get instant, personalized help",
      step: "03",
    },
  ];

  return (
    <section className="py-24">
      <div className="section-container" ref={containerRef}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            The <span className="text-gradient">NoteNest</span> Way
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to transform how you learn
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              className="relative group"
              variants={itemVariants}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-8 z-0">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/50 w-4 h-4" />
                </div>
              )}

              <div className="glass-card p-8 h-full relative z-10 group-hover:border-primary/50 transition-all duration-300 group-hover:glow">
                <div className="text-primary/30 text-6xl font-display font-bold absolute top-4 right-4">
                  {step.step}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
