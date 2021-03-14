import React from 'react'
import { Link } from 'gatsby'

interface Props {
  to: string
  mode?: string
}

const ButtonLink: React.FC<Props> = ({ children, mode = 'light', to }) => {
  const border = mode === 'light' ? 'black' : 'white'

  return (
    <div className={`inline-block border-2 border-${border}`}>
      <Link
        to={to}
        className={`inline-flex items-center px-4 py-2 text-gold-500 font-heading text-sm font-bold uppercase border-b-8 border-gold-500 cursor-pointer`}>
        {children}
      </Link>
    </div>
  )
}

export { ButtonLink }
