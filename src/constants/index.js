import {
    auto,
    mobile,
    backend,
    creator,
    csuf,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    protiviti,
    python,
    git,
    figma,
    docker,
    meta,
    sdsu,
    starbucks,
    tesla,
    travel,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React/Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Master of Science, Computer Science",
      company_name: "California State University - Fullerton",
      icon: csuf,
      iconBg: "#383E56",
      date: "January 2022 - December 2023",
      points: [
        "Had an emphasis in web development, creating web apps & mastering backend development for various classes.",
      ],
    },
    {
      title: "IAM Engineer II",
      company_name: "Protiviti",
      icon: protiviti,
      iconBg: "#383E56",
      date: "June 2019 - December 2021",
      points: [
        "Helped build, test, and release implementations of Identity & Access Management (IAM) solutions for numerous customers.",
        "These solutions included SailPoint’s IdentityIQ & IdentityNow systems, which both effectively help organizations manage & secure user identities and access to various applications & resources."
      ],
    },
    {
      title: "Bachelor of Science, Computer Science",
      company_name: "San Diego State University",
      icon: sdsu,
      iconBg: "#383E56",
      date: "August 2015 - May 2019",
      points: [],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "RMN Auto",
      description:
        "Developed a Python FastAPI web application with a MySQL database. The application facilitated seamless transactions among employees of a Used Car Auto Shop, enabling them to buy/sell cars from other dealerships or auctions. It also provided additional functionalities, such as warranty sales and contact information retrieval for car buyers and sellers, all within a user-friendly interface. This project emphasized 100% database integrity.",
      tags: [
        {
          name: "FastAPI",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: auto,
      source_code_link: "https://github.com/tish978/RMN_Auto",
    },
    {
      name: "Plan-It Travel",
      description:
        "Developed a travel recommendation app using Python's FastAPI with a MongoDB Atlas backend, offering users personalized destination suggestions based on their preferences. The app allows users to generate recommendation reports and to contact me via email using integration of the SendGrid API. The MongoDB Atlas implementation ensures scalability for over 1,000 concurrent users, while being cloud-based.",
      tags: [
        {
          name: "FastAPI",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/tish978/plan-it_travel_API",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };