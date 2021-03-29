import React from 'react'
import cx from 'classnames'

interface Props {
  space?: 'narrow' | 'normal'
}

const Section: React.FC<Props> = ({ children, space = 'normal' }) => {
  return (
    <div
      className={cx({
        'py-16': space === 'narrow',
        'py-16 lg:py-36': space === 'normal'
      })}>
      {children}
    </div>
  )
}

export { Section }
