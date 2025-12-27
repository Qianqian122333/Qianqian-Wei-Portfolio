import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  company?: string;
  status?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardContent = (
    <Card
      className={cn(
        "bg-white/5 border-white/10 transition-all duration-300 group h-full",
        "hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10",
        project.link && "cursor-pointer hover:-translate-y-1"
      )}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2 gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <CardTitle
              className="text-2xl font-bold group-hover:opacity-80 transition-opacity"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {project.title}
            </CardTitle>
            {project.link && (
              <ArrowUpRight className="w-5 h-5 text-orange-500 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            )}
          </div>
          {project.status && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10 whitespace-nowrap shrink-0">
              {project.status}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          {project.company && (
            <span className="text-sm font-semibold text-orange-400/80">
              {project.company}
            </span>
          )}
          <CardDescription className="text-lg font-medium text-white">
            {project.role}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 leading-relaxed">{project.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm font-medium rounded-full bg-gray-800 text-orange-500 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );

  if (project.link) {
    return (
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ProjectCard;
