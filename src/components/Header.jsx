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
      <nav className="flex justify-between items-center">
        <a href="">Skills</a>
        <a href="">Projects</a>
        <button className="btn btn-soft font-roboto bg-white text-button-text">
          Hire Me
        </button>
      </nav>
    </header>
  );
}
