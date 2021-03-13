import React from "react"
import cx from "classnames"

interface Props {
  size?: "md" | "lg"
}

const Container: React.FC<Props> = ({ children, size = "xl" }) => {
  return (
    <div
      className={cx("mx-auto px-4", {
        "max-w-screen-2xl": size === "xl",
        "max-w-screen-lg": size === "lg",
        "max-w-screen-md": size === "md",
      })}
    >
      {children}
    </div>
  )
}

export { Container }
