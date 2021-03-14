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
          <a href="#">
            <img src={asset_logoFull} alt="Logo" className="block" />
          </a>

          <div className="flex items-center">
            <a href="#" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
              Home
            </a>

            <a href="#" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
              Vaser
            </a>
            <a href="#" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
              Services
            </a>
            <a href="#" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
              Gallery
            </a>

            <a href="#" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
              Contact
            </a>

            <a href="#" className="subpixel-antialiased p-4 text-gold-500 font-medium font-heading uppercase">
              +639166729133
            </a>
          </div>
        </div>
      </Container>

      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export { Layout }
