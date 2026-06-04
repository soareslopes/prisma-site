import { container } from '../lib/layout'

const body = [
  'The quality of territorial decisions depends on the quality of territorial intelligence. Where infrastructure is built, where services are allocated, where capital flows — these choices shape the material conditions of life for entire communities. Getting them right requires more than intuition and political judgment. It requires rigorous, spatially-aware analysis.',
  'Spatial thinking reveals what conventional analysis conceals. The relationships between distance and access, between connectivity and opportunity, between territorial patterns and social outcomes are invisible in tabular data. They require methods built for geography — and a discipline of thought that treats location as a structural variable, not a label.',
  'Data alone is not enough. Evidence requires methods. Methods require theory. Our practice is built on the conviction that analytical rigor and organizational relevance are not in tension. It is possible to produce findings that are both scientifically sound and directly actionable for the decision-makers who need them.',
  'We work at the intersection of spatial data science, applied research and strategic consulting. We serve governments, infrastructure operators, financial institutions and private organizations facing complex territorial challenges. Our goal is always the same: to provide the clearest possible analytical picture of a territory, and to translate that picture into better decisions.',
]

export default function Manifesto() {
  return (
    <main>
      {/* Header */}
      <div style={{ backgroundColor: '#0A0F1E', paddingTop: '88px', paddingBottom: '72px' }}>
        <div style={container}>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: '#B9CBEA' }}>Manifesto</p>
          <h1 className="font-light tracking-tight mb-4" style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#FFFFFF', lineHeight: 1.07 }}>
            What we believe
          </h1>
          <p className="text-[17px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Our principles on place, science and practice.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ ...container, paddingTop: '72px', paddingBottom: '96px', maxWidth: '760px' }}>
        <div className="space-y-8">
          {body.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: i === 0 ? '20px' : '17px',
                lineHeight: i === 0 ? 1.75 : 1.85,
                color: i === 0 ? '#222222' : '#555555',
                fontWeight: i === 0 ? 400 : 400,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}
