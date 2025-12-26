import Education from "@/components/main/Education";
import WorkExperience from "@/components/main/WorkExperience";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section id="work-experience">
        <WorkExperience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>
    </div>
  );
}
