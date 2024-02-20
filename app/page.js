import SliderComponent from '/components/home/slider.js'
import SearchBar from '/components/shared/search-bar.js'
import Divider from '/components/shared/divider.js'
import Content from '/components/home/content.js'

export default function Home() {
  return (
    <main className = 'main'>
      <SliderComponent />
      <SearchBar />
      <Divider h1 = 'TU VIAJE COMIENZA AQUÍ' />
      <Content />
    </main>
  )
}