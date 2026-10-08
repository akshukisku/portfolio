import {
  ArrowUpRight,
  Braces,
  Database,
  Layers3,
  Server,
  Waypoints,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "I can create responsive and interactive user interfaces using React, Next.js, JavaScript, TypeScript, Tailwind CSS, and Material UI.",
    icon: Braces,
    color: "card-blue",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "I can create REST APIs and backend applications using Node.js and Express.js.",
    icon: Server,
    color: "card-pink",
  },
  {
    number: "03",
    title: "Database Development",
    description:
      "I can work with databases such as MongoDB, MySQL, and PostgreSQL.",
    icon: Database,
    color: "card-green",
  },
  {
    number: "04",
    title: "Full-Stack Development",
    description:
      "I can build complete web applications by connecting frontend applications with backend APIs and databases.",
    icon: Layers3,
    color: "card-purple",
  },
  {
    number: "05",
    title: "API Integration",
    description:
      "I can integrate external APIs and display dynamic data in web applications.",
    icon: Waypoints,
    color: "card-yellow",
  },
];

const Capabilities = () => {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="section-shell"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow">
              WHAT I CAN DO
            </span>

            <h2
              id="capabilities-heading"
              className="
                mt-4
                max-w-lg
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.05em]
                sm:mt-5
                sm:text-5xl
                lg:text-6xl
              "
            >
              Turning skills into useful products.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-black/60 sm:mt-6 sm:text-base">
              Skills describe the technologies I know.
              Capabilities describe how I can use those
              technologies to build practical applications.
            </p>
          </div>

          {/* Capability Cards */}
          <div className="grid grid-cols-1 gap-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className={`
                    card
                    ${capability.color}
                    group
                    flex
                    min-h-0
                    flex-col
                    gap-6
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                    sm:gap-7
                  `}
                >
                  {/* Icon + Content */}
                  <div className="flex min-w-0 gap-4 sm:gap-5">
                    <span className="icon-badge shrink-0">
                      <Icon
                        size={17}
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0">
                      {/* Number + Title */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-xs font-extrabold tracking-[0.14em] text-black/45">
                          {capability.number}
                        </span>

                        <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                          {capability.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <span
                    aria-hidden="true"
                    className="
                      hidden
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      bg-white/60
                      transition-transform
                      duration-200
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      sm:flex
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
