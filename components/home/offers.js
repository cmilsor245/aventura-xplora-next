import '@/styles/home/offers/style.css'

export default function Offers() {
  return (
    <section id = 'offers-section' className = 'offers-section'>
      <article className = 'offers-section-contents'>
        <h1>OFERTAS DE ÚLTIMA HORA</h1>
        <hr />

        <div className = 'offers'>
          <div id = 'offer1' className = 'offer'>
            <div className = 'offer--content-over-img'>
              <div className = 'offer-icon'>
                <img src = '/icons/offers/icon1.png' alt = 'walking person icon' />
              </div>
              <div className = 'offer-price'>
                <div className = 'offer-price-texts'>
                  <p className = 'offer-price-first-text'>desde</p>
                  <p className = 'offer-price-amount'>1.850<span className = 'offer-price-currency'>€</span></p>
                  <p className = 'offer-price-duration'>9 días/6 noches</p>
                </div>

                <div className = 'offer-price-divider'></div>

                <div className = 'offer-price-info-icon'>
                  <img src = '/icons/offers/info.png' alt = 'info icon' />
                </div>
              </div>
            </div>

            <div className = 'offer--content-under-img'>
              <h2>Oferta Tailandia</h2>
            </div>
          </div>

          <div id = 'offer2' className = 'offer ending-soon-offer'>
            <div className = 'offer--content-over-img'>
              <div className = 'offer-icon'>
                <img src = '/icons/offers/icon2.png' alt = 'walking person icon' />
              </div>
              <div className = 'offer-price'>
                <div className = 'offer-price-texts'>
                  <p className = 'offer-price-first-text'>desde</p>
                  <p className = 'offer-price-amount'>1.320<span className = 'offer-price-currency'>€</span></p>
                  <p className = 'offer-price-duration'>9 días/7 noches</p>
                </div>

                <div className = 'offer-price-divider'></div>

                <div className = 'offer-price-info-icon'>
                  <img src = '/icons/offers/info.png' alt = 'info icon' />
                </div>
              </div>
            </div>

            <div className = 'offer--content-under-img'>
              <h2>Caribe al mejor precio</h2>
            </div>
          </div>

          <div id = 'offer3' className = 'offer'>
            <div className = 'offer--content-over-img'>
              <div className = 'offer-icon'>
                <img src = '/icons/offers/icon3.png' alt = 'walking person icon' />
              </div>
              <div className = 'offer-price'>
                <div className = 'offer-price-texts'>
                  <p className = 'offer-price-first-text'>desde</p>
                  <p className = 'offer-price-amount'>1.000<span className = 'offer-price-currency'>€</span></p>
                  <p className = 'offer-price-duration'>8 días/7 noches</p>
                </div>

                <div className = 'offer-price-divider'></div>

                <div className = 'offer-price-info-icon'>
                  <img src = '/icons/offers/info.png' alt = 'info icon' />
                </div>
              </div>
            </div>

            <div className = 'offer--content-under-img'>
              <h2>Mediterráneo</h2>
            </div>
          </div>

          <div id = 'offer4' className = 'offer'>
            <div className = 'offer--content-over-img'>
              <div className = 'offer-icon'>
                <img src = '/icons/offers/icon4.png' alt = 'walking person icon' />
              </div>
              <div className = 'offer-price'>
                <div className = 'offer-price-texts'>
                  <p className = 'offer-price-first-text'>desde</p>
                  <p className = 'offer-price-amount'>2.385<span className = 'offer-price-currency'>€</span></p>
                  <p className = 'offer-price-duration'>12 días/10 noches</p>
                </div>

                <div className = 'offer-price-divider'></div>

                <div className = 'offer-price-info-icon'>
                  <img src = '/icons/offers/info.png' alt = 'info icon' />
                </div>
              </div>
            </div>

            <div className = 'offer--content-under-img'>
              <h2>Conoce Tenerife</h2>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}