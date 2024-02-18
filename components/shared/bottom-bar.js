import Link from 'next/link'

import '@/styles/shared/bottom-bar/style.css'

export default function BottomBar() {
  return (
    <section className = 'bottom-bar-section'>
      <article className = 'bottom-bar-content'>
        <Link href = 'busqueda'>
          <img className = 'bottom-bar-icon' src = '/icons/bottom-bar/search.svg' alt = 'search' />
        </Link>
        <Link href = '/'>
          <img className = 'bottom-bar-icon' src = '/icons/bottom-bar/home.svg' alt = 'home' />
        </Link>
        <Link href = 'login'>
          <img className = 'bottom-bar-icon' src = '/icons/bottom-bar/user.svg' alt = 'user' />
        </Link>
      </article>
    </section>
  )
}