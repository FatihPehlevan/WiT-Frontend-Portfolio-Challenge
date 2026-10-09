import { createContext } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const LangSwitchContext = createContext();

export default function LangSwitchContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  return (
    <LangSwitchContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangSwitchContext.Provider>
  );
}
