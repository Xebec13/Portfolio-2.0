import { useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import { iconsMap } from "../constants/Icons";
import { imagesMap } from "../constants/images";

const ProjectItem = ({
  name,
  date,
  icons,
  review,
  images,
  bgColor,
  bgColor2,
  textColor,
  textColor2,
  href,
  gitHref,
  isExpanded,
  onToggle,
}) => {
  const contentRef = useRef(null);

  // Helper for fade-in / fade-out transitions
  const fadeInClass = (isExpanded) =>
    `transition-all duration-700 ease-out ${
      isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <div>
      {/* Main Project Button (header row) */}
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className={`relative reveal grid grid-cols-3 gap-3 items-center p-3 w-full text-left cursor-pointer transition-colors duration-700
          ${isExpanded ? bgColor : "hover:bg-rose-100/20"}`}
      >
        {/* Project title */}
        <h3
          className={`text-sm md:text-lg justify-self-start transition-transform duration-300 ease-in-out
            ${isExpanded ? "translate-x-1" : "-translate-x-1"}`}
        >
          {name}
        </h3>

        {/* Tech icons (hidden in expanded view) */}
        <div
          className={`flex flex-wrap items-center gap-2 text-lg md:text-xl transition-all duration-500
            ${
              !isExpanded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-5"
            }`}
        >
          {icons.map((iconName) => (
            <span key={iconName}>{iconsMap[iconName]}</span>
          ))}
        </div>

        {/* Date + dropdown arrow (hidden in expanded view) */}
        <div className="flex items-center justify-end space-x-2">
          <span
            className={`text-sm md:text-lg transition-all duration-500
              ${
                !isExpanded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5"
              }`}
          >
            {date}
          </span>
          <IoChevronDown
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </button>

      {/* Expanded content container */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-700 ease-in-out ${bgColor}`}
        style={{
          maxHeight: isExpanded ? "9999px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div
          className={`overflow-y-auto p-6 rounded-b-lg space-y-4 ${textColor}`}
        >
          {/* Project description */}
          <p className={`p-1 md:w-3/4 text-sm ${fadeInClass(isExpanded)}`}>{review}</p>

          {/* Project images */}
          <div className="grid md:grid-cols-3 gap-2">
            {(imagesMap[images] || []).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${name} screenshot ${idx + 1}`}
                className={`w-full h-full object-cover rounded-md shadow-lg shadow-black/40 ${fadeInClass(
                  isExpanded
                )}`}
              />
            ))}
          </div>

          {/* Links + Tech stack row */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 ${fadeInClass(
              isExpanded
            )}`}
          >
            {/* Action links */}
            <div className="flex gap-1 md:mr-auto">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 text-xs md:text-sm font-semibold ${bgColor2} ${textColor2} rounded duration-500 hover:bg-gray-100 hover:text-black/80 transition-colors`}
              >
                Live Demo
              </a>
              <a
                href={gitHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 text-xs md:text-sm font-semibold ${bgColor} ${textColor} rounded duration-500 hover:bg-gray-100 hover:text-black/80 transition-colors`}
              >
                GitHub
              </a>
            </div>

            {/* Tech stack tags (aligned to the right) */}
            <div className="md:self-end md:justify-self-end self-center justify-self-start gap-2 flex items-center justify-center">
              {icons.map((tech) => (
                <div
                  key={tech}
                  className={`p-2 flex items-center justify-center px-2 text-[0.65rem] leading-none font-semibold rounded-full hover:bg-gray-100 hover:text-black/80 transition-colors ${bgColor} ${fadeInClass(
                    isExpanded
                  )}`}
                >
                  {tech.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider below each project */}
      <div className="h-0.5 bg-gradient-to-r from-pink-500/80 to-rose-300/80 divider"></div>
    </div>
  );
};

export default ProjectItem;
