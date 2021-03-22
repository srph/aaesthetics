import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { FaAngleDown, FaArrowRight } from '../components/Icon'
import { CallToAction } from '../components/CallToAction'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Accordion, AccordionItem, AccordionParagraph } from '../components/Accordion'
import { Jumbotron } from '../components/Jumbotron'

import asset_logoOutlineArt from '../assets/logo-outline-art.svg'

import asset_modelA1Block from '../assets/model-a-1-block.png'
import asset_modelA2Block from '../assets/model-a-2-block.png'
import asset_modelA3Column from '../assets/model-a-3-column.png'
import asset_modelB1Block from '../assets/model-b-1-block.png'
import asset_modelB2Block from '../assets/model-b-2-block.png'
import asset_modelB3Column from '../assets/model-b-3-column.png'

import asset_servicesBgLeft from '../assets/services-bg-left.svg'
import asset_servicesBgRight from '../assets/services-bg-right.svg'

import asset_servicesVaserlipo from '../assets/services-vaserlipo.svg'
import asset_servicesSkinTightening from '../assets/services-skin-tightening.svg'
import asset_servicesHourglassLipo from '../assets/services-hourglass-lipo.svg'
import asset_servicesBlepharosplasty from '../assets/services-blepharosplasty.svg'
import asset_servicesInjectable from '../assets/services-injectable.svg'
import asset_servicesRhinoplasty from '../assets/services-rhinoplasty.svg'

import asset_faqTrie1 from '../assets/faq-trie-1.jpg'
import asset_faqTrie2 from '../assets/faq-trie-2.jpg'
import asset_faqTrie3 from '../assets/faq-trie-3.jpg'

const VaserPage = () => (
  <Layout>
    <SEO title="VASER" />

    <Jumbotron title="Let's talk about vaser" body="Harness the power of ultrasound and assisted liposuction." />

    <Section>
      <Container>
        <div className="relative mb-36">
          <div className="px-6 pt-6 lg:px-12 lg:pt-12 bg-gold-500">
            <p className="text-white font-body text-2xl leading-normal text-center mx-auto lg:w-3/5">
              Vaser stands for Vibration Amplification of Sound Energy at Resonance. It is a specialised ultrasound
              technology used to break down fat cells by sending out ultrasonic frequency waves.
            </p>

            <div className="h-48 lg:h-112" />
          </div>

          <div className="-mt-36 lg:-mt-0 lg:absolute lg:top-48 inset-x-0 flex flex-col lg:flex-row items-center justify-center">
            <div className="mb-4 px-4">
              <img src={asset_faqTrie1} alt="Model" />
            </div>

            <div className="mb-4 px-4">
              <img src={asset_faqTrie2} alt="Model" />
            </div>

            <div className="px-4">
              <img src={asset_faqTrie3} alt="Model" />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion>
            <AccordionItem label="What is vaserlipo?">
              <AccordionParagraph>
                Dr. Claudine Roura offers a wide range of cosmetic upgrade options, whether it is surgical or
                non-surgical, you'll be pleased with the results. Learn more about all of our service offerings by
                clicking the button below.
              </AccordionParagraph>
            </AccordionItem>

            <AccordionItem label="What is high-definition liposculpture? ">
              <AccordionParagraph>
                Dr. Claudine Roura offers a wide range of cosmetic upgrade options, whether it is surgical or
                non-surgical, you'll be pleased with the results. Learn more about all of our service offerings by
                clicking the button below.
              </AccordionParagraph>
            </AccordionItem>

            <AccordionItem label="The first and the best in vaserlipo">
              <AccordionParagraph>
                Dr. Claudine Roura offers a wide range of cosmetic upgrade options, whether it is surgical or
                non-surgical, you'll be pleased with the results. Learn more about all of our service offerings by
                clicking the button below.
              </AccordionParagraph>
            </AccordionItem>

            <AccordionItem label="Liposuction & FAQ Grafting">
              <AccordionParagraph>
                Dr. Claudine Roura offers a wide range of cosmetic upgrade options, whether it is surgical or
                non-surgical, you'll be pleased with the results. Learn more about all of our service offerings by
                clicking the button below.
              </AccordionParagraph>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default VaserPage
