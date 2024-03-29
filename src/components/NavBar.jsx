import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LogInContext } from '../contexts/userContext';

function NavBar() {
  const { setToken } = useContext(LogInContext)
  const location = useLocation();
  const navigate = useNavigate();
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
    setToken(null)
    localStorage.removeItem("token");
    navigate('/login')
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