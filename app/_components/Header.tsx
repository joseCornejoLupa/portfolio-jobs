"use client";

import { useState } from "react";
import { roles, type Lang } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useRole } from "./RoleContext";
import { useLang } from "./LangContext";

const LANGS: { id: Lang; flag: string }[] = [
  { id: "en", flag: "EN" },
  { id: "es", flag: "ES" },
  { id: "fr", flag: "FR" },
];

export default function Header() {
  const { activeRole, setActiveRole } = useRole();
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = ui[lang];

  const navLinks = [
    { href: "#about",      label: t.sectionLabels.about },
    { href: "#experience", label: t.sectionLabels.experience },
    { href: "#research",   label: t.sectionLabels.research },
    { href: "#patents",    label: t.sectionLabels.patents },
    { href: "#articles",   label: t.sectionLabels.articles },
    { href: "#contact",    label: t.sectionLabels.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#E4E4E0]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#3B6EA5]" />
          <span className="text-[#1C2B3A] font-semibold text-sm tracking-wide">Jose Cornejo</span>
        </a>

        {/* Role Toggle */}
        <div className="hidden md:flex items-center gap-1 bg-[#EEEEE8] rounded-lg p-1">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 cursor-pointer ${
                activeRole === role.id
                  ? "bg-[#1C2B3A] text-white shadow-sm"
                  : "text-[#52525B] hover:text-[#1C2B3A]"
              }`}
            >
              {role.label[lang]}
            </button>
          ))}
        </div>

        {/* Nav links + Lang toggle */}
        <div className="hidden lg:flex items-center gap-5">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#52525B] hover:text-[#1C2B3A] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language toggle */}
          <div className="flex items-center gap-0.5 bg-[#EEEEE8] rounded-lg p-1">
            {LANGS.map((l) => (
              <button
                key={l.id}
                onClick={() => setLang(l.id)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                  lang === l.id
                    ? "bg-[#1C2B3A] text-white shadow-sm"
                    : "text-[#52525B] hover:text-[#1C2B3A]"
                }`}
              >
                {l.flag}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#1C2B3A] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M4 16L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#E4E4E0] bg-[#FAFAF8] px-6 py-4 flex flex-col gap-4">
          {/* Role toggle mobile */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#52525B] font-medium mb-1">{t.viewAs}</p>
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => { setActiveRole(role.id); setMenuOpen(false); }}
                className={`text-left px-3 py-2 text-sm rounded-md transition-all cursor-pointer ${
                  activeRole === role.id
                    ? "bg-[#1C2B3A] text-white"
                    : "text-[#52525B] hover:bg-[#EEEEE8]"
                }`}
              >
                {role.label[lang]}
              </button>
            ))}
          </div>

          {/* Lang toggle mobile */}
          <div className="flex gap-1">
            {LANGS.map((l) => (
              <button
                key={l.id}
                onClick={() => setLang(l.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  lang === l.id
                    ? "bg-[#1C2B3A] text-white"
                    : "text-[#52525B] bg-[#EEEEE8] hover:text-[#1C2B3A]"
                }`}
              >
                {l.flag}
              </button>
            ))}
          </div>

          <hr className="border-[#E4E4E0]" />
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#52525B] hover:text-[#1C2B3A] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
