import '@/styles/contacto/cards/style.css'

export default function Cards() {
  return (
    <section className = 'contacto-cards'>
      <article className = 'contacto-card'>
        <div className = 'contacto-card-texto'>
          <h3>Venta telefónica</h3>
          <p>Accede a los productos de nuestra web desde casa, sin tener que moverte.</p>
          <p>Contrata servicios, agenda viajes, elige destinos... todo esto y mucho más desde nuestro número de teléfono, para que te sea lo más cómodo posible.</p>
        </div>
        <button className = 'contacto-card-btn-phone'><img className = 'contacto-card-phone' src = '/icons/contact-cards/telefono.svg' alt = 'teléfono'/> 911 22 33 44</button>
      </article>

      <article className = 'contacto-card'>
        <div className = 'contacto-card-texto'>
          <h3>Agencias y cita previa</h3>
          <p>¿Necesitas información adicional sobre un viaje futuro? ¡Agenda una cita previa con nuestro equipo de soporte para ayudarte!</p>
        </div>
        <button className = 'contacto-card-btn'>Más información <img className = 'contacto-card-btn-icono' src = '/icons/contact-cards/right-chevron.svg' alt = 'flecha'/></button>
      </article>

      <article className = 'contacto-card'>
        <div className = 'contacto-card-texto'>
          <h3>Asesor personal de viajes</h3>
          <p>¡De ahora en adelante puedes optar por contar con la ayuda de un asesor personal para que tus viajes salgan perfectos!</p>
        </div>
        <button className = 'contacto-card-btn'>Más información <img className = 'contacto-card-btn-icono' src = '/icons/contact-cards/right-chevron.svg' alt = 'flecha'/></button>
      </article>
    </section>
  )
}