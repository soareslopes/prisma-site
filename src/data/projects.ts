export interface Project {
  id: string
  title: string
  category: string
  summary: string
  description: string
  client: string
  year: string
  featured?: boolean
  image: string
  challenge: string
  methodology: string
  findings: string[]
  impact: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'mobility-fortaleza',
    title: 'Urban Mobility Diagnostics — Metropolitan Region of Fortaleza',
    category: 'Mobility',
    summary: 'Comprehensive mobility study combining GPS traces, transit data and origin-destination surveys to quantify accessibility gaps across the metropolitan territory.',
    description: 'A territorial analysis of mobility conditions across the Fortaleza metropolitan region, integrating passive data sources with structured field surveys to identify structural inequalities in access to opportunity.',
    client: 'State Secretariat for Infrastructure',
    year: '2024',
    featured: true,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80',
    challenge: 'The metropolitan region presented severe spatial fragmentation in transit coverage, with low-income peripheral municipalities facing travel times exceeding 90 minutes to major employment centers. Existing diagnostic tools lacked spatial granularity to support infrastructure investment prioritization.',
    methodology: 'We integrated four data streams: (1) anonymized GPS traces from mobile network operators representing 2.3 million daily trips; (2) GTFS feeds from six municipal transit operators; (3) a structured origin-destination survey of 8,400 households; and (4) land-use zoning layers. Accessibility indices were calculated using cumulative opportunity metrics at 30, 45 and 60-minute isochrones by transport mode.',
    findings: [
      '67% of jobs in the metropolitan region are accessible within 45 minutes for residents of the two central municipalities, compared to only 12% for residents of the four peripheral municipalities.',
      'Transit-dependent households in peripheral areas spend on average 23% of household income on transportation costs.',
      'Three corridor upgrades would increase accessibility for over 400,000 residents — representing 89% of the territorial equity gain at 31% of the full network expansion cost.',
      'Peak-hour transit saturation on the main radial corridors reaches 180% of designed capacity, directly causing the observed reliability degradation.'
    ],
    impact: 'Findings directly informed the state infrastructure investment plan for 2025–2028, with three priority corridors incorporated into the federal co-financing framework. The accessibility methodology was adopted as the standard evaluation instrument for new transit proposals.',
    tags: ['Mobility', 'Accessibility', 'Transit', 'Origin-Destination', 'Metropolitan Planning']
  },
  {
    id: 'real-estate-intelligence-ceara',
    title: 'Real Estate Market Intelligence — Coastal Corridor',
    category: 'Real Estate Intelligence',
    summary: 'Spatial econometric analysis of residential land value formation across a 280km coastal corridor, combining transaction records, environmental data and infrastructure proximity metrics.',
    description: 'A hedonic price modeling study identifying the spatial drivers of land value appreciation and supporting investment location decisions for a major real estate development group.',
    client: 'Confidential — Real Estate Investment Group',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
    challenge: 'The client required a rigorous spatial framework to allocate capital across twelve candidate municipalities along a coastal development corridor. Existing market reports lacked spatial granularity and failed to account for infrastructure pipeline effects on land value trajectories.',
    methodology: 'Spatial hedonic regression models were estimated using 14,000 recorded transactions over a five-year period. Explanatory variables included beach proximity gradients, infrastructure accessibility indices, environmental quality indicators and planned infrastructure pipeline effects modeled as spatial discount functions. Geographically Weighted Regression was used to identify spatial heterogeneity in price formation mechanisms.',
    findings: [
      'Infrastructure accessibility explains 34% of inter-municipal land price variance, significantly outweighing natural amenity effects (18%).',
      'Three municipalities in the northern segment present structural undervaluation relative to infrastructure pipeline projections, suggesting near-term appreciation potential.',
      'Coastal setback compliance is systematically capitalized into property values, with compliant parcels commanding a 12–19% premium across all market segments.',
      'Tourism seasonality creates a documented price gradient that conventional cross-sectional analysis underestimates by an average of 22%.'
    ],
    impact: 'The spatial investment framework guided capital allocation decisions representing BRL 340 million in land acquisition. The GWR-based segmentation model was licensed for ongoing monitoring by the client\'s internal analytics team.',
    tags: ['Real Estate', 'Hedonic Pricing', 'Spatial Econometrics', 'Land Value', 'Investment Intelligence']
  },
  {
    id: 'territorial-inequality-northeast',
    title: 'Territorial Inequality Index — Brazilian Northeast',
    category: 'Urban Planning',
    summary: 'Multi-dimensional composite index measuring socioeconomic, spatial and infrastructural inequality across 1,794 municipalities in Brazil\'s Northeast region.',
    description: 'A research partnership with a federal development agency to design a composite territorial inequality index for evidence-based targeting of public investment programs.',
    client: 'Federal Development Agency',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80',
    challenge: 'Existing development indices used by the agency failed to capture spatial dimensions of inequality — the geographic isolation of communities, infrastructure access gaps and territorial connectivity deficits that are structurally distinct from income-based measures. This produced systematic misallocation of public investment.',
    methodology: 'The index integrates 23 indicators across four dimensions: income and human development, spatial accessibility and connectivity, infrastructure provision, and territorial resilience. Principal Component Analysis was used for dimensional reduction, and spatial autocorrelation analysis (Moran\'s I, LISA clusters) was conducted to identify territorial typologies. The index was validated against program impact evaluations using difference-in-differences estimation.',
    findings: [
      'The spatial dimension explains a distinct 31% of variation in development outcomes not captured by traditional income-based indices.',
      'Fourteen priority clusters were identified where spatial and socioeconomic deprivation compound into structural isolation — representing 8.3 million inhabitants.',
      'Current investment allocation shows a 0.42 correlation with the composite index but only a 0.19 correlation with the spatial component, indicating systematic under-investment in spatially isolated communities.',
      'Semi-arid municipalities with medium income ranks but low spatial connectivity scores show the highest marginal returns to infrastructure investment in impact evaluations.'
    ],
    impact: 'The index was formally incorporated into the agency\'s project selection framework for the 2024–2027 investment cycle, affecting the allocation of BRL 2.1 billion in regional development funds.',
    tags: ['Territorial Development', 'Inequality', 'Composite Index', 'Public Policy', 'Spatial Statistics']
  },
  {
    id: 'logistics-network-optimization',
    title: 'Logistics Network Optimization — Industrial Supply Chain',
    category: 'Market Analysis',
    summary: 'Network analysis and facility location modeling for the spatial reorganization of a regional distribution network serving 1,200 retail points across four states.',
    description: 'Location intelligence study combining vehicle routing optimization, demand surface modeling and spatial facility location analysis to reduce distribution costs and improve service coverage.',
    client: 'Confidential — Consumer Goods Manufacturer',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80',
    challenge: 'The client\'s distribution network had evolved incrementally over 15 years without systematic spatial optimization. Analysis revealed structural inefficiencies: excessive cross-haul movements, suboptimal depot locations and service coverage gaps in high-growth micro-regions.',
    methodology: 'Demand surfaces were modeled using retail sales data, population dynamics and economic activity indicators, projected to 2030 using demographic microsimulation. Facility location optimization used a p-median model solved via simulated annealing, with constraints on investment capacity and transition costs. Routing efficiency was evaluated using Clarke-Wright savings algorithm on the proposed network configurations.',
    findings: [
      'Network reorganization from 7 to 5 strategically located distribution centers would reduce average delivery distance by 19% while improving coverage reliability.',
      'Two micro-regions in the northern distribution area show demand growth trajectories that would require capacity expansion within 18 months under the current configuration.',
      'The proposed western depot relocation eliminates a systematic cross-haul pattern responsible for 14% of total fleet kilometers traveled.',
      'Service level agreements for priority retail accounts could be improved from 83% to 97% on-time delivery with zero additional fleet investment.'
    ],
    impact: 'Network restructuring plan adopted with phased implementation. Year-one logistics cost reduction of 16% confirmed in operational review. The spatial demand model is now maintained as a live planning instrument.',
    tags: ['Logistics', 'Network Analysis', 'Facility Location', 'Supply Chain', 'Operations Research']
  },
  {
    id: 'urban-data-science-recife',
    title: 'Urban Data Science Platform — City of Recife',
    category: 'Spatial Data Science',
    summary: 'Design and implementation of a spatial data infrastructure and analytical platform integrating municipal administrative data for evidence-based urban management.',
    description: 'A technical and strategic engagement to build the spatial analytical capability of a major Brazilian city, from data architecture to decision-support dashboards.',
    client: 'Municipal Secretariat of Planning — Recife',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80',
    challenge: 'The municipality operated 23 data systems across different secretariats with no spatial integration layer, preventing cross-sectoral analysis. Investment decisions were made without systematic access to the spatial evidence already contained in existing administrative records.',
    methodology: 'We designed a spatial data warehouse architecture integrating fiscal cadastre, infrastructure maintenance records, service demand data and census microdata at the census tract level. A standardized spatial referencing protocol was implemented across 12 data sources. Analytical modules were built for urban service accessibility, infrastructure condition monitoring and social vulnerability mapping.',
    findings: [
      'Spatial integration of existing data sources revealed that 34% of infrastructure maintenance requests were spatially clustered in areas already flagged as structurally vulnerable — enabling proactive rather than reactive maintenance scheduling.',
      'Cross-referencing fiscal cadastre with infrastructure investment records identified BRL 47 million in deferred maintenance in areas with high collection efficiency — a systematic under-investment pattern not visible in non-spatial analysis.',
      'Service accessibility analysis revealed four neighborhoods in the western zone with documented low access to four or more municipal services simultaneously.',
      'The integrated platform reduced the analytical cycle for investment prioritization reports from 6 weeks to 4 days.'
    ],
    impact: 'The platform was institutionalized as the municipal spatial intelligence infrastructure, with adoption by five secretariats. The methodology was referenced in the OECD Urban Data Governance report as a case study in municipal data integration.',
    tags: ['Urban Data', 'Spatial Infrastructure', 'Municipal Analytics', 'Data Science', 'Smart Cities']
  }
]

export const categories = ['All', 'Mobility', 'Urban Planning', 'Real Estate Intelligence', 'Market Analysis', 'Spatial Data Science']
