import React, { useEffect, useState, useRef } from "react";
import { 
  FaReact, 
  FaServer, 
  FaDatabase, 
  FaBrain
} from "react-icons/fa";

const Skill = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "workflow", name: "Tools & AI" }
  ];

  const skills = [
    {
      id: "frontend",
      category: "Frontend Development",
      icon: <FaReact />,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20",
      hoverBorder: "group-hover:border-primary/40",
      barColor: "bg-gradient-to-r from-primary to-primary-focus",
      skills: ["React.js", "JavaScript", "Routing", "HTML5", "CSS3", "Tailwind CSS"],
      level: 92,
    },
    {
      id: "backend",
      category: "Backend Development",
      icon: <FaServer />,
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      borderColor: "border-secondary/20",
      hoverBorder: "group-hover:border-secondary/40",
      barColor: "bg-gradient-to-r from-secondary to-secondary-focus",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Custom Middlewares", "Nodemailer"],
      level: 87,
    },
    {
      id: "database",
      category: "Database & Modeling",
      icon: <FaDatabase />,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      borderColor: "border-accent/20",
      hoverBorder: "group-hover:border-accent/40",
      barColor: "bg-gradient-to-r from-accent to-accent-focus",
      skills: ["MongoDB", "Mongoose ODM", "Data Aggregation"],
      level: 85,
    },
    {
      id: "workflow",
      category: "Tools & AI Workflow",
      icon: <FaBrain />,
      iconBg: "bg-info/10",
      iconColor: "text-info",
      borderColor: "border-info/20",
      hoverBorder: "group-hover:border-info/40",
      barColor: "bg-gradient-to-r from-info to-info-focus",
      skills: ["Git & GitHub", "VS Code", "Postman", "Docker", "Vercel / Render", "AI API Integration"],
      level: 90,
    },
  ];

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(item => item.id === activeTab);

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-20 md:py-24 relative bg-base-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-14 text-center">
          <h2 className="text-xs sm:text-sm font-bold text-secondary tracking-widest uppercase mb-2">
            My Tech Stack
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-base-content px-2">
            Technical Arsenal &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Power Levels
            </span>
          </h3>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary mt-3 sm:mt-4 rounded-full mx-auto" />
        </div>

        {/* Tabs Filter - Responsive */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 md:mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-content border-transparent shadow-md scale-105"
                  : "bg-base-200 text-base-content/60 border-base-content/5 hover:text-base-content hover:bg-base-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-5 sm:p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1 bg-base-200/50 shadow-sm ${skill.borderColor} ${skill.hoverBorder}`}
            >
              {/* Title & Icon Header */}
              <div className="flex items-center gap-4 mb-5 md:mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${skill.iconBg} ${skill.iconColor} flex-shrink-0`}
                >
                  {skill.icon}
                </div>
                <div className="text-left min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-base-content tracking-wide truncate">
                    {skill.category}
                  </h3>
                  <span className="text-xs font-medium text-base-content/50">
                    Mastery: {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 mb-5 md:mb-6">
                <div className="w-full bg-base-300 h-2 rounded-full overflow-hidden border border-base-content/5">
                  <div
                    className={`h-full rounded-full ${skill.barColor} transition-all duration-1000 ease-out`}
                    style={{
                      width: animate ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-base-100 border border-base-content/10 text-base-content/80 hover:bg-base-300 hover:text-base-content transition-all duration-300 cursor-default shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 sm:mt-12 md:mt-14 text-center">
          <p className="text-xs sm:text-sm text-base-content/50">
            <span className="text-primary font-bold">✦</span> Continuously learning and expanding my technical toolkit
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skill;