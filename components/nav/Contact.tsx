import React from "react";
import Link from "next/link";
import { Github, Linkedin, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-6 py-4">
      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/qianqianwei112233"
        target="_blank"
        className="group relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
          }}
        />
        <div className="relative z-10 flex items-center gap-2">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </div>
      </Link>

      {/* GitHub */}
      <Link
        href="https://github.com/Qianqian122333"
        target="_blank"
        className="group relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
          }}
        />
        <div className="relative z-10 flex items-center gap-2">
          <Github size={20} />
          <span>GitHub</span>
        </div>
      </Link>

      {/* Resume Download */}
      <a
        href="/Software Engineer Qianqian Wei.pdf"
        download="Software Engineer Qianqian Wei.pdf"
        className="group relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
          }}
        />
        <div className="relative z-10 flex items-center gap-2">
          <FileDown size={20} />
          <span>Resume</span>
        </div>
      </a>
    </div>
  );
};

export default Contact;
