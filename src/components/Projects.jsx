import ProjectCard from './ProjectCard';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LangSwitchContext } from '@/contexts/LangSwitchContext';

export default function Projects() {
  const [projectsTxt, setProjectsTxt] = useState({
    projects: [],
    title: '',
  });
  const { language } = useContext(LangSwitchContext);
  useEffect(() => {
    axios
      .get(`/data/${language}/projects.json`)
      .then((response) => setProjectsTxt(response.data))
      .catch((error) => console.error('Error fetching projects: ' + error));
  }, [language]);

  return (
    <section
      id="projects"
      className="flex flex-col gap-4 pt-8 pb-16 lg:gap-8 lg:pb-31 lg:pt-15.5"
    >
      <h2 className="text-3xl font-inter font-semibold text-[#1F2937] dark:text-dark-heading lg:text-5xl">
        {projectsTxt.title}
      </h2>
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-30">
        {projectsTxt.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
