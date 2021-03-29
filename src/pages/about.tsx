import React, { useState, useRef } from 'react'
import cx from 'classnames'
import Slick from 'react-slick'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Text } from '../components/Text'
import { Jumbotron } from '../components/Jumbotron'
import { SectionHeading } from '../components/SectionHeading'
import { FaArrowRight } from '../components/Icon'

import asset_aboutCertificate1 from '../assets/about-certificate-1.png'
import asset_aboutCertificate2 from '../assets/about-certificate-2.png'
import asset_aboutDrRoura from '../assets/about-dr-roura.jpg'

import asset_mentorDrAlfredoHoyos from '../assets/mentor-dr-alfredo-hoyos.jpg'
import asset_mentorDrHoyosMillard from '../assets/mentor-hoyos-millard.jpg'
import asset_mentorDrWilbertoCortes from '../assets/mentor-dr-wilberto-cortes.jpg'
import asset_mentorDrSteveCohen from '../assets/mentor-dr-steve-cohen.jpg'
import asset_mentorDrBenTalei from '../assets/mentor-dr-ben-talei.jpg'
import asset_mentorDrRaulGuanzn from '../assets/mentor-dr-raul-guanzn.jpg'
import asset_mentorDrPierreFournier from '../assets/mentor-dr-pierre-fournier.jpg'
import asset_mentorDrsRobertMargetWeiss from '../assets/mentor-drs-robert-margaret-weiss.jpg'
import asset_mentorDrSorinEremia from '../assets/mentor-dr-sorin-eremia.jpg'

const roura = {
  description:
    'Dr. Claudine S. Roura is an expert in 4DLipo, HD Tummy Tuck Surgery and has been known for her outstanding expertise in VASER High Definition Liposculpture. She is the first and only cosmetic surgeon certified to do VASER High Definition Liposculpture in the Philippines.',
  body: [
    'Dr. Roura obtained her degree in medicine at the University of Santo Tomas (UST) Faculty of Medicine and Surgery, took up her residency training in Dermatology at the Jose R. Reyes Memorial Medical Center, After which she did was awarded the Walter de Groot Phlebology fellowship award where she trained with Dr. Robert Weiss in Maryland, USA in November 2005.',
    'She was also awarded the Dermatologic Surgery Preceptorship Program of the American Society of Dermatologic surgery and was under Dr. Sorin Eremia of Riverside, California USA in July 2003. Locally, she did her Preceptorship in Cosmetic Surgery with Dr. Raul B. Guanzon, prominent cosmetic surgeon in the Philippines.',
    'Vaser came to the Philippines around 2007 and she was assigned as the Systems Application Specialist for Vaser Philippines. With special interest in the art of body sculpting, she underwent intensive training in High Definition Liposculpture in 2008 and advanced training in 4D Lipo & HD Tummy Tuck in 2014 with Dr. Alfredo Hoyos in Colombia.',
    'More recent training is art of Body Sculpting is with Dr. Hourglass, Dr. Wilberto Cortes in Houston Texas in March 2018 focusing on Hourglass Lipo and Hourglass Tummy Tack and Brazilian Buttlift.'
  ]
}

const affiliations = [
  'Board certified dermatologist & is a fellow of the philippine dermatological society',
  'Associate fellow of the philippine academy of aesthetic surgery',
  'Member of the philippines society for liposuction surgery'
]

const testimonials = [
  {
    name: 'DR. Alfredo Hoyos',
    title: 'Inventor High Definition Technique',
    thumbnail: asset_mentorDrAlfredoHoyos,
    body:
      'Colombia, 2008 - First training in the High Definition Technique, we were the second batch of trainees worldwide.'
  },
  {
    name: 'Dr. Alfredo Hoyos & Dr. John Millard',
    title: 'First Training in Inventor High Definition Technique',
    thumbnail: asset_mentorDrHoyosMillard,
    body:
      'Colombia, 2008 - First training in the High Definition Technique, we were the second batch of trainees worldwide.'
  },
  {
    name: 'DR. Wilberto Cortes',
    title: 'Inventor High Definition Technique',
    thumbnail: asset_mentorDrWilbertoCortes,
    body:
      'Houston, Texas, 2018 - Polishing up on Tummy tuck training with the Hourglass technique with Dr. Hourglass himself.'
  },
  {
    name: 'DR. Steve Cohen',
    title: 'Injectable Tissue Replacement and Rejuvenation ITR2',
    thumbnail: asset_mentorDrSteveCohen,
    body:
      'Bangkok, 2019 - Precision Fat grafting for the face using ITR2 technique with the well renowned Dr. Steve Cohe'
  },
  {
    name: 'DR. Ben Talei',
    title: 'Beverly Hills Center',
    thumbnail: asset_mentorDrBenTalei,
    body:
      'Beverly HIlls, CA, 2020 - Auralyft Training - Modified Deep Plane Facelift and Liplift, sharing his personal technique for the improved version of the classical facelift.'
  },
  {
    name: 'DR. Raul Guanzn',
    title: 'Beverly Hills Center',
    thumbnail: asset_mentorDrRaulGuanzn,
    body:
      'Manila, 2003 to 2005 - Here is where my love for cosmetic surgery started when I underwent a 2 year cosmetic surgery preceptorship training with Dr. Raul Guanzon.'
  },
  {
    name: 'DR. Pierre Fournier',
    title: 'Father of Liposuction Surgery',
    thumbnail: asset_mentorDrPierreFournier,
    body: 'Manila, 2007 - Basic liposuction and fat grafting workshop with the Father of Liposuction Surgery.'
  },
  {
    name: 'DRS. Robert and Margaret Weiss',
    title: 'Father of Liposuction Surgery',
    thumbnail: asset_mentorDrsRobertMargetWeiss,
    body: 'Maryland, USA, 2005 - Walter de Groot Phlebology Fellowship.'
  },
  {
    name: 'DR. Sorin Eremia',
    title: 'Father of Liposuction Surgery',
    thumbnail: asset_mentorDrSorinEremia,
    body:
      'Riverside, CA, USA 2003 - This is where it all started being granted the American Society of Dermatologic Surgery Preceptorship program with Dr. Sorin Eremia in Brockton Cosmetic Surgery.'
  }
]

const Testimonials: React.FC = () => {
  const sliderRef = useRef()
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]

  return (
    <Section space="narrow">
      <Container>
        <SectionHeading title="Meet the Mentors" body="The people who shaped Dr. Roura’s skills and knowledge" />

        <div className="mb-12 lg:mb-20" />

        <div className="relative bg-gold-500 pt-4 pb-12 lg:pt-12 lg:pb-24">
          <Slick
            ref={sliderRef}
            fade
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            beforeChange={(index: number) => setActive(index)}>
            {testimonials.map((testimonial, i) => (
              <div key={i}>
                <div className="flex flex-col lg:flex-row lg:px-8">
                  <div className="lg:w-1/3 lg:h-full mb-8 lg:mb-0">
                    <div className="lg:hidden px-4">
                      <img
                        src={testimonial.thumbnail}
                        alt={`${testimonial.name}'s Thumbnail`}
                        className="relative -mt-4 w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-8 lg:mb-0 px-4 lg:px-0 lg:w-2/3">
                    <Text color="gold-800" size="sm" weight="black" type="heading">
                      {testimonial.title}
                    </Text>

                    <div className="mb-4" />

                    <Text color="white" size="4xl">
                      {testimonial.name}
                    </Text>

                    <div className="mb-8" />

                    <div className="max-w-screen-sm">
                      <Text as="p" color="white" size="2xl" leading="relaxed">
                        {testimonial.body}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slick>

          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div className="relative w-1/3">
              <div className="absolute top-8 right-8 p-4">
                <img src={testimonial.thumbnail} alt={`${testimonial.name}'s Thumbnail`} className="w-full" />
              </div>
            </div>
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

      <div className="mb-24" />
    </Section>
  )
}

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <Jumbotron title="About" body="A Aesthetics and the people that's made this possible" />

    <Section>
      <Container>
        <SectionHeading title="Meet the doctor" body="Dr. Claudine Roura" bodyWeight="bold" />
      </Container>

      <div className="mb-24 lg:mb-8" />

      <Container size="lg">
        <div className="relative flex flex-col lg: flex-row bg-gold-500">
          <div className="relative -mt-16 lg:-mt-0 lg:absolute flex px-4 lg:px-0 lg:top-8 lg:-left-8 lg:mb-0">
            <img src={asset_aboutDrRoura} alt="Photo of Dr. Roura" />
          </div>

          <div className="self-end lg:w-2/3 px-8 py-8 lg:px-12 lg:py-16">
            <Text as="p" size="2xl" weight="medium" color="white" leading="normal">
              {roura.description}
            </Text>
          </div>
        </div>
      </Container>

      <div className="mb-8 lg:mb-24" />

      <Container size="md">
        {roura.body.map((p, i) => (
          <React.Fragment key={i}>
            <Text as="p" size="xl" color="gold.800" leading="loose">
              {p}
            </Text>

            {i !== roura.body.length - 1 && <div className="mb-6 lg:mb-8" />}
          </React.Fragment>
        ))}
      </Container>
    </Section>

    <Section space="narrow">
      <Container size="lg">
        <div className="mb-36">
          <SectionHeading title="Certifications" />
        </div>

        <div className="relative flex-col py-1 lg:px-32 bg-gold-500">
          <div className="relative px-4 lg:px-0 -mt-24 lg:-mt-24 flex flex-col lg:flex-row justify-center">
            <div className="lg:px-4 mb-4">
              <img src={asset_aboutCertificate1} alt="Certificate 1" className="border border-gold-500" />
            </div>

            <div className="lg:px-4">
              <img src={asset_aboutCertificate2} alt="Certificate 1" className="border border-gold-500" />
            </div>
          </div>

          <div className="p-4 lg:p-8 lg:text-center">
            <Text color="white" size="2xl" as="p">
              Having Mastered the art of Body Sculpting, Dr. Roura now focuses on the art of Face Contouring with the
              use of Autologous fat grafting and the ITR2 Injectable Tissue Replacement and Rejuvenation, trained under
              Dr. Steven Cohen in Bangkok July 2019.
            </Text>
          </div>
        </div>
      </Container>
    </Section>

    <Section space="narrow">
      <Container size="md">
        <SectionHeading
          title="Affiliations"
          body="She is also affiliated with the following plastic and cosmetic surgery organization"
        />

        <div className="mb-8" />

        <div className="relative">
          {affiliations.map((affilation, i) => (
            <div
              className={cx(
                'flex lg:items-center flex-col lg:flex-row p-4 lg:p-8 border-l border-r border-t border-gold-500',
                {
                  'border-b': i === affiliations.length - 1
                }
              )}
              key={i}>
              <div className="flex-shrink-0 flex mb-4 lg:mb-0 items-center justify-center mr-4 h-8 w-8 bg-gold-500 rounded-full">
                <Text color="white" type="heading" weight="bold">
                  {i + 1}
                </Text>
              </div>

              <Text type="heading" weight="bold">
                {affilation}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>

    <Testimonials />
  </Layout>
)

export default AboutPage
