'use client'

import { useEffect, useLayoutEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const EASE_STODIO = 'cubic-bezier(0.16, 1, 0.3, 1)'

function onHover(el, enter, leave) {
  el.addEventListener('mouseenter', enter)
  el.addEventListener('mouseleave', leave)
  return () => {
    el.removeEventListener('mouseenter', enter)
    el.removeEventListener('mouseleave', leave)
  }
}

function reveal(targets, fromVars = {}, extraVars = {}) {
  const nodes = typeof targets === 'string' ? gsap.utils.toArray(targets) : targets
  if (!nodes.length) return

  gsap.fromTo(
    nodes,
    { autoAlpha: 0, filter: 'blur(5px)', y: 50, ...fromVars },
    {
      autoAlpha: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: nodes[0], start: 'top 88%', once: true },
      ...extraVars,
    },
  )
}

function bindButtonRolls(root) {
  const cleanups = []
  root.querySelectorAll('.cta-button, .about-link, .all-cases, .view-blogs').forEach((btn) => {
    const inner = btn.querySelector('.btn-inner-default')
    const abs = btn.querySelector('.btn-inner-hover')
    const arrowEl = btn.querySelector('.arrow-icon')
    if (!inner || !abs) return

    const tl = gsap.timeline({ paused: true })
    tl.to(inner, { yPercent: -100, duration: 0.45, ease: EASE_STODIO }, 0)
      .fromTo(abs, { yPercent: 100 }, { yPercent: 0, duration: 0.45, ease: EASE_STODIO }, 0)
    if (arrowEl) tl.to(arrowEl, { x: 4, y: -4, duration: 0.35, ease: EASE_STODIO }, 0)

    const press = () => gsap.to(btn, { scale: 0.97, duration: 0.12, ease: 'power2.out' })
    const release = () => gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' })
    btn.addEventListener('mousedown', press)
    btn.addEventListener('mouseup', release)
    btn.addEventListener('mouseleave', release)
    cleanups.push(onHover(btn, () => tl.play(), () => tl.reverse()))
    cleanups.push(() => {
      btn.removeEventListener('mousedown', press)
      btn.removeEventListener('mouseup', release)
      btn.removeEventListener('mouseleave', release)
    })
  })
  return cleanups
}

function bindImageZooms(root) {
  return Array.from(root.querySelectorAll('[data-zoom]')).map((el) => {
    const img = el.querySelector('img:not(.contact-photo-overlay)')
    if (!img) return () => {}
    return onHover(
      el,
      () => gsap.to(img, { scale: 1.06, duration: 0.6, ease: 'power2.out' }),
      () => gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' }),
    )
  })
}

function bindMagnetic(root) {
  const cleanups = []
  root.querySelectorAll('.cta-button').forEach((btn) => {
    const move = (event) => {
      const box = btn.getBoundingClientRect()
      const x = (event.clientX - box.left - box.width / 2) * 0.18
      const y = (event.clientY - box.top - box.height / 2) * 0.18
      gsap.to(btn, { x, y, duration: 0.35, ease: EASE_STODIO })
    }
    const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.45, ease: EASE_STODIO })
    btn.addEventListener('mousemove', move)
    btn.addEventListener('mouseleave', leave)
    cleanups.push(() => {
      btn.removeEventListener('mousemove', move)
      btn.removeEventListener('mouseleave', leave)
    })
  })
  return cleanups
}

function bindCounters(root) {
  root.querySelectorAll('.stat-value').forEach((el) => {
    const rawVal = el.dataset.value || el.textContent.trim()
    const match = rawVal.match(/[\d.]+/)
    if (!match) return
    const num = Number.parseFloat(match[0])
    if (Number.isNaN(num)) return
    const prefix = rawVal.slice(0, rawVal.indexOf(match[0]))
    const suffix = rawVal.slice(rawVal.indexOf(match[0]) + match[0].length)
    const obj = { v: 0 }
    const decimals = match[0].includes('.') ? match[0].split('.')[1].length : 0
    const pad = /^\d+$/.test(match[0]) && match[0].startsWith('0') ? match[0].length : 0

    gsap.to(obj, {
      v: num,
      duration: 2.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate() {
        let next = decimals ? obj.v.toFixed(decimals) : String(Math.round(obj.v))
        if (pad) next = String(Math.round(obj.v)).padStart(pad, '0')
        el.textContent = `${prefix}${next}${suffix}`
      },
    })
  })
}

function bindShared(root) {
  const cleanups = []
  const logo = root.querySelector('.footer-logo')
  if (logo) {
    gsap.fromTo(
      logo,
      { y: 40, scale: 0.94, autoAlpha: 0.7 },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: logo, start: 'top 96%', once: true },
      },
    )
  }
  root.querySelectorAll('.footer-links a').forEach((link) => {
    cleanups.push(
      onHover(
        link,
        () => gsap.to(link, { x: 4, color: '#de322d', duration: 0.25, ease: 'power2.out' }),
        () => gsap.to(link, { x: 0, color: '#fff', duration: 0.25, ease: 'power2.out' }),
      ),
    )
  })
  return cleanups
}

function setupStudio(root) {
  const cleanups = []

  const heroTl = gsap.timeline()
  heroTl
    .fromTo('.studio-topbar', { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    .fromTo(
      '.studio-hero .section-badge',
      { autoAlpha: 0, filter: 'blur(5px)', y: 50 },
      { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.4',
    )
    .fromTo(
      '.studio-hero h1 > span',
      { autoAlpha: 0, filter: 'blur(5px)', y: 50 },
      { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
      '-=0.35',
    )
    .fromTo(
      '.studio-hero-meta span',
      { autoAlpha: 0, filter: 'blur(5px)', y: 50 },
      { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
      '-=0.4',
    )
    .fromTo(
      '.studio-hero-line img',
      { scale: 1.25 },
      { scale: 1, duration: 1.3, ease: 'power2.out' },
      '-=0.8',
    )

  reveal('.studio-story .section-badge', {}, { stagger: 0 })
  reveal('.studio-authors', {}, { stagger: 0 })
  reveal('.studio-story-copy p', {}, { stagger: 0.12 })

  reveal('.studio-numbers .section-badge', {}, { stagger: 0 })
  reveal('.studio-stats-grid article', {}, { stagger: 0.12 })

  reveal('.studio-drives .section-badge', {}, { stagger: 0 })
  reveal('.studio-drives h2 > span', {}, { stagger: 0.1 })

  root.querySelectorAll('.studio-showcase > div').forEach((el, index) => {
    const rot = Number.parseFloat(el.dataset.rotate) || 0
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 60, rotation: rot },
      {
        autoAlpha: 1,
        y: 0,
        rotation: rot,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.08,
        scrollTrigger: { trigger: '.studio-showcase', start: 'top 88%', once: true },
      },
    )
  })
  gsap.to('.studio-showcase img', {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '.studio-showcase', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
  })
  gsap.fromTo(
    '.studio-drives-line img',
    { scale: 1.2 },
    {
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.studio-drives h2', start: 'top 88%', once: true },
    },
  )

  reveal('.studio-method-head', {}, { stagger: 0 })
  gsap.fromTo(
    '.studio-method-grid article',
    { autoAlpha: 0, y: 50, filter: 'blur(5px)' },
    {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: '.studio-method-grid', start: 'top 88%', once: true },
    },
  )
  root.querySelectorAll('.studio-method-grid article').forEach((card) => {
    cleanups.push(
      onHover(
        card,
        () => gsap.to(card, { y: -8, duration: 0.4, ease: 'power2.out' }),
        () => gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' }),
      ),
    )
  })

  reveal('.studio-clients .section-badge', {}, { stagger: 0 })
  reveal('.studio-client-grid > div', { y: 30 }, { stagger: 0.06, duration: 0.7 })

  gsap.fromTo(
    '.studio-foundation-photo',
    { clipPath: 'inset(12% 0 12% 0)' },
    {
      clipPath: 'inset(0% 0 0% 0)',
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: { trigger: '.studio-foundation-photo', start: 'top 88%', once: true },
    },
  )
  gsap.fromTo(
    '.studio-foundation-photo img',
    { scale: 1.12 },
    {
      scale: 1,
      duration: 1.3,
      ease: 'power4.out',
      scrollTrigger: { trigger: '.studio-foundation-photo', start: 'top 88%', once: true },
    },
  )
  reveal('.studio-foundation-copy', {}, { stagger: 0 })
  gsap.fromTo(
    '.studio-foundation-copy li',
    { autoAlpha: 0, x: 24 },
    {
      autoAlpha: 1,
      x: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.studio-foundation-copy ul', start: 'top 90%', once: true },
    },
  )
  const foundationPanels = root.querySelectorAll('.studio-foundation-desc')
  gsap.set(foundationPanels, { height: 0, autoAlpha: 0 })
  const openFoundation = (item) => {
    root.querySelectorAll('.studio-foundation-copy li').forEach((node) => node.classList.remove('is-active'))
    item.classList.add('is-active')
    const desc = item.querySelector('.studio-foundation-desc')
    gsap.to(foundationPanels, { height: 0, autoAlpha: 0, duration: 0.3, ease: 'power2.out' })
    if (desc) gsap.to(desc, { height: 'auto', autoAlpha: 1, duration: 0.45, ease: 'power2.out' })
  }
  root.querySelectorAll('.studio-foundation-copy li').forEach((item, index) => {
    const activate = () => openFoundation(item)
    item.addEventListener('mouseenter', activate)
    item.addEventListener('focus', activate)
    if (index === 0) openFoundation(item)
    cleanups.push(() => {
      item.removeEventListener('mouseenter', activate)
      item.removeEventListener('focus', activate)
    })
  })
  gsap.to('.studio-foundation-photo img', {
    yPercent: 10,
    ease: 'none',
    scrollTrigger: { trigger: '.studio-foundation-photo', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
  })

  reveal('.studio-team-head > div', { filter: 'blur(0px)' }, { stagger: 0.1, duration: 0.8 })
  reveal('.studio-team-head p', { filter: 'blur(0px)' }, { duration: 0.7 })
  gsap.fromTo(
    '.studio-team-grid > *',
    { autoAlpha: 0, y: 40, filter: 'blur(5px)' },
    {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.studio-team-grid', start: 'top 88%', once: true },
    },
  )
  root.querySelectorAll('.studio-team-photo').forEach((el) => {
    const meta = el.querySelector('.studio-team-meta')
    if (!meta) return
    gsap.set(meta, { autoAlpha: 0, y: 16 })
    cleanups.push(
      onHover(
        el,
        () => gsap.to(meta, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' }),
        () => gsap.to(meta, { autoAlpha: 0, y: 16, duration: 0.35, ease: 'power2.out' }),
      ),
    )
  })

  reveal('.studio-page .footer-callout', { scale: 0.97, y: 30 }, { stagger: 0 })
  reveal('.studio-page .site-footer', { y: 36 }, { stagger: 0 })
  return cleanups
}

function setupContact(root) {
  const cleanups = []

  const heroTl = gsap.timeline()
  heroTl
    .fromTo('.contact-topbar', { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    .fromTo(
      '.contact-copy .section-badge',
      { autoAlpha: 0, filter: 'blur(5px)', y: 50 },
      { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.4',
    )
    .fromTo(
      '.contact-copy h1',
      { autoAlpha: 0, filter: 'blur(5px)', y: 50 },
      { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.35',
    )
    .fromTo(
      '.contact-intro',
      { autoAlpha: 0, filter: 'blur(5px)', y: 50 },
      { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.5',
    )
    .fromTo(
      '.contact-meta > div',
      { autoAlpha: 0, filter: 'blur(5px)', y: 50 },
      { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.4',
    )
    .fromTo(
      '.contact-form label, .contact-submit',
      { autoAlpha: 0, filter: 'blur(5px)', y: 50 },
      { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' },
      '-=0.35',
    )

  gsap.fromTo(
    '.contact-photo',
    { clipPath: 'inset(10% 0 10% 0)' },
    { clipPath: 'inset(0% 0 0% 0)', duration: 1.3, ease: 'power4.out' },
  )
  gsap.fromTo('.contact-photo img:not(.contact-photo-overlay)', { scale: 1.14 }, { scale: 1, duration: 1.4, ease: 'power2.out' })

  const play = root.querySelector('.contact-play')
  if (play) {
    cleanups.push(
      onHover(
        play,
        () => gsap.to(play, { scale: 1.08, duration: 0.3, ease: 'power2.out' }),
        () => gsap.to(play, { scale: 1, duration: 0.3, ease: 'power2.out' }),
      ),
    )
  }

  reveal('.office-panel .section-badge', {}, { stagger: 0 })
  gsap.fromTo(
    '.office-row',
    { autoAlpha: 0, y: 50, filter: 'blur(5px)' },
    {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: '.office-list', start: 'top 88%', once: true },
    },
  )
  root.querySelectorAll('.office-row').forEach((row) => {
    const thumb = row.querySelector('.office-thumb')
    const enter = () => {
      gsap.to(row, { x: 8, duration: 0.35, ease: 'power2.out' })
      if (thumb) gsap.to(thumb, { width: 88, height: 64, duration: 0.45, ease: EASE_STODIO })
    }
    const leave = () => {
      gsap.to(row, { x: 0, duration: 0.35, ease: 'power2.out' })
      if (thumb) gsap.to(thumb, { width: 0, height: 0, duration: 0.45, ease: EASE_STODIO })
    }
    cleanups.push(onHover(row, enter, leave))
  })
  root.querySelectorAll('.contact-form input, .contact-form textarea').forEach((field) => {
    const focus = () => gsap.to(field, { borderColor: '#0a0a0a', y: -2, duration: 0.25, ease: 'power2.out' })
    const blur = () => gsap.to(field, { borderColor: '#e6e6e6', y: 0, duration: 0.25, ease: 'power2.out' })
    field.addEventListener('focus', focus)
    field.addEventListener('blur', blur)
    cleanups.push(() => {
      field.removeEventListener('focus', focus)
      field.removeEventListener('blur', blur)
    })
  })

  reveal('.contact-page .footer-callout', { scale: 0.97, y: 30 }, { stagger: 0 })
  reveal('.contact-page .site-footer', { y: 36 }, { stagger: 0 })
  return cleanups
}

function setupHome(root) {
  const cleanups = []

  const heroTl = gsap.timeline()
  heroTl
    .fromTo('.hero-bg img', { scale: 1.4, transformOrigin: 'center center' }, { scale: 1, duration: 1.8, ease: 'power2.out' })
    .fromTo('.topbar', { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=1.2')
    .fromTo('.headline-badge', { autoAlpha: 0, filter: 'blur(5px)', y: 50 }, { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .fromTo('.hero-line-inner', { autoAlpha: 0, filter: 'blur(5px)', y: 50 }, { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }, '-=0.35')
    .fromTo('.hero-subtitle', { autoAlpha: 0, filter: 'blur(5px)', y: 50 }, { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .fromTo('.hero-meta-row span', { autoAlpha: 0, filter: 'blur(5px)', y: 50 }, { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, '-=0.4')
    .fromTo('.hero-aside', { autoAlpha: 0, filter: 'blur(5px)', y: 50 }, { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')

  gsap.to('.hero-bg img', {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: { trigger: '.hero-shell', start: 'top top', end: 'bottom top', scrub: true },
  })

  reveal('.trust-strip', {}, { duration: 0.7 })
  gsap.to('.trust-mark-star', {
    rotation: 360,
    ease: 'none',
    scrollTrigger: { trigger: '.trust-strip', start: 'top bottom', end: 'bottom top', scrub: 1 },
  })

  reveal('.about-section', {}, { stagger: 0 })
  gsap.to('.gallery-track', {
    xPercent: -20,
    ease: 'none',
    scrollTrigger: { trigger: '.gallery-section', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
  })
  root.querySelectorAll('.gallery-card img').forEach((img) => {
    const parent = img.closest('.gallery-card')
    if (!parent) return
    cleanups.push(
      onHover(
        parent,
        () => gsap.to(img, { scale: 1.06, duration: 0.6, ease: 'power2.out' }),
        () => gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' }),
      ),
    )
  })

  reveal('.stats-section', {}, { stagger: 0 })
  reveal('.stat-item', { y: 50, filter: 'blur(5px)' }, { stagger: 0.12 })

  reveal('.services-panel .section-heading-row', {}, { stagger: 0 })
  gsap.fromTo(
    '.service-row',
    { autoAlpha: 0, x: -32 },
    {
      autoAlpha: 1,
      x: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: '.service-list', start: 'top 85%', once: true },
    },
  )
  root.querySelectorAll('.service-row').forEach((row) => {
    const arrow = row.querySelector('.service-arrow')
    cleanups.push(
      onHover(
        row,
        () => { if (arrow) gsap.to(arrow, { x: 8, duration: 0.3, ease: 'power2.out' }) },
        () => { if (arrow) gsap.to(arrow, { x: 0, duration: 0.3, ease: 'power2.out' }) },
      ),
    )
  })

  reveal('.showcase-header', {}, { stagger: 0 })
  root.querySelectorAll('.work-image-wrap').forEach((wrap) => {
    const img = wrap.querySelector('img')
    gsap.fromTo(
      wrap,
      { clipPath: 'inset(12% 0 12% 0)' },
      { clipPath: 'inset(0% 0 0% 0)', duration: 1.2, ease: 'power4.out', scrollTrigger: { trigger: wrap, start: 'top 88%', once: true } },
    )
    if (img) {
      gsap.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 1.3, ease: 'power4.out', scrollTrigger: { trigger: wrap, start: 'top 88%', once: true } })
      cleanups.push(
        onHover(
          wrap,
          () => gsap.to(img, { scale: 1.06, duration: 0.7, ease: 'power2.out' }),
          () => gsap.to(img, { scale: 1, duration: 0.7, ease: 'power2.out' }),
        ),
      )
    }
  })

  reveal('.pricing-header', {}, { stagger: 0 })
  reveal('.plan-card', { y: 50, filter: 'blur(5px)' }, { stagger: 0.14 })
  root.querySelectorAll('.plan-card').forEach((card) => {
    cleanups.push(
      onHover(
        card,
        () => gsap.to(card, { y: -6, duration: 0.4, ease: 'power2.out' }),
        () => gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' }),
      ),
    )
  })

  reveal('.faq-heading > div:first-child', {}, { stagger: 0 })
  gsap.fromTo(
    '.faq-item',
    { autoAlpha: 0, x: 32 },
    {
      autoAlpha: 1,
      x: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.faq-list', start: 'top 87%', once: true },
    },
  )

  reveal('.testimonials-heading', {}, { stagger: 0 })
  reveal('.testimonial-card', { y: 54, filter: 'blur(5px)' }, { stagger: 0.12 })

  reveal('.journal-heading', {}, { stagger: 0 })
  reveal('.blog-card', { y: 54, filter: 'blur(5px)' }, { stagger: 0.12 })
  root.querySelectorAll('.blog-image img').forEach((img) => {
    const parent = img.closest('.blog-card')
    if (!parent) return
    cleanups.push(
      onHover(
        parent,
        () => gsap.to(img, { scale: 1.06, duration: 0.6, ease: 'power2.out' }),
        () => gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' }),
      ),
    )
  })

  reveal('.footer-callout', { scale: 0.97, y: 30, filter: 'blur(5px)' }, { stagger: 0 })
  reveal('.site-footer', { y: 36 }, { stagger: 0 })
  return cleanups
}

export function useStodioMotion(rootRef, cursorRef, cursorLabelRef, page) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const extraCleanups = []
    const context = gsap.context(() => {
      if (reducedMotion) return
      extraCleanups.push(...bindButtonRolls(root))
      extraCleanups.push(...bindMagnetic(root))
      extraCleanups.push(...bindImageZooms(root))
      extraCleanups.push(...bindShared(root))
      bindCounters(root)
      if (page === 'home') extraCleanups.push(...setupHome(root))
      if (page === 'studio') extraCleanups.push(...setupStudio(root))
      if (page === 'contact') extraCleanups.push(...setupContact(root))
    }, root)

    if (reducedMotion) {
      return () => {
        extraCleanups.filter((fn) => typeof fn === 'function').forEach((fn) => fn())
        context.revert()
      }
    }

    const lenis = new Lenis({
      lerp: page === 'home' ? 0.08 : 0.1,
      smoothWheel: true,
      autoRaf: false,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const ticker = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      extraCleanups.filter((fn) => typeof fn === 'function').forEach((fn) => fn())
      gsap.ticker.remove(ticker)
      lenis.destroy()
      context.revert()
    }
  }, [rootRef, page])

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorLabel = cursorLabelRef.current
    const root = rootRef.current
    const touchDevice = window.matchMedia('(pointer: coarse)').matches
    if (!cursor || !cursorLabel || !root || touchDevice) return undefined

    document.body.style.cursor = 'none'
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })
    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' })
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' })
    const onMove = (event) => {
      moveX(event.clientX)
      moveY(event.clientY)
    }
    window.addEventListener('pointermove', onMove)
    const onDown = () => gsap.to(cursor, { scale: 0.75, duration: 0.12, ease: 'power2.out' })
    const onUp = () => gsap.to(cursor, { scale: 1, duration: 0.2, ease: 'power2.out' })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    const interactive = root.querySelectorAll('a, button, [data-cursor], input, textarea')
    const onEnter = (event) => {
      const label = event.currentTarget.dataset.cursor || ''
      cursor.classList.add('cursor-active')
      if (label) {
        cursor.classList.add('cursor-with-label')
        cursorLabel.textContent = label
      }
    }
    const onLeave = () => {
      cursor.classList.remove('cursor-active', 'cursor-with-label')
      cursorLabel.textContent = ''
    }
    interactive.forEach((el) => {
      el.addEventListener('pointerenter', onEnter)
      el.addEventListener('pointerleave', onLeave)
    })

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.body.style.cursor = ''
      interactive.forEach((el) => {
        el.removeEventListener('pointerenter', onEnter)
        el.removeEventListener('pointerleave', onLeave)
      })
    }
  }, [rootRef, cursorRef, cursorLabelRef])
}
