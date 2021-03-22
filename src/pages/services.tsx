import * as React from 'react'
import cx from 'classnames'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Text } from '../components/Text'
import { Jumbotron } from '../components/Jumbotron'

import asset_servicesVaserlipo from '../assets/services-vaserlipo.jpg'
import asset_servicesHourglass from '../assets/services-hourglass.jpg'
import asset_servicesAuralyft from '../assets/services-auralyft.jpg'
import asset_servicesFat from '../assets/services-fat-grafting.jpg'
import asset_servicesInjectable from '../assets/services-injectable-tissue.jpg'
import asset_servicesNanofat from '../assets/services-nanofat.jpg'
import asset_servicesSkin from '../assets/services-skin-tightening.jpg'
import asset_servicesRhinoplasty from '../assets/services-rhinoplasty.jpg'
import asset_servicesBlepharoplasty from '../assets/services-blepharoplasty.jpg'
import asset_servicesBiofilling from '../assets/services-biofilling.jpg'
import asset_servicesDermatologicals from '../assets/services-dermatologicals.jpg'

const services = [
  {
    name: 'VASERLIPO AND HIGH DEFINITION LIPOSCULPTURE',
    description:
      'Our primary specialty is Body Sculpting using VASER. This advanced technology combined with state of the art technique gives superior results.',
    body: [
      'Vaser Liposuction can be used to target stubborn fat cells in all areas of the body including the tummy, love handles, arms, legs and neck. It can aslo be used to treat gynaecomastia (man boobs), to reduce the size of womens breasts and to define the face. Depending on the fat removal amount, the end result of Vaser Liposuction is a slimmer, more contourd figure.',
      'Vaser High Definition Liposuction goes one step further in the body contouring and sculpting process. The highly precise liposuction procedure removes small fat deposits around and on top of the muscle groups. ',
      'This results in a high level of muscle definition and ultra-defined results that no other lipo procedure can achieve. Compared with Vaser, Vaser High Definition Liposuction provides a more athletic, muscular appearance.'
    ],
    thumbnail: asset_servicesVaserlipo
  },
  {
    name: 'HOURGLASS LIPO AND  TUMMY TUCK',
    description:
      'Modification of the High def technique that removes excess skin and repairs diastasis of the rectus muscles. Hourglass technique enhances the curves by using fat grafting.',
    body: [
      'The traditional Tummy Tuck was designed to remove and hanging skin or loose skin of the abdomen (tummy) while repairing the expanded distance between the muscles. Any fat that lies under the skin that is removed (called a panniculus) with the overlying skin.',
      'The Hourglass Tummy tuck is a procedure to recreate the hourglass figure and at the same time a flatter abdomen. The hourglass tummy tuck is the only tummy tuck technique that will provide you with a better shape and a flatter abdomen. This is in contrast to the traditional tummy tuck, which the main focus is to result in a flatter and tighter belly.'
    ],
    thumbnail: asset_servicesHourglass
  },
  {
    name: 'AURALYFT',
    description:
      'One of the most desirable and sought after facelifts is one that is gaining popularity for men and women of all ages. Known as “Hollywood’s Secret Facelift”.',
    body: [
      'The Auralyft offers stunning results that looks so natural that it is hard to believe it is obtained through plastic surgery. With the Auralyft, a specialized thechnique is used to elevate the muscles in the face at a deep place level. The muscles are moved upward, starting from the brow and working down to the neck. Not only does this technique create natural results that do not create a stretched or pulled look on the face, the recovery is quicker. Auralyft can be done only using local anesthesia, making it quicker and less invasive than other types of facelifts. Plus. the result can be duplicated consistently, making it a desirable option for those wanting to have a more youthful, but natural appearance.'
    ],
    thumbnail: asset_servicesAuralyft
  },
  {
    name: 'FAT GRAFTING',
    description:
      'Removes fat in places you don’t want them and reuse them in places where you need them. Especially in the breast and buttocks for an all natural enhancement.',
    body: [
      'Our technique has very high fat retention rate. Fat grafting also referred to as fat transfer or fat injections, is the surgical process by which fat is transferred from one area of the body to another area. The surgical goal is to improve or augment the area where the fat is injected.'
    ],
    thumbnail: asset_servicesFat
  },
  {
    name: 'INJECTABLE TISSUE REPLACEMENT & REJUVENATION',
    description:
      'Precise fat grafting technique to address the ageingface and harness the rejuvenating power of micro fat, nano fat and Stromal Vascular Fractions.',
    body: [
      'Injectable tissue replacement and regeneration (ITR2) is a standardized fat grafting technique, which anatomically addresses losses of facial volume, laxity and sun damage of the skin resulting from the natural process of aging.'
    ],
    thumbnail: asset_servicesInjectable
  },
  {
    name: 'NANOFAT AND PRP',
    description:
      'Aside from using fats as a biofiller for the face and body, we can harness the healing and regenerative powers of fat by creating nanofat particles for skin an hair rejuvenation resulting in profound skin quality.',
    body: [
      'Platelet Rich Plasma or PRP, comes from your own blood which is drawn prior to the procedure. This platelet rich plasma is the either injected under the skin or applied topically to the skin after microneedling. Indications for PRP injections have expanded from skin rejuvenation to hair restoration and more.',
      'Nanofat is a procedure that is different than traditional fat transfer to the face for a number of reasons. To briefly summarize, nanofat isn’t really injecting fat cells, it is injecting everything around the fat cells that help stimulate growth of collagen and elastin. By removing the large fat cells but preserving the surrounding growth factors and adult stem cells (don’t get confuse with embryonic stem cells), an environment is developed that helps restore the skin.'
    ],
    thumbnail: asset_servicesNanofat
  },
  {
    name: 'SKIN TIGHTENING AND FACELIFTING',
    description:
      'We use Thermitight as a non-surgical option for the lower face and neck. For upper face, we use Thermismooth.',
    body: [
      'ThermiTight is a minimally invasive procedure, which involves inserting a tiny treatment probe (the size of a pen point) under the skin to heat specific tissue gently. Then, radiofrequency energy is applied to the treatment area to shrink targeted tissues.',
      'ThermiSmooth is a carefully controlled, non-invasive tissue heating procedure that usses a radiofrequency generation applicator “pen” to send energy into the dermis (the underlying structure of the skin, containing hair follicles, capillaries, nerve endings and other tissue). When your skin’s collagen reaches the proper temperature, the underlying collagen fibers tighten.'
    ],
    thumbnail: asset_servicesSkin
  },
  {
    name: 'RHINOPLASTY',
    description:
      'Whether the use of implants such as silicone or goretex, injectable fillers or threads, or even the use of autologous fat, we strive to give you an all natural look.',
    body: [
      'Rhinoplasty, sometimes reffered to as a “nose job” or “nose reshaping” by patients, enhances facial harmony and the proportions of your nose. It can also correct impaired breathing caused by structural defects in the nose.'
    ],
    thumbnail: asset_servicesRhinoplasty
  },
  {
    name: 'BLEPHAROPLASTY',
    description:
      'The eyes have it. As we age, the eyelids droop, we develop eyebags, deep creases and the brow droops as well.',
    body: [
      'Eyelids surgery or blepharoplasty, is a surgical procedure to improve the appearance of the eyelids. Surgery can be performed on the upper lids, lower lids or both. Whether you want to improve your appearance or are experiencing functional problems with your eyelids. Eyelids surgery can rejuvinate the area surrounding your eyes.'
    ],
    thumbnail: asset_servicesBlepharoplasty
  },
  {
    name: 'BIOFILLING & BIOCONTOURING',
    description:
      'In our institution, we prefer recycling. That is using your own fats to be used as a filler for the face and body. For the face it can be used on any part of the face to fill in hollow spaces and give you the full youthful face. For the body, we use the fats to enhance the breast, buttocks and hips.',
    body: [
      'Facial aging is complex. To deliver the best anti-ageing result in the face, a surgeon has to address and treat photo-damage, volume loss and soft tissue laxity simultaneously. By improving volume at earlier ages with biomaterials such as with a patient’s own fat, it is possible for a surgeon to stimulate angiogenesis as well as sustain volume augmentation to help tissue regeneration and possibly prevent/decelerate ageing at cellular level.'
    ],
    thumbnail: asset_servicesBiofilling
  },
  {
    name: 'DERMATOLOGICALS',
    description:
      'As in any other skin clinic, botox, fillers, sclerotherapy, facial treatment, IPL, skin whitening, skin peeling, and hair removal are included in our offerings.',
    body: [],
    thumbnail: asset_servicesDermatologicals
  }
]

const ServicesPage = () => (
  <Layout>
    <SEO title="Our Services" />

    <Jumbotron title="Our Services" body="Wide range of cosmetic enchaments to bring out the new you" />

    <div className="mb-24" />

    <Section>
      {services.map((service, i) => {
        const isImageOnLeftSide = i % 2 === 0

        return (
          <>
            <Container size="lg" key={i}>
              <div
                className={cx('relative flex bg-gold-500 mb-16', {
                  'flex-row-reverse': isImageOnLeftSide
                })}>
                <div className="w-2/3 flex-shrink-0 px-12 py-16">
                  <Text as="h4" size="2xl" color="gold-800" type="heading" weight="extrabold">
                    {service.name}
                  </Text>

                  <div className="mb-8" />

                  <Text as="p" size="2xl" weight="medium" color="white" leading="normal">
                    {service.description}
                  </Text>
                </div>

                <div
                  className={cx('absolute flex top-8 h-60 w-80', {
                    '-right-8': !isImageOnLeftSide,
                    '-left-8': isImageOnLeftSide
                  })}>
                  <img
                    src={service.thumbnail}
                    className={cx('block object-fill  w-full', {
                      'self-end': !isImageOnLeftSide
                    })}
                  />
                </div>
              </div>
            </Container>

            {Boolean(service.body.length) && (
              <Container size="md">
                {service.body.map((text, j) => (
                  <React.Fragment key={j}>
                    <Text as="p" size="xl" color="gold.800" leading="loose">
                      {text}
                    </Text>

                    {j !== service.body.length - 1 && <div className="mb-8" />}
                  </React.Fragment>
                ))}
              </Container>
            )}

            <div className="mb-24" />
          </>
        )
      })}
    </Section>
  </Layout>
)

export default ServicesPage
