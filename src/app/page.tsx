import Image from "next/image";
import { ArrowRightIcon } from "@components/icons/ArrowRightIcon";
import { LinkedInIcon } from "@components/icons/LinkedInIcon";
import { BehanceIcon } from "@components/icons/BehanceIcon";
import { MediumIcon } from "@components/icons/MediumIcon";
import { DragScroll } from "@components/DragScroll";

// ── Assets ────────────────────────────────────────────────────────────────────
const imgProfile        = "/assets/img-profile.png";
const imgBotiHome       = "/assets/cases/img-gb-home.png";
const imgBotiCategoria  = "/assets/cases/img-gb-cat.png";
const imgBeautyboxPhone = "/assets/cases/bbx-home.png";
const imgBeautyboxDesktop = "/assets/cases/bbx-pdp.png";
const imgPortoSeguro1   = "/assets/cases/porto-1.png";
const imgPortoSeguro2   = "/assets/cases/porto-2.png";
const imgMultiplus      = "/assets/cases/mplus.png";
const imgOrchestra      = "/assets/publications/img-orchestra.png";
const imgPlantas        = "/assets/publications/img-plantas.png";
const imgAbout1         = "/assets/about/img-crossfit.png";
const imgAbout2         = "/assets/about/img-crossfit-1.png";
const imgAbout3         = "/assets/about/img-crossfit-2.png";
const imgAbout4         = "/assets/about/img-crossfit-3.png";

// ── Reusable primitives ────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-h4 uppercase tracking-label text-d-fg-secondary-on-bg">
      {children}
    </p>
  );
}

function NavLink({
  href,
  children,
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
}) {
  const text = onDark
    ? "text-d-fg-primary-on-sf-default"
    : "text-d-fg-primary-on-bg";
  return (
    <a
      href={href}
      className={`group flex w-full items-center justify-between p-6 lg:p-10 transition-opacity duration-normal hover:opacity-80`}
    >
      <span className={`text-h3 lg:text-h2-desktop font-medium leading-loose ${text}`}>
        {children}
      </span>
      <ArrowRightIcon
        className={`size-8 lg:size-12 shrink-0 transition-transform duration-normal group-hover:translate-x-1 ${text}`}
      />
    </a>
  );
}

function OutlineButton({
  href,
  children,
  icon,
  onDark = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  const color = onDark
    ? "border-d-action-on-sf-default text-d-action-on-sf-default"
    : "border-d-action-on-bg text-d-action-on-bg";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex self-start items-center gap-2 rounded-full border px-5 py-3 text-body-md font-semibold transition-all duration-normal hover:bg-[var(--primitive-brand1-500)] hover:border-[var(--primitive-brand1-500)] hover:text-white ${color} ${className}`}
    >
      {children}
      <span className="size-5 shrink-0">{icon}</span>
    </a>
  );
}

// ── Career timeline item ───────────────────────────────────────────────────────

function CareerItem({
  from,
  to,
  role,
  company,
  description,
  isFirst = false,
  isLast = false,
}: {
  from: string;
  to?: string;
  role: string;
  company: string;
  description: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <div className="flex w-[75vw] lg:w-[400px] shrink-0 flex-col">
      {/* Date bar */}
      <div className="flex items-center gap-4 pb-0 pl-6 pr-6 pt-6 lg:pl-10 lg:pr-10 lg:pt-10">
        {isFirst && (
          <span className="text-h4 uppercase tracking-label text-d-action-on-bg whitespace-nowrap">
            {to}
          </span>
        )}
        <div className="flex flex-1 items-center">
          <svg width="8" height="10" viewBox="0 0 8 10" fill="none" className="shrink-0" aria-hidden="true">
            <path d="M7 1L1 5L7 9" stroke="var(--primitive-brand1-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex-1 border-t border-solid" style={{ borderColor: "var(--primitive-brand1-500)" }} />
        </div>
        <span className="text-h4 uppercase tracking-label text-d-action-on-bg whitespace-nowrap">
          {from}
        </span>
        {isLast && (
          <div className="h-px w-6 shrink-0 border-t border-solid border-d-border-on-bg" />
        )}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 p-6 lg:gap-6 lg:p-10">
        <p className="text-h3 font-medium text-d-fg-primary-on-bg">{role}</p>
        <p className="text-h4 uppercase tracking-label text-d-fg-primary-on-bg">
          {company}
        </p>
        <div className="text-body-sm text-d-fg-secondary-on-bg space-y-4">
          {description}
        </div>
      </div>
    </div>
  );
}

// ── Case study row ─────────────────────────────────────────────────────────────

function CaseRow({
  title,
  description,
  behanceUrl,
  bg,
  children,
}: {
  title: string;
  description: string;
  behanceUrl: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`group flex flex-col gap-6 lg:flex-row lg:h-[400px] w-full lg:items-center lg:gap-40 overflow-hidden pt-8 pb-0 px-5 lg:pt-0 lg:pb-0 lg:pl-20 lg:pr-40 transition-colors duration-[1000ms] hover:bg-black ${bg}`}
    >
      <div className="flex w-full lg:w-[480px] shrink-0 flex-col gap-6 lg:gap-8">
        <p className="text-h3 font-medium text-d-fg-primary-on-sf-default whitespace-pre-line">
          {title}
        </p>
        <p className="text-body-md text-d-fg-primary-on-sf-default">
          {description}
        </p>
        <OutlineButton
          href={behanceUrl}
          icon={<BehanceIcon />}
          onDark
          className="group-hover:bg-white group-hover:text-black group-hover:border-white"
        >
          Check it on Behance
        </OutlineButton>
      </div>
      <div className="relative flex w-full h-[240px] lg:flex-1 lg:h-full lg:min-w-0 items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
}

// ── Publication row ────────────────────────────────────────────────────────────

function PublicationRow({
  title,
  description,
  mediumUrl,
  image,
  overlay,
}: {
  title: string;
  description: React.ReactNode;
  mediumUrl: string;
  image: string;
  overlay?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[400px] w-full lg:items-center lg:gap-16 overflow-hidden bg-d-sf-subtle px-5 py-8 lg:px-20 lg:py-10">
      {/* Image */}
      <div className="relative h-[220px] w-full lg:h-full lg:w-[640px] shrink-0 overflow-hidden rounded-2xl lg:rounded-3xl">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
        {overlay}
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col gap-6 lg:gap-8 mt-6 lg:mt-0">
        <p className="text-h3 font-medium text-d-fg-primary-on-bg">{title}</p>
        <div className="text-body-sm text-d-fg-secondary-on-bg space-y-4">
          {description}
        </div>
        <OutlineButton href={mediumUrl} icon={<MediumIcon />}>
          Read about it on Medium
        </OutlineButton>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="flex flex-col items-start bg-d-bg">
      {/* ── Hero ── */}
      <section id="hero" className="flex w-full flex-col gap-10 p-5 lg:gap-20 lg:p-20">
        {/* Title */}
        <div className="flex flex-col gap-8 lg:gap-20">
          <h1 className="text-display-mobile lg:text-display-desktop font-normal text-d-fg-primary-on-bg">
            Hello there!
            <br />
            {`I'm `}
            <span className="text-d-action-on-bg">Alfredo Schaitza</span>
          </h1>
          <p className="w-full lg:w-[640px] text-body-lg font-medium text-d-fg-primary-on-bg">
            {`I'm a Product Designer working end-to-end, from discovery to
            delivery, with expertise in visual craft, design systems, design
            ops, and product metrics.`}
          </p>
        </div>

        {/* Stack: photo + nav cards */}
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {/* Nav cards — mobile: first; desktop: second (right) */}
          <div className="order-1 lg:order-2 flex flex-1 flex-col gap-px overflow-hidden rounded-2xl lg:rounded-3xl">
            {[
              { label: "Check out my work", href: "#work" },
              { label: "My Career", href: "#career" },
              { label: "Publications", href: "#publications" },
              { label: "Get to know me", href: "#about" },
            ].map(({ label, href }) => (
              <div key={label} className="bg-d-sf-default transition-colors duration-[1000ms] hover:bg-[var(--primitive-brand1-500)]">
                <NavLink href={href} onDark>
                  {label}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Photo + LinkedIn CTA — mobile: second; desktop: first (left) */}
          <div className="order-2 lg:order-1 flex shrink-0 flex-col gap-4 lg:gap-6">
            <div className="relative w-full aspect-[320/386] lg:aspect-auto lg:h-[386px] lg:w-[320px] overflow-hidden rounded-2xl lg:rounded-3xl">
              <Image
                src={imgProfile}
                alt="Alfredo Schaitza"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <a
              href="https://www.linkedin.com/in/alfredoschaitza/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full bg-d-action-on-bg px-5 py-3 text-body-md font-semibold text-d-fg-primary-on-action transition-opacity duration-normal hover:opacity-80"
            >
              Reach out on LinkedIn
              <LinkedInIcon className="size-5 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="work" className="flex w-full flex-col">
        <div className="flex items-center px-5 py-6 lg:px-20 lg:py-10">
          <SectionLabel>Case Studies and work samples</SectionLabel>
        </div>

        <div className="flex flex-col">
          {/* 01 — Grupo Boticário */}
          <CaseRow
            title={"Grupo Boticário's\nDesign System"}
            description="Grupo Boticário's design system, built to unify 100+ squads across brands and platforms. Reduced cycle time by 44%, bug rates by 60%, and grew GMV by up to 16%."
            behanceUrl="https://www.behance.net/gallery/247525035/Flora-Design-System"
            bg="bg-d-sf-default"
          >
            <div className="flex h-[320px] w-full max-w-[560px] self-end items-end gap-4 drop-shadow-[0px_24px_24px_rgba(0,0,0,0.25)]">
              <div className="relative h-full flex-1">
                <Image src={imgBotiHome} alt="" fill className="object-contain object-bottom" />
              </div>
              <div className="relative h-full flex-1">
                <Image src={imgBotiCategoria} alt="" fill className="object-contain object-bottom" />
              </div>
            </div>
          </CaseRow>

          {/* 02 — Beautybox */}
          <CaseRow
            title="Beautybox's E-commerce"
            description="Full e-commerce redesign for Grupo Boticário's international beauty retail brand, covering brand repositioning, emotional design research, and a phygital omnichannel strategy."
            behanceUrl="https://www.behance.net/gallery/247729143/Beautybox-E-commerce"
            bg="bg-[#f9009e]"
          >
            <div className="flex h-[320px] w-full max-w-[560px] items-center gap-4 drop-shadow-[0px_24px_24px_rgba(0,0,0,0.25)]">
              <div className="relative h-full w-1/4">
                <Image src={imgBeautyboxPhone} alt="" fill className="object-contain" />
              </div>
              <div className="relative h-full flex-1">
                <Image src={imgBeautyboxDesktop} alt="" fill className="object-contain" />
              </div>
            </div>
          </CaseRow>

          {/* 03 — Porto Seguro */}
          <CaseRow
            title="Porto Seguro's Website"
            description="Website redesign that turned Porto Seguro's site into its primary acquisition channel: 60% of broker leads came from online, acquisition cost dropped 40%, total leads grew 20%."
            behanceUrl="https://www.behance.net/gallery/247591623/Porto-Seguros-Website"
            bg="bg-[#7f7fa2]"
          >
            <div className="flex h-[220px] lg:h-[320px] w-full max-w-[560px] items-center gap-4 drop-shadow-[0px_24px_24px_rgba(0,0,0,0.25)]">
              <div className="relative h-full w-3/5 overflow-hidden rounded-2xl shadow-2xl">
                <Image src={imgPortoSeguro1} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-full flex-1 overflow-hidden rounded-2xl shadow-2xl">
                <Image src={imgPortoSeguro2} alt="" fill className="object-cover" />
              </div>
            </div>
          </CaseRow>

          {/* 04 — Multiplus */}
          <CaseRow
            title="Multiplus's Website"
            description="Full redesign of a large loyalty platform, covering points management, flight booking, hotel reservations, and a multi-brand redemption catalog."
            behanceUrl="https://www.behance.net/gallery/247528707/Multiplus-Redesign"
            bg="bg-[#1795ff]"
          >
            <div className="relative h-[220px] lg:h-[320px] w-full max-w-[560px] overflow-hidden rounded-2xl drop-shadow-[0px_24px_24px_rgba(0,0,0,0.25)]">
              <Image src={imgMultiplus} alt="" fill className="object-cover" />
            </div>
          </CaseRow>
        </div>
      </section>

      {/* ── Career ── */}
      <section id="career" className="flex w-full flex-col">
        {/* Intro */}
        <div className="flex flex-col gap-8 px-5 pb-0 pt-10 lg:gap-10 lg:px-20 lg:pt-20">
          <SectionLabel>My Career</SectionLabel>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-[10px]">
            <h2 className="flex-1 text-h1-mobile lg:text-h1-desktop font-medium text-d-fg-primary-on-bg">
              15 years designing
              <br />
              digital products
            </h2>
            <div className="flex flex-1 flex-col gap-8 lg:gap-10 justify-center">
              <div className="text-body-md text-d-fg-secondary-on-bg space-y-4">
                <p>
                  End-to-end product design, design systems, and design ops,
                  from discovery and concept through validation and delivery,
                  with a consistent focus on visual quality, interaction design,
                  and craft.
                </p>
                <p>
                  Expertise spans Design Systems, Design Tokens, Visual Design,
                  User Research, Accessibility, and product metrics, applied
                  across consumer products, loyalty platforms, e-commerce, and
                  large-scale multi-brand environments.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/alfredoschaitza/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-d-action-on-bg px-5 py-3 text-body-md font-semibold text-d-action-on-bg transition-all duration-normal hover:bg-[var(--primitive-brand1-500)] hover:border-[var(--primitive-brand1-500)] hover:text-white"
              >
                View full profile on LinkedIn
                <LinkedInIcon className="size-5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Timeline carousel */}
        <DragScroll className="flex overflow-x-auto p-4 lg:p-10 scrollbar-hide">
          <CareerItem
            from="2021"
            to="2025"
            role={"Product Design\n& Design Ops Specialist"}
            company="Grupo Boticário"
            isFirst
            description={
              <>
                <p>
                  Technical leadership across product design and design ops for
                  a technology organization of 3,000+ people. Led the evolution
                  of Flora, Grupo Boticário's design system, from foundational
                  decisions and component architecture to direct product delivery
                  embedded in squads, mentoring up to 30 product designers and
                  supporting 200+ across design ops initiatives.
                </p>
                <p>
                  Built internal frameworks covering toolstack management,
                  workflow standardization across 100+ squads, AI-powered
                  research repositories reducing desk research time by 60%, and
                  AI accessibility agents that brought image accessibility
                  coverage from 8% to 100% across 5,000+ SKUs. Flora delivered
                  a 44% reduction in cycle time, 60% drop in bug rates, 78-point
                  NPS, and GMV growth of up to 16%.
                </p>
              </>
            }
          />
          <div className="w-px self-stretch shrink-0 border-l border-dashed border-d-border-on-bg" />
          <CareerItem
            from="2019"
            to="2021"
            role={"UX Consultant\n& Staff Product Designer"}
            company="Grupo Boticário"
            description={
              <>
                <p>
                  Led the internalization of 19 digital products previously
                  built by external agencies, covering e-commerce, in-store
                  experiences, sales rep tools, and backoffice systems.
                  Structured multidisciplinary squads from the ground up, defined
                  design rituals and workflows, and conducted technical
                  interviews for the first 60 product designers hired in-house.
                </p>
                <p>
                  Conceived and built Grupo Boticário's design system from the
                  ground up, including its multi-brand, multi-platform token
                  foundation and core structure. The proof of concept alone
                  reduced the backlog for building sales rep registration flows
                  from 6 months to 4 weeks and increased registration volume by
                  20%.
                </p>
              </>
            }
          />
          <div className="w-px self-stretch shrink-0 border-l border-dashed border-d-border-on-bg" />
          <CareerItem
            from="2018"
            to="2019"
            role="Product Design Lead"
            company="Mirum WPP"
            description={
              <>
                <p>
                  Hybrid role spanning hands-on product design and technical
                  leadership across multiple client accounts. Led complex
                  redesign and zero-to-one projects end-to-end, from scope
                  definition, budgeting, and concept through final delivery,
                  while setting design standards, quality benchmarks, and team
                  allocation across engagements.
                </p>
                <p>
                  Worked directly as lead designer on high-complexity projects
                  for Porto Seguro, Hellmann's, Nextel, Cyrela, and Grupo
                  Boticário. Porto Seguro's redesign turned the company's website
                  into its primary acquisition channel: 60% of broker leads came
                  from online, acquisition cost dropped 40%, and total leads grew
                  20%.
                </p>
              </>
            }
          />
          <div className="w-px self-stretch shrink-0 border-l border-dashed border-d-border-on-bg" />
          <CareerItem
            from="2013"
            to="2018"
            role="Senior Product Designer"
            company="Mirum WPP"
            description={
              <>
                <p>
                  Primary designer on redesign and new business projects, working
                  end-to-end from user research and problem definition through
                  concept, wireframing, responsive design, usability testing, and
                  delivery. Embedded directly with clients in both remote and
                  on-site contexts, leading Design Sprints, workshops, and
                  innovation sessions focused on problem framing and stakeholder
                  alignment.
                </p>
                <p>
                  Delivered redesigns for major brands including Nextel, Cyrela,
                  Hellmann's, and Porto Seguro, with measurable gains in
                  conversion, engagement, and user satisfaction across each
                  engagement.
                </p>
              </>
            }
          />
          <div className="w-px self-stretch shrink-0 border-l border-dashed border-d-border-on-bg" />
          <CareerItem
            from="2010"
            to="2013"
            role="Early career"
            company="Brainbox Design, Explay Digital and Cross Comunications"
            isLast
            description={
              <>
                <p>
                  Started across branding, graphic design, packaging, and
                  interactive campaigns for corporate clients.
                </p>
                <p>
                  The transition to a full focus on UX happened in 2013, driven
                  by direct contact with users and human-centered design methods,
                  and the realization that interfaces built around real user
                  behavior generate measurable results.
                </p>
              </>
            }
          />
        </DragScroll>
      </section>

      {/* ── Publications ── */}
      <section id="publications" className="flex w-full flex-col bg-d-sf-subtle">
        <div className="flex items-center px-5 pb-0 pt-10 lg:px-20 lg:pt-20">
          <SectionLabel>Publications</SectionLabel>
        </div>
        <div className="flex flex-col gap-px">
          <PublicationRow
            title="The Metrics Pyramid as a score for orchestrating digital products"
            description={
              <>
                <p>
                  Metrics are like musical scores: when well composed, they
                  orchestrate teams with harmony and purpose. But when each
                  instrument plays its own tune, what was meant to be music
                  becomes noise.
                </p>
                <p>
                  This article is an invitation to tune your orchestra — and to
                  introduce a framework that helps connect digital product
                  metrics to real business outcomes.
                </p>
              </>
            }
            mediumUrl="https://medium.com/design-bootcamp/the-metrics-pyramid-as-a-score-for-orchestrating-digital-products-0df2643118c8"
            image={imgOrchestra}
          />
          <PublicationRow
            title="Growing Design Systems at Grupo Boticário"
            description={
              <>
                <p>
                  Flora takes its name from biology: a system where every
                  element is connected, serves a distinct function, and adapts
                  to its environment. That analogy shaped how Grupo Boticário's
                  design system was built and governed.
                </p>
                <p>
                  Components are split across three libraries, Core, Team, and
                  Shared, allowing any squad to contribute while the Flora team
                  maintains quality and consistency across a technology ecosystem
                  far broader than most people realize.
                </p>
              </>
            }
            mediumUrl="https://medium.com/gbtech/cultivando-design-systems-no-grupo-botic%C3%A1rio-6a6c57dfe137"
            image={imgPlantas}
          />
        </div>
      </section>

      {/* ── About me ── */}
      <section id="about" className="flex w-full flex-col pb-10 lg:pb-20">
        <div className="flex items-center px-5 pb-6 pt-10 lg:px-20 lg:pb-10 lg:pt-20">
          <SectionLabel>About me</SectionLabel>
        </div>
        <div className="grid grid-cols-2 gap-4 px-5 lg:flex lg:gap-6 lg:px-20">
          {/* 01 — Father & Husband */}
          <div className="flex flex-col gap-4 lg:flex-1 lg:gap-6">
            <div className="flex flex-col gap-1 lg:gap-2">
              <p className="text-body-md lg:text-h3 font-medium text-d-fg-primary-on-bg">Father &amp; Husband</p>
              <p className="text-body-sm lg:text-body-md text-d-fg-secondary-on-bg">My best self</p>
            </div>
            <div className="relative h-[260px] lg:h-[520px] w-full overflow-hidden rounded-xl lg:rounded-2xl">
              <Image src={imgAbout1} alt="" fill className="object-cover" />
            </div>
          </div>
          {/* 02 — Crossfitter */}
          <div className="flex flex-col gap-4 lg:flex-1 lg:gap-6">
            <div className="relative h-[260px] lg:h-[520px] w-full overflow-hidden rounded-xl lg:rounded-2xl">
              <Image src={imgAbout2} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-1 lg:gap-2">
              <p className="text-body-md lg:text-h3 font-medium text-d-fg-primary-on-bg">Crossfitter</p>
              <p className="text-body-sm lg:text-body-md text-d-fg-secondary-on-bg">Every day at 6am</p>
            </div>
          </div>
          {/* 03 — Food & Drinks */}
          <div className="flex flex-col gap-4 lg:flex-1 lg:gap-6">
            <div className="flex flex-col gap-1 lg:gap-2">
              <p className="text-body-md lg:text-h3 font-medium text-d-fg-primary-on-bg">Food &amp; Drinks</p>
              <p className="text-body-sm lg:text-body-md text-d-fg-secondary-on-bg">To share</p>
            </div>
            <div className="relative h-[260px] lg:h-[520px] w-full overflow-hidden rounded-xl lg:rounded-2xl">
              <Image src={imgAbout3} alt="" fill className="object-cover" />
            </div>
          </div>
          {/* 04 — Games */}
          <div className="flex flex-col gap-4 lg:flex-1 lg:gap-6">
            <div className="relative h-[260px] lg:h-[520px] w-full overflow-hidden rounded-xl lg:rounded-2xl">
              <Image src={imgAbout4} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-1 lg:gap-2">
              <p className="text-body-md lg:text-h3 font-medium text-d-fg-primary-on-bg">Games</p>
              <p className="text-body-sm lg:text-body-md text-d-fg-secondary-on-bg">To unwind</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="flex w-full flex-col gap-px overflow-hidden">
        {/* LinkedIn CTA */}
        <a
          href="https://www.linkedin.com/in/alfredoschaitza/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-between bg-d-sf-default p-6 lg:p-10 transition-colors duration-[1000ms] hover:bg-[var(--primitive-brand1-500)]"
        >
          <span className="text-h3 lg:text-h2-desktop font-medium leading-loose text-d-fg-primary-on-sf-default">
            Reach out on LinkedIn
          </span>
          <LinkedInIcon className="size-8 lg:size-12 shrink-0 text-d-fg-primary-on-sf-default" />
        </a>
        {/* Nav links */}
        {[
          { label: "Check out my work", href: "#work" },
          { label: "My Career", href: "#career" },
          { label: "Publications", href: "#publications" },
          { label: "Get to know me", href: "#about" },
        ].map(({ label, href }) => (
          <div key={label} className="bg-d-sf-default transition-colors duration-[1000ms] hover:bg-[var(--primitive-brand1-500)]">
            <NavLink href={href} onDark>
              {label}
            </NavLink>
          </div>
        ))}
      </footer>
    </main>
  );
}
