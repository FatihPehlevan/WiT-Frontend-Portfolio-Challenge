import { LangSwitchContext } from '@/contexts/LangSwitchContext';
import { useContext } from 'react';
import { ThemeSwitchContext } from '@/contexts/ThemeSwitchContext';

export default function Footer() {
  const { language } = useContext(LangSwitchContext);
  const { theme } = useContext(ThemeSwitchContext);
  return (
    <footer className="bg-light-footer-bg dark:bg-dark-footer-bg py-8 lg:py-21">
      <div className="flex flex-col w-4/5 mx-auto gap-4 lg:max-w-7xl lg:gap-10">
        <h3 className="text-2xl font-inter font-semibold text-[#1F2937] dark:text-dark-heading">
          {language === 'en'
            ? "Let's work together on your next product."
            : 'Sıradaki ürününüz üzerinde birlikte çalışalım.'}
        </h3>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <span className="flex gap-1">
            <span className="pt-1">👉</span>
            <a href="">
              <span className="text-xl underline underline-offset-3 font-inter font-medium text-light-footer-red dark:text-dark-tertiary">
                almilasucode@gmail.com
              </span>
            </a>
          </span>
          <div className="flex gap-8 font-inter">
            <a href="">
              <span className="text-[#0A0A14] dark:text-dark-cta-button-bg">
                {language === 'en' ? 'Personal Blog' : 'Kişisel Blog'}
              </span>
            </a>
            <a href="https://github.com/FatihPehlevan" target="_blank">
              <span className="text-[#00AB6B] dark:text-dark-footer-github">
                Github
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/fatih-pehlevan/"
              target="_blank"
            >
              <span className="text-[#0077B5] dark:text-dark-footer-linkedIn">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
