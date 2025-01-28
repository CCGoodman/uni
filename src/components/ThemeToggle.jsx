import React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-soft hover:shadow-lg transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-600" />
      )}
    </motion.button>
  )
}