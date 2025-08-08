import Link from "next/link";
import { ArrowLeft, Code, Zap, Users, Target } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <main className="min-h-screen p-4 lg:p-10 flex flex-col items-center font-poppins">
      <Header />
      <div className="w-full max-w-6xl">
        <div className="flex items-center gap-6 justify-between mb-8">
          <Link
            href="/"
            className="flex items-center space-x-2 text-[#00ff00] hover:text-[#00cc00] transition duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="text-lg font-bold text-center font-montserrat">
            About Me
          </h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-center justify-center max-w-6xl">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 p-2 lg:p-6">
            <h2 className="my-4 text-xl md:text-2xl text-[#00ff00]">
              Who I Am
            </h2>
            <p className="my-4 text-sm text-justify leading-relaxed">
              I'm Lambe Boluwatife, a passionate Full-Stack Developer with a deep love for creating 
              innovative web solutions. My journey in software development began with curiosity and 
              has evolved into a professional pursuit of excellence in building responsive, 
              user-centric applications.
            </p>
            <p className="my-4 text-sm text-justify leading-relaxed">
              Beyond traditional web development, I'm fascinated by the potential of AI and 
              automation. I specialize in creating intelligent agents that can solve real-world 
              problems, using cutting-edge frameworks like Mastra and OpenAI tools to bridge 
              the gap between human needs and technological solutions.
            </p>
            
            <h2 className="my-4 text-xl md:text-2xl text-[#00ff00] mt-8">
              My Approach
            </h2>
            <p className="my-4 text-sm text-justify leading-relaxed">
              I believe in writing clean, maintainable code that not only works but tells a story. 
              Every project is an opportunity to learn something new and push the boundaries of 
              what's possible. I'm driven by the challenge of turning complex problems into 
              elegant solutions that users love to interact with.
            </p>
          </div>

          {/* Right Content - Stats/Highlights */}
          <div className="w-full lg:w-2/5 p-2 lg:p-6">
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="grid grid-cols-1 gap-6 w-full">
                <div className="p-6 border border-[#000] dark:border-white rounded-lg hover:border-[#00ff00] transition duration-300">
                  <div className="flex items-center space-x-4">
                    <Code size={30} className="text-[#00ff00]" />
                    <div>
                      <h3 className="text-sm font-bold">Full-Stack Development</h3>
                      <p className="text-xs text-gray-400 mt-1">MERN Stack Specialist</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border border-[#000] dark:border-white rounded-lg hover:border-[#00ff00] transition duration-300">
                  <div className="flex items-center space-x-4">
                    <Zap size={30} className="text-[#00ff00]" />
                    <div>
                      <h3 className="text-sm font-bold">AI Integration</h3>
                      <p className="text-xs text-gray-400 mt-1">Intelligent Agents & Automation</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border border-[#000] dark:border-white rounded-lg hover:border-[#00ff00] transition duration-300">
                  <div className="flex items-center space-x-4">
                    <Users size={30} className="text-[#00ff00]" />
                    <div>
                      <h3 className="text-sm font-bold">User Experience</h3>
                      <p className="text-xs text-gray-400 mt-1">Intuitive Design & Interface</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border border-[#000] dark:border-white rounded-lg hover:border-[#00ff00] transition duration-300">
                  <div className="flex items-center space-x-4">
                    <Target size={30} className="text-[#00ff00]" />
                    <div>
                      <h3 className="text-sm font-bold">Problem Solving</h3>
                      <p className="text-xs text-gray-400 mt-1">Real-world Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 w-full">
                <Link
                  href="/contact"
                  className="w-full inline-block text-center text-xs px-6 py-4 font-semibold bg-[#00ff00] text-black hover:bg-[#00cc00] transition duration-300"
                >
                  Let's Work Together
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}