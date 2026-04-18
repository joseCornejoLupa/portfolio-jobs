"use client";

import { articles } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useLang } from "./LangContext";

export default function Articles() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="articles" className="py-24 bg-[#F0F0EC]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#3B6EA5] text-xs font-medium tracking-widest uppercase mb-3">{t.articles.eyebrow}</p>
        <h2 className="text-3xl font-bold text-[#1C2B3A] mb-4">{t.articles.title}</h2>
        <p className="text-[#52525B] max-w-2xl mb-12">{t.articles.subtitle}</p>

        {articles.length === 0 ? (
          <div className="bg-white rounded-xl border border-dashed border-[#C4C4C0] p-12 text-center">
            <div className="w-12 h-12 rounded-full bg-[#F0F0EC] flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <line x1="10" y1="9" x2="8" y2="9"/>
              </svg>
            </div>
            <p className="text-[#52525B] font-medium text-sm">{t.articles.comingSoon}</p>
            <p className="text-[#9CA3AF] text-xs mt-1">{t.articles.comingSoonSub}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {articles.map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-xl border border-[#E4E4E0] p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-[#9CA3AF]">{article.year}</span>
                      <span className="text-xs text-[#52525B] bg-[#F0F0EC] px-2 py-0.5 rounded">{article.venue}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#1C2B3A]">{article.title}</h3>
                    <p className="text-sm text-[#52525B] mt-2">{article.description[lang]}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-[#F0F0EC] text-xs text-[#52525B] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-[#3B6EA5] hover:text-[#1C2B3A] transition-colors shrink-0"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      {t.articles.read}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
