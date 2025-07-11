import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle(): JSX.Element {
  // Initialize with light, but will be updated immediately in useEffect
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get the current theme (should already be set by BaseLayout)
    const currentTheme = (localStorage.getItem('theme') as Theme) || 'light';
    setTheme(currentTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Sync with system preference changes (optional enhancement)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-update if user hasn't manually set a preference
      // You can remove this if you want manual preference to always override
      const hasUserPreference = localStorage.getItem('theme');
      if (!hasUserPreference) {
        const newTheme: Theme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  const toggleTheme = (): void => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="h-9 w-9 rounded-lg bg-gray-100 p-2 dark:bg-gray-800"></div>;
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-brand-subtle/20 text-brand-subtle hover:bg-brand-subtle/30 dark:bg-brand-subtle/20 dark:hover:bg-brand-subtle/30 rounded-lg p-2 transition-colors duration-200 dark:text-gray-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
}
