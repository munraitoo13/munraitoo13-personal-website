import type { Locale } from "@/i18n/config";
import type { CuratedProject } from "@/types/types";

const projectsByLocale: Record<Locale, CuratedProject[]> = {
  "en-US": [
    {
      id: "bravo-erp",
      name: "Bravo ERP",
      tagline: "Multi-Tenant B2B Technical ERP for CCTV Operations",
      summary:
        "Multi-tenant B2B SaaS platform for electronic security and CCTV integrators. Automates hybrid analog/IP camera sizing, atomic stock reservation with pessimistic locking, async SHA-256 verifiable PDF quotes, field work orders, and 11-month warranty alerts.",
      metrics: [
        "Multi-tenant isolation & RBAC",
        "Deterministic CCTV sizing engine",
        "Async SHA-256 PDF worker pipeline",
      ],
      stack: [
        "Python",
        "FastAPI",
        "SQLAlchemy 2.0",
        "PostgreSQL",
        "Taskiq",
        "Redis",
        "MinIO",
        "Next.js",
        "TypeScript",
      ],
      repoUrl: "https://github.com/munraitoo13/bravo-erp",
      liveUrl: null,
      isPrivateRepo: false,
      status: "Open Source",
    },
    {
      id: "iara-chat",
      name: "Iara Chat",
      tagline: "White-Label Clinical AI Triage & Human Handoff Platform",
      summary:
        "Hybrid clinical triage and scheduling platform separating a calm patient chat from the clinic operations dashboard. Enforces zero-token deterministic guardrails, protocol-based rescheduling, live staff takeover sync, and self-service LGPD data erasure.",
      metrics: [
        "0-token deterministic guardrails",
        "Hybrid AI + live staff handoff",
        "LGPD self-service data erasure",
      ],
      stack: [
        "Python",
        "FastAPI",
        "SQLModel",
        "Vercel AI Gateway",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      repoUrl: "https://github.com/munraitoo13/iara-chat",
      liveUrl: null,
      isPrivateRepo: false,
      status: "Open Source",
    },
    {
      id: "vinheria-agnello-devops",
      name: "Vinheria Agnello DevSecOps",
      tagline: "Containerized Spring Boot Microservices & DevSecOps Lab",
      summary:
        "Containerized microservices architecture simulating production networking and CI/CD security. Combines internal DNS and DHCP via dnsmasq, Nginx TLS 1.3 reverse proxy termination, Spring Boot JWT and RBAC services, declarative Jenkins pipelines, and Wireshark traffic inspection.",
      metrics: [
        "Internal DNS/DHCP + Nginx TLS 1.3",
        "Spring Boot JWT & RBAC services",
        "Declarative Jenkins JCasC CI/CD",
      ],
      stack: [
        "Java 21",
        "Spring Boot",
        "Docker",
        "Nginx",
        "Jenkins",
        "dnsmasq",
        "Wireshark",
        "TLS 1.3",
      ],
      repoUrl: "https://github.com/munraitoo13/vinheria-agnello-devops",
      liveUrl: null,
      isPrivateRepo: false,
      status: "Open Source",
    },
  ],
  "pt-BR": [
    {
      id: "bravo-erp",
      name: "Bravo ERP",
      tagline: "ERP Técnico B2B Multi-Tenant para Operações de CFTV",
      summary:
        "Plataforma SaaS B2B multi-tenant para integradoras de segurança eletrônica e CFTV. Automatiza dimensionamento híbrido de câmeras, reserva atômica de estoque com pessimistic locking, PDFs assíncronos verificáveis por SHA-256, ordens de serviço e radar de garantia.",
      metrics: [
        "Isolamento multi-tenant & RBAC",
        "Motor determinístico de CFTV",
        "Pipeline assíncrono de PDF SHA-256",
      ],
      stack: [
        "Python",
        "FastAPI",
        "SQLAlchemy 2.0",
        "PostgreSQL",
        "Taskiq",
        "Redis",
        "MinIO",
        "Next.js",
        "TypeScript",
      ],
      repoUrl: "https://github.com/munraitoo13/bravo-erp",
      liveUrl: null,
      isPrivateRepo: false,
      status: "Open Source",
    },
    {
      id: "iara-chat",
      name: "Iara Chat",
      tagline: "Plataforma White-Label de Triagem Clínica com IA e Handoff Humano",
      summary:
        "Plataforma híbrida de triagem clínica e agendamento que separa o chat acolhedor do paciente do painel operacional da clínica. Aplica guardrails determinísticos sem gasto de tokens, reagendamento por protocolo, sincronização com atendente e exclusão de dados LGPD.",
      metrics: [
        "Guardrails determinísticos 0-token",
        "IA híbrida + handoff humano ao vivo",
        "Exclusão de dados LGPD em 1 clique",
      ],
      stack: [
        "Python",
        "FastAPI",
        "SQLModel",
        "Vercel AI Gateway",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      repoUrl: "https://github.com/munraitoo13/iara-chat",
      liveUrl: null,
      isPrivateRepo: false,
      status: "Open Source",
    },
    {
      id: "vinheria-agnello-devops",
      name: "Vinheria Agnello DevSecOps",
      tagline: "Laboratório de Microsserviços Spring Boot, Redes e DevSecOps",
      summary:
        "Arquitetura containerizada de microsserviços simulando infraestrutura de produção e entrega contínua. Integra DNS e DHCP internos com dnsmasq, gateway Nginx com TLS 1.3, serviços Spring Boot com JWT e RBAC, pipeline declarativo no Jenkins e inspeção de pacotes no Wireshark.",
      metrics: [
        "DNS/DHCP interno + Nginx TLS 1.3",
        "Serviços Spring Boot com JWT e RBAC",
        "Pipeline Jenkins JCasC declarativo",
      ],
      stack: [
        "Java 21",
        "Spring Boot",
        "Docker",
        "Nginx",
        "Jenkins",
        "dnsmasq",
        "Wireshark",
        "TLS 1.3",
      ],
      repoUrl: "https://github.com/munraitoo13/vinheria-agnello-devops",
      liveUrl: null,
      isPrivateRepo: false,
      status: "Open Source",
    },
  ],
};

export function getCuratedProjects(locale: Locale): CuratedProject[] {
  return projectsByLocale[locale] ?? projectsByLocale["en-US"];
}
