"use client";

import {
  HiOutlineShieldCheck, HiOutlineLightBulb, HiOutlineGlobeAlt,
  HiOutlineEye, HiOutlineAcademicCap, HiOutlineClipboard,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import { skills, softSkills } from "../_lib/data";
import { techIcons } from "../_lib/techIcons";
import { useRole } from "./RoleContext";

const softSkillIcons: Record<string, IconType> = {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineEye,
  HiOutlineAcademicCap,
  HiOutlineClipboardList: HiOutlineClipboard,
};

const roleHighlights: Record<string, string[]> = {
  "software-engineer": ["Python", "TypeScript", "JavaScript", "React", "Vue.js", "Django", "PostgreSQL", "Docker", "Git", "REST APIs"],
  "research-engineer": ["Python", "Plotly/Dash", "OpenTelemetry", "Neo4j", "MongoDB", "PostgreSQL", "Graph Databases", "Data Visualization", "Real-time Monitoring"],
  "edtech-engineer": ["Moodle LMS", "PHP", "PostgreSQL", "Python", "Neo4j", "LMS Development", "Agile/SCRUM", "REST APIs"],
};

const skillCategories = [
  { key: "languages" as const, label: "Languages" },
  { key: "frameworks" as const, label: "Frameworks & Libraries" },
  { key: "databases" as const, label: "Databases" },
  { key: "tools" as const, label: "Tools & Platforms" },
  { key: "concepts" as const, label: "Concepts & Practices" },
];

export default function Skills() {
  const { activeRole } = useRole();
  const highlighted = roleHighlights[activeRole];

  return (
    <section id="skills" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#3B6EA5] text-xs font-medium tracking-widest uppercase mb-3">Toolkit</p>
        <h2 className="text-3xl font-bold text-[#1C2B3A] mb-3">Skills</h2>
        <p className="text-[#52525B] text-sm mb-12">
          Highlighted skills are most relevant to the selected role.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="bg-white rounded-xl border border-[#E4E4E0] p-5">
              <h3 className="text-xs font-semibold text-[#52525B] uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => {
                  const isHighlighted = highlighted.includes(skill);
                  const Icon = techIcons[skill];
                  return (
                    <span
                      key={skill}
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                        isHighlighted
                          ? "bg-[#1C2B3A] text-white"
                          : "bg-[#F0F0EC] text-[#52525B]"
                      }`}
                    >
                      {Icon && <Icon size={12} />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="mt-8 bg-white rounded-xl border border-[#E4E4E0] p-5">
          <h3 className="text-xs font-semibold text-[#52525B] uppercase tracking-widest mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s) => {
              const Icon = softSkillIcons[s.icon];
              return (
                <span
                  key={s.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#F0F0EC] text-[#52525B] rounded-full"
                >
                  {Icon && <Icon size={12} />}
                  {s.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
