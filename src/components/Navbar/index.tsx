import React, {useState, useEffect} from 'react'

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
      className={`afc-nav-link ${link.active ? 'active' : ''}`}
      key={`afc-link-${id}-${level}-${index}`}
      >
        <a href={url}>
          {name}
        </a>
        {
          checker ? 
          <ul className='afc-nav-links'>
            { children?.map((item:NavLink, index:number) => ( renderLink(item, index))) }
          </ul>
          : null
        }
      </li>
    )
  }

  return (
    <nav className={`afc-navbar ${props.open == true ? 'active' : ''}`}>
      <ul className='afc-nav-links'>
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