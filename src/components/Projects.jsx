import ProjectCard from './ProjectCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('/projects.json')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects: ' + error));
  }, []);

  return (
    <section className="flex flex-col gap-3 lg:gap-8 lg:pb-24">
      <h2 className="text-3xl font-inter font-semibold text-dark-heading lg:text-5xl">
        Projects
      </h2>
      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:gap-30">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
