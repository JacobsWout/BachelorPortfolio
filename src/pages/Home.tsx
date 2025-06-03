import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const skills = [
  'React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS',
  '.NET', 'Python', 'PHP',
  'Git', 'Agile', 'UI/UX'
];

const Home = () => {
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
    <div className="home-container">
      <div className="home-section">
        {/* Hero Section */}
        <div className="home-grid">
          <div className="fade-in">
            <h1 className="home-title">
              {t('home.intro')}
            </h1>
            <p className="home-subtitle">
              {t('home.subtitle')}
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-[#ef735e]/20 to-[#f5b243]/20 rounded-full">
                  <i className="pi pi-graduation-cap text-2xl text-[#ef735e]" />
                </div>
                <h3 className="text-xl text-[#ef735e] font-semibold">
                  {t('home.graduation')}
                </h3>
              </div>
              
              <p className="text-lg text-[#64748b] max-w-2xl">
                {t('home.graduationDescription')}
              </p>
            </div>
          </div>
          
          <div className="profile-section fade-in">
            <div className="profile-image-container">
              <img
                src="/wout.jpg"
                alt={t('home.profilePicture')}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="home-section">
          <div className="section-header">
            <h2 className="section-title">{t('about.skills.title')}</h2>
            <p className="section-subtitle">
              {t('about.skills.description')}
            </p>
          </div>
          
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

      {/* Projects Preview Section */}
      
    </div>
  );
};

export default Home; 