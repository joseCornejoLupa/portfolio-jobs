"use client";

import { personalInfo } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useLang } from "./LangContext";

export default function Contact() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="contact" className="py-24 bg-[#1C2B3A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#3B6EA5] text-xs font-medium tracking-widest uppercase mb-3">{t.contact.eyebrow}</p>
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-[#94A3B8] mb-10">{t.contact.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1C2B3A] text-sm font-semibold rounded-lg hover:bg-[#F0F0EC] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              {t.contact.sendEmail}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-lg hover:border-white/40 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-lg hover:border-white/40 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-[#94A3B8] text-xs">
              Jose Manuel Cornejo Lupa · {personalInfo.location}
            </p>
            <p className="text-[#94A3B8]/50 text-xs mt-1">
              {t.contact.availableRemote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
