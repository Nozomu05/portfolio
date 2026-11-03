import type { Translations } from './en'

export const fr: Translations = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expériences',
    education: 'Formation',
    certifications: 'Certifications',
    projects: 'Projets',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Tran Minh Hoang Anh',
    title: 'Développeur Full Stack & Ingénieur IA',
    subtitle:
      "Diplômé de l'EFREI Paris et stagiaire IA chez FPT Software, spécialisé dans le développement web, les solutions IA et la cybersécurité.",
    cta_projects: 'Voir mes projets',
    cta_contact: 'Me contacter',
    scroll: 'défiler',
  },
  about: {
    title: 'À propos',
    subtitle: "À l'intersection du développement web et de l'intelligence artificielle.",
    p1: "Jeune diplômé d'un Bachelor Ingénierie et Numérique à l'EFREI Paris et actuellement stagiaire IA chez FPT Software, je possède une expérience pratique dans le développement d'applications web, les tests de pénétration et le développement de solutions IA en production (LLM, RAG, agents).",
    p2: "Passionné par les nouvelles technologies, je cherche à mettre mes compétences au service d'une entreprise innovante pour créer des produits qui ont un impact réel.",
    languages_title: 'Langues parlées',
    languages: [
      { lang: 'Français', level: 'Courant' },
      { lang: 'Anglais', level: 'Courant' },
      { lang: 'Vietnamien', level: 'Courant' },
      { lang: 'Espagnol', level: 'Débutant' },
    ],
    stats: [
      { value: '3+', label: "Années de code" },
      { value: '4', label: 'Postes professionnels' },
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
        role: 'Stagiaire en Intelligence Artificielle',
        company: 'FPT Software',
        location: 'Hô Chi Minh-Ville, Vietnam',
        period: 'Depuis Oct 2026',
        current: true,
        bullets: ["Développement de solutions IA et d'automatisation avec Microsoft Copilot Studio et Power Automate"],
      },
      {
        role: 'Ingénieur IA Appliquée',
        company: 'Département de recherche ARTEMIS',
        location: 'Évry-Courcouronnes, Paris',
        period: 'Sep 2025 – Août 2026',
        current: false,
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
        degree: 'Programme d\'échange — Web Page, Digital/Multimedia & Information Resources Design',
        school: 'Asia Pacific University of Technology and Innovation (APU / APIIT)',
        location: 'Kuala Lumpur, Malaisie',
        period: 'Avr 2025 – Juin 2025',
        detail:
          "Programme d'échange durant lequel j'ai perfectionné mon anglais et appris à utiliser des outils de présentation importants ainsi que des outils de chatbot IA no-code (Botpress, Microsoft Power BI).",
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
  certifications: {
    title: 'Certifications',
    subtitle: 'Licences et certifications.',
    issued: 'Délivré en',
    expires: 'Expire en',
    credential_id: 'ID de certification',
    view_credential: 'Voir la certification',
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
        issued: 'Juil 2026',
        expires: 'Juil 2028',
        credentialId: '6879701452',
        url: '',
      },
      {
        name: 'IELTS Academic — Overall 8.0 (C1)',
        issuer: 'British Council',
        issued: 'Mars 2026',
        expires: 'Mars 2028',
        credentialId: '25FR005036TRAM585A',
        url: '',
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
        title: 'Wuwa Wiki — Base de données Wuthering Waves (En cours)',
        description:
          "Une base de données et un guide de builds non officiels pour Wuthering Waves, construits à partir des fichiers de données du jeu. Couvre les personnages (multiplicateurs de compétences à chaque niveau, chaînes de résonance, coûts en matériaux), les armes et les échos, avec recherche et filtres, ainsi que des calculateurs de valeur critique, de coût des échos et de dégâts. Un pipeline TypeScript charge les données du jeu dans PostgreSQL, et un LLM local via Ollama suggère des builds d'échos lorsqu'aucune recommandation manuelle n'existe.",
        tech: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'Docker', 'Ollama'],
        github: 'https://github.com/Nozomu05/Wuthering-Waves-Website',
        demo: '',
      },
      {
        title: 'LLMQwen — Chatbot RAG',
        description:
          "Un chatbot RAG multi-agents hébergé localement, construit avec Qwen3-14B-AWQ et servi par vLLM sur une seule RTX 5090. L'optimisation du pipeline de génération a réduit le temps de première réponse (TTFT) de 45s à 7s. Des agents à personas dédiés accèdent chacun à leurs propres documents (PDF, Word, PowerPoint et plus), avec récupération HyDE, re-ranking par cross-encoder, recherche web optionnelle via SearXNG, et streaming SSE temps réel avec citations des sources.",
        tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'vLLM', 'Qwen3-14B-AWQ', 'SearXNG', 'SQLite', 'Docker', 'Hugging Face'],
        github: 'https://github.com/Nozomu05/LLMChatbot',
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
