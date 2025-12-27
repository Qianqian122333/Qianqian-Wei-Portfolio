"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const menuItems = [
  { name: "Skills", href: "#skills" },
  { name: "Work Experience", href: "#work-experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

const Menu = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // 获取所有section元素
    const sections = menuItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    if (sections.length === 0) return;

    // 创建Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // 找到当前在视口中最靠近顶部的section
        const visibleEntries = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (visibleEntries.length > 0) {
          // 按照boundingClientRect.top排序,选择最靠近视口顶部的
          const topEntry = visibleEntries.reduce((prev, current) => {
            return current.boundingClientRect.top < prev.boundingClientRect.top
              ? current
              : prev;
          });
          setActiveSection(`#${topEntry.target.id}`);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-10% 0px -70% 0px",
      }
    );

    // 观察所有section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // 清理函数
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = useCallback((href: string) => {
    setActiveSection(href);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 pt-4 pb-8">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => handleClick(item.href)}
          className={`text-lg font-medium hover:scale-105 transition-all duration-300 ${
            activeSection === item.href
              ? "text-orange-500"
              : "text-gray-400 hover:text-orange-500"
          }`}
        >
          --{item.name}--
        </Link>
      ))}
    </div>
  );
};

export default Menu;
