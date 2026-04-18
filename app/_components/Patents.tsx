"use client";

import { patents } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useLang } from "./LangContext";

export default function Patents() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="patents" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#3B6EA5] text-xs font-medium tracking-widest uppercase mb-3">{t.patents.eyebrow}</p>
        <h2 className="text-3xl font-bold text-[#1C2B3A] mb-4">{t.patents.title}</h2>
        <p className="text-[#52525B] max-w-2xl mb-12">{t.patents.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((patent, idx) => (
            <div
              key={patent.title}
              className="bg-white rounded-xl border border-[#E4E4E0] p-6 hover:shadow-sm transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-7xl font-black text-[#1C2B3A]/5 select-none leading-none">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1C2B3A] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-[#52525B] bg-[#F0F0EC] px-2 py-0.5 rounded">{patent.type}</span>
                  <h3 className="text-lg font-bold text-[#1C2B3A] mt-1">{patent.title}</h3>
                </div>
              </div>

              <p className="text-sm text-[#52525B] leading-relaxed mb-4">{patent.description[lang]}</p>

              <div className="bg-[#F0F0EC] rounded-lg p-3 mb-4">
                <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider">{t.patents.registration}</p>
                <p className="text-xs font-mono text-[#1C2B3A] mt-1">{patent.registration}</p>
                <p className="text-xs text-[#52525B] mt-0.5">{patent.country} · {patent.year}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {patent.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-[#F0F0EC] text-xs text-[#52525B] rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
