import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareGithub,
} from "react-icons/fa6";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-12 flex flex-col items-center space-y-6">
      <div className="flex items-center justify-center space-x-4 lg:space-x-12">
        <div className="bg-light dark:bg-[#171717]/60 hover:bg-[#00ff00] hover:text-black rounded-full p-2 transition-all duration-300">
          <Link href="mailto:lambeboluwatife@gmail.com" title="Email Me">
            <Mail size={22} />
          </Link>
        </div>
        <div className="bg-light dark:bg-[#171717]/60 hover:bg-[#00ff00] hover:text-black rounded-full p-2 transition-all duration-300">
          <Link href="https://twitter.com/Danibholie">
            <FaXTwitter size={22} />
          </Link>
        </div>
        <div className="bg-light dark:bg-[#171717]/60 hover:bg-[#00ff00] hover:text-black rounded-full p-2 transition-all duration-300">
          <Link href="https://www.linkedin.com/in/lambe-boluwatife-870b6136">
            <FaLinkedin size={22} />
          </Link>
        </div>
        <div className="bg-light dark:bg-[#171717]/60 hover:bg-[#00ff00] hover:text-black rounded-full p-2 transition-all duration-300">
          <Link href="https://github.com/lambeboluwatife">
            <FaSquareGithub size={22} />
          </Link>
        </div>
      </div>
      <div className="text-center space-y-1">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
          Last Updated: Jan 2026
        </p>
        <p className="text-[10px] text-gray-400 font-medium">
          &copy; {new Date().getFullYear()} Lambe Boluwatife. Built with Next.js
          & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
