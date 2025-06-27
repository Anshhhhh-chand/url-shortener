import {
  Github,
  Instagram,
  Linkedin,
  Home,
  BookOpen,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#22223b] dark:bg-[#232946] text-white dark:text-[#f4f4f4] text-center mt-10 px-4 py-6 rounded-t-2xl text-[1.1rem] tracking-wide">
      <div className="text-[1.2rem] font-bold mb-2">URL Shortener</div>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-3">
        <a href="/" className="transition-transform duration-300 transform hover:scale-125 hover:text-black dark:hover:text-white">
          <Home size={20} />
        </a>
        <a href="/history" className="transition-transform duration-300 transform hover:scale-125 hover:text-black dark:hover:text-white">
          <BookOpen size={20} />
        </a>
        <a
          href="https://github.com/Anshhhhh-chand"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-125 hover:text-black dark:hover:text-white"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.instagram.com/ansh_4sure_/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-125 hover:text-black dark:hover:text-white"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://linkedin.com/in/ansh-chand-830b40233/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 transform hover:scale-125 hover:text-black dark:hover:text-white"
        >
          <Linkedin size={20} />
        </a>
      </div>

      <div className="mt-4 text-sm text-[#a0aec0] dark:text-[#d4d4d4]">
        Built by <strong>Ansh Pratap Chand</strong> 
      </div>
    </footer>
  );
}
