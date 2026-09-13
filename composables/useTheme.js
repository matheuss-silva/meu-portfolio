const THEME_KEY = 'portfolio-theme'

export function useTheme() {
  const theme = useState('theme', () => 'dark')

  const applyTheme = (value) => {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem(THEME_KEY, value)
    }
  }

  const setTheme = (value) => {
    theme.value = value
    applyTheme(value)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const initTheme = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem(THEME_KEY)
      theme.value = stored === 'light' ? 'light' : 'dark'
      applyTheme(theme.value)
    }
  }

  return { theme, setTheme, toggleTheme, initTheme }
}
