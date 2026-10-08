"use client";
import { useEffect, useState } from "react";
import {
  ExternalLink,
  GitFork,

  RefreshCw,
  Star,
  Target,
  TargetIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";

import type { GitHubRepository } from "@/types/github";
import { fetchGitHubRepositories, GitHubApiError } from "@/config/github";

const formatUpdatedDate = (value: string) => {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

const ProjectSkeleton = () => {
  return (
    <div className="card animate-pulse bg-white">
      <div className="h-5 w-28 rounded-full bg-black/10" />

      <div className="mt-8 h-8 w-2/3 rounded-lg bg-black/10" />

      <div className="mt-4 h-16 rounded-lg bg-black/5" />

      <div className="mt-8 flex gap-2">
        <div className="h-8 w-20 rounded-full bg-black/10" />
        <div className="h-8 w-20 rounded-full bg-black/10" />
      </div>
    </div>
  );
};

type ProjectCardProps = {
  repository: GitHubRepository;
  featured?: boolean;
};

const ProjectCard = ({
  repository,
  featured = false,
}: ProjectCardProps) => {
  return (
    <article
      className={`card relative flex h-full flex-col ${
        featured
          ? "card-blue lg:min-h-[440px]"
          : "bg-white"
      }`}
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <span className="pill bg-white/70">
          {repository.language ?? "Code"}
        </span>

        <a
          href={repository.htmlUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${repository.name} on GitHub`}
          className="
            inline-flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            transition
            hover:-translate-y-1
          "
        >
          <Target
            size={17}
            aria-hidden="true"
          />
        </a>
      </div>

      {/* Project Information */}
      <div className="mt-7 sm:mt-8">
        <h3
          className={`break-words font-extrabold tracking-[-0.04em] ${
            featured
              ? "text-3xl sm:text-4xl lg:text-5xl"
              : "text-xl sm:text-2xl"
          }`}
        >
          {repository.name}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60 sm:mt-4">
          {repository.description ??
            "A project built while learning and exploring software development."}
        </p>
      </div>

      {/* Topics */}
      {repository.topics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {repository.topics.slice(0, 5).map((topic) => (
            <span
              key={topic}
              className="
                rounded-full
                border
                border-black/10
                bg-white/60
                px-3
                py-1.5
                text-[11px]
                font-bold
              "
            >
              #{topic}
            </span>
          ))}
        </div>
      )}

      {/* Bottom */}
      <div className="mt-auto pt-7 sm:pt-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-black/55">
          <span className="inline-flex items-center gap-1.5">
            <Star
              size={14}
              aria-hidden="true"
            />
            {repository.stargazersCount}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <GitFork
              size={14}
              aria-hidden="true"
            />
            {repository.forksCount}
          </span>

          <span>
            Updated {formatUpdatedDate(repository.updatedAt)}
          </span>
        </div>

        <a
          href={repository.htmlUrl}
          target="_blank"
          rel="noreferrer"
          className="
            mt-4
            inline-flex
            items-center
            text-sm
            font-extrabold
            underline
            decoration-black/20
            underline-offset-4
            hover:decoration-black
          "
        >
          View on GitHub

          <ExternalLink
            className="ml-2"
            size={15}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
};

const GitHubProjects = () => {
  const [repositories, setRepositories] = useState<
    GitHubRepository[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const loadRepositories = async (
    signal?: AbortSignal,
  ) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchGitHubRepositories(
        siteConfig.githubUsername,
        signal,
      );

      setRepositories(data);
    } catch (caughtError) {
      if (
        caughtError instanceof DOMException &&
        caughtError.name === "AbortError"
      ) {
        return;
      }

      if (caughtError instanceof GitHubApiError) {
        setError(caughtError.message);
      } else {
        setError(
          "Something went wrong while loading GitHub repositories.",
        );
      }
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    void loadRepositories(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-shell scroll-mt-28"
    >
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">
              SELECTED PROJECTS
            </span>

            <h2
              id="projects-heading"
              className="
                mt-4
                max-w-4xl
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.05em]
                sm:mt-5
                sm:text-5xl
                lg:text-6xl
              "
            >
              Things I&apos;ve been building.
            </h2>
          </div>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary self-start lg:self-auto"
          >
            <TargetIcon
              className="mr-2"
              size={17}
              aria-hidden="true"
            />
            View GitHub
          </a>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-2">
            <ProjectSkeleton />
            <ProjectSkeleton />
            <ProjectSkeleton />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-8 rounded-[24px] border border-black/10 bg-white p-6 sm:mt-10 sm:rounded-[32px] sm:p-10">
            <span className="icon-badge">
              <Target
                size={17}
                aria-hidden="true"
              />
            </span>

            <h3 className="mt-5 text-xl font-extrabold sm:mt-6 sm:text-2xl">
              Couldn&apos;t load repositories.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
              {error}
            </p>

            <button
              type="button"
              onClick={() => void loadRepositories()}
              className="btn-primary mt-5 sm:mt-6"
            >
              <RefreshCw
                className="mr-2"
                size={16}
                aria-hidden="true"
              />
              Try again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          repositories.length === 0 && (
            <div className="mt-8 rounded-[24px] border border-black/10 bg-pastel-yellow p-6 sm:mt-10 sm:rounded-[32px] sm:p-10">
              <h3 className="text-xl font-extrabold sm:text-2xl">
                No public repositories yet.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
                Public GitHub projects will appear here
                automatically once they are available.
              </p>
            </div>
          )}

        {/* Projects */}
        {!loading &&
          !error &&
          repositories.length > 0 && (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-2">
              {/* Featured Project */}
              <div className="lg:row-span-2">
                <ProjectCard
                  repository={repositories[0]}
                  featured
                />
              </div>

              {/* Other Projects */}
              {repositories.slice(1, 5).map((repository) => (
                <ProjectCard
                  key={repository.id}
                  repository={repository}
                />
              ))}
            </div>
          )}
      </div>
    </section>
  );
};

export default GitHubProjects;
