import React from 'react'
import { Container } from '../Container'
import { Text } from '../Text'
import asset_modelHeading from '../../assets/model-heading.png'

interface Props {
  title: string
  body: string
  thumbnail?: string
}

const Jumbotron: React.FC<Props> = ({ title, body, thumbnail = asset_modelHeading }) => {
  return (
    <Container>
      <div className="relative bg-gold-500">
        <div className="relative flex items-center z-40" style={{ height: 600 }}>
          <div className="p-16 max-w-3xl">
            <Text type="heading" as="h1" weight="extrabold" color="gold-800">
              {title}
            </Text>

            <div className="mb-4 " />

            <Text size="6xl" weight="bold" leading="tight" color="white" as="p">
              {body}
            </Text>
          </div>
        </div>

        <img src={asset_modelHeading} alt="Cover Image" className="absolute top-10 right-10 z-30" />
      </div>
    </Container>
  )
}

export { Jumbotron }
