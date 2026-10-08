"use client";

import {
  ExternalLink,
  Target,
  TargetIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { projects } from "../services/json/project.data";

type Project = {
  id: number;
  name: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  language: string;
  topics: string[];
  featured: boolean;
  githubUrl: string;
  liveUrl: string;
  stars: number;
  forks: number;
  updatedAt: string;
};

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

const ProjectCard = ({
  project,
  featured = false,
}: ProjectCardProps) => {
  return (
    <article
      className={`
        card
        relative
        flex
        h-full
        flex-col
        ${
          featured
            ? "card-blue lg:min-h-[440px]"
            : "bg-white"
        }
      `}
    >
      {/* =========================================
          TOP
      ========================================= */}

      <div className="flex items-start justify-between gap-4">
        <span className="pill bg-white/70">
          {project.language || "Code"}
        </span>

        {/* GitHub Button */}

        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} on GitHub`}
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
              hover:shadow-md
            "
          >
            <Target
              size={17}
              aria-hidden="true"
            />
          </a>
        )}
      </div>

      {/* =========================================
          PROJECT INFORMATION
      ========================================= */}

      <div className="mt-7 sm:mt-8">
        {/* Category */}

        <p
          className="
            mb-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-black/40
            sm:text-xs
          "
        >
          {project.category}
        </p>

        {/* Project Name */}

        <h3
          className={`
            break-words
            font-extrabold
            tracking-[-0.04em]
            ${
              featured
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-xl sm:text-2xl"
            }
          `}
        >
          {project.name}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            max-w-2xl
            text-sm
            leading-6
            text-black/60
            sm:mt-4
          "
        >
          {project.description}
        </p>
      </div>

      {/* =========================================
          TECHNOLOGIES
      ========================================= */}

      {project.topics?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {project.topics.slice(0, 6).map((topic) => (
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

      {/* =========================================
          FEATURES
      ========================================= */}

      {featured && project.features?.length > 0 && (
        <div className="mt-6 hidden space-y-2 lg:block">
          {project.features.slice(0, 4).map((feature) => (
            <div
              key={feature}
              className="
                flex
                gap-2
                text-xs
                leading-5
                text-black/55
              "
            >
              <span
                className="
                  mt-2
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-black/40
                "
              />

              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      {/* =========================================
          BOTTOM
      ========================================= */}

      <div className="mt-auto pt-7 sm:pt-8">
        {/* Role */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            text-xs
            font-semibold
            text-black/55
          "
        >
          <span>{project.role}</span>

          {project.updatedAt && (
            <span>{project.updatedAt}</span>
          )}
        </div>

        {/* =========================================
            PROJECT LINKS
        ========================================= */}

        <div className="mt-4 flex flex-wrap gap-4">
          {/* GitHub */}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                text-sm
                font-extrabold
                underline
                decoration-black/20
                underline-offset-4
                transition
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
          )}

          {/* Live Demo */}

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                text-sm
                font-extrabold
                underline
                decoration-black/20
                underline-offset-4
                transition
                hover:decoration-black
              "
            >
              Live Demo

              <ExternalLink
                className="ml-2"
                size={15}
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const GitHubProjects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-shell scroll-mt-28"
    >
      <div className="container-main">
        {/* =========================================
            HEADER
        ========================================= */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-6
            border-b
            border-black/10
            pb-8
            lg:flex-row
            lg:items-end
          "
        >
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

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-black/55
                sm:text-base
              "
            >
              A selection of projects I&apos;ve built while
              working with modern frontend and full-stack
              technologies.
            </p>
          </div>

          {/* GitHub Profile */}

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
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

        {/* =========================================
            PROJECT GRID
        ========================================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            lg:grid-cols-2
          "
        >
          {/* Featured Project */}

          {projects.length > 0 && (
            <div className="lg:row-span-2">
              <ProjectCard
                project={projects[0] as Project}
                featured
              />
            </div>
          )}

          {/* Other Projects */}

          {projects.slice(1).map((project) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
            />
          ))}
        </div>

        {/* =========================================
            EMPTY STATE
        ========================================= */}

        {projects.length === 0 && (
          <div
            className="
              mt-8
              rounded-[24px]
              border
              border-black/10
              bg-pastel-yellow
              p-6
              sm:mt-10
              sm:rounded-[32px]
              sm:p-10
            "
          >
            <h3 className="text-xl font-extrabold sm:text-2xl">
              No projects available.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
              Projects will appear here once they are added
              to the local projects.json file.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubProjects;