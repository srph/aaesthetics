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
      <div className="relative">
        <div className="relative bg-gold-500 z-40">
          <div className="flex items-center pb-24 lg:h-144 p-8 lg:p-16">
            <div className="max-w-3xl">
              <Text type="heading" as="h1" weight="extrabold" color="gold-800">
                {title}
              </Text>

              <div className="mb-4 " />

              <Text size="4xl" lgSize="6xl" weight="bold" leading="tight" color="white" as="p">
                {body}
              </Text>
            </div>
          </div>
        </div>

        <img src={asset_modelHeading} alt="Cover Image" className="-mt-16 lg:-mt-0 relative px-4 lg:px-0 lg:absolute lg:top-10 lg:right-10 z-50" />
      </div>
    </Container>
  )
}

export { Jumbotron }
