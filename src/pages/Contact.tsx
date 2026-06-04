import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { Mail, Phone, MapPin, Link2, Send, CheckCircle } from 'lucide-react'
import { container } from '../lib/layout'

const POSITION: [number, number] = [38.7223, -9.1393]

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', organization: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1200)
  }

  const input: React.CSSProperties = {
    width: '100%', padding: '11px 13px', fontSize: '14px',
    border: '1px solid #E5E5E5', backgroundColor: '#FFFFFF', color: '#111111',
    outline: 'none', fontFamily: 'Inter, system-ui, sans-serif',
  }

  return (
    <main>
      {/* Header */}
      <div style={{ backgroundColor: '#0A0F1E', paddingTop: '88px', paddingBottom: '72px' }}>
        <div style={container}>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#B9CBEA' }}>Get in Touch</p>
          <h1 className="font-light tracking-tight mb-4" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#FFFFFF', lineHeight: 1.07 }}>Contact</h1>
          <p className="text-[17px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Let's discuss your spatial challenge.</p>
        </div>
      </div>

      {/* Main */}
      <div style={{ ...container, paddingTop: '72px', paddingBottom: '96px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div>
            <h2 className="text-[22px] font-semibold mb-2" style={{ color: '#111111' }}>Start a Conversation</h2>
            <p className="text-[15px] leading-[1.7] mb-8" style={{ color: '#777777' }}>
              We respond within two business days.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center text-center py-16">
                <CheckCircle size={32} className="mb-4" style={{ color: '#7AD83D' }} />
                <h3 className="text-[18px] font-semibold mb-2" style={{ color: '#111111' }}>Message received</h3>
                <p className="text-[14px]" style={{ color: '#777777' }}>We will be in touch within two business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase mb-1.5" style={{ color: '#999999' }}>Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" style={input}
                      onFocus={(e) => (e.target.style.borderColor = '#2E7CF6')} onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase mb-1.5" style={{ color: '#999999' }}>Organization</label>
                    <input type="text" name="organization" value={form.organization} onChange={handleChange} placeholder="Your organization" style={input}
                      onFocus={(e) => (e.target.style.borderColor = '#2E7CF6')} onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')} />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase mb-1.5" style={{ color: '#999999' }}>Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={input}
                    onFocus={(e) => (e.target.style.borderColor = '#2E7CF6')} onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')} />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase mb-1.5" style={{ color: '#999999' }}>Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Describe your organization and the challenge you'd like to discuss."
                    style={{ ...input, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => (e.target.style.borderColor = '#2E7CF6')} onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')} />
                </div>
                <button type="submit" disabled={submitting}
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}>
                  {submitting ? 'Sending...' : <><span>Send Message</span><Send size={13} /></>}
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {([
                { icon: MapPin, label: 'Address', value: 'Av. da Liberdade, 110\nLisboa, Portugal', color: '#B9CBEA' },
                { icon: Mail, label: 'Email', value: 'contact@prisma.pt', color: '#2E7CF6', href: 'mailto:contact@prisma.pt' },
                { icon: Phone, label: 'Phone', value: '+351 21 000 0000', color: '#7AD83D' },
                { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/company/prisma', color: '#F3E07A', href: '#' },
              ] as { icon: React.ElementType; label: string; value: string; color: string; href?: string }[]).map(({ icon: IconComp, label, value, color, href }) => (
                <div key={label} className="flex items-start gap-3 py-4" style={{ borderBottom: '1px solid #F0F0F0' }}>
                  <IconComp size={14} style={{ color, marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.1em] uppercase mb-0.5" style={{ color: '#BBBBBB' }}>{label}</p>
                    {href
                      ? <a href={href} className="text-[13px] leading-[1.5] hover:text-[#2E7CF6]" style={{ color: '#333333', whiteSpace: 'pre-line' }}>{value}</a>
                      : <p className="text-[13px] leading-[1.5]" style={{ color: '#333333', whiteSpace: 'pre-line' }}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: '360px', overflow: 'hidden', border: '1px solid #E5E5E5' }}>
              <MapContainer center={POSITION} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={POSITION} icon={customIcon}>
                  <Popup>
                    <div style={{ fontFamily: 'Inter, sans-serif' }}>
                      <strong style={{ fontSize: '13px', color: '#111111' }}>PRISMA</strong>
                      <p style={{ fontSize: '12px', color: '#666666', marginTop: '3px' }}>Av. da Liberdade, 110<br />Lisboa, Portugal</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
