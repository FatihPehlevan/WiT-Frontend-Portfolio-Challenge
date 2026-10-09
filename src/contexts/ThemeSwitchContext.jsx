import { createContext, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const ThemeSwitchContext = createContext();

export default function ThemeSwitchContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <ThemeSwitchContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
}
