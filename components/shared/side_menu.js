'use client'

import {useState} from 'react'
import Link from 'next/link'
import '@/styles/shared/side-menu/menu/style.css'
import '@/styles/shared/side-menu/overlay/style.css'
import CtaForm from './cta_form'


  export default function SideMenu({ modal, setModal }) {
    const handleClose = () => setModal(false);
  
    const handleOverlayClick = () => {
      setModal(false);
    };
  
    if (!modal) {
      return null;
    }
  
 
  const [modal2, setModal2] = useState(false)

  const handleChangeModal = () => {
    setModal2(!modal2)
  }
  return (
    <>
   
      <aside >
        <div className = 'side-menu-content'>
          <div className = 'side-menu--top-options'>
            <img className = 'side-menu--top--icon' src = '/icons/side-menu/lightbulb.svg' alt = 'bombilla' />
            <img onClick={handleClose} className = 'side-menu--top--icon side--menu-close-icon' src = '/icons/side-menu/close.svg' alt = 'close' />
          </div>

          <div className='flex'>
            <div className='mb-5'>
              <Link href = 'contacto'>
                <img className = 'contact-icon-side--menu' src = '/icons/header/telefono.svg' alt = 'contacto' />
         
              </Link>
            </div>

            <div className = 'side-menu--divider'></div>

            <div className = 'side-menu--buttons--wrapper'>
              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon1.svg' alt = 'agua' />
                    <p>Costas</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon2.svg' alt = 'navidad' />
                    <p>Navidad</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon3.svg' alt = 'maleta' />
                    <p>Semana Santa</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon4.png' alt = 'palmera' />
                    <p>Islas</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon5.svg' alt = 'esquí' />
                    <p>Esquí</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon6.svg' alt = 'avión' />
                    <p>Vuelos</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon7.svg' alt = 'euro' />
                    <p>Viajes por Europa</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon8.svg' alt = 'sol' />
                    <p>Caribe</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon9.svg' alt = 'corazón' />
                    <p>Novios</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon10.svg' alt = 'coche' />
                    <p>Coche</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon11.svg' alt = 'carretera' />
                    <p>Circuitos</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon12.svg' alt = 'cama' />
                    <p>Hoteles</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon13.svg' alt = 'tren' />
                    <p>Trenes</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button'>
                <a>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon14.svg' alt = 'persona' />
                    <p>Jóvenes</p>
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>

              <div className = 'side-menu--button side--menu-cta-button'>
                <a onClick={handleChangeModal}>
                  <div className = 'side-menu--button--left'>
                    <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/icon15.svg' alt = 'cinta' />
                    <p>CTA</p>
                    {modal2 && <CtaForm modal={modal2} setModal={setModal2} />}
                  </div>
                  <img className = 'side-menu--button--icon' src = '/icons/side-menu/options/chevron.svg' alt = 'flecha' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className='cta-blur-overlay' onClick={handleOverlayClick}></div>

    </>
  )
}