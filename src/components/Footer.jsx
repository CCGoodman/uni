import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <p className="text-gray-600 dark:text-gray-300">
          Powered by{' '}
          <a 
            href="https://github.com/Hipo/university-domains-list" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary font-medium"
          >
            Hipo University Database
          </a>
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Built by{' '}
          <a 
            href="https://coodman.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary font-medium"
          >
            Coodman
          </a>
          {' '}🗿
        </p>
      </div>
    </footer>
  )
}