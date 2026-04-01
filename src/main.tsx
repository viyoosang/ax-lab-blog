import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import ThoughtsPage from './pages/ThoughtsPage';
import ThoughtPage from './pages/ThoughtPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="thoughts" element={<ThoughtsPage />} />
          <Route path="thoughts/:slug" element={<ThoughtPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
