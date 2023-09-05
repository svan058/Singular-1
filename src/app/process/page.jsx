import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
      <p>
          We collaborate closely with our clients to deeply understand their business objectives and challenges.
        </p>
        <p>
          Our team of experts conducts comprehensive audits, including technical assessments and stakeholder interviews, to gather essential data.
        </p>
        <p>
          Based on our findings, we present a strategic plan tailored to meet your business goals and budget.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Needs Assessment</TagListItem>
        <TagListItem>Feasibility Studies</TagListItem>
        <TagListItem>Stakeholder Interviews</TagListItem>
        <TagListItem>Technical Audits</TagListItem>
        <TagListItem>Strategic Planning</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Following the Discovery phase, we create a detailed roadmap to guide the development process, ensuring alignment with your business objectives.
        </p>
        <p>
          Each client is assigned a dedicated account manager to facilitate seamless communication and provide regular updates on project milestones.
        </p>
        <p>
          Our account managers are trained to be responsive and proactive, ensuring that you are always in the loop and satisfied with the project's progress.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Singular provided regular updates and transparent communication made the project a seamless experience.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach the final stages of the Build phase, we conduct a thorough review to ensure all requirements are met before proceeding to launch.
        </p>
        <p>
          Our development process is agile and flexible, allowing us to adapt to any changes or new requirements that may arise.
        </p>
        <p>
          We guarantee that all key functionalities are rigorously tested and fully operational at launch, with ongoing support and maintenance services available.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects undergo rigorous testing to ensure quality and reliability.
        </ListItem>
        <ListItem title="Infrastructure">
          We utilize robust and scalable infrastructure to ensure optimal performance.
        </ListItem>
        <ListItem title="Support">
          Our dedicated support team is always available to assist with any issues or queries you may have.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing Reliability with Innovation"
      >
        <p>
        We are committed to staying ahead of technological trends while maintaining a reliable and proven approach to solving complex business challenges.

        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
        <GridListItem title="Meticulous">
            Attention to detail is crucial, from initial design to final implementation.
          </GridListItem>
          <GridListItem title="Efficient">
            Efficiency is key; we aim to deliver high-quality solutions within agreed timelines.
          </GridListItem>
          <GridListItem title="Adaptable">
            We adapt our solutions to meet the unique needs and challenges of each client.
          </GridListItem>
          <GridListItem title="Honest">
            Transparency and honesty form the basis of our client relationships.
          </GridListItem>
          <GridListItem title="Loyal">
            We aim to build long-term relationships, becoming a trusted partner rather than just a service provider.
          </GridListItem>
          <GridListItem title="Innovative">
            Innovation drives us; we are always looking for better ways to solve problems.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
      <p>
          At Singular, we combine efficiency with innovation to deliver unparalleled value to our clients. We leverage our expertise and proven methodologies to transform your business from zero to one.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
