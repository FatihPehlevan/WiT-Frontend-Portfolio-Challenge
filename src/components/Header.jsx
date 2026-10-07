import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center">
        <div className="avatar avatar-placeholder">
          <div className="bg-logo text-logo-text w-14 rounded-full">
            <span className="text-xl rotate-25">A</span>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
      <nav className="flex justify-between items-center font-inter lg:justify-end lg:gap-15 lg:text-lg">
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
