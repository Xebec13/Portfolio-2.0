import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

/**
 * Hook for type/delete animation. Returns ref and start function.
 * @returns {[ref, start]} tuple
 */
const useTypeDelete = () => {
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  const start = useCallback(() => {
    if (!textRef.current) return;

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      defaults: { duration: 2, ease: "none" },
    });

    tl.to(textRef.current, { duration: 1.5, scrambleText: { text: "Xebec13", tweenLength: false } })
      .to(textRef.current, { duration: 1.5, scrambleText: { text: "David", tweenLength: false } }, "+=2");

    timelineRef.current = tl;
  }, []);

  // Clean up on unmount
  useGSAP(() => {
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, { scope: textRef });

  return [textRef, start];
};

export default useTypeDelete;