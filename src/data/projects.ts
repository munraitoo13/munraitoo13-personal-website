import type { Locale } from "@/i18n/config";
import type { CuratedProject } from "@/types/types";

const projectsByLocale: Record<Locale, CuratedProject[]> = {
  "en-US": [
    {
      id: "modulozero",
      name: "Módulo Zero",
      tagline: "AI Workflow & Engineering Protocol Web Platform",
      summary:
        "Production web application delivering an indexed library of 800+ structured system protocol files (.md) across 10 operational departments. Engineered for sub-second search, instant one-click copying, and streamlined digital delivery for nearly 2,000 active users.",
      metrics: [
        "~2,000 users",
        "800+ system protocols (.md)",
        "10 operational departments",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Resend",
      ],
      repoUrl: null,
      liveUrl: "https://modulozero.app",
      isPrivateRepo: true,
      status: "Production",
    },
    {
      id: "bravo-erp",
      name: "Bravo ERP",
      tagline: "Multi-Tenant B2B Technical ERP for CCTV & Security Operations",
      summary:
        "End-to-end B2B SaaS platform tailored to electronic security and CCTV integrators. Features strict tenant isolation, a deterministic CCTV bandwidth and storage sizing engine, pessimistic locking on critical stock/quote flows, automated 11-month warranty scans, and asynchronous PDF generation.",
      metrics: [
        "Multi-tenant isolation & RBAC",
        "Deterministic CCTV storage sizing",
        "Async PDF worker pipeline",
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
      id: "gerador-orcamento",
      name: "Gerador de Orçamentos",
      tagline: "Offline-First Windows Desktop Quoting & PDF Engine",
      summary:
        "Desktop application built for CCTV field and sales teams to draft itemized technical quotes, query local history, and export branded PDFs in seconds. Bundles a compiled FastAPI + SQLite local server (`api.exe`) inside an Electron shell with native `printToPDF` rendering and NSIS/portable installers.",
      metrics: [
        "100% offline-first SQLite engine",
        "Compiled native api.exe + Electron",
        "70% faster quote-to-PDF workflow",
      ],
      stack: [
        "Electron",
        "Python",
        "FastAPI",
        "SQLite",
        "React",
        "TypeScript",
        "Vite",
      ],
      repoUrl: null,
      liveUrl: null,
      isPrivateRepo: true,
      status: "Private Client Tool",
    },
  ],
  "pt-BR": [
    {
      id: "modulozero",
      name: "Módulo Zero",
      tagline: "Plataforma Web de Protocolos de Sistema e Fluxos para IA",
      summary:
        "Aplicação web em produção que entrega uma biblioteca indexada com mais de 800 arquivos de protocolo de sistema (.md) distribuídos em 10 departamentos operacionais. Projetada para busca instantânea, cópia em 1 clique e entrega digital fluida para perto de 2.000 usuários.",
      metrics: [
        "~2.000 usuários",
        "+800 protocolos de sistema (.md)",
        "10 departamentos operacionais",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Resend",
      ],
      repoUrl: null,
      liveUrl: "https://modulozero.app",
      isPrivateRepo: true,
      status: "Em Produção",
    },
    {
      id: "bravo-erp",
      name: "Bravo ERP",
      tagline: "ERP Técnico B2B Multi-Tenant para Operações de CFTV e Segurança",
      summary:
        "Plataforma SaaS B2B completa para empresas integradoras de segurança eletrônica e CFTV. Inclui isolamento multi-tenant rigoroso, motor determinístico de dimensionamento de banda e armazenamento de câmeras, pessimistic locking em fluxos críticos, varredura agendada de garantias de 11 meses e geração assíncrona de PDFs.",
      metrics: [
        "Isolamento multi-tenant & RBAC",
        "Motor de dimensionamento CFTV",
        "Workers assíncronos de PDF",
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
      id: "gerador-orcamento",
      name: "Gerador de Orçamentos",
      tagline: "Motor Desktop Windows Offline-First para Orçamentos em PDF",
      summary:
        "Aplicação desktop desenvolvida para agilizar propostas técnicas de CFTV, consultar histórico local e exportar PDFs padronizados em segundos. Empacota uma API FastAPI + SQLite compilada nativamente (`api.exe`) dentro do Electron com renderização nativa via `printToPDF` e instaladores NSIS e portátil.",
      metrics: [
        "Persistência offline-first em SQLite",
        "Backend nativo api.exe + Electron",
        "70% mais rápido na geração de PDF",
      ],
      stack: [
        "Electron",
        "Python",
        "FastAPI",
        "SQLite",
        "React",
        "TypeScript",
        "Vite",
      ],
      repoUrl: null,
      liveUrl: null,
      isPrivateRepo: true,
      status: "Ferramenta Privada",
    },
  ],
};

export function getCuratedProjects(locale: Locale): CuratedProject[] {
  return projectsByLocale[locale] ?? projectsByLocale["en-US"];
}
