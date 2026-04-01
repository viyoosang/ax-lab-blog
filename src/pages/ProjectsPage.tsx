import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const sorted = [...projects].sort((a, b) => b.date.localeCompare(a.date));

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex flex-col">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
