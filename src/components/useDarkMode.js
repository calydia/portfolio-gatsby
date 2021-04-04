import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      setMode('dark');

    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    supportsDarkMode() && !localTheme ?
    setMode('dark') :
      localTheme ?
        setTheme(localTheme) :
        setMode('light');

  }, [theme]);

  return [theme, toggleTheme]
};
