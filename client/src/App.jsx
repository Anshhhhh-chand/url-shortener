/// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="app-container flex flex-col min-h-screen">
        <Router>
          <div className={`main-bg flex-1 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-8 flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/success" element={<Success />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </main>
          </div>
        </Router>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
