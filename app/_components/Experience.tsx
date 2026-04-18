"use client";

import { useState } from "react";
import { experiences } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useRole } from "./RoleContext";
import { useLang } from "./LangContext";

export default function Experience() {
  const { activeRole } = useRole();
  const { lang } = useLang();
  const t = ui[lang];
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const visibleExperiences = experiences.filter((exp) =>
    exp.relevantFor.includes(activeRole)
  );

  return (
    <section id="experience" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#3B6EA5] text-xs font-medium tracking-widest uppercase mb-3">{t.experience.eyebrow}</p>
        <h2 className="text-3xl font-bold text-[#1C2B3A] mb-12">{t.experience.title}</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E4E4E0] ml-3 hidden md:block" />

          <div className="flex flex-col gap-10">
            {visibleExperiences.map((exp) => (
              <div key={exp.company} className="md:pl-12 relative">
                <div className="hidden md:block absolute left-0 top-1.5 w-7 h-7 rounded-full bg-white border-2 border-[#1C2B3A] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1C2B3A]" />
                </div>

                <div className="bg-white rounded-xl border border-[#E4E4E0] p-6 hover:shadow-sm transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-[#1C2B3A]">{exp.role}</h3>
                      <p className="text-[#3B6EA5] text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#52525B] bg-[#F0F0EC] px-2.5 py-1 rounded-full">{exp.period}</p>
                      <p className="text-xs text-[#9CA3AF] mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.highlights[activeRole][lang].map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[#52525B]">
                        <span className="text-[#3B6EA5] mt-0.5 shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-[#F0F0EC] text-xs text-[#52525B] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {"caseStudy" in exp && exp.caseStudy && (
                    <div>
                      <button
                        onClick={() => setExpandedCase(expandedCase === exp.company ? null : exp.company)}
                        className="flex items-center gap-2 text-xs font-medium text-[#3B6EA5] hover:text-[#1C2B3A] transition-colors cursor-pointer"
                      >
                        <svg
                          width="12" height="12" viewBox="0 0 12 12" fill="none"
                          className={`transition-transform ${expandedCase === exp.company ? "rotate-90" : ""}`}
                        >
                          <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {expandedCase === exp.company ? t.experience.hideCaseStudy : t.experience.viewCaseStudy}
                      </button>

                      {expandedCase === exp.company && (
                        <div className="mt-4 pt-4 border-t border-[#E4E4E0]">
                          <h4 className="text-sm font-semibold text-[#1C2B3A] mb-2">{exp.caseStudy.title}</h4>
                          <p className="text-sm text-[#52525B] mb-4">{exp.caseStudy.description[lang]}</p>
                          <div className="bg-[#F0F0EC] rounded-lg p-4">
                            <p className="text-xs font-semibold text-[#1C2B3A] uppercase tracking-wider mb-3">
                              {t.experience.architecture}
                            </p>
                            <ul className="flex flex-col gap-2">
                              {exp.caseStudy.architecture[lang].map((item, i) => (
                                <li key={i} className="flex gap-2 text-sm text-[#52525B]">
                                  <span className="text-[#3B6EA5] shrink-0 font-mono text-xs mt-0.5">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <p className="text-xs text-[#52525B] mt-3 italic">{exp.caseStudy.outcome[lang]}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
