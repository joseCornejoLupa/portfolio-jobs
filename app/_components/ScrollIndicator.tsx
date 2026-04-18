"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useLang } from "./LangContext";

interface Props {
  sections: SectionId[];
}

export default function ScrollIndicator({ sections }: Props) {
  const { lang } = useLang();
  const sectionLabels = ui[lang].sectionLabels;
  const [activeSection, setActiveSection] = useState<SectionId>(sections[0]);
  const [hoveredSection, setHoveredSection] = useState<SectionId | null>(null);

  // Reset active section when role changes (sections array changes)
  useEffect(() => {
    setActiveSection(sections[0]);
  }, [sections]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Wait one frame so newly mounted sections exist in the DOM
    const frameId = requestAnimationFrame(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setActiveSection(id);
            });
          },
          { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
        );

        observer.observe(el);
        observers.push(observer);
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      observers.forEach((o) => o.disconnect());
    };
  }, [sections]);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3">
      {sections.map((id) => {
        const isActive = activeSection === id;
        const isHovered = hoveredSection === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHoveredSection(id)}
            onMouseLeave={() => setHoveredSection(null)}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label={`Go to ${sectionLabels[id]}`}
          >
            <span
              className={`text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                isHovered || isActive
                  ? "opacity-100 translate-x-0 text-[#1C2B3A]"
                  : "opacity-0 translate-x-2 pointer-events-none"
              }`}
            >
              {sectionLabels[id]}
            </span>

            <div
              className={`rounded-full transition-all duration-200 ${
                isActive
                  ? "w-2.5 h-2.5 bg-[#1C2B3A]"
                  : isHovered
                  ? "w-2 h-2 bg-[#1C2B3A]/50"
                  : "w-1.5 h-1.5 bg-[#C4C4C0]"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
