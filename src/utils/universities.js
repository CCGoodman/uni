import slugify from 'slugify'
import universitiesData from '../data/world_universities_and_domains.json'

export function getUniversitySlug(name) {
  return slugify(name, {
    lower: false,
    strict: true,
    trim: true
  })
}

export function getUniversityBySlug(slug) {
  return universitiesData.find(uni => getUniversitySlug(uni.name) === slug)
}