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
    <section className="flex flex-col gap-3">
      <h2 className="text-3xl text-dark-heading">Skills</h2>
      <div className="flex flex-col gap-2">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-2">
            <h3 className="text-dark-subheading text-xl">{skill.title}</h3>
            <p>{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
