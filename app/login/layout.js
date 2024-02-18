import '@/styles/general.css'

import Footer from '@/components/footer.js'
import BottomBar from '@/components/shared/bottom-bar'

export default function LoginLayout({ children }) {
  return (
    <html lang = 'en'>
      <head>
        <meta charet = 'utf-8' />
        <meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0' />
        <meta name = 'description' content = 'AVENTURA XPLORA'></meta>
        <title>AVENTURA XPLORA</title>
      </head>
      <body>
        {children}
        <Footer />

        <BottomBar />
      </body>
    </html>
  )
}