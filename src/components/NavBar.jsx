import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogInContext } from '../contexts/userContext';

function NavBar() {
  const { setAuth } = useContext(LogInContext)
  const location = useLocation();
  const path = location.pathname;
  const routes = [
    {
      path: '/',
      name: 'Inicio',
      id: 1
    },
    {
      path: '/transfers',
      name: 'Transferir',
      id: 2
    },
    {
      path: '/recharge',
      name: 'Recargar',
      id: 3
    },
    {
      path: '/crypto',
      name: 'Crypto',
      id: 4
    },
    {
      path: '/profile',
      name: 'Perfil',
      id: 5
    },
    {
      path: '/help',
      name: 'Ayuda',
      id: 5
    },
  ]

  useEffect(() => {

  })

  function logout() {
    setAuth('')
    localStorage.removeItem("token");
  }

  return (
    <nav className='navbar-container'>
      <ul className='list-navbar'>

        {
          routes.map((route, i) => (
            <li key={i} className={route.path === path ?'selected-link': ''}>
              <Link className='link-navbar' to={route.path}>
                {route.name}
              </Link>
            </li>
          ))
        }
      </ul>

      <button onClick={() => logout()} className='btn-logout'>Cerrar Sesión</button>

    </nav>
  )
}

export default NavBar