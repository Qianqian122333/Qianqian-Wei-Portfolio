import { jobs } from "../../Constant/jobs";
import JobTimeline from "./JobTimeline";

const WorkExperience = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">
        Work Experience
      </h2>
      <JobTimeline jobs={jobs} />
    </section>
  );
};

export default WorkExperience;
