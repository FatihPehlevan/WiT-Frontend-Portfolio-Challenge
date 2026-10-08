import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="w-4/5 mx-auto grid grid-cols-2 gap-y-6 lg:max-w-7xl">
      <div className="col-start-1 row-start-1 lg:row-start-2 avatar avatar-placeholder">
        <div className="bg-logo text-logo-text w-14 rounded-full">
          <span className="text-xl rotate-25 font-inter font-semibold">A</span>
        </div>
      </div>

      <div className="col-start-2 row-start-1 justify-self-end flex flex-row items-center">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

      <nav className="col-span-2 row-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-2 flex justify-between items-center font-inter lg:justify-end lg:gap-15 lg:text-lg">
        <a className="text-dark-header-titles" href="">
          Skills
        </a>
        <a className="text-dark-header-titles" href="">
          Projects
        </a>
        <button className="btn btn-soft font-inter bg-dark-cta-button-bg text-button-text lg:text-lg lg:px-8 py-6">
          Hire Me
        </button>
      </nav>
    </header>
  );
}
