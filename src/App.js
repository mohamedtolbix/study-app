import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';

// Lazy loading for better performance
const YearsPage = lazy(() => import('./components/YearsPage'));
const FilieresPage = lazy(() => import('./components/FilieresPage'));
const ModulesPage = lazy(() => import('./components/ModulesPage'));
const ExamsPage = lazy(() => import('./components/ExamsPage'));

// Loading component
const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Chargement...</span>
    </div>
  </div>
);

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div style={{ minHeight: '100vh' }}>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700;800&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
            @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
            
            body {
              font-family: 'Lexend', sans-serif;
              margin: 0;
            }
            
            .fredoka-font {
              font-family: 'Fredoka', sans-serif;
            }
            
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              font-size: 24px;
              font-family: 'Material Symbols Outlined';
            }

            .material-icons-outlined {
              font-family: 'Material Icons Outlined';
              font-weight: normal;
              font-style: normal;
              font-size: 24px;
              line-height: 1;
            }
            
            .bg-primary {
              background-color: #f9f506;
            }
            
            .text-primary {
              color: #f9f506;
            }
            
            .dark-mode {
              background-color: #23220f;
              color: white;
            }

            .dark-mode.courses-page {
              background-color: #121212;
            }

            .dark-mode.exams-page {
              background-color: #1a1a2e;
            }
            
            .dark-mode .card {
              background-color: #262626 !important;
              color: white !important;
            }

            .dark-mode.courses-page .card {
              background-color: #1f2937 !important;
            }

            .dark-mode.exams-page .card {
              background-color: #16213e !important;
            }
            
            .dark-mode .text-dark {
              color: white !important;
            }
            
            .dark-mode .text-secondary {
              color: #9ca3af !important;
            }
            
            .decorative-icon {
              position: absolute;
              z-index: 0;
            }
            
            .card:hover {
              transform: scale(1.05);
              transition: transform 0.3s ease;
            }
            
            .icon-container {
              display: flex;
              align-items: center;
              justify-content: center;
              aspect-ratio: 16/9;
              border-radius: 0.75rem;
            }
            
            .bg-blue-light {
              background-color: #dbeafe;
            }
            
            .dark-mode .bg-blue-light {
              background-color: rgba(30, 58, 138, 0.5);
            }
            
            .bg-green-light {
              background-color: #dcfce7;
            }
            
            .dark-mode .bg-green-light {
              background-color: rgba(20, 83, 45, 0.5);
            }

            .bg-blue-100 { background-color: #dbeafe; }
            .bg-purple-100 { background-color: #e9d5ff; }
            .bg-green-100 { background-color: #dcfce7; }
            .bg-orange-100 { background-color: #ffedd5; }
            .bg-pink-100 { background-color: #fce7f3; }
            .bg-yellow-100 { background-color: #fef3c7; }
            .bg-red-100 { background-color: #fee2e2; }
            .bg-teal-100 { background-color: #ccfbf1; }
            .bg-lime-100 { background-color: #ecfccb; }
            .bg-amber-100 { background-color: #fef3c7; }

            .course-card {
              border-radius: 1.5rem;
              cursor: pointer;
              transition: transform 0.3s ease;
            }
            
            .course-card:hover {
              transform: translateY(-5px);
            }
            
            .course-icon-container {
              height: 144px;
              border-radius: 1.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .icon-box {
              width: 64px;
              height: 64px;
              border-radius: 0.75rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .rotate-effect {
              transform: rotate(-12deg);
            }

            .exam-card {
              border-radius: 1rem;
              cursor: pointer;
              transition: all 0.3s ease;
              border-left: 4px solid;
            }

            .exam-card:hover {
              transform: translateX(8px);
              box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            }

            .badge-custom {
              padding: 0.35rem 0.85rem;
              border-radius: 1rem;
              font-size: 0.75rem;
              font-weight: 600;
            }

            .year-badge {
              position: absolute;
              top: 12px;
              right: 12px;
              background-color: rgba(59, 130, 246, 0.9);
              color: white;
              padding: 0.4rem 0.9rem;
              border-radius: 1rem;
              font-size: 0.8rem;
              font-weight: 600;
              z-index: 10;
            }

            .dark-mode .year-badge {
              background-color: rgba(59, 130, 246, 0.7);
            }
          `}</style>

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />

          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<YearsPage />} />
              <Route path="/years/:yearId/filieres" element={<FilieresPage />} />
              <Route path="/years/:yearId/filieres/:filiereId/modules" element={<ModulesPage />} />
              <Route path="/years/:yearId/filieres/:filiereId/modules/:moduleId/exams" element={<ExamsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AppProvider>
  );
}


