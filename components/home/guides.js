'use client'

import React, { useState } from 'react'
import '@/styles/home/guides/style.css'

export default function Guides() {
  const [guideState, setGuideState] = useState({
    guide1: false,
    guide2: false
  })

  const handleMouseEnter = (guide) => {
    setGuideState(prevState => ({ ...prevState, [guide]: true }))
  }

  const handleMouseLeave = (guide) => {
    setGuideState(prevState => ({ ...prevState, [guide]: false }))
  }

  return (
    <section id = 'guides-section' className = 'guides-section'>
      <article className = 'guides-section-contents'>
        <h2>Guias de viaje</h2>
        <hr />
        <div className = 'guides'>
          <div
            className = 'guide'
            onMouseEnter = { () => handleMouseEnter('guide1') }
            onMouseLeave = { () => handleMouseLeave('guide1') }>
            <div className = { `guide-overlay guide1-overlay ${ guideState.guide1 ? '' : 'hidden' }` }>
              <div className = 'guide-btn'>
                <h4>Descubre</h4>
              </div>
            </div>
            <img src = '/img/guides/imagen1.webp' alt = 'villa francesa' />
            <div className = 'guide-text'>
              <h2>Visita las Villas Francesas</h2>
              <p>La eterna primavera</p>
            </div>
          </div>
          <div
            className = 'guide'
            onMouseEnter = { () => handleMouseEnter('guide2') }
            onMouseLeave = { () => handleMouseLeave('guide2') }>
            <div className = { `guide-overlay guide2-overlay ${guideState.guide2 ? '' : 'hidden'}`}>
              <div className = 'guide-btn'>
                <h4>Descubre</h4>
              </div>
            </div>
            <img src = '/img/guides/imagen2.webp' alt = 'costa española' />
            <div className = 'guide-text'>
              <h2>Guía de la Costa Española</h2>
              <p>Playas, chiringuitos, puntos de interés...</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}