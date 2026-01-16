import React, { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';
import { useAppContext } from '../contexts/AppContext';
import { useFetch } from '../hooks/useFetch';

const ModulesPage = memo(() => {
  const navigate = useNavigate();
  const { yearId, filiereId } = useParams();
  const { darkMode, toggleDarkMode, selectedYear, selectedFiliere, setSelectedModule } = useAppContext();
  
  const { data: modules, loading, error, refetch } = useFetch(
    () => api.getModulesByFiliere(filiereId),
    [filiereId]
  );

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    navigate(`/years/${yearId}/filieres/${filiereId}/modules/${module.id}/exams`);
  };

  const handleBack = () => {
    navigate(`/years/${yearId}/filieres`);
  };

  const getModuleIcon = (name) => {
    if (!name) return 'menu_book';
    const lowerName = name.toLowerCase();
    if (lowerName.includes('algo') || lowerName.includes('program')) return 'code';
    if (lowerName.includes('web') || lowerName.includes('html')) return 'language';
    if (lowerName.includes('base') || lowerName.includes('données') || lowerName.includes('donnees')) return 'storage';
    if (lowerName.includes('réseau') || lowerName.includes('reseau')) return 'wifi';
    if (lowerName.includes('sécurité') || lowerName.includes('securite')) return 'security';
    if (lowerName.includes('système') || lowerName.includes('systeme')) return 'computer';
    return 'menu_book';
  };

  if (loading) {
    return (
      <div className={`fredoka-font ${darkMode ? 'dark-mode exams-page' : ''}`} style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a2e' : '#f0f4f8' }}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`fredoka-font ${darkMode ? 'dark-mode exams-page' : ''}`} style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a2e' : '#f0f4f8' }}>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <span className="material-symbols-outlined text-danger mb-3" style={{ fontSize: '4rem' }}>error</span>
          <p className="text-danger">{error}</p>
          <button className="btn btn-primary" onClick={refetch}>Réessayer</button>
          <button className="btn btn-outline-secondary mt-2" onClick={handleBack}>Retour</button>
        </div>
      </div>
    );
  }

  if (modules.length === 0) {
    return (
      <div className={`fredoka-font ${darkMode ? 'dark-mode exams-page' : ''}`} style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a2e' : '#f0f4f8' }}>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <span className="material-symbols-outlined text-warning mb-3" style={{ fontSize: '4rem' }}>info</span>
          <p className="text-muted">Aucun module disponible</p>
          <button className="btn btn-primary" onClick={refetch}>Actualiser</button>
          <button className="btn btn-outline-secondary mt-2" onClick={handleBack}>Retour</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fredoka-font ${darkMode ? 'dark-mode exams-page' : ''}`} style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a2e' : '#f0f4f8' }}>
      <div className="p-4">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <button 
            className="btn btn-link p-0 text-decoration-none" 
            style={{ color: darkMode ? '#e5e7eb' : '#1f2937' }} 
            onClick={handleBack}
          >
            <span className="material-icons-outlined" style={{ fontSize: '1.875rem' }}>arrow_back</span>
          </button>
          <h1 className="mb-0 fw-semibold" style={{ fontSize: '1.25rem', color: darkMode ? '#f3f4f6' : '#111827' }}>
            Modules
          </h1>
          <button 
            className="btn btn-link p-0 text-decoration-none" 
            style={{ color: darkMode ? '#e5e7eb' : '#1f2937' }} 
            onClick={toggleDarkMode}
          >
            <span className="material-icons-outlined" style={{ fontSize: '1.875rem' }}>
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </header>

        {selectedFiliere && (
          <div 
            className="mb-4 p-3 rounded" 
            style={{ 
              backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)', 
              border: `2px solid ${darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}` 
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <div className="flex-grow-1">
                <h5 className="mb-0 fw-bold" style={{ color: darkMode ? 'white' : '#111827' }}>
                  {selectedFiliere.name || selectedFiliere.title}
                </h5>
                <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                  {selectedYear?.name || selectedYear?.title}
                </p>
              </div>
            </div>
          </div>
        )}

        <main>
          <h2 className="fw-bold mb-4" style={{ fontSize: '1.75rem', color: darkMode ? '#f3f4f6' : '#111827' }}>
            Modules disponibles
          </h2>

          <div className="d-flex flex-column gap-3">
            {modules.map((module, index) => (
              <div 
                key={module.id || index} 
                className="card exam-card shadow-sm border-0" 
                style={{ 
                  borderLeftColor: '#3b82f6',
                  cursor: 'pointer'
                }}
                onClick={() => handleModuleSelect(module)}
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex gap-3 align-items-start flex-grow-1">
                      <div 
                        style={{ 
                          backgroundColor: '#3b82f6', 
                          width: '48px', 
                          height: '48px', 
                          borderRadius: '0.75rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}
                      >
                        <span className="material-icons-outlined text-white" style={{ fontSize: '1.75rem' }}>
                          {getModuleIcon(module.name || module.title)}
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem', color: darkMode ? 'white' : '#111827' }}>
                          {module.name || module.title || 'Module'}
                        </h5>
                        <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
                          {module.code || module.description || 'Module de formation'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
});

ModulesPage.displayName = 'ModulesPage';

export default ModulesPage;