import profilePhoto from "./assets/portfolio-av1.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LandingPage = () => {
  return (
    <section className="mimi-pink-text flex justify-center items-center h-[90vh] p-25 gap-4">
      <div className="w-3/4 h-1/2 flex items-start justify-center flex-col">
        <p className="text-5xl">Hello I'm David</p>
        <p className="text-2xl">Front-End Developer</p>
        <p className="text-s">
          I build fast, responsive, visually sharp. Always in search of beauty
          in code, I sail beyond the basics
        </p>
      </div>
      <div className="size-[300px]">
        <img
          src={profilePhoto}
          alt="profile-photo"
          height={"250px"}
          width={"250px"}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </section>
  );
};

export default LandingPage;
