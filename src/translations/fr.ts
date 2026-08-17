import type { Translations } from './en'

export const fr: Translations = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expériences',
    education: 'Formation',
    projects: 'Projets',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Tran Minh Hoang Anh',
    title: 'Développeur Full Stack & Ingénieur IA',
    subtitle:
      "Étudiant en 3ème année de Bachelor Ingénierie et Numérique à l'EFREI Paris, spécialisé dans le développement web, les solutions IA et la cybersécurité.",
    cta_projects: 'Voir mes projets',
    cta_contact: 'Me contacter',
    scroll: 'défiler',
  },
  about: {
    title: 'À propos',
    subtitle: "À l'intersection du développement web et de l'intelligence artificielle.",
    p1: "Actuellement en 3ème année de Bachelor Ingénierie et Numérique à l'EFREI Paris, je possède une expérience pratique dans le développement d'applications web, les tests de pénétration et le développement de solutions IA en production.",
    p2: "Passionné par les nouvelles technologies, je cherche à mettre mes compétences au service d'une entreprise innovante pour créer des produits qui ont un impact réel.",
    languages_title: 'Langues parlées',
    languages: [
      { lang: 'Français', level: 'Courant' },
      { lang: 'Anglais', level: 'Courant' },
      { lang: 'Vietnamien', level: 'Natif' },
      { lang: 'Espagnol', level: 'Débutant' },
    ],
    stats: [
      { value: '3+', label: "Années de code" },
      { value: '3', label: 'Postes professionnels' },
      { value: '10+', label: 'Technologies' },
      { value: '2', label: 'Projets livrés' },
    ],
  },
  skills: {
    title: 'Compétences',
    subtitle: 'Technologies et outils que j\'utilise.',
    categories: {
      languages: 'Langages',
      frameworks: 'Frameworks & Librairies',
      cloud: 'Cloud & DevOps',
      other: 'Autres outils',
    },
  },
  experience: {
    title: 'Expériences',
    subtitle: 'Mon parcours professionnel.',
    present: 'Présent',
    items: [
      {
        role: 'Ingénieur IA Appliquée',
        company: 'Département de recherche ARTEMIS',
        location: 'Évry-Courcouronnes, Paris',
        period: 'Sep 2025 – Août 2026',
        current: true,
        bullets: [
          'Évaluation comparative de modèles LLM en fonction des ressources du département R&D',
          "Conception de l'architecture, intégration du modèle et gestion des échanges conversationnels",
          "Déploiement et intégration du chatbot dans le site web de l'entreprise",
        ],
      },
      {
        role: 'Développeur Full Stack',
        company: 'Duy Duc Investment Education',
        location: 'Hô Chi Minh-Ville, Vietnam',
        period: 'Juin 2025 – Août 2025',
        current: false,
        bullets: [
          "Étude des principes du modèle LLM et des stratégies d'optimisation",
          "Développement d'une application multiplateforme pour l'enseignement virtuel",
        ],
      },
      {
        role: 'Pentester',
        company: 'Ernst & Young',
        location: 'Hô Chi Minh-Ville, Vietnam',
        period: 'Avr 2024 – Juin 2024',
        current: false,
        bullets: [
          'Utilisation de Burp Suite pour réaliser des tests de pénétration sur des systèmes clients',
          'Rédaction de rapports détaillant les vulnérabilités et les mesures correctives',
        ],
      },
    ],
  },
  education: {
    title: 'Formation',
    subtitle: 'Parcours académique.',
    items: [
      {
        degree: 'Bachelor Ingénierie et Numérique',
        school: 'EFREI',
        location: 'Paris, France',
        period: '2023 – 2026',
        detail: 'Spécialisation développement full stack pour applications web',
      },
      {
        degree: 'Baccalauréat Français International',
        school: 'Lycée Français International Marguerite Duras',
        location: 'Hô Chi Minh-Ville, Vietnam',
        period: '2020 – 2023',
        detail: 'Section internationale britannique — Maths et NSI',
      },
    ],
  },
  projects: {
    title: 'Projets',
    subtitle: "Ce que j'ai construit.",
    view_github: 'Voir sur GitHub',
    view_demo: 'Démo en ligne',
    items: [
      {
        title: 'LLMQwen — Chatbot RAG',
        description:
          "Un chatbot RAG multi-agents hébergé localement, construit avec Qwen3-14B-AWQ. Des agents à personas dédiés accèdent chacun à leurs propres documents (PDF, Word, PowerPoint et plus), avec reranking par cross-encoder, recherche web optionnelle via SearXNG, et streaming mot-par-mot avec citations des sources.",
        tech: ['Python', 'FastAPI', 'vLLM', 'Qwen3-14B-AWQ', 'SearXNG', 'SQLite', 'Docker', 'Hugging Face'],
        github: 'https://github.com/Nozomu05/chatbot',
        demo: '',
      },
      {
        title: 'Chatbot IA Voix-Entrée Voix-Sortie',
        description:
          "Un assistant IA mobile permettant des conversations vocales naturelles sur iOS et Android. Reconnaissance vocale en temps réel via Google STT, réponses GPT et synthèse vocale.",
        tech: ['React Native', 'TypeScript', 'Python', 'FastAPI', 'OpenAI GPT', 'Google STT/TTS', 'FFmpeg'],
        github: 'https://github.com/Nozomu05/voice-in-voice-out-AI-chatbot-app',
        demo: '',
      },
      {
        title: 'Web Crawler',
        description:
          "Un crawler web full-stack qui transforme des sites entiers en Markdown propre et structuré pour des pipelines chatbot et RAG. Un microservice Python/FastAPI restitue les pages riches en JavaScript via crawl4ai et Playwright, tandis que le service Node.js gère le parcours en largeur, le filtrage des doublons et la conversion Markdown, le tout piloté depuis une interface web en temps réel.",
        tech: ['Node.js', 'Express', 'Python', 'FastAPI', 'crawl4ai', 'Playwright', 'Cheerio', 'Turndown', 'p-limit'],
        github: 'https://github.com/Nozomu05/webcrawler',
        demo: '',
      },
    ],
  },
  contact: {
    title: 'Restons en contact',
    subtitle: 'Disponible pour des emplois, stages et collaborations.',
    email_label: 'Email',
    linkedin_label: 'LinkedIn',
    phone_label: 'Téléphone',
    github_label: 'GitHub',
    copy_success: 'Copié !',
  },
  footer: {
    built_with: 'Construit avec React & TypeScript',
    rights: 'Tous droits réservés.',
  },
}
