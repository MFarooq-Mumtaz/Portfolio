'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useStodioMotion } from './useStodioMotion'

const imgBadge = '/contact/badge-icon.svg'
const imgLogoWhite = '/studio/logo-white.svg'
const imgNavDropdown = '/studio/nav-dropdown.svg'
const imgBookCall = '/contact/book-call.png'
const imgArrowDark = '/studio/arrow-dark.svg'
const imgArrowWhite = '/contact/arrow-white.svg'
const imgArrowConsult = '/contact/arrow-consult.svg'
const imgFooterLogo = '/contact/footer-logo.svg'
const imgNewsletterArrow = '/contact/newsletter-arrow.svg'
const imgSocialArrow = '/contact/social-arrow.svg'

const socialLinks = [
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: '/contact/social-linkedin.svg' },
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: '/contact/social-instagram.svg' },
  { href: 'https://web.facebook.com/', label: 'Facebook', icon: '/contact/social-facebook.svg' },
  { href: 'https://x.com/', label: 'X', icon: '/contact/social-x.svg' },
  { href: 'https://www.youtube.com/', label: 'YouTube', icon: '/contact/social-youtube.svg' },
]

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Studio', href: '/about' },
  { label: 'Work', href: '/projects' },
  { label: 'Pages' },
  { label: 'Careers', href: '/career' },
  { label: 'Contact', href: '/contact' },
]

const pageLinks = [
  ['Home', '/'], ['Studio', '/about'], ['Projects', '/projects'],
  ['Projects Single', '/projects/xenitho'], ['Blog', '/blogs'],
  ['Blogs Single', '/blogs/the-power-of-minimalist-design'], ['Pricing', '/pricing'],
  ['Career', '/career'], ['Career Single', '/career/digital-pr-executive'],
  ['Contact', '/contact'], ['Style Guide', '/utility-pages/style-guide'],
  ['Instructions', '/utility-pages/instruction'], ['Privacy Policy', '/utility-pages/privacy-policy'],
  ['Terms & Conditions', '/utility-pages/terms-conditions'], ['404 Page', '/404'],
  ['Protected Page', '/401'], ['License Page', '/utility-pages/license'],
]

const stats = [
  { value: '04', label: 'Global Offices', description: 'Strategically located to serve industry leaders across four continents.' },
  { value: '21', label: 'Awards Won', description: 'Recognition for pushing the boundaries of search and design.' },
  { value: '8.9', label: 'NPS score', description: 'A near-perfect NPS score built on radical transparency.' },
  { value: '37+', label: 'Talented Team Members', description: 'A global collective of experts dedicated to your brand.' },
]

const methods = [
  {
    title: 'Day 1',
    note: 'Kickoff meeting',
    image: '/studio/method-1.svg',
    copy: 'We begin with a kickoff meeting where we align on your product, set up our Figma workspace, join your Slack, and create a prioritized task board.',
  },
  {
    title: 'Day 2',
    note: 'Ideation',
    image: '/studio/method-2.svg',
    copy: 'On day two we explore early directions through competitor research, ideation, drafts and sketches, and the first shapes of the solution begin to form.',
  },
  {
    title: 'Day 3-4',
    note: 'First designs',
    image: '/studio/method-3.svg',
    copy: 'After a few days you receive the first round of fresh designs, the new direction starts to come alive, and you share feedback as the momentum builds.',
  },
  {
    title: 'Day 5',
    note: 'Part of your team',
    image: '/studio/method-4.svg',
    copy: 'After week one, weekly syncs keep us aligned, and two design deliveries each week push the product forward. It quickly feels like we’re part of your team.',
  },
]

const clientLogos = [
  '/studio/client-1.svg',
  '/studio/client-2.svg',
  '/studio/client-3.svg',
  '/studio/client-4.svg',
  '/studio/client-5.svg',
  '/studio/client-2.svg',
  '/studio/client-6.svg',
  '/studio/client-4.svg',
]

const foundations = [
  { label: 'Our Mission', icon: '/studio/icon-mission.svg', copy: 'We exist to turn ambitious ideas into category-leading brands through strategy, design, and search-first systems.' },
  { label: 'Training & Progression', icon: '/studio/icon-training.svg', copy: 'Every person on the team grows in public: weekly critiques, shared craft, and a clear path from junior to lead.' },
  { label: 'Our Culture', icon: '/studio/icon-culture.svg', copy: 'A small senior crew, embedded in your product. No fluff, just hard work, smart solutions, and impossible deadlines.' },
]

const teamMembers = [
  { photo: '/studio/team-1.png', name: 'Mark Otto', role: 'Co-founder and CEO' },
  { photo: '/studio/team-2.png', name: 'Julian Thorne', role: 'Creative Director' },
  { photo: '/studio/team-3.png', name: 'Clara Sterling', role: 'Lead Experience Designer' },
  { photo: '/studio/team-4.png', name: 'Marcus Halloway', role: 'Senior Webflow Specialist' },
  { photo: '/studio/team-5.png', name: 'Elena Vance', role: 'Visual & Motion Designer' },
  { photo: '/studio/team-6.png', name: 'Oliver Bennett', role: 'Strategist & Copywriter' },
]

const showcase = [
  { src: '/studio/showcase-1.png', rotate: '-8deg' },
  { src: '/studio/showcase-2.png', rotate: '3deg' },
  { src: '/studio/showcase-3.png', rotate: '-4deg' },
  { src: '/studio/showcase-4.png', rotate: '4deg' },
]

function StudioPage() {
  const [pagesOpen, setPagesOpen] = useState(false)
  const [newsletterSent, setNewsletterSent] = useState(false)
  const pageRef = useRef(null)
  const cursorRef = useRef(null)
  const cursorLabelRef = useRef(null)
  useStodioMotion(pageRef, cursorRef, cursorLabelRef, 'studio')

  return (
    <div className="studio-page" ref={pageRef}>
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
        <span className="cursor-label" ref={cursorLabelRef} />
      </div>
      <section className="studio-hero">
        <header className="studio-topbar">
          <div className="brand-mark" aria-label="Stodio agency logo">
            <Link href="/" aria-label="Stodio home">
              <img src={imgLogoWhite} alt="Stodio logo" width={126} height={29} />
            </Link>
          </div>
          <nav className="main-nav studio-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
              className={`nav-item ${item.label === 'Studio' ? 'active' : ''}`}
              data-cursor={item.label === 'Pages' ? '' : undefined}
              onMouseEnter={() => item.label === 'Pages' && setPagesOpen(true)}
                onMouseLeave={() => item.label === 'Pages' && setPagesOpen(false)}
              >
                {item.label === 'Work' && <span className="nav-badge">05</span>}
                {item.label === 'Pages' ? (
                  <>
                    <span>{item.label}</span>
                    <img src={imgNavDropdown} alt="" className="nav-dropdown" width={20} height={20} />
                    {pagesOpen && (
                      <div className="pages-menu">
                        {pageLinks.map(([label, href]) => (
                          <Link href={href} key={label}>{label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </div>
            ))}
          </nav>
          <Link href="/contact" className="cta-button light-cta">
            <span className="cta-icon">
              <img src={imgBookCall} alt="" width={48} height={36} />
            </span>
            <span className="btn-content-block">
              <span className="btn-inner-default">Book A Call</span>
              <span className="btn-inner-hover" aria-hidden="true">Book A Call</span>
            </span>
            <span className="arrow-icon">
              <img src={imgArrowDark} alt="" width={14} height={16} />
            </span>
          </Link>
        </header>
        <div className="section-badge">
          <span className="badge-icon">
            <img src={imgBadge} alt="" width={16} height={16} />
          </span>
          <span>Who we are</span>
        </div>
        <h1>
          <span>We exist to build lasting</span>
          <span className="studio-hero-line">
            digital
            <img src="/studio/hero-inline.png" alt="" width={106} height={80} />
            legacies.
          </span>
        </h1>
        <div className="studio-hero-meta">
          <span>Creative Design Agency</span>
          <span>Since 2019</span>
        </div>
      </section>

      <section className="studio-story">
        <div className="studio-story-side">
          <div className="section-badge light-badge">
            <span className="badge-icon">
              <img src={imgBadge} alt="" width={16} height={16} />
            </span>
            <span>Our Story</span>
          </div>
          <div className="studio-authors">
            <img src="/studio/author-1.png" alt="" width={36} height={36} />
            <img src="/studio/author-2.png" alt="" width={36} height={36} />
            <p><span>By</span> Lucas &amp; Sophia</p>
          </div>
        </div>
        <div className="studio-story-copy">
          <p>Since 2019, we have been a global collective dedicated to one mission: turning ambitious ideas into industry-leading brands through the perfect blend of strategy and soul.</p>
          <p>For over half a decade, we have engineered search-first systems that empower category leaders to own their space and stay ahead of the curve in an ever-evolving digital landscape.</p>
        </div>
      </section>

      <section className="studio-numbers">
        <div className="section-badge light-badge">
          <span className="badge-icon">
            <img src={imgBadge} alt="" width={16} height={16} />
          </span>
          <span>NUMBERS</span>
        </div>
        <div className="studio-stats-grid">
          {stats.map((stat) => (
            <article key={stat.label}>
              <strong className="stat-value" data-value={stat.value}>{stat.value}</strong>
              <div className="stat-divider" />
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-drives">
        <div className="section-badge light-badge">
          <span className="badge-icon">
            <img src={imgBadge} alt="" width={16} height={16} />
          </span>
          <span>What Drives Us</span>
        </div>
        <h2>
          <span>From first idea to final</span>
          <span className="studio-drives-line">
            launch
            <img src="/studio/drives-inline.png" alt="" width={120} height={90} />
            backed by 7+
          </span>
          <span>years of experience.</span>
        </h2>
        <div className="studio-showcase">
          {showcase.map((item) => (
            <div key={item.src} data-cursor="VIEW" data-zoom data-rotate={item.rotate.replace('deg', '')}>
              <img src={item.src} alt="" width={260} height={320} />
            </div>
          ))}
        </div>
      </section>

      <section className="studio-method">
        <div className="studio-method-head">
          <div>
            <div className="section-badge">
              <span className="badge-icon">
                <img src={imgBadge} alt="" width={16} height={16} />
              </span>
              <span>Our Method</span>
            </div>
            <h2>A systematic approach to growth.</h2>
          </div>
          <p>We’ve spent years refining a process that bridges the gap between raw data and creative excellence, ensuring every project is built for long-term scale.</p>
        </div>
        <div className="studio-method-grid">
          {methods.map((item) => (
            <article key={item.title}>
              <h3>{item.title} <span>{item.note}</span></h3>
              <img src={item.image} alt="" width={300} height={300} />
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-clients">
        <div className="section-badge light-badge">
          <span className="badge-icon">
            <img src={imgBadge} alt="" width={16} height={16} />
          </span>
          <span>Infamous client wall</span>
        </div>
        <div className="studio-client-grid">
          {clientLogos.map((logo, index) => (
            <div className="studio-client-cell" key={`${logo}-${index}`}>
              <div className="studio-client-marquee">
                <img src={logo} alt="" width={158} height={48} />
                <img src={logo} alt="" width={158} height={48} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="studio-foundation">
        <div className="studio-foundation-photo">
          <img src="/studio/foundation.jpg" alt="Studio portrait" width={600} height={680} />
        </div>
        <div className="studio-foundation-copy">
          <div className="section-badge light-badge">
            <span className="badge-icon">
              <img src={imgBadge} alt="" width={16} height={16} />
            </span>
            <span>Our Foundation</span>
          </div>
          <h2>Built on purpose, driven by performance</h2>
          <ul>
            {foundations.map((item, index) => (
              <li key={item.label} tabIndex={0} className={index === 0 ? 'is-active' : undefined}>
                <div className="studio-foundation-row">
                  <img src={item.icon} alt="" width={32} height={32} />
                  <span>{item.label}</span>
                </div>
                <p className="studio-foundation-desc">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="studio-team">
        <div className="studio-team-head">
          <div>
            <div className="section-badge light-badge">
              <span className="badge-icon">
                <img src={imgBadge} alt="" width={16} height={16} />
              </span>
              <span>Team</span>
            </div>
            <h2>The people<br />behind New Stodio</h2>
          </div>
          <p>A small, senior team embedded directly into your product.</p>
        </div>
        <div className="studio-team-grid">
          <article className="studio-team-count">
            <strong className="stat-value" data-value="37+">37+</strong>
            <span>Team Members...</span>
          </article>
          {teamMembers.map((member) => (
            <div className="studio-team-photo" data-cursor="VIEW" data-zoom key={member.name}>
              <img src={member.photo} alt={member.name} width={282} height={282} />
              <div className="studio-team-meta">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
          <article className="studio-join">
            <p>We&apos;re all about hard work, smart solutions, &amp; impossible deadlines. No fluff, just brilliance.</p>
            <Link href="/career" className="cta-button dark-cta">
              <span className="btn-content-block">
                <span className="btn-inner-default">Join Us Now</span>
                <span className="btn-inner-hover" aria-hidden="true">Join Us Now</span>
              </span>
              <span className="arrow-icon">
                <img src={imgArrowWhite} alt="" width={14} height={16} />
              </span>
            </Link>
          </article>
        </div>
      </section>

      <section className="footer-callout">
        <div className="section-badge light-badge">
          <span className="badge-icon">
            <img src={imgBadge} alt="" width={16} height={16} />
          </span>
          <span>Get Started</span>
        </div>
        <div className="footer-header">
          <h2>Transform Your Ideas Today</h2>
          <Link href="/contact" className="cta-button red-cta large-footer-button">
            <span className="btn-content-block">
              <span className="btn-inner-default">Book a Consultation</span>
              <span className="btn-inner-hover" aria-hidden="true">Book a Consultation</span>
            </span>
            <span className="arrow-icon">
              <img src={imgArrowConsult} alt="" width={15} height={16} />
            </span>
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h2>Stay updated with Rise news</h2>
            <form
              className={`newsletter-form ${newsletterSent ? 'sent' : ''}`}
              onSubmit={(event) => {
                event.preventDefault()
                setNewsletterSent(true)
              }}
            >
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="submit" aria-label="Subscribe">
                <img src={imgNewsletterArrow} alt="" width={16} height={16} />
              </button>
            </form>
            {newsletterSent && <p className="newsletter-success">Thanks, you&apos;re on the list.</p>}
            <div className="social-links contact-social">
              {socialLinks.map((item) => (
                <a href={item.href} aria-label={item.label} key={item.label}>
                  <img src={item.icon} alt="" width={16} height={16} />
                  <img src={imgSocialArrow} alt="" width={12} height={12} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            <div>
              <Link href="/">Home</Link>
              <Link href="/about">Studio</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/career">Career</Link>
              <Link href="/blogs">Blog</Link>
            </div>
            <div>
              <Link href="/career/digital-pr-executive">Career Single</Link>
              <Link href="/projects/xenitho">Projects Single</Link>
              <Link href="/blogs/the-power-of-minimalist-design">Blogs Single</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <Link href="/utility-pages/style-guide">Style Guide</Link>
              <Link href="/utility-pages/changelog">Changelog</Link>
              <Link href="/utility-pages/license">License</Link>
              <Link href="/401">Password</Link>
              <Link href="/404">404</Link>
            </div>
          </div>
        </div>
        <Link href="/">
          <img className="footer-logo" src={imgFooterLogo} alt="Stodio Agency" width={1340} height={134} />
        </Link>
        <div className="footer-bottom">
          <span>Stodio © 2025. All rights reserved. Powered By Webflow.</span>
          <span>
            <Link href="/utility-pages/privacy-policy">Privacy Policy</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link href="/utility-pages/terms-conditions">Terms &amp; Conditions</Link>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default StudioPage
