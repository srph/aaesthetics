import React from 'react'

interface Props {
  type?: 'button' | 'submit'
  disabled?: boolean
  mode?: string
}

const Button: React.FC<Props> = ({ children, type = 'submit', disabled = false, mode = 'light' }) => {
  const border = mode === 'light' ? 'black' : 'white'

  return (
    <div className={`inline-block border-2 border-${border}`}>
      <button
        type={type}
        disabled={disabled}
        className={`inline-flex items-center px-4 py-2 text-gold-500 font-heading text-sm font-bold uppercase border-b-8 border-gold-500 cursor-pointer`}>
        {children}
      </button>
    </div>
  )
}

export { Button }
