'use client'
import Link from 'next/link'
import '@/styles/shared/header/style.css'
import '@/styles/shared/nav/style.css'
import CtaForm from './shared/cta_form'
import React, { useState } from 'react'
import SideMenu from './shared/side_menu'

export default function Header() {
const [modal, setModal] = useState(false)

const handleChangeModal = () => {
  setModal(!modal)
}

const [modal2, setModal2] = useState(false)

const handleChangeModal2 = () => {
  setModal2(!modal2)

}

  return (
    <>
    <header className = 'main-header'>
      <section className = 'header'>
        <article className = 'contenido-header'>
          <div className = 'icono-menu-lateral-header icono-menu-lateral-wrapper hidden'>
            <img  className = 'icono-menu-lateral' src = '/icons/header/menu.svg' alt = 'menu lateral'
      onClick={handleChangeModal2}
            />
          </div>

          <div className = 'logo-wrapper'>
            <Link href = '/'>
              <img className = 'logo' src = '/img/logo/logo.webp' alt = 'logo' />
            </Link>
          </div>

          <div className = 'opciones-header'>
            <div className = 'opcion-header agencia'>
              <Link href = '#'>
                <img className = 'icono-header' src = '/icons/header/calendario.png' alt = 'calendario' />
                <p>Agencia y cita previa</p>
              </Link>
            </div>

            <div className = 'barra-divisoria-header'></div>

            <div className = 'opcion-header ayuda'>
              <Link href = '/contacto'>
                <img className = 'icono-header' src = '/icons/header/informacion.png' alt = 'ayuda' />
                <p>Centro de ayuda</p>
              </Link>
            </div>

            <div className = 'barra-divisoria-header'></div>

            <div className = 'opcion-header identificate'>
              <Link href = '/login'>
                <img className = 'icono-header' src = '/icons/header/usuario.png' alt = 'identificate' />
                <p>Identifícate</p>
              </Link>
            </div>

            <div className = 'barra-divisoria-header'></div>

            <div className = 'opcion-header contacto'>
              <Link href = '/contacto'>
                <img className = 'icono-header' src = '/icons/header/telefono.svg' alt = 'contacto' />
                <p>911 22 33 44</p>
              </Link>
            </div>
          </div>
        </article>
      </section>

      <nav className = 'nav'>
        <article className = 'contenido-nav'>
          <div className = 'icono-menu-lateral-wrapper'>
            <img className = 'icono-menu-lateral-nav' src = '/icons/nav/menu.svg' alt = 'menu lateral' 
            
            onClick={handleChangeModal2}
     
            />
          </div>
        

          <div className = 'opciones-nav-wrapper'>
            <ul className = 'lista-opciones-nav'>
              <li>CARIBE</li><div className = 'barra-divisoria-nav'></div>
              <li>ISLAS</li><div className = 'barra-divisoria-nav'></div>
              <li><a href = '/#choose-trip'>ELIGE TU VIAJE</a></li><div className = 'barra-divisoria-nav'></div>
              <li><a href = '/#offers-section'>OFERTAS</a></li><div className = 'barra-divisoria-nav'></div>
              <li><a href = '/#guides-section'>GUÍAS DE VIAJE</a></li><div className = 'barra-divisoria-nav'></div>
              <li>DISNEY</li><div className = 'barra-divisoria-nav'></div>
              <li className = 'cta-btn' onClick={() => handleChangeModal()}>CTA</li>
         <div>
         {modal && <CtaForm modal={modal} setModal={setModal} />}

         </div>
            </ul>
          </div>
        </article>
      </nav>
    </header>

          {modal2 && <SideMenu modal={modal2} setModal={setModal2} />}
          </>
  )
}