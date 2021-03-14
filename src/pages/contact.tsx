import * as React from 'react'
import cx from 'classnames'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Text } from '../components/Text'
import { Jumbotron } from '../components/Jumbotron'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from '../components/Icon'
import { TextInput } from '../components/TextInput'
import { Textarea } from '../components/Textarea'
import { Button } from '../components/Button'
export { theme } from '../../tailwind.config'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron title="Our Services" body="Wide range of cosmetic enchaments to bring out the new you" />

    <Section>
      <Container size="lg">
        <div className="flex">
          <div className="shrink-none relative bg-gold-500 w-192 p-8 overflow-hidden">
            <div className="relative z-40">
              <Text as="h4" color="gold-800" type="heading" weight="extrabold">
                Get in touch
              </Text>
              <div className="mb-4" />
              <Text as="p" size="2xl" weight="medium" color="white" leading="normal">
                Fill up the form and our team will get back to you within 24 hours
              </Text>
              <div className="mb-8" />
              <div className="flex items-center mb-4">
                <div className="mr-4 text-gold-800">
                  <FaPhoneAlt />
                </div>

                <Text color="white" weight="medium">
                  0917 562 2247
                </Text>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-4 text-gold-800">
                  <FaPhoneAlt />
                </div>

                <Text color="white" weight="medium">
                  (02) 556 4878
                </Text>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-4 text-gold-800">
                  <FaEnvelope />
                </div>

                <Text color="white" weight="medium">
                  dr.claudine@csroura.com
                </Text>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-4 text-gold-800">
                  <FaClock />
                </div>

                <Text color="white" weight="medium">
                  Strictly by appointment only
                </Text>
              </div>
              <div className="flex items-center mb-12">
                <div className="mr-4 text-gold-800">
                  <FaMapMarkerAlt />
                </div>

                <Text color="white" weight="medium">
                  5th floor, Bldg. A SM Megamall Ortigas Center
                </Text>
              </div>
              <div className="flex items-center">
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 mr-6 text-white -ml-2 rounded-full hover:text-gold-800 hover:bg-gold-100">
                  <FaFacebook />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 mr-6 text-white -ml-2 rounded-full hover:text-gold-800 hover:bg-gold-100">
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 mr-6 text-white -ml-2 rounded-full hover:text-gold-800 hover:bg-gold-100">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 right-32 z-30">
              <div
                className="h-48 w-48 border-4 border-gold-700 rounded-full transform"
                style={{ '--tw-translate-y': '50%' }}
              />
            </div>

            <div className="absolute bottom-0 right-0 z-30">
              <div
                className="h-64 w-64 bg-gold-700 rounded-full transform"
                style={{ '--tw-translate-y': '50%', '--tw-translate-x': '25%' }}
              />
            </div>
          </div>

          <div className="w-full p-8">
            <div className="flex -mx-4 mb-4">
              <div className="w-1/2 px-4">
                <TextInput label="First name" placeholder="John Doe" />
              </div>

              <div className="w-1/2 px-4">
                <TextInput label="Last name" placeholder="your@email.com" />
              </div>
            </div>

            <div className="flex -mx-4 mb-4">
              <div className="w-1/2 px-4">
                <TextInput label="Email address" placeholder="your@email.com" />
              </div>

              <div className="w-1/2 px-4">
                <TextInput label="Contact number" placeholder="09xx xxx xxxx" />
              </div>
            </div>

            <Textarea label="Your message" placeholder="09xx xxx xxxx" rows="5" />

            <div className="mb-8" />

            <div className="text-right">
              <Button>Send Message</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default ContactPage
