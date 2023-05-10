import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface NavProps {
  path: string
  children: ReactNode
}

const NavItem = ({ path, children }: NavProps) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
        }
      >
        {children}
      </NavLink>
    </li>
  )
}
export default NavItem
