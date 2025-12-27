import Link from "next/link";
import { Github, Linkedin, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-6 py-4">
      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/qianqianwei112233"
        target="_blank"
        className="relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-linear-to-r from-orange-400 via-orange-550 to-orange-700 transition-transform duration-500 group-hover:scale-110" />
        <div className="relative z-10 flex items-center gap-2">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </div>
      </Link>

      {/* GitHub */}
      <div className="hidden md:block">
        <Link
          href="https://github.com/Qianqian122333"
          target="_blank"
          className="relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-linear-to-r from-orange-400 via-orange-550 to-orange-700 transition-transform duration-500 group-hover:scale-110" />
          <div className="relative z-10 flex items-center gap-2">
            <Github size={20} />
            <span>GitHub</span>
          </div>
        </Link>
      </div>

      {/* Resume Download */}
      <a
        href="/Software Engineer Qianqian Wei.pdf"
        download="Software Engineer Qianqian Wei.pdf"
        className="relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-linear-to-r from-orange-400 via-orange-550 to-orange-700 transition-transform duration-500 group-hover:scale-110" />
        <div className="relative z-10 flex items-center gap-2">
          <FileDown size={20} />
          <span>Resume</span>
        </div>
      </a>
    </div>
  );
};

export default Contact;
