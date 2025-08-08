import Link from "next/link";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  Code2,
  Database,
  Globe,
  Bot,
  Palette,
  Server,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Header from "../components/Header";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe size={30} className="text-[#00ff00]" />,
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="text-blue-400" />,
          level: 80,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          level: 75,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400" />,
          level: 70,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
          level: 50,
        },
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-500" />,
          level: 95,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-500" />,
          level: 80,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          level: 75,
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server size={30} className="text-[#00ff00]" />,
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
          level: 65,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-400" />,
          level: 60,
        },
        {
          name: "Python",
          icon: <FaPython className="text-yellow-400" />,
          level: 35,
        },
        {
          name: "RESTful APIs",
          icon: <Code2 className="text-[#00ff00]" />,
          level: 80,
        },
      ],
    },
    {
      title: "Database & Storage",
      icon: <Database size={30} className="text-[#00ff00]" />,
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-500" />,
          level: 75,
        },
        {
          name: "Firebase",
          icon: <Database className="text-orange-400" />,
          level: 60,
        },
      ],
    },
    {
      title: "AI & Automation",
      icon: <Bot size={30} className="text-[#00ff00]" />,
      skills: [
        {
          name: "OpenAI API",
          icon: <Bot className="text-[#00ff00]" />,
          level: 80,
        },
        {
          name: "Mastra Framework",
          icon: <Bot className="text-purple-400" />,
          level: 75,
        },
        {
          name: "Agent Development",
          icon: <Bot className="text-blue-400" />,
          level: 80,
        },
        {
          name: "Process Automation",
          icon: <Bot className="text-yellow-400" />,
          level: 75,
        },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Palette size={30} className="text-[#00ff00]" />,
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt className="text-orange-500" />,
          level: 80,
        },
        {
          name: "Docker",
          icon: <FaDocker className="text-blue-400" />,
          level: 45,
        },
        {
          name: "VS Code",
          icon: <Code2 className="text-blue-500" />,
          level: 95,
        },
      ],
    },
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-xs text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-[#00ff00] h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen p-4 lg:p-10 flex flex-col items-center font-poppins">
      <Header />
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="flex items-center space-x-2 text-[#00ff00] hover:text-[#00cc00] transition duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="text-lg font-bold text-center font-montserrat">
            My Skills
          </h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="flex-1 w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl text-[#00ff00] mb-4">
            Technical Expertise
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Here's an overview of my technical skills and proficiency levels.
            I'm constantly learning and improving these skills through hands-on
            projects and staying up-to-date with the latest technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 border dark:border-white rounded-lg hover:border-[#00ff00] transition duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 border dark:border-white rounded-lg hover:border-[#00ff00] transition duration-300">
            <h4 className="text-lg font-semibold text-[#00ff00] mb-2">3+</h4>
            <p className="text-sm text-gray-400">Years of Experience</p>
          </div>
          <div className="text-center p-6 border dark:border-white rounded-lg hover:border-[#00ff00] transition duration-300">
            <h4 className="text-lg font-semibold text-[#00ff00] mb-2">20+</h4>
            <p className="text-sm text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center p-6 border dark:border-white rounded-lg hover:border-[#00ff00] transition duration-300">
            <h4 className="text-lg font-semibold text-[#00ff00] mb-2">10+</h4>
            <p className="text-sm text-gray-400">Technologies Mastered</p>
          </div>
        </div>

        {/* Learning Section */}
        <div className="text-center p-6 border dark:border-white rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00] rounded-full text-sm">
              Agentic Workflow
            </span>
            <span className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00] rounded-full text-sm">
              Web Development
            </span>
            <span className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00] rounded-full text-sm">
              Advanced AI Agents
            </span>
            <span className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00] rounded-full text-sm">
              Cloud Architecture
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
