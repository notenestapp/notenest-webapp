import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Configure ScrollTrigger defaults
ScrollTrigger.defaults({
  markers: false,
  scrub: false,
});

// Export initialized gsap for use in components
export { gsap, ScrollTrigger };

// Utility function to refresh all triggers
export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};

// Utility function to kill all animations
export const killAllAnimations = () => {
  gsap.killTweensOf("*");
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
