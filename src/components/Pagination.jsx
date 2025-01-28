import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import clsx from 'clsx'

export default function Pagination({ currentPage, totalPages, handlePageChange, getPaginationRange }) {
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center items-center gap-2 mt-12 px-4 flex-wrap">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary dark:hover:border-primary-light disabled:opacity-50 disabled:hover:border-gray-100 dark:disabled:hover:border-gray-700"
      >
        <FaChevronLeft className="h-5 w-5" />
      </button>
      
      {getPaginationRange().map((pageNumber, idx) => (
        pageNumber === '...' ? (
          <span key={`dots-${idx}`} className="px-4 py-2 text-gray-600 dark:text-gray-300">
            {pageNumber}
          </span>
        ) : (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={clsx(
              "px-4 py-2 rounded-lg font-medium transition-colors",
              pageNumber === currentPage
                ? "bg-primary dark:bg-primary-light text-white"
                : "bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary dark:hover:border-primary-light"
            )}
          >
            {pageNumber}
          </button>
        )
      ))}
      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary dark:hover:border-primary-light disabled:opacity-50 disabled:hover:border-gray-100 dark:disabled:hover:border-gray-700"
      >
        <FaChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}