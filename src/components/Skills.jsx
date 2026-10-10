import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LangSwitchContext } from '@/contexts/LangSwitchContext';

export default function Skills() {
  const [skillsTxt, setSkills] = useState({ skills: [], title: '' });
  const { language } = useContext(LangSwitchContext);
  useEffect(() => {
    axios
      .get(`/data/${language}/skills.json`)
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => console.error('Error fetching skills: ' + error));
  }, [language]);

  return (
    <section
      id="skills"
      className="flex flex-col gap-4 pt-16 pb-8 border-b border-dark-tertiary lg:gap-8 lg:pt-31 lg:pb-15.5  "
    >
      <h2 className="text-3xl font-inter font-semibold text-[#1F2937] dark:text-dark-heading lg:text-5xl">
        {skillsTxt.title}
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        {skillsTxt.skills.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-2 lg:gap-5">
            <h3 className="text-[#4338CA] dark:text-dark-subheading text-xl font-inter font-medium lg:text-3xl">
              {skill.title}
            </h3>
            <p className="lg:w-90 font-inter text-[#6B7280] dark:text-white">
              {skill.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
