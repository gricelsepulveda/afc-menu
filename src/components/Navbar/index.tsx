import React, {useState, useEffect} from 'react'
import './navbar.scss'

export interface NavLink {
  name?: string,
  id?: string,
  url?: string,
  active?: boolean,
  mobile?: boolean,
  level?: number,
  children?: NavLink[],
}

export interface NavbarProps {
  links?: NavLink[],
  open?: boolean
}

export default (props:NavbarProps) => {
  const { links } = props

  const renderLink = (link:NavLink, index:number) => {
    const checker = link.children && link.children?.length  > 0
    const {id, level, name, url, children } = link
    return (
      <li 
      className={`afc-nav-link ${link.active ? 'active' : ''} ${children?.length == 0 ? 'no-childs' : ''}`}
      key={`afc-link-${id}-${level}-${index}`}
      >
        <a href={url}>
          <span>{name}</span>
        </a>
        {
          checker ?
          <>
            {
              level && level == 1 ? 
                <button>+</button> 
              : null
            }
            <ul className={`afc-nav-ul level-${level ? + level + 1 : 1} `}>
              { children?.map((item:NavLink, index:number) => ( renderLink(item, index))) }
            </ul>
          </>
          : null
        }
      </li>
    )
  }

  return (
    <nav className={`afc-navbar ${props.open == true ? 'active' : ''}`}>
      <ul className='afc-nav-ul level-1'>
        {
          links ? links.map((item:NavLink, index:number) => (
            renderLink(item, index)
          ))
          : null
        }
      </ul>
    </nav>
  )
}