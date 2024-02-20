'use client'

import '@/styles/home/slider/style.css'
import SliderComponent from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/home/slider/style.css'

export default function Slider() {
  const SETTINGS = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  }

  /* ------------------------------------------------------------------------------------------------------- */

  return (
    <SliderComponent {...SETTINGS}>
      <img className = 'slider-img' src = '/img/slider/imagen1.webp' alt = 'imagen1' />
      <img className = 'slider-img' src = '/img/slider/imagen2.webp' alt = 'imagen2' />
      <img className = 'slider-img' src = '/img/slider/imagen3.webp' alt = 'imagen3' />
      <img className = 'slider-img' src = '/img/slider/imagen4.webp' alt = 'imagen4' />
      <img className = 'slider-img' src = '/img/slider/imagen5.webp' alt = 'imagen5' />
    </SliderComponent>
  )
}