import { JobReadinessPillar } from '../types';

export const INITIAL_JOB_READINESS: JobReadinessPillar[] = [
  {
    id: 'dsa',
    title: {
      en: '1. Problem Solving & Technical Screen (DSA)',
      hi: '1. Problem Solving & Coding Screening (DSA)',
    },
    description: {
      en: 'Every tier-1 software screening round filters candidates on data structures, algorithmic complexity, and debugging under timed pressure.',
      hi: 'Har achhi tech company coding assessment aur preliminary DSA round me filter karti hai.',
    },
    targetImpact: {
      en: 'Passes 80%+ of automated online assessments without timing out.',
      hi: 'Coding assessment tests me 80%+ passing rate ensure karta hai.',
    },
    items: [
      {
        id: 'dsa-1',
        pillarId: 'dsa',
        title: { en: 'Solved 250+ targeted LeetCode / NeetCode problems', hi: '250+ standard LeetCode problems solve kiye hue' },
        explanation: { en: 'Covers essential patterns (Two Pointers, Sliding Window, Trees, Graphs, DP).', hi: 'Saare core patterns par practice complete.' },
        actionTip: { en: 'Focus on pattern recognition rather than memorizing solutions.', hi: 'Solutions ratne ke bajaye patterns samjhein.' },
        completed: false,
      },
      {
        id: 'dsa-2',
        pillarId: 'dsa',
        title: { en: 'Able to solve a medium problem in under 25 minutes live', hi: 'Live interview me 25 min ke andar medium problem solve karna' },
        explanation: { en: 'Simulates real interview timing where you must clarify, code, and test.', hi: 'Real interview me sochte hue bolna aur test cases run karna.' },
        actionTip: { en: 'Use a timer and speak your thoughts aloud while typing.', hi: 'Stopwatch lagakar bol-bol kar code likhein.' },
        completed: false,
      },
      {
        id: 'dsa-3',
        pillarId: 'dsa',
        title: { en: 'Consistent participation in weekly competitive contests', hi: 'Weekly coding contests me participate karna' },
        explanation: { en: 'Builds psychological calm under real test pressure and unfamiliar problems.', hi: 'Naye problems dekhkar panic na hone ki aadat.' },
        actionTip: { en: 'Treat every Sunday contest like an actual placement exam.', hi: 'Har contest ko real exam ki tarah lein.' },
        completed: false,
      },
    ],
  },
  {
    id: 'projects',
    title: {
      en: '2. Production-Grade Portfolio Projects',
      hi: '2. Real-World Portfolio Projects (No Todo Apps)',
    },
    description: {
      en: 'Tutorial clones (basic todo apps, clone weather apps) get ignored. You need 2-3 substantial projects with authentication, real databases, and live deployed links.',
      hi: 'Basic tutorial projects (todo app, calculator) se call nahi aati. Deployed, live database wale real projects chahiye.',
    },
    targetImpact: {
      en: 'Turns recruiter reviews into instant interview invites.',
      hi: 'Recruiter ko direct live demo aur clean code dikhata hai.',
    },
    items: [
      {
        id: 'proj-1',
        pillarId: 'projects',
        title: { en: 'At least 2 live projects deployed with custom or free cloud domains', hi: 'Kam se kam 2 live deployed projects with working URLs' },
        explanation: { en: 'Hiring managers test live links in 15 seconds. If it\'s dead or localhost, it does not exist.', hi: 'Agar link live nahi hai toh recruiter aage badh jata hai.' },
        actionTip: { en: 'Deploy frontend on Vercel/Netlify and backend on Render/AWS.', hi: 'Clean HTTPS live URL deploy karein.' },
        completed: false,
      },
      {
        id: 'proj-2',
        pillarId: 'projects',
        title: { en: 'Comprehensive GitHub README with architecture diagrams and Loom video demo', hi: 'GitHub README me architecture diagram aur Loom video link' },
        explanation: { en: 'Visual architecture diagrams demonstrate systems design maturity.', hi: 'Diagrams dekh kar samajh aata hai ki project deep hai.' },
        actionTip: { en: 'Use Eraser.io or Mermaid.js to embed clear system flowcharts.', hi: 'Clear architecture flowchart add karein.' },
        completed: false,
      },
      {
        id: 'proj-3',
        pillarId: 'projects',
        title: { en: 'Clean Git commit history showing iterative development over weeks', hi: 'Pura Git commit history over multiple weeks' },
        explanation: { en: 'Proves the project wasn\'t copied and pasted in a single overnight commit.', hi: 'Dikhata hai ki code genuinely aapne step-by-step likha hai.' },
        actionTip: { en: 'Commit feature branches with descriptive commit messages.', hi: 'Meaningful commit messages use karein.' },
        completed: false,
      },
    ],
  },
  {
    id: 'resume',
    title: {
      en: '3. Resume & ATS Optimization',
      hi: '3. Clean Single-Page ATS Resume',
    },
    description: {
      en: 'Over 75% of resumes are dropped by Automated Tracking Systems (ATS) due to multi-column graphics, icons, or missing quantified impact.',
      hi: '75% resumes reject ho jate hain kyunki wo multi-column fancy templates me hote hain ya numbers missing hote hain.',
    },
    targetImpact: {
      en: 'Achieves 90%+ ATS scan compatibility and passes recruiter 6-second scan.',
      hi: 'ATS system me smoothly parse hota hai aur recruiter scan pass karta hai.',
    },
    items: [
      {
        id: 'res-1',
        pillarId: 'resume',
        title: { en: 'Single-page, single-column plain layout (Jake\'s Resume / Overleaf standard)', hi: 'Single-page, single-column clean format' },
        explanation: { en: 'Clean single column parses cleanly in Workday, Greenhouse, and Lever.', hi: 'Greenhouse aur Lever ATS systems bina error parse karte hain.' },
        actionTip: { en: 'Avoid progress bars, photos, tables, and complex two-column sidebars.', hi: 'Photo, skill percentage bars aur icons hatayein.' },
        completed: false,
      },
      {
        id: 'res-2',
        pillarId: 'resume',
        title: { en: 'Every bullet point follows Google XYZ formula: "Accomplished [X], measured by [Y], by doing [Z]"', hi: 'Google XYZ formula: Accomplished [X] measured by [Y] doing [Z]' },
        explanation: { en: 'Example: "Reduced API response latency by 32% (240ms to 160ms) by implementing Redis cache-aside".', hi: 'Action verb + Metric number + Technical solution.' },
        actionTip: { en: 'Add percentages, latencies, user numbers, or lines of code tested.', hi: 'Har bullet me numbers aur metrics daalein.' },
        completed: false,
      },
      {
        id: 'res-3',
        pillarId: 'resume',
        title: { en: 'Zero spelling errors and working hyperlinked GitHub, LinkedIn & Portfolio', hi: 'Zero spelling errors aur working clickable links' },
        explanation: { en: 'A broken link or typo on a 1-page document suggests poor attention to detail.', hi: 'Sare links click karke check karein ki sahi page khul raha hai.' },
        actionTip: { en: 'Test all hyperlinks in an incognito window before sending.', hi: 'Incognito me saare links check karein.' },
        completed: false,
      },
    ],
  },
  {
    id: 'architecture',
    title: {
      en: '4. System Design & Architectural Depth',
      hi: '4. System Design & Architectural Trade-offs',
    },
    description: {
      en: 'High-package compensation hinges on understanding how systems scale, fail gracefully, and manage distributed data.',
      hi: 'Bade packages unhi ko milte hain jo scalability, databases aur distributed systems ke trade-offs explain kar sakte hain.',
    },
    targetImpact: {
      en: 'Unlocks mid-tier to top-tier compensation bands.',
      hi: 'Higher CTC brackets me qualify karne ke liye zaruri hai.',
    },
    items: [
      {
        id: 'arch-1',
        pillarId: 'architecture',
        title: { en: 'Can design classic systems (TinyURL, Rate Limiter, Notification Engine, Chat)', hi: 'Classic interview systems design karna (TinyURL, Chat, Rate Limiter)' },
        explanation: { en: 'Understand end-to-end components: Load balancer, CDN, App server, DB, Cache, Queue.', hi: 'Components aur data flow diagram banana.' },
        actionTip: { en: 'Study Donne Martin\'s System Design Primer.', hi: 'Trade-offs (Latency vs Consistency) par focus karein.' },
        completed: false,
      },
      {
        id: 'arch-2',
        pillarId: 'architecture',
        title: { en: 'Able to articulate SQL vs NoSQL, B-Trees vs LSM Trees, and Caching trade-offs', hi: 'SQL vs NoSQL aur Caching strategies explain karna' },
        explanation: { en: 'Interviewers look for deep reasoning, not dogmatic answers.', hi: 'Kyu choose kiya aur alternatives ke kya downsides the.' },
        actionTip: { en: 'Never say "Redis is just faster" — explain RAM vs disk I/O and data persistence.', hi: 'Underlying hardware aur memory mechanics samjhein.' },
        completed: false,
      },
    ],
  },
  {
    id: 'behavioral',
    title: {
      en: '5. Behavioral Mastery & STAR Method Stories',
      hi: '5. Behavioral & STAR Method Stories (HR / Manager Rounds)',
    },
    description: {
      en: 'Technical competence gets you to the final round; behavioral red flags lose you the job. Culture fit is strictly evaluated.',
      hi: 'Technical round clear hone ke baad bhi 40% log Managerial ya Culture fit round me bahar ho jate hain.',
    },
    targetImpact: {
      en: 'Eliminates cultural rejections and establishes executive presence.',
      hi: 'Team player aur mature engineer ki image create karta hai.',
    },
    items: [
      {
        id: 'beh-1',
        pillarId: 'behavioral',
        title: { en: 'Prepared 5 distinct STAR stories (Conflict with peer, tight deadline, critical mistake)', hi: '5 real STAR stories (Situation, Task, Action, Result) ready' },
        explanation: { en: 'Having stories rehearsed prevents rambling under interview stress.', hi: 'Interview me achanak sochne ki jagah pehle se structured answers hona.' },
        actionTip: { en: 'Structure: 20% Situation, 10% Task, 50% Action taken by YOU, 20% Measurable Result.', hi: 'Apne exact actions aur measurable results par focus karein.' },
        completed: false,
      },
      {
        id: 'beh-2',
        pillarId: 'behavioral',
        title: { en: 'Prepared thoughtful reverse-interview questions for the Engineering Manager', hi: 'Interview ke end me Manager se puchne ke liye thoughtful questions' },
        explanation: { en: 'Asking "What does on-call look like?" or "How is technical debt prioritized?" shows seniority.', hi: 'Shows you care about the team culture and engineering excellence.' },
        actionTip: { en: 'Never say "I don\'t have any questions".', hi: 'Kam se kam 2 genuine questions zaroor puchein.' },
        completed: false,
      },
    ],
  },
  {
    id: 'outbound',
    title: {
      en: '6. Outbound Application & Referral Pipeline',
      hi: '6. Referral Strategy & Application Pipeline',
    },
    description: {
      en: 'Applying to only 5 companies and waiting is the #1 mistake. High-package outcomes require a targeted funnel of 50+ applications with warm referrals.',
      hi: 'Sirf 4-5 companies me apply karke baithe rehna sabse badi galti hai. Systematic pipeline aur referrals chahiye.',
    },
    targetImpact: {
      en: 'Guarantees steady interview flow and competing offers for negotiation leverage.',
      hi: 'Interview flow constant rehta hai aur salary negotiate karne ke liye multiple offers milte hain.',
    },
    items: [
      {
        id: 'out-1',
        pillarId: 'outbound',
        title: { en: 'Target list of 50+ companies categorized by Tier-1, Tier-2, and High-Growth Startups', hi: '50+ companies ki categorized target list spreadsheet' },
        explanation: { en: 'Prevents putting all emotional hopes on a single company.', hi: 'Systematic spreadsheet pipeline maintain karna.' },
        actionTip: { en: 'Track status: Applied, Referral, OA, Round 1, Offer.', hi: 'Har application ki date aur follow-up record karein.' },
        completed: false,
      },
      {
        id: 'out-2',
        pillarId: 'outbound',
        title: { en: 'Polite 3-bullet personalized outreach template for requesting employee referrals', hi: 'Engineers se referral maangne ka respectful concise message' },
        explanation: { en: 'Engineers get referral bonuses if you pass; make it effortless for them to refer you.', hi: 'Unko direct job ID, resume link aur 3-bullet achievements bhej kar asaan banayein.' },
        actionTip: { en: 'Include exact Job ID, Resume link, and 2 standout bullet achievements.', hi: 'Zero spam, purely respectful and high-signal.' },
        completed: false,
      },
    ],
  },
];
