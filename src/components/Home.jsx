import React from 'react';
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-base-100 px-6 md:px-20 py-28 overflow-hidden mesh-gradient"
    >
      {/* Cosmic background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[110px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-[120px] animate-pulse-glow" style={{ animationDelay: "3s" }}></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center relative z-10 w-full">

        {/* Text Content */}
        <div className="space-y-6 md:col-span-7 text-left">
          
          {/* Heartbeat Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-xs font-semibold uppercase tracking-widest animate-float shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
            </span>
            Available for Hire 2026
          </div>

          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            <h3 className="text-lg md:text-xl font-medium text-base-content/80 tracking-wide font-sans">
              Hello, World! I am
            </h3>
          </div>

          {/* Name with elegant text stroke / reflection design */}
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight select-none leading-none">
            <span className="bg-gradient-to-r from-base-content to-base-content/60 bg-clip-text text-transparent">
              Taiyeaba Shams
            </span>
          </h1>

          {/* Typing sequence */}
          <div className="h-16 flex items-center">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Frontend Specialist',
                2000,
                'AI Integration Pioneer',
                2000,
                'Software Engineering Student',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-sans"
            />
          </div>

          {/* Bio text */}
          <p className="text-base-content/70 leading-relaxed max-w-xl text-base md:text-lg">
            I build highly optimized, secure, and smart web ecosystems. Bridging full-stack architecture with <span className="text-primary font-medium">artificial intelligence</span> integration to build products that look stunning and execute flawlessly.
          </p>

          {/* Specs tags */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-base-content/50 uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={12} className="text-primary" />
              Core Competence
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {['Mern-Stack Development', 'AI Assist Integration', 'Responsive Design'].map((spec) => (
                <span
                  key={spec}
                  className="bg-base-200/50 text-base-content/80 px-4 py-2 rounded-xl text-xs font-medium border border-base-content/10 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:bg-base-200 shadow-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-primary to-secondary text-primary-content px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold flex items-center justify-center gap-2"
            >
              Explore Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="border border-base-content/20 bg-base-100 hover:bg-base-200 text-base-content px-8 py-4 rounded-2xl transition-all duration-300 font-bold text-center shadow-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 pt-6">
            {[
              { icon: FaGithub, url: "https://github.com/Taiyeaba?tab=repositories" },
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/taiyeaba-shams-a167b9332" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-base-200/50 hover:bg-base-300 border border-base-content/10 rounded-2xl flex items-center justify-center text-base-content/70 hover:text-primary hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Profile with Floating elements */}
        <div className="md:col-span-5 flex justify-center relative select-none w-full">
          <div className="relative w-full max-w-[380px] md:max-w-[420px]">
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-[40px] opacity-20 animate-pulse"></div>

            {/* Code IDE Window Mockup */}
            <div className="relative w-full aspect-[4/5] bg-base-200/90 rounded-3xl border border-base-content/10 shadow-2xl p-6 font-mono text-left text-xs overflow-hidden flex flex-col hover:border-primary/30 transition-colors duration-500 backdrop-blur-sm">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-base-content/10 mb-4 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-error/80"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-warning/80"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-success/80"></span>
                </div>
                <span className="text-xs text-base-content/50 font-sans tracking-wide">taiyeaba_shams.jsx</span>
                <span className="w-3 h-3"></span>
              </div>

              {/* IDE Code Content */}
              <div className="flex-1 overflow-y-auto space-y-2 text-sm leading-relaxed scrollbar-none text-base-content/80">
                <div><span className="text-pink-500 font-medium">import</span> React, &#123; useState &#125; <span className="text-pink-500 font-medium">from</span> <span className="text-success">"react"</span>;</div>
                <div><span className="text-pink-500 font-medium">import</span> &#123; MERN, AI &#125; <span className="text-pink-500 font-medium">from</span> <span className="text-success">"taiyeaba-stack"</span>;</div>
                <br />
                <div><span className="text-info font-semibold">const</span> <span className="text-warning">DeveloperProfile</span> = () =&gt; &#123;</div>
                <div className="pl-4"><span className="text-info">const</span> [coffee, setCoffee] = useState(<span className="text-warning">true</span>);</div>
                <div className="pl-4"><span className="text-info">const</span> [code, setCode] = useState(<span className="text-success">"clean"</span>);</div>
                <br />
                <div className="pl-4 text-base-content/40 italic">// Specifications data</div>
                <div className="pl-4"><span className="text-info">const</span> stats = &#123;</div>
                <div className="pl-8">role: <span className="text-success">"Mern Stack Developer"</span>,</div>
                <div className="pl-8">location: <span className="text-success">"Sylhet, Bangladesh"</span>,</div>
                <div className="pl-8">academic: <span className="text-success">"B.Sc. Software Engineering"</span>,</div>
                <div className="pl-8">experience: <span className="text-success">"1+ Year of Experience"</span></div>
                <div className="pl-4">&#125;;</div>
                <br />
                <div className="pl-4"><span className="text-pink-500 font-medium">return</span> (</div>
                <div className="pl-8">&lt;<span className="text-info">Container</span> specs=&#123;stats&#125;&gt;</div>
                <div className="pl-12">&lt;<span className="text-info">MernStack</span> status=&#123;code&#125; /&gt;</div>
                <div className="pl-12">&lt;<span className="text-info">AiIntegration</span> model=&#123;"Gemini"&#125; /&gt;</div>
                <div className="pl-8">&lt;/<span className="text-info">Container</span>&gt;</div>
                <div className="pl-4">);</div>
                <div>&#125;;</div>
                <br />
                <div><span className="text-pink-500 font-medium">export default</span> <span className="text-warning">DeveloperProfile</span>;</div>
              </div>

              {/* Terminal Panel */}
              <div className="mt-4 bg-base-300/80 border border-base-content/10 rounded-2xl p-4 flex-shrink-0 font-mono text-xs space-y-2 shadow-inner">
                <div className="flex items-center justify-between text-base-content/60 border-b border-base-content/10 pb-2 mb-2 font-semibold">
                  <span>TERMINAL LOGS</span>
                  <span className="text-success flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-ping"></span>
                    ONLINE
                  </span>
                </div>
                <div className="text-base-content/70">&gt; npm run dev</div>
                <div className="text-info">✓ Vite dev server online in 399ms</div>
                <div className="text-primary">✓ MongoDB connected successfully</div>
                <div className="text-secondary">✓ WebSockets active on port 3000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer select-none">
        <a href="#about" className="flex flex-col items-center text-base-content/50 hover:text-base-content transition-colors duration-300">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll Down</span>
          <FaArrowDown className="text-sm mt-2 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Home;
