'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useStodioMotion } from './useStodioMotion'

const imgImageHeroBgImage = '/home/hero-bg.png'
const imgVector = '/home/book-call.png'
const imgContainer = '/home/gallery-1.png'
const imgContainer1 = '/home/gallery-2.png'
const imgContainer2 = '/home/gallery-3.png'
const imgContainer3 = '/home/gallery-4.png'
const imgVector1 = '/home/service-inline.png'
const imgImageGalleryImage = '/home/work-1.png'
const imgImageGalleryImage1 = '/home/work-2.png'
const imgImageGalleryImage2 = '/home/work-3.png'
const imgImageGalleryImage3 = '/home/work-4.png'
const imgImageGalleryImage4 = '/home/work-5.png'
const imgIcon = '/home/badge-icon.svg'
const imgImage = '/home/arrow-white.svg'
const imgImage1 = '/home/arrow-dark.svg'
const imgIcon1 = '/home/logo-white.svg'
const imgImageNavDropdownIcon = '/home/nav-dropdown.svg'
const imgIcon2 = '/home/all-cases.svg'
const imgIcon3 = '/home/plan-icon.svg'
const imgIcon4 = '/home/feature-1.svg'
const imgIcon5 = '/home/feature-2.svg'
const imgIcon6 = '/home/feature-3.svg'
const imgIcon7 = '/home/feature-4.svg'
const imgIcon8 = '/home/feature-5.svg'
const imgVector2 = '/home/testimonial-1.png'
const imgVector3 = '/home/testimonial-2.png'
const imgVector4 = '/home/testimonial-3.png'
const imgImageBlogsThumbnailImage = '/home/blog-1.png'
const imgImageBlogsThumbnailImage1 = '/home/blog-2.png'
const imgImageBlogsThumbnailImage2 = '/home/blog-3.png'
const imgImageTestimonialCardLogo = '/home/testimonial-logo-1.svg'
const imgImageTestimonialCardLogo1 = '/home/testimonial-logo-2.svg'
const imgQuote = '/home/quote.svg'
const imgFooterLogo = '/home/footer-logo.svg'
const imgPartner1 = '/home/partner-1.svg'
const imgPartner2 = '/home/partner-2.svg'
const imgPartner3 = '/home/partner-3.svg'
const imgPartner4 = '/home/partner-4.svg'
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

const serviceItems = ['UI/UX Design', 'Mobile Design', 'Development', 'Branding Design']

const workItems = [
  { title: 'Xenitho', type: 'Brand Strategy', image: imgImageGalleryImage, href: '/projects/xenitho' },
  { title: 'Aethelgard', type: 'Web Design', image: imgImageGalleryImage1, href: '/projects/aethelgard' },
  { title: 'Kryonix', type: 'Product Interface (UI)', image: imgImageGalleryImage2, href: '/projects/kryonix' },
  { title: 'Luminaura', type: 'Visual Storytelling', image: imgImageGalleryImage3, href: '/projects/luminaura' },
  { title: 'Vyntage', type: 'Creative Campaign', image: imgImageGalleryImage4, href: '/projects/vyntage' },
]

const pricingPlans = [
  {
    name: 'Focus',
    price: '$1,450 /mo',
    blurb: 'Ideal for early-stage visionaries.',
    features: [
      'One active design slot',
      '48-hour average delivery',
      'Direct dashboard collaboration',
      'One active design slot',
      'Full source file ownership',
    ],
    accent: false,
    cta: 'START A PROJECT',
    href: '/contact',
  },
  {
    name: 'Momentum',
    price: '$2,950 /mo',
    blurb: 'Scaling your brand at high velocity.',
    features: [
      'Two active design slots',
      '24-hour priority delivery',
      'Full-stack creative solutions',
      'Weekly strategy video calls',
      'Priority support queue access',
    ],
    accent: true,
    cta: 'GET STARTED',
    href: '/contact',
  },
  {
    name: 'Empire',
    price: 'Custom Pricing',
    blurb: 'A dedicated creative department.',
    features: [
      'Unlimited active design slots',
      'Same-day instant turnaround',
      'Dedicated creative art lead',
      'White-label ready deliverables',
      '24/7 VIP private channel',
    ],
    accent: false,
    custom: true,
    cta: 'REACH OUT',
    href: '/contact',
  },
]

const faqItems = [
  'What services does your agency provide?',
  'How do you approach a new project?',
  'What is the typical timeline for a project?',
  'How do you handle revisions?',
  'How much do your services cost?',
]

const testimonials = [
  {
    author: 'Julian Vance',
    role: 'CEO, Vertex Media',
    quote: 'Stripped away the noise and gave our brand a soul. Truly exceptional design thinking.',
    image: imgVector2,
    logo: imgImageTestimonialCardLogo,
  },
  {
    author: 'Tom Crose',
    role: 'CEO, Stodio Agency',
    quote: 'They delivered a stunning digital experience. Professional, creative, and highly efficient from start to finish.',
    image: imgVector3,
    logo: imgImageTestimonialCardLogo1,
  },
  {
    author: 'Elena Rossi',
    role: 'Product Manager, Lumina Tech',
    quote: 'A perfect blend of design and performance. They turned our ideas into a premium product that truly stands out.',
    image: imgVector4,
    logo: imgImageTestimonialCardLogo,
  },
]

const blogItems = [
  {
    category: 'Branding',
    title: 'The Power of Minimalist Design',
    date: 'May 12, 2025',
    image: imgImageBlogsThumbnailImage,
    href: '/blogs/the-power-of-minimalist-design',
  },
  {
    category: 'Insights',
    title: 'Digital Trends to Watch in 2026',
    date: 'Apr 28, 2025',
    image: imgImageBlogsThumbnailImage1,
    href: '/blogs/digital-trends-to-watch-in-2026',
  },
  {
    category: 'Process',
    title: 'Our Creative Workflow',
    date: 'Apr 10, 2025',
    image: imgImageBlogsThumbnailImage2,
    href: '/blogs/our-creative-workflow-defined',
  },
]

const statItems = [
  { value: '1%', label: 'Expert-Vetted', description: 'Trusted among the top 1% of freelancers worldwide.' },
  { value: '30+', label: 'Clients served', description: 'From startups to giants, each treated like our only one.' },
  { value: '100%', label: 'Success Score', description: 'All 5-star reviews. No compromises. No just okay.' },
  { value: '8+', label: 'Years of expertise', description: 'Expertise in UX, branding, and growth-focused design.' },
]

const galleryItems = [imgContainer, imgContainer1, imgContainer2, imgContainer3]

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [isLoading, setIsLoading] = useState(true)
  const [activeService, setActiveService] = useState(0)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [newsletterSent, setNewsletterSent] = useState(false)
  const appRef = useRef(null)
  const cursorRef = useRef(null)
  const cursorLabelRef = useRef(null)
  useStodioMotion(appRef, cursorRef, cursorLabelRef, 'home')

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => setIsLoading(false), 2500)
    return () => window.clearTimeout(loaderTimer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="stodio-app" ref={appRef}>
      {isLoading && (
        <div className="page-loader" role="status" aria-label="Loading portfolio">
          <div className="loader-wordmark">STODIO</div>
          <div className="loader-progress"><span /></div>
          <div className="loader-percent">100</div>
        </div>
      )}
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
        <span className="cursor-label" ref={cursorLabelRef} />
      </div>
      <div className="hero-shell">
        <div className="hero-bg">
          <img src={imgImageHeroBgImage} alt="" width={1504} height={930} />
        </div>

        <header className={`topbar ${navScrolled ? 'scrolled' : ''}`}>
          <div className="brand-mark" aria-label="Stodio agency logo">
            <a href="/" aria-label="Stodio home"><img src={imgIcon1} alt="Stodio logo" width={126} height={29} /></a>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <div key={item.label} className={`nav-item ${index === 0 ? 'active' : ''}`} onMouseEnter={() => item.label === 'Pages' && setPagesOpen(true)} onMouseLeave={() => item.label === 'Pages' && setPagesOpen(false)}>
                {item.label === 'Work' && <span className="nav-badge">05</span>}
                {item.label === 'Pages' ? (
                  <>
                    <span>{item.label}</span>
                    <img src={imgImageNavDropdownIcon} alt="" className="nav-dropdown" width={20} height={20} />
                    {pagesOpen && <div className="pages-menu">{pageLinks.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</div>}
                  </>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </div>
            ))}
          </nav>

          <Link href="/contact" className="cta-button light-cta">
            <span className="cta-icon">
              <img src={imgVector} alt="" width={48} height={36} />
            </span>
            <span className="btn-content-block">
              <span className="btn-inner-default">Book A Call</span>
              <span className="btn-inner-hover" aria-hidden="true">Book A Call</span>
            </span>
            <span className="arrow-icon">
              <img src={imgImage1} alt="" width={14} height={16} />
            </span>
          </Link>
        </header>

        <div className="hero-content">
          <div className="headline-badge">
            <span className="badge-icon">
              <img src={imgIcon} alt="" width={16} height={16} />
            </span>
            <span>Next-Gen Design Agency</span>
          </div>

          <h1>
            <span className="hero-line"><span className="hero-line-inner">Designing the Next Generation</span></span>
            <span className="hero-line"><span className="hero-line-inner">of Brands</span></span>
          </h1>

          <p className="hero-subtitle">
            Helping brands launch, grow, and stay ahead through exceptional design.
          </p>

          <div className="hero-meta-row">
            <span>+ Define</span>
            <span>+ est. YR2016</span>
            <span>+ system: STODIO AGENCY</span>
          </div>

          <div className="hero-aside">
            <p>Branding, mobile &amp; web app design for startups and giants.</p>

            <div className="hero-actions">
              <a href="/projects" className="cta-button red-cta">
                <span className="btn-content-block">
                  <span className="btn-inner-default">View Projects</span>
                  <span className="btn-inner-hover" aria-hidden="true">View Projects</span>
                </span>
                <span className="arrow-icon">
                  <img src={imgImage} alt="" width={14} height={16} />
                </span>
              </a>

              <a href="/contact" className="cta-button white-cta">
                <span className="btn-content-block">
                  <span className="btn-inner-default">Reach Out</span>
                  <span className="btn-inner-hover" aria-hidden="true">Reach Out</span>
                </span>
                <span className="arrow-icon">
                  <img src={imgImage1} alt="" width={14} height={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="trust-strip">
        <div className="trust-note">
          <span className="trust-mark-star" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7428 13.2871C22.2703 9.23848 21.7715 4.96373 21.7715 0H26.2285C26.2285 4.90798 25.7321 9.17729 25.2602 13.2305C24.8759 16.5336 24.5082 19.6932 24.4399 22.938C26.6779 20.6036 28.6356 18.1284 30.6864 15.5356C33.2149 12.3388 35.8852 8.96334 39.3948 5.45357L42.5465 8.60525C39.076 12.0757 35.7056 14.7433 32.5061 17.2759L32.5031 17.2782C29.8969 19.3414 27.4038 21.3149 25.062 23.5601C28.2948 23.4918 31.4293 23.126 34.7126 22.7429C38.7613 22.2703 43.0363 21.7715 48 21.7715V26.2285C43.0922 26.2285 38.8229 25.7318 34.7699 25.2602L34.7669 25.26C31.4645 24.8758 28.3058 24.5083 25.062 24.4399C27.3948 26.6762 29.8687 28.6331 32.4599 30.6824L32.464 30.6859C35.6609 33.2147 39.0365 35.8847 42.5465 39.3948L39.3948 42.5465C35.9243 39.0761 33.2568 35.706 30.7246 32.5067L30.7186 32.4984L30.7135 32.4918C28.653 29.8897 26.6819 27.4006 24.4399 25.062C24.5082 28.3068 24.8759 31.4664 25.2602 34.7695C25.7321 38.8228 26.2285 43.092 26.2285 48H21.7715C21.7715 43.0363 22.2703 38.7616 22.7428 34.7129L22.7437 34.7063C23.1264 31.4252 23.4918 28.2926 23.5601 25.062C21.3181 27.4006 19.347 29.8897 17.2865 32.4918L17.2814 32.4984L17.2754 32.5067C14.7432 35.706 12.0757 39.0761 8.60525 42.5465L5.45357 39.3948C8.96351 35.8847 12.3391 33.2147 15.536 30.6859L15.5401 30.6824C18.1313 28.6331 20.6052 26.6762 22.938 24.4399C19.6932 24.5084 16.5335 24.876 13.2301 25.2602C9.17712 25.7318 4.90781 26.2285 0 26.2285V21.7715C4.96373 21.7715 9.23873 22.2703 13.2874 22.7429C16.5707 23.126 19.7052 23.4918 22.938 23.5601C20.5952 21.314 18.1012 19.3399 15.4939 17.2759C12.2944 14.7433 8.92399 12.0757 5.45357 8.60525L8.60525 5.45357C12.1148 8.96334 14.7851 12.3388 17.3136 15.5356C19.3644 18.1283 21.3221 20.6035 23.5601 22.9378C23.4918 19.7072 23.1264 16.5748 22.7437 13.2937L22.7428 13.2871Z" fill="#232323"/>
            </svg>
          </span>
          <span>We've done 500+ enterprise and business consulting.</span>
        </div>
        <div className="logo-marquee" aria-label="Studio partners">
          <div className="logo-marquee-track">
            {[imgPartner1, imgPartner2, imgPartner3, imgPartner4, imgPartner1, imgPartner2, imgPartner3, imgPartner4].map((logo, index) => <img key={`${logo}-${index}`} src={logo} alt="" width={158} height={48} />)}
          </div>
          <div className="logo-marquee-track" aria-hidden="true">
            {[imgPartner1, imgPartner2, imgPartner3, imgPartner4, imgPartner1, imgPartner2, imgPartner3, imgPartner4].map((logo, index) => <img key={`dup-${logo}-${index}`} src={logo} alt="" width={158} height={48} />)}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-copy">
          <div className="section-badge light-badge"><span className="badge-icon"><img src={imgIcon} alt="" width={16} height={16} /></span><span>Who we are</span></div>
          <h2>We build search-first digital systems to help category leaders.</h2>
        </div>
        <a className="about-link" href="/about">
          <span className="arrow-icon">↗</span>
          <span className="btn-content-block">
            <span className="btn-inner-default">About The Studio</span>
            <span className="btn-inner-hover" aria-hidden="true">About The Studio</span>
          </span>
        </a>
      </section>

      <section className="gallery-section" aria-label="Studio gallery">
        <div className="gallery-track">
          {[...galleryItems, ...galleryItems].map((image, index) => <div className="gallery-card" key={`${image}-${index}`}><img src={image} alt="Studio project detail" width={460} height={576} /></div>)}
        </div>
      </section>

      <section className="stats-section">
        <div className="section-badge light-badge"><span className="badge-icon"><img src={imgIcon} alt="" width={16} height={16} /></span><span>By the numbers</span></div>
        <div className="stats-grid">
          {statItems.map((stat) => <article className="stat-item" key={stat.label}><strong className="stat-value" data-value={stat.value}>{stat.value}</strong><div className="stat-divider" /><h3>{stat.label}</h3><p>{stat.description}</p></article>)}
        </div>
      </section>

      <section className="services-panel">
        <div className="section-heading-row">
          <div className="service-heading-content">
            <div className="section-badge dark-badge">
              <span className="badge-icon">
                <img src={imgIcon} alt="" width={16} height={16} />
              </span>
              <span>Services</span>
            </div>
            <h2>Everything <span className="service-inline-image"><img src={imgVector1} alt="" width={80} height={60} /></span> your<br />brand needs</h2>
          </div>

          <div className="service-copy">
            <p>
              We craft high-impact digital experiences through strategic design, seamless
              coding, and creative thinking.
            </p>
          </div>
        </div>

        <div className="service-list">
          {serviceItems.map((title, index) => (
            <div key={title} className={`service-row ${activeService === index ? 'active' : ''}`} onMouseEnter={() => setActiveService(index)}>
              <span className="service-name">{title}</span>
              <span className="service-index">[{String(index + 1).padStart(2, '0')}]</span>
              <span className="service-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase-section">
        <div className="showcase-header">
          <div className="section-badge light-badge">
            <span className="badge-icon">
              <img src={imgIcon} alt="" width={16} height={16} />
            </span>
            <span>Selected work</span>
          </div>

          <h2>Featured projects &amp; creative works</h2>

          <p>
            We don't just build websites; we create digital experiences that resonate with
            users and drive long-term business growth.
          </p>
        </div>

        <div className="work-grid">
          {workItems.map((item, index) => (
            <a href={item.href} key={item.title} className={`work-card project-${index + 1}`} data-cursor="VIEW">
              <div className="work-image-wrap">
                <img src={item.image} alt={item.title} width={720} height={382} />
                <span className="project-overlay">VIEW PROJECT ↗</span>
              </div>
              <div className="work-meta">
                <span>{item.title}</span>
                <small>{item.type}</small>
              </div>
            </a>
          ))}
        </div>

        <a className="all-cases" href="/projects">
          <span className="all-cases-icon">
            <img src={imgIcon2} alt="" width={32} height={32} />
          </span>
          <span className="btn-content-block">
            <span className="btn-inner-default">All Cases</span>
            <span className="btn-inner-hover" aria-hidden="true">All Cases</span>
          </span>
          <em>(05)</em>
        </a>
      </section>

      <section className="pricing-section">
        <div className="pricing-header">
          <div className="section-badge light-badge dark-badge-with-bg">
            <span className="badge-icon">
              <img src={imgIcon} alt="" width={16} height={16} />
            </span>
            <span>Pricing Plans</span>
          </div>

          <h2>Ready to scale your brand?</h2>
          <div className="billing-toggle" role="tablist" aria-label="Billing cycle">
            <button type="button" className={billingCycle === 'monthly' ? 'selected' : ''} onClick={() => setBillingCycle('monthly')}>Monthly</button>
            <button type="button" className={billingCycle === 'annual' ? 'selected' : ''} onClick={() => setBillingCycle('annual')}>Annualy</button>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`plan-card ${plan.accent ? 'accent' : ''} ${plan.custom ? 'custom-plan' : ''}`}>
              {plan.accent && <span className="popular-badge">Popular</span>}
              <div className="plan-top">
                <div className="plan-icon-wrap">
                  <img src={imgIcon3} alt="" width={16} height={16} />
                </div>
                <span>{plan.name}</span>
              </div>

              <div className="plan-price-block">
                <h3>{plan.custom ? plan.price : (billingCycle === 'annual' ? (plan.name === 'Focus' ? '$14,500 /yr' : '$29,500 /yr') : plan.price)}</h3>
                <p>{plan.blurb}</p>
              </div>

              <ul className="feature-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={`${plan.name}-${feature}-${featureIndex}`}>
                    <span className="feature-icon">
                      <img src={[imgIcon4, imgIcon5, imgIcon6, imgIcon7, imgIcon8][featureIndex]} alt="" width={24} height={24} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={plan.href} className={`cta-button ${plan.accent ? 'red-cta' : 'dark-cta'}`}>
                <span className="btn-content-block">
                  <span className="btn-inner-default">{plan.cta}</span>
                  <span className="btn-inner-hover" aria-hidden="true">{plan.cta}</span>
                </span>
                <span className="arrow-icon">
                  <img src={imgImage} alt="" width={14} height={16} />
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-heading">
          <div>
            <div className="section-badge light-badge">
              <span className="badge-icon"><img src={imgIcon} alt="" width={16} height={16} /></span>
              <span>FAQ</span>
            </div>
            <h2>Got questions? We’ve got answers</h2>
            <p>Everything you need to know about our process, pricing,<br />and how we work together</p>
          </div>

          <div className="faq-list">
            {faqItems.map((question, index) => (
              <div key={question} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span>{question}</span>
                  <span className="faq-toggle" aria-hidden="true"><i /></span>
                </button>
                {openFaq === index && <p>We shape every engagement around your goals, moving from strategy to thoughtful design and a clear delivery plan.</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-heading">
          <div>
            <div className="section-badge light-badge">
              <span className="badge-icon"><img src={imgIcon} alt="" width={16} height={16} /></span>
              <span>Collaborations</span>
            </div>
            <h2>Why they love working with us</h2>
          </div>
          <p>We don't just finish projects; we build success together. Here is what they think of us</p>
        </div>

        <div className="testimonial-track">
          {testimonials.map((item) => (
            <article key={item.author} className="testimonial-card" data-cursor="DRAG">
              <div className="testimonial-top">
                <img className="testimonial-author" src={item.image} alt="" width={102} height={82} />
                <img className="testimonial-logo" src={item.logo} alt="" width={140} height={50} />
              </div>
              <img className="quote-icon" src={imgQuote} alt="" width={28} height={28} />
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-person">
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="testimonial-dots" aria-label="Testimonial slides">
          {testimonials.map((item, index) => <button key={item.author} type="button" className={index === 0 ? 'selected' : ''} aria-label={`Show testimonial ${index + 1}`} />)}
        </div>
      </section>

      <section className="journal-section">
        <div className="journal-heading">
          <div>
            <div className="section-badge light-badge">
              <span className="badge-icon"><img src={imgIcon} alt="" width={16} height={16} /></span>
              <span>The Journal</span>
            </div>
            <h2>Stories, strategies,<br /><span>and digital thinking.</span></h2>
          </div>
          <a href="/blogs" className="view-blogs">
            <span className="arrow-icon">↗</span>
            <span className="btn-content-block">
              <span className="btn-inner-default">View All Blogs</span>
              <span className="btn-inner-hover" aria-hidden="true">View All Blogs</span>
            </span>
          </a>
        </div>

        <div className="blog-grid">
          {blogItems.map((item) => (
            <article key={item.title} className="blog-card">
              <div className="blog-image"><img src={item.image} alt="" width={460} height={280} /></div>
              <div className="blog-meta"><span>{item.category}</span><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <a href={item.href}>Read Article <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="footer-callout">
        <div className="section-badge light-badge">
          <span className="badge-icon"><img src={imgIcon} alt="" width={16} height={16} /></span>
          <span>Get Started</span>
        </div>
        <div className="footer-header">
          <h2>Transform Your Ideas Today</h2>
          <a href="/contact" className="cta-button red-cta large-footer-button">
            <span className="btn-content-block">
              <span className="btn-inner-default">Book a Consultation</span>
              <span className="btn-inner-hover" aria-hidden="true">Book a Consultation</span>
            </span>
            <span className="arrow-icon">
              <img src={imgImage1} alt="" width={14} height={16} />
            </span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h2>Stay updated with Rise news</h2>
            <form className={`newsletter-form ${newsletterSent ? 'sent' : ''}`} onSubmit={(event) => { event.preventDefault(); setNewsletterSent(true) }}>
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
            <div><a href="/">Home</a><a href="/about">Studio</a><a href="/projects">Projects</a><a href="/career">Career</a><a href="/blogs">Blog</a></div>
            <div><a href="/career/digital-pr-executive">Career Single</a><a href="/projects/xenitho">Projects Single</a><a href="/blogs/the-power-of-minimalist-design">Blogs Single</a><a href="/pricing">Pricing</a><a href="/contact">Contact</a></div>
            <div><a href="/utility-pages/style-guide">Style Guide</a><a href="/utility-pages/changelog">Changelog</a><a href="/utility-pages/license">License</a><a href="/401">Password</a><a href="/404">404</a></div>
          </div>
        </div>
        <a href="/"><img className="footer-logo" src={imgFooterLogo} alt="Stodio Agency" width={1340} height={134} /></a>
        <div className="footer-bottom"><span>Stodio © 2025. All rights reserved. Powered By Webflow.</span><span><a href="/utility-pages/privacy-policy">Privacy Policy</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="/utility-pages/terms-conditions">Terms &amp; Conditions</a></span></div>
      </footer>
    </div>
  )
}

export default App

