import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const experiences = [
  {
    date: 'feb 2025 - mei 2025',
    title: 'about.experience.internship.title',
    description: 'about.experience.internship.description'
  },
  {
    date: '2022 - 2025',
    title: 'about.experience.education.title',
    description: 'about.experience.education.description'
  }
];

const skills = [
  'React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS',
  '.NET', 'Python', 'PHP',
  'Git', 'Agile', 'UI/UX'
];

const hobbies = [
  { name: 'about.hobbies.list.football', icon: 'pi pi-futbol' },
  { name: 'about.hobbies.list.gaming', icon: 'pi pi-gamepad' },
  { name: 'about.hobbies.list.hiking', icon: 'pi pi-map' }
];

const About = () => {
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
    <div className="about-container">
      <section className="about-section">
        <div className="section-header">
          <h1 className="section-title">{t('about.title')}</h1>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card fade-in">
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
                href="/cv.pdf" 
                download="CV_Wout_Jacobs" 
                className="cv-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-download" />
                {t('navigation.cv')}
              </a>
            </div>

            <h2 className="about-title">{t('about.whoAmI')}</h2>
            <p className="about-text">
              {t('about.description')}
            </p>
            <p className="about-text">
              {t('about.description2')}
            </p>
            
            <div className="hobbies-section">
              <h3 className="hobbies-title">{t('about.hobbies.title')}</h3>
              <div className="hobbies-list">
                {hobbies.map((hobby, index) => (
                  <span key={index} className="hobby-item">
                    <i className={`${hobby.icon} hobby-icon`} />
                    {t(hobby.name)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-card fade-in">
            <h2 className="about-title">{t('about.experience.title')}</h2>
            <div className="about-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-date">{exp.date}</div>
                  <h3 className="timeline-title">{t(exp.title)}</h3>
                  <p className="timeline-description">{t(exp.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="section-title">{t('about.skills.title')}</h2>
          <p className="skills-description">{t('about.skills.description')}</p>
          
          <div className="skills-grid">
            <div className="technical-skills">
              <h3>{t('about.skills.technicalSkills')}</h3>
              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="soft-skills">
              <h3>{t('about.skills.softSkills.title')}</h3>
              <div className="skills-tags">
                <span className="skill-tag">{t('about.skills.softSkills.enthusiastic')}</span>
                <span className="skill-tag">{t('about.skills.softSkills.driven')}</span>
                <span className="skill-tag">{t('about.skills.softSkills.teamplayer')}</span>
                <span className="skill-tag">{t('about.skills.softSkills.communicative')}</span>
                <span className="skill-tag">{t('about.skills.softSkills.problemSolver')}</span>
                <span className="skill-tag">{t('about.skills.softSkills.adaptable')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 