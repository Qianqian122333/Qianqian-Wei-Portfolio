import { projects } from "../../Constant/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">
        Projects
      </h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
