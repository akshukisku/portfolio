import { Code2, Database, ServerCog } from "lucide-react";

const facts = [
  {
    label: "Role",
    value: "Fresher Software Developer",
  },
  {
    label: "Focus",
    value: "Web Development",
  },
  {
    label: "Interests",
    value: "Backend, APIs & Databases",
  },
];

const focusAreas = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Creating responsive interfaces and practical web applications with modern frontend technologies.",
  },
  {
    icon: ServerCog,
    title: "Backend Development",
    text: "Understanding how APIs, authentication, server-side logic, and application architecture connect together.",
  },
  {
    icon: Database,
    title: "Data & APIs",
    text: "Working with databases and APIs to build applications that connect different parts of a product.",
  },
];

const About = () => {
  return (

<section
  id="about"
  aria-labelledby="about-heading"
  className="section-shell scroll-mt-28"
>
  <div className="container-main">
    <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      
      {/* Section Heading */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <span className="eyebrow">ABOUT ME</span>

        <h2
          id="about-heading"
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
          Learning by building things that actually work.
        </h2>
      </div>

      {/* Content */}
      <div className="min-w-0">
        {/* Description */}
        <div className="max-w-3xl">
          <p className="text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
            I am a fresher Software Developer with a strong interest in web
            development. I enjoy creating responsive websites and full-stack
            web applications. I have worked with both frontend and backend
            technologies and understand how different parts of a web
            application work together.
          </p>

          <p className="mt-4 text-base leading-7 text-black/65 sm:mt-5 sm:text-lg sm:leading-8">
            I am always interested in learning new technologies and improving
            my programming skills through practical projects.
          </p>
        </div>

        {/* Facts */}
        <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="
                rounded-[20px]
                border
                border-black/10
                bg-white
                p-4
                sm:rounded-[24px]
                sm:p-5
              "
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/45 sm:text-xs">
                {fact.label}
              </p>

              <p className="mt-2 text-sm font-bold leading-5 sm:mt-3">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            const backgrounds = [
              "bg-pastel-blue",
              "bg-pastel-pink",
              "bg-pastel-green",
            ];

            return (
              <article
                key={area.title}
                className={`
                  card
                  ${backgrounds[index]}
                  min-h-0
                  p-5
                  sm:p-6
                `}
              >
                <span className="icon-badge">
                  <Icon
                    size={17}
                    aria-hidden="true"
                  />
                </span>

                <h3 className="mt-4 text-base font-extrabold sm:mt-5 sm:text-lg">
                  {area.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/60">
                  {area.text}
                </p>
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

export default About;
