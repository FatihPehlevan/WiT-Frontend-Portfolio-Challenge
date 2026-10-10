import { useContext, useEffect } from 'react';
import { LangSwitchContext } from '@/contexts/LangSwitchContext';
import { ThemeSwitchContext } from '@/contexts/ThemeSwitchContext';

export default function ThemeSwitcher() {
  const { language } = useContext(LangSwitchContext);
  const { theme, setTheme } = useContext(ThemeSwitchContext);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === 'dark'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex cursor-pointer items-center gap-3 pr-4"
    >
      <span
        className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 zoom-75 ${
          theme === 'dark' ? 'bg-[#3A3A3A]' : 'bg-[#4731D3]'
        }`}
      >
        <span
          className={`flex h-6 w-6 items-center justify-center transform transition-transform duration-300 ease-in-out ${
            theme === 'dark' ? 'translate-x-1' : 'translate-x-8'
          }`}
        >
          {theme === 'dark' ? (
            <svg
              className="h-6 w-6 fill-[#FFE86E] text-[#FFE86E]"
              viewBox="0 0 24 24"
            >
              <path d="M18.6 5A8.5 8.5 0 1 0 19.0 19A7 7 0 0 1 18.6 5Z" />
            </svg>
          ) : (
            <span className="h-4.5 w-4.5 rounded-full bg-[#FFE86E]" />
          )}
        </span>
      </span>

      <span className="hidden font-inter font-bold text-[#777777] dark:text-dark-theme-switch-text lg:inline select-none">
        {language === 'en'
          ? theme === 'dark'
            ? 'LIGHT MODE'
            : 'DARK MODE'
          : theme === 'dark'
            ? 'AÇIK MOD'
            : 'KOYU MOD'}
      </span>
    </button>
  );
}
