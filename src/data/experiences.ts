import type { Locale } from "@/i18n/config";
import type { ExperiencesData } from "@/types/types";

const experiencesByLocale: Record<Locale, ExperiencesData> = {
  "en-US": {
    summary:
      "Back-end and Full-Stack Software Engineer with 3+ years of production experience across scalable APIs, microservices, async processing, database tuning, and modern web interfaces.",
    work: [
      {
        id: "deeper-systems",
        role: "Full Stack Developer",
        company: "Deeper Systems",
        period: "Mar 2025 — May 2026",
        location: "Remote",
        summary:
          "Led high-load Back-end API optimization and standardized component-based Front-end architecture alongside automated testing and CI/CD enforcement.",
        highlights: [
          "Optimized Back-end APIs in Python, Flask, and Django, reducing response time by 20% under high load through refactoring, profiling, and Event-Driven Architecture.",
          "Built reusable component libraries and interfaces using React, Vue 3, Tailwind CSS, and TypeScript under Component-Based Architecture.",
          "Elevated software reliability by implementing TDD, automated testing, GitHub Actions CI/CD pipelines, linting, code reviews, SOLID, and Clean Code.",
        ],
        stack: [
          "Python",
          "Flask",
          "Django",
          "React",
          "Vue 3",
          "TypeScript",
          "Tailwind CSS",
          "GitHub Actions",
          "TDD",
        ],
      },
      {
        id: "upwork",
        role: "Full Stack Software Engineer",
        company: "Upwork",
        period: "Jan 2022 — Mar 2025",
        location: "Remote",
        summary:
          "Architected and shipped end-to-end web applications, distributed microservices, and relational/NoSQL data layers for international clients.",
        highlights: [
          "Designed and built Full-Stack web applications using Python, Go, FastAPI, Django, Flask, Node.js, NestJS, Express.js, React, Next.js, and TypeScript with Clean Architecture and DDD.",
          "Engineered microservices, RESTful APIs, GraphQL endpoints, WebSockets, and async processing with RabbitMQ, Celery, Redis, Docker, and Kubernetes.",
          "Modeled and optimized PostgreSQL, MongoDB, SQLite, and Oracle databases with Prisma, SQLAlchemy, and SQLModel (indexing, ACID transactions, query tuning).",
          "Implemented OAuth 2.0, JWT, and RBAC security flows and maintained Linux production deployments via automated CI/CD.",
        ],
        stack: [
          "Python",
          "Go",
          "FastAPI",
          "NestJS",
          "React",
          "Next.js",
          "PostgreSQL",
          "MongoDB",
          "RabbitMQ",
          "Celery",
          "Docker",
          "Kubernetes",
        ],
      },
    ],
    education: {
      degree: "B.Sc. in Software Engineering",
      institution: "FIAP",
      period: "Jan 2024 — Dec 2027",
      metric: "GPA: 9.83 / 10",
      projects: [
        {
          name: "AI Support Platform",
          description:
            "Intelligent Python assistant using NLP for Tier-1 support automation, reducing ticket volume by 20% and improving operational efficiency.",
          stack: ["Python", "NLP", "Automation"],
        },
        {
          name: "Sell-Out Intelligence",
          description:
            "Modular architecture in Python and Java with microservices, RESTful APIs, and large-scale data integrations for analytical processing.",
          stack: ["Python", "Java", "Microservices", "REST"],
        },
        {
          name: "Crypto Dashboard",
          description:
            "Full-Stack monitoring platform with Spring Boot, React, REST APIs, async messaging, and real-time portfolio alert delivery.",
          stack: ["Java", "Spring Boot", "React", "Async Messaging"],
        },
        {
          name: "Natural Risk Monitoring Platform",
          description:
            "Real-time flood and environmental monitoring system integrating automated alerts, geolocation, and satellite communication for low-connectivity areas.",
          stack: ["Real-time Data", "Geolocation", "Satellite Comms"],
        },
      ],
    },
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Advanced (C1)" },
    ],
  },
  "pt-BR": {
    summary:
      "Engenheiro de Software Back-end e Full Stack com mais de 3 anos de experiência em APIs escaláveis, microsserviços, processamento assíncrono, otimização de bancos de dados e interfaces web modernas.",
    work: [
      {
        id: "deeper-systems",
        role: "Full Stack Developer",
        company: "Deeper Systems",
        period: "Mar 2025 — Mai 2026",
        location: "Remoto",
        summary:
          "Atuação na otimização de APIs Back-end sob alta carga, padronização de bibliotecas de componentes no Front-end e elevação de qualidade via TDD e CI/CD.",
        highlights: [
          "Otimizou APIs Back-end em Python, Flask e Django, reduzindo o tempo de resposta em 20% sob alta carga por meio de refatoração, profiling e Event-Driven Architecture.",
          "Desenvolveu bibliotecas de componentes reutilizáveis e interfaces com React, Vue 3, Tailwind CSS e TypeScript seguindo Component-Based Architecture.",
          "Elevou a qualidade do software implementando TDD, testes automatizados, GitHub Actions, CI/CD, linting, code review e princípios SOLID, Clean Code e Design Patterns.",
        ],
        stack: [
          "Python",
          "Flask",
          "Django",
          "React",
          "Vue 3",
          "TypeScript",
          "Tailwind CSS",
          "GitHub Actions",
          "TDD",
        ],
      },
      {
        id: "upwork",
        role: "Engenheiro de Software Full Stack",
        company: "Upwork",
        period: "Jan 2022 — Mar 2025",
        location: "Remoto",
        summary:
          "Projeto e entrega ponta a ponta de aplicações web Full Stack, microsserviços assíncronos e camadas de dados SQL/NoSQL para clientes internacionais.",
        highlights: [
          "Projetou e desenvolveu aplicações web Full Stack com Python, Go, FastAPI, Django, Flask, Node.js, NestJS, Express.js, React, Next.js e TypeScript aplicando Clean Architecture e DDD.",
          "Desenvolveu microsserviços, APIs RESTful, GraphQL, WebSockets e integrações assíncronas com RabbitMQ, Celery, Redis, Docker e Kubernetes.",
          "Modelou e otimizou bancos PostgreSQL, MongoDB, SQLite e Oracle com Prisma, SQLAlchemy e SQLModel (indexação, transações ACID e performance tuning).",
          "Implementou autenticação e autorização com OAuth 2.0, JWT e RBAC e manteve deploys automatizados em ambientes Linux.",
        ],
        stack: [
          "Python",
          "Go",
          "FastAPI",
          "NestJS",
          "React",
          "Next.js",
          "PostgreSQL",
          "MongoDB",
          "RabbitMQ",
          "Celery",
          "Docker",
          "Kubernetes",
        ],
      },
    ],
    education: {
      degree: "Bacharelado em Engenharia de Software",
      institution: "FIAP",
      period: "Jan 2024 — Dez 2027",
      metric: "CR: 9,83 / 10",
      projects: [
        {
          name: "Plataforma de Suporte com IA",
          description:
            "Assistente inteligente em Python com NLP para automação de atendimento Nível 1, reduzindo em 20% o volume de chamados.",
          stack: ["Python", "NLP", "Automação"],
        },
        {
          name: "Sell-Out Intelligence",
          description:
            "Arquitetura modular em Python e Java com microsserviços, APIs RESTful e integrações de dados em larga escala para processamento analítico.",
          stack: ["Python", "Java", "Microsserviços", "REST"],
        },
        {
          name: "Crypto Dashboard",
          description:
            "Aplicação Full Stack com Spring Boot, React, APIs REST, mensageria assíncrona e monitoramento de portfólio com alertas automatizados.",
          stack: ["Java", "Spring Boot", "React", "Mensageria"],
        },
        {
          name: "Plataforma de Monitoramento de Riscos Naturais",
          description:
            "Sistema de análise de enchentes e eventos ambientais com dados em tempo real, geolocalização, alertas e comunicação via satélite.",
          stack: ["Tempo Real", "Geolocalização", "Satélite"],
        },
      ],
    },
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado (C1)" },
    ],
  },
};

export function getExperiencesData(locale: Locale): ExperiencesData {
  return experiencesByLocale[locale] ?? experiencesByLocale["en-US"];
}
