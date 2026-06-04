import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects, categories } from '../data/projects'
import { container } from '../lib/layout'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <main>
      {/* Header */}
      <div style={{ backgroundColor: '#0A0F1E', paddingTop: '88px', paddingBottom: '72px' }}>
        <div style={container}>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#B9CBEA' }}>Our Work</p>
          <h1 className="font-light tracking-tight mb-4" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#FFFFFF', lineHeight: 1.07 }}>Portfolio</h1>
          <p className="text-[17px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Spatial analytics applied to real decisions.</p>
        </div>
      </div>

      {/* Filters + List */}
      <div style={{ ...container, paddingTop: '72px', paddingBottom: '88px' }}>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 text-[12px] font-medium tracking-[0.06em] uppercase transition-all duration-200"
              style={{
                backgroundColor: activeCategory === cat ? '#111111' : 'transparent',
                color: activeCategory === cat ? '#FFFFFF' : '#777777',
                border: '1px solid',
                borderColor: activeCategory === cat ? '#111111' : '#E5E5E5',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Simple list */}
        <div>
          {filtered.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group flex flex-col md:flex-row gap-8 py-10 border-t transition-all duration-200"
              style={{ borderColor: '#E5E5E5' }}
            >
              {/* Thumbnail */}
              <div className="flex-shrink-0 overflow-hidden" style={{ width: '240px', height: '160px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'grayscale(20%)' }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 py-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}>
                    {project.category}
                  </span>
                  <span className="text-[12px]" style={{ color: '#AAAAAA' }}>{project.client} · {project.year}</span>
                </div>
                <h2 className="text-[20px] font-semibold leading-snug mb-3 transition-colors group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                  {project.title}
                </h2>
                <p className="text-[14px] leading-[1.7] mb-5 line-clamp-2" style={{ color: '#777777' }}>
                  {project.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.04em] uppercase" style={{ color: '#2E7CF6' }}>
                  View Case Study <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}

          {/* Last divider */}
          <div style={{ borderTop: '1px solid #E5E5E5' }} />
        </div>
      </div>
    </main>
  )
}
