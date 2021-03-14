import React from 'react'
import { Link } from 'gatsby'

interface Props {
  to: string
  icon?: React.ReactElement
  color?: string
}

const CallToActionLink: React.FC<Props> = ({ to, children, color = 'gold-800', icon }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center text-${color} font-heading text-sm font-bold uppercase cursor-pointer`}>
      {children}
      <span className="ml-2">{icon}</span>
    </Link>
  )
}

export { CallToActionLink }
