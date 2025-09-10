import { useState, useRef } from "react";
import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";


const iconsMap = {
  react: <FaReact />,
  tailwind: <RiTailwindCssFill />,
  javascript: <MdJavascript />,
  gsap: (
    <span className="text-[0.5rem] font-bold uppercase align-middle">
      GSAP.js
    </span>
  ),
  sass: <FaSass />,
  css: <MdCss />,
  html: <MdHtml />,
  next: <RiNextjsFill />,
};

const projectInfo = [
  {
    id: 1,
    name: "Cartoon Podcast",
    date: "08.2025",
    icons: ["react", "tailwind", "javascript", "gsap"],
    review:
      "Cartoon Podcast offers a vibrant platform for podcasters discussing classic and modern cartoons, delivering an engaging and immersive user experience that connects with diverse audiences.",
  },
  {
    id: 2,
    name: "Mind The Game",
    date: "06.2025",
    icons: ["react", "tailwind", "javascript", "gsap"],
    review:
      "Mind The Game is a sleek podcast site for former basketball players, featuring smooth content delivery and an appealing interface tailored to sports enthusiasts.",
  },
  {
    id: 3,
    name: "Car Rental",
    date: "06.2025",
    icons: ["next", "tailwind", "javascript", "gsap"],
    review:
      "Car Rental simplifies the online booking process with a user-focused design that ensures seamless navigation and efficient reservation workflows.",
  },
  {
    id: 4,
    name: "Reven Restaurant",
    date: "02.2025",
    icons: ["react", "tailwind", "javascript", "gsap"],
    review:
      "Reven Restaurant presents a visually striking fusion sushi experience with a unique style that captivates trend-conscious visitors seeking innovative dining.",
  },
  {
    id: 5,
    name: "Cozy Leaf Restaurant",
    date: "09.2025",
    icons: ["react", "sass", "javascript"],
    review:
      "Cozy Leaf Restaurant creates an inviting, cozy atmosphere that resonates with upscale vegetarian guests, balancing aesthetic appeal with user-friendly navigation.",
  },
  {
    id: 6,
    name: "Gericht Restaurant Landing Page",
    date: "04.2024",
    icons: ["react", "css", "javascript"],
    review:
      "A clean and professional landing page delivering essential restaurant information, reflecting solid foundational skills in web layout and user experience.",
  },
  {
    id: 7,
    name: "Chat-GPT3 Landing Page",
    date: "04.2024",
    icons: ["react", "css", "javascript"],
    review:
      "A functional and straightforward landing page that effectively presents AI product features with clarity and simplicity.",
  },
  {
    id: 8,
    name: "Hoo Bank Landing Page",
    date: "04.2024",
    icons: ["react", "css", "javascript"],
    review:
      "A polished and accessible interface designed for fintech, focused on usability and performance to build user trust.",
  },
  {
    id: 9,
    name: "Afal-Logistics",
    date: "02.2024",
    icons: ["html", "css", "javascript"],
    review:
      "A clear, service-oriented landing page created for a local logistics firm, translating client needs into an effective digital presence.",
  },
  {
    id: 10,
    name: "PCK",
    date: "12.2023",
    icons: ["html", "css", "javascript"],
    review:
      "A practical site facilitating clothing donations, emphasizing usability and ease of access for social good.",
  },
];

function AccordionItem({ name, date, icons, review, isExpanded, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-pink-200 mimi-pink-text">
      <div
        className={`hoverProject pomp-and-power-50 grid grid-cols-3 gap-3 items-center p-3 cursor-pointer`}
        onClick={onToggle}
      >
        <p className="justify-self-start">{name}</p>

        <div className="flex space-x-2 items-center justify-self-start text-xl">
          {icons.map((iconName) => (
            <div className="flex items-center" key={iconName}>
              {iconsMap[iconName]}
            </div>
          ))}
        </div>

        <p className="justify-self-end">{date}</p>
      </div>

      {/* Expanded poza gridem – bez zmian */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all"
        style={{
          height: isExpanded ? contentRef.current?.scrollHeight + "px" : "0px",
          opacity: isExpanded ? 1 : 0,
          transition:
            "height 0.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.6s ease",
        }}
      >
        <div className="p-3 pomp-and-power-40 grid grid-cols-2 rounded-b-lg">
          <div className="review-info">
            <p className="">{review}</p>
          </div>
          <div className="">
            <div className="size-75 bg-pink-600"></div>
            <div className="size-55 bg-pink-800"></div>
            <div className="size-55 bg-pink-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="min-h-screen p-5 mimi-pink-text">
      {/* Nagłówki kolumn */}
      <div className="grid grid-cols-3 p-2 gap-3 font-semibold border-b-2 border-pink-200 uppercase">
        <p className="justify-self-start">Projects</p>
        <p className="justify-self-start">Tech</p>
        <p className="justify-self-end">Date</p>
      </div>

      {/* Lista projektów */}
      <div className="flex flex-col justify-center">
        {projectInfo.map((item) => (
          <AccordionItem
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
