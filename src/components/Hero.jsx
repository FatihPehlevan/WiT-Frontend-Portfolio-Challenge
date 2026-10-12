import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { LangSwitchContext } from '@/contexts/LangSwitchContext';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import HireMeButton from './HireMeButton';
import heroImage from '@/assets/hero_image.png';

export default function Hero() {
  const [heroTxt, setHeroTxt] = useState({
    title: '',
    summary: '',
    buttonText: '',
  });
  const { language } = useContext(LangSwitchContext);
  useEffect(() => {
    axios
      .get(`/data/${language}/hero.json`)
      .then((response) => {
        setHeroTxt(response.data);
      })
      .catch((error) => console.error(error));
  }, [language]);
  return (
    <main className="flex flex-col gap-6 pt-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-9 lg:pt-22">
      <div className="flex items-center gap-2 text-[#4338CA] dark:text-dark-subheading lg:col-start-1 lg:row-start-2">
        <span className="w-16 h-px bg-[#3730A3] dark:bg-dark-tertiary lg:w-20"></span>
        <span className="text-lg lg:text-xl">Almila Su</span>
      </div>
      <h1 className="text-4xl text-[#1F2937] dark:text-dark-heading font-bold tracking-wide whitespace-pre-line lg:col-start-1 lg:row-start-3 lg:text-7xl/18">
        {heroTxt.title}
      </h1>
      <img
        className="lg:col-start-2 lg:row-start-2 lg:row-span-4 lg:justify-self-end lg:w-140 lg:object-cover"
        src={heroImage}
        alt="hero_image"
      />
      <p className="lg:col-start-1 lg:row-start-4 lg:w-xl text-[#6B7280] dark:text-white ">
        {heroTxt.summary}
      </p>
      <div className="flex flex-col gap-1 lg:flex-row lg:gap-3 lg:col-start-1 lg:row-start-5">
        <HireMeButton />
        <div className="grid grid-cols-2 gap-1 lg:gap-3">
          <a href="https://github.com/FatihPehlevan" target="_blank">
            <button className="btn btn-soft border border-[#3730A3] dark:border-dark-cta-button-bg bg-white dark:bg-dark-link-bg text-[#3730A3] dark:text-dark-cta-button-bg flex w-full items-center justify-center gap-2 lg:text-lg lg:px-6 lg:py-6 lg:w-32.5">
              <FontAwesomeIcon
                className="text-[#3730A3] dark:text-dark-tertiary"
                icon={faGithub}
                aria-hidden="true"
              />
              <span>Github</span>
            </button>
          </a>

          <a href="https://www.linkedin.com/in/fatih-pehlevan/" target="_blank">
            <button className="btn btn-soft border border-[#3730A3] dark:border-dark-cta-button-bg bg-white dark:bg-dark-link-bg text-[#3730A3] dark:text-dark-cta-button-bg flex w-full items-center justify-center gap-2 lg:text-lg lg:px-8 lg:py-6 lg:w-32.5">
              <FontAwesomeIcon
                className="text-[#3730A3] dark:text-dark-tertiary"
                icon={faLinkedinIn}
                aria-hidden="true"
              />
              <span>LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
