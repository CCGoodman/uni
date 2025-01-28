import { useState, useEffect } from 'react'
import universitiesData from '../data/world_universities_and_domains.json'

export default function useUniversities() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [states, setStates] = useState([])
  
  const universitiesPerPage = 8

  useEffect(() => {
    if (selectedCountry) {
      const uniqueStates = [...new Set(universitiesData
        .filter(uni => uni.country === selectedCountry && uni['state-province'])
        .map(uni => uni['state-province']))]
      setStates(uniqueStates)
    } else {
      setStates([])
    }
    setSelectedState('')
    setCurrentPage(1)
  }, [selectedCountry])

  const filteredUniversities = universitiesData.filter(uni => {
    const nameMatch = searchTerm
      ? uni.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true
    const countryMatch = selectedCountry ? uni.country === selectedCountry : true
    const stateMatch = selectedState ? uni['state-province'] === selectedState : true
    return nameMatch && countryMatch && stateMatch
  })

  const indexOfLastUniversity = currentPage * universitiesPerPage
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage
  const currentUniversities = filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity)
  const totalPages = Math.ceil(filteredUniversities.length / universitiesPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    range.push(1);

    if (totalPages <= 1) {
      return range;
    }

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i);
      }
    }
    range.push(totalPages);

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  return {
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
  }
}