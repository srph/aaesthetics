import React from "react"
import cx from "classnames"

interface Props {
  color?: string
  weight?: string
  type?: string
  size?: string
  leading?: string
}

const Text: React.FC<Props> = ({
  children,
  color = "black",
  weight,
  size = "md",
  leading,
  type = "body",
}) => {
  return (
    <span
      className={cx({
        "font-body": type === "body",
        "font-heading uppercase": type === "heading",
        [`text-${size}`]: size,
        [`text-${color}`]: color,
        [`font-${weight}`]: weight,
        [`font-${leading}`]: leading,
      })}
    >
      {children}
    </span>
  )
}

export { Text }
