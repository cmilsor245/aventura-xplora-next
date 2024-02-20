'use client'

import React from "react"
import SliderComponent from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '@/styles/home/slider/style.css'

export default function Slider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  }

  return (
    <SliderComponent { ...settings }>
      <div>
      <img className = 'slider-img' src = '/img/slider/imagen1.webp' alt = 'imagen1' />
      </div>

      <div>
        <img className = 'slider-img' src = '/img/slider/imagen2.webp' alt = 'imagen2' />
      </div>

      <div>
        <img className = 'slider-img' src = '/img/slider/imagen3.webp' alt = 'imagen3' />
      </div>

      <div>
        <img className = 'slider-img' src = '/img/slider/imagen4.webp' alt = 'imagen4' />
      </div>

      <div>
        <img className = 'slider-img' src = '/img/slider/imagen5.webp' alt = 'imagen5' />
      </div>
    </SliderComponent>
  )
}