import React, {createContext, useContext, useState} from 'react'

const ThemeContextProvider = createContext({
  isLight: true,
  toggleTheme: () => {},
})

export const ThemeProvider = (props) => {
  const [isLight, setIsLight] = useState(true)

  const toggleTheme = () => {
    setIsLight(value => {
      const updatedTheme = !value

      document.body.className = updatedTheme ? 'light' : 'dark'

      return updatedTheme
    })
  }

  const value = {
    isLight: isLight,
    toggleTheme: toggleTheme,
  }

  return (
    <ThemeContextProvider.Provider value={value}>
      {props.children}
    </ThemeContextProvider.Provider>

  )
}

export const useTheme = () => useContext(ThemeContextProvider)
