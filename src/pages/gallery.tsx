import React, { useState } from 'react'
import cx from 'classnames'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Text } from '../components/Text'
import { Jumbotron } from '../components/Jumbotron'
export { theme } from '../../tailwind.config'

const GalleryPage = () => {
  const [active, setActive] = useState(0)

  return (
    <Layout>
      <SEO title="Home" />

      <Jumbotron title="Client's Gallery" body="Before & after photos of our clients" />

      <Section>
        <Container size="lg">
          <div className="flex">
            <button
              onClick={() => setActive(0)}
              type="button"
              className={cx('flex items-center justify-center h-16 w-1/4 p-4 hover:bg-gold-500', {
                'bg-gold-500': active === 0,
                'bg-gold-800': active !== 0
              })}>
              <Text type="heading" color="white" size="sm">
                Advanced Body <br /> Sculpting for Men
              </Text>
            </button>

            <button
              onClick={() => setActive(1)}
              type="button"
              className={cx('flex items-center justify-center h-16 w-1/4 p-4 hover:bg-gold-500', {
                'bg-gold-500': active === 1,
                'bg-gold-800': active !== 1
              })}>
              <Text type="heading" color="white" size="sm">
                Advanced Body <br /> Sculpting for Women
              </Text>
            </button>

            <button
              onClick={() => setActive(2)}
              type="button"
              className={cx('flex items-center justify-center h-16 w-1/4 p-4 hover:bg-gold-500', {
                'bg-gold-500': active === 2,
                'bg-gold-800': active !== 2
              })}>
              <Text type="heading" color="white" size="sm">
                Advanced Autologous Fat Grafting
              </Text>
            </button>

            <button
              onClick={() => setActive(3)}
              type="button"
              className={cx('flex items-center justify-center h-16 w-1/4 p-4 hover:bg-gold-500', {
                'bg-gold-500': active === 3,
                'bg-gold-800': active !== 3
              })}>
              <Text type="heading" color="white" size="sm">
                Facial Enhancement
              </Text>
            </button>
          </div>

          <div className="mb-8" />

          <div className="text-center">
            <Text color="gold-500" size="2xl">
              We apologize for the graphic nature of the photo, most after shots are just sent to us by the clients.
            </Text>
          </div>

          <div className="mb-12" />
        </Container>
      </Section>
    </Layout>
  )
}

export default GalleryPage
