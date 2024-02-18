import '@/styles/busqueda/main-content/style.css'
import JSON_DATA from '@/public/data/busqueda.json'

export default function Productos() {
  const DATA = JSON_DATA

  return (
    <section className = 'productos-busqueda'>
      <section className = 'productos-busqueda-contenido'>
        {DATA.map((item, index) => (
          <div className = 'busqueda-item' key = {index}>
            <img src = {item.img_src} alt = {item.pais} />
            <h1>{item.pais}</h1>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </section>
    </section>
  )
}