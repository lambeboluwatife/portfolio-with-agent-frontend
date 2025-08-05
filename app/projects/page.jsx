"use client"
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import {  
    FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiOpenai,
} from "react-icons/si";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Features include product management, order tracking, and real-time inventory updates.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "fullstack",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/lambeboluwatife/ecommerce-platform",
      date: "2024",
      status: "completed",
    },
    {
      id: 2,
      title: "AI Content Generator",
      description:
        "An intelligent content creation tool powered by OpenAI GPT models. Generates blog posts, social media content, and marketing copy with customizable tones and styles.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      category: "ai",
      liveUrl: "https://ai-content-gen.com",
      githubUrl: "https://github.com/lambeboluwatife/ai-content-generator",
      date: "2024",
      status: "completed",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description:
        "A comprehensive project management tool with team collaboration features, real-time updates, and analytics. Includes drag-and-drop functionality and progress tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      category: "fullstack",
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/lambeboluwatife/task-manager",
      date: "2023",
      status: "completed",
    },
    {
      id: 4,
      title: "Smart Chatbot Agent",
      description:
        "An intelligent chatbot built with Mastra framework that can handle customer inquiries, book appointments, and provide personalized recommendations based on user preferences.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Mastra", "OpenAI API", "FastAPI"],
      category: "ai",
      liveUrl: null,
      githubUrl: "https://github.com/lambeboluwatife/smart-chatbot",
      date: "2024",
      status: "in-progress",
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and weather alerts. Features clean UI and real-time weather data integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Weather API", "Chart.js", "CSS3"],
      category: "frontend",
      liveUrl: "https://weather-app-demo.com",
      githubUrl: "https://github.com/lambeboluwatife/weather-app",
      date: "2023",
      status: "completed",
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description:
        "A decentralized voting platform built on blockchain technology ensuring transparency and security. Features smart contracts and real-time vote tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Solidity", "Web3.js", "Ethereum"],
      category: "blockchain",
      liveUrl: null,
      githubUrl: "https://github.com/lambeboluwatife/blockchain-voting",
      date: "2024",
      status: "in-progress",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "fullstack",
      name: "Full-Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "ai",
      name: "AI/ML",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "frontend",
      name: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "blockchain",
      name: "Blockchain",
      count: projects.filter((p) => p.category === "blockchain").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getTechIcon = (tech) => {
    const iconMap = {
      React: <FaReact className="text-blue-400" />,
      "Next.js": <SiNextdotjs className="text-white" />,
      "Node.js": <FaNodeJs className="text-green-500" />,
      JavaScript: <FaJs className="text-yellow-400" />,
      TypeScript: <SiTypescript className="text-blue-500" />,
      MongoDB: <SiMongodb className="text-green-500" />,
      Express: <SiExpress className="text-gray-400" />,
      Python: <FaPython className="text-yellow-400" />,
      "OpenAI API": <SiOpenai className="text-[#00ff00]" />,
      "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    };
    return iconMap[tech] || <Tag className="text-gray-400" size={16} />;
  };

  const ProjectCard = ({ project }) => (
    <div className="border border-white rounded-lg overflow-hidden hover:border-[#00ff00] transition duration-300 group">
      <div className="relative">
        <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Project Screenshot</span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              project.status === "completed"
                ? "bg-[#00ff00] text-black"
                : "bg-yellow-500 text-black"
            }`}
          >
            {project.status === "completed" ? "Completed" : "In Progress"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold group-hover:text-[#00ff00] transition duration-300">
            {project.title}
          </h3>
          <div className="flex items-center text-xs text-gray-400">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="flex items-center space-x-1 px-2 py-1 bg-gray-800 rounded-full text-xs"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex space-x-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 bg-[#00ff00] text-black text-xs font-semibold rounded hover:bg-[#00cc00] transition duration-300"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </Link>
          )}
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-2 border border-white text-xs font-semibold rounded hover:border-[#00ff00] hover:text-[#00ff00] transition duration-300"
          >
            <Github size={14} />
            <span>View Code</span>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen p-4 lg:p-10 flex flex-col items-center font-poppins">
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="flex items-center space-x-2 text-[#00ff00] hover:text-[#00cc00] transition duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="text-lg font-bold text-center font-montserrat">
            My Projects
          </h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="flex-1 w-full max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl text-[#00ff00] mb-4">
            Featured Work
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack
            development, AI integration, and modern web technologies. Each
            project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition duration-300 ${
                activeFilter === category.id
                  ? "bg-[#00ff00] text-black"
                  : "border border-white hover:border-[#00ff00] hover:text-[#00ff00]"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-6 border border-white rounded-lg hover:border-[#00ff00] transition duration-300">
            <h4 className="text-2xl font-bold text-[#00ff00] mb-2">
              {projects.length}
            </h4>
            <p className="text-sm text-gray-400">Total Projects</p>
          </div>
          <div className="text-center p-6 border border-white rounded-lg hover:border-[#00ff00] transition duration-300">
            <h4 className="text-2xl font-bold text-[#00ff00] mb-2">
              {projects.filter((p) => p.status === "completed").length}
            </h4>
            <p className="text-sm text-gray-400">Completed</p>
          </div>
          <div className="text-center p-6 border border-white rounded-lg hover:border-[#00ff00] transition duration-300">
            <h4 className="text-2xl font-bold text-[#00ff00] mb-2">
              {projects.filter((p) => p.category === "ai").length}
            </h4>
            <p className="text-sm text-gray-400">AI Projects</p>
          </div>
          <div className="text-center p-6 border border-white rounded-lg hover:border-[#00ff00] transition duration-300">
            <h4 className="text-2xl font-bold text-[#00ff00] mb-2">15+</h4>
            <p className="text-sm text-gray-400">Technologies Used</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 border border-white rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-sm text-gray-300 mb-6 max-w-md mx-auto">
            I'm always open to discussing new projects and opportunities. Let's
            build something amazing together!
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-[#00ff00] text-black font-semibold text-sm rounded hover:bg-[#00cc00] transition duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
