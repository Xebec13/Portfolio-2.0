import { useCallback } from "react";
import profilePhoto from "./assets/portfolio-av1.png";
import useFadeIn from "./hooks/useFadeIn";
import useTypeDelete from "./hooks/useTypeDelete";

const LandingPage = () => {
  const [typeDeleteRef, startTypeDelete] = useTypeDelete();

  // This callback is called when fade-in animation completes
  const handleFadeInComplete = useCallback(() => {
    setTimeout(() => {
      startTypeDelete();
    }, 2000); // Start type/delete 3 seconds after fade-in
  }, [startTypeDelete]);

  // Pass the callback to useFadeIn
  const fadeInRef = useFadeIn("p", { y: 60, duration: 1.6, stagger: 0.5 }, handleFadeInComplete);

  return (
    <section
      ref={fadeInRef}
      className="h-[90vh] p-5 md:p-10 mimi-pink-text grid md:grid-cols-2 place-items-center gap-5"
    >
      <div className="text-center md:text-left space-y-3">
        <div className="font-semibold ">
          <p className="text-[3rem]/15 md:text-[4rem]">Hello,</p>
          <p className="text-[3rem]/15 md:text-[4rem] whitespace-nowrap">
            I'm{" "}
            <span
              className="inline-block"
              ref={typeDeleteRef}
              style={{ width: "4ch" }}
            >
              David
            </span>
          </p>
          <p className="text-[1.5rem] md:text-[2rem] whitespace-nowrap">
            Front-End Developer
          </p>
        </div>
        <div className="text-[0.8rem] md:text-[1rem]">
          <p>I build fast, responsive, visually sharp.</p>
          <p>Always in search of beauty in code, I sail beyond the basics</p>
        </div>
      </div>
      <div className="size-[250px]">
        <img
          src={profilePhoto}
          alt="profile-photo"
          height={"300px"}
          width={"300px"}
          loading="eager"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </section>
  );
};

export default LandingPage;