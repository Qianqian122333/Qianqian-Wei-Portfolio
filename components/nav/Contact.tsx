import Link from "next/link";
import { Github, Linkedin, FileDown } from "lucide-react";

const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="group relative flex items-center justify-center">
      {children}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg z-50">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-6 py-4">
      {/* LinkedIn */}
      <Tooltip text="LinkedIn">
        <Link
          href="https://www.linkedin.com/in/qianqianwei112233"
          target="_blank"
          className="relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-linear-to-r from-orange-400 via-orange-550 to-orange-700 transition-transform duration-500 group-hover:scale-110" />
          <div className="relative z-10 flex items-center gap-2">
            <Linkedin size={20} />
            {/* <span>LinkedIn</span> */}
          </div>
        </Link>
      </Tooltip>

      {/* GitHub */}
      {/* <div className="hidden lg:block"> */}
      <Tooltip text="GitHub">
        <Link
          href="https://github.com/Qianqian122333"
          target="_blank"
          className="relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-linear-to-r from-orange-400 via-orange-550 to-orange-700 transition-transform duration-500 group-hover:scale-110" />
          <div className="relative z-10 flex items-center gap-2">
            <Github size={20} />
            {/* <span>GitHub</span> */}
          </div>
        </Link>
      </Tooltip>
      {/* </div> */}

      {/* Resume Download */}
      <Tooltip text="Resume Download">
        <a
          href="/Software Engineer Qianqian Wei.pdf"
          download="Software Engineer Qianqian Wei.pdf"
          className="relative px-6 py-3 rounded-full font-medium text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-linear-to-r from-orange-400 via-orange-550 to-orange-700 transition-transform duration-500 group-hover:scale-110" />
          <div className="relative z-10 flex items-center gap-2">
            <FileDown size={20} />
            {/* <span>Resume</span> */}
          </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default Contact;
