import { socialsMap } from "../constants/Icons";

const SocialIcons = ({ socials = ["github", "linkedin"] }) => {
  return (
    <div className="flex gap-4">
      {socials.map((key) => {
        const social = socialsMap[key];
        return (
          <a
            key={key}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded duration-500 hover:bg-gray-100 hover:text-black/80 transition-colors"
          >
            {social.icon} {social.name}
          </a>
        );
      })}
    </div>
  );
};


const Contact = () => {
  return (
    <section
      id="contact"
      className="h-[50dvh] p-4 md:p-8 grid grid-cols-2 outline-2"
    >
      <div className="">

      </div>
      <div className="test">
        <h2>MIejsce na slogan skontaktuj sie ze mna</h2>
        <div className="" > 

        </div>
      </div>
    </section>
  );
};

export default Contact;