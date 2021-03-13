import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Container } from "../components/Container"
import { FaAngleDown } from "../components/Icon"

import asset_logoFull from "../assets/logo_full.png"
import asset_logoOutlineArt from "../assets/logo-outline-art.svg"
import asset_modelHeading from "../assets/model-heading.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div className="flex items-center justify-between mb-8">
        <a href="#">
          <img src={asset_logoFull} alt="Logo" className="block" />
        </a>

        <div className="flex items-center">
          <a
            href="#"
            className="subpixel-antialiased p-4 text-gold-500 font-heading uppercase"
          >
            Home
          </a>

          <a
            href="#"
            className="subpixel-antialiased p-4 text-gold-500 font-heading uppercase"
          >
            Vaser
          </a>
          <a
            href="#"
            className="subpixel-antialiased p-4 text-gold-500 font-heading uppercase"
          >
            Services
          </a>
          <a
            href="#"
            className="subpixel-antialiased p-4 text-gold-500 font-heading uppercase"
          >
            Gallery
          </a>

          <a
            href="#"
            className="subpixel-antialiased p-4 text-gold-500 font-heading uppercase"
          >
            Contact
          </a>

          <a
            href="#"
            className="subpixel-antialiased p-4 text-gold-500 font-heading uppercase"
          >
            +639166729133
          </a>
        </div>
      </div>
    </Container>

    <Container>
      <div className="relative">
        <div className="absolute border-8 border-gold-500 inset-0 z-50"></div>

        <img
          src={asset_logoOutlineArt}
          alt="Logo Outline Art"
          class="absolute bottom-4 right-4 z-50"
        />

        <div
          className="relative flex items-center z-40"
          style={{ height: 600 }}
        >
          <div className="p-16 max-w-xl">
            <h1 className="mb-4 font-sm font-heading font-black uppercase text-gold-800">
              Enhancing Looks <span className="text-gold-500">&amp;</span>{" "}
              Changing Lives
            </h1>

            <p className="mb-8 text-6xl font-body font-bold leading-tight text-gold-500">
              Achieve the body that you deserve.
            </p>

            <a
              href="#"
              className="flex items-center text-gold-800 font-heading text-sm font-bold uppercase"
            >
              Our Services
              <span className="ml-2">
                <FaAngleDown />
              </span>
            </a>
          </div>
        </div>

        <img
          src={asset_modelHeading}
          alt="Cover Image"
          className="absolute -top-5 -right-5 z-40"
        />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
