import React from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ProjectCard = ({
  project,
  position = "center",
  mouseOffset = { x: 0, y: 0 },
  onSelectProject,
  onCardClick,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const isCenter = position === "center";
  const isLeft = position === "left";
  const isRight = position === "right";
  const isVault = position === "vault";

  const projectNumber = project.id < 10 ? `0${project.id}` : `${project.id}`;
  const isLive = Boolean(project.live && project.live !== "#");
  const isGithub = Boolean(project.github && project.github !== "#");

  // Dynamic 3D transform based on position and mouse parallax (Desktop only)
  const get3DStyle = () => {
    if (isVault) {
      return {};
    }

    // On mobile devices (<768px), disable 3D transform matrix to ensure 60fps smooth scrolling
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return {};
    }

    if (isCenter) {
      const rotateX = -mouseOffset.y * 6;
      const rotateY = mouseOffset.x * 8;
      return {
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
      };
    }

    if (isLeft) {
      const rotateX = -mouseOffset.y * 4;
      const rotateY = 16 + mouseOffset.x * 4;
      return {
        transform: `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(-1.5deg) scale(0.86)`,
        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, filter 0.3s ease",
      };
    }

    if (isRight) {
      const rotateX = -mouseOffset.y * 4;
      const rotateY = -16 + mouseOffset.x * 4;
      return {
        transform: `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(1.5deg) scale(0.86)`,
        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, filter 0.3s ease",
      };
    }

    return {};
  };

  const handleOpenUrl = (e, url) => {
    if (!url || url === "#") return;
    if (e) {
      e.stopPropagation();
      // Primary left-click without modifier keys: open directly via window.open
      if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        const win = window.open(url, "_blank", "noopener,noreferrer");
        if (win) {
          win.focus();
        }
      }
    }
  };

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  const handleTitleClick = (e) => {
    e.stopPropagation();
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <div
      onClick={onCardClick}
      style={get3DStyle()}
      className={`relative w-full rounded-2xl sm:rounded-3xl backdrop-blur-md sm:backdrop-blur-2xl text-left flex flex-col justify-between overflow-hidden transition-all duration-300 ${
        isCenter
          ? "bg-white/95 dark:bg-[#0B0D1B]/95 text-slate-900 dark:text-white border border-slate-200/90 dark:border-purple-500/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_80px_-15px_rgba(147,51,234,0.35)] ring-1 ring-slate-900/5 dark:ring-purple-500/20 z-30 p-4 sm:p-6 md:p-7"
          : isLeft || isRight
          ? "bg-white/80 dark:bg-[#080914]/85 text-slate-850 dark:text-white border border-slate-200/70 dark:border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-10 p-3 sm:p-5 md:p-6 brightness-[0.93] dark:brightness-[0.72] opacity-85 dark:opacity-80 hover:opacity-100 hover:brightness-100 dark:hover:brightness-95 cursor-pointer"
          : "group bg-white/90 dark:bg-[#0A0C1A]/90 hover:bg-white dark:hover:bg-[#0E1024]/95 text-slate-900 dark:text-white border border-slate-200/90 dark:border-white/[0.08] hover:border-purple-500/40 dark:hover:border-purple-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_65px_-15px_rgba(147,51,234,0.3)] hover:-translate-y-1.5 p-4 sm:p-5 md:p-6"
      }`}
    >
      {/* Top subtle radiant glow line on center or hover on vault */}
      {isCenter ? (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-secondary opacity-90 z-20 pointer-events-none" />
      ) : isVault ? (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
      ) : null}

      {/* Specular sheen over side cards */}
      {(isLeft || isRight) && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-10" />
      )}

      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3.5">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="shrink-0 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-[11px] sm:text-xs font-mono font-bold text-purple-600 dark:text-purple-300 shadow-xs select-none">
              {projectNumber}
            </span>
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/25 dark:border-purple-500/30 text-[10px] sm:text-[11px] font-mono text-purple-600 dark:text-purple-300 font-semibold uppercase tracking-wider truncate max-w-[125px] xs:max-w-[160px] sm:max-w-[220px] select-none">
              {project.category}
            </span>
          </div>

          {/* Details / Arrow Icon */}
          <button
            type="button"
            onClick={handleDetailsClick}
            className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.15] text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer pointer-events-auto relative z-30"
            title="Inspect Full Project Details"
            aria-label="Inspect Full Project Details"
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          </button>
        </div>

        {/* Project Image (Clicking opens Popup Modal with Full Details) */}
        <div
          onClick={handleImageClick}
          className={`relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#07080F] border border-slate-200/90 dark:border-white/[0.08] my-2 sm:my-3 shadow-md group/img ${
            isCenter || isVault ? "cursor-pointer" : ""
          }`}
          title="Click to view full project details in popup"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 dark:text-white/40">
              No Preview
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Hover Overlay Badge: Displays View Details for Popup */}
          {(isCenter || isVault) && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 pointer-events-none">
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/20 border border-white/30 text-[11px] sm:text-xs font-semibold text-white flex items-center gap-1.5 sm:gap-2 shadow-xl backdrop-blur-md">
                <Eye className="w-3.5 h-3.5" />
                <span>View Details</span>
              </span>
            </div>
          )}

          {/* Live Status indicator on image */}


          {isLive && (
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[9px] sm:text-[10px] font-mono font-bold backdrop-blur-md shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                LIVE
              </span>
            </div>

          )}




        </div>

        {/* Project Title (Clicking opens popup modal) */}
        <h3
          onClick={handleTitleClick}
          className={`text-base sm:text-xl md:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight line-clamp-1 mb-1 sm:mb-2 transition-colors ${
            isCenter || isVault
              ? "cursor-pointer hover:text-purple-600 dark:hover:text-purple-300"
              : "hover:text-purple-600 dark:hover:text-purple-300"
          }`}
          title="Click to view full project details"
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 line-clamp-2 leading-relaxed font-sans mb-3 sm:mb-4">
          {project.description}
        </p>

        {/* Minimal Technology Pills */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3.5 sm:mb-5 select-none">
          {project.technologies?.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono rounded-md sm:rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-white/80 border border-slate-200 dark:border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 5 && (
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] font-mono rounded-md sm:rounded-lg bg-slate-100 dark:bg-white/[0.02] text-slate-400 dark:text-white/40">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-2.5 pt-3 sm:pt-3.5 border-t border-slate-200 dark:border-white/[0.08] mt-auto relative z-30 pointer-events-auto">
        {isGithub && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleOpenUrl(e, project.github)}
            className="flex-1 py-2 sm:py-2.5 md:py-3 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.12] text-slate-800 dark:text-white/90 hover:text-slate-900 dark:hover:text-white border border-slate-300/80 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer pointer-events-auto select-none hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <FaGithub className="text-sm sm:text-base shrink-0" />
            <span>Code</span>
          </a>
        )}

        {isLive && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleOpenUrl(e, project.live)}
            className="flex-1 py-2 sm:py-2.5 md:py-3 px-2.5 sm:px-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-primary to-secondary text-primary-content shadow-md shadow-purple-500/25 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer pointer-events-auto select-none hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;