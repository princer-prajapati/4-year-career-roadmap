import { TrackMetadata } from '../types';

export const TRACKS_DATA: Record<string, TrackMetadata> = {
  'software-engineering': {
    id: 'software-engineering',
    title: {
      en: 'Software Engineering (Full-Stack & Backend)',
      hi: 'Software Engineering (Full-Stack & Backend Dev)',
    },
    subtitle: {
      en: 'Build scalable web platforms, APIs, distributed systems, and real-world software.',
      hi: 'Web apps, backend APIs, scalable distributed systems aur real software banana.',
    },
    description: {
      en: 'The most popular path with high hiring volumes across startups, mid-sized product companies, and Big Tech. Focuses heavily on Data Structures, Algorithms, System Design, databases, and full-stack craftsmanship.',
      hi: 'Sabse popular tech track jisme sabse zyada jobs nikalti hain. Isme DSA, System Design, Databases aur complete software engineering par focus hota hai.',
    },
    mathIntensity: 'Medium',
    codingIntensity: 'High',
    jobMarketDemand: {
      en: 'Very High across startups, MNCs, and product companies globally.',
      hi: 'Bahut zyada hiring rehti hai har size ki product aur service company me.',
    },
    typicalRoles: [
      'Frontend Engineer',
      'Backend Engineer',
      'Full Stack Developer',
      'Systems Engineer',
      'Software Development Engineer (SDE-1)',
    ],
    bestSuitedFor: {
      en: 'People who love writing code, seeing interactive products come alive, solving logic puzzles, and building practical web services.',
      hi: 'Jinko code likhna, problems solve karna, websites/APIs banana aur systems kaise kaam karte hain samajhna pasand hai.',
    },
    keyTools: ['C++ / Java / Python', 'TypeScript & React', 'Node.js / Go / Spring Boot', 'PostgreSQL & Redis', 'Docker & Git'],
  },
  'data-science': {
    id: 'data-science',
    title: {
      en: 'Data Science & Analytics',
      hi: 'Data Science & Data Analytics',
    },
    subtitle: {
      en: 'Transform raw data into business intelligence, predictive metrics, and insights.',
      hi: 'Data se insights nikaalna, business decisions ko data-backed banana aur predictions karna.',
    },
    description: {
      en: 'Ideal for those who enjoy numbers, statistics, and storytelling with charts. Involves SQL, Python data wrangling, A/B testing, statistical modeling, and dashboarding.',
      hi: 'Agar aapko statistics, graphs aur data se patterns dhundhna pasand hai toh yeh track best hai. Isme SQL, Python, Tableau aur Predictive Modeling aate hain.',
    },
    mathIntensity: 'High',
    codingIntensity: 'Medium',
    jobMarketDemand: {
      en: 'Strong demand in fintech, retail, healthcare, and growth-stage companies.',
      hi: 'Fintech, e-commerce aur analytics firms me lagatar demand bani rehti hai.',
    },
    typicalRoles: [
      'Data Analyst',
      'Business Intelligence Engineer',
      'Data Scientist',
      'Decision Scientist',
      'Quantitative Analyst',
    ],
    bestSuitedFor: {
      en: 'People who enjoy statistics, finding hidden patterns, structured queries, and presenting actionable findings to leadership.',
      hi: 'Jinko math/stats pasand hai, charts aur metrics ke through business problems solve karna achha lagta hai.',
    },
    keyTools: ['Python (Pandas, NumPy)', 'Advanced SQL', 'Tableau / PowerBI', 'Scikit-learn', 'PostgreSQL / BigQuery'],
  },
  'ai-ml': {
    id: 'ai-ml',
    title: {
      en: 'AI & Machine Learning Engineering',
      hi: 'AI & Machine Learning Engineering',
    },
    subtitle: {
      en: 'Design, train, and deploy deep learning models, LLMs, and intelligent systems.',
      hi: 'Deep learning models, modern LLMs aur intelligent AI systems train aur deploy karna.',
    },
    description: {
      en: 'A high-impact, research-grounded engineering track. Requires strong mathematical foundations (Linear Algebra, Calculus, Probability), deep learning frameworks (PyTorch), and modern LLM architecture (RAG, Fine-tuning).',
      hi: 'Isme theoretical math (Linear Algebra, Probability) ke sath practical deep learning code likhna hota hai. PyTorch, NLP, Computer Vision aur LLMs par focus rehta hai.',
    },
    mathIntensity: 'High',
    codingIntensity: 'High',
    jobMarketDemand: {
      en: 'Rapidly growing with exceptional compensation for verified skills; higher barrier to entry.',
      hi: 'Market me high-paying roles hain, lekin entry barrier thoda high hai aur strong concepts chahiye.',
    },
    typicalRoles: [
      'Machine Learning Engineer',
      'AI Research Engineer',
      'LLM / GenAI Engineer',
      'Computer Vision Engineer',
      'NLP Specialist',
    ],
    bestSuitedFor: {
      en: 'Engineers who are comfortable with matrix math, reading research papers, and experimenting with neural models and MLOps.',
      hi: 'Jinko advanced math se dar nahi lagta, research papers padhke models implement karna chahte hain.',
    },
    keyTools: ['Python', 'PyTorch / HuggingFace', 'Vector Databases (Chroma/Pinecone)', 'FastAPI', 'CUDA / GPU compute'],
  },
  'cloud-devops': {
    id: 'cloud-devops',
    title: {
      en: 'Cloud Computing & DevOps / SRE',
      hi: 'Cloud & DevOps / Site Reliability Engineer',
    },
    subtitle: {
      en: 'Automate deployments, orchestrate containers, and maintain high-uptime infrastructure.',
      hi: 'Servers manage karna, CI/CD pipelines automate karna aur applications ko 99.99% live rakhna.',
    },
    description: {
      en: 'DevOps & SRE engineers ensure software runs reliably at massive scale. Emphasizes Linux internals, automation scripting, Docker, Kubernetes, Infrastructure as Code (Terraform), and cloud platforms.',
      hi: 'Yeh engineers ensure karte hain ki code bina kisi crash ke cloud pe deploy aur run ho sake. Linux, Docker, Kubernetes aur Terraform iske main pillars hain.',
    },
    mathIntensity: 'Low',
    codingIntensity: 'Medium',
    jobMarketDemand: {
      en: 'Consistently high demand; every growing tech company needs reliable infrastructure.',
      hi: 'Har company jiska server live hai usko DevOps chahiye. Stability aur compensation dono achhi rehti hain.',
    },
    typicalRoles: [
      'DevOps Engineer',
      'Site Reliability Engineer (SRE)',
      'Cloud Solutions Architect',
      'Infrastructure Engineer',
      'Platform Engineer',
    ],
    bestSuitedFor: {
      en: 'People who love Linux, networking, automating repetitive workflows, and debugging real-time production outages.',
      hi: 'Jinko Linux terminal, networking, server troubleshooting aur automation me maza aata hai.',
    },
    keyTools: ['Linux & Bash', 'Docker & Kubernetes', 'Terraform (IaC)', 'AWS / GCP / Azure', 'GitHub Actions / Prometheus'],
  },
  'cybersecurity': {
    id: 'cybersecurity',
    title: {
      en: 'Cybersecurity & InfoSec',
      hi: 'Cybersecurity & Ethical Hacking',
    },
    subtitle: {
      en: 'Protect networks, discover vulnerabilities, perform ethical hacking, and secure clouds.',
      hi: 'Networks ko protect karna, vulnerabilities dhundhna, ethical hacking aur systems secure karna.',
    },
    description: {
      en: 'Combines defensive security (SOC analysis, hardening, cryptography) with offensive penetration testing (web app security, network vulnerabilities, CTF competitions).',
      hi: 'Defensive aur offensive security dono ka mix. Isme web security, network protocols, CTF challenges aur cloud security auditing aati hai.',
    },
    mathIntensity: 'Low',
    codingIntensity: 'Medium',
    jobMarketDemand: {
      en: 'Crucial for banking, healthcare, defense, and enterprise SaaS companies.',
      hi: 'Banking, fintech aur enterprise companies me security engineers ki bohot respect aur demand hai.',
    },
    typicalRoles: [
      'Security Analyst',
      'Penetration Tester / Ethical Hacker',
      'Application Security Engineer',
      'SOC Analyst',
      'Cloud Security Specialist',
    ],
    bestSuitedFor: {
      en: 'Curious problem solvers who love investigating how things break, networking packets, and digital defense.',
      hi: 'Jinki analytical thinking tez hai, dekhna chahte hain system kaise break ho sakta hai aur usko bachana kaise hai.',
    },
    keyTools: ['Wireshark & Nmap', 'Burp Suite', 'Linux Security Tools', 'Python & Bash', 'OWASP Top 10 Frameworks'],
  },
  'product-ux': {
    id: 'product-ux',
    title: {
      en: 'Product Management & Tech UX',
      hi: 'Tech Product Management & UX Design',
    },
    subtitle: {
      en: 'Bridge user empathy, engineering feasibility, and business strategy to lead products.',
      hi: 'Users ki zaroorat, engineering ki practical speed aur business profit ko balance karna.',
    },
    description: {
      en: 'Sits at the intersection of business, design, and technology. Involves user research, feature prioritization, PRDs (Product Requirements Documents), wireframing, and product analytics.',
      hi: 'Aap directly coding nahi karte balki yeh decide karte hain ki kya feature banna chahiye, kab banna chahiye aur users ko kaise fayda hoga.',
    },
    mathIntensity: 'Low',
    codingIntensity: 'Low',
    jobMarketDemand: {
      en: 'High compensation and leverage, but fewer entry-level positions compared to SDE.',
      hi: 'Bahut high-leverage role hai, package bhi achha hota hai, bas entry-level pe seats thodi kam hoti hain.',
    },
    typicalRoles: [
      'Associate Product Manager (APM)',
      'UI/UX Product Designer',
      'Technical Product Specialist',
      'Growth Product Analyst',
      'Product Operations Lead',
    ],
    bestSuitedFor: {
      en: 'Natural communicators who understand technology, love talking to customers, and enjoy leading cross-functional teams.',
      hi: 'Jinki communication aur problem-solving skills strong hain aur jo user psychology samajhte hain.',
    },
    keyTools: ['Figma & FigJam', 'Mixpanel & Amplitude', 'Jira / Linear', 'SQL for Product', 'PRD Frameworks & User Story Mapping'],
  },
};
