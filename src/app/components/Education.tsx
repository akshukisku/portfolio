import {
  Award,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const educationItems = [
  {
    title: "Bachelor of Technology (B.Tech)",
    institution: "Guru Nanak Institute of Technology",
    period: "2022 – 2025",
    description:
      "Computer Science and Engineering (CSE)",
  },
  {
    title: "Diploma",
    institution: "DR B.C Roy Polytechnic",
    period: "2019 – 2022",
    description:
      "Computer Science and Technology (CST)",
  },
  {
    title: "Higher Secondary (12th)",
    institution:
      "West Bengal Council of Higher Secondary Education",
    period: "2019",
    description:
      "Geo Science",
  },
  {
    title: "Secondary (10th)",
    institution:
      "West Bengal Council of Higher Secondary Education",
    period: "2017",
    description:
      "General",
  },
];

const certificationItems = [
  {
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    year: "[Year]",
  },
  {
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    year: "[Year]",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section-shell scroll-mt-28"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Section Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">
              EDUCATION & CERTIFICATIONS
            </span>

            <h2
              id="education-heading"
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
              The foundation behind my development journey.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-black/60 sm:mt-6 sm:text-base">
              My academic background has helped me build a strong
              foundation in programming, computer science, and
              software development.
            </p>
          </div>

          {/* Education + Certifications */}
          <div className="space-y-6 sm:space-y-8">
            {/* Education */}
            <div className="card card-blue p-5 sm:p-7 lg:p-9">
              <div className="flex items-start gap-4">
                <div className="icon-badge shrink-0 bg-white/70">
                  <GraduationCap
                    size={22}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] sm:text-sm">
                    Education
                  </p>

                  <div className="mt-6 space-y-7">
                    {educationItems.map((item) => (
                      <article
                        key={`${item.title}-${item.institution}`}
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                          <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                            {item.title}
                          </h3>

                          <span className="pill w-fit bg-white/75">
                            {item.period}
                          </span>
                        </div>

                        <p className="mt-2 text-sm font-semibold sm:text-base">
                          {item.institution}
                        </p>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-black/60">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="mb-5">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-black/45">
                  Certifications
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {certificationItems.map(
                  (item, index) => (
                    <article
                      key={`${item.title}-${index}`}
                      className={`
                        card
                        p-5
                        sm:p-6
                        ${
                          index % 2 === 0
                            ? "card-yellow"
                            : "card-purple"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="icon-badge bg-white/75">
                          {index % 2 === 0 ? (
                            <Award
                              size={20}
                              aria-hidden="true"
                            />
                          ) : (
                            <ShieldCheck
                              size={20}
                              aria-hidden="true"
                            />
                          )}
                        </div>

                        <span className="pill bg-white/75">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="mt-7 text-lg font-extrabold tracking-tight sm:mt-8">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-black/60">
                        {item.issuer}
                      </p>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
