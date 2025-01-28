import React from 'react'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import { countries } from '../data/countries'

export default function SearchBar({ 
  searchTerm, 
  setSearchTerm, 
  selectedCountry, 
  setSelectedCountry,
  selectedState,
  setSelectedState,
  states 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-8 md:mt-12 max-w-4xl mx-auto px-4"
    >
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search universities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary dark:focus:border-primary-light focus:ring-0 transition-colors"
            />
          </div>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary dark:focus:border-primary-light focus:ring-0 transition-colors"
          >
            <option value="">All Countries</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary dark:focus:border-primary-light focus:ring-0 transition-colors disabled:opacity-50"
            disabled={!selectedCountry}
          >
            <option value="">All States</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  )
}