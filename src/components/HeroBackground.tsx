export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#0A0F1E]" />

      {/* Subtle grid — cartographic reference */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#B9CBEA" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Triangulated mesh overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#B9CBEA" strokeWidth="0.6" fill="none">
          {/* Triangulated surface */}
          <polygon points="0,0 240,180 120,0" />
          <polygon points="240,180 480,60 120,0" />
          <polygon points="480,60 600,240 240,180" />
          <polygon points="600,240 720,120 480,60" />
          <polygon points="720,120 960,200 600,240" />
          <polygon points="960,200 1080,60 720,120" />
          <polygon points="1080,60 1320,180 960,200" />
          <polygon points="1320,180 1440,0 1080,60" />
          <polygon points="0,360 240,180 0,180" />
          <polygon points="0,360 120,480 240,180" />
          <polygon points="120,480 360,360 240,180" />
          <polygon points="360,360 480,540 120,480" />
          <polygon points="480,540 600,360 360,360" />
          <polygon points="600,360 720,480 480,540" />
          <polygon points="720,480 840,300 600,360" />
          <polygon points="840,300 1080,420 720,480" />
          <polygon points="1080,420 1200,300 840,300" />
          <polygon points="1200,300 1440,360 1080,420" />
          <polygon points="0,540 180,720 0,720" />
          <polygon points="180,720 300,540 0,540" />
          <polygon points="300,540 480,660 180,720" />
          <polygon points="480,660 660,540 300,540" />
          <polygon points="660,540 720,720 480,660" />
          <polygon points="720,720 900,540 660,540" />
          <polygon points="900,540 1020,720 720,720" />
          <polygon points="1020,720 1200,540 900,540" />
          <polygon points="1200,540 1440,600 1020,720" />
          <polygon points="0,900 240,720 0,720" />
          <polygon points="240,720 480,840 0,900" />
          <polygon points="480,840 720,900 240,720" />
          <polygon points="720,900 960,780 480,840" />
          <polygon points="960,780 1200,900 720,900" />
          <polygon points="1200,900 1440,780 960,780" />
          {/* Accent highlight triangles */}
          <polygon points="600,240 720,120 840,300" stroke="#2E7CF6" strokeWidth="0.8" opacity="0.4" />
          <polygon points="720,480 840,300 960,420" stroke="#7AD83D" strokeWidth="0.8" opacity="0.3" />
          <polygon points="360,360 480,240 600,360" stroke="#B9CBEA" strokeWidth="0.8" opacity="0.5" />
        </g>
      </svg>

      {/* Voronoi-inspired network dots */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g fill="#B9CBEA">
          {[
            [120,0],[480,60],[720,120],[1080,60],[1440,0],
            [240,180],[600,240],[960,200],[1320,180],
            [0,360],[360,360],[720,480],[1080,420],[1440,360],
            [180,540],[480,540],[840,300],[1200,300],
            [0,720],[300,540],[660,540],[1020,720],[1200,540],
            [240,720],[480,660],[720,720],[960,780],[1440,780],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" />
          ))}
        </g>
        <g stroke="#2E7CF6" strokeWidth="0.4" opacity="0.3">
          <line x1="720" y1="120" x2="960" y2="200" />
          <line x1="600" y1="240" x2="720" y2="480" />
          <line x1="840" y1="300" x2="1080" y2="420" />
          <line x1="480" y1="540" x2="660" y2="540" />
          <line x1="720" y1="480" x2="960" y2="780" />
        </g>
      </svg>

      {/* Radial glow — center left */}
      <div
        className="absolute"
        style={{
          left: '20%',
          top: '40%',
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(46,124,246,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Radial glow — right accent */}
      <div
        className="absolute"
        style={{
          right: '10%',
          top: '30%',
          width: '400px',
          height: '400px',
          transform: 'translate(50%, -50%)',
          background: 'radial-gradient(circle, rgba(122,216,61,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}
