import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
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

  )
}

export default Footer
