import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { TodayPage } from './pages/TodayPage';
import { PlanPage } from './pages/PlanPage';
import { ExamsPage } from './pages/ExamsPage';
import { SubjectPage } from './pages/SubjectPage';
import { TopicPage } from './pages/TopicPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { FormulasPage } from './pages/FormulasPage';
import { PracticePage } from './pages/PracticePage';
import { PaperPage } from './pages/PaperPage';
import { SimsPage } from './pages/SimsPage';
import { ReportPage } from './pages/ReportPage';
import { SettingsPage } from './pages/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
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
          <Route path="/sims" element={<SimsPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
