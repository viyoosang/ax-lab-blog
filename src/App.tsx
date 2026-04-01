import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

export default function App() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar (desktop) / Top bar (mobile) */}
      <header className="shrink-0 p-6 sm:p-10 md:p-14 sm:w-36">
        <Navbar />
      </header>

      {/* Divider: horizontal on mobile, vertical on desktop */}
      <div className="relative">
        <div className="w-full h-px sm:w-px sm:h-full bg-gray-100 opacity-50" />
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 sm:p-10 md:p-14 max-w-2xl">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
    </div>
  );
}
