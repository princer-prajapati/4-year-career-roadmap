import { RoadmapQuarter, TaskCategory } from '../../types';

export const CYBERSECURITY_ROADMAP: RoadmapQuarter[] = [
  // Year 1: Networking Deep Dive, Linux Security, Python for Security & Web Fundamentals
  {
    id: 'cyber-y1q1',
    year: 1,
    quarter: 1,
    title: { en: 'TCP/IP Packet Analysis, Wireshark & Linux Foundations', hi: 'TCP/IP Packets, Wireshark & Linux Security Basics' },
    focus: { en: 'Understand network packets at the bit level: TCP three-way handshakes, ARP, ICMP, DNS, packet capture with Wireshark, and Linux permissions.', hi: 'Network packets, Wireshark se traffic capture karna, TCP/IP handshakes aur Linux permissions.' },
    whyItMatters: { en: 'You cannot defend or hack what you do not understand. Networking packets and Linux security models are the foundational language of cybersecurity.', hi: 'Cybersecurity me pehla kadam network traffic aur Linux command line samajhna hota hai.' },
    baseHoursPerWeek: 10,
    skills: [
      { id: 'cy-s1', title: { en: 'TCP/IP Model vs OSI, packet headers, 3-way handshake (SYN, SYN-ACK, ACK)', hi: 'TCP/IP packet headers aur 3-way handshake' }, category: 'skill', completed: false },
      { id: 'cy-s2', title: { en: 'Capturing and filtering live packet traffic with Wireshark and tcpdump', hi: 'Wireshark aur tcpdump se live packet inspection' }, category: 'skill', completed: false },
      { id: 'cy-s3', title: { en: 'Linux hardening: file permissions (chmod, SUID/SGID), sudoers configuration', hi: 'Linux hardening aur file security permissions' }, category: 'skill', completed: false },
      { id: 'cy-s4', title: { en: 'Basic network scanning with Nmap (SYN scan, service detection)', hi: 'Nmap se port scanning aur service discovery' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'cy-p1', title: { en: 'Capture an unencrypted HTTP/FTP login and extract credentials from Wireshark PCAP', hi: 'Wireshark PCAP file se plaintext credentials dhundhein' }, category: 'practice', completed: false },
      { id: 'cy-p2', title: { en: 'Perform full Nmap scans against scanme.nmap.org and document open ports', hi: 'Test servers par Nmap scans run karke report banayein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-cy-y1q1',
        title: { en: 'Packet Inspection & Rogue Device Detector Script', hi: 'ARP Scanner & Rogue Device Detector' },
        description: { en: 'A Python Scapy script that scans the local network, discovers connected MAC addresses, detects ARP spoofing attempts, and alerts the user.', hi: 'Python Scapy script jo local WiFi scan kare aur malicious ARP spoofing attacks detect kare.' },
        technologies: ['Python', 'Scapy', 'Wireshark', 'Linux'],
        portfolioImpact: { en: 'Demonstrates low-level socket and packet crafting capabilities.', hi: 'Shows raw socket programming and network protocol mastery.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'cy-c1', title: { en: 'Create TryHackMe and HackTheBox accounts', hi: 'TryHackMe aur HackTheBox par profiles banayein' }, category: 'career', completed: false },
      { id: 'cy-c2', title: { en: 'Join a Capture The Flag (CTF) student team or Discord community', hi: 'CTF team join karein aur weekend challenges attempt karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'cy-m1', title: { en: 'Completed TryHackMe "Pre-Security" and "Complete Beginner" learning paths', hi: 'TryHackMe Pre-Security track 100% complete' }, category: 'milestone', completed: false },
      { id: 'cy-m2', title: { en: 'Can identify SYN floods, ARP poisoning, and DNS queries in packet dumps', hi: 'Wireshark me common attacks identify karne ki capability' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'cy-r1', title: 'TryHackMe Pre-Security Learning Path', type: 'Practice Platform', url: 'https://tryhackme.com/path/outline/pre-security', free: true, notes: 'The friendliest hands-on cybersecurity introduction.' },
      { id: 'cy-r2', title: 'Wireshark Official Documentation & Sample Captures', type: 'Documentation', url: 'https://wiki.wireshark.org/SampleCaptures', free: true, notes: 'Real attack PCAP files to inspect.' },
    ],
  },
  {
    id: 'cyber-y1q2',
    year: 1,
    quarter: 2,
    title: { en: 'Web Application Security & OWASP Top 10 (Part 1)', hi: 'Web Security & OWASP Top 10 Basics' },
    focus: { en: 'Learn how web vulnerabilities work: SQL Injection (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and using Burp Suite.', hi: 'SQL Injection, XSS, CSRF attacks kaise hote hain aur unhe kaise defend kiya jata hai. Burp Suite proxy setup.' },
    whyItMatters: { en: 'Web applications represent the vast majority of company attack surfaces. Web app security engineers are in huge demand across fintech and SaaS.', hi: 'Companies ki sabse zyada vulnerabilities unki websites aur APIs me hoti hain. Web penetration testing bohot high paying skill hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'cy-s5', title: { en: 'Burp Suite Community: Intercepting HTTP requests, Repeater, Intruder basics', hi: 'Burp Suite: Requests intercept aur modify karna' }, category: 'skill', completed: false },
      { id: 'cy-s6', title: { en: 'SQL Injection (SQLi): In-band, boolean-blind, and parameterized defense', hi: 'SQL Injection aur parameterized queries se defense' }, category: 'skill', completed: false },
      { id: 'cy-s7', title: { en: 'Cross-Site Scripting (XSS): Stored, Reflected, DOM-based, CSP headers', hi: 'XSS attacks (Stored, Reflected) aur CSP protection' }, category: 'skill', completed: false },
      { id: 'cy-s8', title: { en: 'Authentication vulnerabilities: Insecure direct object references (IDOR)', hi: 'IDOR vulnerabilities aur broken access control' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'cy-p3', title: { en: 'Complete 25 PortSwigger Web Security Academy free interactive labs', hi: 'PortSwigger Academy ke 25 free labs complete karein' }, category: 'practice', completed: false },
      { id: 'cy-p4', title: { en: 'Exploit and patch a deliberately vulnerable web app (OWASP Juice Shop / DVWA)', hi: 'OWASP Juice Shop me vulnerabilities dhundhein aur fix karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-cy-y1q2',
        title: { en: 'Automated Web Vulnerability & Header Security Scanner', hi: 'Automated Security Header & XSS/SQLi Auditor' },
        description: { en: 'A Python CLI tool that checks target websites for missing security headers (HSTS, CSP, X-Frame-Options) and tests basic injection vectors.', hi: 'Python tool jo target website ke headers audit kare aur insecure configurations report kare.' },
        technologies: ['Python', 'Requests', 'BeautifulSoup', 'OWASP Top 10'],
        portfolioImpact: { en: 'Shows automated defensive scanning capability on GitHub.', hi: 'Proves practical application security knowledge.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'cy-c3', title: { en: 'Write a detailed write-up of a PortSwigger lab solution on GitHub / Medium', hi: 'PortSwigger lab ka clean technical writeup share karein' }, category: 'career', completed: false },
      { id: 'cy-c4', title: { en: 'Connect with 10 Application Security Engineers on LinkedIn', hi: '10 AppSec engineers se connect karke career roadmap par feedback lein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'cy-m3', title: { en: 'Apprentice level completed on PortSwigger Web Security Academy', hi: 'PortSwigger Apprentice badge earned' }, category: 'milestone', completed: false },
      { id: 'cy-m4', title: { en: 'Can explain how parameterized queries eliminate SQL injection mathematically', hi: 'SQLi prevention mechanisms crystal clear' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'cy-r3', title: 'PortSwigger Web Security Academy (Free)', type: 'Practice Platform', url: 'https://portswigger.net/web-security', free: true, notes: 'The gold standard web security training platform in the world.' },
      { id: 'cy-r4', title: 'OWASP Top 10 Official Documentation', type: 'Documentation', url: 'https://owasp.org/www-project-top-ten/', free: true, notes: 'The industry reference for critical web vulnerabilities.' },
    ],
  },
  {
    id: 'cyber-y1q3',
    year: 1,
    quarter: 3,
    title: { en: 'Cryptography Fundamentals & Defensive Security (SOC Basics)', hi: 'Cryptography, PKI & Defensive SOC Fundamentals' },
    focus: { en: 'Understand modern cryptography (AES symmetric, RSA asymmetric, hashing SHA-256, digital signatures), PKI certificates, and defensive SIEM log monitoring.', hi: 'AES, RSA, Hashing (SHA-256), SSL certificates aur SIEM logs monitor karna.' },
    whyItMatters: { en: 'Cryptography secures everything from bank accounts to military data. Understanding key management and encryption trade-offs is essential.', hi: 'Encryption aur hashing bina security me kaam karna namumkin hai. SOC analysts logs dekhkar attacks rokate hain.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'cy-s9', title: { en: 'Symmetric vs Asymmetric encryption: AES-GCM, RSA, Elliptic Curves (ECC)', hi: 'Symmetric (AES) vs Asymmetric (RSA/ECC) encryption' }, category: 'skill', completed: false },
      { id: 'cy-s10', title: { en: 'Cryptographic hashing, salt, pepper, and password cracking resistance (bcrypt/argon2)', hi: 'Cryptographic hashing, salts aur bcrypt security' }, category: 'skill', completed: false },
      { id: 'cy-s11', title: { en: 'Digital signatures, PKI certificate chains, and certificate revocation', hi: 'Digital signatures aur PKI certificate trust chains' }, category: 'skill', completed: false },
      { id: 'cy-s12', title: { en: 'SIEM basics: Centralized logging with Splunk / Elastic Security', hi: 'SIEM basics: Splunk ya Elastic me attack logs search karna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'cy-p5', title: { en: 'Implement AES-256 encryption and decryption in Python using pycryptodome', hi: 'Python me secure file encryption script banayein' }, category: 'practice', completed: false },
      { id: 'cy-p6', title: { en: 'Analyze simulated brute-force authentication logs in Splunk or Elastic', hi: 'Splunk me brute-force attack logs filter karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-cy-y1q3',
        title: { en: 'End-to-End Encrypted File Sharing Vault with Digital Signatures', hi: 'End-to-End Encrypted Secure Vault with RSA Signatures' },
        description: { en: 'A client-server CLI vault that encrypts files with AES-256, signs them with private RSA keys, and verifies integrity before decryption.', hi: 'Secure vault jisme AES-256 aur RSA digital signatures se verified encryption aur integrity checking ho.' },
        technologies: ['Python', 'Cryptography library', 'RSA', 'AES-256'],
        portfolioImpact: { en: 'Demonstrates rock-solid cryptographic hygiene without inventing custom unproven ciphers.', hi: 'Real-world applied cryptography showcase.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'cy-c5', title: { en: 'Participate in a 24-hour weekend college or National CTF contest', hi: 'Weekend CTF competition me participate karein' }, category: 'career', completed: false },
      { id: 'cy-c6', title: { en: 'Earn the free Splunk Core Certified User / Splunk Fundamentals accreditation', hi: 'Free Splunk learning accreditation complete karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'cy-m5', title: { en: 'Can explain why ECB mode is insecure and CBC/GCM is required intuitively', hi: 'Block cipher modes and cryptographic risks clear' }, category: 'milestone', completed: false },
      { id: 'cy-m6', title: { en: 'Solved at least 15 crypto challenges on CryptoHack platform', hi: 'CryptoHack platform challenges completed' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'cy-r5', title: 'CryptoHack (Free Interactive Cryptography Practice)', type: 'Practice Platform', url: 'https://cryptohack.org/', free: true, notes: 'The most fun interactive platform to learn modern cryptography.' },
      { id: 'cy-r6', title: 'Splunk Free Training Courses', type: 'Course/Video', url: 'https://www.splunk.com/en_us/training/free-courses/overview.html', free: true, notes: 'Free industry SOC analyst training.' },
    ],
  },
  {
    id: 'cyber-y1q4',
    year: 1,
    quarter: 4,
    title: { en: 'Ethical Hacking Labs, Privilege Escalation & First Security Internship', hi: 'Ethical Hacking Labs & Linux Privilege Escalation' },
    focus: { en: 'Tackle Linux privilege escalation techniques (SUID binaries, cron misconfigurations, kernel exploits) and prepare for your first SOC / Pentesting internship.', hi: 'Linux privilege escalation (root banna), HackTheBox machines solve karna aur first internship applications.' },
    whyItMatters: { en: 'Penetration testing requires finding the weakest link in the chain. Privilege escalation is the key step between getting access and full control.', hi: 'Privilege escalation aane se candidate junior pentesting roles me directly contribute kar sakta hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'cy-s13', title: { en: 'Linux Privilege Escalation: LinPEAS, SUID abuse, weak file permissions', hi: 'Linux PrivEsc: LinPEAS aur misconfigurations abuse' }, category: 'skill', completed: false },
      { id: 'cy-s14', title: { en: 'Reverse shells and bind shells: Netcat, socat, payload generation', hi: 'Reverse shells aur payload handling' }, category: 'skill', completed: false },
      { id: 'cy-s15', title: { en: 'Security documentation: Writing professional penetration test reports', hi: 'Professional penetration test audit report likhna' }, category: 'skill', completed: false },
      { id: 'cy-s16', title: { en: 'Responsible disclosure guidelines and bug bounty ethics', hi: 'Responsible disclosure rules aur bug bounty ethics' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'cy-p7', title: { en: 'Root 5 active or retired Easy machines on HackTheBox or VulnHub', hi: 'HackTheBox ya VulnHub par 5 easy machines root karein' }, category: 'practice', completed: false },
      { id: 'cy-p8', title: { en: 'Write a mock penetration test report for a vulnerable machine following executive format', hi: 'Professional pentest report document karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-cy-y1q4',
        title: { en: 'Comprehensive Penetration Testing Audit Report Portfolio', hi: 'Professional Penetration Testing Case Study Report' },
        description: { en: 'A redacted, professional vulnerability assessment report detailing executive summary, CVSS scoring, proof of concepts, and remediation steps.', hi: 'Executive pentest report jisme CVSS scores, step-by-step remediation aur impact analysis shamil ho.' },
        technologies: ['Markdown / LaTeX', 'CVSS v3.1', 'Nmap', 'Burp Suite'],
        portfolioImpact: { en: 'Shows security recruiters that you can write reports that clients and CISOs can understand.', hi: 'Recruiter ko dikhata hai ki aap technical jargon ko actionable business report me convert kar sakte hain.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'cy-c7', title: { en: 'Apply for entry-level Security Operations Center (SOC) Tier-1 or AppSec internships', hi: 'SOC Tier-1 ya AppSec internship me apply karein' }, category: 'career', completed: false },
      { id: 'cy-c8', title: { en: 'Prepare for beginner industry certifications (e.g. eJPT or CompTIA Security+)', hi: 'eJPT ya Security+ certification syllabus review karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'cy-m7', title: { en: 'Rooted 10+ lab machines across TryHackMe and HackTheBox', hi: '10+ machines successfully rooted' }, category: 'milestone', completed: false },
      { id: 'cy-m8', title: { en: 'Year 1 complete: Solid foundations across Networking, Web Security, Crypto, and PrivEsc', hi: 'Year 1 Complete: Core security competencies proven' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'cy-r7', title: 'PayloadsAllTheThings GitHub Repository', type: 'Documentation', url: 'https://github.com/swisskyrepo/PayloadsAllTheThings', free: true, notes: 'The ultimate offensive security cheatsheet.' },
      { id: 'cy-r8', title: 'IppSec Video Walkthroughs of HackTheBox Machines', type: 'Course/Video', url: 'https://ippsec.rocks/', free: true, notes: 'Legendary step-by-step pentest methodologies.' },
    ],
  },

  // Years 2-4: Windows AD Security, Cloud Security AWS/Azure, Malware Analysis, Threat Hunting, Red/Blue Team
  ...Array.from({ length: 12 }, (_, i) => {
    const qIndex = i + 5;
    const year = Math.ceil(qIndex / 4);
    const quarter = ((qIndex - 1) % 4) + 1;
    const titles = [
      { en: 'Active Directory (AD) Security, Kerberos Attacks & BloodHound', hi: 'Active Directory Security, Kerberos Attacks & BloodHound' },
      { en: 'API Security, OAuth 2.0 Flaws & GraphQL Penetration Testing', hi: 'API Security, OAuth 2.0 Flaws & GraphQL Testing' },
      { en: 'Cloud Security (AWS IAM, Misconfigurations & S3 Audits)', hi: 'Cloud Security (AWS IAM Least Privilege & Audits)' },
      { en: 'First Cybersecurity / SOC Analyst Internship', hi: 'First Cybersecurity / SOC Analyst Internship' },
      { en: 'Threat Hunting, MITRE ATT&CK Framework & EDR Analysis', hi: 'Threat Hunting & MITRE ATT&CK Framework' },
      { en: 'Malware Analysis Foundations, Reverse Engineering (Ghidra)', hi: 'Reverse Engineering with Ghidra & Malware Triage' },
      { en: 'DevSecOps: SAST, DAST, SCA & Container Image Scanning in CI/CD', hi: 'DevSecOps: SAST/DAST & Automated Security in CI/CD' },
      { en: 'Red Team Operations, C2 Frameworks & Defensive Evasion', hi: 'Red Teaming Operations & Defensive Evasion' },
      { en: 'Security Architecture System Design & High-Package Interview Loops', hi: 'Enterprise Security Architecture & Technical Interviews' },
      { en: 'Cybersecurity Offer Loops, Certifications & Negotiation', hi: 'Final Security Offer Negotiation & Certifications' },
      { en: 'Advanced Specialization (Cloud Sec / Zero Trust / Incident Response)', hi: 'Domain Specialization (Zero Trust & Cloud Defense)' },
      { en: 'First 90 Days as Cybersecurity Professional & CISO Strategic Alignment', hi: 'First 90 Days as Security Engineer & Career Trajectory' },
    ];
    const currTitle = titles[i];
    return {
      id: `cyber-y${year}q${quarter}`,
      year,
      quarter,
      title: currTitle,
      focus: {
        en: `Quarter ${quarter} Year ${year} advanced cybersecurity & threat analysis: ${currTitle.en} with hands-on enterprise labs.`,
        hi: `Year ${year} Quarter ${quarter}: ${currTitle.hi} par deep practice aur job interviews ki taiyari.`,
      },
      whyItMatters: {
        en: 'Enterprises pay top dollar for security engineers who understand attack vectors and can harden distributed cloud environments.',
        hi: 'Cybersecurity me top packages un engineers ko milte hain jo enterprise level ki vulnerabilities defend kar sakein.',
      },
      baseHoursPerWeek: 14,
      skills: [
        { id: `cy-s${16 + i * 4 + 1}`, title: { en: `Core Mastery: ${currTitle.en}`, hi: `${currTitle.hi} key skills` }, category: 'skill' as TaskCategory, completed: false },
        { id: `cy-s${16 + i * 4 + 2}`, title: { en: 'Defense-in-depth and risk mitigation modeling', hi: 'Risk mitigation aur threat modeling' }, category: 'skill' as TaskCategory, completed: false },
        { id: `cy-s${16 + i * 4 + 3}`, title: { en: 'Remediation architecture and developer security guidelines', hi: 'Developer security standards aur remediation' }, category: 'skill' as TaskCategory, completed: false },
        { id: `cy-s${16 + i * 4 + 4}`, title: { en: 'Incident response protocol and containment strategies', hi: 'Incident containment aur post-mortem analysis' }, category: 'skill' as TaskCategory, completed: false },
      ],
      practice: [
        { id: `cy-p${8 + i * 2 + 1}`, title: { en: `Complete lab exercises for ${currTitle.en}`, hi: 'Hands-on security lab exercise complete karein' }, category: 'practice' as TaskCategory, completed: false },
        { id: `cy-p${8 + i * 2 + 2}`, title: { en: 'Simulate technical interview defending architectural security controls', hi: 'Mock interview me security controls defend karein' }, category: 'practice' as TaskCategory, completed: false },
      ],
      projects: [
        {
          id: `proj-cy-y${year}q${quarter}`,
          title: { en: `Enterprise ${currTitle.en} Capstone Security Assessment`, hi: `${currTitle.hi} Security Project` },
          description: {
            en: `A comprehensive security assessment report or open-source defensive automation tool targeting ${currTitle.en}.`,
            hi: `Automated security audit tool ya comprehensive enterprise assessment report.`,
          },
          technologies: ['Python / Go', 'SIEM / Cloud Tools', 'MITRE ATT&CK', 'Burp Suite'],
          portfolioImpact: { en: 'Shows high-level security maturity.', hi: 'High-level security engineering capability demonstrate karta hai.' },
          difficulty: 'Advanced' as const,
          status: 'not-started' as const,
        },
      ],
      careerActions: [
        { id: `cy-c${8 + i * 2 + 1}`, title: { en: 'Network with 15 Security Leads and CISOs on LinkedIn for referrals', hi: 'Security Managers aur CISOs se referral network banayein' }, category: 'career' as TaskCategory, completed: false },
        { id: `cy-c${8 + i * 2 + 2}`, title: { en: 'Publish CVE or responsible disclosure findings responsibly', hi: 'Clean technical blog writeup publish karein' }, category: 'career' as TaskCategory, completed: false },
      ],
      milestones: [
        { id: `cy-m${8 + i * 2 + 1}`, title: { en: `Technical readiness confirmed in ${currTitle.en}`, hi: 'Domain interview preparedness certified' }, category: 'milestone' as TaskCategory, completed: false },
        { id: `cy-m${8 + i * 2 + 2}`, title: { en: 'Documented security project live on GitHub / portfolio site', hi: 'Security project live and documented' }, category: 'milestone' as TaskCategory, completed: false },
      ],
      resources: [
        { id: `cy-r${8 + i * 2 + 1}`, title: 'MITRE ATT&CK Enterprise Matrix', type: 'Documentation', url: 'https://attack.mitre.org/', free: true, notes: 'The worldwide encyclopedia of threat actor techniques.' },
        { id: `cy-r${8 + i * 2 + 2}`, title: 'Hack The Box Academy', type: 'Practice Platform', url: 'https://academy.hackthebox.com/', free: true, notes: 'Structured cybersecurity modules.' },
      ],
    };
  }),
];
