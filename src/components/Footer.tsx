import { Link } from 'react-router-dom'
import { Link2, Mail, Phone, MapPin } from 'lucide-react'
import PrismaLogo from './PrismaLogo'
import { container } from '../lib/layout'

const partners = ['IBGE', 'IPEA', 'WRI Brasil', 'FGV', 'BNDES', 'BID']

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0F1E' }}>
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ ...container, paddingTop: '48px', paddingBottom: '48px' }}>
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Partners
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {partners.map((p) => (
              <span key={p} className="text-[13px] font-semibold tracking-[0.06em] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ ...container, paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <PrismaLogo size={26} variant="color" />
              <span className="text-[14px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>PRISMA</span>
            </Link>
            <p className="text-[13px] leading-relaxed max-w-xs mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Spatial intelligence and territorial analytics for organizations that shape places.
            </p>
            <p className="text-[12px] italic" style={{ color: 'rgba(255,255,255,0.2)' }}>Empowering Places With Science</p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Navigation</p>
            <ul className="space-y-2.5">
              {['/', '/manifesto', '/portfolio', '/insights', '/contact'].map((href, i) => (
                <li key={href}>
                  <Link to={href} className="text-[13px] transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {['Home', 'Manifesto', 'Portfolio', 'Insights', 'Contact'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><MapPin size={12} className="mt-0.5" style={{ color: '#B9CBEA' }} /><span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Lisboa, Portugal</span></li>
              <li className="flex items-center gap-2"><Mail size={12} style={{ color: '#B9CBEA' }} /><a href="mailto:contact@prisma.pt" className="text-[13px] hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>contact@prisma.pt</a></li>
              <li className="flex items-center gap-2"><Phone size={12} style={{ color: '#B9CBEA' }} /><span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>+351 21 000 0000</span></li>
              <li className="flex items-center gap-2"><Link2 size={12} style={{ color: '#B9CBEA' }} /><a href="#" className="text-[13px] hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>linkedin.com/company/prisma</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.22)' }}>© {new Date().getFullYear()} Prisma. All rights reserved.</p>
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.18)' }}>Empowering Places With Science</p>
        </div>
      </div>
    </footer>
  )
}
