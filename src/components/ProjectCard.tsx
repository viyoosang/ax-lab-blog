import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block no-underline py-3"
    >
      <div className="flex items-baseline gap-2">
        <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200 shrink-0">
          {project.title}
        </span>
        <span className="flex-1 overflow-hidden text-gray-200 text-sm tracking-[0.2em] leading-none select-none whitespace-nowrap">
          {'·'.repeat(100)}
        </span>
        <span className="text-gray-300 text-sm shrink-0">
          {project.author}
        </span>
      </div>
      <p className="text-gray-400 text-sm mt-1">
        {project.description}
      </p>
    </Link>
  );
}
