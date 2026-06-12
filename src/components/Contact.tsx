import { useState, useEffect, useRef } from "react";
import { Send, Loader2, Check, AlertCircle } from "lucide-react";
import novi from "@/assets/novi.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { initEmailJS, sendContactEmail } from "@/lib/emailjs";

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  // Initialize EmailJS on component mount
  useEffect(() => {
    const initialized = initEmailJS();
    if (!initialized) {
      setEmailError("Email service not configured. Please check your environment variables.");
    }
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !firstName || !lastName || !message || status === "loading") {
      setEmailError("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (message.trim().length < 10) {
      setEmailError("Message must be at least 10 characters long");
      return;
    }

    setEmailError("");
    setStatus("loading");

    try {
      await sendContactEmail(firstName, lastName, email, message);
      setStatus("success");
      setEmail("");
      setFirstName("");
      setLastName("");
      setMessage("");
      
      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Contact submission error:", error);
      setStatus("error");
      setEmailError("Failed to send message. Please try again.");
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "var(--gradient-glow)" }}
      />

      <motion.div 
        className="section-container relative z-10"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img src={novi} alt="Novi" className="w-24 h-auto animate-float" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Have a Question or <span className="text-gradient">Feedback</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Reach out to our team directly. We are always looking for ways to improve NoteNest.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="max-w-md mx-auto space-y-4 text-left">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all duration-300"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all duration-300"
            />
            <textarea
              placeholder="Your message (minimum 10 characters)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground resize-none transition-all duration-300"
            />
            
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <Check className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
            
            {(status === "error" || emailError) && (
              <div className="flex items-center justify-center gap-2 text-destructive text-sm pt-2">
                <AlertCircle className="w-4 h-4" />
                {emailError || "Something went wrong. Try again in a moment."}
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
