import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between mb-8">
        <h1 className="text-lg font-bold font-montserrat">L.B.D Codes</h1>
        <ThemeToggle />
    </header>
  )
}

export default Header
