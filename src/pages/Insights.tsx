import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronRight } from 'lucide-react'
import { insights, insightCategories } from '../data/insights'
import { container } from '../lib/layout'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = insights.filter((insight) => {
    const matchCategory = activeCategory === 'All' || insight.category === activeCategory
    const matchSearch = searchQuery === '' ||
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main>
      {/* Header */}
      <div style={{ backgroundColor: '#0A0F1E', paddingTop: '88px', paddingBottom: '72px' }}>
        <div style={container}>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#B9CBEA' }}>Analysis & Perspectives</p>
          <h1 className="font-light tracking-tight mb-4" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#FFFFFF', lineHeight: 1.07 }}>Insights</h1>
          <p className="text-[17px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Analysis and perspectives from the Prisma team.</p>
        </div>
      </div>

      {/* Search + Filters + List */}
      <div style={{ ...container, paddingTop: '56px', paddingBottom: '88px' }}>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative" style={{ maxWidth: '320px' }}>
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: '#AAAAAA' }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-[13px] outline-none"
              style={{ border: '1px solid #E5E5E5', color: '#333333', backgroundColor: '#FFFFFF', fontFamily: 'Inter, system-ui, sans-serif' }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-3.5 py-2 text-[11px] font-medium tracking-[0.06em] uppercase transition-all duration-200"
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
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-[15px]" style={{ color: '#AAAAAA' }}>No articles found.</p>
        ) : (
          <div>
            {filtered.map((insight) => (
              <Link
                key={insight.id}
                to={`/insights/${insight.id}`}
                className="group flex flex-col md:flex-row gap-8 py-10 border-t transition-all duration-200"
                style={{ borderColor: '#E5E5E5' }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}>{insight.category}</span>
                    <span className="text-[12px]" style={{ color: '#AAAAAA' }}>{insight.date}</span>
                    <span className="text-[12px]" style={{ color: '#AAAAAA' }}>{insight.readTime}</span>
                  </div>
                  <h2 className="text-[19px] font-semibold leading-snug mb-3 transition-colors group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                    {insight.title}
                  </h2>
                  <p className="text-[14px] leading-[1.7] line-clamp-2 mb-4" style={{ color: '#777777' }}>{insight.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-[12px] font-medium uppercase tracking-[0.04em]" style={{ color: '#2E7CF6' }}>
                    Read Article <ChevronRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
            <div style={{ borderTop: '1px solid #E5E5E5' }} />
          </div>
        )}
      </div>
    </main>
  )
}
