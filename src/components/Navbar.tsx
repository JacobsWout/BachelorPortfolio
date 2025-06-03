import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i className="pi pi-code" />
          WJ
        </Link>

        <button className="navbar-mobile-button" onClick={toggleMobileMenu}>
          <i className={`pi ${isMobileMenuOpen ? 'pi-times' : 'pi-bars'}`} />
        </button>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.home')}
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.about')}
          </Link>
          <Link 
            to="/internship" 
            className={`navbar-link ${location.pathname === '/internship' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.internship')}
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.projects')}
          </Link>
          
          <div className="language-switcher">
            <button 
              className={`language-button ${i18n.language === 'nl' ? 'active' : ''}`}
              onClick={() => changeLanguage('nl')}
            >
              NL
            </button>
            <button 
              className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>

          <a 
            href="/cv.pdf" 
            download="CV_Wout_Jacobs" 
            className="cv-button"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="pi pi-download" />
            {t('navigation.cv')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 