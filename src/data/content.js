/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE ONLY.
 *  Every piece of text, link and list on the site comes from here.
 *  Components read from it — you should never need to touch JSX to change copy.
 *
 *  Content below is taken from Artem B.'s CV. A handful of fields the CV does
 *  not contain are marked `TODO` — they are the only things left to fill in.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Artem B.',
  title: 'Senior Full-Stack Engineer',
  location: 'Remote', // TODO: city/country if it should be shown
  available: true,
  availableText: 'Open to opportunities',
  // Headshot extracted from the CV PDF. It is a 1341×2000 portrait, so Avatar
  // pulls the square crop towards the top — see `object-position` there.
  photo: '/profile.jpg',
  // Served straight from /public; the filename is what the browser saves as.
  resume: '/Artem-B-Full-Stack-Engineer.pdf',
};

export const social = {
  email: 'artem.dev.bondar@gmail.com',
  github: null, // TODO
  linkedin: null, // TODO
  telegram: null,
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

/** The hero block at the top of the page. */
export const hero = {
  // Shown above the name, in mono caps.
  eyebrow: 'Senior Full-Stack Engineer',
  // Kept short — it renders at display size.
  headline: 'I build and scale production systems end to end.',
  // One or two sentences under the headline.
  intro:
    'Five-plus years building web applications and backend systems in TypeScript — Node.js, NestJS, React and Next.js on PostgreSQL and MongoDB. Most of that work has been AI-powered SaaS: LLM integrations, real-time features, payments and the cloud infrastructure underneath them.',
};

export const about = {
  headline: 'About',
  paragraphs: [
    'Senior full-stack engineer with 5+ years of commercial experience designing, developing and scaling production web applications and backend systems. My core stack is TypeScript across the board: Node.js, NestJS and GraphQL or REST on the server, React and Next.js on the client, PostgreSQL and MongoDB underneath.',
    'The work spans scalable API design, database architecture, authentication and authorization, real-time systems, payment integrations and third-party integrations. On the infrastructure side I have shipped with AWS, GCP, Docker, Kubernetes, Kafka and CI/CD pipelines, including cloud-native deployments I set up and maintained myself.',
    'Recent projects have been AI-powered products: workflow orchestration, AI tutoring, and no-code generation built on LLM APIs from OpenAI, Gemini, DeepSeek and Grok. I take features from system design and implementation through testing, deployment, performance optimisation and production support — and I stay on for the incidents and hotfixes afterwards.',
  ],
  stats: [
    { value: '5+', label: 'Years of experience' },
    { value: 'Remote', label: 'Availability' },
    { value: 'Full-stack', label: 'Focus' },
    { value: 'B2', label: 'English' },
  ],
};

/**
 * Projects render as a numbered editorial list, newest first.
 *  - `summary`  → one line, always visible
 *  - `details`  → bullet points under the summary
 *  - `nda: true` → shows the confidential badge; links still render if given
 *  - `period`   → optional, set to null to hide
 *
 * `links.live` values are the ones the CV hyperlinks each project name to.
 */
export const projects = [
  {
    title: 'GlowAI',
    subtitle: 'AI workflow automation platform · Full-Stack Developer',
    period: null,
    summary:
      'No-code automation platform where businesses design, deploy and scale AI workflows with human-in-the-loop execution across 2,700+ integrations.',
    details: [
      'Designed and implemented end-to-end AI workflow functionality, delivering workflow orchestration and Agent Chat across backend services and the Next.js frontend.',
      'Built and maintained scalable GraphQL APIs, business logic and database schema migrations with NestJS, Prisma and PostgreSQL.',
      'Improved workflow execution reliability by optimising task scheduling, recurring jobs and trigger-based execution logic.',
      'Implemented Stripe subscription management — billing workflows, webhook processing and the full payment lifecycle.',
      'Built third-party integrations with Slack, Google Chat and external automation services through Pipedream.',
      'Supported the platform rebrand from Doflo to GlowAI with no interruption to production operations.',
    ],
    stack: [
      'TypeScript',
      'NestJS',
      'GraphQL',
      'Prisma',
      'PostgreSQL',
      'Kafka',
      'Next.js',
      'Kubernetes',
      'GCP',
      'Stripe',
    ],
    links: { live: 'https://getglow.ai/', github: null },
    nda: false,
    featured: true,
  },
  {
    title: 'MovesMethod',
    subtitle: 'Fitness habit platform · Back-End Developer',
    period: null,
    summary:
      'Fitness platform that builds healthy daily movement habits through personalised workout plans, activity tracking, body analysis and scheduled notifications.',
    details: [
      'Designed and optimised the PostgreSQL database architecture, improving schema maintainability and keeping production and development environments in sync.',
      'Implemented secure data access with Supabase Row Level Security, custom RPC functions and Edge Functions.',
      'Developed REST APIs with full Swagger documentation for the mobile application.',
      'Built a web administration panel for managing application content and operational workflows.',
      'Integrated Apple Push Notification service for automated and scheduled user notifications.',
      'Wrote internal developer tooling, including a custom Supabase testing module and a schema synchronisation utility.',
    ],
    stack: [
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Supabase',
      'APNs',
      'SendGrid',
      'Vite',
      'Tailwind CSS',
      'Render',
    ],
    links: { live: 'https://movesmethod.app/', github: null },
    nda: false,
    featured: false,
  },
  {
    title: 'Pascal Academy',
    subtitle: 'AI-powered EdTech SaaS · Full-Stack Developer',
    period: null,
    summary:
      'EdTech platform delivering personalised learning through AI tutors, real-time collaboration, subscription management and learning analytics for students, parents and educators.',
    details: [
      'Delivered end-to-end features across the Next.js frontend and NestJS backend, including role-based dashboards with progress tracking, analytics and recommendations.',
      'Implemented authentication and authorization with JWT, OAuth, NextAuth and custom email verification.',
      'Integrated Stripe Checkout, Customer Portal, subscription lifecycle (upgrades, downgrades, cancellations), top-ups and webhook processing.',
      'Built real-time chat, notifications and event-driven updates on Socket.IO.',
      'Integrated OpenAI, Gemini, DeepSeek and Grok to power AI tutoring, contextual conversations and prompt orchestration.',
      'Optimised backend performance with Redis caching and query tuning, and added observability via Sentry, Prometheus and Grafana.',
    ],
    stack: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Socket.IO',
      'Stripe',
      'OpenAI',
      'Docker',
      'Railway',
    ],
    links: { live: 'https://pascalsacademy.com/', github: null },
    nda: false,
    featured: true,
  },
  {
    title: 'Autofunnel',
    subtitle: 'AI-powered B2B marketing SaaS · Back-End Developer',
    period: null,
    summary:
      'Marketing automation platform for building landing pages, sales funnels, email campaigns, digital products and AI-generated content without code.',
    details: [
      'Developed backend features for the core marketing automation services using NestJS, GraphQL and MongoDB.',
      'Designed and implemented an internal wallet and credit system backing AI feature usage and billing.',
      'Integrated Stripe payment processing with secure transaction handling.',
      'Built email generation and bulk delivery on Mailgun.',
      'Contributed to CI/CD configuration, automated testing and deployment processes.',
      'Optimised search, CSV data processing and overall backend performance.',
    ],
    stack: [
      'Node.js',
      'NestJS',
      'GraphQL',
      'MongoDB',
      'WebSockets',
      'AWS',
      'Stripe',
      'Mailgun',
      'OpenAI',
    ],
    links: { live: 'https://www.autofunnel.ai/', github: null },
    nda: false,
    featured: false,
  },
  {
    title: 'Wonderish',
    subtitle: 'AI no-code website builder · Full-Stack Developer',
    period: null,
    summary:
      'B2C platform that generates websites, landing pages and web apps from natural language, automating project generation, deployment and hosting.',
    details: [
      'Designed the backend architecture, database schema and REST APIs powering AI-driven website generation and project management.',
      'Built Kubernetes deployment infrastructure: automated pod provisioning, cleanup, restoration, snapshots, project cloning and rollback.',
      'Implemented Stripe payments, sandbox environments and subscription functionality.',
      'Configured Supabase, Render and CI/CD pipelines for automated deployment and testing.',
      'Created developer utilities for inspecting project file structures and runtime environments inside Kubernetes pods.',
    ],
    stack: [
      'Next.js',
      'React',
      'NestJS',
      'PostgreSQL',
      'Supabase',
      'Kubernetes',
      'Cloudflare',
      'OpenAI',
      'Stripe',
    ],
    links: { live: 'https://wonderish.ai/', github: null },
    nda: false,
    featured: false,
  },
  {
    title: 'Timely Wills',
    subtitle: 'LegalTech SaaS · Full-Stack Developer',
    period: null,
    summary:
      'Platform for creating and managing wills, powers of attorney and other legal documents, with secure document handling, payments and guided workflows.',
    details: [
      'Built the platform from scratch with Next.js, NestJS, PostgreSQL and Strapi CMS.',
      'Developed responsive, mobile-first interfaces with complex forms, validation, protected routes and JWT authentication.',
      'Implemented document workflows end to end: PDF generation, preview, upload, storage and access control.',
      'Integrated Stripe with subscription management, promo codes and secure checkout.',
      'Wired up AWS S3 for file storage, SendGrid for transactional email and Intercom for customer support.',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'NestJS',
      'Strapi',
      'PostgreSQL',
      'TypeORM',
      'Stripe',
      'AWS',
      'SendGrid',
    ],
    links: { live: 'https://timelylegacy.com/', github: null },
    nda: false,
    featured: false,
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Redux Toolkit',
      'Zustand',
      'TanStack Query',
      'Vite',
      'Tailwind CSS',
      'SCSS / Sass',
      'Material UI',
      'Ant Design',
      'shadcn/ui',
      'Radix UI',
      'styled-components',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Express.js',
      'REST API',
      'GraphQL',
      'Prisma',
      'TypeORM',
      'JWT / OAuth',
      'WebSockets',
      'Socket.IO',
      'Kafka',
    ],
  },
  {
    category: 'Databases',
    items: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Supabase',
      'Firebase',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS (EC2, S3, RDS, Lambda)',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'GitHub Actions',
      'Vercel',
      'Render',
      'Railway',
    ],
  },
  {
    category: 'AI & LLM',
    items: [
      'OpenAI',
      'Gemini',
      'DeepSeek',
      'Grok',
      'Prompt engineering',
      'Claude Code',
      'GitHub Copilot',
    ],
  },
  {
    category: 'Testing & Monitoring',
    items: ['Jest', 'Mocha', 'Sentry', 'Prometheus', 'Grafana', 'Swagger'],
  },
  {
    category: 'Data visualisation',
    items: ['Chart.js', 'ApexCharts', 'Highcharts', 'Recharts'],
  },
  {
    category: 'Tooling',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'Jira',
      'Trello',
      'Webpack',
      'npm',
    ],
  },
];

/**
 * The CV lists projects rather than employers, so there is nothing accurate to
 * put here yet — the Experience section is left out of `nav` and of `SECTIONS`
 * in App.jsx. Fill this in with roles, companies and dates and add the section
 * back in both places to restore it.
 */
export const experience = [];

export const education = [
  {
    degree: 'Master’s Degree — Computer Science',
    school: 'NTU “KhPI”',
    period: null,
  },
  {
    degree: 'Bachelor’s Degree — Computer Science',
    school: 'NTU “KhPI”',
    period: null,
  },
  {
    degree: 'Educational programme for IT specialists',
    school: 'Innovation Campus, based on NTU “KhPI”',
    period: null,
  },
  {
    degree: 'Professional computer education',
    school: 'ITStep Academy',
    period: null,
  },
];

export const languages = [{ name: 'English', level: 'B2 — Upper-Intermediate' }];

export const contact = {
  headline: 'Let’s build something',
  text: 'Open to senior full-stack and backend roles — TypeScript, Node.js, NestJS, React and Next.js, ideally on AI-powered products. Email is the fastest way to reach me.',
};
