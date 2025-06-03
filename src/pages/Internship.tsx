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
          <p className="section-subtitle">
            {t('internship.subtitle')}
          </p>
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
          </div>

          <div className="internship-card fade-in">
            <h2 className="internship-title">{t('internship.timeline.title')}</h2>
            <div className="internship-timeline">
              {[1, 2, 3, 4, 5, 6, 7].map((week) => (
                <div key={week} className="timeline-item">
                  <div className="timeline-date">{`Week ${week}`}</div>
                  <h3 className="timeline-title">{t(`internship.timeline.week${week}.title`)}</h3>
                  <p className="timeline-description">{t(`internship.timeline.week${week}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="document-cards">
          <div className="document-card fade-in">
            <i className="pi pi-file-word" />
            <h3>{t('internship.documents.analysis.title')}</h3>
            <p>{t('internship.documents.analysis.description')}</p>
            <a href="/documents/analyse.docx" download>
              <i className="pi pi-download" />
              {t('internship.documents.download')}
            </a>
          </div>

          <div className="document-card fade-in">
            <i className="pi pi-file-pptx" />
            <h3>{t('internship.documents.projectPlan.title')}</h3>
            <p>{t('internship.documents.projectPlan.description')}</p>
            <a href="/documents/project_plan.pptx" download>
              <i className="pi pi-download" />
              Download pptx
            </a>
          </div>

          <div className="document-card fade-in">
            <i className="pi pi-file-word" />
            <h3>{t('internship.documents.implementation.title')}</h3>
            <p>{t('internship.documents.implementation.description')}</p>
            <a href="/documents/realisatie.docx" download>
              <i className="pi pi-download" />
              {t('internship.documents.download')}
            </a>
          </div>

          <div className="document-card fade-in">
            <i className="pi pi-file-word" />
            <h3>{t('internship.documents.reflection.title')}</h3>
            <p>{t('internship.documents.reflection.description')}</p>
            <a href="/documents/reflectie.docx" download>
              <i className="pi pi-download" />
              {t('internship.documents.download')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship; 