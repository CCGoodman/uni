import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPinIcon, AcademicCapIcon, GlobeAltIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'
import PageHead from '../components/PageHead'
import { getUniversityBySlug } from '../utils/universities'

export default function UniversityPage() {
  const { slug } = useParams()
  const university = getUniversityBySlug(slug)

  if (!university) {
    return (
      <>
        <PageHead title="University Not Found" />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              University not found
            </h1>
            <Link
              to="/"
              className="flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <Footer />
        </div>
      </>
    )
  }

  const description = `Learn more about ${university.name} located in ${university.country}${
    university['state-province'] ? `, ${university['state-province']}` : ''
  }. View university details, location, and contact information.`

  return (
    <>
      <PageHead 
        title={university.name}
        description={description}
        university={university}
      />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="bg-gradient-to-b from-primary to-primary-dark dark:from-primary-dark dark:to-primary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white mb-8"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Search
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12">
                    <AcademicCapIcon className="w-full h-full text-primary dark:text-primary-light" />
                  </div>
                  <h1 className="text-3xl font-bold ml-4 text-gray-900 dark:text-white">
                    {university.name}
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Location
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="flex-shrink-0 w-5 h-5 mr-2">
                          <GlobeAltIcon className="w-full h-full" />
                        </div>
                        <p>{university.country}</p>
                      </div>
                      {university['state-province'] && (
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="flex-shrink-0 w-5 h-5 mr-2">
                            <MapPinIcon className="w-full h-full" />
                          </div>
                          <p>{university['state-province']}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Websites
                    </h2>
                    <div className="space-y-3">
                      {university.web_pages.map((page, i) => (
                        <a
                          key={i}
                          href={page}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary block transition-colors"
                        >
                          {page}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(university.name)}`, '_blank')}
                    className="flex items-center justify-center bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white px-6 py-3 rounded-xl transition-colors"
                  >
                    <div className="flex-shrink-0 w-5 h-5 mr-2">
                      <MapPinIcon className="w-full h-full" />
                    </div>
                    Get Directions
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}