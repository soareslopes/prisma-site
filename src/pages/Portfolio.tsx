import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { projects, categories } from '../data/projects'

const W = 'w-[80%] max-w-[1400px] mx-auto'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)
  const featured = projects.find((p) => p.featured)

  return (
    <main>
      {/* Header */}
      <div className="py-24 lg:py-32" style={{ backgroundColor: '#0A0F1E' }}>
        <div className={W}>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-7" style={{ color: '#B9CBEA' }}>
            Our Work
          </p>
          <h1 className="text-5xl lg:text-[66px] font-light leading-[1.07] tracking-[-0.025em] max-w-2xl mb-8" style={{ color: '#FFFFFF' }}>
            Portfolio
          </h1>
          <p className="text-[17px] leading-[1.75] max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Selected case studies demonstrating the application of spatial analytics, territorial intelligence and data science to complex organizational decisions.
          </p>
        </div>
      </div>

      {/* Featured Project */}
      {featured && (
        <div style={{ backgroundColor: '#F7F7F7', borderBottom: '1px solid #E5E5E5' }}>
          <div className={`${W} py-20 lg:py-24`}>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-10" style={{ color: '#2E7CF6' }}>
              Featured Project
            </p>
            <Link
              to={`/portfolio/${featured.id}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            >
              <div className="relative overflow-hidden" style={{ height: '380px' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'grayscale(15%)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.3) 0%, transparent 60%)' }}
                />
              </div>
              <div>
                <span
                  className="inline-block text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 mb-6"
                  style={{ backgroundColor: '#EEF4FF', color: '#2E7CF6' }}
                >
                  {featured.category}
                </span>
                <h2 className="text-[28px] lg:text-[36px] font-light leading-[1.2] tracking-[-0.01em] mb-6 transition-colors duration-200 group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                  {featured.title}
                </h2>
                <p className="text-[15px] leading-[1.8] mb-4" style={{ color: '#666666' }}>
                  {featured.summary}
                </p>
                <p className="text-[13px] mb-8" style={{ color: '#AAAAAA' }}>
                  {featured.client} · {featured.year}
                </p>
                <div className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>
                  View Case Study <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Filter + Grid */}
      <div className={`${W} py-18 lg:py-24`}>
        {/* Category filters */}
        <div className="flex flex-wrap gap-2.5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2.5 text-[12px] font-medium tracking-[0.06em] uppercase transition-all duration-200"
              style={{
                backgroundColor: activeCategory === cat ? '#111111' : '#FFFFFF',
                color: activeCategory === cat ? '#FFFFFF' : '#555555',
                border: '1px solid',
                borderColor: activeCategory === cat ? '#111111' : '#E5E5E5',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid #E5E5E5' }}
            >
              <div className="relative overflow-hidden" style={{ height: '280px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'grayscale(15%)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.55) 0%, transparent 60%)' }}
                />
                <div className="absolute bottom-4 left-5">
                  <span
                    className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1"
                    style={{ backgroundColor: 'rgba(10,15,30,0.75)', color: '#B9CBEA' }}
                  >
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}>
                    Featured
                  </div>
                )}
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-[11px] font-medium tracking-[0.04em] uppercase mb-3" style={{ color: '#AAAAAA' }}>
                  {project.client} · {project.year}
                </p>
                <h3 className="text-[20px] font-semibold leading-snug mb-4 transition-colors duration-200 group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                  {project.title}
                </h3>
                <p className="text-[14px] leading-[1.75] mb-6 line-clamp-2" style={{ color: '#777777' }}>
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium tracking-[0.03em] px-2.5 py-1"
                      style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[12px] font-medium tracking-[0.04em]" style={{ color: '#2E7CF6' }}>
                  View Case Study <ChevronRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
