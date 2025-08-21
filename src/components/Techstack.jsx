import React from 'react'
import TechstackCard from './TechstackCard';

const Techstack = () => {
  return (
    <div>
      <section className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="tech-grid">
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            name="React"
          />
          <TechstackCard
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            name="Tailwind"
          />
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            name="MongoDB"
          />
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            name="Node JS"
          />
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            name="Next JS"
          />
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
            name="WordPress"
          />
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            name="Bootstrap"
          />
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            name="HTML"
          />
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            name="CSS"
          />
          <TechstackCard
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            name="JavaScript"
          />
        </div>
      </section>
    </div>
  );
}

export default Techstack