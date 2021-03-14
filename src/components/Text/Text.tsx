import React from 'react'
import cx from 'classnames'

interface Props {
  color?: string
  weight?: string
  type?: string
  size?: string
  leading?: string
  as?: string
}

const Text: React.FC<Props> = ({
  children,
  color = 'black',
  weight,
  size = 'md',
  leading,
  type = 'body',
  as = 'span'
}) => {
  return React.createElement(
    as,
    {
      className: cx({
        'font-body': type === 'body',
        'font-heading uppercase': type === 'heading',
        [`text-${size}`]: size,
        [`text-${color}`]: color,
        [`font-${weight}`]: weight,
        [`leading-${leading}`]: leading
      })
    },
    children
  )
}

export { Text }
