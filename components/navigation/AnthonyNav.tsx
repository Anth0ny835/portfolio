"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

const links = [
  ["01", "Home", "home"],
  ["02", "Projects", "projects"],
  ["03", "Experience", "experience"],
  ["04", "About", "about"],
  ["05", "Resume", "resume"],
  ["06", "Contact", "contact"],
];

export default function AnthonyNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map(([, , id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-22% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="antNavShell">
      <a className="skipLink" href="#home">Skip to content</a>
      <div className="antNav">
        <button className="antBrand" onClick={() => go("home")} aria-label="Go to home">
          ANT<span>.</span>
        </button>

        <nav className="antDesktopNav" aria-label="Primary navigation">
          {links.map(([number, label, id]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => go(id)}
              aria-current={active === id ? "page" : undefined}
            >
              <small>{number}</small>
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <button
          className="antMenuButton"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <Icon name={open ? "close" : "menu"} size={19} />
        </button>
      </div>

      <nav className={`antMobileNav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {links.map(([number, label, id]) => (
          <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
            <small>{number}</small><span>{label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
