import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        Find A University Near You
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-white/80"
      >
        Explore universities worldwide and find the perfect one near you
      </motion.p>
    </div>
  )
}