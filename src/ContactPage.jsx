'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useStodioMotion } from './useStodioMotion'

const imgBadge = '/contact/badge-icon.svg'
const imgLogoDark = '/contact/logo-dark.svg'
const imgNavDropdown = '/contact/nav-dropdown.svg'
const imgBookCall = '/contact/book-call.png'
const imgArrowWhite = '/contact/arrow-white.svg'
const imgArrowConsult = '/contact/arrow-consult.svg'
const imgHero = '/contact/hero.png'
const imgHeroOverlay = '/contact/hero-overlay.png'
const imgPlay = '/contact/play-icon.svg'
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

const offices = [
  { name: 'Brooklyn Navy Yard', address: 'Industry City, 220 36th St, Brooklyn, NY 11232, USA', image: '/contact/location-1.png' },
  { name: 'Kreuzberg District', address: 'Factory Görlitzer Park, Lohmühlenstraße 65, 12435 Berlin, Germany', image: '/contact/location-2.png' },
  { name: 'Shibuya Crossing Area', address: 'The Foundry Shibuya, 2-1 Udagawacho, Shibuya City, Tokyo 150-0042, Japan', image: '/contact/location-3.png' },
  { name: 'Surry Hills', address: 'The Commons, 388 George St, Sydney NSW 2000, Australia', image: '/contact/location-1.png' },
]

function ContactPage() {
  const [pagesOpen, setPagesOpen] = useState(false)
  const [newsletterSent, setNewsletterSent] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const pageRef = useRef(null)
  const cursorRef = useRef(null)
  const cursorLabelRef = useRef(null)
  useStodioMotion(pageRef, cursorRef, cursorLabelRef, 'contact')

  return (
    <div className="contact-page" ref={pageRef}>
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
        <span className="cursor-label" ref={cursorLabelRef} />
      </div>
      <header className="contact-topbar">
        <div className="brand-mark" aria-label="Stodio agency logo">
          <Link href="/" aria-label="Stodio home">
            <img src={imgLogoDark} alt="Stodio logo" width={126} height={29} />
          </Link>
        </div>

        <nav className="main-nav contact-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${item.label === 'Contact' ? 'active' : ''}`}
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
                    <div className="pages-menu contact-pages-menu">
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

        <Link href="/contact" className="cta-button dark-book-cta">
          <span className="cta-icon">
            <img src={imgBookCall} alt="" width={48} height={36} />
          </span>
          <span className="btn-content-block">
            <span className="btn-inner-default">Book A Call</span>
            <span className="btn-inner-hover" aria-hidden="true">Book A Call</span>
          </span>
          <span className="arrow-icon">
            <img src={imgArrowWhite} alt="" width={14} height={16} />
          </span>
        </Link>
      </header>

      <section className="contact-hero">
        <div className="contact-copy">
          <div className="section-badge light-badge">
            <span className="badge-icon">
              <img src={imgBadge} alt="" width={16} height={16} />
            </span>
            <span>Since 2019</span>
          </div>
          <h1>Let’s Talk</h1>
          <p className="contact-intro">
            We are here to help your team grow, built only to keep your communication fast. It easily connects the details of where new projects will start.
          </p>

          <div className="contact-meta">
            <div>
              <strong>Address</strong>
              <span>Capital City, TX</span>
            </div>
            <div>
              <strong>Email</strong>
              <a href="mailto:stodio.agency@cd.com">stodio.agency@cd.com</a>
            </div>
          </div>

          {formSent ? (
            <p className="contact-form-success" role="status">Thanks — your message is on its way.</p>
          ) : (
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault()
                setFormSent(true)
              }}
            >
              <div className="contact-form-row">
                <label>
                  <span>First Name <em>*</em></span>
                  <input type="text" name="firstName" placeholder="Name" required />
                </label>
                <label>
                  <span>Email <em>*</em></span>
                  <input type="email" name="email" placeholder="Email" required />
                </label>
              </div>
              <label className="contact-message">
                <span>Write Message</span>
                <textarea name="message" placeholder="How can we help you? Feel free to get in touch!" rows={5} />
              </label>
              <button type="submit" className="cta-button dark-cta contact-submit">
                <span className="btn-content-block">
                  <span className="btn-inner-default">Submit Message</span>
                  <span className="btn-inner-hover" aria-hidden="true">Submit Message</span>
                </span>
                <span className="arrow-icon">
                  <img src={imgArrowWhite} alt="" width={14} height={16} />
                </span>
              </button>
            </form>
          )}
        </div>

        <div className="contact-photo" data-cursor="PLAY" data-zoom>
          <img src={imgHero} alt="Hand holding white daisies against a blue sky" width={684} height={825} />
          <img className="contact-photo-overlay" src={imgHeroOverlay} alt="" width={684} height={825} />
          <button type="button" className="contact-play" aria-label="Play video">
            <img src={imgPlay} alt="" width={20} height={20} />
          </button>
        </div>
      </section>

      <section className="office-section" aria-label="Office locations">
        <div className="office-panel">
          <div className="section-badge light-badge">
            <span className="badge-icon">
              <img src={imgBadge} alt="" width={16} height={16} />
            </span>
            <span>Our Office Locations</span>
          </div>
          <div className="office-list">
            {offices.map((office) => (
              <article className="office-row" data-cursor="" key={office.name}>
                <div className="office-row-left">
                  <div className="office-thumb">
                    <img src={office.image} alt="" width={88} height={64} />
                  </div>
                  <h2>{office.name}</h2>
                </div>
                <p>{office.address}</p>
              </article>
            ))}
          </div>
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

export default ContactPage
