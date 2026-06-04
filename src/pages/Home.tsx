import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, MapPin, BarChart3, Layers, Search, TrendingUp, Network } from 'lucide-react'
import HeroBackground from '../components/HeroBackground'
import { projects } from '../data/projects'
import { insights } from '../data/insights'

const W = 'w-[80%] max-w-[1400px] mx-auto'

const partners = [
  'IBGE', 'IPEA', 'WRI Brasil', 'FGV', 'BNDES', 'BID', 'Fortaleza City Hall', 'SEMOB',
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function RevealSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const methodSteps = [
  {
    number: '01',
    title: 'Observe',
    icon: Search,
    color: '#B9CBEA',
    text: 'We integrate diverse spatial data sources — from administrative records to sensor networks — applying rigorous quality protocols to build a reliable factual foundation.',
  },
  {
    number: '02',
    title: 'Understand',
    icon: Layers,
    color: '#2E7CF6',
    text: 'Through exploratory spatial analysis, we identify patterns, anomalies and structural relationships that are not visible in non-spatial data analysis.',
  },
  {
    number: '03',
    title: 'Model',
    icon: Network,
    color: '#7AD83D',
    text: 'We apply spatial statistics, econometrics, machine learning and simulation to build analytical models that explain observed phenomena and project future scenarios.',
  },
  {
    number: '04',
    title: 'Decide',
    icon: TrendingUp,
    color: '#F3E07A',
    text: 'Findings are translated into structured recommendations and decision frameworks — actionable intelligence that supports strategic investment and policy design.',
  },
]

const services = [
  {
    icon: MapPin,
    title: 'Spatial Intelligence',
    description: 'Location analysis, accessibility diagnostics, territorial vulnerability mapping and spatial equity assessments for infrastructure, services and investment.',
    color: '#B9CBEA',
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    description: 'Advanced spatial analytics, predictive modeling, machine learning applied to geographic data and quantitative impact evaluation methodologies.',
    color: '#2E7CF6',
  },
  {
    icon: Layers,
    title: 'Strategic Consulting',
    description: 'Evidence-based decision support for cities, infrastructure operators, financial institutions and private organizations navigating complex territorial decisions.',
    color: '#7AD83D',
  },
]

export default function Home() {
  const featuredProjects = projects.slice(0, 3)
  const latestInsights = insights.slice(0, 3)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: 'calc(100vh - 68px)' }}>
        <HeroBackground />
        <div className={`relative z-10 ${W} py-24 text-center`}>
          <div
            className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-[0.1em] uppercase"
            style={{ backgroundColor: 'rgba(46,124,246,0.15)', color: '#B9CBEA', border: '1px solid rgba(185,203,234,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7AD83D] animate-pulse" />
            Spatial Intelligence & Territorial Analytics
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-[76px] font-light leading-[1.07] tracking-[-0.025em] mb-7 max-w-4xl mx-auto"
            style={{ color: '#FFFFFF' }}
          >
            Spatial Intelligence
            <br />
            <span style={{ color: '#B9CBEA' }}>for Better Decisions</span>
          </h1>

          <p
            className="text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            We help organizations understand places, people and mobility through spatial analytics,
            territorial intelligence and data science.
          </p>

          <p
            className="text-[13px] font-medium tracking-[0.16em] uppercase mb-12"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Empowering Places With Science
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 px-8 py-4 text-[13px] font-medium tracking-[0.06em] uppercase transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}
            >
              Explore Our Work
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 text-[13px] font-medium tracking-[0.06em] uppercase transition-all duration-200 hover:border-white"
              style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.75)' }}
            >
              Contact Us
              <ChevronRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'rgba(255,255,255,0.2)' }}>
          <span className="text-[10px] tracking-[0.14em] uppercase">Scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)' }} />
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: '#FFFFFF' }}>
        <div className={W}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <RevealSection>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-6" style={{ color: '#2E7CF6' }}>
                Who We Are
              </p>
              <h2 className="text-4xl lg:text-[50px] font-light leading-[1.1] tracking-[-0.02em] mb-8" style={{ color: '#111111' }}>
                Evidence-based thinking
                <br />
                for complex territories
              </h2>
              <p className="text-[16px] leading-[1.8] mb-6" style={{ color: '#555555' }}>
                Prisma is a spatial intelligence and territorial analytics firm. We help governments, infrastructure operators, financial institutions and private organizations make better decisions about places — through rigorous analysis, advanced spatial modeling and structured strategic consulting.
              </p>
              <p className="text-[16px] leading-[1.8] mb-10" style={{ color: '#555555' }}>
                Our work sits at the intersection of spatial data science, applied research and strategic consulting. We do not produce generic reports. We build analytical frameworks specific to each organization's territorial context, challenges and objectives.
              </p>
              <Link
                to="/manifesto"
                className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-200"
                style={{ color: '#2E7CF6' }}
              >
                Read our Manifesto
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="relative" style={{ height: '460px' }}>
                <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: '#0A0F1E' }}>
                  <svg className="w-full h-full opacity-80" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#B9CBEA" strokeWidth="0.5" fill="none" opacity="0.3">
                      <ellipse cx="250" cy="200" rx="180" ry="140" />
                      <ellipse cx="250" cy="200" rx="140" ry="105" />
                      <ellipse cx="250" cy="200" rx="100" ry="72" />
                      <ellipse cx="250" cy="200" rx="60" ry="42" />
                    </g>
                    <g stroke="#2E7CF6" strokeWidth="0.6" opacity="0.5">
                      <line x1="250" y1="200" x2="110" y2="120" />
                      <line x1="250" y1="200" x2="390" y2="130" />
                      <line x1="250" y1="200" x2="420" y2="260" />
                      <line x1="250" y1="200" x2="180" y2="320" />
                      <line x1="250" y1="200" x2="70" y2="280" />
                      <line x1="110" y1="120" x2="390" y2="130" />
                      <line x1="390" y1="130" x2="420" y2="260" />
                      <line x1="420" y1="260" x2="180" y2="320" />
                      <line x1="180" y1="320" x2="70" y2="280" />
                      <line x1="70" y1="280" x2="110" y2="120" />
                    </g>
                    <g fill="rgba(46,124,246,0.04)" stroke="#2E7CF6" strokeWidth="0.4" opacity="0.6">
                      <polygon points="250,200 110,120 390,130" />
                      <polygon points="250,200 390,130 420,260" />
                      <polygon points="250,200 420,260 180,320" />
                      <polygon points="250,200 180,320 70,280" />
                      <polygon points="250,200 70,280 110,120" />
                    </g>
                    <polygon points="250,200 390,130 420,260" fill="rgba(122,216,61,0.06)" stroke="#7AD83D" strokeWidth="0.8" />
                    <g fill="#B9CBEA">
                      {[[250,200],[110,120],[390,130],[420,260],[180,320],[70,280]].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r={i === 0 ? 5 : 3} />
                      ))}
                    </g>
                    <circle cx="250" cy="200" r="5" fill="#2E7CF6" />
                    <g stroke="#B9CBEA" strokeWidth="0.3" opacity="0.1">
                      {[0,50,100,150,200,250,300,350,400].map(y => (
                        <line key={y} x1="0" y1={y} x2="500" y2={y} />
                      ))}
                      {[0,50,100,150,200,250,300,350,400,450,500].map(x => (
                        <line key={x} x1={x} y1="0" x2={x} y2="400" />
                      ))}
                    </g>
                  </svg>
                  <div className="absolute bottom-5 left-5">
                    <p className="text-[10px] font-mono tracking-[0.1em]" style={{ color: 'rgba(185,203,234,0.4)' }}>
                      SPATIAL NETWORK ANALYSIS
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: '#F7F7F7' }}>
        <div className={W}>
          <RevealSection>
            <div className="max-w-xl mb-18">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#2E7CF6' }}>
                Our Approach
              </p>
              <h2 className="text-4xl lg:text-[44px] font-light leading-[1.1] tracking-[-0.02em]" style={{ color: '#111111' }}>
                A structured analytical methodology
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {methodSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <RevealSection key={step.number} delay={i * 80}>
                  <div
                    className="p-8 h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div
                        className="w-11 h-11 flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}18`, border: `1px solid ${step.color}40` }}
                      >
                        <Icon size={20} style={{ color: step.color }} />
                      </div>
                      <span className="text-[38px] font-extralight leading-none tabular-nums" style={{ color: '#EEEEEE' }}>
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-semibold mb-4" style={{ color: '#111111' }}>
                      {step.title}
                    </h3>
                    <p className="text-[14px] leading-[1.8]" style={{ color: '#666666' }}>
                      {step.text}
                    </p>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: '#FFFFFF' }}>
        <div className={W}>
          <RevealSection>
            <div className="max-w-xl mb-18">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#2E7CF6' }}>
                What We Do
              </p>
              <h2 className="text-4xl lg:text-[44px] font-light leading-[1.1] tracking-[-0.02em]" style={{ color: '#111111' }}>
                Our areas of expertise
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <RevealSection key={s.title} delay={i * 100}>
                  <div className="group p-10 h-full transition-all duration-300 hover:-translate-y-1" style={{ border: '1px solid #E5E5E5' }}>
                    <div
                      className="w-12 h-12 flex items-center justify-center mb-8"
                      style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}35` }}
                    >
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <h3 className="text-[21px] font-semibold mb-4" style={{ color: '#111111' }}>
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-[1.8]" style={{ color: '#666666' }}>
                      {s.description}
                    </p>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: '#F7F7F7' }}>
        <div className={W}>
          <RevealSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#2E7CF6' }}>
                  Selected Work
                </p>
                <h2 className="text-4xl lg:text-[44px] font-light leading-[1.1] tracking-[-0.02em]" style={{ color: '#111111' }}>
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/portfolio"
                className="hidden sm:inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase"
                style={{ color: '#2E7CF6' }}
              >
                View All <ArrowRight size={13} />
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <RevealSection key={project.id} delay={i * 100}>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group block overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
                >
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: 'grayscale(15%)' }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 60%)' }}
                    />
                    {project.featured && (
                      <div
                        className="absolute top-4 left-4 px-2 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase"
                        style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}
                      >
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="text-[10px] font-medium tracking-[0.08em] uppercase px-2 py-0.5"
                        style={{ backgroundColor: 'rgba(10,15,30,0.7)', color: '#B9CBEA' }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-[16px] font-semibold leading-snug mb-3 transition-colors duration-200 group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                      {project.title}
                    </h3>
                    <p className="text-[13px] leading-[1.7] mb-5 line-clamp-3" style={{ color: '#777777' }}>
                      {project.summary}
                    </p>
                    <div className="flex items-center gap-1.5 text-[12px] font-medium tracking-[0.04em]" style={{ color: '#2E7CF6' }}>
                      View Project <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Insights ── */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: '#FFFFFF' }}>
        <div className={W}>
          <RevealSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#2E7CF6' }}>
                  Latest Insights
                </p>
                <h2 className="text-4xl lg:text-[44px] font-light leading-[1.1] tracking-[-0.02em]" style={{ color: '#111111' }}>
                  Analysis & Perspectives
                </h2>
              </div>
              <Link
                to="/insights"
                className="hidden sm:inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase"
                style={{ color: '#2E7CF6' }}
              >
                All Insights <ArrowRight size={13} />
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {latestInsights.map((insight, i) => (
              <RevealSection key={insight.id} delay={i * 80}>
                <Link
                  to={`/insights/${insight.id}`}
                  className="group block py-8 border-t transition-all duration-200"
                  style={{ borderColor: '#E5E5E5' }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5"
                      style={{ backgroundColor: '#F0F4FF', color: '#2E7CF6' }}
                    >
                      {insight.category}
                    </span>
                    <span className="text-[12px]" style={{ color: '#AAAAAA' }}>
                      {insight.date}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold leading-snug mb-4 transition-colors duration-200 group-hover:text-[#2E7CF6]" style={{ color: '#111111' }}>
                    {insight.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] mb-5 line-clamp-3" style={{ color: '#777777' }}>
                    {insight.excerpt}
                  </p>
                  <span className="text-[12px] font-medium" style={{ color: '#AAAAAA' }}>
                    {insight.readTime}
                  </span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients & Partners ── */}
      <section className="py-22" style={{ backgroundColor: '#F7F7F7', borderTop: '1px solid #E5E5E5' }}>
        <div className={W}>
          <RevealSection>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-center mb-12" style={{ color: '#AAAAAA' }}>
              Clients & Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              {partners.map((p) => (
                <span
                  key={p}
                  className="text-[14px] font-semibold tracking-[0.05em] uppercase transition-opacity duration-200 hover:opacity-60"
                  style={{ color: '#CCCCCC' }}
                >
                  {p}
                </span>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#0A0F1E' }}>
        <RevealSection>
          <div className="w-[80%] max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-[44px] font-light leading-[1.15] tracking-[-0.02em] mb-7" style={{ color: '#FFFFFF' }}>
              Ready to make better
              <br />
              territorial decisions?
            </h2>
            <p className="text-[17px] leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Let's discuss your organization's analytical challenges and how spatial intelligence can provide the evidence base for your decisions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 text-[13px] font-medium tracking-[0.06em] uppercase transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#2E7CF6', color: '#FFFFFF' }}
            >
              Start a Conversation
              <ArrowRight size={15} />
            </Link>
          </div>
        </RevealSection>
      </section>
    </main>
  )
}
