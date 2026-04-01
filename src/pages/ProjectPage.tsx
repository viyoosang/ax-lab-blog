import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-gray-400">
        <p>프로젝트를 찾을 수 없습니다.</p>
        <Link to="/projects" className="text-gray-600 underline underline-offset-4 decoration-gray-200 hover:decoration-gray-600 transition-colors duration-200">
          돌아가기
        </Link>
      </div>
    );
  }

  return (
    <article>
      <header className="mb-7">
        <Link
          to="/projects"
          className="text-gray-300 text-sm no-underline hover:text-gray-500 transition-colors duration-200"
        >
          &larr; back
        </Link>
        <h1 className="text-gray-800 text-2xl mt-4 mb-2" style={{ fontVariationSettings: "'wght' 600" }}>
          {project.title}
        </h1>
        <p className="text-gray-400 text-sm">
          {project.description}
          {project.author && (
            <span className="text-gray-300"> · {project.author}</span>
          )}
        </p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-400 border border-border rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose max-w-none">
        <ReactMarkdown>{project.content}</ReactMarkdown>
      </div>

      {project.links.length > 0 && (
        <div className="mt-14 pt-7 border-t border-border">
          <h3 className="text-gray-600 text-sm mb-3" style={{ fontVariationSettings: "'wght' 550" }}>
            Links
          </h3>
          <ul className="flex flex-col gap-2">
            {project.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 underline underline-offset-4 decoration-gray-200 hover:decoration-gray-600 transition-colors duration-200 text-sm"
                >
                  {link.label} &rarr;
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
