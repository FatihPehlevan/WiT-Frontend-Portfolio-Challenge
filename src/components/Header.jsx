import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { LangSwitchContext } from '@/contexts/LangSwitchContext';
import { useContext } from 'react';
import HireMeButton from './HireMeButton';

export default function Header() {
  const { language } = useContext(LangSwitchContext);
  return (
    <header className="w-4/5 mx-auto grid grid-cols-2 gap-y-6 lg:max-w-7xl">
      <div className="col-start-1 row-start-1 lg:row-start-2 avatar avatar-placeholder">
        <div className="text-[#7B61FF] bg-[#EEEBFF] dark:bg-logo dark:text-logo-text w-14 rounded-full">
          <span className="text-xl rotate-25 font-inter font-semibold">A</span>
        </div>
      </div>

      <div className="col-start-2 row-start-1 justify-self-end flex flex-row items-center">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

      <nav className="col-span-2 row-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-2 flex justify-between items-center font-inter lg:justify-end lg:gap-15 lg:text-lg">
        <a className="text-dark-header-titles" href="#skills">
          {language === 'en' ? 'Skills' : 'Yetenekler'}
        </a>
        <a className="text-dark-header-titles" href="#projects">
          {language === 'en' ? 'Projects' : 'Projeler'}
        </a>
        <HireMeButton />
      </nav>
    </header>
  );
}
