import React from 'react';
import { MonitorSmartphone, ServerCog, Bot, Search, PenTool, Code2, Rocket } from 'lucide-react';

const services = [
  {
    icon: <MonitorSmartphone size={32} />,
    title: "Frontend Development",
    desc: "Building highly interactive, responsive, and accessible user interfaces using React, Tailwind CSS, and modern web standards."
  },
  {
    icon: <ServerCog size={32} />,
    title: "Backend Engineering",
    desc: "Designing scalable APIs, robust database architectures, and secure server-side logic using Node.js, Express, and MongoDB."
  },
  {
    icon: <Bot size={32} />,
    title: "AI Integration",
    desc: "Implementing smart features like automated chatbots, generative AI tools, and intelligent data processing into applications."
  }
];

const processSteps = [
  {
    step: "01",
    icon: <Search size={24} />,
    title: "Discovery & Planning",
    desc: "Understanding requirements, defining goals, and mapping out the technical architecture."
  },
  {
    step: "02",
    icon: <PenTool size={24} />,
    title: "UI/UX Design",
    desc: "Creating wireframes and high-fidelity mockups for a seamless and premium user experience."
  },
  {
    step: "03",
    icon: <Code2 size={24} />,
    title: "Development",
    desc: "Writing clean, optimized, and maintainable code with continuous testing and integration."
  },
  {
    step: "04",
    icon: <Rocket size={24} />,
    title: "Deployment & Scaling",
    desc: "Launching the application securely and monitoring performance to ensure flawless scalability."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-base-100 px-6 md:px-20 relative overflow-hidden">
      {/* Background ambient lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto z-10 relative space-y-32">
        
        {/* --- PART 1: SERVICES --- */}
        <div>
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-content/10 text-primary text-sm font-bold uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              What I Do
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-base-content tracking-tight">
              Premium <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
              Delivering high-quality, scalable solutions tailored to meet your business needs and exceed user expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-base-200/50 border border-base-content/10 p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col items-start text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 border border-base-content/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300 mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-3">{service.title}</h3>
                <p className="text-base-content/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 2: WORKING PROCESS --- */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 -translate-y-1/2 -z-10"></div>
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black font-heading text-base-content tracking-tight">
              My <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Working Process</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
              A streamlined, transparent, and highly effective methodology from conception to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-base-200/80 backdrop-blur-sm border border-base-content/10 p-8 rounded-3xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/10 flex flex-col items-center text-center h-full">
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-content flex items-center justify-center font-black text-lg border-4 border-base-100 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  <div className="w-16 h-16 rounded-full bg-base-100 border border-base-content/10 flex items-center justify-center text-base-content/80 group-hover:text-secondary group-hover:bg-secondary/10 transition-colors duration-300 mb-6">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-base-content mb-3">{step.title}</h3>
                  <p className="text-base-content/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
