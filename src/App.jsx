'use client'

import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const imgImageHeroBgImage = 'https://www.figma.com/api/mcp/asset/7aa0cd78-0ec8-43eb-982b-833a11cde88e.png'
const imgVector = 'https://www.figma.com/api/mcp/asset/ee49d2f0-2198-4139-9f5d-12fb724f113a.png'
const imgContainer = 'https://www.figma.com/api/mcp/asset/28d31aef-3947-4bea-a8d8-98170c7b2903.png'
const imgContainer1 = 'https://www.figma.com/api/mcp/asset/cacb90c8-042b-44fd-adfc-9ae81adfca46.png'
const imgContainer2 = 'https://www.figma.com/api/mcp/asset/b626d004-8295-45ea-b6f6-9f56ae4c05bb.png'
const imgContainer3 = 'https://www.figma.com/api/mcp/asset/fe7a0082-37a9-4dbc-9098-f8680b9120ba.png'
const imgVector1 = 'https://www.figma.com/api/mcp/asset/6118ede9-33fc-49bb-90f3-d19d16db3c8b.png'
const imgImageGalleryImage = 'https://www.figma.com/api/mcp/asset/11033eee-cb60-482d-8e41-9566415f8f08.png'
const imgImageGalleryImage1 = 'https://www.figma.com/api/mcp/asset/453cddb8-4957-4c5a-9c3b-e98dc2ce3c63.png'
const imgImageGalleryImage2 = 'https://www.figma.com/api/mcp/asset/4b9a62bf-770e-46b6-a3a6-71122a557f58.png'
const imgImageGalleryImage3 = 'https://www.figma.com/api/mcp/asset/e8543a64-4950-43d0-8782-95d1116ca31b.png'
const imgImageGalleryImage4 = 'https://www.figma.com/api/mcp/asset/61702b6e-c898-4999-af28-fd368352a675.png'
const imgIcon = 'https://www.figma.com/api/mcp/asset/ee0671e9-b40c-41e7-9553-33b2f2bc5460.svg'
const imgImage = 'https://www.figma.com/api/mcp/asset/57c3c196-c365-4fff-b473-a1dd71e0afc1.svg'
const imgImage1 = 'https://www.figma.com/api/mcp/asset/e50ecbc6-025a-4bb0-85b7-87bd7d49770c.svg'
const imgIcon1 = 'https://www.figma.com/api/mcp/asset/e8d82d82-e31e-46fe-ad53-58e4dfd29c95.svg'
const imgImageNavDropdownIcon = 'https://www.figma.com/api/mcp/asset/18ca5014-bffc-4281-9ab8-3dd550ed8a4c.svg'
const imgIcon2 = 'https://www.figma.com/api/mcp/asset/b63b0863-fe8f-412f-a954-a3e755c9bde1.svg'
const imgIcon3 = 'https://www.figma.com/api/mcp/asset/d6585437-a500-4b44-ad22-ef0be6a22af4.svg'
const imgIcon4 = 'https://www.figma.com/api/mcp/asset/95809f8d-8f5a-462f-894d-c7fa00e92e53.svg'
const imgIcon5 = 'https://www.figma.com/api/mcp/asset/0bd02d42-2c1c-443a-98a6-257b79b27cb0.svg'
const imgIcon6 = 'https://www.figma.com/api/mcp/asset/07c492fd-1cc4-4502-a727-4eef673ea295.svg'
const imgIcon7 = 'https://www.figma.com/api/mcp/asset/90480e8e-8e52-408f-9350-3d636b108701.svg'
const imgIcon8 = 'https://www.figma.com/api/mcp/asset/67ea7912-0e68-4cdf-93c5-7b7dfdab640d.svg'
const imgVector2 = 'https://www.figma.com/api/mcp/asset/a55b1bb7-a22c-4696-8095-a4b23b463c89.png'
const imgVector3 = 'https://www.figma.com/api/mcp/asset/8b7c07bb-7ce9-451d-b6ec-71601f8fd3e1.png'
const imgVector4 = 'https://www.figma.com/api/mcp/asset/e1620856-9570-475c-8e09-c1b9a134631b.png'
const imgImageBlogsThumbnailImage = 'https://www.figma.com/api/mcp/asset/b7bfa1dc-47fa-4e79-afba-6eddf41c310d.png'
const imgImageBlogsThumbnailImage1 = 'https://www.figma.com/api/mcp/asset/57898e2d-ba90-4491-a4ec-da222a682dae.png'
const imgImageBlogsThumbnailImage2 = 'https://www.figma.com/api/mcp/asset/bf681570-ee8c-4f7c-acad-601ef1cf780a.png'
const imgImageTestimonialCardLogo = 'https://www.figma.com/api/mcp/asset/3a17c975-8e7e-401b-bea8-ba083e88dbb2.svg'
const imgImageTestimonialCardLogo1 = 'https://www.figma.com/api/mcp/asset/76bb9b2a-dbba-4403-b9ad-7749b5f98c14.svg'
const imgQuote = 'https://www.figma.com/api/mcp/asset/02f08d66-5309-42e7-87b9-3952559cf5e5.svg'
const imgFooterLogo = 'https://www.figma.com/api/mcp/asset/26dec3e6-f9fa-4ed2-bece-86a7a9317c8b.svg'
const imgPartner1 = 'https://www.figma.com/api/mcp/asset/ad5107a2-bb9b-4406-a194-8f19d98c17fe.svg'
const imgPartner2 = 'https://www.figma.com/api/mcp/asset/1bd976ac-853e-479d-bb99-8a5cd1d0f176.svg'
const imgPartner3 = 'https://www.figma.com/api/mcp/asset/31e82b70-0fb2-4052-a242-6513a3f8f887.svg'
const imgPartner4 = 'https://www.figma.com/api/mcp/asset/a7713976-d2e4-4360-9f43-abdbbefa5b21.svg'

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

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => setIsLoading(false), 2500)
    return () => window.clearTimeout(loaderTimer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const root = appRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!root) return undefined

    const context = gsap.context(() => {
      const reveal = (targets, vars = {}) => {
        gsap.from(targets, {
          autoAlpha: 0,
          y: 48,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: targets,
            start: 'top 86%',
            once: true,
          },
          ...vars,
        })
      }

      if (reducedMotion) {
        gsap.set(root.querySelectorAll('[data-motion]'), { clearProps: 'all' })
        return
      }

      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTimeline
        .from('.hero-bg img', { scale: 1.08, duration: 1.6, ease: 'power2.out' })
        .from('.topbar', { autoAlpha: 0, y: -20, duration: 0.7 }, '-=1.1')
        .from('.headline-badge', { autoAlpha: 0, y: 24, duration: 0.7 }, '-=0.35')
        .from('.hero-line-inner', { yPercent: 115, duration: 1, stagger: 0.08 }, '-=0.35')
        .from('.hero-subtitle', { autoAlpha: 0, y: 24, duration: 0.65 }, '-=0.55')
        .from('.hero-meta-row span', { autoAlpha: 0, y: 18, duration: 0.55, stagger: 0.08 }, '-=0.35')
        .from('.hero-aside', { autoAlpha: 0, y: 32, duration: 0.75 }, '-=0.25')

      gsap.to('.hero-bg img', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: '.hero-shell', start: 'top top', end: 'bottom top', scrub: true },
      })

      gsap.to('.hero-bg img', { scale: 1.05, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' })

      reveal('.trust-strip')
      reveal('.about-section')
      reveal('.gallery-card', { y: 60, stagger: 0.08 })
      reveal('.stats-section')
      reveal('.services-panel .section-heading-row')
      reveal('.service-row', { x: -32, y: 0, stagger: 0.1 })
      reveal('.showcase-header')
      reveal('.work-card', { y: 60, stagger: 0.12 })
      reveal('.pricing-header')
      reveal('.plan-card', { y: 50, stagger: 0.14 })
      reveal('.faq-heading > div:first-child')
      reveal('.faq-item', { x: 32, y: 0, stagger: 0.08 })
      reveal('.testimonials-heading')
      reveal('.testimonial-card', { y: 54, stagger: 0.12 })
      reveal('.journal-heading')
      reveal('.blog-card', { y: 54, stagger: 0.12 })
      reveal('.footer-callout', { scale: 0.97, y: 24 })
      reveal('.site-footer', { y: 36 })

      gsap.utils.toArray('.work-image-wrap').forEach((imageWrap) => {
        gsap.fromTo(imageWrap, { clipPath: 'inset(12% 0 12% 0)' }, {
          clipPath: 'inset(0% 0 0% 0)',
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: { trigger: imageWrap, start: 'top 88%', once: true },
        })
        gsap.fromTo(imageWrap.querySelector('img'), { scale: 1.1 }, {
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: { trigger: imageWrap, start: 'top 88%', once: true },
        })
      })

      gsap.to('.gallery-track', {
        xPercent: -24,
        ease: 'none',
        scrollTrigger: { trigger: '.gallery-section', start: 'top bottom', end: 'bottom top', scrub: true },
      })

      gsap.utils.toArray('.stat-value').forEach((value) => {
        const target = value.dataset.value
        const number = Number.parseInt(target, 10)
        if (Number.isNaN(number)) return
        const counter = { value: 0 }
        gsap.to(counter, {
          value: number,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: value, start: 'top 82%', once: true },
          onUpdate: () => {
            value.textContent = `${Math.round(counter.value)}${target.includes('%') ? '%' : target.includes('+') ? '+' : ''}`
          },
        })
      })

    }, root)

    if (reducedMotion) return () => context.revert()

    const lenis = new Lenis({ lerp: 0.08, autoRaf: false })
    let frameId
    const update = (time) => {
      lenis.raf(time)
      ScrollTrigger.update()
      frameId = requestAnimationFrame(update)
    }
    frameId = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
      context.revert()
    }
  }, [])

  useEffect(() => {
    const root = appRef.current
    const cursor = cursorRef.current
    const cursorLabel = cursorLabelRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touchDevice = window.matchMedia('(pointer: coarse)').matches

    if (!root || !cursor || !cursorLabel || reducedMotion || touchDevice) return undefined

    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' })
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' })
    const handlePointerMove = (event) => {
      moveX(event.clientX)
      moveY(event.clientY)
    }
    const interactive = root.querySelectorAll('button, a, [data-cursor]')
    const enter = (event) => {
      cursor.classList.add('cursor-active')
      cursorLabel.textContent = event.currentTarget.dataset.cursor || 'VIEW'
    }
    const leave = () => {
      cursor.classList.remove('cursor-active')
      cursorLabel.textContent = ''
    }

    window.addEventListener('pointermove', handlePointerMove)
    interactive.forEach((element) => {
      element.addEventListener('pointerenter', enter)
      element.addEventListener('pointerleave', leave)
    })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      interactive.forEach((element) => {
        element.removeEventListener('pointerenter', enter)
        element.removeEventListener('pointerleave', leave)
      })
    }
  }, [])

  return (
    <div className="stodio-app" ref={appRef}>
      {isLoading && (
        <div className="page-loader" role="status" aria-label="Loading portfolio">
          <div className="loader-wordmark">DEVSIFY</div>
          <div className="loader-progress"><span /></div>
          <div className="loader-percent">100</div>
        </div>
      )}
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
        <span ref={cursorLabelRef} />
      </div>
      <div className="hero-shell">
        <div className="hero-bg">
          <img src={imgImageHeroBgImage} alt="" />
        </div>

        <header className={`topbar ${navScrolled ? 'scrolled' : ''}`}>
          <div className="brand-mark" aria-label="Stodio agency logo">
            <a href="/" aria-label="Stodio home"><img src={imgIcon1} alt="Stodio logo" /></a>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <div key={item.label} className={`nav-item ${index === 0 ? 'active' : ''}`} onMouseEnter={() => item.label === 'Pages' && setPagesOpen(true)} onMouseLeave={() => item.label === 'Pages' && setPagesOpen(false)}>
                {item.label === 'Work' && <span className="nav-badge">05</span>}
                {item.label === 'Pages' ? (
                  <>
                    <span>{item.label}</span>
                    <img src={imgImageNavDropdownIcon} alt="" className="nav-dropdown" />
                    {pagesOpen && <div className="pages-menu">{pageLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>}
                  </>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </div>
            ))}
          </nav>

          <a href="/contact" className="cta-button light-cta">
            <span className="cta-icon">
              <img src={imgVector} alt="" />
            </span>
            <span>Book a call</span>
          </a>
        </header>

        <div className="hero-content">
          <div className="headline-badge">
            <span className="badge-icon">
              <img src={imgIcon} alt="" />
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
                <span>View Projects</span>
                <span className="arrow-icon">
                  <img src={imgImage} alt="" />
                </span>
              </a>

              <a href="/contact" className="cta-button white-cta">
                <span>Reach Out</span>
                <span className="arrow-icon">
                  <img src={imgImage1} alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="trust-strip">
        <div className="trust-note"><span className="trust-mark">✳</span><span>We’ve done 500+ enterprise and business consulting.</span></div>
        <div className="logo-marquee" aria-label="Studio partners">
          <div className="logo-marquee-track">
            {[imgPartner1, imgPartner2, imgPartner3, imgPartner4, imgPartner1, imgPartner2, imgPartner3, imgPartner4].map((logo, index) => <img key={`${logo}-${index}`} src={logo} alt="" />)}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-copy">
          <div className="section-badge light-badge"><span className="badge-icon"><img src={imgIcon} alt="" /></span><span>Who we are</span></div>
          <h2>We build search-first digital systems to help category leaders.</h2>
        </div>
        <a className="about-link" href="/about"><span>↗</span> About The Studio</a>
      </section>

      <section className="gallery-section" aria-label="Studio gallery">
        <div className="gallery-track">
          {[...galleryItems, ...galleryItems].map((image, index) => <div className="gallery-card" key={`${image}-${index}`}><img src={image} alt="Studio project detail" /></div>)}
        </div>
      </section>

      <section className="stats-section">
        <div className="section-badge light-badge"><span className="badge-icon"><img src={imgIcon} alt="" /></span><span>By the numbers</span></div>
        <div className="stats-grid">
          {statItems.map((stat) => <article className="stat-item" key={stat.label}><strong className="stat-value" data-value={stat.value}>{stat.value}</strong><div className="stat-divider" /><h3>{stat.label}</h3><p>{stat.description}</p></article>)}
        </div>
      </section>

      <section className="services-panel">
        <div className="section-heading-row">
          <div className="service-heading-content">
            <div className="section-badge dark-badge">
              <span className="badge-icon">
                <img src={imgIcon} alt="" />
              </span>
              <span>Services</span>
            </div>
            <h2>Everything <span className="service-inline-image"><img src={imgVector1} alt="" /></span> your<br />brand needs</h2>
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
              <img src={imgIcon} alt="" />
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
                <img src={item.image} alt={item.title} />
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
            <img src={imgIcon2} alt="" />
          </span>
          <span>All Cases</span>
          <em>(05)</em>
        </a>
      </section>

      <section className="pricing-section">
        <div className="pricing-header">
          <div className="section-badge light-badge dark-badge-with-bg">
            <span className="badge-icon">
              <img src={imgIcon} alt="" />
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
                  <img src={imgIcon3} alt="" />
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
                      <img src={[imgIcon4, imgIcon5, imgIcon6, imgIcon7, imgIcon8][featureIndex]} alt="" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={plan.href} className={`cta-button ${plan.accent ? 'red-cta' : 'dark-cta'}`}>
                <span>{plan.cta}</span>
                <span className="arrow-icon">
                  <img src={imgImage} alt="" />
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
              <span className="badge-icon"><img src={imgIcon} alt="" /></span>
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
              <span className="badge-icon"><img src={imgIcon} alt="" /></span>
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
                <img className="testimonial-author" src={item.image} alt="" />
                <img className="testimonial-logo" src={item.logo} alt="" />
              </div>
              <img className="quote-icon" src={imgQuote} alt="" />
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
              <span className="badge-icon"><img src={imgIcon} alt="" /></span>
              <span>The Journal</span>
            </div>
            <h2>Stories, strategies,<br /><span>and digital thinking.</span></h2>
          </div>
          <a href="/blogs" className="view-blogs">↗ <span>View All Blogs</span></a>
        </div>

        <div className="blog-grid">
          {blogItems.map((item) => (
            <article key={item.title} className="blog-card">
              <div className="blog-image"><img src={item.image} alt="" /></div>
              <div className="blog-meta"><span>{item.category}</span><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <a href={item.href}>Read Article <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="footer-callout">
        <div className="section-badge light-badge">
          <span className="badge-icon"><img src={imgIcon} alt="" /></span>
          <span>Get Started</span>
        </div>
        <div className="footer-header">
          <h2>Transform Your Ideas Today</h2>
          <a href="/contact" className="cta-button red-cta large-footer-button">
            <span>Book a Consultation</span>
            <span className="arrow-icon">
              <img src={imgImage1} alt="" />
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
              <button type="submit" aria-label="Subscribe">↗</button>
            </form>
            {newsletterSent && <p className="newsletter-success">Thanks, you&apos;re on the list.</p>}
            <div className="social-links">
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
              <a href="https://www.instagram.com/" aria-label="Instagram">◎</a>
              <a href="https://web.facebook.com/" aria-label="Facebook">f</a>
              <a href="https://x.com/" aria-label="X">𝕏</a>
              <a href="https://www.youtube.com/" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div className="footer-links">
            <div><a href="/">Home</a><a href="/about">Studio</a><a href="/projects">Projects</a><a href="/career">Career</a><a href="/blogs">Blog</a></div>
            <div><a href="/career/digital-pr-executive">Career Single</a><a href="/projects/xenitho">Projects Single</a><a href="/blogs/the-power-of-minimalist-design">Blogs Single</a><a href="/pricing">Pricing</a><a href="/contact">Contact</a></div>
            <div><a href="/utility-pages/style-guide">Style Guide</a><a href="/utility-pages/changelog">Changelog</a><a href="/utility-pages/license">License</a><a href="/401">Password</a><a href="/404">404</a></div>
          </div>
        </div>
        <a href="/"><img className="footer-logo" src={imgFooterLogo} alt="Stodio Agency" /></a>
        <div className="footer-bottom"><span>Stodio © 2025. All rights reserved. Powered By Webflow.</span><span><a href="/utility-pages/privacy-policy">Privacy Policy</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="/utility-pages/terms-conditions">Terms &amp; Conditions</a></span></div>
      </footer>
    </div>
  )
}

export default App
