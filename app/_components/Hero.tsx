"use client";

import Image from "next/image";
import { SiOrcid } from "react-icons/si";
import {
  HiOutlineShieldCheck, HiOutlineLightBulb, HiOutlineGlobeAlt,
  HiOutlineEye, HiOutlineAcademicCap, HiOutlineClipboard,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import { personalInfo, roles, languages, featuredSkills, softSkills } from "../_lib/data";
import { ui } from "../_lib/translations";
import { techIcons } from "../_lib/techIcons";
import { useRole } from "./RoleContext";
import { useLang } from "./LangContext";

const softSkillIcons: Record<string, IconType> = {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineEye,
  HiOutlineAcademicCap,
  HiOutlineClipboardList: HiOutlineClipboard,
};

const stackTrack = [...featuredSkills, ...featuredSkills];

export default function Hero() {
  const { activeRole, setActiveRole } = useRole();
  const { lang } = useLang();
  const t = ui[lang];
  const currentRole = roles.find((r) => r.id === activeRole)!;

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-8 lg:gap-12 items-center">

          {/* Tech stack vertical carousel */}
          <div className="hidden lg:flex flex-col items-center gap-3 self-stretch">
            <p className="text-[10px] text-[#9CA3AF] font-medium uppercase tracking-widest mb-1 whitespace-nowrap"
               style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              {t.hero.techStack}
            </p>
            <div className="flex-1 overflow-hidden relative w-full group" style={{ maxHeight: 340 }}>
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
              <div
                className="flex flex-col gap-2 group-hover:[animation-play-state:paused]"
                style={{ animation: "scroll-up 14s linear infinite" }}
              >
                {stackTrack.map((skill, i) => {
                  const Icon = techIcons[skill];
                  return (
                    <span
                      key={`${skill}-${i}`}
                      className="flex flex-col items-center gap-1 px-2 py-2 text-[9px] font-medium bg-white border border-[#E4E4E0] text-[#52525B] rounded-md text-center leading-tight hover:border-[#1C2B3A] hover:text-[#1C2B3A] transition-colors"
                    >
                      {Icon && <Icon size={14} />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-[#3B6EA5] text-sm font-medium tracking-widest uppercase mb-4">
              {currentRole.label[lang]}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1C2B3A] leading-tight mb-2">
              Jose Manuel
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C2B3A] leading-tight mb-6">
              Cornejo Lupa
            </h1>

            <p className="text-[#52525B] text-base leading-relaxed max-w-lg mb-8">
              {personalInfo.summary[activeRole][lang]}
            </p>

            {/* Role selector pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 cursor-pointer ${
                    activeRole === role.id
                      ? "bg-[#1C2B3A] text-white border-[#1C2B3A]"
                      : "bg-transparent text-[#52525B] border-[#C4C4C0] hover:border-[#1C2B3A] hover:text-[#1C2B3A]"
                  }`}
                >
                  {role.label[lang]}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#1C2B3A] text-white text-sm font-medium rounded-lg hover:bg-[#2D4A6A] transition-colors"
              >
                {t.hero.getInTouch}
              </a>
              <a
                href="#experience"
                className="px-6 py-3 border border-[#C4C4C0] text-[#1C2B3A] text-sm font-medium rounded-lg hover:border-[#1C2B3A] transition-colors"
              >
                {t.hero.viewExperience}
              </a>
            </div>

            {/* Languages */}
            <div className="flex gap-6 mb-6">
              {languages.map((l) => (
                <div key={l.name} className="flex flex-col gap-1">
                  <span className="text-xs text-[#52525B] font-medium">{l.name}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i < l.dots ? "bg-[#1C2B3A]" : "bg-[#D4D4D0]"}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#9CA3AF]">{l.level[lang]}</span>
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div>
              <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-widest mb-3">{t.hero.softSkills}</p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => {
                  const Icon = softSkillIcons[s.icon];
                  return (
                    <span
                      key={s.label.en}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white border border-[#E4E4E0] text-[#52525B] rounded-full hover:border-[#1C2B3A] hover:text-[#1C2B3A] transition-colors"
                    >
                      {Icon && <Icon size={12} />}
                      {s.label[lang]}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Mobile tech stack */}
            <div className="lg:hidden mt-6">
              <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-widest mb-2">{t.hero.techStack}</p>
              <div className="flex flex-wrap gap-1.5">
                {featuredSkills.map((skill) => {
                  const Icon = techIcons[skill];
                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-white border border-[#E4E4E0] text-[#52525B] rounded-md hover:border-[#1C2B3A] hover:text-[#1C2B3A] transition-colors"
                    >
                      {Icon && <Icon size={11} />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative">
                <Image
                  src="/hero-profile.jpg"
                  alt="Jose Manuel Cornejo Lupa"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#EEEEE8] rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#1C2B3A]/10 rounded-xl -z-10" />
              <a
                href="#patents"
                className="absolute -bottom-3 -right-3 bg-white border border-[#E4E4E0] shadow-md rounded-xl px-3 py-2 hover:border-[#1C2B3A] hover:shadow-lg transition-all"
              >
                <p className="text-xs text-[#52525B]">{t.hero.patents}</p>
                <p className="text-lg font-bold text-[#1C2B3A]">2</p>
              </a>
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-16 pt-8 border-t border-[#E4E4E0] flex flex-wrap gap-6 text-sm text-[#52525B]">
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            {personalInfo.location}
          </span>
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            {personalInfo.email}
          </span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#1C2B3A] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#1C2B3A] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
          <a href="https://orcid.org/0000-0003-2383-4350" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#1C2B3A] transition-colors">
            <SiOrcid size={14} />
            ORCID
          </a>
        </div>
      </div>
    </section>
  );
}
