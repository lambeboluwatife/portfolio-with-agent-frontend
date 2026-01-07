import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between mb-8">
      <h1 className="text-lg font-bold font-montserrat tracking-tight">
        L.B.D <span className="text-[#00ff00]">Codes</span>
      </h1>
      <div className="flex items-center space-x-6">
        <Link
          href="/contact"
          className="text-xs font-semibold hover:text-[#00ff00] transition duration-300"
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
