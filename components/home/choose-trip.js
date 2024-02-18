import '@/styles/home/choose-trip/style.css'

export default function ChooseTrip() {
  return (
    <section id = 'choose-trip' className = 'choose-trip'>
      <article className = 'choose-trip-contents'>
        <h2>Elige tu viaje</h2>
        <hr />

        <div className = 'trips'>
          <div id = 'trip1' className = 'trip'>
            <div className = 'no-filter-trip-text'>  
              <h3>ESCAPADAS</h3>
              <div className = 'trip-btn'>
                <h4>Disfruta</h4>
                <img src = '/icons/choose-trip/arrow.png' alt = 'arrow' />
              </div>
            </div>
          </div>

          <div id = 'trip2' className = 'trip'>
            <div className = 'no-filter-trip-text'>  
              <h3>SEMANA SANTA</h3>
              <div className = 'trip-btn'>
                <h4>Descubre</h4>
                <img src = '/icons/choose-trip/arrow.png' alt = 'arrow' />
              </div>
            </div>
          </div>

          <div id = 'trip3' className = 'trip'>
            <div className = 'no-filter-trip-text'>  
              <h3>VIAJES POR ESPAÑA</h3>
              <div className = 'trip-btn'>
                <h4>Inspírame</h4>
                <img src = '/icons/choose-trip/arrow.png' alt = 'arrow' />
              </div>
            </div>
          </div>

          <div id = 'trip4' className = 'trip'>
            <div className = 'no-filter-trip-text'>  
              <h3>PARQUES TEMÁTICOS</h3>
              <div className = 'trip-btn'>
                <h4>Diviértete</h4>
                <img src = '/icons/choose-trip/arrow.png' alt = 'arrow' />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}