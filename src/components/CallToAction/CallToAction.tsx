import React from "react"

interface Props {
  icon?: React.ReactElement
  color?: string
}

const CallToAction: React.FC<Props> = ({
  children,
  color = "gold-800",
  icon,
}) => {
  return (
    <a
      href="#"
      className={`inline-flex items-center text-${color} font-heading text-sm font-bold uppercase cursor-pointer`}
    >
      {children}
      <span className="ml-2">{icon}</span>
    </a>
  )
}

export { CallToAction }
