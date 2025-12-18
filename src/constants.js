// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import infosoftLogo from "./assets/company_logo/infosoft.png";
import ypsilonLogo from "./assets/company_logo/ypsilon.png";

// Education Section Logo's
import ipsLogo from "./assets/education_logo/LOGO-2-1.png";
import makhanlalLogo from "./assets/education_logo/Makhanlal_Chaturvedi_National_University_of_Journalism_and_Communication_(emblem).svg.png";
import royalPublicLogo from "./assets/education_logo/74638881_2470252119964081_5182851823379152896_n.jpg";

// Project Section Logo's
import aiTripPlannerLogo from "./assets/work_logo/AI trip planner.png";
import studentManagementLogo from "./assets/work_logo/Student_Management_System.png";
import textBasedGameLogo from "./assets/work_logo/textbasedgame.png";
import rockPaperScissorLogo from "./assets/work_logo/Rock,papergame.png";

export const SkillsInfo = [
  {
    title: "Web & Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "AWS", logo: "" },
      { name: "Servlets", logo: "" },
      { name: "AI/ML", logo: "" },
      { name: "Data Structures & Algorithms", logo: "" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: infosoftLogo,
    role: "AI/ML Intern",
    company: "Brainware Infosoft LLP",
    date: "Apr 2025 - Jul 2025",
    desc: "Developed and optimized AI utilities for the 'Intellitools' project, integrating machine learning models with backend APIs. Built scalable modules using Python, FastAPI, and Node.js; focused on model integration and deployment.",
    skills: ["Python", "FastAPI", "Node.js", "AI/ML"],
  },
  {
    id: 1,
    img: ypsilonLogo,
    role: "Java Intern",
    company: "Ypsilon IT Solutions Pvt. Ltd., Indore",
    date: "15 May 2024 - 29 Jun 2024",
    desc: "Completed a 6-week internship focused on Core Java and Advanced Java; worked on client projects and gained hands-on experience in Java-based application development.",
    skills: ["Java", "Servlets", "OOP"],
  },
];

export const education = [
  {
    id: 0,
    img: ipsLogo,
    degree: "Bachelor of Technology (B.Tech)",
    school: "IPS Academy, Indore",
    date: "Expected Graduation: 2026",
    grade: "85%",
    desc: "Pursuing B.Tech in Computer Science.",
  },
  {
    id: 1,
    img: makhanlalLogo,
    degree: "DCA (Diploma in Computer Application)",
    school:
      "Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal",
    date: "Completed: 2022",
    grade: "66.2%",
    desc: "Diploma in Computer Application.",
  },
  {
    id: 2,
    img: royalPublicLogo,
    degree: "Higher Secondary Education",
    school: "Royal Public H.S. School, Panna",
    date: "Completed: 2021",
    grade: "71.2%",
    desc: "Higher Secondary Education.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Intellitools (Internship)",
    description:
      "AI utility platform — backend APIs and model integration (Python, FastAPI, Node.js)",
    image: "",
    tags: ["Python", "FastAPI", "Node.js", "AI/ML"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Online Chat App",
    description:
      "Real-time messaging app using Node.js, React, WebSocket, JWT and MongoDB.",
    image: "",
    tags: ["Node.js", "React", "WebSocket", "MongoDB"],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "AI Trip Planner",
    description:
      "AI-powered itinerary generation using React, Python, Flask and Firebase.",
    image: aiTripPlannerLogo,
    tags: ["React", "Python", "Flask", "Firebase"],
    github: "https://github.com/Animesh-khare-AK/AI-Trip-planner",
    webapp:
      "https://ai-trip-planner-oe7dyolsk-animesh-khare-aks-projects.vercel.app",
  },
  {
    id: 3,
    title: "Student Management Web App",
    description:
      "Java/Servlets app with CRUD operations and MySQL integration.",
    image: studentManagementLogo,
    tags: ["Java", "Servlets", "MySQL"],
    github: "https://github.com/Animesh-khare-AK/Student-management-system.git",
    webapp: "",
  },
  {
    id: 4,
    title: "Text-Based RPG Game",
    description: "Interactive storytelling game built with HTML/CSS/JS.",
    image: textBasedGameLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Animesh-khare-AK/Text-Based-Role-Playing-Game.git",
    webapp: "",
  },
  {
    id: 5,
    title: "Rock-Paper-Scissor Game",
    description: "Simple text-based game using HTML/CSS/JS.",
    image: rockPaperScissorLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Animesh-khare-AK/Rock-Paper-Scissor-Game.git",
    webapp: "",
  },
];
