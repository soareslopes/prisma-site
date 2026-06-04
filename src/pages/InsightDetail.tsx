import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { insights } from '../data/insights'

const W = 'w-[80%] max-w-[1400px] mx-auto'

export default function InsightDetail() {
  const { id } = useParams<{ id: string }>()
  const insight = insights.find((i) => i.id === id)

  if (!insight) return <Navigate to="/insights" replace />

  const others = insights.filter((i) => i.id !== id).slice(0, 3)

  return (
    <main>
      {/* Header */}
      <div className="py-22 lg:py-28" style={{ backgroundColor: '#0A0F1E' }}>
        <div className={W}>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase mb-12 transition-opacity duration-200 hover:opacity-70"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            <ArrowLeft size={13} /> Insights
          </Link>
          <div className="flex items-center gap-3 mb-7">
            <span
              className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5"
              style={{ backgroundColor: 'rgba(46,124,246,0.2)', color: '#B9CBEA', border: '1px solid rgba(185,203,234,0.2)' }}
            >
              {insight.category}
            </span>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{insight.date}</span>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{insight.readTime}</span>
          </div>
          <h1 className="text-4xl lg:text-[54px] font-light leading-[1.1] tracking-[-0.02em] max-w-3xl mb-7" style={{ color: '#FFFFFF' }}>
            {insight.title}
          </h1>
          <p className="text-[15px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            By {insight.author}
          </p>
        </div>
      </div>

      {/* Article */}
      <div className={`${W} py-16 lg:py-24`}>
        {/* Lead */}
        <p className="text-[18px] lg:text-[21px] leading-[1.8] font-light mb-12 pb-12" style={{ color: '#333333', borderBottom: '1px solid #E5E5E5' }}>
          {insight.excerpt}
        </p>

        {/* Body */}
        <div className="max-w-3xl space-y-7">
          {insight.content ? (
            insight.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-[16px] leading-[1.9]" style={{ color: '#444444' }}>
                {para}
              </p>
            ))
          ) : (
            [
              'The spatial dimension of this problem is often treated as a peripheral concern in conventional analytical frameworks. Yet it is precisely the relational structure of spatial phenomena — the way that proximity, connectivity and territorial context shape outcomes — that makes spatial analysis an indispensable tool for decision-makers operating in complex geographic environments.',
              'Our analysis integrates multiple data streams to build a comprehensive picture of the phenomenon under study. This multi-source approach is methodologically essential: individual data sources contain systematic biases and coverage gaps that can only be addressed through triangulation. The convergence of findings across independent data sources is the primary indicator of analytical reliability.',
              'The implications for organizational practice are significant. Decision-makers who rely on non-spatial analytical frameworks will systematically underestimate the heterogeneity of outcomes across territories, misallocate resources toward areas of lower marginal impact, and miss early-warning signals that are only visible in the spatial distribution of phenomena.',
              'Evidence-based territorial governance requires not only the availability of analytical capacity, but the institutional structures to translate that capacity into decision-relevant intelligence. This translation challenge — from spatial data science to actionable strategic intelligence — is the core of Prisma\'s practice.',
            ].map((para, i) => (
              <p key={i} className="text-[16px] leading-[1.9]" style={{ color: '#444444' }}>
                {para}
              </p>
            ))
          )}
        </div>

        {/* Author box */}
        <div className="mt-16 pt-10 border-t flex items-start gap-5" style={{ borderColor: '#E5E5E5' }}>
          <div
            className="w-11 h-11 flex items-center justify-center flex-shrink-0 text-[14px] font-semibold"
            style={{ backgroundColor: '#EEF4FF', color: '#2E7CF6' }}
          >
            P
          </div>
          <div>
            <p className="text-[14px] font-semibold mb-1" style={{ color: '#111111' }}>
              {insight.author}
            </p>
            <p className="text-[13px]" style={{ color: '#888888' }}>
              Prisma · Spatial Intelligence & Territorial Analytics · Lisboa, Portugal
            </p>
          </div>
        </div>
      </div>

      {/* More Insights */}
      <div className="py-16 lg:py-22" style={{ backgroundColor: '#F7F7F7', borderTop: '1px solid #E5E5E5' }}>
        <div className={W}>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-[16px] font-semibold" style={{ color: '#111111' }}>More Insights</h3>
            <Link to="/insights" className="text-[12px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {others.map((item) => (
              <Link
                key={item.id}
                to={`/insights/${item.id}`}
                className="group block py-7 border-t"
                style={{ borderColor: '#D0D0D0' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5"
                    style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}
                  >
                    {item.category}
                  </span>
                  <span className="text-[11px]" style={{ color: '#AAAAAA' }}>{item.date}</span>
                </div>
                <h3 className="text-[16px] font-semibold leading-snug mb-3 transition-colors duration-200 group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-[12px] mt-5" style={{ color: '#2E7CF6' }}>
                  Read <ChevronRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
