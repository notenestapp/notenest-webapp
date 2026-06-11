import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Download, Smartphone, ShieldCheck, HelpCircle, ChevronDown, Check, Settings, Info } from "lucide-react";
import androidMockup from "@/assets/android_mockup.png";

const GetApp = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [showInstructions, setShowInstructions] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  const mascotVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  const steps = [
    {
      num: "1",
      title: "Download APK",
      desc: "Tap the download button above to grab the official NoteNest APK file directly to your device.",
      icon: Download,
    },
    {
      num: "2",
      title: "Enable Unkown Sources",
      desc: "Go to Settings > Security (or Apps) and allow installation from 'Unknown Sources' or your browser.",
      icon: Settings,
    },
    {
      num: "3",
      title: "Install & Learn",
      desc: "Open the downloaded .apk file from your notifications or downloads folder and tap 'Install'.",
      icon: Check,
    },
  ];

  return (
    <section id="download" className="py-24 bg-card/30 relative overflow-hidden" ref={containerRef}>
      {/* Soft Glow Background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Phone Mockup */}
          <motion.div
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
            variants={mascotVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative group">
              {/* Decorative radial gradient glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl scale-95 group-hover:scale-100 transition-transform duration-500" />

              <img
                src={androidMockup}
                alt="NoteNest Android App Interface Mockup"
                className="relative max-w-xs md:max-w-sm h-auto object-contain drop-shadow-2xl animate-float"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card p-4 flex items-center gap-3 shadow-lg border-primary/20 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Platform</p>
                  <p className="text-sm font-bold text-foreground">Android OS 8.0+</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Context & Buttons */}
          <motion.div
            className="lg:col-span-7 space-y-8 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                <Smartphone className="w-3.5 h-3.5" />
                Android Application
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Study Anywhere with the <span className="text-gradient">NoteNest App</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Take your personalized study companion on the go. Scan notebooks in seconds, review flashcards offline, and get prompt study notifications before exams.
              </p>
            </motion.div>

            {/* Mobile Feature List */}
            <motion.div className="grid sm:grid-cols-2 gap-4" variants={itemVariants}>
              {[
                "Instant offline study sessions",
                "Direct smartphone camera notes scanner",
                "Optimized high-performance mobile UI",
                "100% secure, ad-free experience",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-foreground/90 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Download Actions */}
            <motion.div className="space-y-4 pt-2" variants={itemVariants}>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a
                  href="/notenest.apk"
                  download
                  className="btn-primary inline-flex items-center justify-center gap-2 group text-base"
                >
                  <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Download NoteNest APK
                </a>

                <button
                  onClick={() => setShowInstructions(!showInstructions)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-border/80 text-foreground hover:bg-muted font-semibold rounded-full transition-all duration-300"
                >
                  <HelpCircle className="w-5 h-5" />
                  How to Install (.apk)
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showInstructions ? "rotate-180" : ""}`} />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground px-1">
                <Info className="w-3.5 h-3.5" />
                <span>Version 1.0.0 (Beta) | File: APK</span>
              </div>
            </motion.div>

            {/* Instructions Accordion Panel */}
            <AnimatePresence>
              {showInstructions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="glass-card p-6 border-primary/20 space-y-6 mt-4">
                    <h3 className="font-display font-bold text-lg border-b border-border/50 pb-2">
                      Easy Side-loading Guide
                    </h3>

                    <div className="grid gap-6 md:grid-cols-3">
                      {steps.map((s) => (
                        <div key={s.num} className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center shrink-0">
                              {s.num}
                            </div>
                            <h4 className="font-bold text-sm text-foreground/90">{s.title}</h4>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
