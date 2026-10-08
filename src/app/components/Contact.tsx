import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { siteConfig } from "@/config/site";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "GitHub Profile",
    href: siteConfig.githubUrl,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Akshay Kisku",
    href: siteConfig.linkedin,
    icon: FaLinkedin,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-shell scroll-mt-28"
    >
      <div className="container-main">
        <div className="card card-pink overflow-hidden p-5 sm:p-8 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
            {/* Contact Introduction */}
            <div>
              <span className="eyebrow">
                CONTACT
              </span>

              <h2
                id="contact-heading"
                className="
                  mt-4
                  max-w-3xl
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-[-0.05em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Let&apos;s build something meaningful together.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:mt-6 sm:text-base">
                I am open to learning opportunities, internships, and junior
                developer roles where I can contribute, learn from a team, and
                keep growing as a software developer.
              </p>

              {/* CTA */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-primary mt-6 sm:mt-8"
              >
                Get in Touch

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Contact Links */}
            <div className="space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-black/10
                      bg-white/60
                      p-3
                      transition-transform
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-white
                      sm:gap-4
                      sm:p-4
                    "
                  >
                    {/* Icon */}
                    <span className="icon-badge shrink-0 bg-white">
                      <Icon
                        size={19}
                        aria-hidden="true"
                      />
                    </span>

                    {/* Text */}
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-black uppercase tracking-[0.14em] sm:text-xs">
                        {item.label}
                      </span>

                      <span className="mt-1 block truncate text-xs font-semibold sm:text-sm">
                        {item.value}
                      </span>
                    </span>

                    {/* Arrow */}
                    <ArrowUpRight
                      className="ml-auto shrink-0 opacity-50"
                      size={18}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;