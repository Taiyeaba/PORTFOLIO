import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-base-200/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full border border-base-content/10 hover:border-primary/30">
      
      {/* Glow highlight on top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative corner glows */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
      
      <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10 text-left">
        
        {/* Header - Icon & Category */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-base-100 border border-base-content/10 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <project.icon className="text-xl text-primary" />
          </div>
          <span className="inline-block px-3 py-1 bg-base-300 text-base-content/70 text-xs font-semibold rounded-full border border-base-content/5 transition-colors">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors mb-3 font-heading">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base-content/70 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech list */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-bold text-base-content/50 uppercase tracking-wider">Built with</span>
            <span className="text-[10px] font-semibold text-base-content/60 bg-base-300 px-2 py-0.5 rounded border border-base-content/5">
              {project.technologies?.length || 0} tech{project.technologies?.length === 1 ? '' : 's'}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 bg-base-100 text-base-content/80 text-[11px] font-medium rounded-lg border border-base-content/10 hover:border-base-content/20 transition-colors shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 border-t border-base-content/10 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 ${
              (project.github && project.github !== "#") 
                ? "bg-base-300 hover:bg-base-content text-base-content hover:text-base-100 border border-base-content/10 hover:scale-[1.02]" 
                : "bg-base-200 text-base-content/40 border border-base-content/5 cursor-not-allowed"
            }`}
          >
            <FaGithub className="text-base" />
            <span>Code</span>
          </a>
          
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 ${
              (project.live && project.live !== "#") 
                ? "bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-primary-content hover:scale-[1.02] shadow-md hover:shadow-lg" 
                : "bg-base-200 text-base-content/40 border border-base-content/5 cursor-not-allowed"
            }`}
          >
            <FaExternalLinkAlt className="text-[10px]" />
            <span>Live Demo</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;