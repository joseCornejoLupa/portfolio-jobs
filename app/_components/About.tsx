"use client";

import { education, certifications, aboutDescriptions } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useRole } from "./RoleContext";
import { useLang } from "./LangContext";

export default function About() {
  const { activeRole } = useRole();
  const { lang } = useLang();
  const t = ui[lang];
  const desc = aboutDescriptions[activeRole];

  return (
    <section id="about" className="py-24 bg-[#F0F0EC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[#3B6EA5] text-xs font-medium tracking-widest uppercase mb-3">{t.about.eyebrow}</p>
            <h2 className="text-3xl font-bold text-[#1C2B3A] mb-6">{desc.headline[lang]}</h2>
            <p className="text-[#52525B] leading-relaxed mb-6">{desc.body[lang]}</p>

            <div className="flex flex-wrap gap-3">
              {[t.about.tagRemote, t.about.tagInternational, t.about.tagTrilingual, t.about.tagAgile].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white border border-[#E4E4E0] text-xs text-[#52525B] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            {/* Education */}
            <div className="bg-white rounded-xl border border-[#E4E4E0] p-6">
              <h3 className="text-xs font-semibold text-[#52525B] uppercase tracking-widest mb-4">{t.about.education}</h3>
              {education.map((edu) => (
                <div key={edu.degree.en}>
                  <p className="font-semibold text-[#1C2B3A] text-sm">{edu.degree[lang]}</p>
                  <p className="text-[#52525B] text-sm mt-1">{edu.institution}</p>
                  <p className="text-[#9CA3AF] text-xs mt-1">{edu.location} · {edu.period}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl border border-[#E4E4E0] p-6">
              <h3 className="text-xs font-semibold text-[#52525B] uppercase tracking-widest mb-4">{t.about.certifications}</h3>
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1C2B3A]/10 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1C2B3A" strokeWidth="2">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="m15.477 12.89 1.515 5.098a.5.5 0 0 1-.816.532l-1.908-1.908a.5.5 0 0 0-.707 0l-1.908 1.908a.5.5 0 0 1-.816-.532l1.515-5.098"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1C2B3A]">{cert.name}</p>
                    <p className="text-xs text-[#52525B]">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: t.about.statYearsValue,     label: t.about.statYearsLabel },
                { value: t.about.statPatentsValue,   label: t.about.statPatentsLabel },
                { value: t.about.statLanguagesValue, label: t.about.statLanguagesLabel },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-[#E4E4E0] p-4 text-center">
                  <p className="text-2xl font-bold text-[#1C2B3A]">{stat.value}</p>
                  <p className="text-xs text-[#52525B] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
