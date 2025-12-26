import Education from "@/components/main/Education";
import WorkExperience from "@/components/main/WorkExperience";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <div>
      <WorkExperience />
      <Projects />
      <Education />
    </div>
  );
}
