'use client'

import '@/styles/contacto/formulario/style.css'

const HANDLE_INPUT_FOCUS = (e) => {
  e.target.select()
}

export default function Formulario() {
  return (
    <section className = 'formulario-contacto-wrapper'>
      <form className = 'formulario-contacto' name = 'contact-form' action = '#' method = 'post' data-netlify = 'true'>
        <div className = 'elemento-formulario-contacto'>
          <label htmlFor = 'contact-user-name' className = 'label'>
            Nombre<span className = 'obligatorio'>*</span>
          </label>
          <input
            id = 'contact-user-name'
            name = 'contact-user-name'
            type = 'text'
            placeholder = 'Introduce tu nombre...'
            onFocus = { HANDLE_INPUT_FOCUS }
            required
          />
        </div>

        <div className = 'elemento-formulario-contacto'>
          <label htmlFor = 'contact-email' className = 'label'>
            Correo electrónico<span className = 'obligatorio'>*</span>
          </label>
          <input
            id = 'contact-email'
            name = 'contact-email'
            type = 'email'
            placeholder = 'Introduce tu correo electrónico...'
            onFocus = { HANDLE_INPUT_FOCUS }
            required
          />
        </div>

        <div className = 'elemento-formulario-contacto'>
          <label htmlFor = 'textarea' className = 'label'>
            Mensaje<span className = 'obligatorio'>*</span>
          </label>
          <textarea
            id = 'textarea'
            name = 'textarea'
            className = 'textarea'
            placeholder = '¿Qué quieres decirnos?'
            required
          ></textarea>
        </div>

        <input className = 'submit-btn-contacto' type = 'submit' value = 'ENVIAR' />
      </form>
    </section>
  )
}