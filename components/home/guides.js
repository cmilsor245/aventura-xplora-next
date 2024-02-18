'use client'

import React, { useEffect } from 'react'
import '@/styles/home/guides/style.css'

export default function Guides() {
  useEffect(() => {
    const guideOverlays = document.querySelectorAll('.guide-overlay')
    const guides = document.querySelectorAll('.guide')

    guides.forEach((guide, index) => {
      guide.addEventListener('mouseenter', () => {
        guideOverlays[index].classList.remove('hidden')
      })
      guide.addEventListener('mouseleave', () => {
        guideOverlays[index].classList.add('hidden')
      })
    })

    return () => {
      guides.forEach((guide, index) => {
        guide.removeEventListener('mouseenter', () => {
          guideOverlays[index].classList.remove('hidden')
        })
        guide.removeEventListener('mouseleave', () => {
          guideOverlays[index].classList.add('hidden')
        })
      })
    }
  }, [])

  /* ------------------------------------------------------------------------ */

  return (
    <section id="guides-section" className="guides-section">
      <article className="guides-section-contents">
        <h2>Guias de viaje</h2>
        <hr />

        <div className="guides">
          <div className="guide">
            <div className="guide-overlay guide1-overlay hidden">
              <div className="guide-btn">
                <h4>Descubre</h4>
              </div>
            </div>

            <img src="/img/guides/imagen1.webp" alt="villa francesa" />
            <div className="guide-text">
              <h2>Visita las Villas Francesas</h2>
              <p>La eterna primavera</p>
            </div>
          </div>

          <div className="guide">
            <div className="guide-overlay guide2-overlay hidden">
              <div className="guide-btn">
                <h4>Descubre</h4>
              </div>
            </div>

            <img src="/img/guides/imagen2.webp" alt="costa española" />
            <div className="guide-text">
              <h2>Guía de la Costa Española</h2>
              <p>Playas, chiringuitos, puntos de interés...</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}