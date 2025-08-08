"use client";
import Link from "next/link";
import { FolderCode, CircleUser, Lightbulb, Mail, X, Send } from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CopilotSidebar } from "@copilotkit/react-ui";

// const CustomUserMessage = ({ message }) => {
//   const wrapperStyles = "flex items-center gap-2 justify-end mb-4";
//   const messageStyles =
//     "bg-blue-500 text-white py-2 px-4 rounded-xl break-words flex-shrink-0 max-w-[80%]";
//   const avatarStyles =
//     "bg-blue-500 shadow-sm min-h-10 min-w-10 rounded-full text-white flex items-center justify-center";

//   return (
//     <div className={wrapperStyles}>
//       <div className={messageStyles}>{message}</div>
//       <div className={avatarStyles}>TS</div>
//     </div>
//   );
// };

export default function LBDCodes() {
  return (
    <main className="h-dvh p-4 lg:p-10 flex flex-col items-center font-poppins">
      <Header />
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 w-full items-center justify-center max-w-6xl">
          {/* Left Column */}
          <div className="w-full lg:w-3/5 p-2 lg:p-6">
            <h1 className="my-2 text-base text-[#00ff00]">Hello &#128075;</h1>
            <h1 className="my-2 text-xl md:text-3xl">I'm Lambe Boluwatife</h1>
            <h6 className="my-2 text-sm text-justify">
              I am a Full-Stack Developer passionate about building responsive
              web applications and AI-powered agents. I specialize in the MERN
              stack and have hands-on experience creating intelligent agents
              using frameworks like Mastra and OpenAI tools. I enjoy solving
              real-world problems through clean code, smart automation, and
              intuitive design.
            </h6>
            <Link
              href="/resume.pdf"
              rel="noreferrer"
              target="_blank"
              download="resume.pdf"
              className="mt-4 inline-block text-xs px-6 py-4 font-semibold bg-[#00ff00] text-black hover:bg-[#00cc00] transition duration-300"
            >
              Download Resume
            </Link>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-2/5 p-2 lg:p-6">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                <Link
                  href="/projects"
                  className="py-10 border border-black dark:border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                >
                  <FolderCode size={40} />
                  <span className="text-xs font-bold">My Projects</span>
                </Link>
                <Link
                  href="/skills"
                  className="py-10 border border-black dark:border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                >
                  <Lightbulb size={40} />
                  <span className="text-xs font-bold">My Skills</span>
                </Link>
                <Link
                  href="/contact"
                  className="py-10 border border-black dark:border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                >
                  <Mail size={40} />
                  <span className="text-xs font-bold">Contact Me</span>
                </Link>
                <Link
                  href="/about"
                  className="py-10 border border-black dark:border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                >
                  <CircleUser size={40} />
                  <span className="text-xs font-bold">About Me</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      <CopilotSidebar
        labels={{
          initial:
            "👋 Hey there! I’m L.B.D’s personal sidekick. What’s on your mind?",
          title: "🤖 L.B.D Agent",
          placeholder:
            "Type away… ask me about Lambe Boluwatife, this portfolio, or even my favorite snacks! 🍪",
          stopGenerating: "✋ Chill, stop!",
          regenerateResponse: "🔄 Give it another go!",
        }}
        icons={{
          sendIcon: <Send size={16} className="text-[#00ff00]" />,
          closeIcon: <X size={16} className="text-[#00ff00]" />,
        }}
      />
    </main>
  );
}
