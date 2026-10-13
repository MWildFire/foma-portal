import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageLoading } from './components/layout/PageLoading';
import { RouteBoundary } from './components/layout/RouteBoundary';

// Every page is a chunk of its own: a page's code, and the content it reads, load when the page is first opened.
const TodayPage = lazy(() => import('./pages/TodayPage').then(module => ({ default: module.TodayPage })));
const PlanPage = lazy(() => import('./pages/PlanPage').then(module => ({ default: module.PlanPage })));
const ExamsPage = lazy(() => import('./pages/ExamsPage').then(module => ({ default: module.ExamsPage })));
const SubjectPage = lazy(() => import('./pages/SubjectPage').then(module => ({ default: module.SubjectPage })));
const TopicPage = lazy(() => import('./pages/TopicPage').then(module => ({ default: module.TopicPage })));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage').then(module => ({ default: module.GlossaryPage })));
const FormulasPage = lazy(() => import('./pages/FormulasPage').then(module => ({ default: module.FormulasPage })));
const PracticePage = lazy(() => import('./pages/PracticePage').then(module => ({ default: module.PracticePage })));
const PaperPage = lazy(() => import('./pages/PaperPage').then(module => ({ default: module.PaperPage })));
const PastPapersPage = lazy(() => import('./pages/PastPapersPage').then(module => ({ default: module.PastPapersPage })));
const SimsPage = lazy(() => import('./pages/SimsPage').then(module => ({ default: module.SimsPage })));
const ReportPage = lazy(() => import('./pages/ReportPage').then(module => ({ default: module.ReportPage })));
const SettingsPage = lazy(() => import('./pages/SettingsPage').then(module => ({ default: module.SettingsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

export default function App() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
        {/* A page whose files fail to load shows the load error with a retry. Keyed by route: the next page starts clean. */}
        <RouteBoundary key={location.pathname}>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<TodayPage />} />
              <Route path="/plan" element={<PlanPage />} />
              <Route path="/exams" element={<ExamsPage />} />
              <Route path="/s/:subject" element={<SubjectPage />} />
              <Route path="/s/:subject/t/:topic" element={<TopicPage />} />
              <Route path="/s/:subject/terms" element={<GlossaryPage />} />
              <Route path="/s/:subject/formulas" element={<FormulasPage />} />
              <Route path="/s/:subject/practice" element={<PracticePage />} />
              <Route path="/s/:subject/paper/:paper" element={<PaperPage />} />
              <Route path="/s/:subject/past-papers" element={<PastPapersPage />} />
              <Route path="/sims" element={<SimsPage />} />
              <Route path="/report" element={<ReportPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </RouteBoundary>
      </main>
      <Footer />
    </div>
  );
}
