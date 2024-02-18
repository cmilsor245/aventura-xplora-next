'use client'

import '@/styles/shared/search-bar/style.css'

export default function SearchBar() {
  const HANDLE_INPUT_FOCUS = (e) => {
    e.target.select()
  }

  return (
    <section className = 'search-bar'>
      <div className = 'search-bar-wrapper'>
        <form className = 'search-bar-form' action = 'busqueda'>
          <div className = 'search-bar-input1-wrapper'>
            <input className = 'search-bar-input search-bar-input1' type = 'text' placeholder = '¿Donde quieres ir?' autoComplete = 'off' onFocus = { HANDLE_INPUT_FOCUS } />
          </div>
          <select className = 'search-bar-input search-bar-input2' defaultValue = ''>
            <option value = '' disabled>Selecciona una opción</option>
            <option value = '1'>Opción 1</option>
            <option value = '2'>Opción 2</option>
            <option value = '3'>Opción 3</option>
          </select>
          <select className = 'search-bar-input search-bar-input3' defaultValue = ''>
            <option value = '' disabled>Selecciona una opción</option>
            <option value = '1'>Opción 1</option>
            <option value = '2'>Opción 2</option>
            <option value = '3'>Opción 3</option>
          </select>
          <button className = 'search-bar-btn'>BUSCAR</button>
        </form>
      </div>
    </section>
  )
}