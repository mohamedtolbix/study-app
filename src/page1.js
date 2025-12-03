import React, { useState } from 'react';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''} style={{ minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body {
          font-family: 'Lexend', sans-serif;
          margin: 0;
        }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 24px;
        }
        
        .bg-primary {
          background-color: #f9f506;
        }
        
        .text-primary {
          color: #f9f506;
        }
        
        .bg-background-light {
          background-color: #f8f8f5;
        }
        
        .bg-background-dark {
          background-color: #23220f;
        }
        
        .dark-mode {
          background-color: #23220f;
          color: white;
        }
        
        .dark-mode .card {
          background-color: #262626 !important;
          color: white !important;
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
      `}</style>

      <div className="position-relative" style={{ minHeight: '100vh', backgroundColor: darkMode ? '#23220f' : '#f8f8f5' }}>
        {/* TopAppBar */}
        <div className="d-flex align-items-center justify-content-between p-4" style={{ backgroundColor: darkMode ? '#23220f' : '#f8f8f5' }}>
          <div style={{ width: '48px' }}>
            <button className="btn btn-link p-0 text-decoration-none" style={{ color: darkMode ? 'white' : '#181811' }}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <h2 className="mb-0 fw-bold" style={{ color: darkMode ? 'white' : '#181811', fontSize: '1.125rem' }}>
            Apprentissage
          </h2>
          <div style={{ width: '48px' }} className="d-flex justify-content-end">
            <button 
              className="btn btn-link p-0 text-decoration-none" 
              style={{ color: darkMode ? 'white' : '#181811' }}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
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

        {/* Main Content */}
        <div className="d-flex flex-column align-items-center justify-content-center p-4" style={{ minHeight: 'calc(100vh - 80px)', position: 'relative', zIndex: 10 }}>
          {/* Headline */}
          <h1 className="text-center fw-bold px-4 pb-4 pt-3" style={{ color: darkMode ? 'white' : '#181811', fontSize: '2rem' }}>
            Bonjour! Choisis ton niveau
          </h1>

          {/* Cards Grid */}
          <div className="container" style={{ maxWidth: '448px' }}>
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-12">
                <div className="card shadow-lg border-0" style={{ cursor: 'pointer', borderRadius: '0.5rem' }}>
                  <div className="card-body p-4">
                    <div className="icon-container bg-blue-light mb-3">
                      <span className="material-symbols-outlined" style={{ fontSize: '80px', color: darkMode ? '#93c5fd' : '#3b82f6' }}>
                        looks_one
                      </span>
                    </div>
                    <h5 className="card-title text-center fw-bold mb-2" style={{ color: darkMode ? 'white' : '#181811' }}>
                      Première Année
                    </h5>
                    <p className="card-text text-center text-secondary mb-0" style={{ fontSize: '0.875rem' }}>
                      Commencer l'aventure
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12">
                <div className="card shadow-lg border-0" style={{ cursor: 'pointer', borderRadius: '0.5rem' }}>
                  <div className="card-body p-4">
                    <div className="icon-container bg-green-light mb-3">
                      <span className="material-symbols-outlined" style={{ fontSize: '80px', color: darkMode ? '#86efac' : '#22c55e' }}>
                        looks_two
                      </span>
                    </div>
                    <h5 className="card-title text-center fw-bold mb-2" style={{ color: darkMode ? 'white' : '#181811' }}>
                      Deuxième Année
                    </h5>
                    <p className="card-text text-center text-secondary mb-0" style={{ fontSize: '0.875rem' }}>
                      Continuer l'aventure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </div>
    </div>
  );
}