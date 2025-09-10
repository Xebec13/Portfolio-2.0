import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="min-h-screen p-5 mimi-pink-text">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-pink-200 pb-2">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Lewa kolumna */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold pomp-and-power-50">Let’s Connect</h3>

          <a
            href="https://www.linkedin.com/in/twoj-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-pomp-and-power-50 hover:bg-pomp-and-power-40 p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaLinkedin size={28} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/twoj-profil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-pomp-and-power-50 hover:bg-pomp-and-power-40 p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub size={28} />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:twojemail@example.com"
            className="flex items-center space-x-3 bg-pomp-and-power-50 hover:bg-pomp-and-power-40 p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <MdEmail size={28} />
            <span>Email</span>
          </a>
        </div>

        {/* Prawa kolumna */}
        <div className="bg-pomp-and-power-40 p-6 rounded-lg shadow-lg">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-pomp-and-power-50 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-pomp-and-power-50 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="p-3 rounded-lg bg-pomp-and-power-50 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-400 text-white font-semibold p-3 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;