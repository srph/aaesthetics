import React from 'react'

interface Props {
  icon?: React.ReactElement
  color?: string
  onClick?: () => void
}

const CallToAction: React.FC<Props> = ({ children, color = 'gold-800', icon, onClick }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center text-${color} font-heading text-sm font-bold uppercase cursor-pointer`}
      onClick={onClick}>
      {children}
      <span className="ml-2">{icon}</span>
    </button>
  )
}

export { CallToAction }
