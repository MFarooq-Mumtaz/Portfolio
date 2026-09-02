import Link from 'next/link'

const pageContent = {
  about: ['Studio', 'A focused digital studio building clear, high-impact experiences for ambitious teams.'],
  projects: ['Projects', 'Explore selected projects, experiments, and digital systems from the studio.'],
  pricing: ['Pricing', 'Choose a focused engagement or start a conversation about a custom project.'],
  blogs: ['Journal', 'Notes on design systems, digital products, and creative technology.'],
  career: ['Careers', 'We are always interested in meeting thoughtful makers and collaborators.'],
  contact: ['Contact', 'Tell us what you are building and we will find the right way to move it forward.'],
}

function titleFromSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default async function LocalPage({ params }) {
  const { slug } = await params
  const key = slug.join('/')
  const [title, description] = pageContent[key] || [titleFromSlug(slug[slug.length - 1]), 'This page is part of the studio site and is ready for your content.']

  return (
    <main className="local-page">
      <div className="local-page-shell">
        <Link className="local-page-logo" href="/">STODIO</Link>
        <span className="local-page-label">Studio page</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="cta-button red-cta" href="/contact">Start a conversation <span>↗</span></Link>
        <Link className="local-page-back" href="/">Return home</Link>
      </div>
    </main>
  )
}
