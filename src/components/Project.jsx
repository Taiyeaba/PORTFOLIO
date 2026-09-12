import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../Data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useTheme } from "./ThemeProvider";
import {
  Layers,
  Database,
  Layout,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Project = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const stageRef = useRef(null);
  const rafRef = useRef(null);

  const mernCount = projectsData.filter((p) => {
    const cat = p.category.toLowerCase();
    return cat.includes("mern") || cat.includes("full") || cat.includes("real-time");
  }).length;

  const frontendCount = projectsData.filter((p) => {
    const cat = p.category.toLowerCase();
    return cat.includes("frontend") || cat.includes("react");
  }).length;

  const categories = [
    { id: "all", name: "All Projects", shortName: "All", count: projectsData.length, icon: Layers },
    { id: "mern", name: "MERN Stack", shortName: "MERN", count: mernCount, icon: Database },
    { id: "frontend", name: "React Landing Page", shortName: "React", count: frontendCount, icon: Layout },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "all") return true;

    const cat = project.category.toLowerCase();
    if (activeCategory === "mern") {
      return cat.includes("mern") || cat.includes("full") || cat.includes("real-time");
    }
    if (activeCategory === "frontend") {
      return cat.includes("frontend") || cat.includes("react");
    }
    return true;
  });

  const total = filteredProjects.length;

  // Safe circular indices for 3 simultaneous projects
  const safeActiveIndex = total > 0 ? activeIndex % total : 0;
  const leftIndex = total > 0 ? (safeActiveIndex - 1 + total) % total : 0;
  const centerIndex = safeActiveIndex;
  const rightIndex = total > 0 ? (safeActiveIndex + 1) % total : 0;

  const leftProject = filteredProjects[leftIndex];
  const centerProject = filteredProjects[centerIndex];
  const rightProject = filteredProjects[rightIndex];

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setActiveIndex(0);
  };

  const handlePrev = () => {
    if (total > 0) {
      setActiveIndex((prev) => (prev - 1 + total) % total);
    }
  };

  const handleNext = () => {
    if (total > 0) {
      setActiveIndex((prev) => (prev + 1) % total);
    }
  };

  const handleMouseMove = (e) => {
    // Skip on touch/mobile devices to conserve battery and GPU cycles
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      setMouseOffset({ x, y });
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-slate-50 dark:bg-[#06070E] text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-white/[0.06] relative overflow-hidden transition-colors duration-300"
    >
      
      

      {/* Ambient Lighting Halos - optimized for mobile GPU */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[850px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-purple-600/10 via-pink-600/08 to-transparent dark:from-purple-600/15 dark:via-pink-600/10 rounded-full blur-3xl sm:blur-[140px] pointer-events-none" />
      <div className="hidden md:block absolute top-1/3 -left-48 w-[500px] h-[500px] bg-indigo-500/06 dark:bg-purple-700/08 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-pink-500/06 dark:bg-pink-600/08 rounded-full blur-[140px] pointer-events-none" />

      {/* Ambient Floor Glow under the cards */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-28 sm:h-36 bg-gradient-to-t from-fuchsia-600/10 via-purple-600/08 to-transparent dark:from-fuchsia-600/15 dark:via-purple-600/10 blur-2xl sm:blur-[100px] pointer-events-none z-0" />

      {/* Perspective Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "4.5rem 4.5rem",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. SECTION HEADER                                        */}
       
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto px-2">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-300 text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase mb-2 sm:mb-3">
            <span>SELECTED WORK</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 sm:mt-3.5 text-slate-600 dark:text-white/60 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-xl mx-auto">
            Crafted with modern technologies, thoughtful design, and interactive experiences.
          </p>

          {/* Subtle decorative glow line below subtitle */}
          <div className="flex items-center justify-center mt-4 sm:mt-5">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent shadow-sm shadow-purple-500/50" />
          </div>
        </div>

      
        {/* 3. FILTER CAPSULE BAR (Rounded Pill Capsule)             */}
       
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 px-1">
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-slate-200/70 dark:bg-[#0B0D1B]/80 border border-slate-300/70 dark:border-white/[0.08] backdrop-blur-xl shadow-lg max-w-full overflow-x-auto gap-1 sm:gap-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-2.5 xs:px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] xs:text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-content font-bold shadow-[0_0_25px_rgba(217,70,239,0.45)] scale-[1.02]"
                      : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                      isActive ? "text-white" : "text-purple-600 dark:text-purple-400"
                    }`}
                  />
                  <span>
                    <span className="inline sm:hidden">{cat.shortName}</span>
                    <span className="hidden sm:inline">{cat.name}</span>
                  </span>
                  <span
                    className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-300/80 dark:bg-white/[0.06] text-slate-600 dark:text-white/50"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

     
        {/* 4. EXACT 3-PROJECT SIMULTANEOUS 3D CINEMATIC SHOWCASE     */}
      
        {total > 0 ? (
          <div className="relative w-full overflow-hidden sm:overflow-visible">
            <div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-7xl mx-auto py-2 sm:py-6 md:py-10 min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[660px] flex items-center justify-center perspective-[1600px] overflow-visible"
            >
              {/* Left Project Card (Wider along X axis, 3D inward rotation) */}
              {leftProject && (
                <div
                  onClick={() => setActiveIndex(leftIndex)}
                  className="hidden md:block absolute -left-10 lg:left-2 xl:left-8 top-1/2 -translate-y-1/2 w-[360px] lg:w-[430px] xl:w-[480px] z-10 transition-all duration-700 ease-out cursor-pointer pointer-events-auto"
                  title="Click to bring into center focus"
                >
                  <ProjectCard
                    project={leftProject}
                    position="left"
                    mouseOffset={mouseOffset}
                    onSelectProject={setSelectedProject}
                    onCardClick={() => setActiveIndex(leftIndex)}
                  />
                </div>
              )}

              {/* Center Project Card (Expansive width along X axis, primary focus) */}
              {centerProject && (
                <div className="relative z-30 w-full max-w-[335px] xs:max-w-[370px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px] transition-all duration-700 ease-out mx-auto px-1 sm:px-0">
                  <ProjectCard
                    project={centerProject}
                    position="center"
                    mouseOffset={mouseOffset}
                    onSelectProject={setSelectedProject}
                    onCardClick={() => setSelectedProject(centerProject)}
                  />
                </div>
              )}

              {/* Right Project Card (Wider along X axis, 3D inward rotation) */}
              {rightProject && (
                <div
                  onClick={() => setActiveIndex(rightIndex)}
                  className="hidden md:block absolute -right-10 lg:right-2 xl:right-8 top-1/2 -translate-y-1/2 w-[360px] lg:w-[430px] xl:w-[480px] z-10 transition-all duration-700 ease-out cursor-pointer pointer-events-auto"
                  title="Click to bring into center focus"
                >
                  <ProjectCard
                    project={rightProject}
                    position="right"
                    mouseOffset={mouseOffset}
                    onSelectProject={setSelectedProject}
                    onCardClick={() => setActiveIndex(rightIndex)}
                  />
                </div>
              )}
            </div>

            {/* Stage Navigation: Prev / Next Buttons & Interactive Dot Indicators */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-8">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200/80 hover:bg-slate-300 dark:bg-white/[0.04] dark:hover:bg-white/[0.1] border border-slate-300/80 dark:border-white/[0.08] text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      centerIndex === idx
                        ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-gradient-to-r from-primary to-secondary shadow-sm shadow-purple-500/50"
                        : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200/80 hover:bg-slate-300 dark:bg-white/[0.04] dark:hover:bg-white/[0.1] border border-slate-300/80 dark:border-white/[0.08] text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="py-16 sm:py-20 text-center text-slate-500 dark:text-white/50">
            No projects found in this category.
          </div>
        )}

        
        {/* 5. EXPLORE FULL VAULT BUTTON                             */}
       


        <div className="text-center mt-10 sm:mt-16 md:mt-20">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-primary to-secondary text-primary-content shadow-lg sm:shadow-xl shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore Full Project Vault</span>
            <span className="px-2 sm:px-2.5 py-0.5 rounded-lg bg-black/25 text-[11px] sm:text-xs font-mono font-semibold backdrop-blur-sm">
              {projectsData.length} Projects
            </span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Project Details Modal Popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Project;
