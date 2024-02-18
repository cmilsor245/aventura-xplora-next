import Divider from '@/components/shared/divider.js'
import SearchBar from '@/components/shared/search-bar.js'
import Productos from '@/components/busqueda/productos.js'

export default function Busqueda() {
  return (
    <main className = 'main'>
      <SearchBar />
      <Divider h1 = 'PODRÍA INTERESARTE...' />
      <Productos />
    </main>
  )
}