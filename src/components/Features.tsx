import { FileQuestion, ScanText, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Features = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const features = [
    {
      icon: FileQuestion,
      title: "Past Questions Hub",
      description: "Upload and access a growing library of past exam questions. Practice smarter with real questions from your courses.",
      color: "primary",
    },
    {
      icon: ScanText,
      title: "Handwritten Notes Scanner",
      description: "Snap a photo of your messy notes and watch them transform into clear, explained digital content.",
      color: "secondary",
    },
    {
      icon: Bot,
      title: "Instant AI Chat Tutor",
      description: "Available 24/7 to answer your questions, break down complex topics, and guide your learning journey.",
      color: "sage",
    },
  ];

  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="section-container" ref={containerRef}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to master any subject
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.title}
              className="glass-card p-8 h-full hover:border-primary/50 transition-all duration-500 group"
              variants={itemVariants}
            >
              <div className={`w-16 h-16 rounded-2xl bg-${feature.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}`} />
              </div>

              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
