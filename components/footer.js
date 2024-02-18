import React from 'react'
import Link from 'next/link'
import '@/styles/shared/footer/style.css'

export default function Footer() {
  return (
    <footer className = 'main-footer'>
      <section className = 'footer'>
        <article className = 'contenido-footer'>
          <div className = 'textos-footer'>
            <div className = 'seccion-texto-footer sobre-nosotros'>
              <h3>Sobre nosotros</h3>
              <ul>
                <li>Quiénes somos</li>
                <li>Sostenibilidad</li>
                <li>Tarjeta AventuraXplora</li>
                <li>Trabaja con nosotros</li>
                <li>AventuraXplora</li>
                <li>Afiliados</li>
              </ul>
            </div>

            <div className = 'barra-divisoria-footer'></div>

            <div className = 'seccion-texto-footer planea-tu-viaje'>
              <h3>Planea tu viaje</h3>
              <ul>
                <li>Blog de viajes</li>
                <li>Guías de viaje</li>
                <li>Vente de maratón</li>
                <li>Catálogos</li>
                <li>Grupos</li>
              </ul>
            </div>

            <div className = 'barra-divisoria-footer'></div>

            <div className = 'seccion-texto-footer informacion-importante'>
              <h3>Información importante</h3>
              <ul>
                <li>Condiciones generales</li>
                <li>Política de privacidad</li>
                <li>Centro de ayuda</li>
                <li>Viajar a EE.UU.</li>
                <li>Auto check-in</li>
                <li>Política de cookies</li>
              </ul>
            </div>

            <div className = 'barra-divisoria-footer'></div>

            <div className = 'seccion-texto-footer internacional'>
              <h3>Internacional</h3>
              <div className = 'footer-internacional-columnas'>
                <div className = 'footer-internacional-columna-1'>
                  <ul>
                    <li>Portugal</li>
                    <li>Chile</li>
                    <li>Perú</li>
                    <li>Panamá</li>
                    <li>R. Dominicana</li>
                  </ul>
                </div>

                <div className = 'footer-internacional-columna-2'>
                  <ul>
                    <li>Colombia</li>
                    <li>Argentina</li>
                    <li>México</li>
                    <li>Ecuador</li>
                    <li>Uruguay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className = 'logo--redes-sociales'>
            <div className = 'barra-divisoria-footer--segundo-wrapper hidden'></div>

            <div className = 'logo-wrapper-footer'>
              <Link href = '/'>
                <img className = 'logo' src = '/img/logo/logo.webp' alt = 'logo' />
              </Link>
            </div>

            <div className = 'barra-divisoria-footer--segundo-wrapper hidden'></div>

            <div className = 'redes-sociales'>
              <h4>Síguenos en:</h4>
              <div className = 'redes-sociales-iconos'>
                <div className = 'twitter-wrapper'>
                  <img className = 'icono-social-footer' src = '/icons/socials/twitter.svg' alt = 'twitter' />
                </div>
                <div className = 'instagram-wrapper'>
                  <img className = 'icono-social-footer' src = '/icons/socials/instagram.svg' alt = 'instagram' />
                </div>
                <div className = 'youtube-wrapper'>
                  <img className = 'icono-social-footer' src = '/icons/socials/youtube.svg' alt = 'youtube' />
                </div>
                <div className = 'tiktok-wrapper'>
                  <img className = 'icono-social-footer' src = '/icons/socials/tiktok.svg' alt = 'tiktok' />
                </div>
                <div className = 'facebook-wrapper'>
                  <img className = 'icono-social-footer' src = '/icons/socials/facebook.svg' alt = 'facebook' />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </footer>
  )
}