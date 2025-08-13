import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

/**
 * Hook for type/delete animation. Returns ref and start function.
 * @returns {[ref, start]} tuple
 */
const useTypeDelete = (texts = ["Xebec13", "David"]) => {
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  const start = useCallback(() => {
    if (!textRef.current) return;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      defaults: { ease: "none" },
    });

    texts.forEach((text, index) => {
      tl.to(textRef.current, {
        duration: 1.5,
        scrambleText: { text, tweenLength: false }
      }, index === 0 ? undefined : "+=2");
    });

    timelineRef.current = tl;
  }, [texts]);

  useGSAP(() => () => {
    if (timelineRef.current) timelineRef.current.kill();
  }, { scope: textRef });

  return [textRef, start];
};


export default useTypeDelete;