export interface Insight {
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  readTime: string
  featured?: boolean
  author: string
  content?: string
}

export const insights: Insight[] = [
  {
    id: 'measuring-urban-accessibility',
    title: 'Measuring Urban Accessibility: Beyond the 30-Minute City',
    category: 'Cities',
    date: 'May 2025',
    excerpt: 'The dominant discourse around urban mobility has converged on the "30-minute city" as a planning benchmark. But accessibility is not a scalar metric. It is a multidimensional spatial relationship between where people live, where opportunities exist, and the transport infrastructure connecting them.',
    readTime: '8 min read',
    featured: true,
    author: 'Prisma Research Team',
    content: `The dominant discourse around urban mobility has converged on the "30-minute city" as a planning benchmark. But accessibility is not a scalar metric. It is a multidimensional spatial relationship between where people live, where opportunities exist, and the transport infrastructure connecting them.

Cumulative opportunity metrics — counting the number of jobs, schools or healthcare facilities reachable within a given travel time threshold — remain the most operationally tractable accessibility measure for planning purposes. Their limitation is equally important to understand: they are sensitive to the threshold chosen, they aggregate heterogeneous opportunities, and they mask distributional effects within the threshold.

Utility-based accessibility models, derived from discrete choice theory, address some of these limitations by incorporating destination attractiveness and the diminishing marginal utility of additional travel time. They are, however, computationally demanding and require robust calibration data that many cities lack.

The most significant methodological gap in current accessibility practice is the inadequate treatment of temporal variability. Transit networks operate on timetables; walking conditions vary by weather and personal capacity; congestion is predictably cyclical. An accessibility index calculated on average conditions misrepresents the daily experience of transit-dependent populations by 30–40% in cities with weak off-peak service.

Our recommendation for planning practice: calculate accessibility at multiple time thresholds (30, 45 and 60 minutes), disaggregate by transport mode and trip purpose, and report both mean accessibility and the spatial distribution of accessibility deprivation. This approach produces actionable intelligence — it tells you where investment produces the highest accessibility gain per unit of cost.`
  },
  {
    id: 'territorial-inequality',
    title: 'Understanding Territorial Inequality: Why Place Matters More Than We Think',
    category: 'Spatial Intelligence',
    date: 'April 2025',
    excerpt: 'Income-based inequality metrics have dominated development policy for decades. They tell us that some people have more than others. They tell us almost nothing about why, and they are particularly blind to the spatial mechanisms through which inequality reproduces itself across generations.',
    readTime: '10 min read',
    featured: false,
    author: 'Prisma Research Team'
  },
  {
    id: 'future-location-intelligence',
    title: 'The Future of Location Intelligence in Corporate Decision-Making',
    category: 'Spatial Intelligence',
    date: 'March 2025',
    excerpt: 'For most of the 20th century, location intelligence was an expensive specialty — the province of large retailers and telecommunications companies with the resources to maintain dedicated GIS teams. The proliferation of GPS-enabled devices, open geospatial data and cloud computing has fundamentally changed the economic calculus.',
    readTime: '7 min read',
    featured: false,
    author: 'Prisma Research Team'
  },
  {
    id: 'data-science-urban-planning',
    title: 'What Data Science Can and Cannot Do for Urban Planning',
    category: 'Data Science',
    date: 'February 2025',
    excerpt: 'Machine learning has entered urban planning practice with extraordinary momentum and, in many cases, extraordinary naivety. The genuine contributions of data science to planning practice deserve careful articulation — as do its structural limitations.',
    readTime: '12 min read',
    featured: false,
    author: 'Prisma Research Team'
  },
  {
    id: 'mobility-data-passive',
    title: 'Passive Mobility Data: Methodological Rigor in a Data-Rich Environment',
    category: 'Mobility',
    date: 'January 2025',
    excerpt: 'The availability of anonymized location data from mobile network operators and GPS-enabled applications has created extraordinary opportunities for mobility research. It has also created a methodological minefield that transport planners are only beginning to navigate systematically.',
    readTime: '9 min read',
    featured: false,
    author: 'Prisma Research Team'
  },
  {
    id: 'real-estate-spatial-econometrics',
    title: 'Spatial Econometrics in Real Estate: Moving Beyond Traditional Valuation',
    category: 'Markets',
    date: 'December 2024',
    excerpt: 'Hedonic pricing models have been a staple of real estate valuation research for over five decades. The spatial dimension of real estate value — the fundamental insight that location is not merely an attribute but a relational property — has been systematically underexplored in practice.',
    readTime: '11 min read',
    featured: false,
    author: 'Prisma Research Team'
  }
]

export const insightCategories = ['All', 'Mobility', 'Cities', 'Data Science', 'Spatial Intelligence', 'Markets']
