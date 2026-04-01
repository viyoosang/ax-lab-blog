import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'about', path: '/' },
  { label: 'projects', path: '/projects' },
  { label: 'thoughts', path: '/thoughts' },
];

export default function Navbar() {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="flex flex-row sm:flex-col gap-4 text-sm lowercase py-2 sm:py-0">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`no-underline transition-colors duration-200 ${
            isActive(item.path)
              ? 'text-gray-800'
              : 'text-gray-300 hover:text-gray-500'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
