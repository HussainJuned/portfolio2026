import { FiMoon, FiSun } from 'react-icons/fi'
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
      className="inline-flex size-11 justify-center items-center cursor-pointer rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-background"
    >
      {isDark ? <FiSun size={18} aria-hidden="true" /> : <FiMoon size={18} aria-hidden="true" />}
    </button>
  )
}
