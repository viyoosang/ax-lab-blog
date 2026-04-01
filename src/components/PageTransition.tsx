import { useLocation } from 'react-router-dom';
import { useEffect, useRef, type ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('page-enter');
    // force reflow
    void el.offsetWidth;
    el.classList.add('page-enter');
  }, [location.pathname]);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
