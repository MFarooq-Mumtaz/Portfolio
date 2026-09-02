import '../src/index.css'
import '../src/App.css'

export const metadata = {
  title: 'Stodio Agency',
  description: 'A design agency portfolio experience.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
