import {
  Braces,
  Database,
  Wrench,
  Server,
  TestTube2,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Braces,
    color: "card-blue",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "card-pink",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Authentication",
      "Authorization",
      "Socket.IO",
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "card-green",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Testing",
    icon: TestTube2,
    color: "card-yellow",
    skills: ["Jest", "Supertest"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "card-purple",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-shell scroll-mt-28"
    >
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">SKILLS</span>

            <h2
              id="skills-heading"
              className="
                mt-4
                max-w-3xl
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.05em]
                sm:mt-5
                sm:text-5xl
                lg:text-6xl
              "
            >
              Technologies I work with.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/55">
            A growing toolkit across frontend, backend, databases, testing,
            and everyday development tools.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const wide = index === 0;

            return (
              <article
                key={group.title}
                className={`
                  card
                  ${group.color}
                  ${wide ? "lg:col-span-2" : ""}
                `}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="icon-badge">
                      <Icon
                        size={17}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="mt-4 text-xl font-extrabold tracking-tight sm:mt-5 sm:text-2xl">
                      {group.title}
                    </h3>
                  </div>

                  <span className="pill shrink-0 bg-white/55">
                    {String(group.skills.length).padStart(2, "0")} skills
                  </span>
                </div>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-black/10
                        bg-white/65
                        px-3
                        py-2
                        text-[11px]
                        font-bold
                        leading-none
                        sm:text-xs
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
