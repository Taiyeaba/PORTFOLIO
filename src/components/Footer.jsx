import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-base-content/5 bg-base-100/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Copyright & Name */}
        <div className="text-center md:text-left">
          <p className="text-sm text-base-content/60 font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
              Taiyeaba Shams
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs text-base-content/50 mt-1">
            Crafting scalable MERN & AI-enhanced digital experiences.
          </p>
        </div>

        {/* Center - Tech details */}
        <div className="flex items-center gap-2 text-sm text-base-content/60 bg-base-200/50 border border-base-content/5 px-4 py-2 rounded-xl shadow-sm">
          <FaCode className="text-primary" />
          <span>
            React ⚛️ & Tailwind CSS 4
          </span>
        </div>

        {/* Right - Real Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Taiyeaba?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-base-200/50 hover:bg-base-300 text-base-content/60 hover:text-base-content flex items-center justify-center border border-base-content/5 transition-all hover:scale-105 shadow-sm"
            title="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/taiyeaba-shams-a167b9332"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-base-200/50 hover:bg-base-300 text-base-content/60 hover:text-base-content flex items-center justify-center border border-base-content/5 transition-all hover:scale-105 shadow-sm"
            title="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;