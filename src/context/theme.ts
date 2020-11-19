import { createContext, useCallback, useState } from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

type ThemeContext = {
  dark: boolean;
  setIsDark: (isDark: boolean) => void;
  theme: { foreground: string; background: string };
};

const defaultContext: ThemeContext = {
  dark: false,
  setIsDark: () => {}, // eslint-disable-line  @typescript-eslint/no-empty-function
  theme: themes.light,
};

export const ThemeContext = createContext<ThemeContext>(defaultContext);

export const useDark = (): ThemeContext => {
  const [dark, setDark] = useState(false);

  const setIsDark = useCallback((current: boolean): void => {
    setDark(current);
  }, []);

  const theme = dark ? themes.dark : themes.light;

  return {
    dark,
    setIsDark,
    theme,
  };
};
