import AnthonyProjectShowcase from "@/components/projects/AnthonyProjectShowcase";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="antSection">
      <div className="antSectionHead">
        <div>
          <p className="antKicker">02 / PROJECTS</p>
          <h2>Selected work and project builds.</h2>
        </div>

        <p>
          Explore projects from my internship and final year work,
          including the technologies, implementation decisions and
          features developed for each project.
        </p>
      </div>

      <AnthonyProjectShowcase allProjects={projects} />
    </section>
  );
}