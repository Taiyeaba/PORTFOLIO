import {
  FaReact,
  FaDatabase,
  FaMobile,
  FaShoppingCart,
  FaCoffee,
  FaHamburger,
  FaPlane,
  FaStore,
  FaCode,
  FaTasks,
  FaShoppingBag,
  FaFlask,
  FaBolt,
  FaBuilding
} from "react-icons/fa";

export const projectsData = [
  {
    id: 1,
    title: "Coffee Haven",
    description: "Coffee Haven is a modern and elegant React + Tailwind CSS coffee shop web project. It offers a clean, responsive design with smooth animations and interactive sections that deliver a premium café experience online.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "React Router", "Framer Motion"],
    github: "https://github.com/Taiyeaba/1-react-coffee-shop.git",
    live: "https://charming-tartufo-669b96.netlify.app/",
    category: "React Landing Page",
    icon: FaCoffee,
    image: "/images/coffee.webp"
  },
  {
    id: 2,
    title: "Food Ordering App",
    description: "A simple and responsive Food Ordering App built with React and Tailwind CSS, featuring a searchable menu, category filters, a cart sidebar, and order management.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Context API", "Local Storage"],
    github: "https://github.com/Taiyeaba/2-react-food-ordering-app.git",
    live: " https://statuesque-food-ordering-063e58.netlify.app/",
    category: "React Landing Page",
    icon: FaHamburger,
    image: "/images/foodordering.png"
  },
  {
    id: 3,
    title: "Bangladesh Travel Platform",
    description: "Travel Tour is a clean and responsive travel website where users can explore tour packages and destinations with an easy and enjoyable browsing experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "React Router", "Responsive Design"],
    github: "https://github.com/Taiyeaba/3-react-travel-tour.git",
    live: "https://thunderous-platypus-9d0d2f.netlify.app/",
    category: "React Landing Page",
    icon: FaPlane,
    image: "/images/travel.webp"
  },
  {
    id: 4,
    title: "GroceryBD - MERN E-commerce",
    description: "A full-featured grocery e-commerce web application built with the MERN Stack, Firebase Authentication, Role-based Access Control, Cloudinary Image Upload, and Product Review System.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "Firebase", "JWT"],
    github: "https://github.com/Taiyeaba/4-Grocerry-mern-stack.git",
    live: "https://grocerry-full-stack.web.app",
    category: "Mern-Stack",
    icon: FaStore,
    image: "/images/grocerry.webp"
  },
  {
    id: 5,
    title: "HomeService - MERN Marketplace",
    description: "Full-stack home service marketplace built with MERN stack where users can book trusted professionals with real-time conflict prevention, providers manage jobs after admin approval, and admins have complete platform control with dark mode support.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Icons", "Responsive"],
    github: "https://github.com/Taiyeaba/5-HomeService-MernStack.git",
    live: "https://home-service-app-a4d2e.web.app",
    category: "Mern-Stack",
    icon: FaReact,
    image: "/images/homeservice.webp"
  },
  {
    id: 6,
    title: "StudyPlanner - AI Academic Tool",
    description: "Study Planner is a full-stack MERN application that helps students create, track, and manage their study plans efficiently. Users can create study plans, add tasks, track progress, and receive daily email reminders.",
    technologies: ["React", "Express", "Node.js", "Cron Jobs", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/Taiyeaba/6-AI-StudyPlanner-MernStack.git",
    live: "https://studyplan-mernstack.web.app",
    category: "MERN Stack",
    icon: FaTasks,
    image: "/images/studyplanner.webp"
  },
  {
    id: 7,
    title: "Second-Hand & Rental Hub",
    description: "A full-stack MERN marketplace where users can rent or sell unused items like gadgets, dresses, and sports gear. Built with three role-based dashboards — Owner, Buyer/Renter, and Admin — for a complete rental ecosystem. Features real-time chat via Socket.io, secure payment integration, and a rating & review system for trust.",
    technologies: ["React", "Socket.io", "Express.js", "MongoDB", "REST API", "JWT", "Stripe"],
    github: "https://github.com/Taiyeaba/7-secondhand-rental-hub.git",
    live: "https://secondhand-rental-marketplace.web.app",
    category: "Mern Stack",
    icon: FaShoppingBag,
    image: "/images/rental.webp"
  },
  {
    id: 8,
    title: "Cinematic Perfume 3D Experience",
    description: "A high-performance luxury fragrance landing page combining real-time Three.js 3D WebGL graphics, cinematic animations, interactive particle effects, smooth scrolling, and a fully responsive editorial design.",
    technologies: ["React", "Vite", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS", "Lenis", "HTML5 Canvas"],
    github: "https://github.com/Taiyeaba/8-cinematic-perfume-landing-page.git",
    live: "https://hilarious-valkyrie-d5e1c1.netlify.app/",
    category: "React Landing Page",
    icon: FaFlask,
    image: "/images/perfume.webp"
  },
  {
    id: 9,
    title: "Cinematic MarTech & AI Template",
    description: "A production-grade cinematic landing page for MarTech and AI, featuring smooth animations, interactive canvas particles, animated statistics, lazy-loaded background videos, and a fully responsive design. Built with modern frontend technologies and optimized for performance, accessibility, and immersive user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "ScrollTrigger", "Lenis", "HTML5 Canvas", "tsParticles"],
    github: "https://github.com/Taiyeaba/9-cinematic-landing-template.git",
    live: "https://willowy-treacle-07958c.netlify.app/",
    category: "React Landing Page",
    icon: FaBolt,
    image: "/images/aurora.webp"
  },
  {
    id: 10,
    title: "B2B-DemoProject ",
    description:
      "A high-performance, fully responsive B2B web platform for architectural and building supplies, featuring a dynamic product catalog, real-time search, product details and an engineering-focused contact desk.",
    technologies: [ "HTML5", "CSS3","JavaScript","Local Storage","CSS Grid","Flexbox"
    ],
    github: " https://github.com/Taiyeaba/10-B2B-DemoProject.git",
    live: " https://b2b-demo-project-cc7d95.netlify.app/",
    category: "B2B Web Platform",
    icon: FaBuilding,
    image: "/images/buildex.png"
  },


];

