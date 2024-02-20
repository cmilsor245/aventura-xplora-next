import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
import BottomBar from '@/components/shared/bottom-bar.js'
import CtaForm from '@/components/shared/cta_form.js'
import SideMenu from '@/components/shared/side_menu.js'
import '@/styles/general.css'

export default function GeneralLayout({ children }) {
  return (
    <html lang = 'en'>
      <head>
        <meta charSet = 'utf-8' />
        <meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0' />
        <meta name = 'description' content = 'AVENTURA XPLORA'></meta>
        <title>AVENTURA XPLORA</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <BottomBar />
        <CtaForm />
        <SideMenu />
      </body>
    </html>
  )
}