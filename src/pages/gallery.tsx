import React, { useRef, useState } from 'react'
import cx from 'classnames'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Text } from '../components/Text'
import { Jumbotron } from '../components/Jumbotron'
import { FaArrowLeft, FaArrowRight, FaAngleDown } from '../components/Icon'
export { theme } from '../../tailwind.config'
import asset_customerA1 from '../assets/customer-a-1.jpg'
import asset_customerA2 from '../assets/customer-a-2.jpg'
import asset_customerA3 from '../assets/customer-a-3.jpg'

import Slick from 'react-slick'

const photosetA = [
  asset_customerA1,
  asset_customerA2,
  asset_customerA3,
  asset_customerA1,
  asset_customerA2,
  asset_customerA3,
  asset_customerA1,
  asset_customerA2,
  asset_customerA3,
  asset_customerA1,
  asset_customerA2,
  asset_customerA3,
  asset_customerA1,
  asset_customerA2,
  asset_customerA3,
  asset_customerA1,
  asset_customerA2,
  asset_customerA3
]

const photosets = [
  {
    title: 'Advanced Body Sculpting for Men',
    name: () => (
      <span>
        Advanced Body <br /> Sculpting for Men
      </span>
    ),
    photoset: photosetA
  },
  {
    title: 'Advanced Body Sculpting for Women',
    name: () => (
      <span>
        Advanced Body <br /> Sculpting for Women
      </span>
    ),
    photoset: photosetA
  },
  {
    title: 'Advanced Autologous Fat Grafting',
    name: () => <span>Advanced Autologous Fat Grafting</span>,
    photoset: photosetA
  },
  {
    title: 'Facial Enhancement',
    name: () => <span>Facial Enhancement</span>,
    photoset: photosetA
  }
]

interface ArrowProps {
  className: string
  style: object
  onClick: () => void
}

const NextArrow: React.FC<ArrowProps> = (props) => {
  return (
    <button className={`${props.className} `} style={props.style} onClick={props.onClick}>
      Next
    </button>
  )
}

const GalleryPage = () => {
  const [active, setActive] = useState(0)
  const sliderRef = useRef()
  const photoset = photosets[active]

  return (
    <Layout>
      <SEO title="Client Gallery" />

      <Jumbotron title="Client's Gallery" body="Before & after photos of our clients" />

      <Section>
        <Container size="lg">
          <div className="relative block lg:hidden">
            <select
              value={active}
              onChange={(evt) => setActive(Number(evt.currentTarget.value))}
              className="block w-full p-4 h-16 bg-gold-500 uppercase font-heading text-white text-xs appearance-none">
              {photosets.map((photoset, i) => {
                return (
                  <option value={i} key={i}>
                    {photoset.title}
                  </option>
                )
              })}
            </select>

            <div className="absolute top-0 bottom-0 right-0 flex items-center px-4 text-white text-sm">
              <FaAngleDown />
            </div>
          </div>

          <div className="hidden lg:flex">
            {photosets.map((photoset, i) => {
              const NameComponent = photoset.name

              return (
                <button
                  onClick={() => setActive(i)}
                  type="button"
                  className={cx('flex flex-shrink-none items-center justify-center h-16 w-1/4 p-4 hover:bg-gold-500', {
                    'bg-gold-500': active === i,
                    'bg-gold-800': active !== i
                  })}>
                  <Text type="heading" color="white" size="sm">
                    <NameComponent />
                  </Text>
                </button>
              )
            })}
          </div>

          <div className="mb-8" />

          <div className="text-center">
            <Text color="gold-500" size="2xl">
              We apologize for the graphic nature of the photo, most after shots are just sent to us by the clients.
            </Text>
          </div>

          <div className="mb-12" />

          <div className="relative bg-gold-500 h-80 lg:h-96 mb-32">
            <div className="absolute top-1/2 -left-8 lg:-left-32" onClick={() => sliderRef.current.slickPrev()}>
              <button className="flex items-center justify-center h-12 w-12 text-white bg-gold-500 rounded-full">
                <FaArrowLeft />
              </button>
            </div>

            <div className="absolute top-1/2 -right-8 lg:-right-32" onClick={() => sliderRef.current.slickNext()}>
              <button className="flex items-center justify-center h-12 w-12 text-white bg-gold-500 rounded-full">
                <FaArrowRight />
              </button>
            </div>

            <div className="absolute top-4 lg:top-16 left-4 right-4">
              <Slick
                ref={sliderRef}
                slidesToShow={3}
                slidesToScroll={3}
                autoplay
                autoplaySpeed={5000}
                responsive={[
                  {
                    breakpoint: 1120,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]}
                dots
                arrows={false}>
                {photoset.photoset.map((photo) => (
                  <div>
                    <img src={photo} key={photo} />
                  </div>
                ))}
              </Slick>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default GalleryPage
