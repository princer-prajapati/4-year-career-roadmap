import { RoadmapQuarter, TaskCategory } from '../../types';

export const DATA_SCIENCE_ROADMAP: RoadmapQuarter[] = [
  // Year 1: Foundations, Python, Advanced SQL, Statistics & EDA
  {
    id: 'ds-y1q1',
    year: 1,
    quarter: 1,
    title: { en: 'Python Programming Core & Data Structures', hi: 'Python Programming & Math Foundations' },
    focus: { en: 'Learn Python from scratch, data types, functions, list comprehensions, Git, and foundational calculus/algebra.', hi: 'Python syntax, functions, loops, Git aur basic linear algebra samajhna.' },
    whyItMatters: { en: 'Python is the undisputed language of data. Writing clean, idiomatic Python is non-negotiable.', hi: 'Data Science me Python sabse basic aur compulsory language hai.' },
    baseHoursPerWeek: 10,
    skills: [
      { id: 'ds-s1', title: { en: 'Python data structures: lists, dicts, sets, tuples, generators', hi: 'Python core data structures aur generators' }, category: 'skill', completed: false },
      { id: 'ds-s2', title: { en: 'Linear Algebra basics: vectors, dot products, matrices', hi: 'Vectors, matrices aur linear algebra' }, category: 'skill', completed: false },
      { id: 'ds-s3', title: { en: 'Git & GitHub workflows, virtual environments (venv/conda)', hi: 'Git, GitHub aur Python virtual environments' }, category: 'skill', completed: false },
      { id: 'ds-s4', title: { en: 'Working with Jupyter Notebooks & VS Code', hi: 'Jupyter Notebooks aur VS Code setup' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'ds-p1', title: { en: 'Solve 30 Python problems on HackerRank / LeetCode Easy', hi: 'HackerRank par 30 Python problem solve karein' }, category: 'practice', completed: false },
      { id: 'ds-p2', title: { en: 'Calculate matrix transformations by hand and write Python functions to verify', hi: 'Matrix multiplication scratch se code karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-ds-y1q1',
        title: { en: 'Personal Finance CSV Parser & Expense Analyzer', hi: 'CSV Expense & Savings Analyzer' },
        description: { en: 'CLI Python tool that parses bank transaction CSVs, groups spending categories, and outputs monthly breakdown.', hi: 'Bank statement CSV ko parse karke monthly spend breakdown nikaalne wala Python script.' },
        technologies: ['Python', 'CSV module', 'Git'],
        portfolioImpact: { en: 'Shows clean data handling and file manipulation.', hi: 'Data parsing aur scripting ability prove karta hai.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'ds-c1', title: { en: 'Set up GitHub with clean data science project folders', hi: 'GitHub profile data science projects ke liye tayar karein' }, category: 'career', completed: false },
      { id: 'ds-c2', title: { en: 'Follow Kaggle and read top notebook writeups', hi: 'Kaggle par active profiles aur winning notebooks padhein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'ds-m1', title: { en: 'Fluency in Python scripting without syntax lookups', hi: 'Bina help ke clean Python code likhna' }, category: 'milestone', completed: false },
      { id: 'ds-m2', title: { en: 'Jupyter and Git setup configured with clean repository commits', hi: 'Clean repo setup with version control' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'ds-r1', title: 'Python for Data Analysis (Wes McKinney Book)', type: 'Book/Article', url: 'https://wesmckinney.com/book/', free: true, notes: 'By the creator of Pandas.' },
      { id: 'ds-r2', title: 'Khan Academy Linear Algebra & Statistics', type: 'Course/Video', url: 'https://www.khanacademy.org/math/linear-algebra', free: true, notes: 'Best visual math intuition.' },
    ],
  },
  {
    id: 'ds-y1q2',
    year: 1,
    quarter: 2,
    title: { en: 'Advanced SQL & Relational Databases', hi: 'Advanced SQL & Data Querying' },
    focus: { en: 'Master SQL: Window functions, Common Table Expressions (CTEs), GROUP BY, joins, and database indexing.', hi: 'Advanced SQL: Window functions, CTEs, Joins aur aggregate analytics.' },
    whyItMatters: { en: '90% of a Data Analyst/Scientist’s daily job is extracting data using SQL. SQL interview rounds eliminate unprepared candidates fast.', hi: 'Real company me 90% data SQL se nikaala jata hai. SQL me mastery sabse zaruri hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'ds-s5', title: { en: 'Multi-table JOINs, subqueries, and CTEs (WITH clauses)', hi: 'Complex JOINs aur Common Table Expressions' }, category: 'skill', completed: false },
      { id: 'ds-s6', title: { en: 'Window functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD/LAG', hi: 'Window functions: RANK, LEAD/LAG, Running totals' }, category: 'skill', completed: false },
      { id: 'ds-s7', title: { en: 'PostgreSQL setup and schema normalization', hi: 'PostgreSQL database setup aur queries' }, category: 'skill', completed: false },
      { id: 'ds-s8', title: { en: 'Query optimization and indexing strategies', hi: 'Large datasets par fast SQL queries likhna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'ds-p3', title: { en: 'Solve 40 SQL questions on LeetCode / StrataScratch (Medium difficulty)', hi: 'StrataScratch ya LeetCode par 40 SQL questions solve karein' }, category: 'practice', completed: false },
      { id: 'ds-p4', title: { en: 'Calculate customer retention cohorts and month-over-month churn in raw SQL', hi: 'SQL me customer retention aur churn rate calculate karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-ds-y1q2',
        title: { en: 'E-Commerce Database Schema & Business Query Suite', hi: 'E-Commerce SQL Analytics Case Study' },
        description: { en: 'A simulated e-commerce PostgreSQL database with 100k records, generating automated quarterly sales reports and customer segmentations.', hi: '100,000 orders ka dataset jisme retention, best-seller products aur sales cohorts ki SQL queries hon.' },
        technologies: ['PostgreSQL', 'Advanced SQL', 'GitHub Gist / Repo'],
        portfolioImpact: { en: 'Proves to hiring managers you can write production analytical queries on day 1.', hi: 'Dikhata hai ki aap company ka real data SQL se turant extract kar sakte hain.' },
        difficulty: 'Beginner',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'ds-c3', title: { en: 'Publish your SQL case study write-up on LinkedIn or Medium', hi: 'Apna SQL analysis writeup LinkedIn par share karein' }, category: 'career', completed: false },
      { id: 'ds-c4', title: { en: 'Connect with 10 working Data Analysts on LinkedIn', hi: '10 Data Analysts se connect karke unka day-to-day workflow samjhein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'ds-m3', title: { en: 'Can write complex window functions and CTEs without searching syntax', hi: 'Complex SQL queries bina Google kiye likhne ki capability' }, category: 'milestone', completed: false },
      { id: 'ds-m4', title: { en: 'Scored 100% on standard SQL evaluation tests', hi: 'SQL test queries verified' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'ds-r3', title: 'Mode Analytics SQL Tutorial', type: 'Documentation', url: 'https://mode.com/sql-tutorial/', free: true, notes: 'The most practical industry SQL course.' },
      { id: 'ds-r4', title: 'StrataScratch SQL Practice Platform', type: 'Practice Platform', url: 'https://www.stratascratch.com/', free: true, notes: 'Real SQL questions from Meta, Amazon, Airbnb.' },
    ],
  },
  {
    id: 'ds-y1q3',
    year: 1,
    quarter: 3,
    title: { en: 'NumPy, Pandas & Exploratory Data Analysis (EDA)', hi: 'Pandas, NumPy & Exploratory Data Analysis' },
    focus: { en: 'Deep dive into Pandas, NumPy, missing data handling, outlier detection, and data visualization with Matplotlib and Seaborn.', hi: 'Pandas aur NumPy se data clean karna, missing values handle karna aur graphs banana.' },
    whyItMatters: { en: 'Real-world data is messy and incomplete. Being able to clean, transform, and visualize it cleanly is fundamental.', hi: 'Real data bohot messy hota hai. Usko clean aur process karna aana sabse pehla kaam hota hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'ds-s9', title: { en: 'NumPy vectorized operations and broadcasting', hi: 'NumPy arrays aur mathematical operations' }, category: 'skill', completed: false },
      { id: 'ds-s10', title: { en: 'Pandas DataFrames: filtering, grouping, merging, pivot tables', hi: 'Pandas: groupby, merge, pivot tables aur data manipulation' }, category: 'skill', completed: false },
      { id: 'ds-s11', title: { en: 'Handling missing data, imputation, and duplicate elimination', hi: 'Missing data fill karna aur outliers clean karna' }, category: 'skill', completed: false },
      { id: 'ds-s12', title: { en: 'Data storytelling charts: Seaborn, Matplotlib, Plotly', hi: 'Visual charts: Seaborn, Matplotlib aur Plotly' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'ds-p5', title: { en: 'Download a messy Kaggle dataset and produce a 10-chart statistical summary', hi: 'Kaggle dataset clean karke 10 charts ka insights notebook banayein' }, category: 'practice', completed: false },
      { id: 'ds-p6', title: { en: 'Replicate an analytical infographic using Seaborn and Matplotlib', hi: 'Clean publication-quality charts design karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-ds-y1q3',
        title: { en: 'Comprehensive Tech Salary & Hiring Trends EDA', hi: 'Tech Salaries Exploratory Data Analysis' },
        description: { en: 'An in-depth EDA analyzing salary trends across roles, locations, experience, and remote flexibility with interactive Plotly graphs.', hi: 'Global tech salaries ka deep statistical analysis jisme interactive charts aur actionable findings hon.' },
        technologies: ['Python', 'Pandas', 'Plotly', 'Jupyter'],
        portfolioImpact: { en: 'Demonstrates professional data storytelling, distribution plots, and executive communication.', hi: 'Business insights aur visual charts ka compelling portfolio piece.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'ds-c5', title: { en: 'Publish a Kaggle notebook and earn your first Bronze/Silver medal', hi: 'Kaggle notebook publish karein aur feedback lein' }, category: 'career', completed: false },
      { id: 'ds-c6', title: { en: 'Share key charts from your project on Twitter/LinkedIn', hi: 'Apne charts ke interesting conclusions social media par share karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'ds-m5', title: { en: 'Can clean and merge 3 unrelated datasets into a single analytical view in 30 mins', hi: 'Data cleaning speed me efficiency prapt' }, category: 'milestone', completed: false },
      { id: 'ds-m6', title: { en: 'At least 1 Kaggle notebook publicly starred by community peers', hi: 'Public recognition on Kaggle platform' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'ds-r5', title: 'Kaggle Micro-courses: Python, Pandas & Data Visualization', type: 'Course/Video', url: 'https://www.kaggle.com/learn', free: true, notes: 'Interactive hands-on tutorials.' },
      { id: 'ds-r6', title: 'Storytelling with Data Guide', type: 'Book/Article', url: 'https://www.storytellingwithdata.com/', free: true, notes: 'Mastering clear communication with numbers.' },
    ],
  },
  {
    id: 'ds-y1q4',
    year: 1,
    quarter: 4,
    title: { en: 'BI Dashboards (Tableau / PowerBI) & First Client Case Study', hi: 'Tableau / PowerBI & Business Intelligence' },
    focus: { en: 'Learn business intelligence tools (Tableau / Power BI), dashboard layout, KPI metrics, DAX/Calculated fields, and stakeholder presentation.', hi: 'Tableau/Power BI dashboards banana, KPIs track karna aur business presentation dena.' },
    whyItMatters: { en: 'Stakeholders don’t read Jupyter notebooks. Executive leadership makes multi-million dollar decisions based on BI dashboards.', hi: 'Company ke managers code nahi dekhte, wo BI dashboard dekhkar decisions lete hain.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'ds-s13', title: { en: 'Tableau Public / Power BI desktop essentials', hi: 'Tableau Public / PowerBI dashboard building' }, category: 'skill', completed: false },
      { id: 'ds-s14', title: { en: 'Calculated fields, LOD expressions (Tableau), and DAX measures', hi: 'DAX measures aur Level of Detail (LOD) formulas' }, category: 'skill', completed: false },
      { id: 'ds-s15', title: { en: 'Dashboard UX: Filter actions, parameters, visual hierarchy', hi: 'Interactive filters aur executive KPI cards' }, category: 'skill', completed: false },
      { id: 'ds-s16', title: { en: 'Connecting live PostgreSQL and Google Sheets data sources', hi: 'Live database se dashboard connect karna' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'ds-p7', title: { en: 'Recreate an executive SaaS metrics dashboard (MRR, Churn, CAC, LTV)', hi: 'SaaS metrics ka complete interactive dashboard banayein' }, category: 'practice', completed: false },
      { id: 'ds-p8', title: { en: 'Practice presenting findings in a 5-minute Loom video walking through insights', hi: 'Dashboard ke insights 5-minute video me explain karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-ds-y1q4',
        title: { en: 'Interactive Executive Sales & Churn BI Dashboard', hi: 'Executive KPI & Churn Dashboard (Tableau / PowerBI)' },
        description: { en: 'A published interactive dashboard with drill-downs, geographic heatmaps, and automated alerts for underperforming sales regions.', hi: 'Interactive Tableau/PowerBI dashboard jisme filters, regional maps aur KPI trends shamil hon.' },
        technologies: ['Tableau Public / Power BI', 'PostgreSQL', 'SQL queries'],
        portfolioImpact: { en: 'Provides instant visual proof of business intelligence readiness.', hi: 'Recruiter ko direct live interactive dashboard link dikhane layak project.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'ds-c7', title: { en: 'Publish dashboard on Tableau Public portfolio with live link on resume', hi: 'Tableau Public par live dashboard link resume me attach karein' }, category: 'career', completed: false },
      { id: 'ds-c8', title: { en: 'Apply for entry-level / junior Data Analyst winter internships', hi: 'Data Analyst internship postings me apply karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'ds-m7', title: { en: 'Live Tableau/PowerBI portfolio link active with 2 polished dashboards', hi: 'Live Tableau Public profile with verified dashboards' }, category: 'milestone', completed: false },
      { id: 'ds-m8', title: { en: '1-page resume ready highlighting SQL, Pandas, and BI capabilities', hi: 'Data Analyst ready resume complete' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'ds-r7', title: 'Tableau Free Training Videos', type: 'Course/Video', url: 'https://www.tableau.com/learn/training', free: true, notes: 'Official Tableau curriculum.' },
      { id: 'ds-r8', title: 'Maven Analytics Free Dashboard Challenges', type: 'Practice Platform', url: 'https://mavenanalytics.io/data-playground', free: true, notes: 'Real business datasets to build dashboards.' },
    ],
  },

  // Years 2-4 structured continuation for complete 16 quarters
  ...Array.from({ length: 12 }, (_, i) => {
    const qIndex = i + 5;
    const year = Math.ceil(qIndex / 4);
    const quarter = ((qIndex - 1) % 4) + 1;
    const titles = [
      { en: 'Probability, Hypothesis Testing & A/B Testing', hi: 'Probability, Statistical Tests & A/B Experiments' },
      { en: 'Machine Learning Foundations (Scikit-Learn Regression & Classification)', hi: 'Machine Learning Models (Regression, Classification & Trees)' },
      { en: 'Feature Engineering & Cross-Validation Strategies', hi: 'Feature Engineering, Metrics (AUC-ROC, F1) & Tuning' },
      { en: 'First Data Science Internship & Production Pipelines', hi: 'First Data Science Internship & Real-World Delivery' },
      { en: 'Advanced Ensemble Models (XGBoost, LightGBM) & Time Series', hi: 'Ensemble Models (XGBoost, LightGBM) & Time-Series Forecasting' },
      { en: 'Big Data Processing with PySpark & Cloud Warehouses (Snowflake / BigQuery)', hi: 'Big Data with PySpark & Cloud Data Warehouses (Snowflake)' },
      { en: 'Unsupervised Learning, Clustering & Recommendation Engines', hi: 'Clustering, PCA & Collaborative Filtering Recommendations' },
      { en: 'End-to-End ML Deployment with FastAPI & Docker', hi: 'Model Deployment (FastAPI, Docker & Streamlit)' },
      { en: 'High-Package Technical Interview Drills & Product Case Studies', hi: 'Data Science Case Studies & Product Metric Interviews' },
      { en: 'Final Loops, Live Coding, Offer Negotiation & Selection', hi: 'Final Interview Rounds & Salary Negotiation' },
      { en: 'Advanced Domain Specialization (Fintech / Healthcare / NLP Analytics)', hi: 'Domain Specialization (Growth Analytics / Financial Risk)' },
      { en: 'First 90 Days in Industry & Scaling to Senior Data Scientist', hi: 'First 90 Days as Data Scientist & Senior Growth Path' },
    ];
    const currTitle = titles[i];
    return {
      id: `ds-y${year}q${quarter}`,
      year,
      quarter,
      title: currTitle,
      focus: {
        en: `Quarter ${quarter} Year ${year} rigorous data science mastery: ${currTitle.en} with hands-on projects and interview readiness.`,
        hi: `Year ${year} Quarter ${quarter}: ${currTitle.hi} par deep practice aur job preparation.`,
      },
      whyItMatters: {
        en: 'Data Science interviews require mathematical defense of model choices, evaluation metrics, and end-to-end production pipelines.',
        hi: 'Data Science interviews me sirf code nahi balki math aur business metrics ka trade-off explain karna padta hai.',
      },
      baseHoursPerWeek: 14,
      skills: [
        { id: `ds-s${16 + i * 4 + 1}`, title: { en: `Core Concept: ${currTitle.en}`, hi: `${currTitle.hi} core concepts` }, category: 'skill' as TaskCategory, completed: false },
        { id: `ds-s${16 + i * 4 + 2}`, title: { en: 'Model evaluation: Precision, Recall, AUC-ROC, Business ROI', hi: 'Business ROI aur technical metrics' }, category: 'skill' as TaskCategory, completed: false },
        { id: `ds-s${16 + i * 4 + 3}`, title: { en: 'Production pipeline integration & testing', hi: 'Production data pipelines aur validation' }, category: 'skill' as TaskCategory, completed: false },
        { id: `ds-s${16 + i * 4 + 4}`, title: { en: 'Executive presentation of technical results', hi: 'Business stakeholders ke samne report present karna' }, category: 'skill' as TaskCategory, completed: false },
      ],
      practice: [
        { id: `ds-p${8 + i * 2 + 1}`, title: { en: `Complete benchmark experiments for ${currTitle.en}`, hi: 'Benchmark datasets par practical experiments karein' }, category: 'practice' as TaskCategory, completed: false },
        { id: `ds-p${8 + i * 2 + 2}`, title: { en: 'Perform peer mock interview on experimental design & SQL', hi: 'Mock interview me model selection defend karein' }, category: 'practice' as TaskCategory, completed: false },
      ],
      projects: [
        {
          id: `proj-ds-y${year}q${quarter}`,
          title: { en: `Production ${currTitle.en} Capstone Deliverable`, hi: `${currTitle.hi} Industry Deliverable` },
          description: {
            en: `An end-to-end data science project utilizing real data, automated data cleaning, cross-validation, and interactive dashboard/API deployment.`,
            hi: `Real dataset par trained model jisme automated cleaning, tuning aur live API deployment ho.`,
          },
          technologies: ['Python', 'Scikit-Learn / PySpark', 'FastAPI / Streamlit', 'Docker'],
          portfolioImpact: { en: 'Demonstrates end-to-end industry execution.', hi: 'Complete business problem solve karne ka solid proof.' },
          difficulty: 'Advanced' as const,
          status: 'not-started' as const,
        },
      ],
      careerActions: [
        { id: `ds-c${8 + i * 2 + 1}`, title: { en: 'Network with 15 senior data scientists and request referrals', hi: 'Senior data scientists se networking karke referrals maangein' }, category: 'career' as TaskCategory, completed: false },
        { id: `ds-c${8 + i * 2 + 2}`, title: { en: 'Update portfolio case study with clear business metric impact', hi: 'Portfolio me business metric results highlight karein' }, category: 'career' as TaskCategory, completed: false },
      ],
      milestones: [
        { id: `ds-m${8 + i * 2 + 1}`, title: { en: `Mastered technical questions for ${currTitle.en}`, hi: 'Technical interview readiness certified' }, category: 'milestone' as TaskCategory, completed: false },
        { id: `ds-m${8 + i * 2 + 2}`, title: { en: 'Documented code published to GitHub with comprehensive documentation', hi: 'GitHub repo live with full writeup' }, category: 'milestone' as TaskCategory, completed: false },
      ],
      resources: [
        { id: `ds-r${8 + i * 2 + 1}`, title: 'Scikit-Learn User Guide', type: 'Documentation', url: 'https://scikit-learn.org/stable/user_guide.html', free: true, notes: 'Comprehensive algorithm documentation.' },
        { id: `ds-r${8 + i * 2 + 2}`, title: 'Towards Data Science Curated Guides', type: 'Book/Article', url: 'https://towardsdatascience.com/', free: true, notes: 'Practical industry implementation walkthroughs.' },
      ],
    };
  }),
];
