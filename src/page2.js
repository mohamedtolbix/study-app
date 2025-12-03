import React, { useState } from 'react';

export default function CourseSelector() {
  const [darkMode, setDarkMode] = useState(false);

  const courses = [
    {
      title: 'Development',
      subtitle: 'Start learning',
      icon: 'code',
      bgColor: 'bg-blue-100',
      darkBgColor: 'rgba(30, 58, 138, 0.4)',
      iconBg: '#3b82f6'
    },
    {
      title: 'Management',
      subtitle: 'Continue the adventure',
      icon: 'groups',
      bgColor: 'bg-green-100',
      darkBgColor: 'rgba(20, 83, 45, 0.4)',
      iconBg: '#22c55e'
    },
    {
      title: 'Mechanical Manufacturing',
      subtitle: 'Start learning',
      icon: 'precision_manufacturing',
      bgColor: 'bg-orange-100',
      darkBgColor: 'rgba(154, 52, 18, 0.4)',
      iconBg: '#f97316'
    }
  ];

  return (
    <div className={darkMode ? 'dark-mode' : ''} style={{ minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
        
        body {
          font-family: 'Fredoka', sans-serif;
          margin: 0;
        }
        
        .material-icons-outlined {
          font-family: 'Material Icons Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
        }
        
        .bg-background-light {
          background-color: #F8F7F4;
        }
        
        .bg-background-dark {
          background-color: #121212;
        }
        
        .dark-mode {
          background-color: #121212;
          color: white;
        }
        
        .dark-mode .card {
          background-color: #1f2937 !important;
          color: white !important;
        }
        
        .dark-mode .text-dark {
          color: white !important;
        }
        
        .dark-mode .text-muted {
          color: #9ca3af !important;
        }
        
        .dark-mode .btn-link {
          color: #e5e7eb !important;
        }
        
        .course-card {
          border-radius: 1.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .course-card:hover {
          transform: translateY(-5px);
        }
        
        .icon-container {
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
        
        .bg-blue-100 {
          background-color: #dbeafe;
        }
        
        .bg-green-100 {
          background-color: #dcfce7;
        }
        
        .bg-orange-100 {
          background-color: #ffedd5;
        }
        
        .rotate-effect {
          transform: rotate(-12deg);
        }
        
        .decorative-icon {
          position: absolute;
        }
      `}</style>

      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: darkMode ? '#121212' : '#F8F7F4',
        fontFamily: 'Fredoka, sans-serif'
      }}>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <div className="p-4">
          {/* Header */}
          <header className="d-flex justify-content-between align-items-center mb-5">
            <button className="btn btn-link p-0 text-decoration-none" style={{ color: darkMode ? '#e5e7eb' : '#1f2937' }}>
              <span className="material-icons-outlined" style={{ fontSize: '1.875rem' }}>menu</span>
            </button>
            <h1 className="mb-0 fw-semibold" style={{ 
              fontSize: '1.25rem', 
              color: darkMode ? '#f3f4f6' : '#111827' 
            }}>
              Learning
            </h1>
            <button 
              className="btn btn-link p-0 text-decoration-none" 
              style={{ color: darkMode ? '#e5e7eb' : '#1f2937' }}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span className="material-icons-outlined" style={{ fontSize: '1.875rem' }}>account_circle</span>
            </button>
          </header>

          {/* Main Content */}
          <main>
            {/* Title Section with Decorative Icons */}
            <div className="position-relative text-center mb-5">
              <span 
                className="material-icons-outlined decorative-icon rotate-effect text-warning" 
                style={{ 
                  fontSize: '3.75rem', 
                  top: '-1rem', 
                  left: '1rem'
                }}
              >
                star
              </span>
              <h2 className="fw-bold mb-0" style={{ 
                fontSize: '2.25rem', 
                color: darkMode ? '#f3f4f6' : '#111827',
                lineHeight: '1.2'
              }}>
                Hello! Choose your course
              </h2>
              <span 
                className="material-icons-outlined decorative-icon text-info" 
                style={{ 
                  fontSize: '3rem', 
                  bottom: '-1rem', 
                  right: '2rem'
                }}
              >
                cloud
              </span>
            </div>

            {/* Course Cards */}
            <div className="d-flex flex-column gap-4">
              {courses.map((course, index) => (
                <div key={index} className="card course-card shadow border-0">
                  <div className="card-body p-4">
                    <div 
                      className={`icon-container mb-4 ${course.bgColor}`}
                      style={{
                        backgroundColor: darkMode ? course.darkBgColor : undefined
                      }}
                    >
                      <div 
                        className="icon-box" 
                        style={{ backgroundColor: course.iconBg }}
                      >
                        <span 
                          className="material-icons-outlined text-white" 
                          style={{ fontSize: '2.5rem' }}
                        >
                          {course.icon}
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 
                        className="fw-bold mb-1" 
                        style={{ 
                          fontSize: '1.25rem',
                          color: darkMode ? '#f3f4f6' : '#111827' 
                        }}
                      >
                        {course.title}
                      </h3>
                      <p 
                        className="mb-0" 
                        style={{ 
                          color: darkMode ? '#9ca3af' : '#6b7280',
                          fontSize: '0.95rem'
                        }}
                      >
                        {course.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}