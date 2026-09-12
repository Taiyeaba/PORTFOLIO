import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { X, Code2, Sparkles, ExternalLink } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ProjectModal = ({ project, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  const isLive = Boolean(project.live && project.live !== "#");
  const isGithub = Boolean(project.github && project.github !== "#");

  const handleOpenUrl = (e, url) => {
    if (!url || url === "#") return;
    if (e) {
      e.stopPropagation();
      if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        const win = window.open(url, "_blank", "noopener,noreferrer");
        if (win) {
          win.focus();
        }
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 dark:bg-black/85 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white dark:bg-[#0C0E1A] text-slate-900 dark:text-white border border-slate-200 dark:border-white/[0.12] rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col text-left backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-white/[0.02]">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shrink-0" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 shrink-0" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 shrink-0" />
            <span className="ml-2 sm:ml-3 text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-slate-500 dark:text-white/40 uppercase truncate">
              PROJECT SHOWCASE
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.12] text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          {/* Project Preview Image */}
          {project.image && (
            <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/[0.08] shadow-xl bg-slate-100 dark:bg-[#07080F]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Category & Status Badges overlay on image */}
              <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex items-center justify-between gap-2">
                <span className="px-2.5 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold bg-black/75 text-white backdrop-blur-md border border-white/15 truncate">
                  {project.category}
                </span>

                {/* {isLive && (
                  <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] sm:text-xs font-mono font-bold backdrop-blur-md shadow-md shrink-0">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                )} */}


              </div>


            </div>
          )}

          {/* Title & Category Header */}
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Full Description */}
          <div className="space-y-1.5 sm:space-y-2">
            <h4 className="text-[11px] sm:text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              Project Architecture & Overview
            </h4>
            <p className="text-slate-600 dark:text-white/75 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
            <h4 className="text-[11px] sm:text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-1.5 sm:gap-2">
              <Code2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              Technologies & Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-white/85 text-[11px] sm:text-xs font-mono border border-slate-200 dark:border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-white/[0.02] flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          {isGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleOpenUrl(e, project.github)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-4 sm:px-5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-slate-800 dark:text-white/80 hover:text-slate-900 dark:hover:text-white border border-slate-300/80 dark:border-white/10 transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-pointer"
            >
              <FaGithub className="text-base" />
              <span>View Source Code</span>
            </a>
          )}

          {isLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleOpenUrl(e, project.live)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-4 sm:px-5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-primary to-secondary text-primary-content shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
