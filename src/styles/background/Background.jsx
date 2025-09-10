import { useEffect, useRef } from "react";
import "./background.css";

const Background = () => {
  const interactiveRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!interactiveRef.current) return;

    const interBubble = interactiveRef.current;
    let curX = 0, curY = 0, tgX = 0, tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20; // smoothing factor
      curY += (tgY - curY) / 20;

      // translate3d = force GPU rendering
      interBubble.style.transform = `translate3d(${Math.round(curX)}px, ${Math.round(curY)}px, 0)`;

      animationFrameRef.current = requestAnimationFrame(move);
    };

    const onMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    move();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div ref={interactiveRef} className="interactive"></div>
      </div>
    </div>
  );
};

export default Background;