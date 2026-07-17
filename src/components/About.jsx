import React, { useState, useEffect, useRef } from "react";
import { GraduationCap, Rocket, Compass, ArrowUpRight, Sparkles } from "lucide-react";

const stats = [
  { label: "Years Experience", value: 1, suffix: "+", color: "text-primary" },
  { label: "Projects Done", value: 9, suffix: "+", color: "text-secondary" },
  { label: "Technologies Learned", value: 15, suffix: "+", color: "text-accent" },
];

const journey = [
  {
    icon: GraduationCap,
    year: "2023 – 2027",
    title: "B.Sc. in Software Engineering",
    desc: "Sylhet, Bangladesh — Graduated with honors. Specialized in web technologies, database systems, and software architecture. Built a strong foundation in computer science principles.",
    iconColor: "text-primary",
    dotColor: "bg-primary",
    glow: "shadow-primary/20 shadow-lg",
  },
  {
    icon: Rocket,
    year: "2024 – Present",
    title: "MERN Stack Developer",
    desc: "Building full-stack web applications with MongoDB, Express.js, React.js, and Node.js. Integrating AI features, optimizing performance, and delivering production-ready solutions.",
    iconColor: "text-secondary",
    dotColor: "bg-secondary",
    glow: "shadow-secondary/20 shadow-lg",
  },
  {
    icon: Compass,
    year: "Future",
    title: "Backend Engineering & Career Opportunities",
    desc: "Actively seeking a full-time role as a software developer. Continuously expanding my expertise in backend architecture, system design, and cloud technologies to build scalable and robust solutions.",
    iconColor: "text-accent",
    dotColor: "bg-accent",
    glow: "shadow-accent/20 shadow-lg",
    now: true,
  },
];

const exploring = [
  "Node.js",
  "Express.js",
  "Docker",
  "System Design",
  "Vector Databases",
  "TypeScript",
  "GraphQL",
  "AWS",
];

// Counts a number up from 0 once it scrolls into view
const CountUp = ({ value, suffix = "" }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 900;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

// Bio card with a soft glow that follows the cursor
const SpotlightCard = ({ children }) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl border border-base-content/10 p-4 sm:p-5 md:p-6 lg:p-7 overflow-hidden bg-base-200/50 hover:bg-base-200 transition-colors duration-300"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(320px circle at ${pos.x}% ${pos.y}%, color-mix(in srgb, var(--fallback-p,oklch(var(--p))) 20%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-base-200/30 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-y border-base-content/5 relative overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-0 right-0 w-[20rem] sm:w-[24rem] md:w-[28rem] h-[20rem] sm:h-[24rem] md:h-[28rem] bg-secondary/10 rounded-full filter blur-[100px] sm:blur-[120px] md:blur-[130px] pointer-events-none" />

      {/* faint watermark type for depth - hidden on mobile */}
      <span className="hidden sm:block absolute -top-6 left-1/2 -translate-x-1/2 text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] font-black text-base-content/5 select-none pointer-events-none tracking-tighter font-heading">
        ABOUT
      </span>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-xs sm:text-sm font-bold text-secondary tracking-widest uppercase mb-2">
            About Me
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-base-content px-2">
            Engineering the Future with{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Code & Innovation
            </span>
          </h3>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary mt-3 sm:mt-4 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-6 sm:space-y-8 text-left">
            {/* Avatar badge + bio, spotlight card */}
            <SpotlightCard>
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="relative flex-shrink-0 self-start sm:self-auto">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent blur-md opacity-60 animate-pulse-glow" />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-base-100 border border-base-content/10 flex items-center justify-center shadow-inner">
                    <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      TS
                    </span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg text-base-content/90 leading-relaxed">
                    I am <span className="font-bold text-base-content">Taiyeaba Shams</span>, a
                    passionate Software Engineering student and{" "}
                    <span className="text-secondary font-bold">MERN Stack Developer</span>{" "}
                    dedicated to building innovative web solutions.
                  </p>
                  <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">
                    With a strong foundation in computer science principles and
                    hands-on experience in full-stack development, I bridge the gap
                    between academic theory and real-world application — spanning
                    modern JavaScript frameworks, database design, and AI integration.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Animated count-up stats - responsive grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-3 sm:p-4 rounded-xl bg-base-200/50 border border-base-content/5 hover:border-base-content/10 hover:bg-base-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`text-xl sm:text-2xl font-bold ${s.color}`}>
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-base-content/60 mt-1 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side — journey timeline */}
          <div className="relative pl-2 mt-4 sm:mt-0">
            <div className="absolute left-[23px] sm:left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-success/60" />

            <div className="space-y-8 sm:space-y-10">
              {journey.map((step) => (
                <div key={step.title} className="relative flex gap-4 sm:gap-6 group">
                  <div
                    className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-base-100 border border-base-content/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 ${step.glow}`}
                  >
                    <step.icon size={18} className={`sm:w-[22px] sm:h-[22px] ${step.iconColor}`} />
                    <span
                      className={`absolute -top-1.5 -right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${step.dotColor} animate-pulse`}
                    />
                  </div>

                  <div className="border border-base-content/5 p-4 sm:p-5 rounded-2xl flex-1 group-hover:border-base-content/10 group-hover:-translate-y-0.5 group-hover:bg-base-200 transition-all duration-300 bg-base-200/50 shadow-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-base-content/50">
                        {step.year}
                      </span>
                      {step.now && (
                        <span className="px-2 py-0.5 rounded-full bg-success/10 border border-success/20 text-success text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">
                          Now
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-base-content mt-1 flex items-center gap-1.5 text-sm sm:text-base">
                      {step.title}
                      <ArrowUpRight
                        size={12}
                        className="sm:w-[14px] sm:h-[14px] text-base-content/40 group-hover:text-base-content group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </h4>
                    <p className="text-xs sm:text-sm text-base-content/70 mt-1.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently exploring — full width marquee */}
          <div className="pt-2 lg:col-span-2">
            <h4 className="text-xs font-bold text-base-content/50 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Sparkles size={12} className="text-accent" />
              Currently Exploring
            </h4>
            <div className="relative overflow-hidden w-full rounded-xl border border-base-content/5 bg-base-200/30 py-3 sm:py-3.5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex min-w-max gap-2 sm:gap-3 about-marquee-track">
                {[...exploring, ...exploring].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="px-3 sm:px-3.5 py-1.5 rounded-lg bg-base-200 border border-base-content/5 text-[10px] sm:text-xs text-base-content/80 whitespace-nowrap shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee keyframes */}
      <style>{`
        @keyframes about-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .about-marquee-track {
          animation: about-marquee-scroll 22s linear infinite;
        }
        .about-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default About;