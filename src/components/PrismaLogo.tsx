interface PrismaLogoProps {
  size?: number
  variant?: 'dark' | 'light' | 'color'
}

export default function PrismaLogo({ size = 36, variant = 'color' }: PrismaLogoProps) {
  const colors = {
    dark: { face1: '#111111', face2: '#333333', face3: '#555555', edge: '#111111' },
    light: { face1: '#FFFFFF', face2: '#E5E5E5', face3: '#D0D0D0', edge: '#FFFFFF' },
    color: { face1: '#B9CBEA', face2: '#2E7CF6', face3: '#7AD83D', edge: '#111111' },
  }
  const c = colors[variant]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Prisma logo"
    >
      {/* Triangular prism — three visible faces */}
      {/* Left face */}
      <polygon points="2,35 20,8 20,46" fill={c.face1} />
      {/* Right face */}
      <polygon points="20,8 38,35 20,46" fill={c.face2} />
      {/* Bottom connecting face (subtle) */}
      <polygon points="2,35 20,46 38,35" fill={c.face3} opacity="0.7" />
      {/* Edges */}
      <polyline points="2,35 20,8 38,35 20,46 2,35" stroke={c.edge} strokeWidth="0.8" fill="none" opacity="0.4" />
      <line x1="20" y1="8" x2="20" y2="46" stroke={c.edge} strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}
