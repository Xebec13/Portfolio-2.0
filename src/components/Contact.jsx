import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialsMap } from "../constants/Icons";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    // Animate slogan first (simple reveal from top)
    gsap.from(".contact-slogan", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-slogan",
        start: "top 85%",
        toggleActions: "play none none none", // one-time reveal
      },
    });

    // Animate socials after slogan (staggered)
    gsap.from(".contact-social", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2, // small offset so slogan leads
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contact-social",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="h-[40dvh] p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 place-items-center 
                 bg-gradient-to-t from-black/30 via-transparent to-black/30"
    >
      {/* Left side - slogan */}
      <div className="contact-slogan">
        <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-rose-100">
          Let’s craft clean, performant <br /> experiences together.
        </h3>
      </div>

      {/* Right side - socials */}
      <div className="contact-socials flex gap-6 justify-center">
        {Object.entries(socialsMap).map(([key, social]) => (
          <a
            key={key}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social flex flex-col gap-1 items-center px-4 py-2 rounded 
                       duration-500 hover:bg-rose-100/20 transition-colors group"
          >
            {/* Icon */}
            <span
              className={`text-3xl md:text-4xl ${social.color} group-hover:text-white transition-colors`}
            >
              {social.icon}
            </span>

            {/* Label */}
            <span className="text-xs md:text-sm font-medium text-pink-100 group-hover:text-white transition-colors">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
