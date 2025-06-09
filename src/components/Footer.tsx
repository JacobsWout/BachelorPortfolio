import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">Wout Jacobs</div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/wout-jacobs/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="pi pi-linkedin" />
          </a>
          <a href="https://github.com/JacobsWout" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="pi pi-github" />
          </a>
          <a href="mailto:jacobs.wout@outlook.com" className="footer-link">
            <i className="pi pi-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 