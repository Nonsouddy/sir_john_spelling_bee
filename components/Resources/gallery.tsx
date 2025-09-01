'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

// Simple data structure for gallery items
interface GalleryItem {
  id: string
  type: 'image' | 'video'
  url: string
  title: string
  description: string
  category: string
}

// Replace this with data from your backend API
const galleryData: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    url: '/api/placeholder/600/400',
    title: 'Spelling Bee Winners 2024',
    description: 'Amazing kids who won the competition!',
    category: 'winners'
  },
  {
    id: '2',
    type: 'image',
    url: '/api/placeholder/600/400',
    title: 'Practice Time',
    description: 'Students practicing their spelling words',
    category: 'practice'
  },
  {
    id: '3',
    type: 'image',
    url: '/api/placeholder/600/400',
    title: 'Competition Day',
    description: 'Exciting moments from the big day',
    category: 'competition'
  }
]

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'winners', name: 'Winners' },
  { id: 'practice', name: 'Practice' },
  { id: 'competition', name: 'Competition' }
]

export default function SpellingBeeGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Filter photos by category
  const filteredPhotos = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory)

  // Auto slideshow - changes photo every 4 seconds
  useEffect(() => {
    if (isAutoPlay && filteredPhotos.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredPhotos.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [isAutoPlay, filteredPhotos.length])

  // Navigation functions
  const nextPhoto = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)
  }

  // Reset to first photo when category changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [selectedCategory])

  if (filteredPhotos.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📸</div>
          <h2 className="text-2xl font-bold text-gray-700">No photos yet!</h2>
        </div>
      </div>
    )
  }

  const currentPhoto = filteredPhotos[currentSlide]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-2">
          🐝 Spelling Bee Gallery 🐝
        </h1>
        <p className="text-center text-gray-600">Check out our amazing spelling bee moments!</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white text-purple-600 hover:bg-purple-50 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Photo Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Photo Container */}
          <div className="relative">
            <div className="relative h-96 bg-gray-100">
              {currentPhoto.type === 'image' ? (
                <Image
                  src={currentPhoto.url}
                  alt={currentPhoto.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="text-white text-4xl">▶️ Video</div>
                </div>
              )}
              
              {/* Left Arrow */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="absolute bottom-4 right-4 bg-purple-500 text-white rounded-full p-2 shadow-lg hover:bg-purple-600 transition-colors"
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              {/* Photo Counter */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} of {filteredPhotos.length}
              </div>
            </div>

            {/* Dots for navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {filteredPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Photo Info */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentPhoto.title}</h3>
            <p className="text-gray-600 text-lg">{currentPhoto.description}</p>
          </div>
        </div>

        {/* Small thumbnails at bottom */}
        <div className="mt-6 flex justify-center space-x-4 overflow-x-auto pb-4">
          {filteredPhotos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setCurrentSlide(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentSlide ? 'border-purple-500' : 'border-gray-300'
              }`}
            >
              <Image
                src={photo.url}
                alt={photo.title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}