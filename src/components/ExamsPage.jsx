import React, { memo, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';
import { useAppContext } from '../contexts/AppContext';
import { useFetch } from '../hooks/useFetch';

const FILE_BASE_URL = 'https://podo.b1.ma';

const ExamsPage = memo(() => {
  const navigate = useNavigate();
  const { yearId, filiereId, moduleId } = useParams();
  const { darkMode, toggleDarkMode, selectedYear, selectedFiliere, selectedModule } = useAppContext();
  const [activeTab, setActiveTab] = useState('efms');

  const fetchFunction = useCallback(() => {
    if (activeTab === 'efms') return api.getEFMsByModule(moduleId);
    if (activeTab === 'ccs') return api.getCCsByModule(moduleId);
    if (activeTab === 'courses') return api.getCoursesByModule(moduleId);
  }, [moduleId, activeTab]);

  const { data, loading, error, refetch } = useFetch(fetchFunction, [moduleId, activeTab]);

  const handleBack = () => {
    navigate(`/years/${yearId}/filieres/${filiereId}/modules`);
  };

  /* =======================
     AJOUT : téléchargement
     ======================= */
  const downloadPdf = (filePath, title = 'document') => {
    if (!filePath) {
      alert('Fichier non disponible');
      return;
    }

    const url = FILE_BASE_URL+ '/storage/' + filePath;
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', `${title}.pdf`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  /* ======================= */

  if (loading) {
    return (
      <div className={`fredoka-font ${darkMode ? 'dark-mode exams-page' : ''}`}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="spinner-border text-primary" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`fredoka-font ${darkMode ? 'dark-mode exams-page' : ''}`}>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <p className="text-danger">{error}</p>
          <button className="btn btn-primary" onClick={refetch}>Réessayer</button>
          <button className="btn btn-outline-secondary mt-2" onClick={handleBack}>Retour</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fredoka-font ${darkMode ? 'dark-mode exams-page' : ''}`}>
      <div className="p-4">

        <header className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-link" onClick={handleBack}>
            ←
          </button>
          <h1>
            {activeTab === 'efms' ? 'EFMs' : activeTab === 'ccs' ? 'Contrôles' : 'Cours'}
          </h1>
          <button className="btn btn-link" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </header>

        <div className="btn-group w-100 mb-4">
          <button className={`btn ${activeTab === 'efms' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('efms')}>EFMs</button>
          <button className={`btn ${activeTab === 'ccs' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('ccs')}>Contrôles</button>
          <button className={`btn ${activeTab === 'courses' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('courses')}>Cours</button>
        </div>

        <main>
          {activeTab === 'courses' && Array.isArray(data) && data.map((course, index) => (
            <div key={course.id || index} className="card shadow-sm mb-3">
              <div className="card-body">
                <h5>{course.title || `Cours ${index + 1}`}</h5>
                <p className="text-muted">{course.description || 'Support de cours'}</p>

                {/* AJOUT UNIQUE */}
                {course.file_path && (
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => downloadPdf(course.file_path, course.title)}
                  >
                    Télécharger
                  </button>
                )}
              </div>
            </div>
          ))}
        </main>

      </div>
    </div>
  );
});

ExamsPage.displayName = 'ExamsPage';
export default ExamsPage;
