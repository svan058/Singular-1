import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageBlakeReid from '@/images/team/blake-reid.jpeg'
import imageDriesVincent from '@/images/team/dries-vincent.jpeg'
import imageStefan from '@/images/team/Stefan.jpeg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpeg'
import imageJames from '@/images/team/James.jpeg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Culture"
        title="Architecting the Future, One Transformation at a Time."
        invert
      >
        <p>
          We are a team of visionaries committed to turning data into foresight and strategy into disruptive innovation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovation" invert>
            We specialize in crafting disruptive strategies that rewrite the rules of your industry.
          </GridListItem>
          <GridListItem title="Expertise" invert>
            Our enterprise and data architecture services turn your data into a competitive advantage.
          </GridListItem>
          <GridListItem title="Leadership" invert>
            We provide visionary technical leadership for complex transformation programs.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Stefan van der Wel',
        role: 'Data Architect & Management Consultant',
        image: { src:imageStefan  },
      },
      {
        name: 'James Choi',
        role: 'Managing Partner and Consultant',
        image: { src:imageJames },
      },
      {
        name: 'Peter Xing',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Michael Holborn',
        role: 'Senior Developer',
        image: { src:imageBlakeReid  },
      },
      {
        name: 'Zara Wilson',
        role: 'Senior Designer',
        image: { src: imageLeslieAlexander },
      },
      
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
    <PageIntro eyebrow="About Singular" title="Where Vision Meets Execution">
      <p>
        At Singular, we don’t just adapt to change; we catalyze it. Our services turn your data into foresight, and your strategy into disruptive innovation.
      </p>
      <div className="mt-10 max-w-2xl space-y-6 text-base">
        <p>
          Founded by a full stack team covering ux design/development as well as backend customer platforms, Singular is committed to leading the industry into the future.
        </p>
        <p>
          We’re not just a team; we’re a think tank of innovators. We work around the clock to ensure that your business is not just in the game but ahead of it.
        </p>
      </div>
    </PageIntro>
    <Container className="mt-16">
      <StatList>
        <StatListItem value="20+" label="Transformative Projects" />
        <StatListItem value="3+" label="Industry Leaders Served" />
        <StatListItem value="$10M+" label="Revenue Generated for Clients" />
      </StatList>
    </Container>

    <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
