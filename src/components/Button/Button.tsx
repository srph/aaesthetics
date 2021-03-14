import React from 'react'

interface Props {
  mode?: string
}

const Button: React.FC<Props> = ({ children, mode = 'light' }) => {
  const border = mode === 'light' ? 'black' : 'white'

  return (
    <div className={`inline-block border-2 border-${border}`}>
      <a
        href="#"
        className={`inline-flex items-center px-4 py-2 text-gold-500 font-heading text-sm font-bold uppercase border-b-8 border-gold-500 cursor-pointer`}>
        {children}
      </a>
    </div>
  )
}

export { Button }
