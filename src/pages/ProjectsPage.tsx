import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const authorOrder = ['서준영', '홍석진', '김규동'];
const sorted = [...projects].sort(
  (a, b) => authorOrder.indexOf(a.author ?? '') - authorOrder.indexOf(b.author ?? ''),
);

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
