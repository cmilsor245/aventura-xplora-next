import React from 'react'
import '@/styles/shared/cta-from/form/style.css'
import '@/styles/shared/cta-from/overlay/style.css'

export default function CtaForm({ modal, setModal }) {
  const handleClose = () => setModal(false)

  const handleOverlayClick = () => {
    setModal(false)
  }

  if (!modal) {
    return null
  }

  const HANDLE_INPUT_FOCUS = (e) => {
    e.target.select()
  }

  return (
    <>
      <section className = 'cta-form-section'>
        <article className = 'cta-form-content'>
          <div className = 'cta-form-text'>
            <h2>SUSCRÍBETE PARA OBTENER LAS MEJORES OFERTAS</h2>
            <p>Recibe notificaciones para estar siempre al día con las últimas novedades de nuestra web y poder compartirlo con tus seres queridos</p>
          </div>

          <form className = 'cta-form' name = 'cta-form' method = 'post' data-netlify = 'true'>
            <div className = 'cta-input-wrapper cta-name-input'>
              <label htmlFor = 'cta-name'>Nombre<span className = 'obligatorio'>*</span></label>
              <input id = 'cta-name' className = 'cta-input' type = 'text' name = 'cta-name' placeholder = 'Introduce tu nombre...' onFocus = { HANDLE_INPUT_FOCUS } />
            </div>

            <div className = 'cta-input-wrapper cta-email-input'>
              <label htmlFor = 'cta-email'>Email<span className = 'obligatorio'>*</span></label>
              <input id = 'cta-email' className = 'cta-input' type = 'email' name = 'cta-email' placeholder = 'Introduce tu email...' onFocus = { HANDLE_INPUT_FOCUS } />
            </div>

            <div className = 'cta-input-wrapper cta-subscription--type-input'>
              <label htmlFor = 'cta-subscription--type'>Tipo de suscripción<span className = 'obligatorio'>*</span></label>
              <select id = 'cta-subscription--type' className = 'cta-input' name = 'cta-subscription--type' required defaultValue = ''>
                <option value = '' disabled>Selecciona una opción</option>
                <option value = 'daily'>Diaria</option>
                <option value = 'weekly'>Semanal</option>
                <option value = 'monthly'>Mensual</option>
              </select>
            </div>

            <div className = 'cta-buttons'>
              <input className = 'cta-submit' type = 'submit' value = 'SUSCRIBIRSE' />
              <input className = 'cta-reset' type = 'reset' value = 'CANCELAR' onClick = { handleClose } />
            </div>
          </form>
        </article>
      </section>
      <div className = 'cta-blur-overlay' onClick = { handleOverlayClick }></div>
    </>
  )
}