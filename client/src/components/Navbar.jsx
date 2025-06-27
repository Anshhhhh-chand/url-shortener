// client/src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
      <div className="flex gap-4 text-lg font-semibold">
        <Link to="/" className="hover:underline transform transition-transform duration-300 hover:scale-110" style={{transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)'}}>
          Home
        </Link>
        <Link to="/history" className="hover:underline transform transition-transform duration-300 hover:scale-110" style={{transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)'}}>
          History
        </Link>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover:opacity-80 transition dark:text-white"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
