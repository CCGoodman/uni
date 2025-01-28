import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import UniversityCard from '../components/UniversityCard'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import PageHead from '../components/PageHead'
import useUniversities from '../hooks/useUniversities'

export default function HomePage() {
  const {
    searchTerm,
    setSearchTerm,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    states,
    currentPage,
    currentUniversities,
    totalPages,
    handlePageChange,
    getPaginationRange
  } = useUniversities()

  return (
    <>
      <PageHead />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary to-primary-dark dark:from-primary-dark dark:to-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <Hero />
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              states={states}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentUniversities.map((uni, idx) => (
                <UniversityCard key={uni.name} uni={uni} idx={idx} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
              getPaginationRange={getPaginationRange}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}