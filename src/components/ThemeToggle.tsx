import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 p-1 rounded-full bg-secondary border border-border w-20 h-10">
        <div className="w-4 h-4 opacity-50">
          <Sun size={16} />
        </div>
        <div className="w-4 h-4 opacity-50">
          <Moon size={16} />
        </div>
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center gap-2 p-1 rounded-full bg-secondary border border-border hover:bg-accent transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className={`p-1.5 rounded-full transition-all duration-300 ${!isDark ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground'}`}>
        <Sun size={16} />
      </div>
      <div className={`p-1.5 rounded-full transition-all duration-300 ${isDark ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground'}`}>
        <Moon size={16} />
      </div>
    </button>
  );
};

export default ThemeToggle;