"use client";

import { researchProjects } from "../_lib/data";
import { ui } from "../_lib/translations";
import { useLang } from "./LangContext";

export default function Research() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="research" className="py-24 bg-[#F0F0EC]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#3B6EA5] text-xs font-medium tracking-widest uppercase mb-3">
          {t.research.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-[#1C2B3A] mb-4">{t.research.title}</h2>
        <p className="text-[#52525B] max-w-2xl mb-12">{t.research.subtitle}</p>

        <div className="flex flex-col gap-10">
          {researchProjects.map((project) => (
            <div key={project.name} className="bg-white rounded-xl border border-[#E4E4E0] overflow-hidden">
              <div className="p-6 border-b border-[#E4E4E0]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-[#1C2B3A]/10 text-[#1C2B3A] text-xs font-medium rounded">
                        {project.type}
                      </span>
                      <span className="text-xs text-[#9CA3AF]">{project.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1C2B3A]">{project.name}</h3>
                    <p className="text-[#3B6EA5] text-sm mt-0.5">{project.institution} · {project.location}</p>
                  </div>
                  <div className="bg-[#F0F0EC] rounded-lg px-3 py-2 text-center">
                    <p className="text-xs text-[#52525B]">{t.research.outcome}</p>
                    <p className="text-xs font-medium text-[#1C2B3A] mt-0.5 max-w-40">{project.outcome[lang]}</p>
                  </div>
                </div>
                <p className="text-[#52525B] text-sm mt-4 leading-relaxed">{project.description[lang]}</p>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contributions */}
                <div>
                  <h4 className="text-xs font-semibold text-[#52525B] uppercase tracking-widest mb-3">
                    {t.research.contributions}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {project.contributions[lang].map((c, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[#52525B]">
                        <span className="text-[#3B6EA5] shrink-0 mt-0.5">▸</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture diagram */}
                <div>
                  <h4 className="text-xs font-semibold text-[#52525B] uppercase tracking-widest mb-3">
                    {t.research.architecture}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {project.diagramLayers.map((layer, i) => (
                      <div key={i} className="border border-[#E4E4E0] rounded-lg overflow-hidden">
                        <div className="bg-[#1C2B3A] px-3 py-1.5">
                          <p className="text-xs font-medium text-white">
                            {t.research.layerLabels[layer.label] ?? layer.label}
                          </p>
                        </div>
                        <div className="px-3 py-2 flex flex-wrap gap-2 bg-[#F8F8F6]">
                          {layer.items.map((item) => (
                            <span key={item} className="text-xs text-[#52525B] bg-white border border-[#E4E4E0] px-2 py-1 rounded">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-[#F0F0EC] text-xs text-[#52525B] rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
