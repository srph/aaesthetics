import React, { useRef, useState } from 'react'
import Slick from 'react-slick'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { FaAngleDown, FaArrowRight } from '../components/Icon'
import { CallToAction } from '../components/CallToAction'
import { CallToActionLink } from '../components/CallToActionLink'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Accordion, AccordionItem, AccordionParagraph } from '../components/Accordion'

import asset_logoOutlineArt from '../assets/logo-outline-art.svg'

import asset_modelHeading from '../assets/model-heading.png'
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

const testimonials = [
  {
    name: 'John Doe',
    source: 'Instagram',
    thumbnail: asset_modelA1Block,
    body:
      'Highly recommended! Very satisfied & very beautiful outcome. Dra. Claudine the best surgeon on the Philippines. I am not ashamed of wearing swimsuit now at age 54. Thank you Dra. Claudine & to her nurses who has been so caring, friendly & accommodating.'
  },
  {
    name: 'John Doe',
    source: 'Instagram',
    thumbnail: asset_modelA1Block,
    body:
      'Highly recommended! Very satisfied & very beautiful outcome. Dra. Claudine the best surgeon on the Philippines. I am not ashamed of wearing swimsuit now at age 54. Thank you Dra. Claudine & to her nurses who has been so caring, friendly & accommodating.'
  },
  {
    name: 'John Doe',
    source: 'Instagram',
    thumbnail: asset_modelA1Block,
    body:
      'Highly recommended! Very satisfied & very beautiful outcome. Dra. Claudine the best surgeon on the Philippines. I am not ashamed of wearing swimsuit now at age 54. Thank you Dra. Claudine & to her nurses who has been so caring, friendly & accommodating.'
  },
  {
    name: 'John Doe',
    source: 'Instagram',
    thumbnail: asset_modelA1Block,
    body:
      'Highly recommended! Very satisfied & very beautiful outcome. Dra. Claudine the best surgeon on the Philippines. I am not ashamed of wearing swimsuit now at age 54. Thank you Dra. Claudine & to her nurses who has been so caring, friendly & accommodating.'
  }
]

const Testimonials: React.FC = () => {
  const sliderRef = useRef()
  const [active, setActive] = useState(0)

  return (
    <Section>
      <Container>
        <div className="relative bg-gold-500 pt-16 pb-20 lg:pb-36">
          <SectionHeading title="Testimonials" body="What do our clients say?" bodyColor="white" />

          <div className="mb-12 lg:mb-20" />

          <Slick
            ref={sliderRef}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            afterChange={(index: number) => setActive(index)}>
            {testimonials.map((testimonial, i) => (
              <div key={i}>
                <div className="flex flex-col-reverse lg:flex-row lg:items-center px-8 max-w-screen-lg mx-auto">
                  <div className="flex-shrink-0 flex items-center lg:px-16">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.thumbnail}
                        alt={`${testimonial.thumbnail}'s Photo`}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>

                    <div className="flex flex-col">
                      <Text color="gold-800" size="xl" weight="bold">
                        {testimonial.name}
                      </Text>
                      <Text color="white" size="sm" type="heading">
                        {testimonial.source}
                      </Text>
                    </div>
                  </div>

                  <div className="w-max-2/3 mb-8 lg:mb-0">
                    <Text as="p" color="white" size="2xl" leading="relaxed">
                      {testimonial.body}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </Slick>

          <div className="absolute left-4 bottom-4">
            <Text type="heading" color="white" size="xl" weight="bold">
              {active + 1}{' '}
            </Text>
            <Text type="heading" color="gold-800" size="xl" weight="bold">
              / {testimonials.length}
            </Text>
          </div>

          <div className="absolute right-0 -bottom-6">
            <button className="flex items-center p-4 bg-grey-800" onClick={() => sliderRef.current.slickNext()}>
              <div className="mr-4">
                <Text type="heading" color="gold-500" weight="bold">
                  Next
                </Text>
              </div>

              <div className="text-white">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <div className="relative">
        <div className="absolute border-8 border-gold-500 inset-0 z-50 pointer-events-none"></div>

        <img
          src={asset_logoOutlineArt}
          alt="Logo Outline Art"
          className="hidden lg:block absolute bottom-4 right-4 z-50"
        />

        <div className="relative flex items-center z-40" style={{ height: 600 }}>
          <div className="p-8 lg:p-16 max-w-xl">
            <h1 className="mb-4 font-sm font-heading font-extrabold uppercase text-gold-800">
              Enhancing Looks <span className="text-gold-500">&amp;</span> Changing Lives
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
          className="hidden lg:block absolute lg:-top-5 lg:-right-5 z-40"
        />
      </div>
    </Container>

    <Section>
      <Container size="lg">
        <div className="mb-8">
          <SectionHeading
            title="Reveal a new you"
            body="With the help of a Pioneer in Vaserlipo and High Definition Liposucture since 2008"
          />
        </div>

        <div className="relative mb-24 lg:mb-48">
          <div className="flex flex-col lg:flex-row bg-gold-500">
            <div className="max-w-sm flex-shrink-0 px-8 pt-8 pb-24 mb-24 lg:mb-0">
              <h4 className="text-gold-800 font-heading font-extrabold uppercase mb-4">Hair Removal</h4>

              <p className="mb-8 text-white leading-normal font-body font-medium text-2xl">
                In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used to desmontrate the
                visual form of a document or a typeface without relying on meaningful content.
              </p>

              <CallToActionLink to="/services#hair-removal" icon={<FaArrowRight />}>
                Learn More
              </CallToActionLink>
            </div>
          </div>

          <div className="-mt-36 lg:absolute lg:-mt-0 lg:top-8 lg:-right-8">
            <div className="flex flex-col items-center lg:items-start lg:flex-row mb-4">
              <div className="flex-shrink-0 lg:mr-4">
                <img src={asset_modelA1Block} className="block mb-4" />
                <img src={asset_modelA2Block} className="block mb-4 lg:mb-0" />
              </div>

              <img src={asset_modelA3Column} className="block" />
            </div>

            <div className="text-center lg:text-right">
              <CallToActionLink to="/gallery" icon={<FaArrowRight />}>
                View Client Gallery
              </CallToActionLink>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row-reverse bg-green-300">
            <div className="max-w-sm shrink-none px-8 pt-8 pb-24 mb-24 lg:mb-0">
              <h4 className="text-green-800 font-heading font-extrabold uppercase mb-4">Semi-permanent Make-up</h4>

              <p className="mb-8 text-green-500 leading-normal font-body font-medium text-2xl">
                In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used to desmontrate the
                visual form of a document or a typeface without relying on meaningful content.
              </p>

              <CallToActionLink to="/services#semi-permanent-make-up" color="green-800" icon={<FaArrowRight />}>
                Learn More
              </CallToActionLink>
            </div>
          </div>

          <div className="-mt-36 lg:-mt-0 lg:absolute lg:top-8 lg:-left-8">
            <div className="flex flex-col items-center lg:items-start lg:flex-row mb-4">
              <div className="flex-shrink-0 lg:mr-4">
                <img src={asset_modelB1Block} className="block mb-4" />
                <img src={asset_modelB2Block} className="block mb-4 lg:mb-0" />
              </div>

              <img src={asset_modelB3Column} className="block" />
            </div>

            <div className="text-center lg:text-left">
              <CallToActionLink to="/gallery" icon={<FaArrowRight />}>
                View Client Gallery
              </CallToActionLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>

    <Section>
      <div className="relative">
        <Container size="md">
          <div className="mb-12">
            <SectionHeading title="And more..." body="We offer a number of services to achieve a body you deserve" />
          </div>

          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            {services.map((service) => (
              <div className="flex-shrink-0 w-full lg:w-1/2 lg:px-4 mb-6 text-center">
                <img src={service.icon} alt={service.name} className="mx-auto mb-2" />

                <h4 className="mb-4 font-sm h-12 font-heading uppercase text-gold-500 mx-auto">{service.name}</h4>

                <p className="mb-8 font-body font-medium leading-loose">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button>Learn More</Button>
          </div>
        </Container>

        <div className="absolute top-80 lg:top-0 left-0 transform" style={{ '--tw-translate-x': '-20%' }}>
          <img src={asset_servicesBgLeft} alt="Background Right" />
        </div>

        <div className="absolute top-1/2 lg:top-80 right-0">
          <img src={asset_servicesBgRight} alt="Background Right" />
        </div>
      </div>
    </Section>

    <Section>
      <Container>
        <SectionHeading
          title="We have a wide range of cosmetic surgeries"
          body="Experience allows us to create unique things"
        />

        <div className="mb-8" />

        <div className="relative mb-36">
          <div className="px-6 pt-6 lg:px-12 lg:pt-12 bg-gold-500">
            <p className="text-white font-body text-2xl leading-normal text-center mx-auto lg:w-3/5">
              Dr. Claudine Roura offers a wide range of cosmetic upgrade options, whether it is surgical or
              non-surgical, you'll be pleased with the results. Learn more about all of our service offerings by
              clicking the button below.
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

    <Testimonials />
  </Layout>
)

export default IndexPage
