import React from "react"

interface Props {
  mode?: string
}

const Button: React.FC<Props> = ({ children, mode = "light" }) => {
  const border = mode === "light" ? "black" : "white"

  const color = mode === "light" ? "gold-800" : "gold-500"

  return (
    <div className={`inline-block border-2 border-${border}`}>
      <a
        href="#"
        className={`inline-flex items-center px-4 py-2 text-${color} font-heading text-sm font-bold uppercase border-b-8 border-gold-500 cursor-pointer`}
      >
        {children}
      </a>
    </div>
  )
}

export { Button }
