import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

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
    </div>
  );
};

export default Home; 