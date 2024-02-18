import ContactoImagen from '@/components/contacto/contacto-imagen.js'
import ContactoDivider from '@/components/contacto/contacto-divider.js'
import Cards from '@/components/contacto/cards.js'
import Formulario from '@/components/contacto/formulario.js'

export default function ContactoSection() {
  return (
    <section className = 'contacto-section'>
      <article className = 'contacto-section-contenido'>
        <ContactoImagen />
        <ContactoDivider />
        <Cards />
        <Formulario />
      </article>
    </section>
  )
}