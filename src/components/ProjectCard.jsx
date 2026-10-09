import { LangSwitchContext } from '@/contexts/LangSwitchContext';
import { useContext } from 'react';

export default function ProjectCard({ project }) {
  const { img, title, summary, tags } = project;
  const { language } = useContext(LangSwitchContext);
  return (
    <div className="card w-full shadow-sm ">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body px-0 pb-0 ">
        <h2 className="card-title text-[#4338CA] dark:text-dark-project-title font-inter font-normal text-xl lg:text-3xl lg:font-medium">
          {title}
        </h2>
        <p className="font-inter text-[#6B7280] dark:text-white">{summary}</p>
        <div className="card-actions justify-start pt-1">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-outline font-inter bg-white text-[#3730A3] dark:text-logo-text dark:bg-dark-link-bg pb-0.5 leading-none"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex justify-between underline underline-offset-2 pt-1 font-inter lg:font-medium">
          <span className="text-[#3730A3] dark:text-dark-cta-button-bg">
            Github
          </span>
          <span className="text-[#3730A3] dark:text-dark-cta-button-bg">
            {language === 'en' ? 'View Site' : 'Siteyi Gör'}
          </span>
        </div>
      </div>
    </div>
  );
}
