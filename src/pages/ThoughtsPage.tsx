import { Link } from 'react-router-dom';
import { thoughts } from '../data/thoughts';

const sorted = [...thoughts].sort((a, b) => b.date.localeCompare(a.date));

export default function ThoughtsPage() {
  return (
    <div>
      <div className="flex flex-col">
        {sorted.map((t) => (
          <Link
            key={t.slug}
            to={`/thoughts/${t.slug}`}
            className="group block no-underline py-3"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200 shrink-0">
                {t.title}
              </span>
              <span className="flex-1 overflow-hidden text-gray-200 text-sm tracking-[0.2em] leading-none select-none whitespace-nowrap">
                {'·'.repeat(100)}
              </span>
              <span className="text-gray-300 text-sm shrink-0 tabular-nums">
                {t.date}
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">
              {t.description}
              {t.author && <span className="text-gray-300"> · {t.author}</span>}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
