import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UniversityPage from './pages/UniversityPage'
import ThemeToggle from './components/ThemeToggle'
import useTheme from './hooks/useTheme'

export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<UniversityPage />} />
      </Routes>
    </div>
  )
}