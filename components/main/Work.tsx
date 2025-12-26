import { projects } from "../../Constant/projects";
import { jobs } from "../../Constant/jobs";
import JobTimeline from "./JobTimeline";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      {/* 工作经历时间线 */}
      <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">
        Work Experience
      </h2>
      <JobTimeline jobs={jobs} />

      {/* 项目展示 */}
      <h2 className="text-4xl font-bold text-white mt-20 mb-12 tracking-tight">
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

export default Work;
