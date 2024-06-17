import React, { useState } from 'react';
import { BsArrowDownRight } from 'react-icons/bs';

const projects = [
  { id: 1, title: "Web Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et." },
  { id: 2, title: "UI/UX Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et." },
  { id: 3, title: "Logo Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et." },
  { id: 4, title: "SEO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et." },
];

const Project = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <section id="project" className="projects-section">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-number">{`0${project.id}`}</div>
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
          <div
            className="project-icon"
            onMouseEnter={() => setHoveredIcon(project.id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <BsArrowDownRight className={hoveredIcon === project.id ? 'rotate-icon' : ''} />
          </div>
          <div className="project-line"></div>
        </div>
      ))}
    </section>
  );
};

export default Project;
