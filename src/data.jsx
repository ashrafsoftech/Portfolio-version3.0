import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

import cocktailImg from "./assets/cocktail.png";

import taskifyLight from "./assets/taskifyLight.png";
import taskifyDark from "./assets/taskifyDark.png";

import unsplashLight from "./assets/unsplashLight.png";
import unsplashDark from "./assets/unsplashDark.png";

export const projects = [
  {
    id: nanoid(),
    // img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    img: cocktailImg,
    url: "https://cocktail-mix-mastar.netlify.app/",
    github: "https://github.com/ashrafsoftech/MixMaster",
    title: "Mix Master",
    text: "A cocktail discovery app that allows users to search and explore different drink recipes using data from an external API. Built with React, React Router, and modern UI design principles.",
  },
  {
    id: nanoid(),
    // img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    img: unsplashDark,
    url: "https:unsplash-pictures.netlify.app/",
    github: "https://github.com/ashrafsoftech/unsplash-images",
    title: "Unsplash Images",
    text: "An image gallery application that fetches high-quality photos from the Unsplash API with search functionality and responsive layouts. Built using React and API integration techniques.",
  },
  {
    id: nanoid(),
    // img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    img: taskifyDark,
    url: "https://taskify-2025.netlify.app/",
    github: "https://github.com/ashrafsoftech/Taskify",
    title: "taskify",
    text: "A task management application for organizing daily activities with features like task creation, editing, and deletion. Developed with React and focused on clean user experience.",
  },
];
