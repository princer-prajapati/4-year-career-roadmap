import { RoadmapQuarter } from '../../types';

export const SOFTWARE_ENGINEERING_ROADMAP: RoadmapQuarter[] = [
  // YEAR 1: Foundations, Programming Fundamentals, CS Basics, Git & Small Projects
  {
    id: 'swe-y1q1',
    year: 1,
    quarter: 1,
    title: {
      en: 'Programming Core & Algorithmic Thinking',
      hi: 'Programming Foundations & Logic Building',
    },
    focus: {
      en: 'Master one core programming language (C++, Java, or Python), basic data types, control flow, functions, and command line basics.',
      hi: 'Ek primary programming language (C++, Java, ya Python) me comfort banana, basic logic building aur terminal use karna.',
    },
    whyItMatters: {
      en: 'Jumping straight into web frameworks without rock-solid fundamentals leads to confusion later. Syntax and logic building are your bedrock.',
      hi: 'Bina basic programming logic ke seedhe complex web frameworks me jump karne se baad me bohot confusion hoti hai. Pehle logic strong karo.',
    },
    baseHoursPerWeek: 10,
    skills: [
      { id: 's1', title: { en: 'Variables, loops, conditionals, functions', hi: 'Loops, conditions aur functions likhna' }, category: 'skill', completed: false },
      { id: 's2', title: { en: 'Arrays, Strings, Pointers / Memory references', hi: 'Arrays, Strings aur Memory working samajhna' }, category: 'skill', completed: false },
      { id: 's3', title: { en: 'Basic Terminal / Bash commands (cd, ls, mkdir, grep)', hi: 'Terminal aur Command Line chalana' }, category: 'skill', completed: false },
      { id: 's4', title: { en: 'Git basics: init, add, commit, push to GitHub', hi: 'Git aur GitHub pe code push karna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p1', title: { en: 'Solve 30 beginner logic problems on HackerRank or LeetCode Easy', hi: 'HackerRank ya LeetCode par 30 easy problems solve karein' }, category: 'practice', completed: false },
      { id: 'p2', title: { en: 'Create a GitHub profile with clean README and daily commit habit', hi: 'GitHub profile banayein aur regular code push karne ki aadat dalein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y1q1',
        title: { en: 'Command-Line Expense & Budget Tracker', hi: 'CLI Expense & Budget Tracker' },
        description: {
          en: 'A terminal-based tool that records expenses, calculates monthly totals, and saves transactions to a local JSON/CSV file.',
          hi: 'Terminal par chalne wala budget tracker jo daily kharche calculate kare aur file me save kare.',
        },
        technologies: ['C++ / Java / Python', 'File I/O', 'Git'],
        portfolioImpact: { en: 'Shows clean modular code, loops, file persistence, and Git usage.', hi: 'Dikhata hai ki aap clean functions, file handling aur Git samajhte hain.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c1', title: { en: 'Set up professional GitHub and LinkedIn profile', hi: 'Clean LinkedIn aur GitHub profile set karein' }, category: 'career', completed: false },
      { id: 'c2', title: { en: 'Join a student developer group or coding community (Discord/college club)', hi: 'Kisi coding community ya college developer club me active banein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm1', title: { en: 'Comfortable writing standalone functions and debugging common syntax errors without help', hi: 'Bina help ke basic programs likhna aur error solve karna' }, category: 'milestone', completed: false },
      { id: 'm2', title: { en: 'First open-source repo hosted on GitHub with 15+ commits', hi: 'GitHub par pehla working project 15+ commits ke sath live' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r1', title: 'Official Python / C++ Documentation Guide', type: 'Documentation', url: 'https://docs.python.org/3/tutorial/', free: true, notes: 'Follow the official language tutorial.' },
      { id: 'r2', title: 'Git & GitHub Immersion Guide', type: 'Practice Platform', url: 'https://learngitbranching.js.org/', free: true, notes: 'Interactive Git practice in browser.' },
    ],
  },
  {
    id: 'swe-y1q2',
    year: 1,
    quarter: 2,
    title: {
      en: 'Data Structures Foundations & HTML/CSS/JS Intro',
      hi: 'Core Data Structures & Web Basics Shuruat',
    },
    focus: {
      en: 'Learn foundational data structures (Time complexity, Arrays, Linked Lists, Stacks, Queues) and explore how the web works with basic HTML/CSS/JS.',
      hi: 'Time Complexity (Big-O), Stacks, Queues, Linked Lists aur internet kaise chalta hai (HTML/CSS/JS) seekhna.',
    },
    whyItMatters: {
      en: 'Big-O notation and data structures are tested in every screening round. Learning them early avoids panic in year 3 and 4.',
      hi: 'Technical interviews me Big-O aur Stacks/Queues ke questions aate hain. Starting se practice karoge toh aage burden nahi lagega.',
    },
    baseHoursPerWeek: 12,
    skills: [
      { id: 's5', title: { en: 'Time & Space Complexity analysis (Big-O notation)', hi: 'Big-O notation: Time aur Space complexity nikaalna' }, category: 'skill', completed: false },
      { id: 's6', title: { en: 'Linear Data Structures: Linked Lists, Stacks, Queues', hi: 'Linked Lists, Stacks aur Queues implement karna' }, category: 'skill', completed: false },
      { id: 's7', title: { en: 'Semantic HTML5, CSS Flexbox/Grid fundamentals', hi: 'Semantic HTML5 aur modern CSS Flexbox/Grid' }, category: 'skill', completed: false },
      { id: 's8', title: { en: 'Vanilla JavaScript: DOM manipulation, events, fetch API', hi: 'Vanilla JavaScript: DOM, Event Listeners aur Fetch API' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p3', title: { en: 'Implement a Stack and Queue from scratch using arrays and pointers', hi: 'Scratch se Stack aur Queue implement karein' }, category: 'practice', completed: false },
      { id: 'p4', title: { en: 'Solve 25 classic Linked List and Stack problems on LeetCode', hi: '25 LeetCode Easy/Medium problems solve karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y1q2',
        title: { en: 'Interactive Developer Portfolio with Dynamic Projects', hi: 'Responsive Portfolio Website' },
        description: {
          en: 'A mobile-responsive personal site with dark mode toggle, contact form, and dynamic GitHub repo listing fetched via API.',
          hi: 'Mobile-responsive portfolio jisme GitHub API se aapke projects automatically fetch hote hain.',
        },
        technologies: ['HTML5', 'CSS (Flexbox/Grid)', 'JavaScript', 'GitHub Pages / Vercel'],
        portfolioImpact: { en: 'Your live public resume link for applications and social profiles.', hi: 'Aapka personal live web identity jo recruiter ko dikha sakein.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c3', title: { en: 'Deploy portfolio to Vercel/GitHub Pages with custom or free domain', hi: 'Portfolio ko free Vercel ya GitHub Pages par live deploy karein' }, category: 'career', completed: false },
      { id: 'c4', title: { en: 'Write a short LinkedIn post explaining a DSA concept you just mastered', hi: 'Jo naya concept seekha uspar LinkedIn par ek short informative post likhein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm3', title: { en: 'Can explain O(1), O(N), O(N log N) intuitively without memorizing', hi: 'Complexity concepts bina rate samajh kar explain karna' }, category: 'milestone', completed: false },
      { id: 'm4', title: { en: 'Live portfolio URL active with responsive mobile styling', hi: 'Live working portfolio link ready' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r3', title: 'MDN Web Docs (JavaScript Guide)', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', free: true, notes: 'The golden standard reference for JS.' },
      { id: 'r4', title: 'NeetCode Roadmap / Blind 75 Introduction', type: 'Practice Platform', url: 'https://neetcode.io/roadmap', free: true, notes: 'Structured roadmap for problem-solving.' },
    ],
  },
  {
    id: 'swe-y1q3',
    year: 1,
    quarter: 3,
    title: {
      en: 'Trees, Recursion & Modern Frontend (React / TypeScript)',
      hi: 'Recursion, Binary Trees & Modern React / TypeScript',
    },
    focus: {
      en: 'Deepen problem solving with recursion, Binary Search Trees, and learn modern component-driven frontend with React and TypeScript.',
      hi: 'Recursion, Trees aur frontend ka standard framework (React + TypeScript) seekhna.',
    },
    whyItMatters: {
      en: 'TypeScript and React are what 70%+ of modern software firms write. Recursion unlocks tree/graph algorithms needed for high-tier technical interviews.',
      hi: 'React aur TypeScript industry standard ban chuke hain. Recursion seekhne se aage Tree aur Graph algorithms asaan ho jate hain.',
    },
    baseHoursPerWeek: 12,
    skills: [
      { id: 's9', title: { en: 'Recursion, Binary Trees, Tree Traversals (Inorder, Preorder, Postorder)', hi: 'Recursion aur Binary Tree traversals' }, category: 'skill', completed: false },
      { id: 's10', title: { en: 'Modern React: JSX, props, state, hooks (useState, useEffect, useMemo)', hi: 'Modern React: Hooks, state management aur reusable components' }, category: 'skill', completed: false },
      { id: 's11', title: { en: 'TypeScript essentials: Interfaces, types, generics, strict typing', hi: 'TypeScript types, interfaces aur strict type safety' }, category: 'skill', completed: false },
      { id: 's12', title: { en: 'Tailwind CSS utility-first styling', hi: 'Tailwind CSS se fast aur clean UI design' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p5', title: { en: 'Solve 20 Tree problems (Max depth, invert tree, LCA, level-order)', hi: '20 LeetCode Tree problems solve karein' }, category: 'practice', completed: false },
      { id: 'p6', title: { en: 'Refactor a plain JavaScript snippet into clean typed TypeScript', hi: 'JS code ko TypeScript me convert karke type safety check karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y1q3',
        title: { en: 'Real-Time Kanban Task Board with Local Storage', hi: 'Drag & Drop Kanban Task Board' },
        description: {
          en: 'A Trello-like productivity app with drag-and-drop columns, tag filtering, search, and persistent local storage.',
          hi: 'Trello jaisa productivity tool jisme drag-and-drop, category filters aur data saving ho.',
        },
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage API'],
        portfolioImpact: { en: 'Proves client-side state architecture, component modularity, and TypeScript hygiene.', hi: 'State management aur modern React patterns demonstrate karta hai.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c5', title: { en: 'Make your first simple open-source contribution (docs typo, small bug fix)', hi: 'Kisi open-source repo me pehla PR create karein' }, category: 'career', completed: false },
      { id: 'c6', title: { en: 'Connect with 10 engineers working at target companies on LinkedIn with personalized notes', hi: 'LinkedIn par 10 software engineers ko polite networking note bhejein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm5', title: { en: '100 total LeetCode problems solved across Arrays, Strings, Trees', hi: '100 quality DSA problems complete' }, category: 'milestone', completed: false },
      { id: 'm6', title: { en: 'Can build and deploy a React + TypeScript app from scratch in under 3 hours', hi: 'React app scratch se banakar bina error deploy kar lena' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r5', title: 'React Official Documentation (react.dev)', type: 'Documentation', url: 'https://react.dev/learn', free: true, notes: 'Interactive official docs.' },
      { id: 'r6', title: 'TypeScript for JavaScript Programmers', type: 'Documentation', url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html', free: true, notes: 'Concise handbook overview.' },
    ],
  },
  {
    id: 'swe-y1q4',
    year: 1,
    quarter: 4,
    title: {
      en: 'Backend Foundations & Relational Databases (SQL)',
      hi: 'Backend Fundamentals & Relational Databases (SQL)',
    },
    focus: {
      en: 'Learn server-side runtime (Node.js/Express, Python/FastAPI, or Java Spring), REST API design, relational data modeling with PostgreSQL, and basic authentication.',
      hi: 'Server-side code likhna, REST APIs banana, PostgreSQL me database design aur JWT login authentication.',
    },
    whyItMatters: {
      en: 'A frontend-only developer is limited. Knowing how databases, indexing, and authentication work makes you a true full-stack contender.',
      hi: 'Sirf frontend jaan kar achhe packages milna mushkil hota hai. Backend aur SQL aane se aapka profile bohot strong ban jata hai.'
    },
    baseHoursPerWeek: 12,
    skills: [
      { id: 's13', title: { en: 'RESTful API principles, HTTP status codes, request lifecycles', hi: 'REST APIs, HTTP status codes aur headers' }, category: 'skill', completed: false },
      { id: 's14', title: { en: 'Relational Database modeling: tables, foreign keys, normalization', hi: 'PostgreSQL: Schema design, Foreign keys aur queries' }, category: 'skill', completed: false },
      { id: 's15', title: { en: 'Authentication essentials: Passwords hashing (bcrypt), JWT tokens', hi: 'User Authentication: Passwords hashing aur JWT tokens' }, category: 'skill', completed: false },
      { id: 's16', title: { en: 'CRUD operations with raw SQL or modern ORM (Prisma / Drizzle)', hi: 'SQL queries aur database migrations' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p7', title: { en: 'Design an SQL schema with 4 interrelated tables (Users, Posts, Comments, Likes)', hi: '4 tables ka relational database schema design karein' }, category: 'practice', completed: false },
      { id: 'p8', title: { en: 'Test APIs using Postman or Bruno with automated tests and auth headers', hi: 'Postman/Bruno me authentication aur API tests run karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y1q4',
        title: { en: 'Full-Stack Notes & Workspace API with Authentication', hi: 'Full-Stack Notes & Auth Web Application' },
        description: {
          en: 'A production-ready note-taking app with user signup/login, markdown support, search, and PostgreSQL database storage.',
          hi: 'Complete full-stack app jisme login, secure password, markdown notes aur database queries hain.',
        },
        technologies: ['Node.js / Express', 'PostgreSQL', 'JWT', 'React', 'TypeScript'],
        portfolioImpact: { en: 'Demonstrates end-to-end full-stack capability from UI to database.', hi: 'Recruiter ko dikhata hai ki aap frontend se backend database tak sab handle kar sakte hain.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c7', title: { en: 'Participate in your first 24-48hr hackathon (college or virtual on Devpost)', hi: 'Kisi college ya virtual hackathon me participate karein' }, category: 'career', completed: false },
      { id: 'c8', title: { en: 'Create a 1-page clean ATS-compliant resume highlighting Year 1 projects and GitHub links', hi: 'Single-page clean ATS resume taiyar karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm7', title: { en: 'First deployed full-stack web application with working database and live authentication', hi: 'Pehli full-stack live application working database ke sath live' }, category: 'milestone', completed: false },
      { id: 'm8', title: { en: 'Able to write JOINs, GROUP BY, and indexed queries in SQL comfortably', hi: 'Complex SQL queries bina hesitation likhna' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r7', title: 'PostgreSQL Tutorial & Interactive Practice', type: 'Documentation', url: 'https://www.postgresqltutorial.com/', free: true, notes: 'Comprehensive SQL guide.' },
      { id: 'r8', title: 'Full Stack Open (University of Helsinki)', type: 'Course/Video', url: 'https://fullstackopen.com/en/', free: true, notes: 'World-class free full-stack curriculum.' },
    ],
  },

  // YEAR 2: Intermediate Problem Solving, CS Fundamentals (OS/DBMS/CN), Collaboration & First Internships
  {
    id: 'swe-y2q1',
    year: 2,
    quarter: 1,
    title: {
      en: 'Graphs, Dynamic Programming Intro & Computer Networks',
      hi: 'Graphs, DP Basics & Computer Networks',
    },
    focus: {
      en: 'Tackle Graph algorithms (BFS, DFS, Dijkstra), basic Dynamic Programming (memoization & tabulation), and core Computer Networks (TCP/IP, DNS, HTTP/3).',
      hi: 'Graphs (BFS/DFS), Dynamic Programming ke basic patterns aur Computer Networks fundamentals seekhna.',
    },
    whyItMatters: {
      en: 'Product company online assessments (OAs) filter 80% of candidates on Graphs and DP. Computer Networks questions appear in technical interviews.',
      hi: 'Top companies ke initial coding test me Graph aur DP ke sawal aate hain. Yahan grip banana selection ka pehla bada step hai.',
    },
    baseHoursPerWeek: 14,
    skills: [
      { id: 's17', title: { en: 'Graph representations (Adjacency list/matrix), BFS and DFS traversals', hi: 'Graphs: Adjacency list, BFS aur DFS traversals' }, category: 'skill', completed: false },
      { id: 's18', title: { en: 'Introductory Dynamic Programming: 1D DP, Fibonacci, Climbing Stairs, Knapsack 0/1', hi: 'DP: Memoization, Tabulation aur standard patterns' }, category: 'skill', completed: false },
      { id: 's19', title: { en: 'Computer Networks: OSI model, TCP vs UDP, DNS resolution, TLS/HTTPS handshake', hi: 'Networks: TCP/IP, DNS, HTTPS aur WebSockets' }, category: 'skill', completed: false },
      { id: 's20', title: { en: 'Docker basics: Containerizing full-stack apps and writing Dockerfiles', hi: 'Docker: Container banana aur run karna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p9', title: { en: 'Solve 30 Graph and 20 DP problems on LeetCode / NeetCode', hi: '30 Graph aur 20 DP problems solve karein' }, category: 'practice', completed: false },
      { id: 'p10', title: { en: 'Inspect network traffic using Wireshark or browser DevTools Network tab', hi: 'Network tab me headers, payloads aur status codes inspect karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y2q1',
        title: { en: 'Real-Time Collaborative Code Editor with WebSockets', hi: 'Collaborative Real-Time Code Room' },
        description: {
          en: 'A multi-user web editor where two or more developers can type code simultaneously in real time with syntax highlighting.',
          hi: 'Ek multi-user live code editor jisme 2 log ek sath bina lag ke code kar sakte hain WebSockets ke through.',
        },
        technologies: ['React', 'Node.js', 'Socket.io / WebSockets', 'Docker'],
        portfolioImpact: { en: 'Demonstrates networking knowledge, concurrent client handling, and event-driven architecture.', hi: 'Socket programming aur real-time architecture ka solid proof.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c9', title: { en: 'Build a spreadsheet of 40 dream companies and their tech stacks', hi: '40 target companies ki list aur hiring patterns note karein' }, category: 'career', completed: false },
      { id: 'c10', title: { en: 'Reach out to 5 college alumni currently working in software roles for informational chats', hi: 'Working alumni se guidance aur referral ke liye baat karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm9', title: { en: '175+ DSA problems solved; confident solving standard BFS/DFS questions in under 25 mins', hi: '175+ LeetCode problems; BFS/DFS 25 min me solve karne ki speed' }, category: 'milestone', completed: false },
      { id: 'm10', title: { en: 'Dockerized project running reliably on any machine with `docker compose up`', hi: 'Project single command `docker compose up` se launch ho raha ho' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r9', title: 'NeetCode Graph & DP Playlists', type: 'Practice Platform', url: 'https://neetcode.io/practice', free: true, notes: 'Crystal clear video and pattern walkthroughs.' },
      { id: 'r10', title: 'Computer Networking: A Top-Down Approach Summary', type: 'Book/Article', url: 'https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES', free: true, notes: 'Essential networking notes for interviews.' },
    ],
  },
  {
    id: 'swe-y2q2',
    year: 2,
    quarter: 2,
    title: {
      en: 'Operating Systems, Concurrency & Database Internals',
      hi: 'Operating Systems, Concurrency & DBMS Deep Dive',
    },
    focus: {
      en: 'Understand how computers actually run software: processes vs threads, deadlocks, memory management, and database indexing (B-Trees, ACID transactions).',
      hi: 'OS internals (threads, processes, concurrency) aur Database indexing (B-Trees, ACID transactions) samajhna.',
    },
    whyItMatters: {
      en: 'High-package interviews grill candidates on ACID properties, database deadlocks, indexing strategies, and multithreading.',
      hi: 'Product companies ke interviews me database indexing aur multithreading ke in-depth questions aate hain.',
    },
    baseHoursPerWeek: 14,
    skills: [
      { id: 's21', title: { en: 'OS Core: Processes, Threads, Context Switching, CPU Scheduling', hi: 'Processes, Threads aur Context Switching' }, category: 'skill', completed: false },
      { id: 's22', title: { en: 'Concurrency & Race conditions, Mutexes, Semaphores', hi: 'Concurrency, Race Conditions aur Mutex locks' }, category: 'skill', completed: false },
      { id: 's23', title: { en: 'DBMS: B-Trees vs Hash Indexes, EXPLAIN ANALYZE query performance', hi: 'DBMS: B-Trees, Indexing aur Query optimization' }, category: 'skill', completed: false },
      { id: 's24', title: { en: 'ACID transactions, isolation levels, database locking (pessimistic vs optimistic)', hi: 'ACID properties aur transaction isolation levels' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p11', title: { en: 'Run EXPLAIN ANALYZE on a 500,000-row SQL table before and after creating indexes', hi: '5 lakh rows wale table par indexing ka performance impact dekhein' }, category: 'practice', completed: false },
      { id: 'p12', title: { en: 'Write a multithreaded script producing a race condition and fix it with a lock', hi: 'Race condition create karke mutex se fix karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y2q2',
        title: { en: 'High-Performance In-Memory Key-Value Store with TTL', hi: 'In-Memory Key-Value Cache Engine (Mini Redis)' },
        description: {
          en: 'A lightweight caching server supporting GET, SET, DEL, EXPIRE commands with thread-safe operations and eviction policies (LRU).',
          hi: 'Ek mini Redis cache engine jo concurrent reads/writes handle kare aur LRU cache eviction support kare.',
        },
        technologies: ['Go / C++ / Node.js', 'TCP Sockets', 'Concurrency', 'LRU Cache algorithm'],
        portfolioImpact: { en: 'Impresses interviewers by showing systems depth beyond boilerplate CRUD apps.', hi: 'Standout project jo dikhata hai ki aapko systems aur data structures dono aate hain.' },
        difficulty: 'Advanced',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c11', title: { en: 'Apply to 25 summer internship postings (LinkedIn, Wellfound, Internshala)', hi: '25 summer internship positions me apply karein' }, category: 'career', completed: false },
      { id: 'c12', title: { en: 'Participate in weekly LeetCode contests to build real exam speed and pressure resistance', hi: 'Weekly LeetCode contest me baith kar time limit ke under solve karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm11', title: { en: 'Can explain why an index speeds up SELECT but slows down INSERT in plain English', hi: 'Database index ke trade-offs accurately explain karna' }, category: 'milestone', completed: false },
      { id: 'm12', title: { en: 'Participated in at least 4 competitive programming or LeetCode contests', hi: '4 live contests participate kiye hue' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r11', title: 'Use The Index, Luke! (Database Indexing Guide)', type: 'Book/Article', url: 'https://use-the-index-luke.com/', free: true, notes: 'The ultimate guide to SQL indexing.' },
      { id: 'r12', title: 'Operating Systems: Three Easy Pieces (Free OSTEP Book)', type: 'Book/Article', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', free: true, notes: 'Best conceptual OS book available free online.' },
    ],
  },
  {
    id: 'swe-y2q3',
    year: 2,
    quarter: 3,
    title: {
      en: 'Testing, CI/CD & Production Engineering Habits',
      hi: 'Automated Testing, CI/CD Pipelines & Code Quality',
    },
    focus: {
      en: 'Learn how professional engineering teams ship code: Unit testing, Integration testing, GitHub Actions CI/CD, and clean architecture principles.',
      hi: 'Code testing (Jest/PyTest), GitHub Actions CI/CD pipelines automate karna aur clean architecture seekhna.',
    },
    whyItMatters: {
      en: 'Junior engineers who already write unit tests and understand CI pipelines stand out drastically over candidates who only write untested prototype code.',
      hi: 'Testing aane se recruiter ko trust hota hai ki aapka code production me crash nahi karega.',
    },
    baseHoursPerWeek: 12,
    skills: [
      { id: 's25', title: { en: 'Unit testing and mocking (Jest, Vitest, or PyTest)', hi: 'Unit testing aur mock data ke sath test likhna' }, category: 'skill', completed: false },
      { id: 's26', title: { en: 'Integration testing for REST APIs (Supertest)', hi: 'API Integration testing' }, category: 'skill', completed: false },
      { id: 's27', title: { en: 'GitHub Actions: Automated linting, test runners, and automated deployment', hi: 'GitHub Actions CI/CD pipeline set karna' }, category: 'skill', completed: false },
      { id: 's28', title: { en: 'Clean Code: SOLID principles, separation of concerns, error handling middleware', hi: 'Clean Code aur SOLID principles' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p13', title: { en: 'Achieve 80%+ test coverage on your backend API endpoints with automated runs', hi: 'Apne backend project me 80% automated test coverage achieve karein' }, category: 'practice', completed: false },
      { id: 'p14', title: { en: 'Write a GitHub Actions YAML workflow that fails pull requests if tests fail', hi: 'PR merge rokne wali automated test pipeline banayein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y2q3',
        title: { en: 'Production E-Commerce Engine with Stripe Checkout & Webhooks', hi: 'Production Payment & Order API with Webhooks' },
        description: {
          en: 'A fully tested store API with cart validation, idempotent Stripe checkout sessions, order fulfillment webhooks, and automated CI tests.',
          hi: 'Full testing ke sath e-commerce backend jisme Stripe payment, webhooks aur automated deployment pipeline hai.',
        },
        technologies: ['Node.js / Express', 'Stripe API', 'PostgreSQL', 'Jest', 'GitHub Actions'],
        portfolioImpact: { en: 'Demonstrates handling real money transactions, idempotency, webhooks, and automated testing.', hi: 'Real-world payments aur financial safety handling dikhata hai.' },
        difficulty: 'Advanced',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c13', title: { en: 'Send 15 tailored cold emails to engineering leads/founders at seed/Series-A startups for winter/summer internships', hi: 'Startup founders/leads ko polite personalized cold emails bhejein' }, category: 'career', completed: false },
      { id: 'c14', title: { en: 'Conduct a peer mock interview with a fellow student or mentor', hi: 'Kisi dost ya senior ke sath 45-min ka live mock interview karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm13', title: { en: '250+ LeetCode problems solved; comfortable with recursion, DP basics, and tree/graph problems', hi: '250+ solved problems; core patterns pe achhi pakad' }, category: 'milestone', completed: false },
      { id: 'm14', title: { en: 'Repository showing green CI/CD badges and passing automated test suites', hi: 'Repo me green CI checkmark aur automated tests running' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r13', title: 'GitHub Actions Official Documentation', type: 'Documentation', url: 'https://docs.github.com/en/actions', free: true, notes: 'Official guides for building CI/CD workflows.' },
      { id: 'r14', title: 'Testing JavaScript by Kent C. Dodds Guides', type: 'Book/Article', url: 'https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests', free: true, notes: 'Golden guide on what and how to test.' },
    ],
  },
  {
    id: 'swe-y2q4',
    year: 2,
    quarter: 4,
    title: {
      en: 'First Technical Internship & Production Teamwork',
      hi: 'First Technical Internship & Team Collaboration',
    },
    focus: {
      en: 'Execute your first internship or contribute deeply to a recognized open-source repository. Learn agile sprints, PR reviews, and communicating with seniors.',
      hi: 'Pehli internship ya active open-source contribution execute karna. Code reviews, Git branches aur team me kaam karna.',
    },
    whyItMatters: {
      en: 'Having at least one verified software internship on your resume completely changes recruiter response rates from 5% to 40%+.',
      hi: 'Resume par 1 genuine internship aate hi top companies ke call aane ke chances 5 guna badh jate hain.',
    },
    baseHoursPerWeek: 14,
    skills: [
      { id: 's29', title: { en: 'Code review etiquette: Writing clear PR descriptions, handling constructive feedback', hi: 'Code review etiquette: PRs review karna aur feedback lena' }, category: 'skill', completed: false },
      { id: 's30', title: { en: 'Git rebasing, resolving complex merge conflicts, feature branch workflows', hi: 'Git rebase aur merge conflicts bina dar solve karna' }, category: 'skill', completed: false },
      { id: 's31', title: { en: 'Reading large legacy codebases without getting overwhelmed', hi: 'Bade company codebases ko navigate karna aur samajhna' }, category: 'skill', completed: false },
      { id: 's32', title: { en: 'Debugging production logs using CloudWatch, Datadog, or Sentry', hi: 'Production error logs aur monitoring tools use karna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p15', title: { en: 'Maintain a weekly internship / project learning log documenting decisions made and bugs solved', hi: 'Hafte bhar me jo solve kiya uski short engineering diary likhein' }, category: 'practice', completed: false },
      { id: 'p16', title: { en: 'Solve 1 Medium LeetCode problem every day to maintain problem-solving sharpness', hi: 'Daily 1 LeetCode Medium solve karke momentum barkarar rakhein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y2q4',
        title: { en: 'Internship Feature Deliverable / Significant Open Source PR', hi: 'Internship Production Feature / Major Open-Source Pull Request' },
        description: {
          en: 'A shipped feature at your internship or a merged pull request in an active open-source project with 500+ stars.',
          hi: 'Aapki internship me ship kiya gaya real feature ya open-source repo me merged PR.',
        },
        technologies: ['Company Stack / Open-Source Stack', 'Git', 'Production Logging'],
        portfolioImpact: { en: 'Real-world experience proves you can navigate existing code and deliver value in a team.', hi: 'Sabse strong proof ki aap team ke andar production code likh sakte hain.' },
        difficulty: 'Advanced',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c15', title: { en: 'Ask your internship manager for constructive 360-feedback on code quality and speed', hi: 'Manager se constructive feedback lein ki kahan improve karna hai' }, category: 'career', completed: false },
      { id: 'c16', title: { en: 'Update resume with quantitative impact bullet points (e.g. "Reduced API latency by 28%")', hi: 'Resume me impact numbers ke sath likhein (e.g. 28% faster queries)' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm15', title: { en: 'Completed first software internship OR had 2+ substantive PRs merged in open source', hi: 'Pehli verified internship complete ya open-source PR merged' }, category: 'milestone', completed: false },
      { id: 'm16', title: { en: 'Recommendation letter or positive LinkedIn recommendation secured from mentor/manager', hi: 'Manager ya senior engineer se recommendation prapt' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r15', title: 'Google Engineering Practices Guide (Code Review)', type: 'Documentation', url: 'https://google.github.io/eng-practices/', free: true, notes: 'How Google conducts code reviews.' },
      { id: 'r16', title: 'First Contributions Guide', type: 'Practice Platform', url: 'https://firstcontributions.github.io/', free: true, notes: 'Hands-on guide to submitting your first PR.' },
    ],
  },

  // YEAR 3: Advanced Skills, Substantial Portfolio, Distributed Systems, System Design & Big Tech Prep
  {
    id: 'swe-y3q1',
    year: 3,
    quarter: 1,
    title: {
      en: 'System Design Foundations (Scalability, Caching & Queues)',
      hi: 'System Design Foundations (Scalability, Caching & Message Queues)',
    },
    focus: {
      en: 'Learn how large systems scale to millions of users: Load balancing, Redis caching strategies, Message Queues (Kafka / RabbitMQ), and database sharding.',
      hi: 'Bade systems ko scale karna: Load balancers, Redis caching, Message Queues (Kafka/RabbitMQ) aur Database sharding.',
    },
    whyItMatters: {
      en: 'High-paying SDE-1 and SDE-2 interviews test Low-Level Design (LLD) and High-Level Design (HLD). Candidates who know caching trade-offs earn top tiers.',
      hi: 'Top package dene wali companies System Design aur architectural trade-offs par bohot focus karti hain.',
    },
    baseHoursPerWeek: 14,
    skills: [
      { id: 's33', title: { en: 'System Design: Horizontal vs Vertical scaling, Load Balancers (Round-Robin, Least Connections)', hi: 'Scaling: Horizontal vs Vertical, Load Balancers' }, category: 'skill', completed: false },
      { id: 's34', title: { en: 'Distributed Caching: Redis patterns (Cache-Aside, Write-Through, Eviction policies)', hi: 'Redis Caching patterns aur Cache Invalidation' }, category: 'skill', completed: false },
      { id: 's35', title: { en: 'Asynchronous Processing: Message Queues (Kafka / RabbitMQ / BullMQ)', hi: 'Message Queues aur background worker pipelines' }, category: 'skill', completed: false },
      { id: 's36', title: { en: 'Database Scaling: Read replicas, connection pooling, horizontal partitioning / sharding', hi: 'Database Read Replicas aur Sharding concepts' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p17', title: { en: 'Sketch system architecture diagrams for URL Shortener (TinyURL) and Pastebin', hi: 'TinyURL aur Pastebin ka complete architecture diagram banayein' }, category: 'practice', completed: false },
      { id: 'p18', title: { en: 'Implement a background email worker using Redis and BullMQ that processes 5,000 simulated jobs', hi: 'Queue banakar 5,000 background jobs safely process karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y3q1',
        title: { en: 'Distributed Scalable URL Shortener with Analytics & Rate Limiter', hi: 'Scalable TinyURL with Redis Rate Limiting & Click Analytics' },
        description: {
          en: 'A high-throughput URL shortening service handling 10,000+ requests/min with Redis caching, Token Bucket rate limiting, and real-time geographic click tracking.',
          hi: 'High-traffic TinyURL service jisme Redis caching, rate limiting aur geo-analytics dashboard shamil hai.',
        },
        technologies: ['Node.js / Go', 'PostgreSQL', 'Redis', 'Docker Compose', 'Tailwind CSS'],
        portfolioImpact: { en: 'Classic interview architecture implemented in working, benchmarked code.', hi: 'Interviewers ka favorite system design question working code ke sath ready.' },
        difficulty: 'Advanced',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c17', title: { en: 'Join peer system design study groups (Pramp or Discord)', hi: 'System design peer study group me regular discussion karein' }, category: 'career', completed: false },
      { id: 'c18', title: { en: 'Target pre-placement internship (PPO) opportunities or 6-month winter internships', hi: 'College placement cell ya external referrals se PPO roles target karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm17', title: { en: '350+ LeetCode problems completed across all standard topics', hi: '350+ LeetCode problems; hard problems me approach banana' }, category: 'milestone', completed: false },
      { id: 'm18', title: { en: 'Able to articulate CAP theorem, eventual consistency, and cache invalidation trade-offs clearly', hi: 'CAP Theorem aur Distributed trade-offs explain karna' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r17', title: 'System Design Primer by Donne Martin', type: 'Documentation', url: 'https://github.com/donnemartin/system-design-primer', free: true, notes: 'The most comprehensive free system design repository.' },
      { id: 'r18', title: 'Designing Data-Intensive Applications (DDIA Notes)', type: 'Book/Article', url: 'https://github.com/ept/ddia-references', free: true, notes: 'Industry standard book notes on distributed data.' },
    ],
  },
  {
    id: 'swe-y3q2',
    year: 3,
    quarter: 2,
    title: {
      en: 'Microservices, Observability & Cloud Deployment (AWS/GCP)',
      hi: 'Microservices Architecture, AWS Cloud & SRE Observability',
    },
    focus: {
      en: 'Deploy containerized services to cloud infrastructure (AWS ECS, S3, RDS, CloudFront), implement observability (Prometheus/Grafana), and secure API gateways.',
      hi: 'AWS cloud par containers deploy karna, Prometheus/Grafana se monitoring aur Microservices communication seekhna.',
    },
    whyItMatters: {
      en: 'Knowing how your code behaves after being pushed to cloud servers separates a junior coder from a reliable mid-level engineer.',
      hi: 'Cloud deployment aur latency monitoring aane se company ko training ka kharcha bachta hai, isliye candidate standout hota hai.',
    },
    baseHoursPerWeek: 14,
    skills: [
      { id: 's37', title: { en: 'Cloud primitives: AWS EC2/ECS, S3 buckets, RDS managed databases, CloudFront CDN', hi: 'AWS Cloud: EC2, S3, RDS aur CDN configuration' }, category: 'skill', completed: false },
      { id: 's38', title: { en: 'Observability: Structured logging, Prometheus metrics, Grafana dashboards', hi: 'Observability: Metrics, logs aur Grafana dashboard' }, category: 'skill', completed: false },
      { id: 's39', title: { en: 'gRPC and Protocol Buffers vs REST for microservices communication', hi: 'Microservices ke liye gRPC aur Protobuf vs REST' }, category: 'skill', completed: false },
      { id: 's40', title: { en: 'Security: CORS, CSP headers, rate-limiting, and SQL injection prevention', hi: 'Web security: CORS, headers aur SQL injection defense' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p19', title: { en: 'Deploy a multi-container app on AWS free tier or Railway using proper environment variables', hi: 'Cloud server par multi-container app securely deploy karein' }, category: 'practice', completed: false },
      { id: 'p20', title: { en: 'Load test your API with k6 or Apache Bench up to 1,000 concurrent requests', hi: 'k6 se load test karke latency bottlenecks identify karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y3q2',
        title: { en: 'Cloud-Native Video Processing & Transcoding Pipeline', hi: 'Cloud-Native Video Upload & Processing Pipeline' },
        description: {
          en: 'An asynchronous video processing platform: users upload large videos to S3, a background worker transcode resolutions using FFmpeg, and notifies users via webhooks.',
          hi: 'Video upload pipeline jisme background worker multiple resolutions me video convert kare aur completion notification bheje.',
        },
        technologies: ['AWS S3', 'Node.js / Go', 'FFmpeg', 'Redis Queue', 'Docker'],
        portfolioImpact: { en: 'Demonstrates distributed file processing, heavy async workloads, and cloud storage integration.', hi: 'Heavy async workloads aur cloud storage ka zabardast showcase.' },
        difficulty: 'Advanced',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c19', title: { en: 'Reach out to 20 seniors/recruiters at Big Tech and top startups for upcoming campus/off-campus cycles', hi: 'Off-campus placements ke liye recruiters aur alumni ko ping karein' }, category: 'career', completed: false },
      { id: 'c20', title: { en: 'Record a 2-minute video walkthrough of your architecture and add it to your project README', hi: 'Project README me 2-minute loom video explanation dalein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm19', title: { en: 'Live cloud-deployed architecture with live health checks and structured logs', hi: 'Cloud architecture live with automated logging and health check' }, category: 'milestone', completed: false },
      { id: 'm20', title: { en: 'Passed 400+ LeetCode problems; contest rating above 1600+ or equivalent consistency', hi: '400+ LeetCode problems solved consistently' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r19', title: 'AWS Skill Builder & Cloud Practitioner Essentials', type: 'Course/Video', url: 'https://explore.skillbuilder.aws/', free: true, notes: 'Free official AWS fundamentals.' },
      { id: 'r20', title: 'k6 Performance Testing Documentation', type: 'Documentation', url: 'https://k6.io/docs/', free: true, notes: 'Open-source load testing tool.' },
    ],
  },
  {
    id: 'swe-y3q3',
    year: 3,
    quarter: 3,
    title: {
      en: 'Low-Level Design (LLD), Object-Oriented Patterns & Second Internship',
      hi: 'Low-Level Design (LLD), Design Patterns & Second Internship',
    },
    focus: {
      en: 'Master Low-Level Design (LLD): Strategy pattern, Factory, Observer, Singleton, Decorator, and design real machines (Parking Lot, Elevator System, Chess).',
      hi: 'Low-Level Design (LLD) aur Design Patterns: Factory, Observer, Singleton, aur Parking Lot/Elevator design questions.',
    },
    whyItMatters: {
      en: 'Many top product firms have dedicated 60-minute LLD rounds where you must write clean, extensible, object-oriented code live.',
      hi: 'Kayi badi companies ka ek pura round LLD aur Machine Coding ka hota hai. Yahan clean OOP code likhna aana chahiye.',
    },
    baseHoursPerWeek: 14,
    skills: [
      { id: 's41', title: { en: 'Gang of Four Design Patterns: Singleton, Factory, Strategy, Observer, Decorator', hi: 'Design Patterns: Factory, Strategy, Observer, Decorator' }, category: 'skill', completed: false },
      { id: 's42', title: { en: 'UML Class Diagrams and entity relationship modeling for LLD', hi: 'UML class diagrams aur class hierarchy banana' }, category: 'skill', completed: false },
      { id: 's43', title: { en: 'Writing testable, extensible code adhering to Open-Closed Principle', hi: 'Open-Closed Principle aur extensible clean code' }, category: 'skill', completed: false },
      { id: 's44', title: { en: 'Machine Coding round time-management and incremental feature delivery', hi: 'Machine Coding rounds me 90 minutes me working code dena' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p21', title: { en: 'Implement Parking Lot system in code with multiple vehicle types and dynamic pricing', hi: 'Parking Lot system ka complete OOP code implement karein' }, category: 'practice', completed: false },
      { id: 'p22', title: { en: 'Implement an Elevator Controller supporting multiple cars and direction algorithms', hi: 'Elevator scheduling algorithm implement karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y3q3',
        title: { en: 'Complete Low-Level Design Repository with 8 Production Simulations', hi: 'LLD Problem Solutions & Clean Code Catalog' },
        description: {
          en: 'A battle-tested GitHub repository containing production-grade implementations of Parking Lot, Snake & Ladders, Rate Limiter, and Notification Service.',
          hi: '8 classic LLD problems ka well-documented, clean GitHub repository with unit tests.',
        },
        technologies: ['Java / C++ / TypeScript', 'OOP Principles', 'JUnit / Jest'],
        portfolioImpact: { en: 'Shows recruiters you can easily pass the dreaded machine coding interview rounds.', hi: 'Machine coding rounds ke liye solid preparation proof.' },
        difficulty: 'Advanced',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c21', title: { en: 'Do 3 timed peer mock LLD interviews on Pramp or with senior friends', hi: '3 timed peer mock LLD interviews practice karein' }, category: 'career', completed: false },
      { id: 'c22', title: { en: 'Target second internship at a venture-backed tech company or scale-up', hi: 'Second internship secure karein jo CV me authority add kare' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm21', title: { en: 'Can design and code a modular LLD problem from scratch in 60 minutes', hi: '60 minutes ke andar clean LLD code likhne ki capacity' }, category: 'milestone', completed: false },
      { id: 'm22', title: { en: 'Second technical internship secured or substantial open-source maintainership', hi: 'Second verified tech internship complete' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r21', title: 'Refactoring Guru: Design Patterns Catalog', type: 'Documentation', url: 'https://refactoring.guru/design-patterns', free: true, notes: 'The clearest visual catalog of software design patterns.' },
      { id: 'r22', title: 'Low Level Design (LLD) Interview Cheatsheet', type: 'Practice Platform', url: 'https://github.com/prashant-shrestha/awesome-low-level-design', free: true, notes: 'Curated list of real company LLD questions.' },
    ],
  },
  {
    id: 'swe-y3q4',
    year: 3,
    quarter: 4,
    title: {
      en: 'Pre-Placement Offers (PPOs) & Comprehensive Mock Drills',
      hi: 'Pre-Placement Offers (PPOs) & Timed Mock Drills',
    },
    focus: {
      en: 'Consolidate all skills, convert internship into a full-time return offer (PPO), and run weekly timed mock interviews covering DSA, System Design, and Behavioral rounds.',
      hi: 'Internship ko full-time offer (PPO) me convert karne ki koshish, aur DSA + System Design ke intensive timed mock interviews.',
    },
    whyItMatters: {
      en: 'Securing an offer before Year 4 begins gives immense mental freedom to target even higher-paying roles without the anxiety of starting from zero.',
      hi: 'Pehle se offer hath me hone se Year 4 me top dream companies target karte waqt confidence double ho jata hai.',
    },
    baseHoursPerWeek: 16,
    skills: [
      { id: 's45', title: { en: 'Converting technical internships into full-time offers: Demonstrating ownership and proactiveness', hi: 'Internship ko PPO me convert karne ke liye ownership dikhana' }, category: 'skill', completed: false },
      { id: 's46', title: { en: 'Advanced DSA: Segment Trees, Trie, Advanced DP patterns (Digit DP, Bitmasking)', hi: 'Advanced DSA: Trie, Segment Trees aur complex DP' }, category: 'skill', completed: false },
      { id: 's47', title: { en: 'STAR behavioral method mastery: Framing leadership, failures, and team conflicts', hi: 'STAR technique: Behavioral questions ke sharp answers' }, category: 'skill', completed: false },
      { id: 's48', title: { en: 'Live coding communication: Talking through trade-offs while writing clean code', hi: 'Live coding karte hue interviewers ke sath thinking bolkar explain karna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p23', title: { en: 'Complete 10 full-length 60-minute mock interviews with honest scorecards', hi: '10 full-length mock interviews conduct karein feedback ke sath' }, category: 'practice', completed: false },
      { id: 'p24', title: { en: 'Write down 5 concrete STAR stories for behavioral rounds (Technical conflict, strict deadline, proudest bug fix)', hi: 'Apne actual career ke 5 STAR method stories draft karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y3q4',
        title: { en: 'Cap-Stone Distributed Fault-Tolerant Chat Platform', hi: 'Distributed Real-Time Chat System (Slack / Discord Clone)' },
        description: {
          en: 'A multi-server chat engine with Redis Pub/Sub, MongoDB message persistence, message search, and end-to-end load testing up to 5,000 active sockets.',
          hi: 'Enterprise real-time chat platform jisme Redis Pub/Sub, message search aur multi-server cluster handling hai.',
        },
        technologies: ['Go / Node.js', 'Redis Pub/Sub', 'WebSockets', 'PostgreSQL / Mongo', 'Docker'],
        portfolioImpact: { en: 'Crown jewel project demonstrating full-stack, distributed messaging, and high concurrency.', hi: 'Aapke portfolio ka sabse bada standout project jo seniority proof karta hai.' },
        difficulty: 'Advanced',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c23', title: { en: 'Have 1-on-1 with current manager to discuss full-time conversion prospects and performance', hi: 'Manager se 1-on-1 meeting karke full-time conversion par baat karein' }, category: 'career', completed: false },
      { id: 'c24', title: { en: 'Prepare master target list of 75 tier-1 and tier-2 companies for final year placement season', hi: 'Final year placements ke liye 75 dream companies ki target list ready karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm23', title: { en: 'Return offer (PPO) secured OR top-tier interview readiness verified across 500+ problems', hi: 'PPO offer prapt ya 500+ problems ke sath peak interview readiness' }, category: 'milestone', completed: false },
      { id: 'm24', title: { en: 'Mastered the top 150 LeetCode blind questions with optimal approaches memorized conceptually', hi: 'Top 150 DSA questions ki optimal time/space approach clear' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r23', title: 'Tech Interview Handbook by Yangshun Tay', type: 'Documentation', url: 'https://www.techinterviewhandbook.org/', free: true, notes: 'Free comprehensive guide to behavioral, resume, and coding rounds.' },
      { id: 'r24', title: 'Pramp Free Peer Mock Interviews', type: 'Practice Platform', url: 'https://www.pramp.com/', free: true, notes: 'Free peer-to-peer technical interview sessions.' },
    ],
  },

  // YEAR 4: Job Search Strategy, Resume Polish, Intensive Applications, Negotiation & Specialization
  {
    id: 'swe-y4q1',
    year: 4,
    quarter: 1,
    title: {
      en: 'Placement Season Blitz & Outbound Referral Pipeline',
      hi: 'Placement Season Blitz & Outbound Referral Strategy',
    },
    focus: {
      en: 'Launch your high-volume, high-quality application pipeline: LinkedIn referrals, campus placements, cold emails, and crushing online assessments (OAs).',
      hi: 'Full-time hiring season me referrals lena, campus aur off-campus tests crack karna aur interview rounds nikaalna.',
    },
    whyItMatters: {
      en: 'Applying blindly through career portals yields low conversion. Getting warm referrals from engineers increases interview chances by 500%.',
      hi: 'Direct website apply karne se resume ATS me phans jata hai. Referral lene se resume direct hiring manager tak pahunchta hai.',
    },
    baseHoursPerWeek: 16,
    skills: [
      { id: 's49', title: { en: 'Referral outreach mastery: Short, compelling messages with bulleted accomplishments', hi: 'Engineers se referral maangne ka respectful aur effective tarika' }, category: 'skill', completed: false },
      { id: 's50', title: { en: 'Cracking timed Online Assessments (OA) under strict time pressure (HackerRank, Codility)', hi: 'Online coding tests me 70 minutes me 2 tough problems solve karna' }, category: 'skill', completed: false },
      { id: 's51', title: { en: 'Technical deep-dives on your projects: Anticipating every "Why did you choose this?" question', hi: 'Apne projects ke architecture choices ko confidently defend karna' }, category: 'skill', completed: false },
      { id: 's52', title: { en: 'Whiteboard and shared-screen coding clarity under live observation', hi: 'Live screen share par bina panic kiye step-by-step code likhna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p25', title: { en: 'Apply to at least 40 verified job openings with employee referrals or personalized notes', hi: '40 verified openings me referral ke sath apply karein' }, category: 'practice', completed: false },
      { id: 'p26', title: { en: 'Take 5 timed online assessment simulations on LeetCode Company Assessment tags', hi: 'Specific company tagged assessment tests attempt karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y4q1',
        title: { en: 'Project Portfolio Polish & Interactive System Architecture Case Studies', hi: 'Interactive Architecture Case Studies Showcase' },
        description: {
          en: 'Transform your top 2 projects into interactive case studies explaining system architecture, benchmarks, trade-offs, and live demo sandboxes.',
          hi: 'Apne best projects ke interactive case studies banayein jisme latency benchmarks aur architecture diagrams hon.',
        },
        technologies: ['Vite', 'React', 'Lucide', 'Architecture Diagrams'],
        portfolioImpact: { en: 'Provides instant credibility to hiring managers reviewing your GitHub before the interview.', hi: 'Hiring managers ko impress karne ke liye interactive documentation.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c25', title: { en: 'Reach out to 50 engineers on LinkedIn with your 3-bullet accomplishment summary and resume link', hi: '50 engineers ko targeted message bhejkar referral request karein' }, category: 'career', completed: false },
      { id: 'c26', title: { en: 'Track every application in a Notion/Sheets pipeline (Applied, OA, Round 1, Round 2, Offer)', hi: 'Har application ko job tracker spreadsheet me track karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm25', title: { en: 'At least 5 first-round technical interviews scheduled across product companies or startups', hi: 'Kam se kam 5 first-round technical interviews line up' }, category: 'milestone', completed: false },
      { id: 'm26', title: { en: 'Passing 75%+ of online assessment coding rounds without timeouts', hi: 'Online coding tests me 75%+ pass rate' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r25', title: 'Comprehensive Guide to Cold Emailing for Software Jobs', type: 'Book/Article', url: 'https://github.com/yangshun/tech-interview-handbook', free: true, notes: 'Templates for cold outreach that actually get replies.' },
      { id: 'r26', title: 'LeetCode Company Specific Question Explorer', type: 'Practice Platform', url: 'https://leetcode.com/problemset/all/', free: true, notes: 'Target frequently asked company questions.' },
    ],
  },
  {
    id: 'swe-y4q2',
    year: 4,
    quarter: 2,
    title: {
      en: 'Final-Round Loops & Offer Negotiation Fundamentals',
      hi: 'Final-Round Interview Loops & Salary Negotiation',
    },
    focus: {
      en: 'Clear multi-round onsite / virtual loops (DSA, HLD/LLD, Managerial, Culture Fit), receive initial offers, and negotiate respectfully for top compensation.',
      hi: 'Final interview rounds clear karna, multiple offers secure karna aur respectfully salary negotiate karna.',
    },
    whyItMatters: {
      en: 'Negotiating effectively can increase your starting package by 15% to 30%, which compounds across your entire career trajectory.',
      hi: 'Respectful negotiation se starting compensation 15-30% badh sakti hai, jo poore career me compound karti hai.',
    },
    baseHoursPerWeek: 14,
    skills: [
      { id: 's53', title: { en: 'Cross-functional and Managerial round readiness: Culture, conflict, and values alignment', hi: 'Engineering Manager round: Team fit aur culture alignment' }, category: 'skill', completed: false },
      { id: 's54', title: { en: 'Understanding offer components: Base pay, joining bonus, performance bonus, and stock grants (ESOPs/RSUs)', hi: 'Salary components samajhna: Base pay, RSUs, ESOPs aur joining bonus' }, category: 'skill', completed: false },
      { id: 's55', title: { en: 'Negotiation strategies: Leveraging competing offers, anchor numbers, and grateful tone', hi: 'Multiple offers ko leverage karke counter-offer maangna' }, category: 'skill', completed: false },
      { id: 's56', title: { en: 'Evaluating startup equity vs public company liquid stock grants', hi: 'Startup equity vs liquid stock ka risk/reward evaluate karna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p27', title: { en: 'Role-play an offer negotiation call with a mentor or experienced friend', hi: 'Salary negotiation call ka mock rehearsal karein' }, category: 'practice', completed: false },
      { id: 'p28', title: { en: 'Calculate total in-hand compensation post-tax across different offer scenarios', hi: 'Tax ke baad real in-hand salary calculate karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y4q2',
        title: { en: 'Production Open Source Contribution or Capstone Showcase Polish', hi: 'Final Capstone Project Live Verification' },
        description: {
          en: 'Finalize and harden your primary capstone project with automated health checks, SSL certificate, custom domain, and comprehensive documentation.',
          hi: 'Apne main project ko custom domain aur documentation ke sath top professional level par lana.',
        },
        technologies: ['Domain setup', 'Cloudflare', 'SSL', 'Documentation'],
        portfolioImpact: { en: 'Eliminates any doubt of technical capability in final hiring committee reviews.', hi: 'Hiring committee ke dimaag se saare doubts khatam karna.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c27', title: { en: 'Compare job offers based on team growth, mentorship, tech stack, and financial compensation', hi: 'Offers ko sirf paise nahi balki team quality aur mentorship ke aadhar par compare karein' }, category: 'career', completed: false },
      { id: 'c28', title: { en: 'Send formal signed acceptance letter and thank all mentors and referral contacts', hi: 'Offer formally accept karein aur jinhone help ki unhe thank you note bhejein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm27', title: { en: 'Full-time software engineering offer signed at a high-growth company or Big Tech firm', hi: 'Desirable software engineer offer letter signed' }, category: 'milestone', completed: false },
      { id: 'm28', title: { en: 'Clear understanding of tax deductions, stock vesting schedules, and start dates', hi: 'Joining dates aur stock vesting schedule fully clear' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r27', title: 'Haseeb Qureshi Guide to Job Negotiation for Engineers', type: 'Book/Article', url: 'https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/', free: true, notes: 'The legendary guide to engineering salary negotiation.' },
      { id: 'r28', title: 'Levels.fyi Tech Compensation Explorer', type: 'Practice Platform', url: 'https://www.levels.fyi/', free: true, notes: 'Real verified market compensation bands.' },
    ],
  },
  {
    id: 'swe-y4q3',
    year: 4,
    quarter: 3,
    title: {
      en: 'Domain Specialization & Transitioning from Student to Professional',
      hi: 'Domain Specialization & Student se Professional Banna',
    },
    focus: {
      en: 'Begin deep diving into your future team’s primary domain (Distributed storage, High-throughput APIs, GraphQL, Rust/Go, or Frontend architecture) to hit the ground running.',
      hi: 'Apni future company ke specific tech stack (Go/Rust, Microservices, ya Frontend Architecture) me advance study shuru karna.',
    },
    whyItMatters: {
      en: 'New grads who deliver high-quality pull requests in their first month get assigned high-impact projects and fast-track promotions.',
      hi: 'Jo new engineer pehle mahine me fast delivery deta hai, usko team me sabse achhe projects aur jaldi promotions milte hain.',
    },
    baseHoursPerWeek: 10,
    skills: [
      { id: 's57', title: { en: 'Fast ramp-up on company tech stack (Go, Rust, Spring, or React 19)', hi: 'Company ke tech stack par fast speed banana' }, category: 'skill', completed: false },
      { id: 's58', title: { en: 'Advanced Git: interactive rebasing, bisecting bugs, cherry-picking', hi: 'Advanced Git: Bisect, interactive rebase aur cherry-pick' }, category: 'skill', completed: false },
      { id: 's59', title: { en: 'Writing production RFCs (Request for Comments) and technical design documents', hi: 'Technical Design Document (RFC) likhna' }, category: 'skill', completed: false },
      { id: 's60', title: { en: 'Time management and avoiding burnout in fast-paced engineering teams', hi: 'Work-life balance aur burnout se bachna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p29', title: { en: 'Read 3 open-source architecture design documents (e.g. Kubernetes, React, Redis RFCs)', hi: '3 real technical RFCs aur design documents padhein' }, category: 'practice', completed: false },
      { id: 'p30', title: { en: 'Build a small prototype in the specific primary language of your upcoming job', hi: 'Upcoming job ki language me ek practical prototype banayein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y4q3',
        title: { en: 'Domain Specific Prototype or Developer Tooling Script', hi: 'Developer Productivity CLI or Internal Tool Prototype' },
        description: {
          en: 'An internal automation tool or CLI that automates environment setup, mock data generation, or log parsing.',
          hi: 'Internal developer productivity CLI jo testing data generate kare ya logs format kare.',
        },
        technologies: ['Go / Python / Rust / Bash', 'CLI Frameworks'],
        portfolioImpact: { en: 'Shows proactive engineering empathy for developer experience and tooling.', hi: 'Team developer experience improve karne ki mindset demonstrate karta hai.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c29', title: { en: 'Connect with future team members on LinkedIn and ask for recommended reading', hi: 'Future team members ko connect karke recommended tech reading puchein' }, category: 'career', completed: false },
      { id: 'c30', title: { en: 'Wrap up degree requirements or graduation formalities smoothly', hi: 'Degree aur college graduation ki paperwork complete karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm29', title: { en: 'Completed preliminary reading on future team’s architecture and codebase patterns', hi: 'Upcoming role ke tech stack ki deep reading complete' }, category: 'milestone', completed: false },
      { id: 'm30', title: { en: 'All academic or certification credentials finalized for smooth background check', hi: 'Degree aur verification documents ready' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r29', title: 'The Pragmatic Programmer Summary & Best Practices', type: 'Book/Article', url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/', free: true, notes: 'Essential engineering mindset philosophy.' },
      { id: 'r30', title: 'StaffEng: Leadership Stories and Career Ladders', type: 'Book/Article', url: 'https://staffeng.com/guides/', free: true, notes: 'How long-term engineering career advancement works.' },
    ],
  },
  {
    id: 'swe-y4q4',
    year: 4,
    quarter: 4,
    title: {
      en: 'First 90 Days on the Job & Long-Term Compounding Plan',
      hi: 'First 90 Days in Tech & Long-Term Career Compounding',
    },
    focus: {
      en: 'Onboard smoothly into your first professional role, ship your first production PR in week 2, build strong rapport with your team, and set up your multi-year financial and career growth plan.',
      hi: 'Pehli job me pehle 90 din me strong impact create karna, pehla production PR ship karna aur long-term growth plan set karna.',
    },
    whyItMatters: {
      en: 'Your first 90 days set the reputation of whether you are a high-agency engineer or need constant handholding. Starting strong compounds into early promotions.',
      hi: 'Pehle 90 din se decide hota hai ki aap independent engineer hain ya baar-baar spoon-feeding chahiye. Starting strong promotion fast karti hai.',
    },
    baseHoursPerWeek: 10,
    skills: [
      { id: 's61', title: { en: 'First 90 Days framework: Listening, learning context, asking unblocking questions', hi: 'First 90 Days framework: Sahi sawal puchna aur jaldi unblock hona' }, category: 'skill', completed: false },
      { id: 's62', title: { en: 'Production deployment checklist: Feature flags, rollback procedures, metrics check', hi: 'Feature flags, rollback plan aur production monitoring checklist' }, category: 'skill', completed: false },
      { id: 's63', title: { en: 'Personal financial literacy: Emergency funds, retirement investing, index funds', hi: 'Financial planning: Emergency fund, SIPs, aur sensible investing' }, category: 'skill', completed: false },
      { id: 's64', title: { en: 'Continuous learning habit: Spending 3 hours/week reading papers and tech blogs', hi: 'Continuous learning: Hafte me 3 ghante naye tech trends padhna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'p31', title: { en: 'Write down a 30-60-90 day goal sheet with your direct engineering manager', hi: 'Apne manager ke sath 30-60-90 din ke clear goals align karein' }, category: 'practice', completed: false },
      { id: 'p32', title: { en: 'Document onboarding friction and submit PR to improve company engineering documentation', hi: 'Onboarding docs me jo kami thi usko fix karne ka PR banayein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-y4q4',
        title: { en: 'First Verified Production Bug Fix / Feature Shipped at Company', hi: 'First Production Pull Request Shipped to Real Users' },
        description: {
          en: 'Your official first code contribution merged and deployed to production serving real paying customers at your company.',
          hi: 'Aapka pehla official production code jo real users ke liye live deploy ho gaya.',
        },
        technologies: ['Production Company Stack', 'Enterprise CI/CD', 'Real Users'],
        portfolioImpact: { en: 'The ultimate culmination of your 4-year journey from beginner to professional engineer.', hi: '4 saal ki mehnat ka ultimate result: working software engineer in industry.' },
        difficulty: 'Advanced',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'c31', title: { en: 'Set up recurring 1-on-1s with your manager for continuous feedback', hi: 'Manager ke sath regular 1-on-1 feedback cadence fix karein' }, category: 'career', completed: false },
      { id: 'c32', title: { en: 'Give back: Mentor a junior student starting Year 1 to pay the guidance forward', hi: 'Kisi 1st year student ko guide karke knowledge forward karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'm31', title: { en: 'Successfully completed 90-day probationary review with glowing performance feedback', hi: 'First 90-day review successfully passed with positive marks' }, category: 'milestone', completed: false },
      { id: 'm32', title: { en: '4-Year Journey complete: Confident, capable, high-impact software engineer', hi: '4-Saal Ka Safar Poora: A professional software engineer' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'r31', title: 'The First 90 Days: Critical Success Strategies for New Leaders', type: 'Book/Article', url: 'https://hbr.org/2009/01/the-first-90-days', free: true, notes: 'Mastering smooth professional onboarding.' },
      { id: 'r32', title: 'Software Engineering at Google (Free O\'Reilly Book)', type: 'Book/Article', url: 'https://abseil.io/resources/swe-book', free: true, notes: 'The ultimate guide to building enduring software.' },
    ],
  },
];
