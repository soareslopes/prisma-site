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
      <div className="w-[80%] max-w-[1400px] mx-auto h-[68px] flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Prisma — Home">
          <PrismaLogo size={32} variant="color" />
          <span
            className="text-[17px] font-semibold uppercase transition-opacity duration-200 group-hover:opacity-60"
            style={{ color: '#111111', letterSpacing: '0.14em' }}
          >
            PRISMA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className="text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-200 relative group"
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

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: '#111111' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E5E5' }}>
          <div className="w-[80%] max-w-[1400px] mx-auto py-5 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[13px] font-medium tracking-[0.06em] uppercase py-3 transition-colors duration-200 border-b"
                  style={{
                    color: active ? '#2E7CF6' : '#333333',
                    borderColor: '#F0F0F0',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
