import { LangSwitchContext } from '@/contexts/LangSwitchContext';
import { useContext } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LangSwitchContext);
  return (
    <button
      className="cursor-pointer"
      onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
    >
      <span className="border-l-2 border-gray-500 pl-4 font-bold text-dark-tertiary font-inter">
        <span className="lg:hidden">{language === 'en' ? 'EN' : 'TR'}</span>
        <span className="hidden lg:inline">
          {language === 'en' ? (
            <span className="text-dark-header-aux">
              Switch to <span className="text-dark-tertiary">TURKISH</span>
            </span>
          ) : (
            <span className="text-dark-header-aux">
              {' '}
              <span className="text-dark-tertiary">İNGİLİZCE</span>'ye geç
            </span>
          )}
        </span>
      </span>
    </button>
  );
}
