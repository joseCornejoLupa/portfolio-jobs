import type { Lang, SectionId } from "./data";

export const ui: Record<Lang, {
  viewAs: string;
  hero: {
    techStack: string;
    softSkills: string;
    getInTouch: string;
    viewExperience: string;
    patents: string;
  };
  about: {
    eyebrow: string;
    tagRemote: string;
    tagInternational: string;
    tagTrilingual: string;
    tagAgile: string;
    education: string;
    certifications: string;
    statYearsValue: string;
    statYearsLabel: string;
    statPatentsValue: string;
    statPatentsLabel: string;
    statLanguagesValue: string;
    statLanguagesLabel: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    viewCaseStudy: string;
    hideCaseStudy: string;
    architecture: string;
  };
  research: {
    eyebrow: string;
    title: string;
    subtitle: string;
    contributions: string;
    architecture: string;
    outcome: string;
    layerLabels: Record<string, string>;
  };
  patents: {
    eyebrow: string;
    title: string;
    subtitle: string;
    registration: string;
  };
  articles: {
    eyebrow: string;
    title: string;
    subtitle: string;
    read: string;
    comingSoon: string;
    comingSoonSub: string;
  };
  moodle: {
    eyebrow: string;
    title: string;
    subtitle: string;
    features: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    sendEmail: string;
    availableRemote: string;
  };
  sectionLabels: Record<SectionId, string>;
}> = {
  en: {
    viewAs: "View as:",
    hero: {
      techStack: "Tech Stack",
      softSkills: "Soft Skills",
      getInTouch: "Get in touch",
      viewExperience: "View experience",
      patents: "Patents",
    },
    about: {
      eyebrow: "About",
      tagRemote: "Remote-first experience",
      tagInternational: "International background",
      tagTrilingual: "Trilingual",
      tagAgile: "Agile/SCRUM",
      education: "Education",
      certifications: "Certifications",
      statYearsValue: "4+",
      statYearsLabel: "Years experience",
      statPatentsValue: "2",
      statPatentsLabel: "French patents",
      statLanguagesValue: "3",
      statLanguagesLabel: "Languages",
    },
    experience: {
      eyebrow: "Experience",
      title: "Work History",
      viewCaseStudy: "View case study",
      hideCaseStudy: "Hide case study",
      architecture: "Architecture",
    },
    research: {
      eyebrow: "Research & Applied Systems",
      title: "Research Projects",
      subtitle: "Projects developed within university research environments. Source code is proprietary to the institutions — architecture and outcomes are documented below.",
      contributions: "Key Contributions",
      architecture: "System Architecture",
      outcome: "Outcome",
      layerLabels: {
        "Frontend Layer": "Frontend Layer",
        "Backend Layer": "Backend Layer",
        "Data Layer": "Data Layer",
        "Infrastructure": "Infrastructure",
        "Visualization Layer": "Visualization Layer",
        "Application Layer": "Application Layer",
      },
    },
    patents: {
      eyebrow: "Intellectual Property",
      title: "Patents",
      subtitle: "Two software and solution patents registered in France in 2025, resulting from applied research conducted at UPPA.",
      registration: "Registration",
    },
    articles: {
      eyebrow: "Publications",
      title: "Articles & Publications",
      subtitle: "Specialized articles, conference papers, and technical publications.",
      read: "Read",
      comingSoon: "Publications coming soon",
      comingSoonSub: "Articles and papers will appear here when published.",
    },
    moodle: {
      eyebrow: "EdTech",
      title: "Moodle Plugins",
      subtitle: "Plugins and tools developed for Moodle LMS environments in French university research laboratories. All deployed in active academic settings.",
      features: "Features",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      subtitle: "Open to remote opportunities, research collaborations, and interesting engineering challenges. Based in Arequipa, Peru — available globally.",
      sendEmail: "Send email",
      availableRemote: "Available for remote work worldwide",
    },
    sectionLabels: {
      hero: "Home",
      about: "About",
      experience: "Experience",
      research: "Research",
      moodle: "Moodle Plugins",
      patents: "Patents",
      articles: "Articles",
      contact: "Contact",
    },
  },

  es: {
    viewAs: "Ver como:",
    hero: {
      techStack: "Stack Tecnológico",
      softSkills: "Habilidades Blandas",
      getInTouch: "Contáctame",
      viewExperience: "Ver experiencia",
      patents: "Patentes",
    },
    about: {
      eyebrow: "Sobre mí",
      tagRemote: "Experiencia en trabajo remoto",
      tagInternational: "Trayectoria internacional",
      tagTrilingual: "Trilingüe",
      tagAgile: "Agile/SCRUM",
      education: "Educación",
      certifications: "Certificaciones",
      statYearsValue: "4+",
      statYearsLabel: "Años de experiencia",
      statPatentsValue: "2",
      statPatentsLabel: "Patentes francesas",
      statLanguagesValue: "3",
      statLanguagesLabel: "Idiomas",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Historial Laboral",
      viewCaseStudy: "Ver caso de estudio",
      hideCaseStudy: "Ocultar caso de estudio",
      architecture: "Arquitectura",
    },
    research: {
      eyebrow: "Investigación y Sistemas Aplicados",
      title: "Proyectos de Investigación",
      subtitle: "Proyectos desarrollados en entornos universitarios de investigación. El código fuente es propiedad de las instituciones — la arquitectura y los resultados están documentados a continuación.",
      contributions: "Contribuciones Clave",
      architecture: "Arquitectura del Sistema",
      outcome: "Resultado",
      layerLabels: {
        "Frontend Layer": "Capa Frontend",
        "Backend Layer": "Capa Backend",
        "Data Layer": "Capa de Datos",
        "Infrastructure": "Infraestructura",
        "Visualization Layer": "Capa de Visualización",
        "Application Layer": "Capa de Aplicación",
      },
    },
    patents: {
      eyebrow: "Propiedad Intelectual",
      title: "Patentes",
      subtitle: "Dos patentes de software y solución registradas en Francia en 2025, resultado de la investigación aplicada realizada en la UPPA.",
      registration: "Registro",
    },
    articles: {
      eyebrow: "Publicaciones",
      title: "Artículos y Publicaciones",
      subtitle: "Artículos especializados, ponencias en congresos y publicaciones técnicas.",
      read: "Leer",
      comingSoon: "Publicaciones próximamente",
      comingSoonSub: "Los artículos y ponencias aparecerán aquí cuando sean publicados.",
    },
    moodle: {
      eyebrow: "EdTech",
      title: "Plugins de Moodle",
      subtitle: "Plugins y herramientas desarrollados para entornos Moodle LMS en laboratorios de investigación universitaria francesa. Todos desplegados en entornos académicos activos.",
      features: "Características",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos",
      subtitle: "Abierto a oportunidades remotas, colaboraciones en investigación y retos de ingeniería interesantes. Basado en Arequipa, Perú — disponible globalmente.",
      sendEmail: "Enviar correo",
      availableRemote: "Disponible para trabajo remoto en todo el mundo",
    },
    sectionLabels: {
      hero: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      research: "Investigación",
      moodle: "Plugins Moodle",
      patents: "Patentes",
      articles: "Artículos",
      contact: "Contacto",
    },
  },

  fr: {
    viewAs: "Voir en tant que :",
    hero: {
      techStack: "Stack Technique",
      softSkills: "Compétences Transversales",
      getInTouch: "Me contacter",
      viewExperience: "Voir l'expérience",
      patents: "Brevets",
    },
    about: {
      eyebrow: "À propos",
      tagRemote: "Expérience en télétravail",
      tagInternational: "Parcours international",
      tagTrilingual: "Trilingue",
      tagAgile: "Agile/SCRUM",
      education: "Formation",
      certifications: "Certifications",
      statYearsValue: "4+",
      statYearsLabel: "Ans d'expérience",
      statPatentsValue: "2",
      statPatentsLabel: "Brevets français",
      statLanguagesValue: "3",
      statLanguagesLabel: "Langues",
    },
    experience: {
      eyebrow: "Expérience",
      title: "Parcours Professionnel",
      viewCaseStudy: "Voir l'étude de cas",
      hideCaseStudy: "Masquer l'étude de cas",
      architecture: "Architecture",
    },
    research: {
      eyebrow: "Recherche & Systèmes Appliqués",
      title: "Projets de Recherche",
      subtitle: "Projets développés dans des environnements universitaires de recherche. Le code source est propriété des institutions — l'architecture et les résultats sont documentés ci-dessous.",
      contributions: "Contributions Clés",
      architecture: "Architecture du Système",
      outcome: "Résultat",
      layerLabels: {
        "Frontend Layer": "Couche Frontend",
        "Backend Layer": "Couche Backend",
        "Data Layer": "Couche de Données",
        "Infrastructure": "Infrastructure",
        "Visualization Layer": "Couche de Visualisation",
        "Application Layer": "Couche d'Application",
      },
    },
    patents: {
      eyebrow: "Propriété Intellectuelle",
      title: "Brevets",
      subtitle: "Deux brevets logiciels et de solution déposés en France en 2025, issus de la recherche appliquée menée à l'UPPA.",
      registration: "Enregistrement",
    },
    articles: {
      eyebrow: "Publications",
      title: "Articles & Publications",
      subtitle: "Articles spécialisés, communications de conférences et publications techniques.",
      read: "Lire",
      comingSoon: "Publications à venir",
      comingSoonSub: "Les articles et communications apparaîtront ici lors de leur publication.",
    },
    moodle: {
      eyebrow: "EdTech",
      title: "Plugins Moodle",
      subtitle: "Plugins et outils développés pour des environnements Moodle LMS dans des laboratoires de recherche universitaire français. Tous déployés dans des contextes académiques actifs.",
      features: "Fonctionnalités",
    },
    contact: {
      eyebrow: "Contact",
      title: "Travaillons ensemble",
      subtitle: "Ouvert aux opportunités à distance, aux collaborations de recherche et aux défis d'ingénierie intéressants. Basé à Arequipa, Pérou — disponible mondialement.",
      sendEmail: "Envoyer un email",
      availableRemote: "Disponible pour le travail à distance dans le monde entier",
    },
    sectionLabels: {
      hero: "Accueil",
      about: "À propos",
      experience: "Expérience",
      research: "Recherche",
      moodle: "Plugins Moodle",
      patents: "Brevets",
      articles: "Articles",
      contact: "Contact",
    },
  },
};
