import { Clock, Smile, Trophy, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Benefits = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const benefits = [
    {
      icon: Clock,
      title: "Save Study Time",
      description: "Cut your study hours in half with AI-powered explanations",
    },
    {
      icon: Smile,
      title: "Personalized Learning",
      description: "Content adapted to your learning style and pace",
    },
    {
      icon: Trophy,
      title: "Ace Your Exams",
      description: "Build real understanding that shows up in your grades",
    },
    {
      icon: Heart,
      title: "Stress-Free Study",
      description: "Say goodbye to anxiety with clear, confident preparation",
    },
  ];

  return (
    <section id="benefits" className="py-24">
      <div className="section-container" ref={containerRef}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Students <span className="text-gradient">Love</span> NoteNest
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results that transform your academic journey
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit) => (
            <motion.div 
              key={benefit.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-display font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
