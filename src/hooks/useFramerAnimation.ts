import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Hook for fade-in animation when element enters viewport
 */
export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
};

/**
 * Hook for stagger animation of multiple items
 */
export const useStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(
  _selector?: string,
  _stagger?: number
) => {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
};

/**
 * Hook for slide-in animation from left or right
 */
export const useSlideInAnimation = <T extends HTMLElement = HTMLDivElement>(
  _direction?: "left" | "right"
) => {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
};

/**
 * Hook for scale animation
 */
export const useScaleAnimation = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
};
