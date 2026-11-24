"use client";

import { SectionLabel } from "@/components/common/SectionLabel";
import { cn } from "@/lib/utils";
import type { CuratedProject } from "@/types/types";
import { ArrowRight, ArrowUpRight, Layers, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type FeaturedProjectsProps = {
  projects: CuratedProject[];
  sectionLabel: string;
  sectionTitle: string;
  viewAllLabel: string;
  privateRepoLabel: string;
  visitLiveLabel: string;
  viewRepoLabel: string;
};

export function FeaturedProjects({
  projects,
  sectionLabel,
  sectionTitle,
  viewAllLabel,
  privateRepoLabel,
  visitLiveLabel,
  viewRepoLabel,
}: FeaturedProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] ?? projects[0];

  if (!activeProject) return null;

  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="tui-rail px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <SectionLabel
              index="01"
              label={sectionLabel}
              Icon={Layers}
            />
            <h2 className="text-primary max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sectionTitle}
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-secondary hover:text-primary inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="text-accent size-3.5" strokeWidth={1.75} />
          </Link>
        </div>

        <div className="grid border border-[var(--color-border)] lg:grid-cols-12">
          <div
            role="tablist"
            aria-label={sectionLabel}
            className="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)] lg:col-span-5 lg:border-r lg:border-b-0"
          >
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              const num = String(idx + 1).padStart(2, "0");

              return (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "flex w-full cursor-pointer flex-col gap-2 border-l-2 p-6 text-left transition-colors duration-200",
                    isActive
                      ? "border-l-accent bg-background-contrast"
                      : "hover:bg-background-contrast/50 border-l-transparent bg-transparent",
                  )}
                >
                  <div className="flex w-full items-center justify-between gap-3">
                    <span
                      className={cn(
                        "font-mono text-[11px] uppercase tracking-[0.16em]",
                        isActive ? "text-accent" : "text-tertiary",
                      )}
                    >
                      PROJECT / {num}
                    </span>
                    <span className="text-tertiary font-mono text-[11px] uppercase tracking-[0.12em]">
                      {project.status}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "text-xl font-semibold tracking-tight",
                      isActive ? "text-primary" : "text-secondary",
                    )}
                  >
                    {project.name}
                  </h3>

                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      isActive ? "text-secondary" : "text-tertiary",
                    )}
                  >
                    {project.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            className="bg-background-contrast flex flex-col justify-between gap-8 p-6 md:p-8 lg:col-span-7"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
                <span className="text-accent font-mono text-xs uppercase tracking-[0.16em]">
                  0{activeIndex + 1} // {activeProject.status}
                </span>
                <span className="text-tertiary font-mono text-xs">
                  {activeProject.stack.slice(0, 3).join(" · ")}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-primary text-2xl font-semibold tracking-tight md:text-3xl">
                  {activeProject.name}
                </h3>
                <p className="text-secondary text-base leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              <div className="grid border-t border-l border-[var(--color-border)] sm:grid-cols-3">
                {activeProject.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="bg-background border-r border-b border-[var(--color-border)] p-3.5"
                  >
                    <p className="text-primary font-mono text-xs leading-snug">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-background text-secondary border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-5 border-t border-[var(--color-border)] pt-5 font-mono text-xs uppercase tracking-[0.14em]">
                {activeProject.liveUrl && (
                  <Link
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{visitLiveLabel}</span>
                    <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                  </Link>
                )}

                {activeProject.repoUrl ? (
                  <Link
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{viewRepoLabel}</span>
                    <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                  </Link>
                ) : (
                  activeProject.isPrivateRepo && (
                    <span className="text-tertiary inline-flex items-center gap-1.5">
                      <Lock className="size-3.5" strokeWidth={1.75} />
                      <span>{privateRepoLabel}</span>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
