import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, refreshScrollTriggers } from "@/lib/gsapInit";

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    console.log("🎬 useScrollAnimation: Setting up animation for element:", element.className);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      element.style.opacity = "1";
      console.log("🎬 useScrollAnimation: Reduced motion detected, showing element immediately");
      return;
    }

    // Use gsap.context to properly manage the animation lifecycle
    const ctx = gsap.context(() => {
      console.log("🎬 useScrollAnimation: Creating animation with ScrollTrigger");
      gsap.fromTo(
        element,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
            markers: false,
            onEnter: () => {
              console.log("🎬 useScrollAnimation: Animation triggered for", element.className);
            },
          },
        }
      );
    });

    // Refresh ScrollTrigger to recalculate positions
    const refreshTimer = setTimeout(() => {
      console.log("🎬 useScrollAnimation: Refreshing ScrollTrigger");
      refreshScrollTriggers();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return ref;
};

export const useStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(
  selector: string,
  stagger: number = 0.15
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = element.querySelectorAll(selector);

    if (prefersReducedMotion || items.length === 0) {
      items.forEach((item) => {
        (item as HTMLElement).style.opacity = "1";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });

    const refreshTimer = setTimeout(() => {
      refreshScrollTriggers();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [selector, stagger]);

  return ref;
};

export const useSlideInAnimation = <T extends HTMLElement = HTMLDivElement>(
  direction: "left" | "right" = "left"
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      element.style.opacity = "1";
      return;
    }

    const xStart = direction === "left" ? -80 : 80;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, x: xStart },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });

    const refreshTimer = setTimeout(() => {
      refreshScrollTriggers();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [direction]);

  return ref;
};

export const useScaleAnimation = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      element.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });

    const refreshTimer = setTimeout(() => {
      refreshScrollTriggers();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return ref;
};
