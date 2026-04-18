"use client";

import { moodlePlugins } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useLang } from "./LangContext";

export default function MoodlePlugins() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="moodle" className="py-24 bg-[#F0F0EC]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#3B6EA5] text-xs font-medium tracking-widest uppercase mb-3">{t.moodle.eyebrow}</p>
        <h2 className="text-3xl font-bold text-[#1C2B3A] mb-4">{t.moodle.title}</h2>
        <p className="text-[#52525B] max-w-2xl mb-12">{t.moodle.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {moodlePlugins.map((plugin, idx) => (
            <div
              key={plugin.name}
              className="bg-white rounded-xl border border-[#E4E4E0] p-6 flex flex-col hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#9CA3AF]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-[#3B6EA5] bg-[#3B6EA5]/10 px-2 py-0.5 rounded-full font-medium">
                  {plugin.status[lang]}
                </span>
              </div>

              <div className="w-10 h-10 rounded-lg bg-[#F96D00]/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                    fill="#F96D00"
                  />
                </svg>
              </div>

              <h3 className="text-base font-bold text-[#1C2B3A] mb-1">{plugin.name}</h3>
              <p className="text-xs text-[#3B6EA5] mb-1">{plugin.institution}</p>
              <p className="text-xs text-[#9CA3AF] mb-4">{plugin.period}</p>

              <p className="text-sm text-[#52525B] leading-relaxed mb-4 flex-1">{plugin.description[lang]}</p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-[#52525B] uppercase tracking-widest mb-2">{t.moodle.features}</p>
                <ul className="flex flex-col gap-1.5">
                  {plugin.features[lang].map((f, i) => (
                    <li key={i} className="flex gap-2 text-xs text-[#52525B]">
                      <span className="text-[#3B6EA5] shrink-0 mt-0.5">▸</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E4E4E0]">
                {plugin.stack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-[#F0F0EC] text-xs text-[#52525B] rounded">
                    {tech}
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
