import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Internship.css';

const technologies = [
  'React', '.NET', 'Azure', 'Git'
];

const Internship = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="internship-container">
      <section className="internship-section">
        <div className="section-header">
          <h1 className="section-title">{t('internship.title')}</h1>
        </div>

        <div className="internship-grid">
          <div className="internship-card fade-in">
            <h2 className="internship-title">{t('internship.about.title')}</h2>
            <p className="internship-text">
              {t('internship.about.description1')}
            </p>
            <p className="internship-text">
              {t('internship.about.description2')}
            </p>
            <p className="internship-text">
              {t('internship.about.description3')}
            </p>
            
            <div className="internship-tags">
              {technologies.map((tech, index) => (
                <span key={index} className="internship-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="internship-buttons">
              <a
                href="https://www.youtube.com/watch?v=xBTs_UC0DKQ"
                target="_blank"
                rel="noopener noreferrer"
                className="internship-button"
              >
                <i className="pi pi-youtube" />
                {t('internship.viewVideo')}
              </a>
            </div>
          </div>
        </div>

        <div className="document-cards">
          <div className="document-card fade-in">
            <i className="pi pi-file-pdf" />
            <h3>{t('internship.documents.analysis.title')}</h3>
            <p>{t('internship.documents.analysis.description')}</p>
            <a 
              href="/pdf-viewer-analyse.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="pi pi-external-link" />
              {t('internship.documents.analysis.title')}
            </a>
          </div>

          <div className="document-card fade-in">
            <i className="pi pi-file-pdf" />
            <h3>{t('internship.documents.projectPlan.title')}</h3>
            <p>{t('internship.documents.projectPlan.description')}</p>
            <a 
              href="/pdf-viewer-projectplan.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="pi pi-external-link" />
              {t('internship.documents.projectPlan.title')}
            </a>
          </div>

          <div className="document-card fade-in">
            <i className="pi pi-file-pdf" />
            <h3>{t('internship.documents.implementation.title')}</h3>
            <p>{t('internship.documents.implementation.description')}</p>
            <a 
              href="/pdf-viewer-realisatie.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="pi pi-external-link" />
              {t('internship.documents.implementation.title')}
            </a>
          </div>

          <div className="document-card fade-in">
            <i className="pi pi-file-pdf" />
            <h3>{t('internship.documents.reflection.title')}</h3>
            <p>{t('internship.documents.reflection.description')}</p>
            <a 
              href="/pdf-viewer-reflectie.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="pi pi-external-link" />
              {t('internship.documents.reflection.title')}
            </a>
          </div>

          <div className="document-card fade-in">
            <i className="pi pi-file-pdf" />
            <h3>{t('internship.documents.weeklyReport.title')}</h3>
            <p>{t('internship.documents.weeklyReport.description')}</p>
            <a 
              href="/pdf-viewer-weekly-report.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="pi pi-external-link" />
              {t('internship.documents.weeklyReport.title')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship; 