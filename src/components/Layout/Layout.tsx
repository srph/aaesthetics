/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'
import { ButtonLink } from '../ButtonLink'
import { Text } from '../Text'
import { FaBars, FaTimes } from '../Icon'
import asset_logoFull from '../../assets/logo_full.png'
import './style.css'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleOpenNav = () => setIsNavOpen(true)
  const handleCloseNav = () => setIsNavOpen(false)

  return (
    <div className="overflow-x-hidden w-full">
      {isNavOpen && (
        <div className="lg:hidden fixed inset-0 z-nav-overlay">
          <div className="absolute inset-0 bg-white z-nav-mobile"></div>

          <div className="relative z-nav-content flex flex-col justify-center h-full">
            <Container size="fluid">
              <div className="flex">
                <div className="ml-auto">
                  <button
                    type="button"
                    className="flex items-center justify-center h-12 w-12 bg-gold-500 text-white rounded-full"
                    onClick={handleCloseNav}>
                    <FaTimes />
                  </button>
                </div>
              </div>

              <div className="mb-4" />

              <div className="py-8 px-4 border-8 border-gold-500">
                <Text type="heading" color="gold-800" weight="black">
                  Navigation
                </Text>

                <div className="mb-8" />

                <Link to="/" className="block py-4 w-full">
                  <Text type="heading" color="gold-500" weight="bold" size="4xl">
                    Home
                  </Text>
                </Link>

                <Link to="/about" className="block py-4 w-full">
                  <Text type="heading" color="gold-500" weight="bold" size="4xl">
                    About
                  </Text>
                </Link>

                <Link to="/vaser" className="block py-4 w-full">
                  <Text type="heading" color="gold-500" weight="bold" size="4xl">
                    Vaser
                  </Text>
                </Link>

                <Link to="/services" className="block py-4 w-full">
                  <Text type="heading" color="gold-500" weight="bold" size="4xl">
                    Services
                  </Text>
                </Link>

                <Link to="/gallery" className="block py-4 w-full">
                  <Text type="heading" color="gold-500" weight="bold" size="4xl">
                    Gallery
                  </Text>
                </Link>

                <Link to="/contact" className="block py-4 w-full">
                  <Text type="heading" color="gold-500" weight="bold" size="4xl">
                    Contact
                  </Text>
                </Link>
              </div>
            </Container>
          </div>
        </div>
      )}

      <div className="hidden lg:block">
        <Container>
          <div className="flex items-center justify-between pt-4 pb-8">
            <Link to="/">
              <img src={asset_logoFull} alt="Logo" className="block" />
            </Link>

            <div className="flex items-center">
              <Link to="/" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
                Home
              </Link>

              <Link to="/about" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
                About
              </Link>

              <Link to="/vaser" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
                Vaser
              </Link>

              <Link
                to="/services"
                className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
                Services
              </Link>

              <Link to="/gallery" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
                Gallery
              </Link>

              <Link to="/contact" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
                Contact
              </Link>

              <a
                href="tel:+639166729133"
                className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
                +639166729133
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="lg:hidden">
        <Container>
          <div className="flex items-center justify-between pt-4 pb-8">
            <img src={asset_logoFull} alt="Logo" className="block" />

            <button type="button" className="p-2 text-gold-500" onClick={handleOpenNav}>
              <FaBars />
            </button>
          </div>
        </Container>
      </div>

      {children}

      <footer className="bg-black">
        <Container>
          <div className="py-8">
            <SectionHeading
              title="We welcome your questions and comments"
              body="Do you have any questions or would you like a personal consultation?"
              mode="dark"
            />

            <div className="mb-8" />

            <div className="mx-auto max-w-2xl text-center">
              <ButtonLink to="/contact" mode="dark">
                Contact us
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between py-4 border-t border-grey-500">
            <div className="mb-2 lg:mb-0">
              <Text size="xs" color="grey-300" weight="medium">
                &copy; Aesthetics. All rights reserved.
              </Text>
            </div>

            <div className="flex">
              <a href="#" className="px-2">
                <Text size="xs" color="grey-300" weight="medium">
                  Privacy Policy
                </Text>
              </a>
              <a href="#" className="px-2">
                <Text size="xs" color="grey-300" weight="medium">
                  Terms
                </Text>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export { Layout }
