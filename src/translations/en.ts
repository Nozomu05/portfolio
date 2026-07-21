export const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Tran Minh Hoang Anh',
    title: 'Full Stack Developer & AI Engineer',
    subtitle:
      '3rd-year Engineering student at EFREI Paris, specialised in web development, AI solutions, and cybersecurity.',
    cta_projects: 'View Projects',
    cta_contact: 'Get in Touch',
    scroll: 'scroll',
  },
  about: {
    title: 'About Me',
    subtitle: 'Building at the intersection of web development and artificial intelligence.',
    p1: "Currently in my 3rd year of Bachelor's in Engineering & Digital Technology at EFREI Paris, I have hands-on experience building web applications, conducting penetration tests, and developing production-ready AI solutions.",
    p2: "I'm passionate about emerging technologies and always looking for opportunities to apply my skills to innovative products that make a real impact.",
    languages_title: 'Spoken Languages',
    languages: [
      { lang: 'French', level: 'Fluent' },
      { lang: 'English', level: 'Fluent' },
      { lang: 'Vietnamese', level: 'Native' },
      { lang: 'Spanish', level: 'Beginner' },
    ],
    stats: [
      { value: '3+', label: 'Years of coding' },
      { value: '3', label: 'Professional roles' },
      { value: '10+', label: 'Technologies' },
      { value: '2', label: 'Projects shipped' },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies and tools I work with.',
    categories: {
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      cloud: 'Cloud & DevOps',
      other: 'Other Tools',
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'My professional journey.',
    present: 'Present',
    items: [
      {
        role: 'Applied AI Engineer',
        company: 'ARTEMIS Research Department',
        location: 'Evry-Courcouronnes, Paris',
        period: 'Sep 2025 – Aug 2026',
        current: true,
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
        degree: 'French International Baccalaureate',
        school: 'Lycée Français International Marguerite Duras',
        location: 'Ho Chi Minh City, Vietnam',
        period: '2020 – 2023',
        detail: 'British international section — Maths & Computer Science (NSI)',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Things I have built.',
    view_github: 'View on GitHub',
    items: [
      {
        title: 'LLMQwen — RAG Chatbot',
        description:
          'A locally-hosted multi-agent RAG chatbot built on Qwen3-14B-AWQ. Persona-based agents each get isolated document access across PDFs, Word, PowerPoint and more, with cross-encoder reranking, optional live web search via SearXNG, and word-by-word streaming with source citations.',
        tech: ['Python', 'FastAPI', 'vLLM', 'Qwen3-14B-AWQ', 'SearXNG', 'SQLite', 'Docker', 'Hugging Face'],
        github: 'https://github.com/Nozomu05/chatbot',
      },
      {
        title: 'Voice-in Voice-out AI Chatbot',
        description:
          'A mobile AI assistant enabling natural voice conversations on iOS and Android. Features real-time speech recognition powered by Google STT, GPT-driven responses, and TTS output.',
        tech: ['React Native', 'TypeScript', 'Python', 'FastAPI', 'OpenAI GPT', 'Google STT/TTS', 'FFmpeg'],
        github: 'https://github.com/Nozomu05/voice-in-voice-out-AI-chatbot-app',
      },
      {
        title: 'Web Crawler',
        description:
          'A full-stack web crawler that turns entire websites into clean, structured Markdown for chatbot and RAG pipelines. A Python/FastAPI microservice renders JavaScript-heavy pages via crawl4ai and Playwright, while the Node.js service handles breadth-first crawling, dedup filtering, and Markdown conversion, all driven from a real-time web UI with live progress.',
        tech: ['Node.js', 'Express', 'Python', 'FastAPI', 'crawl4ai', 'Playwright', 'Cheerio', 'Turndown', 'p-limit'],
        github: 'https://github.com/Nozomu05/webcrawler',
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
