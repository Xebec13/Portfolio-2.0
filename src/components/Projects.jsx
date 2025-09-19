import ProjectItem from "./ProjectItem";
import { projectInfo } from "../constants/projectsInfo"; 
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  useGSAP(() => {
    gsap.from(".reveal", {
      x: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".reveal",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".divider", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".divider",
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section 
    id="projects"
    className="min-h-screen md:h-screen p-4 md:p-8 text-rose-100 scroll-mt-50">
      {/* Section header */}
      <div className="grid grid-cols-3 p-2 gap-3 font-semibold uppercase text-sm md:text-xl reveal">
        <span className="justify-self-start">Projects</span>
        <span className="justify-self-start">Tech</span>
        <span className="justify-self-end">Date</span>
      </div>
      <div className="h-1 bg-gradient-to-r from-violet-400/80 to-pink-400/80 divider"></div>

      {/* Projects list */}
      <div className="flex flex-col">
        {[...projectInfo]
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <ProjectItem
              key={item.id}
              {...item}
              isExpanded={expandedId === item.id}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;