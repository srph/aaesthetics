import React from 'react'
import cx from 'classnames'
import { Text } from '../Text'

interface Props {
  title: string
  body?: string
  bodyColor?: string
  bodyWeight?: string
  mode?: 'light' | 'dark'
}

const SectionHeading: React.FC<Props> = ({ title, body, bodyWeight = 'medium', bodyColor = '', mode = 'light' }) => {
  const titleColor = mode === 'light' ? 'gold-800' : 'gold-500'

  const usedBodyColor = bodyColor || (mode === 'light' ? 'gold-500' : 'white')

  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1>
        <Text size="sm" type="heading" weight="extrabold" color={titleColor}>
          {title}
        </Text>
      </h1>

      {Boolean(body) && (
        <>
          <div className="mb-4" />

          <Text size="4xl" weight={bodyWeight} color={usedBodyColor} leading="tight">
            {body}
          </Text>
        </>
      )}
    </div>
  )
}

export { SectionHeading }
