import React from "react"
import cx from "classnames"

interface Props {
  size?: "md" | "lg"
}

const Container: React.FC<Props> = ({ children, size = "lg" }) => {
  return (
    <div
      className={cx("mx-auto px-4", {
        "max-w-screen-2xl": size === "lg",
        "max-w-screen-lg": size === "md",
      })}
    >
      {children}
    </div>
  )
}

export { Container }
