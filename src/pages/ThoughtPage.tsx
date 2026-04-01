import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { thoughts } from '../data/thoughts';

export default function ThoughtPage() {
  const { slug } = useParams<{ slug: string }>();
  const thought = thoughts.find((t) => t.slug === slug);

  if (!thought) {
    return (
      <div className="text-gray-400">
        <p>글을 찾을 수 없습니다.</p>
        <Link to="/thoughts" className="text-gray-600 underline underline-offset-4 decoration-gray-200 hover:decoration-gray-600 transition-colors duration-200">
          돌아가기
        </Link>
      </div>
    );
  }

  return (
    <article>
      <header className="mb-7">
        <Link
          to="/thoughts"
          className="text-gray-300 text-sm no-underline hover:text-gray-500 transition-colors duration-200"
        >
          &larr; back
        </Link>
        <h1 className="text-gray-800 text-2xl mt-4 mb-2" style={{ fontVariationSettings: "'wght' 600" }}>
          {thought.title}
        </h1>
        <p className="text-gray-400 text-sm">
          {thought.date}
          {thought.author && <span> · {thought.author}</span>}
        </p>
      </header>

      <div className="prose max-w-none">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{thought.content}</ReactMarkdown>
      </div>
    </article>
  );
}
