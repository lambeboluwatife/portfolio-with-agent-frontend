import Link from "next/link";
import { FolderCode, CircleUser, Lightbulb, Mail } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareGithub,
} from "react-icons/fa6";

export default function LBDCodes() {
  return (
    <main className="min-h-screen p-4 lg:p-10 flex flex-col items-center font-poppins">
      <h1 className="text-lg font-bold text-center mb-8 font-montserrat">
        L.B.D Codes
      </h1>
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 w-full items-center justify-center max-w-6xl">
          <div className="w-full lg:w-3/5 p-2 lg:p-6">
            <h1 className="my-2 text-base text-[#00ff00]">Hello &#128075;</h1>
            <h1 className="my-2 text-3xl">I'm Lambe Boluwatife</h1>
            <h6 className="my-2 text-base md:text-lg text-justify">
              I am a Full-Stack Developer passionate about building responsive
              web applications and AI-powered agents. I specialize in the MERN
              stack and have hands-on experience creating intelligent agents
              using frameworks like Mastra and OpenAI tools. I enjoy solving
              real-world problems through clean code, smart automation, and
              intuitive design.
            </h6>
            <Link
              href="/resume.pdf" rel="noreferrer" target="_blank" download="resume.pdf"
              className="mt-4 inline-block text-xs px-6 py-4 font-semibold bg-[#00ff00] text-black hover:bg-[#00cc00] transition duration-300"
            >
              Download Resume
            </Link>
          </div>
          <div className="w-full lg:w-2/5 p-2 lg:p-6">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                <Link
                  href="/projects"
                  className="py-10 border border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                >
                  <FolderCode size={40} />
                  <span className="text-xs font-bold">My Projects</span>
                </Link>
                <Link
                  href="/skills"
                  className="py-10 border border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                >
                  <Lightbulb size={40} />
                  <span className="text-xs font-bold">My Skills</span>
                </Link>
                <Link
                  href="/contact"
                  className="py-10 border border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                >
                  <Mail size={40} />
                  <span className="text-xs font-bold">Contact Me</span>
                </Link>
                <Link
                  href="/about"
                  className="py-10 border border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                >
                  <CircleUser size={40} />
                  <span className="text-xs font-bold">About Me</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full text-center py-4 mt-8 flex items-center justify-center space-x-4 lg:space-x-16">
        <div className="bg-[#171717]/60 hover:bg-[#00ff00] rounded-full p-2 object-fill">
          <Link href="https://twitter.com/Danibholie">
            <FaXTwitter size={25} />
          </Link>
        </div>
        <div className="bg-[#171717]/60 hover:bg-[#00ff00] rounded-full p-2 object-fill">
          <Link href="https://www.instagram.com/lbd_codes/">
            <FaSquareInstagram size={25} />
          </Link>
        </div>
        <div className="bg-[#171717]/60 hover:bg-[#00ff00] rounded-full p-2 object-fill">
          <Link href="https://www.linkedin.com/in/lambe-boluwatife-870b6136">
            <FaLinkedin size={25} />
          </Link>
        </div>
        <div className="bg-[#171717]/60 hover:bg-[#00ff00] rounded-full p-2 object-fill">
          <Link href="https://github.com/lambeboluwatife">
            <FaSquareGithub size={25} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
