import * as React from 'react'
import cx from 'classnames'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Text } from '../components/Text'
import { Jumbotron } from '../components/Jumbotron'
import { SectionHeading } from '../components/SectionHeading'

import asset_aboutCertificate1 from '../assets/about-certificate-1.png'
import asset_aboutCertificate2 from '../assets/about-certificate-2.png'
import asset_aboutDrRoura from '../assets/about-dr-roura.jpg'

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

    <Section>
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

    <Section>
      <Container size="md">
        <SectionHeading
          title="Affiliations"
          body="She is also affiliated with the following plastic and cosmetic surgery organization"
        />

        <div className="mb-8" />

        <div className="relative">
          {affiliations.map((affilation, i) => (
            <div
              className={cx('flex lg:items-center flex-col lg:flex-row p-4 lg:p-8 border-l border-r border-t border-gold-500', {
                'border-b': i === affiliations.length - 1
              })}
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

    <Section>
      <Container size="md">
        <SectionHeading title="Meet the Mentors" body="The people who shaped Dr. Roura’s skills and knowledge" />

        <div className="mb-8" />

        <div className="relative">
          {affiliations.map((affilation, i) => (
            <div
              className={cx('flex lg:items-center flex-col lg:flex-row p-4 lg:p-8 border-l border-r border-t border-gold-500', {
                'border-b': i === affiliations.length - 1
              })}
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
  </Layout>
)

export default AboutPage
