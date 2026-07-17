import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../Data/projectsData";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "mern", name: "MERN Stack" },
    { id: "frontend", name: "Frontend (React)" }
  ];

  const filteredProjects = projectsData.filter(project => {
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

  // Display top 6 projects for the landing section
  const visibleProjects = filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-base-100 border-t border-base-content/5 relative">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            Selected Works
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-base-content">
            Engineering <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Real World Solutions</span>
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-base-content text-base-100 border-base-content shadow-lg scale-105"
                  : "bg-base-200 text-base-content/60 border-base-content/5 hover:text-base-content hover:bg-base-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-primary-content px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-lg"
          >
            See All Projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
