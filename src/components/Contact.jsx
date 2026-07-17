import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setAnimated(true);
          hasAnimatedRef.current = true;
        }
      },
      { threshold: 0.15, rootMargin: '-50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Registry",
      value: "tayebashams@gmail.com",
      link: "mailto:tayebashams@gmail.com",
      color: "text-primary border-primary/30"
    },
    {
      icon: FaPhone,
      title: "Voice Direct",
      value: "01******",
      link: "tel:+8801757575690",
      color: "text-secondary border-secondary/30"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location Node",
      value: "Sylhet, Bangladesh",
      link: "#",
      color: "text-accent border-accent/30"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/taiyeaba-shams-a167b9332",
      color: "hover:text-primary hover:bg-base-300 hover:border-primary/40"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/Taiyeaba?tab=repositories",
      color: "hover:text-base-content hover:bg-base-300 hover:border-base-content/40"
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      url: "#",
      color: "hover:text-info hover:bg-base-300 hover:border-info/40"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !subject || !message) {
      Swal.fire({
        title: "Oops!",
        text: "Please fill out all fields before submitting.",
        icon: "error",
        background: "var(--fallback-b1,oklch(var(--b1)))",
        color: "var(--fallback-bc,oklch(var(--bc)))",
        confirmButtonColor: "var(--fallback-p,oklch(var(--p)))",
      });
      return;
    }

    console.log("Form Submitted:", { name, email, subject, message });

    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully!",
      icon: "success",
      background: "var(--fallback-b1,oklch(var(--b1)))",
      color: "var(--fallback-bc,oklch(var(--bc)))",
      confirmButtonColor: "var(--fallback-p,oklch(var(--p)))",
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-base-100 py-24 px-6 md:px-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background glow node */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            Establish Connection
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-base-content">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full mx-auto"></div>
          <p className="text-base-content/60 max-w-md mx-auto mt-4 text-sm md:text-base">
            Let's discuss systems engineering, developer roles, or open opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className={`transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '100ms' }}>
              <h4 className="text-xl font-bold text-base-content mb-3">Let's Connect</h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Whether you have a contract project, full-time MERN/Frontend developer roles, or just want to chat engineering theory, don't hesitate to reach out!
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.title}
                  href={item.link}
                  className={`flex items-center gap-4 p-4 rounded-2xl border bg-base-200/50 border-base-content/5 hover:border-base-content/10 hover:bg-base-200 transition-all duration-300 group
                    ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-11 h-11 bg-base-100 border border-base-content/5 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    <item.icon className={`text-lg ${item.color.split(' ')[0]}`} />
                  </div>
                  <div>
                    <h5 className="font-bold text-base-content text-xs tracking-wide">{item.title}</h5>
                    <p className="text-base-content/60 text-sm mt-0.5 font-sans">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Panel */}
            <div className={`space-y-3.5 transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '500ms' }}>
              <h5 className="text-xs font-bold text-base-content/50 uppercase tracking-widest">Connect Nodes</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 bg-base-200/50 border border-base-content/5 rounded-xl flex items-center justify-center text-base-content/60 transition-all duration-300 hover:scale-105 ${social.color} shadow-sm`}
                    title={social.name}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`lg:col-span-7 bg-base-200/50 rounded-3xl p-6 md:p-8 border border-base-content/5 glass-panel transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '200ms' }}>
            <h4 className="text-xl font-bold text-base-content mb-6 text-left">Transmission Deck</h4>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                <div>
                  <label className="block text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 bg-base-100 border border-base-content/10 hover:border-base-content/20 focus:border-primary/40 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm placeholder-base-content/30 text-base-content transition-all shadow-inner font-sans" 
                    placeholder="Enter your name" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 bg-base-100 border border-base-content/10 hover:border-base-content/20 focus:border-primary/40 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm placeholder-base-content/30 text-base-content transition-all shadow-inner font-sans" 
                    placeholder="Enter your email" 
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="text-left">
                <label className="block text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  className="w-full px-4 py-3 bg-base-100 border border-base-content/10 hover:border-base-content/20 focus:border-primary/40 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm placeholder-base-content/30 text-base-content transition-all shadow-inner font-sans" 
                  placeholder="e.g. Project Consultation" 
                />
              </div>

              {/* Message */}
              <div className="text-left">
                <label className="block text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  className="w-full px-4 py-3 bg-base-100 border border-base-content/10 hover:border-base-content/20 focus:border-primary/40 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm placeholder-base-content/30 text-base-content transition-all shadow-inner font-sans resize-none" 
                  placeholder="Outline your project scope or proposal..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-primary-content font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group shadow-lg active:scale-[0.98]"
              >
                <span>Send Transmission</span>
                <FaPaperPlane size={11} className="group-hover:translate-x-1 transition-transform text-primary-content" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer info text */}
        <div className={`text-center mt-12 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-xs text-base-content/40">
            Estimated response latency: &lt; 24 hours. Connect channels are encrypted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
