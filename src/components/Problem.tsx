import noviSad from "@/assets/fus.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Problem = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={containerRef}>
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              The Struggle is <span className="text-primary">Real</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                We've all been there—staring at pages of notes that make zero sense, 
                cramming the night before an exam, or zoning out during lectures because 
                the pace is just too fast.
              </p>
              <p>
                Traditional studying can feel overwhelming, boring, and honestly? 
                Pretty lonely. You deserve better tools to actually understand what 
                you're learning, not just memorize and forget.
              </p>
              <p>
                That's exactly why we built NoteNest.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex justify-center md:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl scale-75" />
              <img 
                src={noviSad} 
                alt="Novi feeling the study struggle" 
                className="relative w-80 md:w-[50rem] h-auto drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
