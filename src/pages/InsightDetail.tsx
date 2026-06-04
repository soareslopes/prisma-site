import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { insights } from '../data/insights'
import { container } from '../lib/layout'

export default function InsightDetail() {
  const { id } = useParams<{ id: string }>()
  const insight = insights.find((i) => i.id === id)
  if (!insight) return <Navigate to="/insights" replace />
  const others = insights.filter((i) => i.id !== id).slice(0, 3)

  return (
    <main>
      {/* Header */}
      <div style={{ backgroundColor: '#0A0F1E', paddingTop: '72px', paddingBottom: '64px' }}>
        <div style={container}>
          <Link to="/insights" className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase mb-10 hover:opacity-70" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <ArrowLeft size={13} /> Insights
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: 'rgba(46,124,246,0.2)', color: '#B9CBEA', border: '1px solid rgba(185,203,234,0.2)' }}>
              {insight.category}
            </span>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{insight.date}</span>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{insight.readTime}</span>
          </div>
          <h1 className="font-light tracking-tight mb-5" style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#FFFFFF', lineHeight: 1.1, maxWidth: '720px' }}>
            {insight.title}
          </h1>
          <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.4)' }}>By {insight.author}</p>
        </div>
      </div>

      {/* Body */}
      <div style={{ ...container, paddingTop: '64px', paddingBottom: '80px', maxWidth: '760px' }}>
        <p className="font-light leading-[1.8] mb-12 pb-12" style={{ fontSize: '19px', color: '#333333', borderBottom: '1px solid #E5E5E5' }}>
          {insight.excerpt}
        </p>

        <div className="space-y-6">
          {insight.content
            ? insight.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-[16px] leading-[1.9]" style={{ color: '#444444' }}>{para}</p>
              ))
            : [
                'The spatial dimension of this problem is often treated as a peripheral concern in conventional analytical frameworks. Yet the relational structure of spatial phenomena — the way proximity, connectivity and territorial context shape outcomes — makes spatial analysis an indispensable tool for decision-makers operating in complex geographic environments.',
                'Rigorous analysis integrates multiple data streams to build a comprehensive picture of the phenomenon under study. Individual data sources contain systematic biases that can only be addressed through triangulation. The convergence of findings across independent sources is the primary indicator of analytical reliability.',
                'Decision-makers who rely on non-spatial frameworks will systematically underestimate the heterogeneity of outcomes across territories and miss early-warning signals only visible in spatial distribution of phenomena.',
                "Evidence-based territorial governance requires not only analytical capacity, but institutional structures to translate that capacity into decision-relevant intelligence. This translation challenge is the core of Prisma's practice.",
              ].map((para, i) => (
                <p key={i} className="text-[16px] leading-[1.9]" style={{ color: '#444444' }}>{para}</p>
              ))
          }
        </div>

        <div className="mt-14 pt-8 flex items-start gap-4" style={{ borderTop: '1px solid #E5E5E5' }}>
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-[13px] font-semibold" style={{ backgroundColor: '#EEF4FF', color: '#2E7CF6' }}>P</div>
          <div>
            <p className="text-[14px] font-semibold mb-0.5" style={{ color: '#111111' }}>{insight.author}</p>
            <p className="text-[13px]" style={{ color: '#888888' }}>Prisma · Lisboa, Portugal</p>
          </div>
        </div>
      </div>

      {/* More */}
      <div style={{ backgroundColor: '#F7F7F7', borderTop: '1px solid #E5E5E5', paddingTop: '56px', paddingBottom: '72px' }}>
        <div style={container}>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-[15px] font-semibold" style={{ color: '#111111' }}>More Insights</h3>
            <Link to="/insights" className="text-[12px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {others.map((item) => (
              <Link key={item.id} to={`/insights/${item.id}`} className="group block border-t pt-7" style={{ borderColor: '#D0D0D0' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}>{item.category}</span>
                  <span className="text-[11px]" style={{ color: '#AAAAAA' }}>{item.date}</span>
                </div>
                <h3 className="text-[16px] font-semibold leading-snug mb-4 transition-colors group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>{item.title}</h3>
                <span className="inline-flex items-center gap-1 text-[12px]" style={{ color: '#2E7CF6' }}>Read <ChevronRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
