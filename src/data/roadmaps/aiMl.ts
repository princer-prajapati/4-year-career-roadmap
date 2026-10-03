import { RoadmapQuarter, TaskCategory } from '../../types';

export const AI_ML_ROADMAP: RoadmapQuarter[] = [
  // Year 1: Math Foundations, Python, PyTorch & Classical ML
  {
    id: 'aiml-y1q1',
    year: 1,
    quarter: 1,
    title: { en: 'Mathematics for Machine Learning & Python Foundations', hi: 'Math Foundations (Linear Algebra, Calculus) & Python' },
    focus: { en: 'Build absolute fluency in linear algebra (eigenvalues, matrix decomposition), multivariable calculus (gradients, chain rule), and Python scripting.', hi: 'Linear algebra, calculus (gradients, chain rule), probability aur Python me mastery.' },
    whyItMatters: { en: 'AI is applied matrix calculus and probability. Without math intuition, deep learning feels like black magic and debugging models becomes impossible.', hi: 'Deep learning ke peeche matrix calculus aur gradients hote hain. Math aane se models debug karna asaan hota hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'ai-s1', title: { en: 'Multivariable Calculus: partial derivatives, gradient vectors, chain rule', hi: 'Calculus: Gradients, partial derivatives aur chain rule' }, category: 'skill', completed: false },
      { id: 'ai-s2', title: { en: 'Linear Algebra: vector spaces, dot products, SVD, eigenvalues', hi: 'Linear Algebra: Matrices, vectors aur decompositions' }, category: 'skill', completed: false },
      { id: 'ai-s3', title: { en: 'Python NumPy vectorized tensor operations', hi: 'NumPy vectorized mathematical operations' }, category: 'skill', completed: false },
      { id: 'ai-s4', title: { en: 'Git and environment setup (Conda, PyTorch with CUDA)', hi: 'Conda aur PyTorch GPU setup' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'ai-p1', title: { en: 'Implement a 2-layer neural network forward and backward pass from scratch in pure NumPy', hi: 'Pure NumPy me 2-layer neural network scratch se code karein' }, category: 'practice', completed: false },
      { id: 'ai-p2', title: { en: 'Derive gradient descent updates by hand on paper for mean squared error', hi: 'Paper par gradient descent equations manually derive karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-ai-y1q1',
        title: { en: 'From-Scratch NumPy Autograd & MLP Engine (Mini-Micrograd)', hi: 'NumPy Autograd & Multi-Layer Perceptron from Scratch' },
        description: { en: 'A tiny backpropagation engine implementing scalar/tensor values with automatic differentiation and binary classification training.', hi: 'Karpathy ke micrograd jaisa autograd engine jo scratch se backpropagation calculate kare.' },
        technologies: ['Python', 'NumPy', 'Math / Calculus'],
        portfolioImpact: { en: 'Instantly proves you understand backpropagation at a fundamental level, not just calling `.backward()`.', hi: 'Recruiter ko dikhata hai ki aapko deep learning ke underlying mechanics deeply clear hain.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'ai-c1', title: { en: 'Create Hugging Face and Weights & Biases accounts', hi: 'Hugging Face aur Weights & Biases profile set karein' }, category: 'career', completed: false },
      { id: 'ai-c2', title: { en: 'Follow top AI researchers (Andrej Karpathy, Yann LeCun, Andrew Ng) on X/LinkedIn', hi: 'Leading AI researchers ko follow karke trends samjhein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'ai-m1', title: { en: 'Can compute backpropagation gradients by hand without hesitation', hi: 'Backprop calculations clear without confusion' }, category: 'milestone', completed: false },
      { id: 'ai-m2', title: { en: 'Working autograd engine repo starred and documented on GitHub', hi: 'Autograd engine repo live on GitHub' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'ai-r1', title: 'Mathematics for Machine Learning (Free Textbook)', type: 'Book/Article', url: 'https://mml-book.github.io/', free: true, notes: 'The standard academic math reference.' },
      { id: 'ai-r2', title: 'Andrej Karpathy Neural Networks: Zero to Hero', type: 'Course/Video', url: 'https://karpathy.ai/zero-to-hero.html', free: true, notes: 'The single best deep learning video series on the internet.' },
    ],
  },
  {
    id: 'aiml-y1q2',
    year: 1,
    quarter: 2,
    title: { en: 'PyTorch Mastery, Loss Functions & Regularization', hi: 'PyTorch Core, Tensors & Model Training Loop' },
    focus: { en: 'Learn PyTorch mechanics: nn.Module, custom Datasets, DataLoaders, optimizers (Adam, SGD), loss functions, and regularization (Dropout, BatchNorm).', hi: 'PyTorch tensors, training loops, custom datasets, optimizers aur overfitting rokna.' },
    whyItMatters: { en: 'PyTorch is the undisputed lingua franca of modern AI research and engineering. 90%+ of papers and industry models use PyTorch.', hi: 'Modern AI industry me 90%+ model code PyTorch me likha jata hai.' },
    baseHoursPerWeek: 14,
    skills: [
      { id: 'ai-s5', title: { en: 'PyTorch Tensor operations and GPU CUDA acceleration', hi: 'PyTorch Tensors aur CUDA GPU acceleration' }, category: 'skill', completed: false },
      { id: 'ai-s6', title: { en: 'Custom Dataset and DataLoader pipelines with batching', hi: 'DataLoaders aur data augmentation' }, category: 'skill', completed: false },
      { id: 'ai-s7', title: { en: 'Optimizers: SGD, Momentum, AdamW, Learning Rate Schedulers', hi: 'Optimizers (AdamW) aur learning rate schedules' }, category: 'skill', completed: false },
      { id: 'ai-s8', title: { en: 'Overfitting prevention: Dropout, Weight Decay, Batch Normalization', hi: 'Overfitting prevention: Dropout, BatchNorm' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'ai-p3', title: { en: 'Train an MLP on Fashion-MNIST reaching 89%+ test accuracy in PyTorch', hi: 'Fashion-MNIST par 89%+ accuracy ke sath classifier train karein' }, category: 'practice', completed: false },
      { id: 'ai-p4', title: { en: 'Implement a custom learning rate warmup and cosine decay scheduler', hi: 'Cosine learning rate scheduler implement karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-ai-y1q2',
        title: { en: 'Modular PyTorch Model Training & Experiment Tracking Framework', hi: 'PyTorch Modular Training Pipeline with Weights & Biases' },
        description: { en: 'A clean, reproducible model training pipeline with checkpointing, early stopping, and Weights & Biases metrics logging.', hi: 'Production-ready training framework jisme loss curves, metrics aur model weights track hote hain.' },
        technologies: ['PyTorch', 'Weights & Biases (W&B)', 'Python', 'CUDA'],
        portfolioImpact: { en: 'Shows professional ML hygiene rather than messy ad-hoc Jupyter notebooks.', hi: 'Clean production-style training pipeline showcase.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'ai-c3', title: { en: 'Submit your training benchmark to Weights & Biases community dashboard', hi: 'Weights & Biases par experimental results publicly share karein' }, category: 'career', completed: false },
      { id: 'ai-c4', title: { en: 'Write a technical breakdown explaining AdamW vs SGD on LinkedIn', hi: 'AdamW optimizer par short explanatory technical post' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'ai-m3', title: { en: 'Can write a complete PyTorch training loop with validation in 15 minutes', hi: 'Bina reference ke complete training loop likhna' }, category: 'milestone', completed: false },
      { id: 'ai-m4', title: { en: 'Weights & Biases dashboard link displaying live metrics curves', hi: 'Live training tracking dashboard ready' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'ai-r3', title: 'Official PyTorch Deep Learning Tutorials', type: 'Documentation', url: 'https://pytorch.org/tutorials/', free: true, notes: 'The standard PyTorch tutorials.' },
      { id: 'ai-r4', title: 'Deep Learning Specialization (Andrew Ng)', type: 'Course/Video', url: 'https://www.coursera.org/specializations/deep-learning', free: true, notes: 'Gold standard foundational intuition.' },
    ],
  },
  {
    id: 'aiml-y1q3',
    year: 1,
    quarter: 3,
    title: { en: 'Computer Vision (CNNs, ResNets) & Transfer Learning', hi: 'Computer Vision (CNNs, ResNet) & Transfer Learning' },
    focus: { en: 'Understand spatial convolutions, pooling, residual connections (ResNet), transfer learning with pre-trained vision models, and object detection basics.', hi: 'Convolutions, ResNet architecture, pre-trained models aur image classification.' },
    whyItMatters: { en: 'Computer Vision teaches feature extraction and hierarchical representations. ResNet is one of the most cited architectures in history.', hi: 'Vision models se features hierarchy samajh aati hai jo modern multimodal models ka core hai.' },
    baseHoursPerWeek: 14,
    skills: [
      { id: 'ai-s9', title: { en: 'Convolutional layers, kernel sizing, padding, and stride arithmetic', hi: 'CNN layers, kernels, pooling aur feature maps' }, category: 'skill', completed: false },
      { id: 'ai-s10', title: { en: 'ResNet architecture: Skip connections and vanishing gradient solutions', hi: 'ResNet architecture aur skip connections' }, category: 'skill', completed: false },
      { id: 'ai-s11', title: { en: 'Transfer Learning with Torchvision (fine-tuning pre-trained weights)', hi: 'Torchvision pre-trained models fine-tune karna' }, category: 'skill', completed: false },
      { id: 'ai-s12', title: { en: 'Data augmentation: Albumentations / Torchvision v2 transforms', hi: 'Image augmentations aur mixup techniques' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'ai-p5', title: { en: 'Build and train a custom CNN on CIFAR-10 achieving 80%+ accuracy', hi: 'CIFAR-10 par custom CNN train karein' }, category: 'practice', completed: false },
      { id: 'ai-p6', title: { en: 'Fine-tune a pre-trained ResNet-50 on a medical or botanical classification dataset', hi: 'ResNet-50 ko custom dataset par fine-tune karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-ai-y1q3',
        title: { en: 'Real-Time Plant Disease Classifier & Inspection API', hi: 'Real-Time Computer Vision Disease Detection System' },
        description: { en: 'A transfer-learned vision model deployed with FastAPI that accepts leaf photos, classifies 38 plant diseases, and highlights afflicted regions using Grad-CAM heatmaps.', hi: 'ResNet model jisme Grad-CAM heatmap visualization aur fast FastAPI endpoint ho.' },
        technologies: ['PyTorch', 'Torchvision', 'Grad-CAM', 'FastAPI'],
        portfolioImpact: { en: 'Grad-CAM visual explainability showcases deep technical understanding of model decisions.', hi: 'Model explainability (Grad-CAM) dikhana interviewers ko bohot impress karta hai.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'ai-c5', title: { en: 'Host model on Hugging Face Spaces with an interactive Gradio demo', hi: 'Model ko Hugging Face Spaces par live deploy karein' }, category: 'career', completed: false },
      { id: 'ai-c6', title: { en: 'Engage in open discussions on Papers With Code', hi: 'Papers With Code par trending vision research track karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'ai-m5', title: { en: 'Live Hugging Face Space active with interactive image upload demo', hi: 'Working public interactive demo live' }, category: 'milestone', completed: false },
      { id: 'ai-m6', title: { en: 'Clear ability to explain why skip connections prevent gradient dissipation', hi: 'Skip connection mathematical intuition clear' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'ai-r5', title: 'Stanford CS231n: Deep Learning for Computer Vision', type: 'Course/Video', url: 'http://cs231n.stanford.edu/', free: true, notes: 'The premier university CV course.' },
      { id: 'ai-r6', title: 'Hugging Face Spaces & Gradio Documentation', type: 'Documentation', url: 'https://huggingface.co/docs/hub/spaces', free: true, notes: 'Deploying free interactive ML demos.' },
    ],
  },
  {
    id: 'aiml-y1q4',
    year: 1,
    quarter: 4,
    title: { en: 'Natural Language Processing (NLP) & Recurrent Architectures', hi: 'NLP Foundations, Word Embeddings & RNNs' },
    focus: { en: 'Learn text preprocessing, tokenization (BPE, WordPiece), word embeddings (Word2Vec, GloVe), and sequential models (RNNs, LSTMs, GRUs).', hi: 'Text tokenization (BPE), word embeddings (Word2Vec) aur RNN/LSTM models seekhna.' },
    whyItMatters: { en: 'Understanding sequential token handling and embedding spaces is the crucial bridge to modern Transformers and LLMs.', hi: 'Embeddings aur tokens samajhna hi modern LLMs aur ChatGPT-style models ka base foundation hai.' },
    baseHoursPerWeek: 12,
    skills: [
      { id: 'ai-s13', title: { en: 'Tokenization algorithms: Byte-Pair Encoding (BPE), SentencePiece', hi: 'Tokenization algorithms (BPE, SentencePiece)' }, category: 'skill', completed: false },
      { id: 'ai-s14', title: { en: 'Word embeddings and cosine semantic similarity', hi: 'Word embeddings aur semantic vector spaces' }, category: 'skill', completed: false },
      { id: 'ai-s15', title: { en: 'RNNs and LSTMs: Hidden states and gating mechanisms', hi: 'LSTMs/GRUs aur vanishing gradient in sequence' }, category: 'skill', completed: false },
      { id: 'ai-s16', title: { en: 'Text classification and sentiment analysis pipelines', hi: 'Text classification aur sequence modeling' }, category: 'skill', completed: false },
    ],
    practice: [
      { id: 'ai-p7', title: { en: 'Train an LSTM character-level text generator in PyTorch', hi: 'Character-level text generator model train karein' }, category: 'practice', completed: false },
      { id: 'ai-p8', title: { en: 'Visualize word embedding clusters in 2D using t-SNE or UMAP', hi: 't-SNE se word vectors ka 2D visualization plot karein' }, category: 'practice', completed: false },
    ],
    projects: [
      {
        id: 'proj-ai-y1q4',
        title: { en: 'Financial News Sentiment & Volatility Predictor', hi: 'Financial Sentiment Analyzer with Real-Time News Feed' },
        description: { en: 'An NLP pipeline that streams real-time financial news, tokenizes sentiment with a custom trained bidirectional LSTM, and calculates company sentiment scores.', hi: 'Real-time financial news sentiment predictor with semantic embeddings.' },
        technologies: ['PyTorch', 'NLTK / HuggingFace', 'FastAPI', 'Streamlit'],
        portfolioImpact: { en: 'Combines real financial data streaming with custom sequence models.', hi: 'Real-world practical NLP pipeline showcase.' },
        difficulty: 'Intermediate',
        status: 'not-started',
      },
    ],
    careerActions: [
      { id: 'ai-c7', title: { en: 'Apply for summer Machine Learning research internships / startup roles', hi: 'ML internship applications shuru karein' }, category: 'career', completed: false },
      { id: 'ai-c8', title: { en: 'Participate in a competitive Kaggle NLP contest', hi: 'Kaggle NLP competition me participate karein' }, category: 'career', completed: false },
    ],
    milestones: [
      { id: 'ai-m7', title: { en: 'Firm grasp of token embeddings and sequence tensor dimensions (Batch, Seq, Dim)', hi: 'Tensor dimensions (Batch, Seq, Dim) handling clear' }, category: 'milestone', completed: false },
      { id: 'ai-m8', title: { en: 'First year complete: Solid grasp of both Math and Deep Learning mechanics', hi: 'Year 1 complete: Deep Learning foundations verified' }, category: 'milestone', completed: false },
    ],
    resources: [
      { id: 'ai-r7', title: 'Stanford CS224N: Natural Language Processing with Deep Learning', type: 'Course/Video', url: 'https://web.stanford.edu/class/cs224n/', free: true, notes: 'The premier academic NLP course.' },
      { id: 'ai-r8', title: 'Jay Alammar: The Illustrated Word2Vec', type: 'Book/Article', url: 'https://jalammar.github.io/illustrated-word2vec/', free: true, notes: 'Best visual guide to embeddings.' },
    ],
  },

  // Years 2-4: Transformers, LLMs, RAG, Quantization, MLOps, System Design
  ...Array.from({ length: 12 }, (_, i) => {
    const qIndex = i + 5;
    const year = Math.ceil(qIndex / 4);
    const quarter = ((qIndex - 1) % 4) + 1;
    const titles = [
      { en: 'Transformers Architecture & Self-Attention from Scratch', hi: 'Transformers Architecture & Self-Attention Implementation' },
      { en: 'Hugging Face Ecosystem & BERT/RoBERTa Fine-Tuning', hi: 'Hugging Face Ecosystem & Pre-Trained Model Fine-Tuning' },
      { en: 'Generative AI, Large Language Models (LLMs) & Prompt Engineering', hi: 'Generative AI, LLMs & Advanced Prompting' },
      { en: 'First Machine Learning Engineering Internship', hi: 'First MLE Internship & Production Model Training' },
      { en: 'Retrieval-Augmented Generation (RAG) & Vector Databases', hi: 'Production RAG Architecture & Vector Databases' },
      { en: 'LLM Fine-Tuning: LoRA, QLoRA & Instruction Alignment', hi: 'LoRA, QLoRA & Parameter-Efficient Fine-Tuning' },
      { en: 'MLOps: Model Registry, MLflow, Docker & Triton Inference Server', hi: 'MLOps: MLflow, Docker & Low-Latency Model Serving' },
      { en: 'Model Optimization: Quantization (GGUF/AWQ), Pruning & vLLM Serving', hi: 'Model Quantization (4-bit/8-bit), vLLM & High Throughput' },
      { en: 'Machine Learning System Design (RecSys, Search, AI Pipelines)', hi: 'ML System Design (Recommendation Systems & Search AI)' },
      { en: 'AI Technical Interview Loops & Offer Negotiation', hi: 'Final AI/ML Interview Loops & High-Package Negotiation' },
      { en: 'Advanced AI Specialization (Multimodal / Autonomous Agents / RLHF)', hi: 'Advanced Specialization (Multimodal Models & Agents)' },
      { en: 'First 90 Days as ML Engineer & Research-to-Production Impact', hi: 'First 90 Days as ML Engineer & Career Longevity' },
    ];
    const currTitle = titles[i];
    return {
      id: `aiml-y${year}q${quarter}`,
      year,
      quarter,
      title: currTitle,
      focus: {
        en: `Quarter ${quarter} Year ${year} advanced machine learning engineering: ${currTitle.en} with benchmarks and real deployments.`,
        hi: `Year ${year} Quarter ${quarter}: ${currTitle.hi} par deep practical code aur interview readiness.`,
      },
      whyItMatters: {
        en: 'AI companies seek engineers who can bridge research math and production engineering (low latency, high throughput, and cost efficiency).',
        hi: 'Industry me un ML engineers ki bohot demand hai jo model research aur production systems dono handle kar sakein.',
      },
      baseHoursPerWeek: 14,
      skills: [
        { id: `aiml-s${16 + i * 4 + 1}`, title: { en: `Core Mastery: ${currTitle.en}`, hi: `${currTitle.hi} practical concepts` }, category: 'skill' as TaskCategory, completed: false },
        { id: `aiml-s${16 + i * 4 + 2}`, title: { en: 'GPU memory profiling and inference optimization', hi: 'GPU VRAM management aur latency tuning' }, category: 'skill' as TaskCategory, completed: false },
        { id: `aiml-s${16 + i * 4 + 3}`, title: { en: 'Production evaluation metrics and benchmark suites', hi: 'Evaluation metrics aur automated testing' }, category: 'skill' as TaskCategory, completed: false },
        { id: `aiml-s${16 + i * 4 + 4}`, title: { en: 'Cost-performance trade-off modeling', hi: 'Compute cost vs accuracy trade-offs' }, category: 'skill' as TaskCategory, completed: false },
      ],
      practice: [
        { id: `aiml-p${8 + i * 2 + 1}`, title: { en: `Implement benchmark code for ${currTitle.en}`, hi: 'Real-world benchmark tests run karein' }, category: 'practice' as TaskCategory, completed: false },
        { id: `aiml-p${8 + i * 2 + 2}`, title: { en: 'Conduct a peer mock interview on ML architecture trade-offs', hi: 'Peer mock interview me architecture trade-offs defend karein' }, category: 'practice' as TaskCategory, completed: false },
      ],
      projects: [
        {
          id: `proj-aiml-y${year}q${quarter}`,
          title: { en: `Production ${currTitle.en} Capstone System`, hi: `${currTitle.hi} Production System` },
          description: {
            en: `An end-to-end AI project featuring real dataset training, model compression, low-latency API serving, and benchmark evaluation.`,
            hi: `Production AI system jisme model training, quantization, fast serving aur live demo interface shamil ho.`,
          },
          technologies: ['PyTorch', 'Hugging Face', 'FastAPI / vLLM', 'Docker'],
          portfolioImpact: { en: 'Proves high-level ML engineering competence beyond API calls.', hi: 'Serious AI engineering capability demonstrate karta hai.' },
          difficulty: 'Advanced' as const,
          status: 'not-started' as const,
        },
      ],
      careerActions: [
        { id: `aiml-c${8 + i * 2 + 1}`, title: { en: 'Reach out to 15 ML team leads at top tech companies for referrals', hi: 'ML leads se connect karke referrals request karein' }, category: 'career' as TaskCategory, completed: false },
        { id: `aiml-c${8 + i * 2 + 2}`, title: { en: 'Publish project write-up or open-source weights on Hugging Face', hi: 'Project documentation ya model weights publish karein' }, category: 'career' as TaskCategory, completed: false },
      ],
      milestones: [
        { id: `aiml-m${8 + i * 2 + 1}`, title: { en: `Certified readiness in ${currTitle.en}`, hi: 'Domain interview preparedness certified' }, category: 'milestone' as TaskCategory, completed: false },
        { id: `aiml-m${8 + i * 2 + 2}`, title: { en: 'Public model / demo repository live with 100+ views or downloads', hi: 'Public repository active with documentation' }, category: 'milestone' as TaskCategory, completed: false },
      ],
      resources: [
        { id: `aiml-r${8 + i * 2 + 1}`, title: 'Hugging Face NLP & Deep Learning Course', type: 'Course/Video', url: 'https://huggingface.co/learn', free: true, notes: 'The standard modern NLP course.' },
        { id: `aiml-r${8 + i * 2 + 2}`, title: 'Chip Huyen: Designing Machine Learning Systems', type: 'Book/Article', url: 'https://chiphuyen.com/book-ml-systems/', free: true, notes: 'The holy grail of production ML systems.' },
      ],
    };
  }),
];
