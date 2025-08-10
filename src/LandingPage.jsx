import profilePhoto from "./assets/portfolio-av1.png";
//Hooks
import useFadeIn from "./hooks/useFadeIn"


const LandingPage = () => {
    const fadeInRef = useFadeIn("p", { y: 60, duration: 1.6, stagger: 0.5 });

  return (
    <section
      ref={fadeInRef}
      className="h-[90vh] p-10 md:p-25 mimi-pink-text grid md:grid-cols-2 place-items-center"
    >
      <div className="text-center md:text-left space-y-3">
        <div className="font-semibold ">
          <p className="text-[3rem] md:text-[4rem]">
            Hello, <span className="whitespace-nowrap">I'm David</span>
          </p>
          <p className="text-[1.5rem] md:text-[2rem]">Front-End Developer</p>
        </div>
        <div className="text-[0.8rem] md:text-[1rem]">
          <p>I build fast, responsive, visually sharp.</p>
          <p>Always in search of beauty in code, I sail beyond the basics</p>
        </div>
      </div>
      <div className="size-[200px] md:size-[300px]">
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
