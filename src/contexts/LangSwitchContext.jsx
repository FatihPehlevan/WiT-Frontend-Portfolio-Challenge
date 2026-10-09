import { createContext, useState } from 'react';

export const LangSwitchContext = createContext();

export default function LangSwitchContextProvider({ children }) {
  const [language, setLanguage] = useState('en');
  return (
    <LangSwitchContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangSwitchContext.Provider>
  );
}
