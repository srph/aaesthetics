/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'
import { ButtonLink } from '../ButtonLink'
import { Text } from '../Text'
import { Link } from 'gatsby'

import asset_logoFull from '../../assets/logo_full.png'

import Header from './Header'
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

  return (
    <div className="overflow-x-hidden w-full">
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

            <Link to="/services" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
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

          <div className="flex justify-between py-4 border-t border-grey-500">
            <Text size="xs" color="grey-300" weight="medium">
              &copy; Aesthetics. All rights reserved.
            </Text>

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
