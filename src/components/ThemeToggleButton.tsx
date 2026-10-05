import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

/** Icon button that switches the site between light and dark mode. */
export function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme()
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex size-11 justify-center items-center cursor-pointer rounded-lg border border-stone-200 bg-white text-neutral-900 transition-colors hover:bg-stone-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
