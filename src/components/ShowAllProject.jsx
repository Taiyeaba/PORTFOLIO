import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../Data/projectsData";
import ProjectCard from "./ProjectCard";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

const ShowAllProject = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Works" },
    { id: "mern", name: "MERN Stack" },
    { id: "frontend", name: "Frontend (React)" }
  ];

  const filteredProjects = projectsData.filter(project => {
    // Search match
    const titleMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const techMatch = project.technologies?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSearch = titleMatch || descMatch || techMatch;

    // Category match
    let matchesCategory = true;
    const cat = project.category.toLowerCase();
    if (activeCategory === "mern") {
      matchesCategory = cat.includes("mern") || cat.includes("full") || cat.includes("real-time");
    } else if (activeCategory === "frontend") {
      matchesCategory = cat.includes("frontend") || cat.includes("react");
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-base-100 py-24 px-6 md:px-20 mesh-gradient text-left">
      <div className="max-w-[1600px] mx-auto">

        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          
          {/* Back button & Title */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-sm text-base-content/60 hover:text-base-content bg-base-200/50 border border-base-content/5 px-4.5 py-2.5 rounded-xl transition-all hover:scale-[1.03] shadow-sm"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Home</span>
            </Link>
            
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-base-content">
              Project <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Vault</span>
            </h2>
            <p className="text-base-content/60 text-sm max-w-md">
              A comprehensive showcase of my systems, architectures, and client projects.
            </p>
          </div>

          {/* Search box */}
          <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-base-content/40">
              <FaSearch size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search by tech, description..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-base-200/50 border border-base-content/10 hover:border-base-content/20 focus:border-primary/40 text-sm rounded-2xl text-base-content placeholder-base-content/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
            />
          </div>

        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-base-content/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-base-content text-base-100 border-base-content shadow-lg scale-[1.03]"
                  : "bg-base-200 text-base-content/60 border-base-content/5 hover:text-base-content hover:bg-base-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="mb-6 text-xs text-base-content/50 font-semibold uppercase tracking-wider">
          Showing {filteredProjects.length} of {projectsData.length} projects
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-base-200/50 border border-base-content/5 rounded-3xl py-20 text-center max-w-xl mx-auto shadow-xl">
            <p className="text-base-content/70 text-lg mb-2 font-semibold">No projects match your query</p>
            <p className="text-base-content/50 text-sm">Try searching for other terms like "React", "Node" or "MongoDB".</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowAllProject;
