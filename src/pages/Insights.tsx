import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, ChevronRight } from 'lucide-react'
import { insights, insightCategories } from '../data/insights'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const featured = insights.find((i) => i.featured)
  const rest = insights.filter((i) => !i.featured)

  const filtered = rest.filter((insight) => {
    const matchCategory = activeCategory === 'All' || insight.category === activeCategory
    const matchSearch =
      searchQuery === '' ||
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main>
      {/* Header */}
      <div className="py-24 lg:py-32" style={{ backgroundColor: '#0A0F1E' }}>
        <div className="w80">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-7" style={{ color: '#B9CBEA' }}>Analysis & Perspectives</p>
          <h1 className="text-5xl lg:text-[66px] font-light leading-[1.07] tracking-[-0.025em] mb-6" style={{ color: '#FFFFFF' }}>Insights</h1>
          <p className="text-[17px]" style={{ color: 'rgba(255,255,255,0.52)' }}>Analysis and perspectives from the Prisma team.</p>
        </div>
      </div>

      {/* Featured Article */}
      {featured && (
        <div style={{ backgroundColor: '#F7F7F7', borderBottom: '1px solid #E5E5E5' }}>
          <div className="w80 py-20 lg:py-24">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-8" style={{ color: '#2E7CF6' }}>Featured Article</p>
            <Link to={`/insights/${featured.id}`} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: '#EEF4FF', color: '#2E7CF6' }}>{featured.category}</span>
                    <span className="text-[12px]" style={{ color: '#AAAAAA' }}>{featured.date}</span>
                    <span className="text-[12px]" style={{ color: '#AAAAAA' }}>{featured.readTime}</span>
                  </div>
                  <h2 className="text-[28px] lg:text-[38px] font-light leading-[1.2] tracking-[-0.01em] mb-6 transition-colors duration-200 group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                    {featured.title}
                  </h2>
                  <p className="text-[16px] leading-[1.8] mb-7" style={{ color: '#555555' }}>{featured.excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>
                    Read Article <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="p-7" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', borderLeft: '3px solid #2E7CF6' }}>
                    <p className="text-[14px] leading-[1.75] italic" style={{ color: '#555555' }}>"{featured.excerpt.slice(0, 200)}..."</p>
                    <p className="text-[12px] mt-5 font-medium" style={{ color: '#AAAAAA' }}>— {featured.author}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Search + Filters + Grid */}
      <div className="w80 py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: '#AAAAAA' }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-[13px] outline-none"
              style={{ border: '1px solid #E5E5E5', color: '#333333', backgroundColor: '#FFFFFF', fontFamily: 'Inter, system-ui, sans-serif' }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2.5 text-[11px] font-medium tracking-[0.06em] uppercase transition-all duration-200"
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
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[16px]" style={{ color: '#AAAAAA' }}>No articles found for the selected filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filtered.map((insight) => (
              <Link
                key={insight.id}
                to={`/insights/${insight.id}`}
                className="group block border-t py-8"
                style={{ borderColor: '#E5E5E5' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}>{insight.category}</span>
                  <span className="text-[11px]" style={{ color: '#AAAAAA' }}>{insight.date}</span>
                </div>
                <h3 className="text-[17px] font-semibold leading-snug mb-4 transition-colors duration-200 group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>{insight.title}</h3>
                <p className="text-[14px] leading-[1.75] mb-5 line-clamp-3" style={{ color: '#777777' }}>{insight.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium" style={{ color: '#AAAAAA' }}>{insight.readTime}</span>
                  <div className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#2E7CF6' }}>
                    Read <ChevronRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
