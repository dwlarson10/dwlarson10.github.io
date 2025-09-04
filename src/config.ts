export const siteConfig = {
  name: "Dan Larson",
  title: "Data Scientist",
  description: "Portfolio website of Dan Larson",
  accentColor: "#1d4ed8",
  social: {
    email: "dwlarson10@gmail.com",
    linkedin: "https://www.linkedin.com/in/datadanlarson/",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "I love building things with data — whether it’s designing pipelines at work, experimenting with machine learning models, or exploring new personal projects. My goal is always the same: make data useful, approachable, and impactful.",
  skills: ["Python", "RAG", "R", "Docker"],
  projects: [
    {
      name: "ChatCivic: Safe, simple government AI chatbots serving the public.",
      description:
        "Built a backend to manage RAG chatbot for US civics education.",
      link: "https://chatcivic.ai",
      skills: ["Qdrant", "llama-index", "Langfuse"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
