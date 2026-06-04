import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import { container } from '../lib/layout'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)
  if (!project) return <Navigate to="/portfolio" replace />

  return (
    <main>
      {/* Hero */}
      <div style={{ backgroundColor: '#0A0F1E', paddingTop: '72px', paddingBottom: '64px', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${project.image})` }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase mb-10 hover:opacity-70" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <ArrowLeft size={13} /> Portfolio
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: 'rgba(46,124,246,0.2)', color: '#B9CBEA', border: '1px solid rgba(185,203,234,0.2)' }}>
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}>Featured</span>
            )}
          </div>
          <h1 className="font-light tracking-tight mb-5" style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#FFFFFF', lineHeight: 1.1, maxWidth: '760px' }}>
            {project.title}
          </h1>
          <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {project.client} · {project.year}
          </p>
        </div>
      </div>

      {/* Cover */}
      <div style={{ height: '380px', overflow: 'hidden' }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ filter: 'grayscale(10%) brightness(0.93)' }} />
      </div>

      {/* Content */}
      <div style={{ ...container, paddingTop: '72px', paddingBottom: '96px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main */}
          <div className="lg:col-span-8">
            <p className="font-light leading-[1.75] mb-12 pb-12" style={{ fontSize: '19px', color: '#333333', borderBottom: '1px solid #E5E5E5' }}>
              {project.description}
            </p>

            <div className="mb-12">
              <h2 className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: '#2E7CF6' }}>Challenge</h2>
              <p className="text-[16px] leading-[1.85]" style={{ color: '#444444' }}>{project.challenge}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: '#2E7CF6' }}>Methodology</h2>
              <p className="text-[16px] leading-[1.85]" style={{ color: '#444444' }}>{project.methodology}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-6" style={{ color: '#2E7CF6' }}>Key Findings</h2>
              <div className="space-y-5">
                {project.findings.map((finding, i) => (
                  <div key={i} className="flex gap-5 pb-5" style={{ borderBottom: '1px solid #F0F0F0' }}>
                    <span className="text-[13px] font-mono flex-shrink-0 mt-0.5" style={{ color: '#CCCCCC' }}>0{i + 1}</span>
                    <p className="text-[15px] leading-[1.8]" style={{ color: '#444444' }}>{finding}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: '#7AD83D' }}>Impact & Results</h2>
              <p className="text-[16px] leading-[1.85]" style={{ color: '#444444' }}>{project.impact}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-10">
              <div>
                <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#AAAAAA' }}>Project Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Client', value: project.client },
                    { label: 'Category', value: project.category },
                    { label: 'Year', value: project.year },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: '#BBBBBB' }}>{label}</p>
                      <p className="text-[14px]" style={{ color: '#333333' }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: '#AAAAAA' }}>Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-2.5 py-1" style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[14px] leading-[1.65] mb-5" style={{ color: '#666666' }}>
                  Interested in a similar engagement?
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-[12px] font-medium tracking-[0.06em] uppercase hover:opacity-90" style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other projects */}
      <div style={{ backgroundColor: '#F7F7F7', borderTop: '1px solid #E5E5E5', paddingTop: '56px', paddingBottom: '72px' }}>
        <div style={container}>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-[15px] font-semibold" style={{ color: '#111111' }}>Other Projects</h3>
            <Link to="/portfolio" className="text-[12px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.filter((p) => p.id !== project.id).slice(0, 3).map((p) => (
              <Link key={p.id} to={`/portfolio/${p.id}`} className="group">
                <div className="overflow-hidden mb-4" style={{ height: '140px' }}>
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ filter: 'grayscale(20%)' }} />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#2E7CF6' }}>{p.category}</span>
                <p className="text-[14px] font-semibold mt-1 leading-snug transition-colors group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
