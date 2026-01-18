import { Award } from "lucide-react";
import teamPhoto from "@/assets/NoteNest_Team.avif";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Team = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="team" className="py-24 bg-card/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Built by students, for students
          </p>
        </div>

        <div className="max-w-4xl mx-auto" ref={containerRef}>
          <motion.div 
            className="glass-card overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto">
                <img 
                  src={teamPhoto} 
                  alt="NoteNest Team at PH Tech Expo Hackathon 2025" 
                  className="w-full h-full object-fit md:object-cover"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium">Hackathon Winners</span>
                </div>

                <h3 className="text-2xl font-display font-bold mb-4">
                  Young Builders on a Mission
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  We're a team of young builders who know the struggles of studying 
                  all too well. We built NoteNest because we wished something like 
                  this existed when we were cramming for exams.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Proud winners of the <span className="text-primary font-medium">PH Tech Expo 
                  Hackathon 2025</span> with NoteNest. We're just getting started!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
