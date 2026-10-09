import { createContext, useState } from 'react';

const ThemeSwitchContext = createContext();

export default function ThemeSwitchContextProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeSwitchContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
}
