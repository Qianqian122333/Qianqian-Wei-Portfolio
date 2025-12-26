"use client";

import Link from "next/link";

const menuItems = [
  { name: "Work Experience", href: "#work-experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

const Menu = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-4 pb-8">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-lg font-medium text-gray-400 hover:text-orange-500 hover:scale-105 transition-all duration-300"
        >
          --{item.name}--
        </Link>
      ))}
    </div>
  );
};

export default Menu;
