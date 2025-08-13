import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * Fade in elements matching selector inside the container.
 * @param {string} selector - CSS selector for elements to animate.
 * @param {object} options - Animation options (y, opacity, duration, stagger, ease).
 * @param {function} onComplete - Callback to run after animation completes.
 * @returns {object} ref - Attach to container element.
 */
const useFadeIn = (selector = ".FadeIn", options = {}, onComplete) => {
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
      onComplete: () => {
        if (typeof onComplete === "function") onComplete();
      },
    });

    return () => {
      animation.kill();
    };
  }, { scope: containerRef });

  return containerRef;
};

export default useFadeIn;