import type { Locale } from "@/i18n/config";
import type { SkillCategory } from "@/types/types";

const skillsByLocale: Record<Locale, SkillCategory[]> = {
  "en-US": [
    {
      id: "languages",
      index: "01",
      title: "Languages",
      description:
        "Core programming and query languages across back-end services, web clients, and relational data layers.",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Go", "Java"],
    },
    {
      id: "backend",
      index: "02",
      title: "Back-End & Architecture",
      description:
        "APIs, microservices, and domain-driven systems engineered for throughput, maintainability, and testability.",
      items: [
        "FastAPI",
        "Django",
        "Flask",
        "Node.js",
        "NestJS",
        "Express.js",
        "Spring Boot",
        "Microservices",
        "RESTful APIs",
        "GraphQL",
        "WebSockets",
        "Clean Architecture",
        "DDD",
        "SOLID",
        "TDD",
        "Event-Driven Architecture",
      ],
    },
    {
      id: "frontend",
      index: "03",
      title: "Front-End",
      description:
        "Predictable, component-driven web interfaces focused on speed, clean hierarchy, and responsive execution.",
      items: [
        "React",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Responsive Design",
        "Component-Based Architecture",
      ],
    },
    {
      id: "databases",
      index: "04",
      title: "Databases & ORMs",
      description:
        "Relational and NoSQL modeling, ACID integrity, indexing strategies, and high-load query tuning.",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "SQLite",
        "Oracle",
        "Prisma",
        "SQLAlchemy",
        "SQLModel",
        "Query Optimization",
        "Indexing",
        "ACID Transactions",
      ],
    },
    {
      id: "devops",
      index: "05",
      title: "DevOps & Async Systems",
      description:
        "Containerized workloads, distributed task queues, and automated CI/CD delivery on Linux environments.",
      items: [
        "Docker",
        "Kubernetes",
        "Linux",
        "Git",
        "GitHub Actions",
        "CI/CD",
        "RabbitMQ",
        "Celery",
        "Containerization",
      ],
    },
    {
      id: "security",
      index: "06",
      title: "Security & Auth",
      description:
        "Stateless token flows, federated access, and granular permission boundaries for APIs and multi-tenant apps.",
      items: [
        "OAuth 2.0",
        "JWT",
        "RBAC",
        "Access Control",
        "Authentication & Authorization",
      ],
    },
  ],
  "pt-BR": [
    {
      id: "languages",
      index: "01",
      title: "Linguagens",
      description:
        "Linguagens de programação e consulta usadas em serviços back-end, clientes web e bancos relacionais.",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Go", "Java"],
    },
    {
      id: "backend",
      index: "02",
      title: "Back-End & Arquitetura",
      description:
        "APIs, microsserviços e sistemas orientados a domínio projetados para escala, testabilidade e clareza.",
      items: [
        "FastAPI",
        "Django",
        "Flask",
        "Node.js",
        "NestJS",
        "Express.js",
        "Spring Boot",
        "Microsserviços",
        "APIs RESTful",
        "GraphQL",
        "WebSockets",
        "Clean Architecture",
        "DDD",
        "SOLID",
        "TDD",
        "Event-Driven Architecture",
      ],
    },
    {
      id: "frontend",
      index: "03",
      title: "Front-End",
      description:
        "Interfaces componentizadas com foco em performance, hierarquia visual e responsividade consistente.",
      items: [
        "React",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Design Responsivo",
        "Component-Based Architecture",
      ],
    },
    {
      id: "databases",
      index: "04",
      title: "Bancos de Dados & ORMs",
      description:
        "Modelagem SQL e NoSQL, integridade ACID, estratégia de indexação e performance tuning sob carga.",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "SQLite",
        "Oracle",
        "Prisma",
        "SQLAlchemy",
        "SQLModel",
        "Otimização de Queries",
        "Indexação",
        "Transações ACID",
      ],
    },
    {
      id: "devops",
      index: "05",
      title: "DevOps & Sistemas Assíncronos",
      description:
        "Conteinerização, mensageria distribuída e pipelines automatizados de deploy em ambientes Linux.",
      items: [
        "Docker",
        "Kubernetes",
        "Linux",
        "Git",
        "GitHub Actions",
        "CI/CD",
        "RabbitMQ",
        "Celery",
        "Conteinerização",
      ],
    },
    {
      id: "security",
      index: "06",
      title: "Segurança & Autenticação",
      description:
        "Fluxos de autenticação stateless, autorização granular e proteção de fronteiras em APIs e sistemas multi-tenant.",
      items: [
        "OAuth 2.0",
        "JWT",
        "RBAC",
        "Controle de Acesso",
        "Autenticação e Autorização",
      ],
    },
  ],
};

export function getSkillsData(locale: Locale): SkillCategory[] {
  return skillsByLocale[locale] ?? skillsByLocale["en-US"];
}
