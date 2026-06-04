import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Tag } from 'lucide-react'
import { projects } from '../data/projects'

const W = 'w-[80%] max-w-[1400px] mx-auto'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) return <Navigate to="/portfolio" replace />

  return (
    <main>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#0A0F1E', minHeight: '380px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className={`relative z-10 ${W} pt-14 pb-16`}>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase mb-12 transition-opacity duration-200 hover:opacity-70"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            <ArrowLeft size={13} /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5"
              style={{ backgroundColor: 'rgba(46,124,246,0.2)', color: '#B9CBEA', border: '1px solid rgba(185,203,234,0.2)' }}
            >
              {project.category}
            </span>
            {project.featured && (
              <span
                className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5"
                style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}
              >
                Featured
              </span>
            )}
          </div>
          <h1 className="text-4xl lg:text-[56px] font-light leading-[1.1] tracking-[-0.02em] max-w-3xl mb-7" style={{ color: '#FFFFFF' }}>
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <span>Client: <span style={{ color: 'rgba(255,255,255,0.7)' }}>{project.client}</span></span>
            <span>Year: <span style={{ color: 'rgba(255,255,255,0.7)' }}>{project.year}</span></span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div style={{ height: '420px', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(10%) brightness(0.92)' }}
        />
      </div>

      {/* Content */}
      <div className={`${W} py-18 lg:py-26`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-22">
          {/* Main content */}
          <div className="lg:col-span-8">
            {/* Summary */}
            <p className="text-[18px] lg:text-[21px] leading-[1.75] font-light mb-14 pb-14" style={{ color: '#333333', borderBottom: '1px solid #E5E5E5' }}>
              {project.description}
            </p>

            {/* Challenge */}
            <div className="mb-14">
              <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase mb-6" style={{ color: '#2E7CF6' }}>
                Challenge
              </h2>
              <p className="text-[16px] leading-[1.85]" style={{ color: '#444444' }}>
                {project.challenge}
              </p>
            </div>

            {/* Methodology */}
            <div className="mb-14 p-9" style={{ backgroundColor: '#F7F7F7', border: '1px solid #E5E5E5' }}>
              <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase mb-6" style={{ color: '#2E7CF6' }}>
                Methodology
              </h2>
              <p className="text-[16px] leading-[1.85]" style={{ color: '#444444' }}>
                {project.methodology}
              </p>
            </div>

            {/* Key Findings */}
            <div className="mb-14">
              <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase mb-8" style={{ color: '#2E7CF6' }}>
                Key Findings
              </h2>
              <div className="space-y-5">
                {project.findings.map((finding, i) => (
                  <div key={i} className="flex items-start gap-5 p-6" style={{ border: '1px solid #E5E5E5' }}>
                    <div
                      className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 text-[12px] font-bold"
                      style={{ backgroundColor: '#EEF4FF', color: '#2E7CF6' }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-[15px] leading-[1.8]" style={{ color: '#444444' }}>
                      {finding}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="p-9" style={{ backgroundColor: '#0A0F1E' }}>
              <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase mb-6" style={{ color: '#7AD83D' }}>
                Impact & Results
              </h2>
              <p className="text-[16px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {project.impact}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Project info */}
              <div className="p-7" style={{ border: '1px solid #E5E5E5' }}>
                <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-6" style={{ color: '#AAAAAA' }}>
                  Project Details
                </h3>
                <div className="space-y-5">
                  {[
                    { label: 'Client', value: project.client },
                    { label: 'Category', value: project.category },
                    { label: 'Year', value: project.year },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] font-semibold tracking-[0.1em] uppercase mb-1.5" style={{ color: '#AAAAAA' }}>
                        {label}
                      </p>
                      <p className="text-[14px]" style={{ color: '#333333' }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4 flex items-center gap-2" style={{ color: '#AAAAAA' }}>
                  <Tag size={11} /> Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium tracking-[0.03em] px-2.5 py-1.5"
                      style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-7" style={{ backgroundColor: '#F7F7F7', border: '1px solid #E5E5E5' }}>
                <p className="text-[14px] leading-[1.65] mb-6" style={{ color: '#555555' }}>
                  Interested in a similar engagement for your organization?
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-[12px] font-medium tracking-[0.06em] uppercase transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other projects */}
      <div className="py-16 lg:py-22" style={{ backgroundColor: '#F7F7F7', borderTop: '1px solid #E5E5E5' }}>
        <div className={W}>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-[16px] font-semibold" style={{ color: '#111111' }}>
              Other Projects
            </h3>
            <Link to="/portfolio" className="text-[12px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/portfolio/${p.id}`}
                  className="group overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                  style={{ border: '1px solid #E5E5E5', backgroundColor: '#FFFFFF' }}
                >
                  <div style={{ height: '160px', overflow: 'hidden' }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: 'grayscale(25%)' }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#2E7CF6' }}>
                      {p.category}
                    </span>
                    <p className="text-[14px] font-semibold mt-1.5 leading-snug transition-colors duration-200 group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
