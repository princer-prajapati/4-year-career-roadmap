import { RoadmapQuarter, TaskCategory } from '../../types';

export const PRODUCT_UX_ROADMAP: RoadmapQuarter[] = [
  // Year 1: Product Discovery, User Research, Wireframing in Figma, Design Systems & Basic Web Literacy
  {
    id: 'pux-y1q1',
    year: 1,
    quarter: 1,
    title: { en: 'Product Discovery, User Empathy & Problem Definition', hi: 'User Research, Customer Interviews & Problem Discovery' },
    focus: { en: 'Learn user interview techniques, continuous discovery habits, identifying customer pain points, and writing clear problem statements before designing features.', hi: 'User interviews conduct karna, customer problems identify karna aur clear problem statements likhna.' },
    whyItMatters: { en: 'Building features nobody wants is the #1 killer of startups and products. Great product thinkers fall in love with problems, not solutions.', hi: 'Bina user problem samjhe feature banana sabse badi galti hoti hai. Problem discovery hi successful product ki neev hai.' },
    baseHoursPerWeek: 10,
    skills: [
      { id: 'pux-s1', title: { en: 'Customer interviewing techniques: The Mom Test principles', hi: 'The Mom Test: Bina biased sawal puche sach nikaalna' }, category: 'skill', completed: false },
      { id: 'pux-s2', title: { en: 'Jobs To Be Done (JTBD) framework and customer journey mapping', hi: 'Jobs To Be Done (JTBD) framework aur customer journey maps' }, category: 'skill', completed: false },
      { id: 'pux-s3', title: { en: 'Competitive product teardowns and market gap analysis', hi: 'Competitor apps ka product breakdown aur gaps dhundhna' }, category: 'skill', completed: false },
      { id: 'pux-s4', title: { en: 'Defining clear North Star metrics and input KPIs', hi: 'North Star metric aur business KPIs define karna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'pux-p1', title: { en: 'Conduct 5 user interviews with students or peers on a real daily pain point (e.g. food delivery or note-taking)', hi: '5 real users ka 20-minute interview conduct karein' }, category: 'practice', completed: false },
      { id: 'pux-p2', title: { en: 'Write a 1-page Customer Journey Map identifying 3 major frustration moments', hi: 'Customer frustration moments map karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-pux-y1q1',
        title: { en: 'Comprehensive Product Teardown & Opportunity Tree', hi: 'Product Teardown & Opportunity Solution Tree' },
        description: { en: 'An in-depth teardown of a popular app (e.g. Spotify, Notion, Uber), analyzing user onboarding friction and proposing 2 validated feature improvements.', hi: 'Kisi popular app ka product teardown jisme user friction aur 2 high-impact solutions suggest kiye gaye hon.' },
        technologies: ['Notion / Google Docs', 'Figma / FigJam', 'JTBD Framework'],
        portfolioImpact: { en: 'Demonstrates deep customer empathy and analytical rigor to APM recruiters.', hi: 'Shows critical product thinking rather than shallow feature wishlists.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'pux-c1', title: { en: 'Create a Notion product portfolio and publish your first teardown', hi: 'Notion product portfolio banakar pehla teardown share karein' }, category: 'career', completed: false },
      { id: 'pux-c2', title: { en: 'Join Product School and Lenny\'s Newsletter communities on Slack/Discord', hi: 'Leading product management communities join karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'pux-m1', title: { en: 'Completed 5 verified user interviews with documented transcripts', hi: '5 real user interviews transcripts documented' }, category: 'milestone', completed: false },
      { id: 'pux-m2', title: { en: 'First product teardown received constructive feedback from a working PM', hi: 'Working PM se teardown review prapt' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'pux-r1', title: 'The Mom Test by Rob Fitzpatrick (Summary Guide)', type: 'Book/Article', url: 'https://www.momtestbook.com/', free: true, notes: 'The gold standard book on talking to customers.' },
      { id: 'pux-r2', title: 'Lenny\'s Newsletter Free Archive', type: 'Book/Article', url: 'https://www.lennysnewsletter.com/', free: true, notes: 'The best modern product strategy publication.' },
    ],
  },
  {
    id: 'pux-y1q2',
    year: 1,
    quarter: 2,
    title: { en: 'Figma Mastery, Wireframing & UX Design Systems', hi: 'Figma Mastery, Wireframes & UX Design Systems' },
    focus: { en: 'Master Figma: Auto-layout, components, variants, design tokens, responsive typography hierarchy, and building interactive clickable prototypes.', hi: 'Figma auto-layout, design systems, wireframing aur clickable mobile/web prototypes banana.' },
    whyItMatters: { en: 'A PM or UX designer who can prototype ideas visually in Figma gets ideas approved 10x faster by engineers and leadership.', hi: 'Figma me visual prototype bana lene se team aur engineers ko apna vision bina kisi miscommunication ke samjhaya ja sakta hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'pux-s5', title: { en: 'Figma auto-layout (direction, padding, alignment, hug/fill constraints)', hi: 'Figma auto-layout aur responsive constraints' }, category: 'skill', completed: false },
      { id: 'pux-s6', title: { en: 'Creating reusable component libraries with variants and boolean props', hi: 'Component libraries, variants aur design tokens' }, category: 'skill', completed: false },
      { id: 'pux-s7', title: { en: 'Interactive prototyping: smart animate, overlays, mobile device previews', hi: 'Clickable interactive prototypes banana' }, category: 'skill', completed: false },
      { id: 'pux-s8', title: { en: 'Accessibility (WCAG 2.1 AA) color contrast, touch targets, and typography scale', hi: 'Accessibility (contrast ratios, readable typography)' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'pux-p3', title: { en: 'Replicate 10 mobile screens from Airbnb or Stripe in Figma pixel-for-pixel using auto-layout', hi: 'Stripe ya Airbnb ke 10 screens Figma me auto-layout se re-create karein' }, category: 'practice', completed: false },
      { id: 'pux-p4', title: { en: 'Test a prototype with 3 real users and record how long it takes them to complete a task', hi: '3 users ke sath clickable prototype ka usability test karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-pux-y1q2',
        title: { en: 'End-to-End Mobile App UI/UX Redesign & Interactive Prototype', hi: 'Complete Mobile App Redesign & Clickable Prototype' },
        description: { en: 'A complete redesign of a clunky student or municipal service mobile app in Figma, backed by user testing findings and an interactive click-through demo.', hi: 'Student ya banking app ka complete modern redesign with auto-layout and interactive transitions.' },
        technologies: ['Figma', 'FigJam', 'Usability Testing'],
        portfolioImpact: { en: 'Provides an instantly clickable visual asset that recruiters can test on their phone.', hi: 'Direct interactive link jo recruiter apne phone par test kar sake.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'pux-c3', title: { en: 'Share a 30-second Figma Smart Animate prototype recording on LinkedIn', hi: 'LinkedIn par Figma prototype demo video share karein' }, category: 'career', completed: false },
      { id: 'pux-c4', title: { en: 'Connect with 10 UI/UX and Associate Product Managers on LinkedIn', hi: 'Working Product Designers se networking karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'pux-m3', title: { en: 'Figma Community file published or clickable prototype link active', hi: 'Live clickable prototype functioning smoothly' }, category: 'milestone', completed: false },
      { id: 'pux-m4', title: { en: 'Mastered Figma auto-layout without manual pixel nudging', hi: 'Auto-layout fluency achieved' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'pux-r3', title: 'Figma Official Video Tutorials & Playground', type: 'Course/Video', url: 'https://help.figma.com/hc/en-us/categories/360002051613-Get-started', free: true, notes: 'The standard Figma education resources.' },
      { id: 'pux-r4', title: 'Laws of UX (Jon Yablonski)', type: 'Book/Article', url: 'https://lawsofux.com/', free: true, notes: 'The psychology principles behind great user interfaces.' },
    ],
  },
  {
    id: 'pux-y1q3',
    year: 1,
    quarter: 3,
    title: { en: 'Product Requirements Documents (PRDs) & Agile Delivery', hi: 'PRDs, User Stories & Agile Sprint Execution' },
    focus: { en: 'Learn to write exceptional PRDs: Goals, non-goals, user stories, acceptance criteria, edge cases, technical feasibility, and working with engineering in sprints.', hi: 'PRD (Product Requirements Document) likhna, user stories, edge cases define karna aur developers ke sath agile sprint execute karna.' },
    whyItMatters: { en: 'The PRD is the single source of truth for engineering teams. A clear PRD prevents months of wasted development cycles.', hi: 'PRD dekhkar hi software engineers code likhte hain. PRD crisp aur unambiguous hona sabse zaruri skill hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'pux-s9', title: { en: 'Writing comprehensive PRDs: Problem statement, success metrics, user flows, edge cases', hi: 'PRD structure: Metrics, User Stories, Edge cases' }, category: 'skill', completed: false },
      { id: 'pux-s10', title: { en: 'User Story mapping and acceptance criteria (Given-When-Then format)', hi: 'Acceptance criteria (Given-When-Then format)' }, category: 'skill', completed: false },
      { id: 'pux-s11', title: { en: 'Prioritization frameworks: RICE (Reach, Impact, Confidence, Effort), MoSCoW', hi: 'Prioritization frameworks: RICE score aur MoSCoW' }, category: 'skill', completed: false },
      { id: 'pux-s12', title: { en: 'Agile & Scrum basics: Sprint planning, backlog grooming, daily standups', hi: 'Agile ceremonies: Sprint planning aur backlog grooming' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'pux-p5', title: { en: 'Write a full 4-page PRD for a new feature in WhatsApp or Uber (e.g. Scheduled Rides)', hi: 'Ek real feature ka 4-page complete PRD likhein' }, category: 'practice', completed: false },
      { id: 'pux-p6', title: { en: 'Rank a 10-feature backlog using the RICE scoring model with justified assumptions', hi: '10 features ki RICE score prioritization sheet banayein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-pux-y1q3',
        title: { en: 'Production-Grade PRD & Feature Launch Blueprint', hi: 'Comprehensive PRD & Feature Specification Document' },
        description: { en: 'A production-grade PRD specifying a zero-to-one feature, complete with wireframes, metric instrumentation plan, roll-out phases, and risk mitigations.', hi: 'Complete PRD jisme metric tracking, launch phases, edge cases aur rollback plan shamil ho.' },
        technologies: ['Notion / Google Docs', 'Figma', 'Jira / Linear format'],
        portfolioImpact: { en: 'The quintessential work sample for Associate Product Manager (APM) interviews.', hi: 'APM interview rounds me dikhane ke liye best work sample.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'pux-c5', title: { en: 'Get your PRD reviewed by a senior Product Manager on LinkedIn or ADPList', hi: 'ADPList par free mentor se apna PRD review karwayein' }, category: 'career', completed: false },
      { id: 'pux-c6', title: { en: 'Participate in a college product case competition or hackathon as the PM/Designer', hi: 'Hackathon ya case competition me PM/Designer role play karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'pux-m5', title: { en: 'PRD contains zero ambiguous engineering handoffs or unhandled edge cases', hi: 'PRD edge cases fully audited' }, category: 'milestone', completed: false },
      { id: 'pux-m6', title: { en: 'Positive feedback secured from an industry PM mentor on ADPList', hi: 'Industry mentor approval received' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'pux-r3-1', title: 'Kevan Lee PRD Templates & Real Examples', type: 'Documentation', url: 'https://www.lennysnewsletter.com/p/my-favorite-templates-issue-37', free: true, notes: 'The best real-world PRD templates from top tech companies.' },
      { id: 'pux-r4-1', title: 'ADPList Free Mentorship Platform', type: 'Practice Platform', url: 'https://adplist.org/', free: true, notes: 'Book free 1-on-1 calls with senior PMs and designers.' },
    ],
  },
  {
    id: 'pux-y1q4',
    year: 1,
    quarter: 4,
    title: { en: 'Product Analytics (SQL & Mixpanel) & First PM Internship', hi: 'Product Analytics, Metrics Tracking & First PM Internship' },
    focus: { en: 'Master data-driven product decisions: Funnel analysis, retention cohorts, event tracking plans (Mixpanel / Amplitude), basic SQL, and landing your first APM internship.', hi: 'Funnels, user retention cohorts, event tracking plans (Mixpanel/Amplitude) aur first PM internship.' },
    whyItMatters: { en: 'Opinions don’t matter without data. PMs who can query their own SQL tables and analyze event funnels command the highest respect from engineers.', hi: 'Jo PM data aur SQL samajhta hai, engineering team uski bohot respect karti hai aur features ka ROI prove hota hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'pux-s13', title: { en: 'Event tracking taxonomy: Naming events, properties, user attributes', hi: 'Event tracking taxonomy aur Mixpanel setup' }, category: 'skill', completed: false },
      { id: 'pux-s14', title: { en: 'Funnel drop-off analysis and cohort retention curves', hi: 'Funnel drop-off aur retention cohorts analyze karna' }, category: 'skill', completed: false },
      { id: 'pux-s15', title: { en: 'SQL for Product Managers: SELECT, COUNT, GROUP BY, churn queries', hi: 'Product metrics ke liye essential SQL queries' }, category: 'skill', completed: false },
      { id: 'pux-s16', title: { en: 'APM resume crafting and product sense interview fundamentals', hi: 'APM resume banana aur product sense interview prep' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'pux-p7', title: { en: 'Design an event tracking schema for an onboarding flow with 8 discrete user events', hi: 'Onboarding flow ka complete event tracking sheet banayein' }, category: 'practice', completed: false },
      { id: 'pux-p8', title: { en: 'Write SQL queries calculating Daily Active Users (DAU) and 30-day retention', hi: 'SQL se DAU/MAU ratio aur retention curves calculate karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-pux-y1q4',
        title: { en: 'Product Analytics Case Study & Growth Experiment Proposal', hi: 'Product Funnel Audit & A/B Test Growth Proposal' },
        description: { en: 'An end-to-end analysis of a drop-off problem in an onboarding funnel, paired with a proposed A/B test experiment design and metric hypotheses.', hi: 'Onboarding drop-off ka data analysis aur conversion badhane ke liye complete A/B experiment design.' },
        technologies: ['Mixpanel / Amplitude demo', 'SQL', 'Notion'],
        portfolioImpact: { en: 'Shows data-driven mindset and growth experimentation maturity.', hi: 'Proves quantitative product decision-making.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'pux-c7', title: { en: 'Apply to 25 Associate Product Manager (APM) and Product Operations internships', hi: '25 APM aur Product Intern roles me apply karein' }, category: 'career', completed: false },
      { id: 'pux-c8', title: { en: 'Practice classic product sense interview questions ("Design an alarm clock for the blind")', hi: 'Product sense questions ki verbal practice karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'pux-m7', title: { en: 'Completed first round of APM / Product Intern interviews', hi: 'APM interview rounds initiated' }, category: 'milestone', completed: false },
      { id: 'pux-m8', title: { en: 'Year 1 complete: User Research, Figma, PRDs, and Analytics demonstrated', hi: 'Year 1 Complete: All 4 foundational PM pillars validated' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'pux-r7', title: 'Mixpanel Analytics Academy (Free Certification)', type: 'Course/Video', url: 'https://mixpanel.com/academy/', free: true, notes: 'Free interactive product analytics training.' },
      { id: 'pux-r8', title: 'Decode and Conquer by Lewis C. Lin (Summary Guides)', type: 'Book/Article', url: 'https://www.lewis-lin.com/', free: true, notes: 'The standard playbook for APM product interviews.' },
    ],
  },

  // Years 2-4: Technical Architecture for PMs, Go-To-Market (GTM), Monetization, Executive Leadership
  ...Array.from({ length: 12 }, (_, i) => {
    const qIndex = i + 5;
    const year = Math.ceil(qIndex / 4);
    const quarter = ((qIndex - 1) % 4) + 1;
    const titles = [
      { en: 'System Architecture & Technical Fluency for Product Managers', hi: 'Technical Architecture & API Systems for PMs' },
      { en: 'A/B Testing Rigor, Experimentation & Statistical Significance', hi: 'A/B Testing Rigor, Hypothesis & Sample Sizing' },
      { en: 'Monetization Models, Pricing Strategies & SaaS Unit Economics', hi: 'Pricing Strategies, Monetization & Unit Economics' },
      { en: 'First Full Product Management Internship', hi: 'First Full-Time Product Management Internship' },
      { en: 'Growth Product Management: Viral Loops, SEO & Retention Hooks', hi: 'Growth Loops, Viral Mechanics & User Retention' },
      { en: 'Go-To-Market (GTM) Strategy, Positioning & Sales Enablement', hi: 'Go-To-Market Strategy & Product Launch Playbooks' },
      { en: 'AI Product Management: LLM Workflows, RAG UX & Guardrails', hi: 'AI Product Management: LLMs, Prompt UX & Safety' },
      { en: 'Platform & Developer APIs Product Management', hi: 'Platform & B2B Developer APIs Product Management' },
      { en: 'Executive Product Sense & Analytical Interview Loops', hi: 'APM Executive Interview Loops & Product Sense Drills' },
      { en: 'APM / PM Offer Selection & Compensation Negotiation', hi: 'APM Offer Loops & Total Compensation Negotiation' },
      { en: 'Strategic Product Vision, Roadmapping & Board Communications', hi: '3-Year Product Vision & Executive Board Alignment' },
      { en: 'First 90 Days as Product Manager & Path to Group PM', hi: 'First 90 Days as PM & Leadership Compounding' },
    ];
    const currTitle = titles[i];
    return {
      id: `pux-y${year}q${quarter}`,
      year,
      quarter,
      title: currTitle,
      focus: {
        en: `Quarter ${quarter} Year ${year} advanced product strategy & execution: ${currTitle.en} with industry-grade deliverables.`,
        hi: `Year ${year} Quarter ${quarter}: ${currTitle.hi} par deep practical execution aur interview readiness.`,
      },
      whyItMatters: {
        en: 'Elite product managers drive hundreds of millions in business value by uniting technical capability with user psychology.',
        hi: 'Top product managers business, engineering aur design ko align karke high-leverage decisions lete hain.',
      },
      baseHoursPerWeek: 14,
      skills: [
        { id: `pux-s${16 + i * 4 + 1}`, title: { en: `Core Mastery: ${currTitle.en}`, hi: `${currTitle.hi} key skills` }, category: 'skill' as TaskCategory, completed: false },
        { id: `pux-s${16 + i * 4 + 2}`, title: { en: 'Executive stakeholder alignment and consensus building', hi: 'Cross-functional alignment aur consensus' }, category: 'skill' as TaskCategory, completed: false },
        { id: `pux-s${16 + i * 4 + 3}`, title: { en: 'Quantitative impact measurement and retrospective analysis', hi: 'Impact measurement aur business retrospectives' }, category: 'skill' as TaskCategory, completed: false },
        { id: `pux-s${16 + i * 4 + 4}`, title: { en: 'Risk modeling and contingency planning', hi: 'Risk mitigation aur launch rollback strategies' }, category: 'skill' as TaskCategory, completed: false },
      ],
      practice: [
        { id: `pux-p${8 + i * 2 + 1}`, title: { en: `Draft strategic proposal for ${currTitle.en}`, hi: 'Strategic product proposal draft karein' }, category: 'practice' as TaskCategory, completed: false },
        { id: `pux-p${8 + i * 2 + 2}`, title: { en: 'Conduct a peer mock product strategy interview', hi: 'Peer mock product interview rehearse karein' }, category: 'practice' as TaskCategory, completed: false },
      ],
      projects: [
        {
          id: `proj-pux-y${year}q${quarter}`,
          title: { en: `Executive ${currTitle.en} Capstone Document`, hi: `${currTitle.hi} Strategic Product Case` },
          description: {
            en: `A comprehensive strategic product document addressing market opportunity, user segmentation, competitive positioning, and technical roadmap.`,
            hi: `Comprehensive strategic product dossier with data models, user research and delivery milestones.`,
          },
          technologies: ['Notion / Coda', 'Figma', 'Mixpanel', 'SQL'],
          portfolioImpact: { en: 'Demonstrates senior product thinking.', hi: 'High-level product leadership portfolio asset.' },
          difficulty: 'Advanced' as const,
          status: 'not-started' as const,
        },
      ],
      careerActions: [
        { id: `pux-c${8 + i * 2 + 1}`, title: { en: 'Connect with 15 Product Directors and VP of Products for referrals', hi: 'Product Directors aur VPs se networking karke referrals lein' }, category: 'career' as TaskCategory, completed: false },
        { id: `pux-c${8 + i * 2 + 2}`, title: { en: 'Publish product strategy case study on LinkedIn or Substack', hi: 'Case study write-up publicly publish karein' }, category: 'career' as TaskCategory, completed: false },
      ],
      milestones: [
        { id: `pux-m${8 + i * 2 + 1}`, title: { en: `Verified competency in ${currTitle.en}`, hi: 'Interview readiness certified' }, category: 'milestone' as TaskCategory, completed: false },
        { id: `pux-m${8 + i * 2 + 2}`, title: { en: 'Strategic portfolio project complete and linked on resume', hi: 'Verified portfolio asset complete' }, category: 'milestone' as TaskCategory, completed: false },
      ],
      resources: [
        { id: `pux-r${8 + i * 2 + 1}`, title: 'Inspired by Marty Cagan (Product Fundamentals)', type: 'Book/Article', url: 'https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love/', free: true, notes: 'The Bible of modern product teams.' },
        { id: `pux-r${8 + i * 2 + 2}`, title: 'Reforge Product Strategy Guides', type: 'Book/Article', url: 'https://www.reforge.com/blog', free: true, notes: 'Advanced growth and product strategy.' },
      ],
    };
  }),
];
