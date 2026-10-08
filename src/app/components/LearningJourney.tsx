import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

const journeyItems = [
  {
    step: "01",
    title: "Modern JavaScript & TypeScript",
    description:
      "Strengthen programming fundamentals while building confidence with modern JavaScript patterns and TypeScript.",
    icon: Code2,
  },
  {
    step: "02",
    title: "React & Next.js",
    description:
      "Build responsive interfaces and explore component architecture, routing, rendering, and modern React workflows.",
    icon: BookOpen,
  },
  {
    step: "03",
    title: "Node.js, Express & REST APIs",
    description:
      "Continue developing backend skills by creating APIs, handling authentication and authorization, and connecting services.",
    icon: Server,
  },
  {
    step: "04",
    title: "Databases & Data",
    description:
      "Improve database fundamentals across MongoDB, MySQL, and PostgreSQL while learning practical data modeling.",
    icon: Database,
  },
  {
    step: "05",
    title: "Testing & Git/GitHub",
    description:
      "Build better development habits through testing, version control, collaboration, and maintainable code.",
    icon: GitBranch,
  },
];

const LearningJourney = () => {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="section-shell scroll-mt-28"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          {/* Left Content */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">
              LEARNING JOURNEY
            </span>

            <h2
              id="journey-heading"
              className="
                mt-4
                max-w-xl
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.05em]
                sm:mt-5
                sm:text-5xl
                lg:text-6xl
              "
            >
              Always learning. Always building.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-black/60 sm:mt-6 sm:text-base">
              As a fresher developer, I am focused on
              continuously improving my programming skills
              through practical projects and modern
              development technologies.
            </p>

            {/* Current Direction */}
            <div className="card card-green mt-7 max-w-lg p-5 sm:mt-8 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] sm:text-sm">
                Current direction
              </p>

              <p className="mt-3 text-base font-bold leading-snug sm:text-lg">
                Growing from individual technologies toward
                complete, production-minded full-stack
                applications.
              </p>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Timeline Line */}
         

            <div className="space-y-4 sm:space-y-5">
              {journeyItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.step}
                    className="
                      card
                      relative
                      ml-0
                      p-5
                      transition-transform
                      duration-200
                      hover:-translate-y-1
                      sm:p-7
                    "
                  >
                    <div className="flex gap-4 sm:gap-7">
                      {/* Step Number */}
                      <div
                        className="
                          relative
                          z-10
                          flex
                          size-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-black
                          bg-[#F5F5F3]
                          text-xs
                          font-black
                          sm:size-12
                          sm:text-sm
                        "
                      >
                        {item.step}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3 sm:gap-4">
                          <div className="min-w-0">
                            {/* Icon */}
                            <div className="icon-badge mb-3 sm:mb-4">
                              <Icon
                                size={20}
                                aria-hidden="true"
                              />
                            </div>

                            {/* Title */}
                            <h3 className="break-words text-lg font-extrabold tracking-tight sm:text-2xl">
                              {item.title}
                            </h3>
                          </div>

                          <ArrowUpRight
                            className="mt-1 shrink-0 opacity-45"
                            size={20}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Description */}
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;