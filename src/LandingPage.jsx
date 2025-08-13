import { useCallback } from "react";
import profilePhoto from "./assets/portfolio-av1.png";
import useFadeIn from "./hooks/useFadeIn";
import useTypeDelete from "./hooks/useTypeDelete";

const LandingPage = () => {
  const [typeDeleteRef, startTypeDelete] = useTypeDelete(["Xebec13", "David"]);

  // This callback is called when fade-in animation completes
  const handleFadeInComplete = useCallback(() => {
    setTimeout(() => {
      startTypeDelete();
    }, 2000); // Start type/delete 2 seconds after fade-in
  }, [startTypeDelete]);

  // Pass the callback to useFadeIn
  const fadeInRef = useFadeIn(
    ".FadeIn",
    { y: 60, duration: 1.6, stagger: 0.5 },
    handleFadeInComplete
  );

  return (
    <section className="h-[90vh] p-5 mimi-pink-text grid md:grid-cols-2 gap-5">
      <div 
      ref={fadeInRef}
      className="text-left space-y-3 justify-self-center self-center">
        <div className="font-semibold" >
          <p className="FadeIn text-[3rem]/15 md:text-[4rem]">Hello,</p>
          <p className="FadeIn text-[3rem]/15 md:text-[4rem] whitespace-nowrap">
            I'm{" "}
            <span className="inline-block w-[4ch]" ref={typeDeleteRef}>
              David
            </span>
          </p>
          <p className="FadeIn text-[1.5rem] md:text-[2rem] whitespace-nowrap">
            Front-End Developer
          </p>
        </div>
        <div className="text-[0.8rem] md:text-[1rem]">
          <p className="FadeIn">I build fast, responsive, visually sharp.</p>
          <p className="FadeIn">Always in search of beauty in code, I sail beyond the basics</p>
        </div>
      </div>
      <div className="size-[350px] self-center justify-self-center">
        <img
          src={profilePhoto}
          alt="profile-photo"
          height={"300px"}
          width={"300px"}
          loading="eager"
          className="w-full h-full object-cover rounded-full z-2"
        />
      </div>
    </section>
  );
};

export default LandingPage;
