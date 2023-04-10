import React from 'react'
import './index.css'

export default function Header({ logo, alt, name, color }: any) {
  return (
    <div className='header'>
      <img className='' src={logo} alt={alt} />
      <div className='titulo-mega'>
        <span className='titulo' style={{ color: color }}>{name}</span>
      </div>
    </div>
  )
}