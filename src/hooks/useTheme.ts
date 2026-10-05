import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

/**
 * Manages light/dark mode for the whole site.
 *
 * Tailwind's `dark:` classes are enabled by a `dark` class on <html>
 * (see the custom variant in index.css), so this hook toggles that class
 * and remembers the visitor's choice.
 */

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    // A saved choice wins; otherwise follow the OS setting on first visit.
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return {isDark, toggleTheme}
}