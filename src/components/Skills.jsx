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
    <section className="flex flex-col gap-3 lg:gap-8">
      <h2 className="text-3xl font-inter font-semibold text-dark-heading lg:text-5xl">
        Skills
      </h2>
      <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-2 lg:gap-5">
            <h3 className="text-dark-subheading text-xl font-inter font-medium lg:text-3xl">
              {skill.title}
            </h3>
            <p className="lg:w-90">{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
