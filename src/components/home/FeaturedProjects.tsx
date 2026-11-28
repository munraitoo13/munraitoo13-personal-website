"use client";

import { cn } from "@/lib/utils";
import type { CuratedProject } from "@/types/types";
import { ArrowRight, ArrowUpRight, ChevronDown, Lock } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

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
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProject = projects[activeIndex] ?? projects[0];

  if (!activeProject) return null;

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (idx + 1) % projects.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (idx - 1 + projects.length) % projects.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = projects.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="tui-rail px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-primary max-w-2xl text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              {sectionTitle}
            </h2>
            <p className="text-tertiary text-sm">{sectionLabel}</p>
          </div>

          <Link
            href="/projects"
            className="group text-secondary hover:text-primary inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-colors duration-150"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="motion-arrow-right text-accent-text size-4" strokeWidth={1.75} />
          </Link>
        </div>

        {/* Mobile inline accordion */}
        <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] lg:hidden">
          {projects.map((project, idx) => {
            const isOpen = idx === activeIndex;

            return (
              <div key={project.id} className="bg-background">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "motion-press-subtle flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left",
                    isOpen ? "bg-background-contrast" : "hover:bg-background-contrast/50",
                  )}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-primary text-lg font-semibold">
                        {project.name}
                      </h3>
                      <span className="text-accent-text font-mono text-xs">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-secondary text-sm">{project.tagline}</p>
                  </div>

                  <ChevronDown
                    className={cn(
                      "text-secondary size-4 shrink-0 transition-transform duration-[180ms] ease-[var(--ease-out)]",
                      isOpen && "rotate-180 text-primary",
                    )}
                    strokeWidth={1.75}
                  />
                </button>

                {isOpen && (
                  <div className="motion-panel bg-background-contrast space-y-5 border-t border-[var(--color-border)] p-5">
                    <p className="text-secondary max-w-[65ch] text-sm leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                      {project.metrics.map((metric) => (
                        <p
                          key={metric}
                          className="text-primary py-2.5 font-mono text-xs tabular-nums"
                        >
                          {metric}
                        </p>
                      ))}
                    </div>

                    <p className="text-tertiary font-mono text-xs leading-relaxed">
                      {project.stack.join(" · ")}
                    </p>

                    <div className="flex flex-wrap items-center gap-5 pt-1 text-sm font-medium">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent-text inline-flex min-h-11 items-center gap-1.5 transition-colors"
                        >
                          <span>{visitLiveLabel}</span>
                          <ArrowUpRight className="size-4" strokeWidth={1.75} />
                        </Link>
                      )}

                      {project.repoUrl ? (
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent-text inline-flex min-h-11 items-center gap-1.5 transition-colors"
                        >
                          <span>{viewRepoLabel}</span>
                          <ArrowUpRight className="size-4" strokeWidth={1.75} />
                        </Link>
                      ) : (
                        project.isPrivateRepo && (
                          <span className="text-tertiary inline-flex items-center gap-1.5 font-mono text-xs">
                            <Lock className="size-3.5" strokeWidth={1.75} />
                            <span>{privateRepoLabel}</span>
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop accessible split ledger */}
        <div className="hidden border border-[var(--color-border)] lg:grid lg:grid-cols-12">
          <div
            role="tablist"
            aria-label={sectionLabel}
            aria-orientation="vertical"
            className="divide-y divide-[var(--color-border)] border-r border-[var(--color-border)] lg:col-span-5"
          >
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              const tabId = `featured-tab-${project.id}`;
              const panelId = `featured-panel-${project.id}`;

              return (
                <button
                  key={project.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  id={tabId}
                  type="button"
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  aria-controls={panelId}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={(event) => handleTabKeyDown(event, idx)}
                  className={cn(
                    "motion-press-subtle flex w-full cursor-pointer flex-col gap-1.5 border-l-2 p-6 text-left",
                    isActive
                      ? "border-l-accent bg-background-contrast"
                      : "hover:bg-background-contrast/50 border-l-transparent bg-transparent",
                  )}
                >
                  <div className="flex w-full items-center justify-between gap-3">
                    <h3
                      className={cn(
                        "text-xl font-semibold tracking-tight",
                        isActive ? "text-primary" : "text-secondary",
                      )}
                    >
                      {project.name}
                    </h3>
                    <span
                      className={cn(
                        "font-mono text-xs",
                        isActive ? "text-accent-text" : "text-tertiary",
                      )}
                    >
                      {project.status}
                    </span>
                  </div>

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
            key={activeProject.id}
            id={`featured-panel-${activeProject.id}`}
            role="tabpanel"
            aria-labelledby={`featured-tab-${activeProject.id}`}
            className="motion-panel bg-background-contrast flex flex-col justify-between gap-8 p-8 lg:col-span-7"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
                <span className="text-accent-text font-mono text-xs">
                  {activeProject.status}
                </span>
                <span className="text-tertiary font-mono text-xs">
                  {activeProject.stack.slice(0, 3).join(" · ")}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-primary text-2xl font-semibold tracking-tight md:text-3xl">
                  {activeProject.name}
                </h3>
                <p className="text-secondary max-w-[65ch] text-base leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              <div className="grid divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {activeProject.metrics.map((metric) => (
                  <p
                    key={metric}
                    className="text-primary py-3.5 pr-4 font-mono text-xs leading-snug tabular-nums sm:px-4 sm:first:pl-0"
                  >
                    {metric}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-tertiary font-mono text-xs leading-relaxed">
                {activeProject.stack.join(" · ")}
              </p>

              <div className="flex flex-wrap items-center gap-6 border-t border-[var(--color-border)] pt-4 text-sm font-medium">
                {activeProject.liveUrl && (
                  <Link
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group motion-press-subtle text-primary hover:text-accent-text inline-flex min-h-11 items-center gap-1.5"
                  >
                    <span>{visitLiveLabel}</span>
                    <ArrowUpRight className="motion-arrow-up-right size-4" strokeWidth={1.75} />
                  </Link>
                )}

                {activeProject.repoUrl ? (
                  <Link
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group motion-press-subtle text-primary hover:text-accent-text inline-flex min-h-11 items-center gap-1.5"
                  >
                    <span>{viewRepoLabel}</span>
                    <ArrowUpRight className="motion-arrow-up-right size-4" strokeWidth={1.75} />
                  </Link>
                ) : (
                  activeProject.isPrivateRepo && (
                    <span className="text-tertiary inline-flex items-center gap-1.5 font-mono text-xs">
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
