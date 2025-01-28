import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function PageHead({ title, description, university }) {
  const fullTitle = title ? `${title} - University Near You` : 'University Near You - Find A University Near You'
  const fullDescription = description || 'Explore universities worldwide and find the perfect one near you. Search through our comprehensive database of universities, colleges, and educational institutions.'
  
  // Base URL for the website
  const baseUrl = 'https://benevolent-baklava-5af77b.netlify.app'
  
  // Generate a dynamic image URL (you can replace this with your own image service)
  const imageUrl = 'https://source.unsplash.com/random/1200x630?university,education'

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={university ? 'school' : 'website'} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={baseUrl + window.location.pathname} />
      <meta property="og:site_name" content="University Near You" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags for Universities */}
      {university && (
        <>
          <meta property="og:locality" content={university['state-province'] || ''} />
          <meta property="og:country-name" content={university.country} />
          {university.web_pages?.[0] && (
            <meta property="og:see_also" content={university.web_pages[0]} />
          )}
        </>
      )}
    </Helmet>
  )
}