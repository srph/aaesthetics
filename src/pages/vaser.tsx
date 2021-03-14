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

const services = [
  {
    name: 'VASERLIPO & HIGH DEFINITION LIPOSCULPTURE',
    description:
      'Our primary specialty is body sculpting using VASER. This advanced technology combined with a state of the art technique gives superior results.',
    icon: asset_servicesVaserlipo
  },
  {
    name: 'SKIN TIGHTENING & AURALYFT',
    description:
      'We use Thermitight as a non-surgical option for the lower face and neck. For the upper face, we use Thermismooth.',
    icon: asset_servicesSkinTightening
  },
  {
    name: 'HOURGLASS LIPO & TUMMY TUCK',
    description:
      'Our tummy tuck is the modification of the high-def technique that removes excess skin and repairs diastasis of the rectus muscles. Hourglass technique enhances the curves by using fat grafting.',
    icon: asset_servicesHourglassLipo
  },
  {
    name: 'BLEPHAROPLASTY',
    description:
      'The eyes have it. As we age, the eyelids droop, we develop eyebags, deep creases and the brow droops as well.',
    icon: asset_servicesBlepharosplasty
  },
  {
    name: 'INJECTABLE TISSUE REPLACEMENT & REJUVENATION',
    description:
      'Precise Fat grafting technique to adress the aeging face and harness the rejuvenating power of micro fat, nano fat and Stormal Vascular Fractions.',
    icon: asset_servicesInjectable
  },
  {
    name: 'Rhinoplasty',
    description:
      'Whether the use of implants such as silicone or goretex, injectable fillers or threads, or even the use of autologus fat, We strive to give you an all natural look.',
    icon: asset_servicesRhinoplasty
  }
]

const VaserPage = () => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron title="Let's talk about vaser" body="Harness the power of ultrasound and assisted liposuction." />

    <Section>
      <Container>
        <div className="relative mb-36 px-12 pt-12 bg-gold-500">
          <p className="text-white font-body text-2xl leading-normal text-center mx-auto w-3/5">
            Vaser stands for Vibration Amplification of Sound Energy at Resonance. It is a specialised ultrasound
            technology used to break down fat cells by sending out ultrasonic frequency waves.
          </p>

          <div className="h-112" />

          <div className="absolute top-48 inset-x-0 flex align-items justify-center">
            <div className="px-4">
              <img src={asset_faqTrie1} alt="Model" />
            </div>

            <div className="px-4">
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
