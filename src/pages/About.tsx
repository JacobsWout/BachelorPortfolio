import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const skills = [
  'React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS',
  '.NET', 'Python', 'PHP',
  'Git', 'Agile', 'UI/UX'
];

const softSkills = [
  'about.skills.softSkills.enthusiastic',
  'about.skills.softSkills.driven',
  'about.skills.softSkills.teamplayer',
  'about.skills.softSkills.communicative',
  'about.skills.softSkills.problemSolver',
  'about.skills.softSkills.adaptable'
];

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="about-section">
        <div className="section-header">
          <h1 className="section-title">{t('about.title')}</h1>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="profile-section">
              <div className="about-profile-image-container">
                <img
                  src="/wout.jpg"
                  alt={t('about.profilePicture')}
                  className="profile-image"
                />
              </div>
              <h2 className="profile-name">Wout Jacobs</h2>
              <p className="profile-title">{t('about.profileTitle')}</p>
              <a
                href="/pdf-viewer-cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="about-button"
              >
                <i className="pi pi-file-pdf" />
                {t('about.viewCV')}
              </a>

              <div className="contact-info">
                <h3>{t('about.contact')}</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="pi pi-envelope" />
                    <span>jacobs.wout@outlook.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="pi pi-phone" />
                    <span>+32 468 19 40 52</span>
                  </div>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/wout-jacobs/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="pi pi-linkedin" />
                    </a>
                    <a href="https://github.com/JacobsWout" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="pi pi-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h2 className="about-title">{t('about.whoAmI')}</h2>
            <p className="about-text">{t('about.description')}</p>
            <p className="about-text">{t('about.description2')}</p>
          </div>
        </div>

        <div className="skills-section">
          <div className="section-header">
            <h2 className="section-title">{t('about.skills.title')}</h2>
            <p className="section-subtitle">{t('about.skills.description')}</p>
          </div>
          
          <div className="skills-grid">
            <div className="technical-skills">
              <h3>{t('about.skills.technicalSkills')}</h3>
              <div className="skills-tags">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="soft-skills">
              <h3>{t('about.skills.softSkills.title')}</h3>
              <div className="skills-tags">
                {softSkills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {t(skill)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 