'use client'

import { useEffect } from 'react'
import '@/styles/shared/cta-from/form/style.css'
import '@/styles/shared/cta-from/overlay/style.css'

export default function CtaForm() {
  useEffect(() => {
    const ACTIVATION_BUTTON = document.querySelector('.cta-btn')
    const FORM_SECTION = document.querySelector('.cta-form-section')
    const OVERLAY = document.querySelector('.cta-blur-overlay')
    const RESET_AND_CLOSE_BTN = document.querySelector('.cta-reset')
    const ACTIVATION_BUTTON_CTA_SIDE_MENU = document.querySelector('.side--menu-cta-button')

    const handleClick = () => {
      FORM_SECTION.classList.toggle('hidden')
      OVERLAY.classList.toggle('hidden')
    }

    const handleSideMenuClick = () => {
      const SIDE_MENU = document.querySelector('.side-menu')
      const SIDE_MENU_OVERLAY = document.querySelector('.side-menu-overlay')
      SIDE_MENU.classList.remove('show-menu')
      SIDE_MENU.classList.add('hide-menu')
      SIDE_MENU_OVERLAY.classList.add('hidden')
      SIDE_MENU.style.display = 'none'

      FORM_SECTION.classList.remove('hidden')
      OVERLAY.classList.remove('hidden')
    }

    ACTIVATION_BUTTON.addEventListener('click', handleClick)
    OVERLAY.addEventListener('click', handleClick)
    RESET_AND_CLOSE_BTN.addEventListener('click', handleClick)
    ACTIVATION_BUTTON_CTA_SIDE_MENU.addEventListener('click', handleSideMenuClick)
  }, [])

  const HANDLE_INPUT_FOCUS = (e) => {
    e.target.select()
  }

  return (
    <>
      <section className='cta-form-section hidden'>
        <article className='cta-form-content'>
          <div className='cta-form-text'>
            <h2>SUSCRIBETE PARA OBTENER LAS MEJORES OFERTAS</h2>
            <p>Recibe notificaciones para estar siempre al día con las últimas novedades de nuestra web y poder compartirlo con tus seres queridos</p>
          </div>

          <form className='cta-form' name='cta-form' method='post' data-netlify='true'>
            <div className='cta-input-wrapper cta-name-input'>
              <label htmlFor='cta-name'>Nombre<span className='obligatorio'>*</span></label>
              <input id='cta-name' className='cta-input' type='text' name='cta-name' required onFocus={HANDLE_INPUT_FOCUS} placeholder='Introduce tu nombre...' />
            </div>

            <div className='cta-input-wrapper cta-email-input'>
              <label htmlFor='cta-email'>Email<span className='obligatorio'>*</span></label>
              <input id='cta-email' className='cta-input' type='email' name='cta-email' required onFocus={HANDLE_INPUT_FOCUS} placeholder='Introduce tu email...' />
            </div>

            <div className='cta-input-wrapper cta-subscription--type-input'>
              <label htmlFor='cta-subscription--type'>Tipo de suscripción<span className='obligatorio'>*</span></label>
              <select id='cta-subscription--type' className='cta-input' name='cta-subscription--type' required defaultValue=''>
                <option value='' disabled>Selecciona una opción</option>
                <option value='daily'>Diaria</option>
                <option value='weekly'>Semanal</option>
                <option value='monthly'>Mensual</option>
              </select>
            </div>

            <div className='cta-buttons'>
              <input className='cta-submit' type='submit' value='SUSCRIBIRSE' />
              <input className='cta-reset' type='reset' value='CANCELAR' />
            </div>
          </form>
        </article>
      </section>
      <div className='cta-blur-overlay hidden'></div>
    </>
  )
}