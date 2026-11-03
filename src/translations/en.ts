export const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    certifications: 'Certifications',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Tran Minh Hoang Anh',
    title: 'Full Stack Developer & AI Engineer',
    subtitle:
      'EFREI Paris graduate and AI Intern at FPT Software, specialised in web development, AI solutions, and cybersecurity.',
    cta_projects: 'View Projects',
    cta_contact: 'Get in Touch',
    scroll: 'scroll',
  },
  about: {
    title: 'About Me',
    subtitle: 'Building at the intersection of web development and artificial intelligence.',
    p1: "A recent graduate of the Bachelor's in Engineering & Digital Technology at EFREI Paris and now an AI Intern at FPT Software, I have hands-on experience building web applications, conducting penetration tests, and developing production-ready AI solutions (LLMs, RAG, agents).",
    p2: "I'm passionate about emerging technologies and always looking for opportunities to apply my skills to innovative products that make a real impact.",
    languages_title: 'Spoken Languages',
    languages: [
      { lang: 'French', level: 'Fluent' },
      { lang: 'English', level: 'Fluent' },
      { lang: 'Vietnamese', level: 'Fluent' },
      { lang: 'Spanish', level: 'Beginner' },
    ],
    stats: [
      { value: '3+', label: 'Years of coding' },
      { value: '4', label: 'Professional roles' },
      { value: '70+', label: 'Technologies' },
      { value: '2', label: 'Projects shipped' },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies and tools I work with.',
    categories: {
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      ai: 'AI & LLM',
      databases: 'Databases',
      cloud: 'Cloud & DevOps',
      architecture: 'Architecture & APIs',
      security: 'Security',
      other: 'Other Tools',
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'My professional journey.',
    present: 'Present',
    items: [
      {
        role: 'Artificial Intelligence Intern',
        company: 'FPT Software',
        location: 'Ho Chi Minh City, Vietnam',
        period: 'Since Oct 2026',
        current: true,
        bullets: ['Building AI and automation solutions with Microsoft Copilot Studio and Power Automate'],
      },
      {
        role: 'Applied AI Engineer',
        company: 'ARTEMIS Research Department',
        location: 'Evry-Courcouronnes, Paris',
        period: 'Sep 2025 – Aug 2026',
        current: false,
        bullets: [
          'Comparative evaluation of LLM models based on R&D department resources',
          'Architecture design, model integration and conversation management',
          'Chatbot deployment and integration into the company website',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'Duy Duc Investment Education',
        location: 'Ho Chi Minh City, Vietnam',
        period: 'Jun 2025 – Aug 2025',
        current: false,
        bullets: [
          'Studied LLM model principles and optimisation strategies',
          'Developed a cross-platform application for a virtual teaching platform',
        ],
      },
      {
        role: 'Pentester',
        company: 'Ernst & Young',
        location: 'Ho Chi Minh City, Vietnam',
        period: 'Apr 2024 – Jun 2024',
        current: false,
        bullets: [
          'Used Burp Suite to perform penetration testing on client systems',
          'Wrote detailed reports documenting vulnerabilities and remediation steps',
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    subtitle: 'Academic background.',
    items: [
      {
        degree: 'Bachelor of Engineering & Digital Technology',
        school: 'EFREI',
        location: 'Paris, France',
        period: '2023 – 2026',
        detail: 'Full stack web development specialisation',
      },
      {
        degree: 'Exchange Program — Web Page, Digital/Multimedia & Information Resources Design',
        school: 'Asia Pacific University of Technology and Innovation (APU / APIIT)',
        location: 'Kuala Lumpur, Malaysia',
        period: 'Apr 2025 – Jun 2025',
        detail:
          'Exchange program where I developed my English and learnt how to use important presentation tools as well as no-code AI chatbot tools (Botpress, Microsoft Power BI).',
      },
      {
        degree: 'French International Baccalaureate',
        school: 'Lycée Français International Marguerite Duras',
        location: 'Ho Chi Minh City, Vietnam',
        period: '2020 – 2023',
        detail: 'British international section — Maths & Computer Science (NSI)',
      },
    ],
  },
  certifications: {
    title: 'Certifications',
    subtitle: 'Licenses and certifications.',
    issued: 'Issued',
    expires: 'Expires',
    credential_id: 'Credential ID',
    view_credential: 'Show credential',
    items: [
      {
        name: 'Claude Certified Associate — Foundations',
        issuer: 'Anthropic',
        issued: 'Oct 2026',
        expires: 'Oct 2027',
        credentialId: '',
        url: 'https://www.credly.com/badges/bf63079c-8754-4175-9068-397586bcd601',
      },
      {
        name: 'TOEIC Listening and Reading — 970/990',
        issuer: 'ETS',
        issued: 'Jul 2026',
        expires: 'Jul 2028',
        credentialId: '6879701452',
        url: '',
      },
      {
        name: 'IELTS Academic — Overall 8.0 (C1)',
        issuer: 'British Council',
        issued: 'Mar 2026',
        expires: 'Mar 2028',
        credentialId: '25FR005036TRAM585A',
        url: '',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Things I have built.',
    view_github: 'View on GitHub',
    view_demo: 'Live Demo',
    items: [
      {
        title: 'Wuwa Wiki — Wuthering Waves Database (In Progress)',
        description:
          "A fan-made database and build guide for Wuthering Waves, built from the game's own data files. Covers characters (skill multipliers at every level, resonance chains, material costs), weapons and echoes, with search and filtering, plus calculators for crit value, echo costs and damage. A TypeScript pipeline loads the game data into PostgreSQL, and a local LLM via Ollama suggests echo builds where no hand-curated pick exists.",
        tech: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'Docker', 'Ollama'],
        github: 'https://github.com/Nozomu05/Wuthering-Waves-Website',
        demo: '',
      },
      {
        title: 'LLMQwen — RAG Chatbot',
        description:
          'A locally-hosted multi-agent RAG chatbot built on Qwen3-14B-AWQ and served with vLLM on a single RTX 5090. Optimising the generation pipeline cut time-to-first-token from 45s to 7s. Persona-based agents each get isolated document access across PDFs, Word, PowerPoint and more, with HyDE retrieval, cross-encoder re-ranking, optional live web search via SearXNG, and real-time SSE streaming with source citations.',
        tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'vLLM', 'Qwen3-14B-AWQ', 'SearXNG', 'SQLite', 'Docker', 'Hugging Face'],
        github: 'https://github.com/Nozomu05/LLMChatbot',
        demo: '',
      },
      {
        title: 'Voice-in Voice-out AI Chatbot',
        description:
          'A mobile AI assistant enabling natural voice conversations on iOS and Android. Features real-time speech recognition powered by Google STT, GPT-driven responses, and TTS output.',
        tech: ['React Native', 'TypeScript', 'Python', 'FastAPI', 'OpenAI GPT', 'Google STT/TTS', 'FFmpeg'],
        github: 'https://github.com/Nozomu05/voice-in-voice-out-AI-chatbot-app',
        demo: '',
      },
      {
        title: 'Web Crawler',
        description:
          'A full-stack web crawler that turns entire websites into clean, structured Markdown for chatbot and RAG pipelines. A Python/FastAPI microservice renders JavaScript-heavy pages via crawl4ai and Playwright, while the Node.js service handles breadth-first crawling, dedup filtering, and Markdown conversion, all driven from a real-time web UI with live progress.',
        tech: ['Node.js', 'Express', 'Python', 'FastAPI', 'crawl4ai', 'Playwright', 'Cheerio', 'Turndown', 'p-limit'],
        github: 'https://github.com/Nozomu05/webcrawler',
        demo: '',
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    subtitle: 'Open to full-time opportunities, internships, and collaborations.',
    email_label: 'Email',
    linkedin_label: 'LinkedIn',
    phone_label: 'Phone',
    github_label: 'GitHub',
    copy_success: 'Copied!',
  },
  footer: {
    built_with: 'Built with React & TypeScript',
    rights: 'All rights reserved.',
  },
}

export type Translations = typeof en
