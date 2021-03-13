import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Container } from "../components/Container"
import { Section } from "../components/Section"
import { FaAngleDown, FaArrowRight } from "../components/Icon"
import { CallToAction } from "../components/CallToAction"

import asset_logoFull from "../assets/logo_full.png"
import asset_logoOutlineArt from "../assets/logo-outline-art.svg"
import asset_modelHeading from "../assets/model-heading.png"
import asset_modelA1Block from "../assets/model-a-1-block.png"
import asset_modelA2Block from "../assets/model-a-2-block.png"
import asset_modelA3Column from "../assets/model-a-3-column.png"
import asset_modelB1Block from "../assets/model-b-1-block.png"
import asset_modelB2Block from "../assets/model-b-2-block.png"
import asset_modelB3Column from "../assets/model-b-3-column.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div className="flex items-center justify-between pt-4 pb-8">
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
        <div className="absolute border-8 border-gold-500 inset-0 z-50 pointer-events-none"></div>

        <img
          src={asset_logoOutlineArt}
          alt="Logo Outline Art"
          className="absolute bottom-4 right-4 z-50"
        />

        <div
          className="relative flex items-center z-40"
          style={{ height: 600 }}
        >
          <div className="p-16 max-w-xl">
            <h1 className="mb-4 font-sm font-heading font-extrabold uppercase text-gold-800">
              Enhancing Looks <span className="text-gold-500">&amp;</span>{" "}
              Changing Lives
            </h1>

            <p className="mb-8 text-6xl font-body font-bold leading-tight text-gold-500">
              Achieve the body that you deserve.
            </p>

            <CallToAction icon={<FaAngleDown />}>Our Services</CallToAction>
          </div>
        </div>

        <img
          src={asset_modelHeading}
          alt="Cover Image"
          className="absolute -top-5 -right-5 z-40"
        />
      </div>
    </Container>

    <Container size="md">
      <Section>
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h1 className="mb-4 font-sm font-heading font-extrabold uppercase text-gold-800">
            Reveal a new you
          </h1>

          <p className="mb-8 text-4xl font-body font-medium leading-tight text-gold-500">
            With the help of a Pioneer in Vaserlipo and High Definition
            Liposucture since 2008
          </p>
        </div>

        <div className="relative flex bg-gold-500 mb-36">
          <div className="max-w-sm shrink-none px-8 pt-8 pb-24">
            <h4 className="text-gold-800 font-heading font-extrabold uppercase mb-4">
              Hair Removal
            </h4>

            <p className="mb-8 text-white leading-normal font-body font-medium text-2xl">
              In publishing and graphic design, Lorem Ipsum is a placeholder
              text commonly used to desmontrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>

            <CallToAction icon={<FaArrowRight />}>Learn More</CallToAction>
          </div>

          <div className="absolute flex top-8 -right-8">
            <div className="shrink-none mr-4">
              <img src={asset_modelA1Block} className="block mb-4" />
              <img src={asset_modelA2Block} className="block" />
            </div>

            <img src={asset_modelA3Column} className="block" />
          </div>
        </div>

        <div className="relative flex flex-row-reverse bg-green-300">
          <div className="max-w-sm shrink-none px-8 pt-8 pb-24">
            <h4 className="text-green-800 font-heading font-extrabold uppercase mb-4">
              Semi-permanent Make-up
            </h4>

            <p className="mb-8 text-green-500 leading-normal font-body font-medium text-2xl">
              In publishing and graphic design, Lorem Ipsum is a placeholder
              text commonly used to desmontrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>

            <CallToAction color="green-800" icon={<FaArrowRight />}>
              Learn More
            </CallToAction>
          </div>

          <div className="absolute flex top-8 -left-8">
            <div className="shrink-none mr-4">
              <img src={asset_modelB1Block} className="block mb-4" />
              <img src={asset_modelB2Block} className="block" />
            </div>

            <img src={asset_modelB3Column} className="block" />
          </div>
        </div>
      </Section>
    </Container>
  </Layout>
)

export default IndexPage
