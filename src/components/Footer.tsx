import { Link } from 'react-router-dom'
import { Link2, Mail, Phone, MapPin } from 'lucide-react'
import PrismaLogo from './PrismaLogo'

const partners = [
  { name: 'IBGE', full: 'Brazilian Institute of Geography and Statistics' },
  { name: 'IPEA', full: 'Institute for Applied Economic Research' },
  { name: 'WRI Brasil', full: 'World Resources Institute Brazil' },
  { name: 'FGV', full: 'Getulio Vargas Foundation' },
  { name: 'BNDES', full: 'Brazilian Development Bank' },
  { name: 'BID', full: 'Inter-American Development Bank' },
]

const W = 'w-[80%] max-w-[1400px] mx-auto'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0F1E' }}>
      {/* Partners strip */}
      <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className={`${W} py-12`}>
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase mb-7" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Collaborators & Partners
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {partners.map((p) => (
              <div
                key={p.name}
                title={p.full}
                className="text-[13px] font-semibold tracking-[0.06em] uppercase transition-opacity duration-200 hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.28)' }}
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={`${W} py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <PrismaLogo size={28} variant="color" />
              <span className="text-[15px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>
                PRISMA
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Spatial intelligence, territorial analytics and evidence-based consulting for organizations that shape places.
            </p>
            <p className="text-[12px] font-medium tracking-[0.06em] italic" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Empowering Places With Science
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Manifesto', href: '/manifesto' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Insights', href: '/insights' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-[14px] transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.42)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#B9CBEA' }} />
                <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.42)' }}>
                  Lisboa, Portugal
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} style={{ color: '#B9CBEA' }} />
                <a
                  href="mailto:contact@prisma.pt"
                  className="text-[13px] transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.42)' }}
                >
                  contact@prisma.pt
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} style={{ color: '#B9CBEA' }} />
                <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.42)' }}>
                  +351 21 000 0000
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Link2 size={13} style={{ color: '#B9CBEA' }} />
                <a
                  href="#"
                  className="text-[13px] transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.42)' }}
                >
                  linkedin.com/company/prisma
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Prisma. All rights reserved.
          </p>
          <p className="text-[12px] tracking-[0.04em]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Empowering Places With Science
          </p>
        </div>
      </div>
    </footer>
  )
}
