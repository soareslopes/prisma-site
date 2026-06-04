import { useEffect, useRef } from 'react'

function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)
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
      { threshold: 0.06 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const sections = [
  {
    number: '01', title: 'Places Matter',
    body: [
      'Where something happens is not incidental context. It is a constitutive dimension of what happens. The spatial distribution of populations, infrastructure, services and economic activity directly determines who has access to opportunity, which risks are concentrated in which communities, and which territories benefit from or bear the costs of collective decisions.',
      'Urban planning has known this for a century. Development economics is only beginning to internalize it. Yet the analytical tools available to most organizations still treat space as a background attribute — a label attached to data, rather than a relational system that shapes outcomes.',
      'Our starting premise is that place matters, and that understanding place requires methods specifically designed for the spatial structure of phenomena.',
    ],
  },
  {
    number: '02', title: 'Evidence Before Opinion',
    body: [
      'Territorial decisions — where to build infrastructure, how to allocate public services, where to invest capital, which policies to prioritize — have historically been made through combinations of political intuition, professional judgment and institutional inertia. Each of these inputs has its place. None of them is sufficient on its own.',
      'Evidence does not eliminate judgment. It structures it. A rigorous spatial analysis cannot tell a city government which values to prioritize. It can tell them, with precision, what the spatial consequences of different priority orderings will be.',
      'We believe that the quality of public decisions improves systematically when evidence is gathered, analyzed and communicated with discipline.',
    ],
  },
  {
    number: '03', title: 'Data Is Not Enough',
    body: [
      'The proliferation of geospatial data — from satellite imagery to mobile network traces to administrative microdata — has created extraordinary analytical possibilities. It has also created a widespread confusion between data access and analytical capacity.',
      'Data does not speak for itself. It requires methods. Methods require theory. Theory requires a disciplined understanding of the phenomena being studied.',
      'Our practice is built around methodological discipline. We choose the tools appropriate to the question, not the question appropriate to the tools.',
    ],
  },
  {
    number: '04', title: 'Spatial Thinking Creates Better Decisions',
    body: [
      'Spatial thinking is not a technical skill. It is an intellectual discipline — a systematic habit of reasoning about relationships between phenomena and locations, about how distance and connectivity shape interaction, about how territorial patterns emerge from individual and institutional behavior.',
      'Organizations that internalize spatial thinking as part of their analytical culture make systematically better decisions in complex environments. They identify risks earlier, locate opportunities that non-spatial analysis misses, and design interventions with higher precision.',
      'Our consulting practice aims to transfer this way of thinking to client organizations — not just to deliver findings, but to build analytical capacity that persists after each engagement.',
    ],
  },
  {
    number: '05', title: 'Science Must Inform Territory',
    body: [
      'The gap between spatial science and territorial governance is costly. Research institutions produce sophisticated analytical methods that never reach planning practice. Planning practice accumulates experience in managing complexity that rarely informs methodological development.',
      'We position ourselves explicitly at the interface between research and practice. Our methodologies are grounded in the academic literature on spatial statistics, urban economics, transport modeling and regional science. Our deliverables are designed for organizational decision-making.',
      'We do not oversimplify to be accessible. We work to make rigorous methods comprehensible to the audiences that need to act on their findings.',
    ],
  },
  {
    number: '06', title: 'Intelligence Must Be Actionable',
    body: [
      'Analytical excellence that does not produce organizational change is expensive research. Our obligation to clients extends to ensuring that findings are structured in formats that enable the decisions the organization needs to make.',
      'This requires understanding the institutional context in which decisions are made — the constraints, the stakeholders, the timelines, the legitimate interests that must be balanced.',
      'We invest in understanding the decision architecture of each engagement as carefully as we invest in the analytical methods applied within it.',
    ],
  },
  {
    number: '07', title: 'Empowering Places With Science',
    body: [
      'The territories we study are not abstract geographical units. They are the material conditions of life for specific communities — the places where people build careers, raise families, age, create and are created by their environments.',
      'This is why the work matters. Spatial intelligence, practiced with rigor and communicated honestly, is a genuine contribution to the collective capacity to manage the territories we share — with less waste, less inequality, and more precision.',
      'This is what we mean when we say we empower places with science.',
    ],
  },
]

function ManifestoSection({ number, title, body }: { number: string; title: string; body: string[] }) {
  const ref = useScrollReveal() as React.RefObject<HTMLElement>
  return (
    <section
      ref={ref}
      className="py-16 lg:py-20"
      style={{ borderTop: '1px solid #E5E5E5', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="text-[11px] font-mono tracking-[0.14em] uppercase block mb-3" style={{ color: '#AAAAAA' }}>{number}</span>
          <h2 className="text-[26px] lg:text-[32px] font-light leading-[1.2] tracking-[-0.01em]" style={{ color: '#111111' }}>{title}</h2>
        </div>
        <div className="lg:col-span-8 space-y-5">
          {body.map((para, i) => (
            <p key={i} className="text-[16px] lg:text-[17px] leading-[1.85]" style={{ color: i === 0 ? '#333333' : '#555555' }}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Manifesto() {
  return (
    <main>
      {/* Header */}
      <div className="py-24 lg:py-32" style={{ backgroundColor: '#0A0F1E' }}>
        <div className="w80">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-6" style={{ color: '#B9CBEA' }}>Our Manifesto</p>
          <h1 className="text-5xl lg:text-[68px] font-light leading-[1.05] tracking-[-0.025em] max-w-3xl mb-7" style={{ color: '#FFFFFF' }}>
            What we believe
          </h1>
          <p className="text-[17px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Our principles on place, science and practice.</p>
        </div>
      </div>

      {/* Sections */}
      <div className="w80 pb-16">
        {sections.map((s) => (
          <ManifestoSection key={s.number} number={s.number} title={s.title} body={s.body} />
        ))}
      </div>

      {/* Closing */}
      <div className="border-t py-16 lg:py-20" style={{ borderColor: '#E5E5E5', backgroundColor: '#F7F7F7' }}>
        <div className="w80">
          <div className="max-w-xl">
            <p className="text-[16px] leading-[1.75] mb-6" style={{ color: '#555555' }}>
              These principles were developed through years of engagement with the practical challenges of territorial decision-making across governments, infrastructure operators, financial institutions and urban planners.
            </p>
            <p className="text-[16px] leading-[1.75] mb-8" style={{ color: '#555555' }}>
              They continue to evolve as we encounter new contexts and new analytical challenges. They are a foundation, not a ceiling.
            </p>
            <p className="text-[14px] font-medium tracking-[0.04em]" style={{ color: '#111111' }}>— The Prisma Team</p>
            <p className="text-[12px] mt-1" style={{ color: '#AAAAAA' }}>Lisboa, Portugal · {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
