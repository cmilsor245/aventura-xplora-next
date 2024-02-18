'use client'

import Link from 'next/link'
import '@/styles/login/main-content/style.css'

export default function LoginForm() {
  const HANDLE_INPUT_FOCUS = (e) => {
    e.target.select()
  }

  return (
    <section className = 'login-wrapper'>
      <section className = 'login-wrapper-contenido'>
        <div className = 'logo-login-wrapper'>
          <Link href = '/'>
            <img className = 'login-logo' src = '/img/logo/logo.webp' alt = 'logo' />
          </Link>
        </div>

        <h3>Inicia sesión para acceder a <span className = 'login-negrita'>nuestros productos</span></h3>

        <form className = 'formulario-login' action = '/' name = 'login-form' method = 'post' data-netlify = 'true'>
          <div className = 'input-wrapper'>
            <label htmlFor = 'usuario-input'>
              Usuario<span className = 'obligatorio'>*</span>
            </label>
            <input
              id = 'usuario-input'
              className = 'login-input'
              type = 'text'
              placeholder = 'Introduce tu usuario...'
              onFocus = { HANDLE_INPUT_FOCUS }
              autoFocus
              required
            />
          </div>

          <div className = 'input-wrapper'>
            <label htmlFor = 'password-input'>
              Contraseña<span className = 'obligatorio'>*</span>
            </label>
            <input
              id = 'password-input'
              className = 'login-input'
              type = 'password'
              placeholder = 'Introduce tu contraseña...'
              onFocus = { HANDLE_INPUT_FOCUS }
              required
            />
            <p className = 'problema-password-texto'>
              ¿Problemas con tu contraseña?
            </p>
          </div>

          <div className = 'botones-wrapper'>
            <button className = 'login-btn boton--iniciar-sesion'>
              INICIAR SESIÓN
            </button>
            <button className = 'login-btn boton--registrar' formNoValidate>
              REGISTRARSE
            </button>
          </div>
        </form>
      </section>
    </section>
  )
}