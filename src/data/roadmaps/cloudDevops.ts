import { RoadmapQuarter, TaskCategory } from '../../types';

export const CLOUD_DEVOPS_ROADMAP: RoadmapQuarter[] = [
  // Year 1: Linux Internals, Bash Scripting, Networking & Docker
  {
    id: 'devops-y1q1',
    year: 1,
    quarter: 1,
    title: { en: 'Linux Internals, Shell Scripting & Git Mastery', hi: 'Linux System Internals, Bash Scripting & Git' },
    focus: { en: 'Master the Linux terminal, process management, file permissions, pipes, text manipulation (awk, sed, grep), and automated bash scripting.', hi: 'Linux terminal commands, file permissions, process management aur bash automation scripts.' },
    whyItMatters: { en: 'Over 95% of cloud servers run Linux. If you cannot troubleshoot on a headless terminal without a mouse, you cannot succeed in DevOps.', hi: 'Duniya ke lagbhag saare cloud servers Linux par chalte hain. Terminal command line me expert hona sabse pehla rule hai.' },
    baseHoursPerWeek: 10,
    skills: [
      { id: 'do-s1', title: { en: 'Linux file hierarchy, permissions (chmod, chown), process signals', hi: 'Linux file permissions aur process signals (kill, hup)' }, category: 'skill', completed: false },
      { id: 'do-s2', title: { en: 'Text stream processing: grep, awk, sed, cut, sort, uniq', hi: 'Stream processing: awk, sed, grep aur regex' }, category: 'skill', completed: false },
      { id: 'do-s3', title: { en: 'Bash scripting: variables, exit codes, conditional loops, cron jobs', hi: 'Bash automation: cron jobs aur error handling' }, category: 'skill', completed: false },
      { id: 'do-s4', title: { en: 'SSH key-based authentication, scp, rsync, firewall basics (ufw/iptables)', hi: 'SSH keys, rsync aur basic firewall configuration' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'do-p1', title: { en: 'Set up an Ubuntu virtual machine or WSL2 environment and run headless', hi: 'Ubuntu VM ya WSL setup karke purely terminal use karein' }, category: 'practice', completed: false },
      { id: 'do-p2', title: { en: 'Write a bash script that parses server access logs and emails daily error counts', hi: 'Access logs parse karke 4xx/5xx errors report karne wala script' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-do-y1q1',
        title: { en: 'Automated Linux Server Health & Backup Daemon', hi: 'Automated Server Health Monitor & Backup Tool' },
        description: { en: 'A robust Bash utility that monitors CPU, memory, disk usage, rotates logs, and creates automated encrypted backups to external storage.', hi: 'Automated script jo disk usage aur CPU monitor kare aur automated encrypted backup create kare.' },
        technologies: ['Bash', 'Linux Cron', 'Systemd Services', 'Git'],
        portfolioImpact: { en: 'Demonstrates real sysadmin hygiene and automation fundamentals.', hi: 'Proves practical system administrator automation capabilities.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'do-c1', title: { en: 'Create GitHub repo for your bash utility scripts with clear documentation', hi: 'GitHub par clean DevOps utility scripts repository banayein' }, category: 'career', completed: false },
      { id: 'do-c2', title: { en: 'Join r/devops and DevOps Discord communities for daily learning', hi: 'DevOps communities join karke industry discussion follow karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'do-m1', title: { en: 'Can configure SSH, troubleshoot file permissions, and parse logs effortlessly', hi: 'Linux terminal me bina GUI ke fast kaam karne ki aadat' }, category: 'milestone', completed: false },
      { id: 'do-m2', title: { en: 'First custom systemd service running in the background on startup', hi: 'Custom systemd service configured' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'do-r1', title: 'Linux Journey (Free Interactive Tutorial)', type: 'Practice Platform', url: 'https://linuxjourney.com/', free: true, notes: 'The most friendly Linux learning guide.' },
      { id: 'do-r2', title: 'Bash Guide for Beginners', type: 'Documentation', url: 'https://tldp.org/LDP/Bash-Beginners-Guide/html/', free: true, notes: 'Standard bash scripting reference.' },
    ],
  },
  {
    id: 'devops-y1q2',
    year: 1,
    quarter: 2,
    title: { en: 'Networking Protocols & Web Server Administration', hi: 'Networking, DNS, NGINX & SSL Certificates' },
    focus: { en: 'Learn computer networking essentials (TCP/IP, UDP, DNS, CIDR subnetting), reverse proxy configuration with NGINX, and SSL/TLS certificate automation.', hi: 'TCP/IP, DNS, Subnets, NGINX reverse proxy aur SSL certificates setup.' },
    whyItMatters: { en: 'Every cloud system communicates across networks. Understanding routing, firewalls, and proxying prevents costly production downtime.', hi: 'DevOps me har issue networking ya DNS se juda hota hai. NGINX aur networking strong hona critical hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'do-s5', title: { en: 'IP addressing, CIDR subnetting, routing tables, port numbers', hi: 'IP addresses, CIDR notation aur network routing' }, category: 'skill', completed: false },
      { id: 'do-s6', title: { en: 'DNS record types (A, CNAME, MX, TXT) and resolution troubleshooting (dig, nslookup)', hi: 'DNS records aur troubleshooting tools (dig, curl, netstat)' }, category: 'skill', completed: false },
      { id: 'do-s7', title: { en: 'NGINX configuration: Reverse proxying, load balancing, rate limiting', hi: 'NGINX reverse proxy, caching aur load balancing' }, category: 'skill', completed: false },
      { id: 'do-s8', title: { en: 'Certbot / Let\'s Encrypt automated SSL/TLS certificate renewal', hi: 'Free automated SSL certificates (Let\'s Encrypt)' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'do-p3', title: { en: 'Configure NGINX as a reverse proxy distributing traffic between 2 backend mock servers', hi: '2 backend servers ke aage NGINX load balancer setup karein' }, category: 'practice', completed: false },
      { id: 'do-p4', title: { en: 'Troubleshoot simulated network issues using curl -v, dig, and traceroute', hi: 'Network latency aur SSL handshake inspect karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-do-y1q2',
        title: { en: 'Production NGINX Reverse Proxy with SSL & Automated Failover', hi: 'Hardened NGINX Gateway with SSL & Rate Limiting' },
        description: { en: 'A secure gateway reverse proxy routing traffic, caching static assets, enforcing rate limits, and automatically obtaining Let\'s Encrypt SSL certificates.', hi: 'Secure NGINX gateway jo web traffic distribute kare, SSL manage kare aur DDoS/brute-force rate limiting enforce kare.' },
        technologies: ['NGINX', 'Certbot', 'Linux', 'Let\'s Encrypt'],
        portfolioImpact: { en: 'Proves real networking and web server administration expertise.', hi: 'Shows production gateway architecture understanding.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'do-c3', title: { en: 'Purchase a cheap custom domain (e.g. $2-$5/yr) to practice live DNS records and SSL', hi: 'Practice ke liye sasta domain lein taaki real DNS aur SSL configure kar sakein' }, category: 'career', completed: false },
      { id: 'do-c4', title: { en: 'Write a step-by-step tutorial on Medium explaining NGINX reverse proxying', hi: 'NGINX setup par beginner tutorial share karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'do-m3', title: { en: 'Public custom domain resolving securely with green HTTPS lock via your NGINX proxy', hi: 'Live HTTPS domain functioning with verified SSL' }, category: 'milestone', completed: false },
      { id: 'do-m4', title: { en: 'Can explain DNS propagation, A records vs CNAMEs without hesitation', hi: 'DNS and Networking concepts clearly articulated' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'do-r3', title: 'NGINX Official Beginner Guide', type: 'Documentation', url: 'https://nginx.org/en/docs/beginners_guide.html', free: true, notes: 'The standard NGINX handbook.' },
      { id: 'do-r4', title: 'Julia Evans Networking Zines & Articles', type: 'Book/Article', url: 'https://jvns.ca/', free: true, notes: 'The most intuitive networking illustrations.' },
    ],
  },
  {
    id: 'devops-y1q3',
    year: 1,
    quarter: 3,
    title: { en: 'Docker Containerization & Multi-Container Systems', hi: 'Docker Containers, Images & Docker Compose' },
    focus: { en: 'Master Docker containerization: writing minimal multi-stage Dockerfiles, image layers, bind mounts vs volumes, container networking, and Docker Compose.', hi: 'Docker images, multi-stage builds, volumes, container networking aur Docker Compose orchestration.' },
    whyItMatters: { en: 'Containers eliminated "it works on my machine". Modern cloud deployment is 100% container-driven.', hi: 'Har modern company apna software containers me pack karti hai. Docker bina cloud chal hi nahi sakta.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'do-s9', title: { en: 'Docker architecture: daemon, images, containers, registries', hi: 'Docker daemon, images aur container lifecycles' }, category: 'skill', completed: false },
      { id: 'do-s10', title: { en: 'Writing production multi-stage Dockerfiles for minimal image sizes', hi: 'Multi-stage Dockerfiles se image size 90% chota karna' }, category: 'skill', completed: false },
      { id: 'do-s11', title: { en: 'Docker storage: Volumes vs bind mounts for persistent data', hi: 'Docker volumes aur persistent data storage' }, category: 'skill', completed: false },
      { id: 'do-s12', title: { en: 'Docker Compose orchestration for multi-tier applications', hi: 'Docker Compose se multi-service app chalana' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'do-p5', title: { en: 'Containerize a full-stack app (React + Node.js + PostgreSQL) with a single docker-compose.yml', hi: 'Full stack app ko Docker Compose me link karke run karein' }, category: 'practice', completed: false },
      { id: 'do-p6', title: { en: 'Optimize a bloated 1GB Docker image down to under 80MB using Alpine/scratch and multi-stage builds', hi: '1GB ki Docker image ko multi-stage build se 80MB karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-do-y1q3',
        title: { en: 'Production-Grade Multi-Service Docker Compose Stack', hi: 'Multi-Container Microservices Sandbox with Docker Compose' },
        description: { en: 'A complete multi-container setup containing frontend, backend, PostgreSQL database, Redis caching, and NGINX reverse proxy with health checks.', hi: 'Frontend, backend, database aur caching ko ek clean `docker compose up` command me launch karne wala environment.' },
        technologies: ['Docker', 'Docker Compose', 'NGINX', 'PostgreSQL', 'Redis'],
        portfolioImpact: { en: 'Essential artifact that allows any interviewer to test your code in 10 seconds.', hi: 'Interviewer ko dikhata hai ki aapke projects zero-effort single command me chalte hain.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'do-c5', title: { en: 'Publish your optimized Docker images to Docker Hub with documentation', hi: 'Docker Hub par clean public repositories banayein' }, category: 'career', completed: false },
      { id: 'do-c6', title: { en: 'Reach out to 5 junior DevOps engineers on LinkedIn to learn their tech stacks', hi: 'Working DevOps engineers se unke daily tools ke baare me puchein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'do-m5', title: { en: 'Can explain layers, caching, and multi-stage builds without looking at notes', hi: 'Docker image optimization principles fully mastered' }, category: 'milestone', completed: false },
      { id: 'do-m6', title: { en: 'Docker Compose stack runs cleanly with zero port collision or volume permission errors', hi: 'Zero-error multi-container deployment' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'do-r5', title: 'Docker Official Get Started Guides', type: 'Documentation', url: 'https://docs.docker.com/get-started/', free: true, notes: 'Official hands-on documentation.' },
      { id: 'do-r6', title: 'Play with Docker (Free Browser Sandbox)', type: 'Practice Platform', url: 'https://labs.play-with-docker.com/', free: true, notes: 'Practice Docker in cloud terminals for free.' },
    ],
  },
  {
    id: 'devops-y1q4',
    year: 1,
    quarter: 4,
    title: { en: 'CI/CD Pipelines (GitHub Actions) & Python for Automation', hi: 'CI/CD Pipelines (GitHub Actions) & Automation Scripting' },
    focus: { en: 'Build automated continuous integration and delivery pipelines using GitHub Actions, automated testing triggers, container builds, and Python scripting for API automation.', hi: 'GitHub Actions se automated CI/CD pipelines banana, tests run karna aur Docker images push karna.' },
    whyItMatters: { en: 'CI/CD is the bridge between developers and production. If you can automate testing, building, and deploying, you save teams hundreds of engineering hours.', hi: 'Har code push par automated tests chalna aur automatic deployment hona har tech company ka backbone hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'do-s13', title: { en: 'GitHub Actions workflows: Triggers, runners, steps, matrix builds', hi: 'GitHub Actions: Workflows, jobs, runners aur triggers' }, category: 'skill', completed: false },
      { id: 'do-s14', title: { en: 'Automated testing and linting in CI pipelines', hi: 'Automated linting aur unit test enforcement' }, category: 'skill', completed: false },
      { id: 'do-s15', title: { en: 'Building and pushing Docker images to Docker Hub / GitHub Container Registry', hi: 'Automated Docker image build aur registry push' }, category: 'skill', completed: false },
      { id: 'do-s16', title: { en: 'Python automation: requests library, API clients, JSON manipulation', hi: 'Python automation: APIs aur webhook integrations' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'do-p7', title: { en: 'Create a CI pipeline that runs tests, builds a Docker image, and tags with Git commit SHA', hi: 'Commit SHA ke sath automated Docker image tag aur push pipeline' }, category: 'practice', completed: false },
      { id: 'do-p8', title: { en: 'Write a Python script that checks cloud endpoint health and pings a Slack/Discord webhook if down', hi: 'API downtime detector jo Discord/Slack notification bheje' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-do-y1q4',
        title: { en: 'Zero-Downtime Automated CI/CD Pipeline & Discord Alert Bot', hi: 'Automated CI/CD Delivery Pipeline with Webhook Alerts' },
        description: { en: 'A GitHub Actions workflow that executes tests on pull requests, builds optimized Docker images on merge, deploys to a test server, and notifies the team on Discord.', hi: 'Automated pipeline jo tests pass hone par automatically Docker image build kare aur deployment report Discord par send kare.' },
        technologies: ['GitHub Actions', 'Docker', 'Python', 'Discord Webhooks'],
        portfolioImpact: { en: 'Tangible proof you can build production automation pipelines.', hi: 'Real CI/CD automation pipeline working in real-time.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'do-c7', title: { en: 'Apply for entry-level cloud support or junior DevOps internships', hi: 'Junior DevOps/Cloud Support internship applications start karein' }, category: 'career', completed: false },
      { id: 'do-c8', title: { en: 'Prepare 1-page resume highlighting Linux, Docker, and CI/CD competencies', hi: 'DevOps focused resume ready karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'do-m7', title: { en: 'Green CI/CD badge active on all primary GitHub repositories', hi: 'All repos equipped with automated CI status badges' }, category: 'milestone', completed: false },
      { id: 'do-m8', title: { en: 'Year 1 complete: Linux, Networking, Docker, and CI/CD verified', hi: 'Year 1 Complete: Core DevOps toolkit fully operational' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'do-r7', title: 'GitHub Actions Official Documentation', type: 'Documentation', url: 'https://docs.github.com/en/actions', free: true, notes: 'The standard CI/CD documentation.' },
      { id: 'do-r8', title: 'Automate the Boring Stuff with Python', type: 'Book/Article', url: 'https://automatetheboringstuff.com/', free: true, notes: 'Practical Python scripting.' },
    ],
  },

  // Years 2-4: Kubernetes, Terraform IaC, AWS/GCP, Prometheus/Grafana, SRE, Chaos Engineering
  ...Array.from({ length: 12 }, (_, i) => {
    const qIndex = i + 5;
    const year = Math.ceil(qIndex / 4);
    const quarter = ((qIndex - 1) % 4) + 1;
    const titles = [
      { en: 'Terraform & Infrastructure as Code (IaC) on AWS', hi: 'Terraform (IaC) & Cloud Provisioning on AWS' },
      { en: 'Kubernetes Foundations (Pods, Deployments, Services, Ingress)', hi: 'Kubernetes (K8s) Core: Pods, Deployments & Ingress' },
      { en: 'Kubernetes in Production: ConfigMaps, Secrets, Helm Charts & Storage', hi: 'Production Kubernetes: Helm, Secrets & Storage Classes' },
      { en: 'First Cloud & DevOps Internship', hi: 'First Cloud & DevOps Internship Experience' },
      { en: 'Observability: Prometheus Metrics, Grafana Dashboards & Alertmanager', hi: 'Observability: Prometheus, Grafana Dashboards & Alerts' },
      { en: 'Distributed Logging: ELK Stack / Loki & Distributed Tracing (OpenTelemetry)', hi: 'Log Aggregation (Loki/ELK) & OpenTelemetry Tracing' },
      { en: 'Cloud Security: IAM Least Privilege, Vault & Secret Management', hi: 'Cloud Security: AWS IAM, HashiCorp Vault & Zero Trust' },
      { en: 'Site Reliability Engineering (SRE): SLOs, Error Budgets & Incident Response', hi: 'Site Reliability Engineering: SLAs, SLOs & Post-Mortems' },
      { en: 'Cloud Infrastructure System Design & High-Package Technical Loops', hi: 'Cloud System Design & DevOps Interview Loops' },
      { en: 'DevOps / SRE Offer Loops & Compensation Negotiation', hi: 'Final SRE Interview Rounds & High Package Negotiation' },
      { en: 'GitOps (ArgoCD), Service Mesh (Istio) & Platform Engineering', hi: 'GitOps (ArgoCD), Istio Service Mesh & Platform Engineering' },
      { en: 'First 90 Days as DevOps/SRE Engineer & Infrastructure Governance', hi: 'First 90 Days as Cloud/DevOps Engineer & Long-Term SRE' },
    ];
    const currTitle = titles[i];
    return {
      id: `devops-y${year}q${quarter}`,
      year,
      quarter,
      title: currTitle,
      focus: {
        en: `Quarter ${quarter} Year ${year} advanced cloud infrastructure & site reliability engineering: ${currTitle.en} with production configurations.`,
        hi: `Year ${year} Quarter ${quarter}: ${currTitle.hi} par deep practice aur interview rounds ki taiyari.`,
      },
      whyItMatters: {
        en: 'Infrastructure engineers who master Kubernetes, Terraform, and Observability command top-tier compensation because they safeguard business uptime.',
        hi: 'Kubernetes, Terraform aur Grafana aane wale engineers ki salary bohot high hoti hai kyunki company ka revenue inhi par depend karta hai.',
      },
      baseHoursPerWeek: 14,
      skills: [
        { id: `do-s${16 + i * 4 + 1}`, title: { en: `Core Mastery: ${currTitle.en}`, hi: `${currTitle.hi} key skills` }, category: 'skill' as TaskCategory, completed: false },
        { id: `do-s${16 + i * 4 + 2}`, title: { en: 'High availability architecture and fault tolerance', hi: 'High availability aur auto-scaling setup' }, category: 'skill' as TaskCategory, completed: false },
        { id: `do-s${16 + i * 4 + 3}`, title: { en: 'Disaster recovery and rollback automation', hi: 'Disaster recovery aur automated rollbacks' }, category: 'skill' as TaskCategory, completed: false },
        { id: `do-s${16 + i * 4 + 4}`, title: { en: 'Production debugging and root cause analysis', hi: 'Production issues ki root-cause analysis (RCA)' }, category: 'skill' as TaskCategory, completed: false },
      ],
      practice: [
        { id: `do-p${8 + i * 2 + 1}`, title: { en: `Execute infrastructure configuration drills for ${currTitle.en}`, hi: 'Real-world cloud simulation drill complete karein' }, category: 'practice' as TaskCategory, completed: false },
        { id: `do-p${8 + i * 2 + 2}`, title: { en: 'Mock interview session on cloud architecture trade-offs', hi: 'Mock interview me infrastructure design defend karein' }, category: 'practice' as TaskCategory, completed: false },
      ],
      projects: [
        {
          id: `proj-do-y${year}q${quarter}`,
          title: { en: `Enterprise ${currTitle.en} Capstone Setup`, hi: `${currTitle.hi} Production Setup` },
          description: {
            en: `A complete infrastructure repository with automated provisioning, self-healing deployments, and real-time monitoring alerts.`,
            hi: `Production-ready infrastructure repo jisme automated provisioning, self-healing clusters aur monitoring dashboards hon.`,
          },
          technologies: ['Terraform', 'Kubernetes', 'AWS', 'Prometheus'],
          portfolioImpact: { en: 'Direct proof of enterprise-level cloud engineering.', hi: 'Enterprise grade cloud infrastructure setup ka working proof.' },
          difficulty: 'Advanced' as const,
          status: 'not-started' as const,
        },
      ],
      careerActions: [
        { id: `do-c${8 + i * 2 + 1}`, title: { en: 'Connect with 15 Cloud Architects and SRE Managers on LinkedIn', hi: 'Cloud Architects aur SREs se referral connect banayein' }, category: 'career' as TaskCategory, completed: false },
        { id: `do-c${8 + i * 2 + 2}`, title: { en: 'Document infrastructure blueprint on GitHub with visual architecture diagrams', hi: 'Architecture diagram ke sath GitHub repo showcase karein' }, category: 'career' as TaskCategory, completed: false },
      ],
      milestones: [
        { id: `do-m${8 + i * 2 + 1}`, title: { en: `Demonstrated technical readiness for ${currTitle.en}`, hi: 'Technical interview competency verified' }, category: 'milestone' as TaskCategory, completed: false },
        { id: `do-m${8 + i * 2 + 2}`, title: { en: 'All infrastructure configs tested and verified in live sandbox', hi: 'Verified running deployment in live sandbox' }, category: 'milestone' as TaskCategory, completed: false },
      ],
      resources: [
        { id: `do-r${8 + i * 2 + 1}`, title: 'Kubernetes Official Interactive Tutorial', type: 'Documentation', url: 'https://kubernetes.io/docs/tutorials/', free: true, notes: 'The standard Kubernetes documentation.' },
        { id: `do-r${8 + i * 2 + 2}`, title: 'Google SRE Book (Free Full Online Text)', type: 'Book/Article', url: 'https://sre.google/sre-book/table-of-contents/', free: true, notes: 'The Bible of Site Reliability Engineering.' },
      ],
    };
  }),
];
