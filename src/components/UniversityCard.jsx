import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPinIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { getUniversitySlug } from '../utils/universities'

export default function UniversityCard({ uni, idx }) {
  const slug = getUniversitySlug(uni.name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <Link to={`/${slug}`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-8 h-8">
            <AcademicCapIcon className="w-full h-full text-primary dark:text-primary-light" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-2">{uni.name}</h2>
        </div>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <div className="flex-shrink-0 w-5 h-5 mr-2">
              <GlobeAltIcon className="w-full h-full" />
            </div>
            <p>{uni.country}</p>
          </div>
          {uni['state-province'] && (
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <div className="flex-shrink-0 w-5 h-5 mr-2">
                <MapPinIcon className="w-full h-full" />
              </div>
              <p>{uni['state-province']}</p>
            </div>
          )}
        </div>
      </Link>
      <div className="space-y-3">
        {uni.web_pages.map((page, i) => (
          <a
            key={i}
            href={page}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary block truncate transition-colors"
          >
            {page}
          </a>
        ))}
        <button
          onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(uni.name)}`, '_blank')}
          className="w-full mt-4 flex items-center justify-center bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white px-4 py-2 rounded-xl transition-colors"
        >
          <div className="flex-shrink-0 w-5 h-5 mr-2">
            <MapPinIcon className="w-full h-full" />
          </div>
          Get Directions
        </button>
      </div>
    </motion.div>
  )
}