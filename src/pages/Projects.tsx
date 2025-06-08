import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from 'primereact/dialog';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'projects.list.project1.title',
    description: 'projects.list.project1.description',
    longDescription: 'projects.list.project1.longDescription',
    image: '/frankDeBank.jpg',
    technologies: ['React', 'Python', 'FastAPI'],
    demo: 'https://www.youtube.com/watch?v=zBHCjNPxpvg',
  },
  {
    title: 'projects.list.project2.title',
    description: 'projects.list.project2.description',
    longDescription: 'projects.list.project2.longDescription',
    image: '/olenseFeestenHome.png',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
    demo: 'https://www.youtube.com/watch?v=bN-z83eR6es'
  },
  {
    title: 'projects.list.project3.title',
    description: 'projects.list.project3.description',
    longDescription: 'projects.list.project3.longDescription',
    image: '/FlutterLogo.png',
    technologies: ['Unity', 'Flutter','C#'],
    demo: 'https://youtu.be/uHxjOI5cCJY'
  },
  {
    title: 'projects.list.project4.title',
    description: 'projects.list.project4.description',
    longDescription: 'projects.list.project4.longDescription',
    image: '/InternationalDays.png',
    technologies: ['PHP', 'HTML/CSS']
  },
  {
    title: 'projects.list.project5.title',
    description: 'projects.list.project5.description',
    longDescription: 'projects.list.project5.longDescription',
    image: '/qlick.jpg',
    technologies: ['Qlick',],
    demo: 'https://youtu.be/GMXKoQbwH80'
  }
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogVisible, setDialogVisible] = useState(false);

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

  const showProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setDialogVisible(true);
  };

  return (
    <div className="projects-container">
      <section className="projects-section">
        <div className="section-header">
          <h1 className="section-title">{t('projects.title')}</h1>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="projects-card fade-in"
              onClick={() => showProjectDetails(project)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={project.image}
                alt={t(project.title)}
                className="projects-image"
              />
              <h2 className="projects-title">{t(project.title)}</h2>
              <p className="projects-description">{t(project.description)}</p>
              
              <div className="projects-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="projects-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="projects-buttons">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="pi pi-youtube" />
                    {t('projects.viewVideo')}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Dialog 
        visible={dialogVisible} 
        onHide={() => setDialogVisible(false)}
        header={selectedProject ? t(selectedProject.title) : ''}
        style={{ width: '80vw', maxWidth: '1000px' }}
      >
        {selectedProject && (
          <div className="project-dialog-content">
            <div>
              <img 
                src={selectedProject.image} 
                alt={t(selectedProject.title)}
                className="project-dialog-image"
              />
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-dialog-button"
                >
                  <i className="pi pi-youtube" />
                  {t('projects.viewVideo')}
                </a>
              )}
            </div>
            <div className="project-dialog-info">
              <div 
                className="project-dialog-description"
                dangerouslySetInnerHTML={{ __html: t(selectedProject.longDescription) }}
              />
              <div className="project-dialog-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="project-dialog-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Projects; 