export type Lang = "en" | "es" | "fr";
export type Role = "software-engineer" | "research-engineer" | "edtech-engineer";

type T = { en: string; es: string; fr: string };
type TA = { en: string[]; es: string[]; fr: string[] };

// ---------------------------------------------------------------------------
// Roles
// ---------------------------------------------------------------------------
export const roles: { id: Role; label: T; description: T }[] = [
  {
    id: "software-engineer",
    label: { en: "Software Engineer", es: "Ingeniero de Software", fr: "Ingénieur Logiciel" },
    description: {
      en: "Full-stack development, scalable systems, cloud integration",
      es: "Desarrollo full-stack, sistemas escalables, integración cloud",
      fr: "Développement full-stack, systèmes évolutifs, intégration cloud",
    },
  },
  {
    id: "research-engineer",
    label: { en: "Research Engineer", es: "Ingeniero de Investigación", fr: "Ingénieur de Recherche" },
    description: {
      en: "Applied research, R&D systems, scientific computing",
      es: "Investigación aplicada, sistemas I+D, computación científica",
      fr: "Recherche appliquée, systèmes R&D, calcul scientifique",
    },
  },
  {
    id: "edtech-engineer",
    label: { en: "EdTech Engineer", es: "Ingeniero EdTech", fr: "Ingénieur EdTech" },
    description: {
      en: "Educational platforms, LMS development, learning systems",
      es: "Plataformas educativas, desarrollo LMS, sistemas de aprendizaje",
      fr: "Plateformes éducatives, développement LMS, systèmes d'apprentissage",
    },
  },
];

// ---------------------------------------------------------------------------
// Personal info
// ---------------------------------------------------------------------------
export const personalInfo = {
  name: "Jose Manuel Cornejo Lupa",
  title: "Software Engineer",
  location: "Arequipa, Peru",
  email: "jose.cornejo.lupa@gmail.com",
  linkedin: "https://www.linkedin.com/in/jose-manuel-cornejo-lupa-3694ba153",
  github: "https://github.com/joseCornejoLupa",
  summary: {
    "software-engineer": {
      en: "Software Engineer with international experience building scalable web applications, monitoring systems, and cloud-integrated solutions. Skilled in Python, React, PHP, and database design — delivering end-to-end features across full-stack environments.",
      es: "Ingeniero de Software con experiencia internacional en el desarrollo de aplicaciones web escalables, sistemas de monitoreo y soluciones integradas en la nube. Con dominio de Python, React, PHP y diseño de bases de datos, entrego funcionalidades completas en entornos full-stack.",
      fr: "Ingénieur logiciel avec une expérience internationale dans le développement d'applications web évolutives, de systèmes de monitoring et de solutions intégrées au cloud. Maîtrise de Python, React, PHP et de la conception de bases de données — livrant des fonctionnalités bout en bout dans des environnements full-stack.",
    },
    "research-engineer": {
      en: "Research-oriented Software Engineer with hands-on experience in applied R&D at a French university laboratory. Author of two registered patents. Builds data-intensive systems, real-time analytics dashboards, and research infrastructure supporting scientific workflows.",
      es: "Ingeniero de Software orientado a la investigación con experiencia práctica en I+D aplicada en un laboratorio universitario francés. Autor de dos patentes registradas. Construye sistemas intensivos en datos, dashboards analíticos en tiempo real e infraestructura de investigación para flujos de trabajo científicos.",
      fr: "Ingénieur logiciel orienté recherche, avec une expérience pratique en R&D appliquée dans un laboratoire universitaire français. Auteur de deux brevets déposés. Conçoit des systèmes à forte intensité de données, des tableaux de bord analytiques en temps réel et des infrastructures de recherche pour les workflows scientifiques.",
    },
    "edtech-engineer": {
      en: "Software Engineer specialized in educational technology. Deep expertise in Moodle LMS development, competency-based learning systems, and e-learning platform architecture. Built plugins and platforms used in real academic environments across Europe and Latin America.",
      es: "Ingeniero de Software especializado en tecnología educativa. Amplia experiencia en desarrollo de Moodle LMS, sistemas de aprendizaje basados en competencias y arquitectura de plataformas e-learning. Desarrolló plugins y plataformas utilizados en entornos académicos reales en Europa y América Latina.",
      fr: "Ingénieur logiciel spécialisé en technologies éducatives. Expertise approfondie dans le développement Moodle LMS, les systèmes d'apprentissage par compétences et l'architecture de plateformes e-learning. A développé des plugins et des plateformes utilisés dans des environnements académiques réels en Europe et en Amérique latine.",
    },
  } as Record<Role, T>,
};

// ---------------------------------------------------------------------------
// About section descriptions (moved here so you can edit them in this file)
// ---------------------------------------------------------------------------
export const aboutDescriptions: Record<Role, { headline: T; body: T }> = {
  "software-engineer": {
    headline: {
      en: "Building systems that work at scale",
      es: "Construyendo sistemas que funcionan a escala",
      fr: "Construire des systèmes qui fonctionnent à l'échelle",
    },
    body: {
      en: "I am a Software Engineer with international experience across Peru, France, and remote-first environments. My background spans full-stack web development, systems monitoring, database architecture, and platform integration. I thrive in environments where technical depth meets real-world product delivery.",
      es: "Soy un Ingeniero de Software con experiencia internacional en Perú, Francia y entornos de trabajo remoto. Mi trayectoria abarca el desarrollo web full-stack, monitoreo de sistemas, arquitectura de bases de datos e integración de plataformas. Me desenvuelvo mejor en entornos donde la profundidad técnica se encuentra con la entrega real de productos.",
      fr: "Je suis ingénieur logiciel avec une expérience internationale au Pérou, en France et dans des environnements de travail à distance. Mon parcours couvre le développement web full-stack, le monitoring de systèmes, l'architecture de bases de données et l'intégration de plateformes. Je m'épanouis dans les environnements où la profondeur technique rencontre la livraison de produits concrets.",
    },
  },
  "research-engineer": {
    headline: {
      en: "Engineering the infrastructure of research",
      es: "Ingeniería para la infraestructura de la investigación",
      fr: "Concevoir l'infrastructure de la recherche",
    },
    body: {
      en: "My career has been shaped by work inside academic and research institutions — including two years at UPPA, a French university laboratory. I build the systems that make research possible: monitoring infrastructure, analytical dashboards, data pipelines, and platforms that support scientific inquiry. I hold two French-registered patents from this work.",
      es: "Mi carrera ha sido moldeada por el trabajo en instituciones académicas y de investigación — incluyendo dos años en la UPPA, un laboratorio universitario francés. Construyo los sistemas que hacen posible la investigación: infraestructura de monitoreo, dashboards analíticos, pipelines de datos y plataformas de apoyo a la investigación científica. Cuento con dos patentes registradas en Francia como resultado de este trabajo.",
      fr: "Ma carrière a été façonnée par mon travail dans des institutions académiques et de recherche — dont deux ans à l'UPPA, un laboratoire universitaire français. Je construis les systèmes qui rendent la recherche possible : infrastructures de monitoring, tableaux de bord analytiques, pipelines de données et plateformes soutenant l'investigation scientifique. J'ai obtenu deux brevets français dans le cadre de ce travail.",
    },
  },
  "edtech-engineer": {
    headline: {
      en: "Technology at the service of learning",
      es: "Tecnología al servicio del aprendizaje",
      fr: "La technologie au service de l'apprentissage",
    },
    body: {
      en: "I have spent a significant part of my career building tools for education. From Moodle plugins used across European universities to competency-mapping systems and multi-role academic platforms, I understand both the technical and pedagogical dimensions of educational software. My work bridges engineering rigor with learning outcomes.",
      es: "He dedicado una parte significativa de mi carrera a construir herramientas para la educación. Desde plugins de Moodle utilizados en universidades europeas hasta sistemas de mapeo de competencias y plataformas académicas multi-rol, comprendo tanto las dimensiones técnicas como pedagógicas del software educativo. Mi trabajo conecta el rigor de la ingeniería con los resultados de aprendizaje.",
      fr: "J'ai consacré une part importante de ma carrière à construire des outils pour l'éducation. Des plugins Moodle utilisés dans des universités européennes aux systèmes de cartographie des compétences et aux plateformes académiques multi-rôles, je comprends à la fois les dimensions techniques et pédagogiques des logiciels éducatifs. Mon travail fait le lien entre la rigueur de l'ingénierie et les résultats d'apprentissage.",
    },
  },
};

// ---------------------------------------------------------------------------
// Experiences
// ---------------------------------------------------------------------------
export const experiences: {
  company: string;
  role: string;
  period: string;
  location: string;
  relevantFor: Role[];
  highlights: Record<Role, TA>;
  tags: string[];
  caseStudy?: {
    title: string;
    description: T;
    architecture: TA;
    outcome: T;
  };
}[] = [
    {
      company: "Logros Académicos",
      role: "Software Developer",
      period: "May – Jul 2025",
      location: "Arequipa, Peru",
      relevantFor: ["software-engineer", "edtech-engineer"],
      highlights: {
        "software-engineer": {
          en: [
            "Led development of a multi-role educational platform using PHP-based backend with scalable architecture.",
            "Directed a cross-functional team using Agile/SCRUM methodologies, improving delivery speed and team collaboration.",
          ],
          es: [
            "Lideré el desarrollo de una plataforma educativa multi-rol usando backend PHP con arquitectura escalable.",
            "Dirigí un equipo multidisciplinario aplicando metodologías Agile/SCRUM, mejorando la velocidad de entrega y la colaboración.",
          ],
          fr: [
            "Dirigé le développement d'une plateforme éducative multi-rôles avec un backend PHP et une architecture évolutive.",
            "Encadré une équipe pluridisciplinaire avec des méthodologies Agile/SCRUM, améliorant la vitesse de livraison et la collaboration.",
          ],
        },
        "edtech-engineer": {
          en: [
            "Architected a multi-role educational platform supporting different user flows for students, teachers, and administrators.",
            "Applied Agile/SCRUM practices to manage feature delivery in a fast-paced educational software context.",
          ],
          es: [
            "Diseñé la arquitectura de una plataforma educativa multi-rol con flujos diferenciados para estudiantes, docentes y administradores.",
            "Apliqué prácticas Agile/SCRUM para gestionar la entrega de funcionalidades en un contexto de software educativo dinámico.",
          ],
          fr: [
            "Conçu l'architecture d'une plateforme éducative multi-rôles avec des flux distincts pour étudiants, enseignants et administrateurs.",
            "Appliqué les pratiques Agile/SCRUM pour gérer la livraison des fonctionnalités dans un contexte de logiciel éducatif rapide.",
          ],
        },
        "research-engineer": {
          en: [
            "Built backend infrastructure for an educational platform with multi-role access control.",
            "Applied software engineering practices to deliver a structured e-learning solution.",
          ],
          es: [
            "Construí la infraestructura backend de una plataforma educativa con control de acceso multi-rol.",
            "Apliqué prácticas de ingeniería de software para entregar una solución e-learning estructurada.",
          ],
          fr: [
            "Développé l'infrastructure backend d'une plateforme éducative avec contrôle d'accès multi-rôles.",
            "Appliqué des pratiques d'ingénierie logicielle pour livrer une solution e-learning structurée.",
          ],
        },
      },
      tags: ["PHP", "Agile", "SCRUM", "Backend", "EdTech"],
    },
    {
      company: "UPPA – Université de Pau et des Pays de l'Adour",
      role: "Software Engineer",
      period: "Jan 2024 – Apr 2025",
      location: "Anglet, France",
      relevantFor: ["software-engineer", "research-engineer", "edtech-engineer"],
      highlights: {
        "software-engineer": {
          en: [
            "Developed and deployed a client-server monitoring system for Virtual Desktop Infrastructure (VDI) in the AEC industry using Python with threads, Psutil, and OpenTelemetry.",
            "Designed web dashboards with Plotly/Dash to visualize real-time CPU, GPU, RAM, and disk metrics.",
            "Built a data management application with CRUD capabilities for enterprises, teams, and projects, integrated into Moodle via secure API authentication.",
            "Engineered a desktop automation tool in Python + PowerShell to streamline CLI-based RealityCapture photogrammetry workflows.",
            "Architected hybrid database solutions combining SQL (structured data) and MongoDB (performance metrics).",
          ],
          es: [
            "Desarrollé y desplegué un sistema de monitoreo cliente-servidor para Infraestructura de Escritorio Virtual (VDI) en la industria AEC usando Python con hilos, Psutil y OpenTelemetry.",
            "Diseñé dashboards web con Plotly/Dash para visualizar métricas en tiempo real de CPU, GPU, RAM y disco.",
            "Construí una aplicación de gestión de datos con capacidades CRUD para empresas, equipos y proyectos, integrada en Moodle mediante autenticación segura por API.",
            "Desarrollé una herramienta de automatización de escritorio en Python + PowerShell para optimizar flujos de fotogrametría con RealityCapture.",
            "Diseñé soluciones de bases de datos híbridas combinando SQL (datos estructurados) y MongoDB (métricas de rendimiento).",
          ],
          fr: [
            "Développé et déployé un système de monitoring client-serveur pour l'Infrastructure de Bureau Virtuel (VDI) dans l'industrie AEC avec Python (threads), Psutil et OpenTelemetry.",
            "Conçu des tableaux de bord web avec Plotly/Dash pour visualiser les métriques CPU, GPU, RAM et disque en temps réel.",
            "Développé une application de gestion de données CRUD pour entreprises, équipes et projets, intégrée à Moodle via une authentification API sécurisée.",
            "Créé un outil d'automatisation de bureau en Python + PowerShell pour optimiser les workflows de photogrammétrie RealityCapture en ligne de commande.",
            "Conçu des solutions de bases de données hybrides combinant SQL (données structurées) et MongoDB (métriques de performance).",
          ],
        },
        "research-engineer": {
          en: [
            "Designed and deployed a real-time VDI monitoring system for research infrastructure in the AEC industry — a core component of the COSY_Infra research project.",
            "Applied OpenTelemetry instrumentation for observability in distributed virtual desktop environments.",
            "Engineered analytical dashboards translating raw system metrics into actionable research insights using Plotly/Dash.",
            "Co-developed the COSY_Infra digital environment, a research platform for studying collaborative work and professional training — resulting in a registered French patent.",
            "Automated photogrammetry CLI workflows in RealityCapture, producing RCShell — a patented software tool.",
          ],
          es: [
            "Diseñé y desplegué un sistema de monitoreo VDI en tiempo real para infraestructura de investigación en la industria AEC — componente central del proyecto de investigación COSY_Infra.",
            "Apliqué instrumentación OpenTelemetry para observabilidad en entornos de escritorios virtuales distribuidos.",
            "Desarrollé dashboards analíticos que traducen métricas del sistema en información útil para la investigación usando Plotly/Dash.",
            "Co-desarrollé el entorno digital COSY_Infra, una plataforma de investigación para estudiar el trabajo colaborativo y la formación profesional — resultando en una patente francesa registrada.",
            "Automaticé flujos CLI de fotogrametría en RealityCapture, produciendo RCShell — una herramienta de software patentada.",
          ],
          fr: [
            "Conçu et déployé un système de monitoring VDI en temps réel pour l'infrastructure de recherche dans l'industrie AEC — composant central du projet de recherche COSY_Infra.",
            "Appliqué l'instrumentation OpenTelemetry pour l'observabilité dans des environnements de bureaux virtuels distribués.",
            "Développé des tableaux de bord analytiques traduisant les métriques système en informations exploitables pour la recherche avec Plotly/Dash.",
            "Co-développé l'environnement numérique COSY_Infra, une plateforme de recherche pour étudier le travail collaboratif et la formation professionnelle — aboutissant à un brevet français enregistré.",
            "Automatisé les workflows CLI de photogrammétrie dans RealityCapture, produisant RCShell — un outil logiciel breveté.",
          ],
        },
        "edtech-engineer": {
          en: [
            "Built a data management application integrated into Moodle LMS for managing enterprises, teams, users, and academic projects.",
            "Developed and integrated a Moodle-based plugin in PHP, enhancing platform functionality and interoperability.",
            "Designed dashboards to support educators and administrators with operational insights into platform usage.",
          ],
          es: [
            "Construí una aplicación de gestión de datos integrada en Moodle LMS para gestionar empresas, equipos, usuarios y proyectos académicos.",
            "Desarrollé e integré un plugin PHP para Moodle, mejorando la funcionalidad e interoperabilidad de la plataforma.",
            "Diseñé dashboards para apoyar a educadores y administradores con información operativa sobre el uso de la plataforma.",
          ],
          fr: [
            "Développé une application de gestion de données intégrée à Moodle LMS pour la gestion des entreprises, équipes, utilisateurs et projets académiques.",
            "Développé et intégré un plugin Moodle en PHP, améliorant la fonctionnalité et l'interopérabilité de la plateforme.",
            "Conçu des tableaux de bord pour aider les éducateurs et administrateurs avec des informations opérationnelles sur l'usage de la plateforme.",
          ],
        },
      },
      caseStudy: {
        title: "COSY_Infra & VDI Monitoring System",
        description: {
          en: "A research infrastructure project at UPPA's laboratory supporting collaborative work in AEC industry training environments. The system combined real-time desktop monitoring, Moodle-integrated data management, and an analytical dashboard layer.",
          es: "Un proyecto de infraestructura de investigación en el laboratorio de la UPPA que apoya el trabajo colaborativo en entornos de formación de la industria AEC. El sistema combinó monitoreo de escritorio en tiempo real, gestión de datos integrada en Moodle y una capa de dashboards analíticos.",
          fr: "Un projet d'infrastructure de recherche au laboratoire de l'UPPA soutenant le travail collaboratif dans les environnements de formation de l'industrie AEC. Le système combinait un monitoring de bureau en temps réel, une gestion de données intégrée à Moodle et une couche de tableaux de bord analytiques.",
        },
        architecture: {
          en: [
            "Python client agents deployed on virtual desktops collecting CPU, GPU, RAM, disk metrics via Psutil and OpenTelemetry",
            "Server-side aggregation and storage with hybrid SQL + MongoDB architecture",
            "Plotly/Dash web dashboards for real-time and historical metric visualization",
            "Moodle plugin for academic project and user management via secure REST API",
            "PowerShell + Python automation toolchain for RealityCapture photogrammetry workflows",
          ],
          es: [
            "Agentes cliente Python desplegados en escritorios virtuales recopilando métricas de CPU, GPU, RAM y disco mediante Psutil y OpenTelemetry",
            "Agregación y almacenamiento del lado del servidor con arquitectura híbrida SQL + MongoDB",
            "Dashboards web Plotly/Dash para visualización de métricas en tiempo real e históricas",
            "Plugin de Moodle para la gestión de proyectos académicos y usuarios mediante API REST segura",
            "Cadena de automatización PowerShell + Python para flujos de trabajo de fotogrametría con RealityCapture",
          ],
          fr: [
            "Agents clients Python déployés sur des bureaux virtuels collectant les métriques CPU, GPU, RAM et disque via Psutil et OpenTelemetry",
            "Agrégation et stockage côté serveur avec architecture hybride SQL + MongoDB",
            "Tableaux de bord web Plotly/Dash pour la visualisation des métriques en temps réel et historiques",
            "Plugin Moodle pour la gestion des projets académiques et des utilisateurs via API REST sécurisée",
            "Chaîne d'automatisation PowerShell + Python pour les workflows de photogrammétrie RealityCapture",
          ],
        },
        outcome: {
          en: "Resulted in two registered French patents (2025): RCShell 1.1 and COSY_Infra solution.",
          es: "Resultó en dos patentes francesas registradas (2025): RCShell 1.1 y la solución COSY_Infra.",
          fr: "A abouti à deux brevets français enregistrés (2025) : RCShell 1.1 et la solution COSY_Infra.",
        },
      },
      tags: ["Python", "Plotly", "Dash", "OpenTelemetry", "MongoDB", "PostgreSQL", "Moodle", "PHP", "PowerShell"],
    },
    {
      company: "LiUPPA Laboratory (Remote)",
      role: "Software Engineering Intern",
      period: "Oct 2022 – Dec 2023",
      location: "Pau, France",
      relevantFor: ["software-engineer", "research-engineer", "edtech-engineer"],
      highlights: {
        "software-engineer": {
          en: [
            "Designed and implemented a Moodle-based plugin improving e-learning workflows for competency plan management.",
            "Contributed to a graph-based web application for competency mapping and learning path customization.",
            "Managed and optimized PostgreSQL databases supporting Moodle's backend infrastructure.",
            "Collaborated remotely in an Agile environment, coordinating with a distributed European team.",
          ],
          es: [
            "Diseñé e implementé un plugin basado en Moodle que mejora los flujos de trabajo e-learning para la gestión de planes de competencias.",
            "Contribuí a una aplicación web basada en grafos para el mapeo de competencias y la personalización de rutas de aprendizaje.",
            "Gestioné y optimicé bases de datos PostgreSQL que respaldan la infraestructura backend de Moodle.",
            "Colaboré de forma remota en un entorno Agile, coordinando con un equipo europeo distribuido.",
          ],
          fr: [
            "Conçu et implémenté un plugin Moodle améliorant les workflows e-learning pour la gestion des plans de compétences.",
            "Contribué à une application web basée sur les graphes pour la cartographie des compétences et la personnalisation des parcours d'apprentissage.",
            "Géré et optimisé les bases de données PostgreSQL supportant l'infrastructure backend de Moodle.",
            "Collaboré à distance dans un environnement Agile, en coordination avec une équipe européenne distribuée.",
          ],
        },
        "research-engineer": {
          en: [
            "Worked inside LiUPPA, the computer science research laboratory of UPPA, on applied research tooling for educational systems.",
            "Built a graph-based application using Neo4j for competency mapping — applying graph theory to educational data modeling.",
            "Designed and optimized PostgreSQL schemas supporting large-scale Moodle research environments.",
          ],
          es: [
            "Trabajé en el LiUPPA, el laboratorio de ciencias de la computación de la UPPA, en herramientas de investigación aplicada para sistemas educativos.",
            "Construí una aplicación basada en grafos con Neo4j para el mapeo de competencias — aplicando teoría de grafos al modelado de datos educativos.",
            "Diseñé y optimicé esquemas PostgreSQL para entornos de investigación Moodle a gran escala.",
          ],
          fr: [
            "Travaillé au sein du LiUPPA, le laboratoire d'informatique de l'UPPA, sur des outils de recherche appliquée pour les systèmes éducatifs.",
            "Développé une application basée sur les graphes avec Neo4j pour la cartographie des compétences — appliquant la théorie des graphes à la modélisation de données éducatives.",
            "Conçu et optimisé des schémas PostgreSQL pour des environnements de recherche Moodle à grande échelle.",
          ],
        },
        "edtech-engineer": {
          en: [
            "Developed a Moodle plugin enabling teachers to create and manage competency plans for students — directly improving pedagogical workflows.",
            "Built a graph-based competency mapping tool, allowing customizable learning path design for educational institutions.",
            "Optimized PostgreSQL databases backing Moodle, ensuring data integrity under academic workloads.",
          ],
          es: [
            "Desarrollé un plugin de Moodle que permite a los docentes crear y gestionar planes de competencias para los estudiantes — mejorando directamente los flujos de trabajo pedagógicos.",
            "Construí una herramienta de mapeo de competencias basada en grafos, que permite el diseño personalizable de rutas de aprendizaje para instituciones educativas.",
            "Optimicé las bases de datos PostgreSQL que respaldan Moodle, garantizando la integridad de los datos bajo cargas académicas.",
          ],
          fr: [
            "Développé un plugin Moodle permettant aux enseignants de créer et gérer des plans de compétences pour les étudiants — améliorant directement les workflows pédagogiques.",
            "Développé un outil de cartographie des compétences basé sur les graphes, permettant la conception personnalisable de parcours d'apprentissage pour les établissements éducatifs.",
            "Optimisé les bases de données PostgreSQL supportant Moodle, assurant l'intégrité des données sous les charges académiques.",
          ],
        },
      },
      tags: ["Moodle", "PHP", "PostgreSQL", "Neo4j", "Python", "Graph Theory", "Remote"],
    },
    {
      company: "Inka Labs",
      role: "Software Developer",
      period: "Feb – Jul 2022",
      location: "Arequipa, Peru",
      relevantFor: ["software-engineer"],
      highlights: {
        "software-engineer": {
          en: [
            "Built a React-based platform centralizing university services across four interconnected web applications.",
            "Created reusable frontend components accelerating feature delivery and maintaining UI consistency.",
            "Integrated Google Cloud Services for secure OAuth authentication.",
            "Developed IKUAL, an e-commerce platform for uniforms, handling frontend and backend integrations with payment workflows.",
          ],
          es: [
            "Construí una plataforma basada en React que centraliza servicios universitarios en cuatro aplicaciones web interconectadas.",
            "Creé componentes frontend reutilizables que aceleran la entrega de funcionalidades y mantienen la consistencia de la interfaz.",
            "Integré Google Cloud Services para autenticación OAuth segura.",
            "Desarrollé IKUAL, una plataforma e-commerce para uniformes, gestionando integraciones frontend y backend con flujos de pago.",
          ],
          fr: [
            "Développé une plateforme React centralisant les services universitaires sur quatre applications web interconnectées.",
            "Créé des composants frontend réutilisables accélérant la livraison des fonctionnalités et maintenant la cohérence de l'interface.",
            "Intégré Google Cloud Services pour l'authentification OAuth sécurisée.",
            "Développé IKUAL, une plateforme e-commerce pour uniformes, gérant les intégrations frontend et backend avec les workflows de paiement.",
          ],
        },
        "research-engineer": {
          en: ["Built a React-based multi-app ecosystem for university services with Google Cloud authentication."],
          es: ["Construí un ecosistema multi-aplicación basado en React para servicios universitarios con autenticación de Google Cloud."],
          fr: ["Développé un écosystème multi-applications basé sur React pour les services universitaires avec authentification Google Cloud."],
        },
        "edtech-engineer": {
          en: [
            "Built a React-based platform centralizing university services and improving accessibility for students.",
            "Integrated Google Cloud authentication for seamless student login across university applications.",
          ],
          es: [
            "Construí una plataforma basada en React que centraliza servicios universitarios y mejora la accesibilidad para estudiantes.",
            "Integré autenticación de Google Cloud para un inicio de sesión fluido de los estudiantes en las aplicaciones universitarias.",
          ],
          fr: [
            "Développé une plateforme React centralisant les services universitaires et améliorant l'accessibilité pour les étudiants.",
            "Intégré l'authentification Google Cloud pour une connexion fluide des étudiants sur les applications universitaires.",
          ],
        },
      },
      tags: ["React", "TypeScript", "Google Cloud", "E-commerce", "Frontend"],
    },
  ];

// ---------------------------------------------------------------------------
// Patents
// ---------------------------------------------------------------------------
export const patents: {
  title: string;
  type: string;
  year: number;
  registration: string;
  country: string;
  description: T;
  tags: string[];
}[] = [
    {
      title: "RCShell 1.1 obfus",
      type: "Software Patent",
      year: 2025,
      registration: "FR.001.040017.000. S.C.2025.000.10800",
      country: "France",
      description: {
        en: "A CLI-based automation tool optimizing photogrammetry workflows in the AEC (Architecture, Engineering & Construction) industry. Object-oriented architecture designed for extensibility to support emerging photogrammetry technologies.",
        es: "Una herramienta de automatización basada en CLI que optimiza flujos de trabajo de fotogrametría en la industria AEC (Arquitectura, Ingeniería y Construcción). Arquitectura orientada a objetos diseñada para ser extensible y soportar tecnologías de fotogrametría emergentes.",
        fr: "Un outil d'automatisation en ligne de commande optimisant les workflows de photogrammétrie dans l'industrie AEC (Architecture, Ingénierie & Construction). Architecture orientée objet conçue pour l'extensibilité afin de prendre en charge les technologies de photogrammétrie émergentes.",
      },
      tags: ["Python", "PowerShell", "Photogrammetry", "AEC", "Automation", "CLI"],
    },
    {
      title: "COSY_Infra",
      type: "Solution Patent",
      year: 2025,
      registration: "FR.001.040016.000. S.C.2025.000.10800",
      country: "France",
      description: {
        en: "A digital environment supporting the implementation and analysis of customizable software 'microworlds' for collaborative work and professional training. Integrates Vue.JS, Dash, Moodle LMS, and PostgreSQL into a unified research-grade platform.",
        es: "Un entorno digital que apoya la implementación y el análisis de 'micromundos' de software personalizables para el trabajo colaborativo y la formación profesional. Integra Vue.JS, Dash, Moodle LMS y PostgreSQL en una plataforma unificada de grado investigador.",
        fr: "Un environnement numérique soutenant la mise en œuvre et l'analyse de 'micromondes' logiciels personnalisables pour le travail collaboratif et la formation professionnelle. Intègre Vue.JS, Dash, Moodle LMS et PostgreSQL dans une plateforme unifiée de grade recherche.",
      },
      tags: ["Vue.js", "Dash", "Moodle", "PostgreSQL", "Research", "Collaborative Systems"],
    },
  ];

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------
export const articles: {
  title: string;
  venue: string;
  year: number;
  description: T;
  url?: string;
  tags: string[];
}[] = [
    {
      title: "Des compétences aux savoir-faire: proposition d'extensions au métamodèle de COMPER et à MOODLE",
      venue: "EIAH 2025 – 12ème Conférence sur les Environnements Informatiques pour l'Apprentissage Humain",
      year: 2025,
      description: {
        en: "Proposes extensions to the COMPER competency metamodel and Moodle LMS to bridge the gap between formal competencies and practical know-how in educational systems.",
        es: "Propone extensiones al metamodelo de competencias COMPER y a Moodle LMS para reducir la brecha entre las competencias formales y el saber-hacer práctico en los sistemas educativos.",
        fr: "Propose des extensions au métamodèle de compétences COMPER et à Moodle LMS pour combler l'écart entre les compétences formelles et le savoir-faire pratique dans les systèmes éducatifs.",
      },
      url: "https://hal.science/hal-05320275",
      tags: ["Moodle", "Competency Modeling", "EdTech", "COMPER", "LMS"],
    },
    {
      title: "COSYciels: des progiciels et un observatoire pour nourrir des regards croisés sur l'infrastructure COSY",
      venue: "CNRIUT 2025 – Bayonne, Pays Basque",
      year: 2025,
      description: {
        en: "Presents COSYciels, a suite of software tools and an observatory layer built on the COSY infrastructure to support cross-disciplinary analysis of collaborative professional training environments.",
        es: "Presenta COSYciels, una suite de herramientas de software y una capa de observatorio construida sobre la infraestructura COSY para apoyar el análisis interdisciplinario de entornos de formación profesional colaborativa.",
        fr: "Présente COSYciels, une suite d'outils logiciels et une couche observatoire construite sur l'infrastructure COSY pour soutenir l'analyse interdisciplinaire des environnements de formation professionnelle collaborative.",
      },
      url: "https://hal.science/hal-05093506",
      tags: ["COSY_Infra", "Research Infrastructure", "Collaborative Systems", "VDI", "EdTech"],
    },
    {
      title: "Credibility Analysis on Twitter Considering Topic Detection",
      venue: "Applied Sciences – MDPI, Vol. 12, No. 18",
      year: 2022,
      description: {
        en: "A journal article proposing a credibility analysis framework for Twitter that integrates topic detection to assess the reliability of information spread across social networks.",
        es: "Un artículo de revista que propone un marco de análisis de credibilidad para Twitter que integra la detección de tópicos para evaluar la fiabilidad de la información difundida en redes sociales.",
        fr: "Un article de revue proposant un cadre d'analyse de crédibilité pour Twitter intégrant la détection de sujets pour évaluer la fiabilité des informations diffusées sur les réseaux sociaux.",
      },
      url: "https://www.mdpi.com/2076-3417/12/18/9081",
      tags: ["NLP", "Social Networks", "Credibility Analysis", "Topic Detection", "Twitter"],
    },
  ];

// ---------------------------------------------------------------------------
// Research projects (formerly hardcoded in Research.tsx)
// ---------------------------------------------------------------------------
export const researchProjects: {
  name: string;
  institution: string;
  period: string;
  location: string;
  type: string;
  description: T;
  contributions: TA;
  outcome: T;
  stack: string[];
  diagramLayers: { label: string; items: string[] }[];
}[] = [
    {
      name: "COSY_Infra",
      institution: "UPPA – Université de Pau et des Pays de l'Adour",
      period: "2024 – 2025",
      location: "Anglet, France",
      type: "Research Platform",
      description: {
        en: "A digital environment for studying the use of customizable software 'microworlds' in collaborative professional training. The platform supports multiple institutional actors — enterprises, trainers, learners — within a unified research-grade infrastructure.",
        es: "Un entorno digital para estudiar el uso de 'micromundos' de software personalizables en la formación profesional colaborativa. La plataforma soporta múltiples actores institucionales — empresas, formadores y aprendices — dentro de una infraestructura de grado investigador unificada.",
        fr: "Un environnement numérique pour étudier l'utilisation de 'micromondes' logiciels personnalisables dans la formation professionnelle collaborative. La plateforme prend en charge plusieurs acteurs institutionnels — entreprises, formateurs, apprenants — au sein d'une infrastructure de grade recherche unifiée.",
      },
      contributions: {
        en: [
          "Designed and deployed a real-time monitoring system for Virtual Desktop Infrastructure (VDI) used in AEC industry training simulations",
          "Engineered analytical dashboards using Plotly/Dash for system-level metric visualization across virtual machine fleets",
          "Built a Moodle-integrated data management layer for project, team, and user management",
          "Architected hybrid database solution: PostgreSQL for structured academic data, MongoDB for performance telemetry",
          "Implemented OpenTelemetry-based observability across the infrastructure",
        ],
        es: [
          "Diseñé y desplegué un sistema de monitoreo en tiempo real para Infraestructura de Escritorio Virtual (VDI) utilizado en simulaciones de formación en la industria AEC",
          "Desarrollé dashboards analíticos con Plotly/Dash para la visualización de métricas a nivel de sistema en flotas de máquinas virtuales",
          "Construí una capa de gestión de datos integrada en Moodle para proyectos, equipos y usuarios",
          "Diseñé una solución de base de datos híbrida: PostgreSQL para datos académicos estructurados, MongoDB para telemetría de rendimiento",
          "Implementé observabilidad basada en OpenTelemetry en toda la infraestructura",
        ],
        fr: [
          "Conçu et déployé un système de monitoring en temps réel pour l'Infrastructure de Bureau Virtuel (VDI) utilisée dans les simulations de formation de l'industrie AEC",
          "Développé des tableaux de bord analytiques avec Plotly/Dash pour la visualisation des métriques système sur des flottes de machines virtuelles",
          "Développé une couche de gestion de données intégrée à Moodle pour la gestion des projets, équipes et utilisateurs",
          "Conçu une solution de base de données hybride : PostgreSQL pour les données académiques structurées, MongoDB pour la télémétrie de performance",
          "Implémenté l'observabilité basée sur OpenTelemetry sur l'ensemble de l'infrastructure",
        ],
      },
      outcome: {
        en: "Patented solution — FR.001.040016.000. S.C.2025.000.10800",
        es: "Solución patentada — FR.001.040016.000. S.C.2025.000.10800",
        fr: "Solution brevetée — FR.001.040016.000. S.C.2025.000.10800",
      },
      stack: ["Vue.js", "Plotly/Dash", "Moodle LMS", "PostgreSQL", "MongoDB", "Python", "OpenTelemetry"],
      diagramLayers: [
        { label: "Frontend Layer", items: ["Vue.js dashboard", "Plotly/Dash analytics", "Moodle LMS portal"] },
        { label: "Backend Layer", items: ["REST API (Python)", "Moodle Plugin (PHP)", "Auth middleware"] },
        { label: "Data Layer", items: ["PostgreSQL (structured)", "MongoDB (metrics)", "OpenTelemetry collector"] },
        { label: "Infrastructure", items: ["VDI clients (Python agents)", "PowerShell automation", "Linux servers"] },
      ],
    },
    {
      name: "Competency Graph System",
      institution: "LiUPPA Laboratory",
      period: "2022 – 2023",
      location: "Pau, France (Remote)",
      type: "Research Tool",
      description: {
        en: "A graph-based web application for competency mapping in educational settings, enabling teachers to model, visualize, and manage learning paths as connected knowledge graphs. Built inside the LiUPPA computer science research laboratory.",
        es: "Una aplicación web basada en grafos para el mapeo de competencias en entornos educativos, que permite a los docentes modelar, visualizar y gestionar rutas de aprendizaje como grafos de conocimiento interconectados. Desarrollada en el laboratorio de ciencias de la computación LiUPPA.",
        fr: "Une application web basée sur les graphes pour la cartographie des compétences en milieu éducatif, permettant aux enseignants de modéliser, visualiser et gérer les parcours d'apprentissage sous forme de graphes de connaissances connectés. Développée au sein du laboratoire d'informatique LiUPPA.",
      },
      contributions: {
        en: [
          "Designed graph data models using Neo4j (Cypher) for competency and skill relationships",
          "Developed a Moodle plugin enabling teachers to create and assign competency plans to students",
          "Optimized PostgreSQL schemas supporting Moodle's academic backend at scale",
          "Built web visualizations for interactive graph exploration of learning pathways",
        ],
        es: [
          "Diseñé modelos de datos en grafos usando Neo4j (Cypher) para relaciones de competencias y habilidades",
          "Desarrollé un plugin de Moodle que permite a los docentes crear y asignar planes de competencias a los estudiantes",
          "Optimicé esquemas de PostgreSQL que respaldan el backend académico de Moodle a escala",
          "Construí visualizaciones web para la exploración interactiva de rutas de aprendizaje",
        ],
        fr: [
          "Conçu des modèles de données en graphes avec Neo4j (Cypher) pour les relations de compétences et d'aptitudes",
          "Développé un plugin Moodle permettant aux enseignants de créer et d'affecter des plans de compétences aux étudiants",
          "Optimisé les schémas PostgreSQL supportant le backend académique de Moodle à l'échelle",
          "Développé des visualisations web pour l'exploration interactive des parcours d'apprentissage",
        ],
      },
      outcome: {
        en: "Deployed within UPPA's Moodle environment for active academic use",
        es: "Desplegado en el entorno Moodle de UPPA para uso académico activo",
        fr: "Déployé dans l'environnement Moodle de l'UPPA pour un usage académique actif",
      },
      stack: ["Neo4j", "Cypher", "PHP", "PostgreSQL", "Moodle", "Python"],
      diagramLayers: [
        { label: "Visualization Layer", items: ["Graph web interface", "Moodle plugin UI"] },
        { label: "Application Layer", items: ["Competency plan manager", "Moodle plugin backend"] },
        { label: "Data Layer", items: ["Neo4j graph DB (competencies)", "PostgreSQL (Moodle data)"] },
      ],
    },
  ];

// ---------------------------------------------------------------------------
// Skills (tech names are proper nouns — no translation needed)
// ---------------------------------------------------------------------------
export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "PHP", "C++", "C#", "Cypher", "SQL"],
  frameworks: ["React", "Vue.js", "Django", "Laravel", "Yii", "Plotly/Dash", "Next.js"],
  databases: ["PostgreSQL", "MongoDB", "Neo4j"],
  tools: ["Docker", "Git", "Moodle LMS", "OpenTelemetry", "PowerShell"],
  concepts: ["REST APIs", "Agile/SCRUM", "Graph Databases", "Real-time Monitoring", "LMS Development", "Data Visualization"],
};

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education: {
  degree: T;
  institution: string;
  location: string;
  period: string;
}[] = [
    {
      degree: {
        en: "Bachelor's Degree in Computer Science",
        es: "Bachiller en Ciencias de la Computación",
        fr: "Licence en Informatique",
      },
      institution: "Universidad Católica San Pablo",
      location: "Arequipa, Peru",
      period: "Mar 2017 – Dec 2021",
    },
  ];

// ---------------------------------------------------------------------------
// Certifications (proper certification names — no translation)
// ---------------------------------------------------------------------------
export const certifications = [
  {
    name: "Neo4j Certified Professional",
    issuer: "Neo4j GraphAcademy",
    year: null,
  },
];

// ---------------------------------------------------------------------------
// Languages spoken
// ---------------------------------------------------------------------------
export const languages: { name: string; level: T; dots: number }[] = [
  { name: "Spanish", level: { en: "Native", es: "Nativo", fr: "Natif" }, dots: 5 },
  { name: "English", level: { en: "Professional", es: "Profesional", fr: "Professionnel" }, dots: 4 },
  { name: "French", level: { en: "Professional", es: "Profesional", fr: "Professionnel" }, dots: 3 },
];

// ---------------------------------------------------------------------------
// Soft skills
// ---------------------------------------------------------------------------
export const softSkills: { label: T; icon: string }[] = [
  {
    label: { en: "Responsible", es: "Responsable", fr: "Responsable" },
    icon: "HiOutlineShieldCheck",
  },
  {
    label: { en: "Organized work", es: "Trabajo organizado", fr: "Travail organisé" },
    icon: "HiOutlineClipboardList",
  },
  {
    label: { en: "Comfortable with new tech", es: "Cómodo con nuevas tecnologías", fr: "À l'aise avec les nouvelles technologies" },
    icon: "HiOutlineLightBulb",
  },
  {
    label: { en: "Remote work experience", es: "Experiencia en trabajo remoto", fr: "Expérience en télétravail" },
    icon: "HiOutlineGlobeAlt",
  },
  {
    label: { en: "Detail attention", es: "Atención al detalle", fr: "Souci du détail" },
    icon: "HiOutlineEye",
  },
  {
    label: { en: "Fast learner", es: "Aprendizaje rápido", fr: "Apprentissage rapide" },
    icon: "HiOutlineAcademicCap",
  },
];

// ---------------------------------------------------------------------------
// Featured skills for hero carousel
// ---------------------------------------------------------------------------
export const featuredSkills = [
  "Python", "React", "TypeScript", "PHP",
  "PostgreSQL", "MongoDB", "Neo4j",
  "Plotly/Dash", "Moodle LMS", "Docker",
  "OpenTelemetry", "Vue.js",
];

// ---------------------------------------------------------------------------
// Moodle plugins
// ---------------------------------------------------------------------------
export const moodlePlugins: {
  name: string;
  institution: string;
  period: string;
  description: T;
  features: TA;
  stack: string[];
  status: T;
}[] = [
    {
      name: "Competency Plan Manager",
      institution: "LiUPPA – Université de Pau",
      period: "2022 – 2023",
      description: {
        en: "A Moodle plugin enabling teachers to create, assign, and manage structured competency plans for individual students. Supports tracking of learning objectives across courses.",
        es: "Un plugin de Moodle que permite a los docentes crear, asignar y gestionar planes de competencias estructurados para estudiantes individuales. Permite el seguimiento de objetivos de aprendizaje en distintos cursos.",
        fr: "Un plugin Moodle permettant aux enseignants de créer, affecter et gérer des plans de compétences structurés pour chaque étudiant. Prend en charge le suivi des objectifs d'apprentissage sur plusieurs cours.",
      },
      features: {
        en: [
          "Custom competency plan creation per student",
          "Teacher dashboard for plan assignment and progress tracking",
          "Integration with Moodle's native gradebook",
          "Role-based access for teacher, coordinator, and student views",
        ],
        es: [
          "Creación de planes de competencias personalizados por estudiante",
          "Dashboard para docentes para asignación de planes y seguimiento del progreso",
          "Integración con el libro de calificaciones nativo de Moodle",
          "Acceso basado en roles para vistas de docente, coordinador y estudiante",
        ],
        fr: [
          "Création de plans de compétences personnalisés par étudiant",
          "Tableau de bord enseignant pour l'affectation des plans et le suivi des progrès",
          "Intégration avec le carnet de notes natif de Moodle",
          "Accès basé sur les rôles pour les vues enseignant, coordinateur et étudiant",
        ],
      },
      stack: ["PHP", "Moodle API", "PostgreSQL", "JavaScript"],
      status: {
        en: "Deployed at UPPA",
        es: "Desplegado en UPPA",
        fr: "Déployé à l'UPPA",
      },
    },
    {
      name: "Graph Competency Mapping Tool",
      institution: "LiUPPA – Université de Pau",
      period: "2022 – 2023",
      description: {
        en: "A graph-based web application embedded in Moodle for visualizing and navigating competency relationships as an interactive knowledge graph. Enables educators to design custom learning paths.",
        es: "Una aplicación web basada en grafos integrada en Moodle para visualizar y navegar por las relaciones de competencias como un grafo de conocimiento interactivo. Permite a los educadores diseñar rutas de aprendizaje personalizadas.",
        fr: "Une application web basée sur les graphes intégrée à Moodle pour visualiser et naviguer dans les relations de compétences sous forme de graphe de connaissances interactif. Permet aux éducateurs de concevoir des parcours d'apprentissage personnalisés.",
      },
      features: {
        en: [
          "Interactive graph visualization of competency relationships",
          "Neo4j (Cypher) graph database for competency modeling",
          "Customizable learning path design for educators",
          "Moodle-integrated authentication and user context",
        ],
        es: [
          "Visualización interactiva en grafo de relaciones de competencias",
          "Base de datos de grafos Neo4j (Cypher) para el modelado de competencias",
          "Diseño personalizable de rutas de aprendizaje para educadores",
          "Autenticación y contexto de usuario integrados en Moodle",
        ],
        fr: [
          "Visualisation interactive en graphe des relations de compétences",
          "Base de données graphe Neo4j (Cypher) pour la modélisation des compétences",
          "Conception personnalisable de parcours d'apprentissage pour les éducateurs",
          "Authentification et contexte utilisateur intégrés à Moodle",
        ],
      },
      stack: ["Neo4j", "Cypher", "PHP", "JavaScript", "Moodle API", "PostgreSQL"],
      status: {
        en: "Deployed at UPPA",
        es: "Desplegado en UPPA",
        fr: "Déployé à l'UPPA",
      },
    },
    {
      name: "Enterprise Data Management Plugin",
      institution: "UPPA – Université de Pau",
      period: "2024 – 2025",
      description: {
        en: "A Moodle plugin providing full CRUD management for enterprises, teams, users, and academic projects within a research training environment. Built for the COSY_Infra platform.",
        es: "Un plugin de Moodle que proporciona gestión CRUD completa para empresas, equipos, usuarios y proyectos académicos dentro de un entorno de formación e investigación. Desarrollado para la plataforma COSY_Infra.",
        fr: "Un plugin Moodle fournissant une gestion CRUD complète des entreprises, équipes, utilisateurs et projets académiques dans un environnement de formation et de recherche. Développé pour la plateforme COSY_Infra.",
      },
      features: {
        en: [
          "CRUD operations for enterprises, teams, users, and projects",
          "Secure REST API integration with Moodle authentication",
          "Multi-role access control (admin, trainer, learner)",
          "Designed for VDI-based professional training environments",
        ],
        es: [
          "Operaciones CRUD para empresas, equipos, usuarios y proyectos",
          "Integración segura de API REST con autenticación de Moodle",
          "Control de acceso multi-rol (administrador, formador, aprendiz)",
          "Diseñado para entornos de formación profesional basados en VDI",
        ],
        fr: [
          "Opérations CRUD pour entreprises, équipes, utilisateurs et projets",
          "Intégration sécurisée d'API REST avec l'authentification Moodle",
          "Contrôle d'accès multi-rôles (administrateur, formateur, apprenant)",
          "Conçu pour les environnements de formation professionnelle basés sur VDI",
        ],
      },
      stack: ["PHP", "Moodle API", "PostgreSQL", "REST API", "Python"],
      status: {
        en: "Part of patented COSY_Infra solution",
        es: "Parte de la solución patentada COSY_Infra",
        fr: "Partie de la solution brevetée COSY_Infra",
      },
    },
  ];

// ---------------------------------------------------------------------------
// Section config
// ---------------------------------------------------------------------------
export type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "research"
  | "moodle"
  | "patents"
  | "articles"
  | "contact";

export const sectionsByRole: Record<Role, SectionId[]> = {
  "software-engineer": ["hero", "about", "experience", "research", "patents", "articles", "contact"],
  "research-engineer": ["hero", "about", "research", "experience", "patents", "articles", "contact"],
  "edtech-engineer": ["hero", "about", "moodle", "experience", "research", "patents", "articles", "contact"],
};
