const FORM = document.querySelector('.formulario-contacto')

FORM.addEventListener('submit', function(e) {
  e.preventDefault()

  const OVERLAY = document.createElement('div')
  OVERLAY.classList.add('formulario-contacto-overlay')
  OVERLAY.innerHTML = `
    <div class = 'gif-wrapper'>
      <iframe src = '../assets/icons/contact-form/tick.gif'></iframe>
    </div>
    <h3>¡Mensaje enviado!</h3>
    <p>Nos pondremos en contacto contigo lo antes posible</p>
  `
  document.body.appendChild(OVERLAY)

  setTimeout(function() {
    FORM.submit()
    OVERLAY.remove()
  }, 3000)
})