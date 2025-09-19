import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import photo1 from "../assets/dav3.png"; // anime
import photo2 from "../assets/dav4.png"; // realistic

gsap.registerPlugin(useGSAP);

const Info = {
  name: "David",
  role: "Front-End Developer",
  greeting: "Hello,",
  tagline1: "I build fast, responsive, visually sharp interfaces.",
  tagline2: "Clean code, thoughtful UX, and performance first.",
  photo1,
  photo2,
};

const LandingPage = () => {
  const boxRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const textRef = useRef(null);
  
  useGSAP(() => {
    const el = boxRef.current;

    // === Initial state for images ===
    gsap.set(img1Ref.current, { opacity: 1 });
    gsap.set(img2Ref.current, { opacity: 0 });

    // === Hover handlers (anime <-> real) ===
    const onOver = () => {
      gsap.to(img1Ref.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
      });
      gsap.to(img2Ref.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power1.out",
      });
    };
    const onOut = () => {
      gsap.to(img1Ref.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power1.out",
      });
      gsap.to(img2Ref.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
      });
    };

    el.addEventListener("mouseenter", onOver);
    el.addEventListener("mouseleave", onOut);

    // === Timeline ===
    const tl = gsap.timeline();

    // Step 1: Fade-in (text + image)
    tl.from(textRef.current.querySelectorAll(".fade-text > *"), {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.2, // 👈 przywracamy delay
    }).from(
      boxRef.current,
      {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
        delay: 0.2, // 👈 też ma małe opóźnienie względem tekstu
      },
      "-=0.6" // overlap (wchodzi trochę równolegle z tekstem)
    );

    // Step 2: Fade-out on scroll
    gsap.to(".fade-out", {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "section#home",
        start: "top top",
        end: "bottom top", // cały czas aż sekcja wyjdzie z viewportu
        scrub: true,
      },
    });

    return () => {
      el.removeEventListener("mouseenter", onOver);
      el.removeEventListener("mouseleave", onOut);
    };
  }, []);

  return (
    <section
      id="home"
      className="h-[200dvh] p-4 md:p-8  mt-5 relative fade-out"
    >
      <div className="sticky top-1/6 md:top-1/3 text-rose-100 grid md:grid-cols-2 gap-10">
        {/* Text column */}
        <div ref={textRef} className="space-y-3 mx-auto fade-text">
          <h1 className=" text-5xl md:text-6xl font-semibold leading-tight">
            {Info.greeting}
          </h1>
          <p className=" text-5xl md:text-6xl font-semibold leading-tight">
            I'm <span className="text-white">{Info.name}</span>
          </p>
          <p className=" text-2xl md:text-3xl bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            {Info.role}
          </p>

          <div className=" text-sm md:text-base text-violet-100">
            <p>{Info.tagline1}</p>
            <p>{Info.tagline2}</p>
          </div>
        </div>

        {/* Image column */}
        <div
          ref={boxRef}
          className="relative w-68 h-68  md:w-86 md:h-86 mx-auto rounded-full drop-shadow-violet-600 shadow-sm bg-rose-100/10 overflow-hidden cursor-pointer"
        >
          {/* Anime image */}
          <div
            ref={img1Ref}
            style={{
              backgroundImage: `url(${Info.photo1})`,
              backgroundPosition: "center 20%", // X=center, Y=20%
            }}
            className="absolute inset-0 rounded-full will-change-[opacity] bg-cover drop-shadow-indigo-500/50"
          />

          {/* Real image */}
          <div
            ref={img2Ref}
            style={{
              backgroundImage: `url(${Info.photo2})`,
              backgroundPosition: "center 10%", // X=center, Y=10%
            }}
            className="absolute inset-0 rounded-full will-change-[opacity] bg-cover drop-shadow-indigo-500/50"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
