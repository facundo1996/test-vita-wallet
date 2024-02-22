import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar-container'>
      <ul className='list-navbar'>
        <li className='selected-link'>
          <Link className='link-navbar' to={'/'}>
            Inicio
          </Link>
        </li>
        <li>
          <Link className='link-navbar' to={'/'}>
            Transferir
          </Link>
        </li>
        <li>
          <Link className='link-navbar' to={'/'}>
            Recargar
          </Link>
        </li>
        <li>
          <Link className='link-navbar' to={'/'}>
            Crypto
          </Link>
        </li>
        <li>
          <Link className='link-navbar' to={'/'}>
            Perfil
          </Link>
        </li>
        <li>
          <Link className='link-navbar' to={'/'}>
            Ayuda
          </Link>
        </li>
      </ul>

      <button className='btn-logout'>Cerrar Sesión</button>

    </nav>
  )
}

export default NavBar