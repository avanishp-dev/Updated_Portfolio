import { Project, TimelineStory, ExperienceItem, CommunityItem, CommunityPhoto } from '../types';

export const USER_INFO = {
  name: 'Avanish Padhy',
  title: 'Full-Stack Developer & AI Explorer',
  tagline: 'Bridging creativity with technology — crafting scalable full-stack applications & agentic AI systems.',
  location: 'Bhubaneswar, Odisha, India',
  email: 'avanishpadhy25@gmail.com',
  phone: '+91-7978316446',
  github: 'https://github.com/avanishp-dev',
  linkedin: 'https://www.linkedin.com/in/avanishpadhy-dev',
  portfolio: 'https://avanishpadhy.in',
  codolio: 'https://codolio.com/profile/avanish-dev',
  university: "Siksha 'O' Anusandhan University",
  degree: 'Bachelor of Technology in Computer Science & Engineering (2025 - 2029)',
  highSchool: "St. Xavier's High School, Kedargouri (Class XII, Science Stream)",
  school: 'DAV Public School Pokhariput'
};

export const PROJECTS: Project[] = [

  {
    id: 'siren-sih-project',
    slug: 'siren-sih-project',
    title: 'S.I.R.E.N. — Smart Intelligent Response & Emergency Navigation',
    subtitle: 'A multi-modal IoT and AI framework cutting ambulance response times to 10-15 minutes by creating automated failsafe green corridors.',
    company: 'Smart India Hackathon (SIH)',
    category: 'full-stack',
    role: 'Frontend Developer & UI/UX',
    timeline: '2026',
    status: 'SIH Project',
    statusType: 'shipped',
    tools: ['React.js', 'Tailwind CSS', 'FastAPI', 'IoT (Raspberry Pi/ESP-32)', 'MQTT', 'Redis', 'Machine Learning'],
    team: ['Avanish Padhy (Frontend) & Team S.I.R.E.N.'],
    coverImage: '/siren-home.png',
    videoUrl: '/siren-dashboard.mp4',
    tags: ['SIH', 'IoT', 'Emergency Network', 'Frontend'],
    summary: 'Multi-modal IoT/AI framework for dynamic green corridors, cutting ambulance response times in India to WHO standards.',
    hookQuestion: 'How do you cut ambulance response times by 50% across congested Indian roads to potentially save 86,500 lives a year?',
    overview: 'S.I.R.E.N. (Smart Intelligent Response and Emergency Navigation) is an IoT and AI-driven system designed to tackle India’s 22-minute average ambulance response time. By detecting ambulances early using audio and visual sensors on smart traffic poles, S.I.R.E.N. preemptively turns signals green, creates a dynamic fast lane, and alerts nearby authorities, bringing response times closer to the WHO’s 8-10 minute benchmark without internet dependency.',
    context: {
      headline: 'Overcoming congested transit routes for emergency vehicles',
      body: [
        'In India, ambulances frequently get stuck in traffic, crowds, or narrow roads, often leading to response delays. Blindspots spanning 200-500 meters and semi-urban roads without proper signaling trap vehicles. Furthermore, manual overrides by emergency vehicles cause a 4.8x higher collision risk.',
        'Road accidents cause 1.73 lakh deaths annually, with 30% linked to transit and response delays. Reducing emergency transit times to 10-15 minutes can decrease mortality by 50% and save nearly 86,500 lives every year.'
      ]
    },
    marketAnalysis: {
      headline: 'Hardware Intelligence & Failsafe Resilience',
      body: 'S.I.R.E.N. costs just ₹10,000 per junction (a 90% saving over traditional V2X radar) and ₹2,500-₹3,800 per ambulance. It operates independently of grid power and broadband.',
      points: [
        'Solar-powered operation independent of the power grid.',
        'LoRa mesh (long-range radio) ensures reliability without internet.',
        'Overlapped GPS, CCTV, and audio sensors ensure a failsafe backup.'
      ]
    },
    solutions: [
      {
        title: 'Multi-Modal IoT & AI Detection Framework',
        description: 'Deployed Smart Traffic Junctions featuring Raspberry Pi 5, ESP-32, INMP441 MEMS microphones, and IP cameras for precise audio-visual detection of approaching ambulances.',
        points: [
          'Automatically turns traffic lights green within an optimal time window.',
          'Broadcasts automated voice alerts to nearby police walkie-talkies.'
        ]
      },
      {
        title: 'Real-Time Central Hub & Dashboard',
        description: 'Engineered a highly responsive frontend dashboard paired with an MQTT Broker and Redis buffer to process instant traffic updates with negligible delay.',
        points: [
          'Provides a centralized, highly optimized interface for dispatch and monitoring.',
          'Live GPS Telemetry integration for real-time monitoring.'
        ]
      },
      {
        title: 'Time-Loss Machine Learning Engine',
        description: 'Integrated a FastAPI cloud engine running a Time-Loss ML model to proactively minimize transit delays by dynamically rebalancing signal cycles.',
        points: [
          'Prevents gridlocks ahead of the emergency vehicle path.',
          'Eliminates the need to construct physical lanes by establishing smart, software-defined priority routes.'
        ]
      }
    ],
    outcome: {
      headline: 'A paradigm shift in urban emergency response',
      body: [
        'Successfully bridged the urban-rural emergency response gap with a highly scalable, power-independent system.',
        'Delivered a fully functional frontend dashboard demonstrating system oversight, reducing cognitive load on traffic and medical dispatchers while establishing a blueprint to save thousands of lives annually.'
      ]
    },
    galleryImages: [
      '/siren-home.png'
    ]

  },

  {
    id: 'creobizz-platform',
    slug: 'creobizz-platform',
    title: 'CREOBIZZ — Influencer & SMB Collaboration Platform',
    subtitle: 'Connecting small and medium-sized businesses (SMBs) in India with influencers for seamless sponsored collaborations.',
    company: 'CREOBIZZ',
    category: 'full-stack',
    role: 'Frontend Developer',
    timeline: '2026',
    status: 'MVP / Concept',
    statusType: 'concept',
    tools: ['React.js', 'Tailwind CSS', 'Frontend Development', 'UI/UX', 'Payment Integration'],
    team: ['Avanish Padhy'],
    coverImage: '/creobizz-home.png',
    videoUrl: '/creobizz-landing.mp4',
    tags: ['SMBs', 'Influencer Marketing', 'Marketplace', 'Frontend'],
    summary: 'Built the frontend landing page and user flows for an MVP platform connecting Indian SMBs with influencers for sponsored posts.',
    hookQuestion: 'How can Indian SMBs leverage influencer marketing on a tight budget while empowering creators to monetize their audience?',
    overview: 'In India, many small and medium-sized businesses (SMBs) struggle to promote their products on social media due to a lack of marketing expertise, time, and budget. CREOBIZZ bridges this gap by providing a streamlined platform that connects SMBs directly with content creators and influencers seeking brand collaborations and sponsorships.',
    context: {
      headline: 'Empowering local businesses through targeted digital collaborations',
      body: [
        'Providers (SMBs) represent a massive sector in India with limited resources for large-scale marketing. Meanwhile, content creators with strong followings on Instagram, YouTube, and Facebook are actively looking for brand partnerships.',
        'CREOBIZZ standardizes this interaction by offering profile creation, targeted influencer search filters (category, location, demographics), secure proposals, and integrated payment processing.'
      ]
    },
    solutions: [
      {
        title: 'Provider Onboarding & Profile Creation',
        description: 'Designed a seamless onboarding flow allowing SMBs to quickly create professional profiles showcasing their products, services, and preferred payment methods.',
        points: [
          'Intuitive step-by-step account setup.',
          'Business detail and product catalog integration.'
        ]
      },
      {
        title: 'Advanced Influencer Search & Discovery',
        description: 'Built a search interface enabling providers to filter through influencers based on highly specific criteria, ensuring optimal brand alignment.',
        points: [
          'Filtering by niche category, geolocation, and audience demographics.',
          'Rich influencer profiles displaying reach and past collaborations.'
        ]
      },
      {
        title: 'End-to-End Collaboration Management',
        description: 'Developed the frontend UI for the collaboration lifecycle: from sending proposals to negotiating terms, managing acceptances, and processing secure payments.',
        points: [
          'Streamlined collaboration request forms outlining campaign terms.',
          'Dashboard for both providers and influencers to track campaign performance and communications.'
        ]
      }
    ],
    outcome: {
      headline: 'A foundation for a modern creator marketplace',
      body: [
        'Delivered a clean, intuitive frontend landing page demonstrating the core MVP user flows.',
        'Established a scalable UI architecture ready for backend API integration and secure payment gateway processing.'
      ]
    },
    galleryImages: [
      '/creobizz-home.png'
    ]
  },

  {
    id: 'iportman-port-authority',
    slug: 'iportman-port-authority',
    title: 'iPortman — Enterprise Port Operating System Optimization',
    subtitle: 'Enterprise backend performance optimization, Hibernate N+1 query elimination, and real-time vessel & cargo frontend for Paradip Port Authority.',
    company: 'Paradip Port Authority',
    category: 'enterprise',
    role: 'Software Engineer Intern',
    timeline: 'June 2026 - July 2026',
    status: 'Handed Off 2026',
    statusType: 'handoff',
    tools: ['J2EE / Jakarta EE', 'JPA (Hibernate)', 'Oracle Database', 'SQL', 'REST APIs', 'JavaScript', 'Tech Mahindra Enterprise Stack'],
    team: ['Avanish Padhy (Software Engineer Intern)', 'Senior Enterprise Engineering Team @ Paradip Port Authority & Tech Mahindra'],
    coverImage: '/iportman-home.png',
    tags: ['Enterprise Backend', 'Hibernate', 'Oracle DB', 'Port Logistics'],
    summary: 'Optimized backend modules in J2EE/Hibernate on the nationwide iPortman enterprise system, resolved N+1 query bottlenecks, and improved vessel & cargo operator interfaces.',
    hookQuestion: 'How do you optimize mission-critical enterprise systems handling millions of tons of cargo transactions across India’s premier ports?',
    overview: 'Worked on iPortman, the enterprise Port Operating System that powers digital operations across major ports of India, built and implemented by Tech Mahindra. Developed and optimized backend modules using J2EE/Jakarta EE, JPA (Hibernate), Oracle Database, SQL, and REST APIs within a modular, production-grade enterprise architecture.',
    context: {
      headline: 'Powering high-volume maritime commerce across India’s coastline',
      body: [
        'Paradip Port is one of India’s top cargo-handling maritime hubs, processing continuous streams of dry bulk, coal, iron ore, and crude shipments. The iPortman system coordinates ship pilotage, berth reservations, stevedoring, and multi-crore billing transactions.',
        'With thousands of database queries executed every hour, enterprise backend latency and inefficient database roundtrips directly impact berth turnaround times and port operational efficiency.'
      ]
    },
    marketAnalysis: {
      headline: 'Enterprise Port Infrastructure Challenges',
      body: 'Working on high-throughput enterprise systems requires meticulous database profiling, strict transaction isolation, and modular Jakarta EE service contracts.',
      points: [
        'Deep hierarchy of JPA entity mappings (Vessels, Berths, Cargo Manifests, Customs Bills).',
        'Strict uptime and data consistency mandates across round-the-clock port shifts.',
        'Collaborative enterprise workflow with senior systems architects and QA engineers.'
      ]
    },
    keyInsights: [
      {
        title: 'Diagnosing the Hibernate N+1 Bottleneck',
        description: 'Identified that nested entity fetching in cargo transaction manifests was triggering hundreds of redundant SQL SELECT queries, causing measurable database CPU spikes.'
      },
      {
        title: 'Operator-First Data Presentation',
        description: 'Re-structured frontend data presentation layers so vessel coordinators can parse real-time berthing and container status in seconds.'
      }
    ],
    problem: 'How might we eliminate redundant database roundtrips across enterprise JPA entity relationships and present complex cargo manifests cleanly to port operators on tight schedules?',
    solutions: [
      {
        title: 'Resolved Hibernate N+1 Query Problem',
        description: 'Diagnosed and resolved the N+1 query problem in Hibernate by re-engineering entity fetching strategies (utilizing JOIN FETCH and batch fetching configurations), drastically reducing unnecessary database calls and improving overall system throughput.',
        points: [
          'Audited SQL query execution logs across high-traffic cargo transaction tables.',
          'Significantly reduced latency on multi-record vessel and bill queries.'
        ]
      },
      {
        title: 'Jakarta EE & REST API Module Development',
        description: 'Developed and optimized modular backend services in J2EE/Jakarta EE and JPA, connecting seamlessly with Oracle Database and exposing structured REST APIs.',
        points: [
          'Followed enterprise design patterns ensuring code modularity and transactional safety.',
          'Participated in code reviews, regression testing, and deployment validation.'
        ]
      },
      {
        title: 'iPortman Frontend Presentation Layer',
        description: 'Worked on iPortman’s frontend layer, improving how vessel, cargo, and transaction data is presented to port operators for faster, real-time decision-making.',
        points: [
          'Streamlined tabular views, search filters, and status indicators.',
          'Enhanced operator usability during peak dock loading periods.'
        ]
      }
    ],
    outcome: {
      headline: 'Measurable system speedup in national infrastructure',
      body: [
        'Eliminated unnecessary database calls on key operational modules, substantially improving system response times for dockside operators.',
        'Gained hands-on experience with production enterprise engineering, database profiling, code reviews, and deployment validation.'
      ]
    },
    galleryImages: [
      '/iportman-home.png',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80'
    ]

  },

  {
    id: 'sentinel-x',
    slug: 'sentinel-x',
    title: 'Sentinel-X — Autonomous Multi-Agent Deforestation Governance',
    subtitle: 'Multi-agent autonomous AI ecosystem orchestrating Field Researcher and Policy Director agents via n8n to detect illegal deforestation and output SDG-aligned policy directives.',
    company: 'Agentic AI & GovTech',
    category: 'agentic-ai',
    role: 'AI Systems & Backend Engineer',
    timeline: '2026',
    status: 'Award Winning 2026',
    statusType: 'award',
    tools: ['n8n', 'Node.js', 'Groq LLM', 'SerpAPI', 'Wikipedia API', 'JavaScript', 'HTML/CSS', 'Agentic AI'],
    team: ['Avanish Padhy (Lead Systems & AI Developer)'],
    coverImage: '/sentinel-x-home.png',
    tags: ['Multi-Agent AI', 'n8n Workflows', 'Groq LLMs', 'GovTech'],
    summary: 'Autonomous multi-agent system detecting illegal deforestation, synthesizing ground intelligence via SerpAPI/Wikipedia, and rendering strict JSON policy mandates.',
    externalUrl: 'https://github.com/avanishp-dev',
    hookQuestion: 'What if autonomous AI agents could detect illegal deforestation in minutes, investigate satellite anomalies, and draft enforceable UN SDG-aligned environmental policies?',
    overview: 'Sentinel-X is a multi-agent autonomous ecosystem built to detect and rapidly respond to illegal deforestation. It orchestrates two specialized AI agents — a Field Researcher and a Policy Director — using n8n’s visual agentic workflow to produce structured, SDG-aligned governance responses.',
    context: {
      headline: 'Overcoming administrative lag in environmental crisis response',
      body: [
        'Global rainforest reserves face rapid deforestation driven by illegal logging, mining, and agricultural encroachment. By the time satellite anomalies are manually analyzed and reported through bureaucratic channels, irreparable hectares of canopy are lost.',
        'Sentinel-X introduces automated agentic triage: an autonomous Field Researcher agent investigates incident coordinates using SerpAPI, Wikipedia, and open HTTP feeds, while a Policy Director agent synthesizes the evidence into strict, machine-readable JSON policy directives within seconds.'
      ]
    },
    marketAnalysis: {
      headline: 'Dual-Agent Architecture & Cyber-Operations Interface',
      body: 'Pairing high-speed Groq LLM inference with n8n deterministic visual nodes for transparent, reproducible agentic decision making.',
      points: [
        'Field Researcher Agent equipped with real-time web search and anomaly verification tools.',
        'Policy Director Agent generating strict schema-validated JSON outputs covering threat level, legal precedent, and immediate remediation steps.',
        'Cyber-operations style browser dashboard featuring scenario injection and live terminal orchestration logs.'
      ]
    },
    keyInsights: [
      {
        title: 'Zero-Hallucination Policy Mandates',
        description: 'Constrained the Policy Director Agent with Pydantic-like JSON schemas, ensuring output parameters strictly cover threat level, risk assessment, coordinate tags, and SDG alignment.'
      },
      {
        title: 'Secure Browser-to-Agent Gateway',
        description: 'Bridged browser client interaction with n8n backend agent webhooks via a lightweight Node.js CORS proxy to prevent API key exposure and manage payload routing.'
      }
    ],
    problem: 'How can we build an autonomous multi-agent pipeline that ingests real-time geographic anomaly triggers, synthesizes disparate open-web intelligence, and outputs strict, machine-readable governance directives in seconds?',
    solutions: [
      {
        title: 'Field Researcher Agent Tool Integration',
        description: 'Integrated SerpAPI, Wikipedia, and HTTP request tools into the Field Researcher Agent for real-time evidence gathering, ecological history checking, and local anomaly cross-validation.',
        points: [
          'Searches regional conservation registries and recent satellite alert notices.',
          'Extracts endangered flora/fauna species data impacted by the target coordinates.'
        ]
      },
      {
        title: 'Policy Director Agent Synthesis Engine',
        description: 'Crafted prompt chains in n8n powered by Groq LLM inference that ingest raw field evidence and synthesize strict JSON policy outputs.',
        points: [
          'Standardized threat level ratings (Critical, High, Moderate, Low).',
          'Generates immediate action recommendations aligned with United Nations Sustainable Development Goals (SDG 13 & 15).'
        ]
      },
      {
        title: 'Cyber-Operations Command Dashboard',
        description: 'Developed a cyber-operations browser dashboard with an interactive scenario injection panel, live terminal-style orchestration log stream, and a policy output renderer.',
        points: [
          'Simulates real-world incursions across the Amazon, Congo Basin, and Sundarbans.',
          'Visualizes agent-to-agent message passing and reasoning tokens in real time.'
        ]
      }
    ],
    outcome: {
      headline: 'Autonomous crisis response cycle under 15 seconds',
      body: [
        'Reduced incident analysis and emergency policy drafting latency from days of manual reporting to under 15 seconds.',
        'Showcased at competitive AI forums as a prime demonstration of practical, positive-impact agentic governance.'
      ]
    },
    galleryImages: [
      '/sentinel-x-home.png',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80'
    ]

  },

  {
    id: 'elixios-web-platforms',
    slug: 'elixios-web-platforms',
    title: 'Elixios — High-Performance SEO & AEO Client Web Platforms',
    subtitle: 'Building SEO & AEO optimized websites, responsive frontend architectures, and SaaS-level interfaces for commercial clients.',
    company: 'Elixios',
    category: 'full-stack',
    role: 'Web Development Intern // Front-End Developer',
    timeline: 'April 2026 - Present',
    status: 'Shipped 2026',
    statusType: 'shipped',
    tools: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript', 'SEO / AEO', 'Figma', 'Git'],
    team: ['Avanish Padhy', 'Elixios Engineering & Client Product Teams'],
    coverImage: '/elixios-home.png',
    tags: ['React.js', 'Next.js', 'SEO & AEO', 'Tailwind CSS'],
    summary: 'Designing and building SEO & AEO optimized web applications, reusable UI component systems, and SaaS frontends for enterprise clients.',
    hookQuestion: 'How do you build modern web interfaces that satisfy both traditional search algorithms and generative AI answer engines?',
    overview: 'As a Web Development Intern and Front-End Developer at Elixios, I design and build SEO (Search Engine Optimization) and AEO (Answer Engine Optimization) optimized websites and SaaS-level projects for various corporate and startup clients associated with Elixios.',
    context: {
      headline: 'Engineering for search engines and AI knowledge graphs simultaneously',
      body: [
        'Modern businesses require digital presences that score top marks on Google Core Web Vitals while also structuring metadata cleanly so that AI answer engines (Perplexity, ChatGPT Search, Gemini) can cite and summarize their service offerings.',
        'At Elixios, my focus is delivering blazingly responsive, visually engaging, and accessible frontends that elevate client brand identity and maximize conversion.'
      ]
    },
    solutions: [
      {
        title: 'Structured SEO & AEO Metadata Architecture',
        description: 'Engineered comprehensive JSON-LD schemas, semantic HTML structures, dynamic sitemaps, and OpenGraph social protocols across client platforms.',
        points: [
          'Ensured content is readily indexable by modern LLM retrieval crawlers.',
          'Achieved near-perfect 95+ Google Lighthouse scores across performance and SEO.'
        ]
      },
      {
        title: 'Modular React & Tailwind CSS Component Systems',
        description: 'Constructed responsive, reusable UI libraries with Tailwind CSS and React, allowing rapid delivery of bespoke client pages with cohesive visual rhythm.',
        points: [
          'Zero cumulative layout shift (CLS) through fluid image and font sizing.',
          'Smooth touch and hover interaction states tailored for mobile and desktop screens.'
        ]
      }
    ],
    outcome: {
      headline: 'Scalable web deliveries and client satisfaction',
      body: [
        'Delivered production-ready web platforms across multiple business verticals.',
        'Reinforced best practices in modern JavaScript, responsive UI craft, and client-facing communication.'
      ]
    },
    galleryImages: [
      '/elixios-home.png'
    ]

  },

  {
    id: 'cosmicwatch',
    slug: 'cosmicwatch',
    title: 'CosmicWatch — Role-Based Asteroid Tracking & Threat Platform',
    subtitle: 'Live Near-Earth Object feeds with automated risk categorization, role-based authorization, and Dockerized Railway cloud deployment.',
    company: 'Open Source / NASA Data',
    category: 'full-stack',
    role: 'Full-Stack & Systems Developer',
    timeline: 'Feb 2026',
    status: 'Shipped 2026',
    statusType: 'shipped',
    tools: ['Django', 'Python', 'NASA NeoWs API', 'Docker', 'SQLite', 'Railway', 'REST APIs', 'HTML5', 'CSS3'],
    team: ['Avanish Padhy (Solo Full-Stack Developer)'],
    coverImage: '/cosmicwatch-home.png',
    tags: ['Django', 'NASA API', 'Docker', 'REST APIs'],
    summary: 'Role-based asteroid-tracking platform integrating NASA NeoWs API, serving live feeds with automated risk categorization across researcher & observer tiers.',
    externalUrl: 'https://github.com/avanishp-dev',
    hookQuestion: 'What if near-Earth orbital surveillance and collaborative threat analysis could be accessed in real-time by both amateur stargazers and research scientists?',
    overview: 'Designed and deployed a role-based asteroid-tracking platform integrating the NASA NeoWs (Near Earth Object Web Service) API. It streams live celestial telemetry, computes automated risk categorization (high/medium/low hazard metrics), and provides dedicated workflows for general public observers and authenticated admin researchers.',
    context: {
      headline: 'Automating orbital hazard classification with live NASA feeds',
      body: [
        'Thousands of Near-Earth Objects (NEOs) traverse orbits proximate to Earth each day. NASA’s NeoWs REST API publishes rich raw astronomical datasets, but raw telemetry is difficult for analysts to digest without clear visualization and trajectory risk heuristics.',
        'CosmicWatch was built to bridge this gap: providing an intuitive public dashboard alongside an authenticated research workspace where scientists can catalog close approaches, document anomalies, and coordinate collaborative findings.'
      ]
    },
    marketAnalysis: {
      headline: 'Architectural Capabilities & NASA NeoWs Integration',
      body: 'Evaluating live feeds against relative velocity (km/h), estimated diameter ranges (meters to kilometers), and lunar miss distances to produce instantaneous threat scores.',
      points: [
        'Automated High/Medium/Low risk classification algorithm based on orbital diameter and miss distance.',
        'Session-aware role-based authentication separating public observers from verified admin researchers.',
        'Containerized production environment on Railway with static asset caching and automated CI deployments.'
      ]
    },
    keyInsights: [
      {
        title: 'Session-Aware Authorization',
        description: 'Implemented isolated endpoint access rules ensuring public users can explore feeds while research notes and mission comments are restricted to authenticated accounts.'
      },
      {
        title: 'Optimized Django Relational Model',
        description: 'Engineered a normalized database schema across 6+ relational tables handling asteroid profiles, approach dates, threat ratings, comments, and audit logs.'
      }
    ],
    problem: 'How might we ingest high-volume real-time space agency telemetry and deliver instant hazard classification alongside a collaborative research notes architecture without server slowdowns?',
    solutions: [
      {
        title: 'Live NeoWs Feed Ingestion & Threat Scoring',
        description: 'Connected Django backend to NASA NeoWs REST API, computing automatic hazard levels (high, medium, low) using celestial diameter and velocity parameters.',
        points: [
          'Calculates relative velocities and lunar distance ratios instantaneously upon feed retrieval.',
          'Caches frequent celestial queries to stay resilient against NASA rate limits.'
        ]
      },
      {
        title: 'RESTful Endpoints with Role-Based Access Control (RBAC)',
        description: 'Engineered clean RESTful JSON API endpoints (/api/comments/ and /api/notes/) with session-aware role-based authorization; persisted all user data server-side via Django ORM.',
        points: [
          'Ensured rigorous validation and sanitization for all research notes.',
          'Built responsive front-end cards displaying miss distance in AU and kilometers.'
        ]
      },
      {
        title: 'Docker Containerization & Railway Cloud Deployment',
        description: 'Containerized the full stack application with Docker and shipped to Railway cloud via a custom collect static CI pipeline, ensuring stable performance supporting concurrent user sessions.',
        points: [
          'Isolated Python runtime dependencies and environment secrets.',
          'Configured zero-downtime re-deployments triggered on GitHub commits.'
        ]
      }
    ],
    outcome: {
      headline: 'Production-grade astronomy platform shipped and verified',
      body: [
        'Successfully deployed to Railway with live NASA API synchronization, supporting continuous concurrent user sessions.',
        'Recognized on GitHub for clean Django architecture, disciplined documentation, and seamless containerized delivery.'
      ]
    },
    galleryImages: [
      '/cosmicwatch-home.png',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ]

  }
];

export const TIMELINE_STORIES: TimelineStory[] = [
  {
    age: 'Age 12',
    phase: 'School Foundations',
    title: 'The Spark: Logic, Math & Curious Questions',
    description: 'At DAV Public School Pokhariput, I discovered a fascination with logic puzzles, mathematics, and computers. I spent hours exploring how computational logic can simplify daily tasks and spark new ideas.',
    badgeColor: '#FAE8AC',
    iconType: 'craft'
  },
  {
    age: 'Age 16',
    phase: 'High School Science Stream',
    title: 'First Lines of Code & Analytical Discipline',
    description: 'At St. Xavier’s High School Kedargouri, studying physics and advanced mathematics, I wrote my first programs in Python and Java. I fell in love with algorithmic problem-solving and the thrill of seeing clean code compile.',
    badgeColor: '#E9FFE3',
    iconType: 'lego'
  },
  {
    age: 'Age 18',
    phase: 'University CSE Undergrad',
    title: 'Computer Science at Siksha ‘O’ Anusandhan University',
    description: 'Stepped into B.Tech in Computer Science & Engineering. Deepened my mastery in Data Structures & Algorithms, Object-Oriented Programming, and modern Web Technologies (React, JavaScript, Node.js). Actively practicing on LeetCode and CodeChef.',
    badgeColor: '#D5E6FF',
    iconType: 'bridge'
  },
  {
    age: 'Currently',
    phase: 'Industry & Open Source',
    title: 'Ex-SDE Intern at Paradip Port Authority and Web Development Intern at Elixios',
    description: 'Gained enterprise experience optimizing the nationwide iPortman system at Paradip Port Authority and built SEO-driven web platforms at Elixios. Alongside my internships, I ranked Top 45 in the Smart India Hackathon (SIH-26), won 2nd Prize in the Agentic AI Hackathon, and actively contributed to global open-source as a GSSoC & SSoC \'26 Ambassador.',
    badgeColor: '#FDD657',
    iconType: 'product'
  },
  {
    age: 'Beyond 2026',
    phase: 'Future Horizons',
    title: 'Scalable Systems & Intelligent Technology',
    description: 'Committed to continuous learning, building production-grade full-stack products, diving deeper into AI/ML architectures, and collaborating with global innovators to make a tangible positive impact.',
    badgeColor: '#FFD6D6',
    iconType: 'code'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Elixios',
    role: 'Web Development Intern // Front-End Developer',
    period: 'Apr 2026 - Present (Bhubaneswar, India)',
    highlight: 'Designing and building SEO & AEO optimized websites and SaaS-level projects for various commercial clients associated with Elixios, focusing on high Core Web Vitals and generative search visibility.'
  },
  {
    company: 'Paradip Port Authority',
    role: 'Software Engineer Intern',
    period: 'June 2026 - July 2026 (Paradip, Odisha, India)',
    highlight: 'Worked on iPortman, the enterprise Port Operating System powering digital operations across major Indian ports (Tech Mahindra stack). Optimized backend modules in J2EE/Hibernate, resolved N+1 query bottlenecks in Oracle DB, and improved operator vessel manifests.'
  },
  {
    company: 'GirlScript Summer of Code (GSSoC ’26)',
    role: 'Contributor & Ambassador',
    period: 'May 2026 - August 2026 (4 months)',
    highlight: 'Selected as Contributor & Ambassador for GSSoC, a rigorous 3-month global open-source program. Collaborated with experienced maintainers and a diverse community to build and scale impactful software.'
  },
  {
    company: 'Social Summer of Code (SSoC ’26)',
    role: 'Open Source Contributor',
    period: '2026',
    highlight: 'Contributed to open source developer tools, submitted reviewed pull requests, and participated in global open-source sprints.'
  }
];

export const COMMUNITY_ITEMS: CommunityItem[] = [
  {
    organization: 'Smart India Hackathon (SIH-26)',
    role: 'Top 45 Finalist',
    period: '2026'
  },
  {
    organization: 'Agentic AI Council Hackathon',
    role: '2nd Prize Winner',
    period: '2026'
  },
  {
    organization: 'Annual Techno-Cultural Fest',
    role: 'Stage Anchor & Master of Ceremonies',
    period: 'SOA University'
  },
  {
    organization: 'Competitive Problem Solving',
    role: 'Active Problem Solver (DSA)',
    period: 'LeetCode & CodeChef'
  },
  {
    organization: 'Infosys Frontend Web Developer Certification',
    role: 'Certified Developer (HTML, CSS, JS, React)',
    period: 'Infosys'
  },
  {
    organization: 'Deloitte Data Analytics & Data Fundamentals',
    role: 'Certified Analyst',
    period: 'Deloitte'
  }
];

export const COMMUNITY_PHOTOS: CommunityPhoto[] = [
  {
    title: 'Hackathon Innovation Sprint',
    caption: 'Secured 2nd Prize at the Ananta Chakra Agentic AI Council Hackathon after 36 hours of intense multi-agent prototyping!',
    imageUrl: '/community-1.png',
    rotation: -2
  },
  {
    title: 'Anchoring Techno-Cultural Fest',
    caption: 'Hosting on stage before hundreds of students and guests at the university’s flagship annual celebration.',
    imageUrl: '/community-2.png',
    rotation: 2.5
  },
  {
    title: 'SIH & Hackathons',
    caption: 'Connecting with developers, exchanging ideas on AI/ML, full-stack frameworks, and open-source contributions in Bhubaneswar.',
    imageUrl: '/community-3.png',
    rotation: -1.5
  }
];
