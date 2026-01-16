import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useAppContext } from '../contexts/AppContext';
import { useFetch } from '../hooks/useFetch';

const YearsPage = memo(() => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode, setSelectedYear } = useAppContext();
  const { data: years, loading, error, refetch } = useFetch(() => api.getYears());

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    navigate(`/years/${year.id}/filieres`);
  };

  const getYearIcon = (index) => {
    const icons = ['looks_one', 'looks_two', 'looks_3', 'looks_4'];
    return icons[index] || 'school';
  };

  const getYearColor = (index) => {
    const colors = [
      { light: '#dbeafe', dark: 'rgba(30, 58, 138, 0.5)', icon: '#3b82f6' },
      { light: '#dcfce7', dark: 'rgba(20, 83, 45, 0.5)', icon: '#22c55e' },
      { light: '#fce7f3', dark: 'rgba(136, 19, 55, 0.5)', icon: '#ec4899' },
      { light: '#fef3c7', dark: 'rgba(113, 63, 18, 0.5)', icon: '#eab308' }
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: darkMode ? '#23220f' : '#f8f8f5' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: darkMode ? '#23220f' : '#f8f8f5' }}>
        <span className="material-symbols-outlined text-danger mb-3" style={{ fontSize: '4rem' }}>error</span>
        <p className="text-danger">{error}</p>
        <button className="btn btn-primary" onClick={refetch}>Réessayer</button>
      </div>
    );
  }

  if (years.length === 0) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: darkMode ? '#23220f' : '#f8f8f5' }}>
        <span className="material-symbols-outlined text-warning mb-3" style={{ fontSize: '4rem' }}>info</span>
        <p className="text-muted">Aucune année disponible</p>
        <button className="btn btn-primary" onClick={refetch}>Actualiser</button>
      </div>
    );
  }

  return (
    <div className="position-relative" style={{ minHeight: '100vh', backgroundColor: darkMode ? '#23220f' : '#f8f8f5' }}>
      <div className="d-flex align-items-center justify-content-between p-4">
        <div style={{ width: '48px' }}></div>
        <h2 className="mb-0 fw-bold" style={{ color: darkMode ? 'white' : '#181811', fontSize: '1.125rem' }}>
          Apprentissage
        </h2>
        <div style={{ width: '48px' }} className="d-flex justify-content-end">
          <button 
            className="btn btn-link p-0 text-decoration-none" 
            style={{ color: darkMode ? 'white' : '#181811' }}
            onClick={toggleDarkMode}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.875rem' }}>
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Icons */}
      <div className="decorative-icon" style={{ top: '80px', left: '16px', opacity: darkMode ? 0.3 : 0.5 }}>
        <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px' }}>star</span>
      </div>
      <div className="decorative-icon" style={{ top: '25%', right: '32px', opacity: darkMode ? 0.4 : 0.6 }}>
        <span className="material-symbols-outlined text-info" style={{ fontSize: '36px' }}>cloud</span>
      </div>
      <div className="decorative-icon" style={{ bottom: '25%', left: '40px', opacity: darkMode ? 0.4 : 0.6 }}>
        <span className="material-symbols-outlined text-danger" style={{ fontSize: '40px' }}>rocket_launch</span>
      </div>
      <div className="decorative-icon" style={{ bottom: '40px', right: '20px', opacity: darkMode ? 0.3 : 0.5 }}>
        <span className="material-symbols-outlined text-success" style={{ fontSize: '52px' }}>emoji_objects</span>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center p-4" style={{ minHeight: 'calc(100vh - 80px)', position: 'relative', zIndex: 10 }}>
        <h1 className="text-center fw-bold px-4 pb-4 pt-3" style={{ color: darkMode ? 'white' : '#181811', fontSize: '2rem' }}>
          Bonjour! Choisis ton niveau
        </h1>

        <div className="container" style={{ maxWidth: '448px' }}>
          <div className="row g-4">
            {years.map((year, index) => {
              const colors = getYearColor(index);
              return (
                <div className="col-12" key={year.id || index}>
                  <div 
                    className="card shadow-lg border-0" 
                    style={{ cursor: 'pointer', borderRadius: '0.5rem' }}
                    onClick={() => handleYearSelect(year)}
                  >
                    <div className="card-body p-4">
                      <div 
                        className="icon-container mb-3"
                        style={{ 
                          backgroundColor: darkMode ? colors.dark : colors.light,
                          aspectRatio: '16/9',
                          borderRadius: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <span 
                          className="material-symbols-outlined" 
                          style={{ fontSize: '80px', color: colors.icon }}
                        >
                          {getYearIcon(index)}
                        </span>
                      </div>
                      <h5 className="card-title text-center fw-bold mb-2" style={{ color: darkMode ? 'white' : '#181811' }}>
                        {year.name || year.title || `Année ${index + 1}`}
                      </h5>
                      <p className="card-text text-center text-secondary mb-0" style={{ fontSize: '0.875rem' }}>
                        {year.description || "Commencer l'aventure"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

YearsPage.displayName = 'YearsPage';

export default YearsPage;