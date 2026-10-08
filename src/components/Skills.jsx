import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get('/skills.json')
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => console.error('Error fetching skills: ' + error));
  }, []);

  return (
    <section className="flex flex-col gap-4 pt-16 pb-8 border-b border-dark-tertiary lg:gap-8 lg:pt-31 lg:pb-15.5  ">
      <h2 className="text-3xl font-inter font-semibold text-dark-heading lg:text-5xl">
        Skills
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-2 lg:gap-5">
            <h3 className="text-dark-subheading text-xl font-inter font-medium lg:text-3xl">
              {skill.title}
            </h3>
            <p className="lg:w-90 font-inter">{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
