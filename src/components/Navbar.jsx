import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "features", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      let currentActive = "home";
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentActive = section;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        currentActive = "contact";
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Taiyeaba-Resume.pdf'; 
    link.download = 'Taiyeaba-Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", link: "#home", id: "home" },
    { name: "Features", link: "#features", id: "features" },
    { name: "About", link: "#about", id: "about" },
    { name: "Skills", link: "#skills", id: "skills" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:pt-6">
      <nav 
        className={`mx-auto max-w-6xl w-full rounded-2xl border transition-all duration-500 ${
          scrolled 
            ? "glass-panel glass-panel-glow border-base-content/10 shadow-xl py-2.5 px-6" 
            : "bg-transparent border-transparent py-4 px-6"
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            onClick={(e) => handleNavClick("home", e)} 
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-content flex justify-center items-center text-lg font-bold shadow-lg transition-all duration-300 group-hover:scale-110">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-base-content to-base-content/60 bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300">
                Taiyeaba
              </h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                <span className="text-[10px] text-base-content/50 font-medium tracking-wider uppercase">Active 2026</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1 items-center bg-base-200/50 border border-base-content/5 p-1 rounded-xl backdrop-blur-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 block ${
                    activeSection === item.id 
                      ? "text-primary-content bg-primary shadow-sm" 
                      : "text-base-content/70 hover:text-base-content hover:bg-base-content/5"
                  }`}
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-base-200/50 hover:bg-base-300 border border-base-content/5 transition-all text-base-content"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Download */}
            <button
              onClick={handleResumeDownload}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border bg-gradient-to-r from-primary to-secondary text-primary-content border-transparent hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-base-200/50 hover:bg-base-300 border border-base-content/5 transition-all text-base-content"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-base-200/50 border border-base-content/5 text-base-content hover:bg-base-300 transition-all active:scale-95"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute left-4 right-4 mt-2 rounded-2xl glass-panel border border-base-content/10 shadow-2xl transition-all duration-500 overflow-hidden ${
          open ? "max-h-[380px] opacity-100 p-5 visible" : "max-h-0 opacity-0 invisible p-0"
        }`}
      >
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={`block text-base transition-all duration-300 py-2.5 px-4 rounded-xl font-medium ${
                  activeSection === item.id
                    ? "text-primary-content bg-primary"
                    : "text-base-content/70 hover:text-base-content hover:bg-base-content/5"
                }`}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-4 border-t border-base-content/5 mt-2">
            <button
              onClick={handleResumeDownload}
              className="w-full text-center py-3 rounded-xl shadow-lg transition-all duration-300 font-semibold text-sm bg-gradient-to-r from-primary to-secondary text-primary-content flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;