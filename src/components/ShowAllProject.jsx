import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../Data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useTheme } from "./ThemeProvider";
import { ArrowLeft, Search, X, Layers, Database, Layout } from "lucide-react";

const ShowAllProject = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", name: "All Works", icon: Layers, count: projectsData.length },
    {
      id: "mern",
      name: "MERN Stack",
      icon: Database,
      count: projectsData.filter(
        (p) =>
          p.category.toLowerCase().includes("mern") ||
          p.category.toLowerCase().includes("full") ||
          p.category.toLowerCase().includes("real-time")
      ).length,
    },
    {
      id: "frontend",
      name: "Frontend (React)",
      icon: Layout,
      count: projectsData.filter(
        (p) =>
          p.category.toLowerCase().includes("frontend") ||
          p.category.toLowerCase().includes("react")
      ).length,
    },
  ];

  const filteredProjects = projectsData.filter((project) => {
    // Search match
    const titleMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const techMatch = project.technologies?.some((t) =>
      t.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesSearch = titleMatch || descMatch || techMatch;

    // Category match
    let matchesCategory = true;
    const cat = project.category.toLowerCase();
    if (activeCategory === "mern") {
      matchesCategory =
        cat.includes("mern") || cat.includes("full") || cat.includes("real-time");
    } else if (activeCategory === "frontend") {
      matchesCategory = cat.includes("frontend") || cat.includes("react");
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-[#06070E] text-slate-900 dark:text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-14 lg:px-20 text-left relative overflow-hidden transition-colors duration-300 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Top ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[300px] sm:h-[450px] bg-gradient-to-b from-purple-600/10 via-pink-600/10 to-transparent dark:from-purple-600/15 dark:via-indigo-600/10 blur-3xl sm:blur-[120px] pointer-events-none -z-10" />

      {/* Subtle cyber grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] opacity-[0.03] dark:opacity-[0.04] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Back button & Title */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white bg-slate-200/70 hover:bg-slate-300 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300/80 dark:border-white/[0.08] hover:border-purple-500/40 backdrop-blur-md transition-all duration-200 group w-fit cursor-pointer shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1 text-purple-600 dark:text-purple-400" />
                <span>Back to Home</span>
              </Link>

            


            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Project{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Vault
              </span>
            </h1>
           
          </div>

          {/* Search box */}
          <div className="relative w-full md:max-w-xs lg:max-w-sm">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400 dark:text-white/40">
              <Search className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <input
              type="text"
              placeholder="Search by tech, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 sm:py-3 bg-white dark:bg-[#0B0D1B]/90 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.15] focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 text-xs sm:text-sm rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40 outline-none backdrop-blur-xl transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-3 flex items-center text-slate-400 dark:text-white/40 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-slate-200 dark:border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-content shadow-lg shadow-purple-500/25 scale-[1.02]"
                      : "bg-slate-200/70 hover:bg-slate-300 dark:bg-white/[0.03] dark:hover:bg-white/[0.07] text-slate-700 dark:text-white/60 hover:text-slate-900 dark:hover:text-white border border-slate-300/70 dark:border-white/[0.06]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-purple-600 dark:text-purple-400"}`} />
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-300/80 dark:bg-white/[0.06] text-slate-600 dark:text-white/50"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Counter */}
          <div className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-white/40 tracking-wider uppercase">
            Showing <span className="text-purple-600 dark:text-purple-300 font-bold">{filteredProjects.length}</span> of {projectsData.length} projects
          </div>
        </div>

        {/* Project Vault Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                position="vault"
                onSelectProject={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="relative max-w-lg mx-auto py-16 px-8 rounded-3xl bg-white dark:bg-[#0B0D1B]/90 border border-slate-200 dark:border-white/[0.08] text-center backdrop-blur-xl shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No matching projects found</h3>
            <p className="text-slate-500 dark:text-white/50 text-xs sm:text-sm leading-relaxed mb-6">
              No projects matched "{searchQuery}". Try searching for another keyword like "React", "Node", or "Tailwind".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-content text-xs font-bold transition-all shadow-lg hover:shadow-purple-500/25 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
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

export default ShowAllProject;
