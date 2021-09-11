// External modules
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

// Internal modules
import { Dashboard } from './src/screens/Dashboard'

// Theme
import theme from './src/global/styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
