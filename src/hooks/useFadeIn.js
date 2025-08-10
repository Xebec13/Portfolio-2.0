import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

const useFadeIn = (selector = "p", options = {}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);

    const animation = gsap.from(elements, {
      y: options.y ?? 60,
      opacity: options.opacity ?? 0,
      duration: options.duration ?? 1.6,
      stagger: options.stagger ?? 0.5,
      ease: options.ease ?? "power3.out",
    });

    return () => {
      animation.kill();
    };
  }, { scope: containerRef });

  return containerRef;
};

export default useFadeIn;
