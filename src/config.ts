export const siteConfig = {
  name: "Dan Larson",
  title: "Data Scientist",
  description: "Portfolio website of Dan Larson",
  accentColor: "#1dd87eff",
  social: {
    email: "dwlarson10@gmail.com",
    linkedin: "https://www.linkedin.com/in/datadanlarson/",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "I love building things with data — whether it’s designing pipelines at work, experimenting with machine learning models, or exploring new personal projects. My goal is always the same: make data useful, approachable, and impactful.",
  skills: ["Python", "RAG", "R", "Docker", "SQL","Tableau"],
  projects: [
    {
      name: "ChatCivic: Safe, simple government AI chatbots serving the public.",
      description:
        "Built a backend to manage RAG chatbot for US civics education.",
      link: "https://chatcivic.ai",
      skills: ["Qdrant", "llama-index", "Langfuse", "RAG","FastAPI","Web Deployment"],
    },
    {
      name: "Deepy McWorkface",
      description:
        "Building a localized command line interface AI Agent to help me be more ",
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
      company: "LabWare Inc",
      title: "Analytics Lead Developer",
      dateRange: "July 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Comcast",
      title: "Credit Analytics and Operations Manager",
      dateRange: "July 2019 - July 2022",
      bullets: [
        "Oversee team of data analysts to optimize sales and reduce bad debt",
        "Coordinate national credit strategy for all Comcast products ",
        "Guide implementation of two credit decision platforms into Comcast Buyflows",
        "Administer operations monitoring to ensure all strategy is implemented as designed",
        "Develop a model for calculating Customer Lifetime Value",
        "Leverage big data tools to analyze terabytes of customer data",
      ],
    },
    {
      company: "Drexel University",
      title: "Associate Director of Institutional Research",
      dateRange: "Feb 2017 - May 2019",
      bullets: [
        "Maintain SQL server data mart",
        "Build custom Tableau visualizations to support decisions across the institution",
        "Communicate statistical analysis to stakeholders with varying levels of technical expertise",
        "Write and distribute a monthly newsletter aimed to increase data literacy at Drexel University"
      ],
    },
  ],
  education: [
    {
      school: "Lehigh University",
      degree: "Master of Arts in Sociology",
      dateRange: "2009 - 2011",
      achievements: [

      ],
    },
    {
      school: "Moravian College",
      degree: "Full Stack Development Certificate",
      dateRange: "2003-2007",
      achievements: [

      ],
    },
  ],
};
