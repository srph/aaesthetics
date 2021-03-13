import React from "react"

const Container: React.FC = ({ children }) => {
  return <div className="max-w-screen-2xl mx-auto px-4">{children}</div>
}

export { Container }
