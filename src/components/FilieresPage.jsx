import React, { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';
import { useAppContext } from '../contexts/AppContext';
import { useFetch } from '../hooks/useFetch';

const FilieresPage = memo(() => {
  const navigate = useNavigate();
  const { yearId } = useParams();
  const { darkMode, toggleDarkMode, selectedYear, setSelectedFiliere } = useAppContext();
  
  const { data: filieres, loading, error, refetch } = useFetch(
    () => api.getFilieresByYear(yearId),
    [yearId]
  );

  const handleFiliereSelect = (filiere) => {
    setSelectedFiliere(filiere);
    navigate(`/years/${yearId}/filieres/${filiere.id}/modules`);
  };

  const handleBack = () => {
    navigate('/');
  };

  const getFiliereIcon = (name) => {
    if (!name) return 'school';
    const lowerName = name.toLowerCase();
    if (lowerName.includes('dev') || lowerName.includes('digital')) return 'code';
    if (lowerName.includes('infra') || lowerName.includes('réseau') || lowerName.includes('reseau')) return 'router';
    if (lowerName.includes('gestion') || lowerName.includes('commerce')) return 'groups';
    if (lowerName.includes('électro') || lowerName.includes('electro') || lowerName.includes('mécanique') || lowerName.includes('mecanique')) return 'precision_manufacturing';
    if (lowerName.includes('bureau')) return 'computer';
    if (lowerName.includes('hôtel') || lowerName.includes('hotel') || lowerName.includes('restaur')) return 'restaurant';
    if (lowerName.includes('info') || lowerName.includes('graph')) return 'palette';
    if (lowerName.includes('compta')) return 'calculate';
    if (lowerName.includes('agri')) return 'agriculture';
    if (lowerName.includes('btp') || lowerName.includes('construction')) return 'construction';
    return 'school';
  };

  const getFiliereColors = (index) => {
    const colorSets = [
      { bg: 'bg-blue-100', darkBg: 'rgba(30, 58, 138, 0.4)', iconBg: '#3b82f6' },
      { bg: 'bg-purple-100', darkBg: 'rgba(88, 28, 135, 0.4)', iconBg: '#9333ea' },
      { bg: 'bg-green-100', darkBg: 'rgba(20, 83, 45, 0.4)', iconBg: '#22c55e' },
      { bg: 'bg-orange-100', darkBg: 'rgba(154, 52, 18, 0.4)', iconBg: '#f97316' },
      { bg: 'bg-pink-100', darkBg: 'rgba(136, 19, 55, 0.4)', iconBg: '#ec4899' },
      { bg: 'bg-yellow-100', darkBg: 'rgba(113, 63, 18, 0.4)', iconBg: '#eab308' },
      { bg: 'bg-red-100', darkBg: 'rgba(127, 29, 29, 0.4)', iconBg: '#ef4444' },
      { bg: 'bg-teal-100', darkBg: 'rgba(19, 78, 74, 0.4)', iconBg: '#14b8a6' },
      { bg: 'bg-lime-100', darkBg: 'rgba(77, 124, 15, 0.4)', iconBg: '#84cc16' },
      { bg: 'bg-amber-100', darkBg: 'rgba(120, 53, 15, 0.4)', iconBg: '#f59e0b' }
    ];
    return colorSets[index % colorSets.length];
  };

  if (loading) {
    return (
      <div className={`fredoka-font ${darkMode ? 'dark-mode courses-page' : ''}`} style={{ minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#F8F7F4' }}>
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
      <div className={`fredoka-font ${darkMode ? 'dark-mode courses-page' : ''}`} style={{ minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#F8F7F4' }}>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <span className="material-symbols-outlined text-danger mb-3" style={{ fontSize: '4rem' }}>error</span>
          <p className="text-danger">{error}</p>
          <button className="btn btn-primary" onClick={refetch}>Réessayer</button>
          <button className="btn btn-outline-secondary mt-2" onClick={handleBack}>Retour</button>
        </div>
      </div>
    );
  }

  if (filieres.length === 0) {
    return (
      <div className={`fredoka-font ${darkMode ? 'dark-mode courses-page' : ''}`} style={{ minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#F8F7F4' }}>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <span className="material-symbols-outlined text-warning mb-3" style={{ fontSize: '4rem' }}>info</span>
          <p className="text-muted">Aucune filière disponible</p>
          <button className="btn btn-primary" onClick={refetch}>Actualiser</button>
          <button className="btn btn-outline-secondary mt-2" onClick={handleBack}>Retour</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fredoka-font ${darkMode ? 'dark-mode courses-page' : ''}`} style={{ minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#F8F7F4' }}>
      <div className="p-4">
        <header className="d-flex justify-content-between align-items-center mb-5">
          <button 
            className="btn btn-link p-0 text-decoration-none" 
            style={{ color: darkMode ? '#e5e7eb' : '#1f2937' }}
            onClick={handleBack}
          >
            <span className="material-icons-outlined" style={{ fontSize: '1.875rem' }}>arrow_back</span>
          </button>
          <h1 className="mb-0 fw-semibold" style={{ fontSize: '1.25rem', color: darkMode ? '#f3f4f6' : '#111827' }}>
            Filières - {selectedYear?.name || selectedYear?.title || 'Année'}
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

        <main>
          <div className="position-relative text-center mb-5">
            <span className="material-icons-outlined decorative-icon rotate-effect text-warning" style={{ fontSize: '3.75rem', top: '-1rem', left: '1rem' }}>
              star
            </span>
            <h2 className="fw-bold mb-0" style={{ fontSize: '2.25rem', color: darkMode ? '#f3f4f6' : '#111827', lineHeight: '1.2' }}>
              Choisis ta filière
            </h2>
            <span className="material-icons-outlined decorative-icon text-info" style={{ fontSize: '3rem', bottom: '-1rem', right: '2rem' }}>
              cloud
            </span>
          </div>

          <div className="d-flex flex-column gap-4">
            {filieres.map((filiere, index) => {
              const colors = getFiliereColors(index);
              return (
                <div 
                  key={filiere.id || index} 
                  className="card course-card shadow border-0 position-relative" 
                  onClick={() => handleFiliereSelect(filiere)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="year-badge">
                    {selectedYear?.name || selectedYear?.title || 'Année'}
                  </div>
                  <div className="card-body p-4">
                    <div 
                      className={`course-icon-container mb-4 ${colors.bg}`} 
                      style={{ 
                        backgroundColor: darkMode ? colors.darkBg : undefined,
                        height: '144px',
                        borderRadius: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div 
                        className="icon-box" 
                        style={{ 
                          backgroundColor: colors.iconBg,
                          width: '64px',
                          height: '64px',
                          borderRadius: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <span className="material-icons-outlined text-white" style={{ fontSize: '2.5rem' }}>
                          {getFiliereIcon(filiere.name || filiere.title)}
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="fw-bold mb-1" style={{ fontSize: '1.25rem', color: darkMode ? '#f3f4f6' : '#111827' }}>
                        {filiere.name || filiere.title || 'Filière'}
                      </h3>
                      <p className="mb-0" style={{ color: darkMode ? '#9ca3af' : '#6b7280', fontSize: '0.95rem' }}>
                        {filiere.description || 'Formation professionnelle'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
});

FilieresPage.displayName = 'FilieresPage';

export default FilieresPage;