import React from 'react'
import cx from 'classnames'

interface Props {
  space?: 'narrow' | 'normal'
}

const Section: React.FC<Props> = React.forwardRef(
  ({ children, space = 'normal' }, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={cx({
          'py-16': space === 'narrow',
          'py-16 lg:py-36': space === 'normal'
        })}>
        {children}
      </div>
    )
  }
)

export { Section }
