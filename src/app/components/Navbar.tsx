"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation
        .map((item) => document.querySelector(item.href))
        .filter((section): section is HTMLElement => Boolean(section));

      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        px-3
        pt-3
        sm:px-6
        sm:pt-4
      "
    >
      <nav
        aria-label="Primary navigation"
        className="
          mx-auto
          w-full
          max-w-7xl
          rounded-[24px]
          border
          border-black/[0.08]
          bg-white/65
          px-2
          py-2
          shadow-[0_12px_40px_rgba(17,17,17,0.08)]
          backdrop-blur-2xl
          backdrop-saturate-150
          sm:rounded-full
          sm:px-3
          sm:py-3
        "
      >
        {/* Main Navbar */}

        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}

          <a
            href="#home"
            onClick={closeMenu}
            className="
              shrink-0
              rounded-full
              px-2
              py-2
              text-sm
              font-extrabold
              tracking-tight
              text-black
              transition
              hover:bg-black/5
              sm:px-3
            "
          >
            {siteConfig.name}
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = active === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    rounded-full
                    px-2.5
                    py-2
                    text-xs
                    font-bold
                    transition-all
                    duration-200
                    xl:px-3
                    ${
                      isActive
                        ? `
                          bg-black/[0.07]
                          text-black
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
                        `
                        : `
                          text-black/55
                          hover:bg-black/[0.04]
                          hover:text-black
                        `
                    }
                  `}
                >
                  {item.label}

                  {/* Active indicator */}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-1
                        left-1/2
                        h-0.5
                        w-3
                        -translate-x-1/2
                        rounded-full
                        bg-black
                      "
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}

          <a
            href="#contact"
            className="
              btn-primary
              hidden
              sm:inline-flex
            "
          >
            Let's Connect
          </a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
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
              bg-white/60
              text-black
              shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
              backdrop-blur-xl
              transition
              hover:bg-white/80
              lg:hidden
            "
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}

        {open && (
          <div
            id="mobile-navigation"
            className="
              mt-3
              border-t
              border-black/10
              pt-3
              lg:hidden
            "
          >
            <div className="grid gap-1.5">
              {navigation.map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = active === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      relative
                      rounded-2xl
                      border
                      px-4
                      py-3
                      text-sm
                      font-bold
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? `
                            border-black/10
                            bg-black/[0.06]
                            text-black
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
                          `
                          : `
                            border-transparent
                            text-black/60
                            hover:border-black/5
                            hover:bg-black/[0.04]
                            hover:text-black
                          `
                      }
                    `}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}

                      {isActive && (
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-black
                          "
                        />
                      )}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;