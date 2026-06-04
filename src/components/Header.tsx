import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import PrismaLogo from './PrismaLogo'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Manifesto', href: '/manifesto' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E5E5',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ width: '80%', maxWidth: '1400px', margin: '0 auto', height: '68px' }}
      >
        <Link to="/" className="flex items-center gap-3 group" aria-label="Prisma">
          <PrismaLogo size={32} variant="color" />
          <span className="text-[17px] font-semibold uppercase group-hover:opacity-60 transition-opacity" style={{ color: '#111111', letterSpacing: '0.14em' }}>
            PRISMA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className="relative text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-200 group"
                style={{ color: active ? '#111111' : '#777777' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300"
                  style={{ width: active ? '100%' : '0%', backgroundColor: '#2E7CF6' }}
                />
                <span
                  className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 group-hover:w-full w-0"
                  style={{ backgroundColor: '#E5E5E5' }}
                />
              </Link>
            )
          })}
        </nav>

        <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#111111' }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}>
          <div style={{ width: '80%', maxWidth: '1400px', margin: '0 auto', paddingTop: '16px', paddingBottom: '16px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-[13px] font-medium tracking-[0.06em] uppercase py-3 border-b"
                style={{ color: location.pathname === link.href ? '#2E7CF6' : '#333333', borderColor: '#F0F0F0' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
