import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, MapPin, BarChart3, Layers, Search, TrendingUp, Network } from 'lucide-react'
import HeroBackground from '../components/HeroBackground'
import { projects } from '../data/projects'
import { insights } from '../data/insights'
import { container } from '../lib/layout'

const partners = ['IBGE', 'IPEA', 'WRI Brasil', 'FGV', 'BNDES', 'BID', 'Câmara de Lisboa', 'CCDR-LVT']

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; observer.unobserve(el) }
    }, { threshold: 0.08 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

const steps = [
  { number: '01', title: 'Observe', icon: Search, color: '#B9CBEA', text: 'We integrate diverse spatial data sources applying rigorous quality protocols.' },
  { number: '02', title: 'Understand', icon: Layers, color: '#2E7CF6', text: 'We identify patterns and structural relationships invisible in non-spatial analysis.' },
  { number: '03', title: 'Model', icon: Network, color: '#7AD83D', text: 'We apply spatial statistics and machine learning to explain phenomena and project scenarios.' },
  { number: '04', title: 'Decide', icon: TrendingUp, color: '#F3E07A', text: 'Findings become structured recommendations for investment and policy design.' },
]

const services = [
  { icon: MapPin, title: 'Spatial Intelligence', text: 'Location analysis, accessibility diagnostics and territorial vulnerability mapping.', color: '#B9CBEA' },
  { icon: BarChart3, title: 'Data Science', text: 'Predictive modeling, spatial econometrics and quantitative impact evaluation.', color: '#2E7CF6' },
  { icon: Layers, title: 'Strategic Consulting', text: 'Evidence-based decision support for cities, infrastructure operators and investors.', color: '#7AD83D' },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: 'calc(100vh - 68px)' }}>
        <HeroBackground />
        <div style={{ ...container, position: 'relative', zIndex: 10, paddingTop: '80px', paddingBottom: '80px', textAlign: 'center' }}>
          <div
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-[0.1em] uppercase"
            style={{ backgroundColor: 'rgba(46,124,246,0.15)', color: '#B9CBEA', border: '1px solid rgba(185,203,234,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7AD83D] animate-pulse" />
            Spatial Intelligence & Territorial Analytics
          </div>

          <h1 className="font-light tracking-[-0.025em] mb-6" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.08, color: '#FFFFFF' }}>
            Spatial Intelligence
            <br />
            <span style={{ color: '#B9CBEA' }}>for Better Decisions</span>
          </h1>

          <p className="font-light leading-relaxed mb-10" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 40px' }}>
            We transform spatial data into strategic decisions.
          </p>

          <p className="text-[12px] font-medium tracking-[0.18em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.28)' }}>
            Empowering Places With Science
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/portfolio" className="group flex items-center gap-2 px-8 py-4 text-[13px] font-medium tracking-[0.06em] uppercase hover:opacity-90" style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}>
              Explore Our Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="flex items-center gap-2 px-8 py-4 text-[13px] font-medium tracking-[0.06em] uppercase" style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)' }}>
              Contact Us <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'rgba(255,255,255,0.2)' }}>
          <span className="text-[10px] tracking-[0.14em] uppercase">Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)' }} />
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#2E7CF6' }}>Who We Are</p>
              <h2 className="font-light leading-tight tracking-tight mb-7" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#111111' }}>
                Evidence-based thinking<br />for complex territories
              </h2>
              <p className="text-[16px] leading-[1.8] mb-5" style={{ color: '#555555' }}>
                Prisma is a spatial intelligence firm. We help governments, infrastructure operators, financial institutions and private organizations make better territorial decisions — through rigorous spatial modeling and strategic consulting.
              </p>
              <p className="text-[16px] leading-[1.8] mb-8" style={{ color: '#555555' }}>
                We build analytical frameworks specific to each organization's context and objectives.
              </p>
              <Link to="/manifesto" className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>
                Read our Manifesto <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div style={{ height: '420px', backgroundColor: '#0A0F1E', overflow: 'hidden', position: 'relative' }}>
                <svg className="w-full h-full opacity-70" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice">
                  <g stroke="#B9CBEA" strokeWidth="0.5" fill="none" opacity="0.25">
                    <ellipse cx="250" cy="200" rx="180" ry="140" /><ellipse cx="250" cy="200" rx="130" ry="100" />
                    <ellipse cx="250" cy="200" rx="85" ry="65" /><ellipse cx="250" cy="200" rx="45" ry="35" />
                  </g>
                  <g stroke="#2E7CF6" strokeWidth="0.7" opacity="0.5">
                    <line x1="250" y1="200" x2="110" y2="120" /><line x1="250" y1="200" x2="390" y2="130" />
                    <line x1="250" y1="200" x2="420" y2="260" /><line x1="250" y1="200" x2="180" y2="320" />
                    <line x1="250" y1="200" x2="70" y2="280" />
                    <line x1="110" y1="120" x2="390" y2="130" /><line x1="390" y1="130" x2="420" y2="260" />
                    <line x1="420" y1="260" x2="180" y2="320" /><line x1="180" y1="320" x2="70" y2="280" />
                    <line x1="70" y1="280" x2="110" y2="120" />
                  </g>
                  <polygon points="250,200 390,130 420,260" fill="rgba(122,216,61,0.06)" stroke="#7AD83D" strokeWidth="0.8" />
                  <g fill="#B9CBEA">
                    {([[250,200],[110,120],[390,130],[420,260],[180,320],[70,280]] as [number,number][]).map(([cx,cy],i) => (
                      <circle key={i} cx={cx} cy={cy} r={i===0?5:3} />
                    ))}
                  </g>
                  <circle cx="250" cy="200" r="5" fill="#2E7CF6" />
                </svg>
                <p className="absolute bottom-4 left-5 text-[10px] font-mono tracking-[0.1em]" style={{ color: 'rgba(185,203,234,0.35)' }}>SPATIAL NETWORK ANALYSIS</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ backgroundColor: '#F7F7F7', paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={container}>
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: '#2E7CF6' }}>Our Approach</p>
            <h2 className="font-light tracking-tight mb-16" style={{ fontSize: 'clamp(26px, 3vw, 40px)', color: '#111111' }}>A structured analytical methodology</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.number} delay={i * 70}>
                  <div>
                    <Icon size={22} style={{ color: step.color, marginBottom: '16px' }} />
                    <p className="text-[12px] font-mono tracking-[0.1em] uppercase mb-2" style={{ color: '#BBBBBB' }}>{step.number}</p>
                    <h3 className="text-[18px] font-semibold mb-3" style={{ color: '#111111' }}>{step.title}</h3>
                    <p className="text-[14px] leading-[1.75]" style={{ color: '#666666' }}>{step.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={container}>
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: '#2E7CF6' }}>What We Do</p>
            <h2 className="font-light tracking-tight mb-16" style={{ fontSize: 'clamp(26px, 3vw, 40px)', color: '#111111' }}>Our areas of expertise</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.title} delay={i * 80}>
                  <div>
                    <Icon size={24} style={{ color: s.color, marginBottom: '20px' }} />
                    <h3 className="text-[20px] font-semibold mb-3" style={{ color: '#111111' }}>{s.title}</h3>
                    <p className="text-[15px] leading-[1.75]" style={{ color: '#666666' }}>{s.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ backgroundColor: '#F7F7F7', paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={container}>
          <Reveal>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: '#2E7CF6' }}>Selected Work</p>
                <h2 className="font-light tracking-tight" style={{ fontSize: 'clamp(26px, 3vw, 40px)', color: '#111111' }}>Featured Projects</h2>
              </div>
              <Link to="/portfolio" className="hidden sm:inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>
                View All <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <Link to={`/portfolio/${project.id}`} className="group block">
                  <div className="overflow-hidden mb-5" style={{ height: '220px' }}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ filter: 'grayscale(15%)' }} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#2E7CF6' }}>{project.category}</span>
                  <h3 className="text-[16px] font-semibold leading-snug mt-2 mb-2 transition-colors group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>{project.title}</h3>
                  <p className="text-[13px] leading-[1.65] mb-3 line-clamp-2" style={{ color: '#888888' }}>{project.summary}</p>
                  <span className="text-[12px] font-medium inline-flex items-center gap-1" style={{ color: '#2E7CF6' }}>View Project <ChevronRight size={12} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={container}>
          <Reveal>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: '#2E7CF6' }}>Latest Insights</p>
                <h2 className="font-light tracking-tight" style={{ fontSize: 'clamp(26px, 3vw, 40px)', color: '#111111' }}>Analysis & Perspectives</h2>
              </div>
              <Link to="/insights" className="hidden sm:inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase" style={{ color: '#2E7CF6' }}>
                All Insights <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {insights.slice(0, 3).map((insight, i) => (
              <Reveal key={insight.id} delay={i * 70}>
                <Link to={`/insights/${insight.id}`} className="group block border-t pt-8" style={{ borderColor: '#E5E5E5' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}>{insight.category}</span>
                    <span className="text-[11px]" style={{ color: '#AAAAAA' }}>{insight.date}</span>
                  </div>
                  <h3 className="text-[16px] font-semibold leading-snug mb-3 transition-colors group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>{insight.title}</h3>
                  <p className="text-[13px] leading-[1.65] line-clamp-2 mb-4" style={{ color: '#888888' }}>{insight.excerpt}</p>
                  <span className="text-[11px] font-medium" style={{ color: '#AAAAAA' }}>{insight.readTime}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ backgroundColor: '#F7F7F7', borderTop: '1px solid #E5E5E5', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={container}>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-center mb-10" style={{ color: '#BBBBBB' }}>Clients & Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {partners.map((p) => (
              <span key={p} className="text-[13px] font-semibold tracking-[0.05em] uppercase" style={{ color: '#CCCCCC' }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0A0F1E', paddingTop: '88px', paddingBottom: '88px' }}>
        <div style={{ ...container, textAlign: 'center' }}>
          <h2 className="font-light tracking-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#FFFFFF', lineHeight: 1.15 }}>
            Ready to make better<br />territorial decisions?
          </h2>
          <p className="text-[16px] leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto 36px' }}>
            Let's discuss your organization's spatial and territorial challenges.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-9 py-4 text-[13px] font-medium tracking-[0.06em] uppercase hover:opacity-90" style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}>
            Start a Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
