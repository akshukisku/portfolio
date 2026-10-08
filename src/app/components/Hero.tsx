import { ArrowDownRight, Mail, Target } from "lucide-react";
import { siteConfig } from "@/config/site";

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "REST API",
];

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        overflow-hidden
        pt-24
        sm:pt-28
        lg:pt-32
      "
    >
      {/* =========================================
          BACKGROUND AMBIENT GLOWS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-32
          -z-10
          h-64
          w-64
          rounded-full
          bg-purple-500/15
          blur-3xl
          sm:-left-20
          sm:h-80
          sm:w-80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          -z-10
          h-72
          w-72
          rounded-full
          bg-blue-500/15
          blur-3xl
          sm:-right-20
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -z-10
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-pink-500/10
          blur-3xl
          sm:h-80
          sm:w-80
        "
      />

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            min-h-[calc(100svh-6rem)]
            items-center
            gap-14
            py-12
            sm:min-h-[calc(100svh-7rem)]
            sm:py-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
            lg:py-20
            xl:grid-cols-[1.1fr_0.9fr]
            xl:gap-20
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className="w-full min-w-0">
            {/* Eyebrow */}

            <span className="eyebrow">
              SOFTWARE DEVELOPER · FRESHER
            </span>

            {/* Heading */}

            <h1
              id="hero-heading"
              className="
                mt-5
                max-w-4xl
                text-display
                text-[clamp(3rem,11vw,7.5rem)]
                sm:text-[clamp(4rem,8vw,6rem)]
                lg:text-[clamp(4.5rem,6.5vw,7rem)]
                xl:text-[7rem]
              "
            >
              Hello, I&apos;m{" "}
              <span className="relative inline-block">
                {siteConfig.name}

                {/* Gradient underline */}

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-1.5
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-purple-500
                    via-blue-500
                    to-cyan-400
                    opacity-80
                    sm:h-2
                  "
                />
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-2xl
                text-body
                text-sm
                leading-7
                sm:mt-8
                sm:text-base
                lg:text-lg
              "
            >
              {siteConfig.description}
            </p>

            {/* =========================================
                CTA BUTTONS
            ========================================= */}

            <div
              className="
                mt-7
                flex
                w-full
                flex-col
                gap-3
                sm:mt-8
                sm:flex-row
                sm:flex-wrap
              "
            >
              <a
                href="#projects"
                className="
                  btn-primary
                  w-full
                  sm:w-auto
                "
              >
                View My Projects

                <ArrowDownRight
                  className="ml-2"
                  size={17}
                  aria-hidden="true"
                />
              </a>

              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-secondary
                  w-full
                  sm:w-auto
                "
              >
                <Target
                  className="mr-2"
                  size={17}
                  aria-hidden="true"
                />

                GitHub Profile
              </a>

              <a
                href="#contact"
                className="
                  btn-secondary
                  w-full
                  sm:w-auto
                "
              >
                <Mail
                  className="mr-2"
                  size={17}
                  aria-hidden="true"
                />

                Contact Me
              </a>
            </div>

            {/* =========================================
                TECHNOLOGIES
            ========================================= */}

            <div
              aria-label="Technology categories"
              className="
                mt-9
                flex
                w-full
                gap-2
                overflow-x-auto
                pb-2
                scrollbar-none
                sm:mt-12
              "
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    pill
                    shrink-0
                    whitespace-nowrap
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT HERO VISUAL
          ========================================= */}

          <div
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[520px]
              items-center
              justify-center
              lg:justify-end
            "
          >
            {/* Glow behind card */}

            <div
              className="
                pointer-events-none
                absolute
                inset-10
                -z-10
                rounded-full
                bg-purple-500/20
                blur-3xl
              "
            />

            {/* Main Glass Card */}

            <div
              className="
                glass
                relative
                w-full
                max-w-[480px]
                overflow-visible
                rounded-[28px]
                p-4
                sm:rounded-[32px]
                sm:p-5
                lg:p-6
              "
            >
              {/* =========================================
                  CARD HEADER
              ========================================= */}

              <div className="flex items-center justify-between">
                <span
                  className="
                    pill
                    bg-white/[0.06]
                    text-[10px]
                    sm:text-xs
                  "
                >
                  01 / DEVELOPER
                </span>

                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_14px_rgba(52,211,153,0.8)]
                    sm:h-3
                    sm:w-3
                  "
                  aria-hidden="true"
                />
              </div>

              {/* =========================================
                  CENTER VISUAL
              ========================================= */}

              <div
                className="
                  flex
                  min-h-[250px]
                  items-center
                  justify-center
                  py-8
                  sm:min-h-[290px]
                  sm:py-10
                  lg:min-h-[300px]
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-36
                    w-36
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    shadow-[0_0_80px_rgba(139,92,246,0.15)]
                    backdrop-blur-xl
                    sm:h-44
                    sm:w-44
                    lg:h-52
                    lg:w-52
                  "
                >
                  {/* Inner ring */}

                  <div
                    className="
                      absolute
                      inset-3
                      rounded-full
                      border
                      border-white/10
                      sm:inset-4
                    "
                  />

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      h-20
                      w-20
                      rounded-full
                      bg-purple-500/20
                      blur-2xl
                      sm:h-28
                      sm:w-28
                    "
                  />

                  {/* Code */}

                  <span
                    className="
                      relative
                      z-10
                      text-4xl
                      font-black
                      tracking-tighter
                      text-white
                      sm:text-5xl
                      lg:text-6xl
                    "
                  >
                    {"</>"}
                  </span>
                </div>
              </div>

              {/* =========================================
                  CURRENT FOCUS
              ========================================= */}

              <div
                className="
                  rounded-[20px]
                  border
                  border-white/10
                  bg-black/20
                  p-4
                  backdrop-blur-2xl
                  sm:rounded-[24px]
                  sm:p-5
                  lg:p-6
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white/40
                    sm:text-xs
                  "
                >
                  Current focus
                </p>

                <p
                  className="
                    mt-2
                    text-lg
                    font-extrabold
                    tracking-tight
                    text-white
                    sm:mt-3
                    sm:text-xl
                    lg:text-2xl
                  "
                >
                  Building practical web experiences.
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-white/50
                    sm:mt-3
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Learning, experimenting, and turning ideas into
                  responsive interfaces and full-stack applications.
                </p>
              </div>

              {/* =========================================
                  FLOATING BADGE
              ========================================= */}

              <div
                className="
                  absolute
                  -right-2
                  top-14
                  flex
                  h-14
                  w-14
                  rotate-6
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-center
                  text-[8px]
                  font-extrabold
                  uppercase
                  leading-3
                  text-white
                  shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                  backdrop-blur-xl
                  sm:-right-4
                  sm:top-16
                  sm:h-16
                  sm:w-16
                  sm:text-[9px]
                  md:h-20
                  md:w-20
                  md:text-[10px]
                  lg:top-20
                "
              >
                Build
                <br />
                Learn
                <br />
                Repeat
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;