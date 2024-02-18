'use client'

import { useEffect, useState } from 'react'
import '@/styles/home/slider/style.css'

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0)
  const SLIDE_INTERVAL = 2500

  useEffect(() => {
    const SLIDES = document.querySelectorAll('.slider-img')
    const TOTAL_SLIDES = SLIDES.length
    const NEXT_BUTTON = document.querySelector('.slider-btn--right')
    const PREV_BUTTON = document.querySelector('.slider-btn--left')

    function setupSlides() {
      SLIDES.forEach((slide, index) => {
        slide.style.transition = 'transform 0.5s ease-in-out'
        slide.style.transform = `translateX(-${index * 100}%)`
      })
    }

    function showSlide(index) {
      const OFFSET = index * 100
      SLIDES.forEach((slide) => {
        slide.style.transform = `translateX(-${OFFSET}%)`
      })
    }

    function nextSlide() {
      setSliderIndex((prevIndex) => (prevIndex + 1) % TOTAL_SLIDES)
    }

    function prevSlide() {
      setSliderIndex((prevIndex) => (prevIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)
    }

    function autoChangeSlides() {
      nextSlide()
    }

    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') {
        nextSlide()
      } else if (event.key === 'ArrowLeft') {
        prevSlide()
      }
    }

    NEXT_BUTTON.addEventListener('click', nextSlide)
    PREV_BUTTON.addEventListener('click', prevSlide)
    document.addEventListener('keydown', handleKeyDown)

    const INTERVAL_ID = setInterval(autoChangeSlides, SLIDE_INTERVAL)

    setupSlides()
    showSlide(sliderIndex)

    return () => {
      NEXT_BUTTON.removeEventListener('click', nextSlide)
      PREV_BUTTON.removeEventListener('click', prevSlide)
      document.removeEventListener('keydown', handleKeyDown)
      clearInterval(INTERVAL_ID)
    }
  }, [sliderIndex])

  /* ------------------------------------------------------------------------------------------------------- */

  return (
    <section className = 'slider'>
      <div className = 'slider-wrapper'>
        <img className = 'slider-img' src = '/img/slider/imagen1.webp' alt = 'imagen1' />
        <img className = 'slider-img' src = '/img/slider/imagen2.webp' alt = 'imagen2' />
        <img className = 'slider-img' src = '/img/slider/imagen3.webp' alt = 'imagen3' />
        <img className = 'slider-img' src = '/img/slider/imagen4.webp' alt = 'imagen4' />
        <img className = 'slider-img' src = '/img/slider/imagen5.webp' alt = 'imagen5' />

        <button className = 'slider-btn slider-btn--left'>
          <img className = 'slider-icon' src = '/icons/slider/left-arrow.png' alt = 'left arrow' />
        </button>
        <button className = 'slider-btn slider-btn--right'>
          <img className = 'slider-icon' src = '/icons/slider/right-arrow.png' alt = 'right arrow' />
        </button>
      </div>
    </section>
  )
}