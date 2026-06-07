import React from "react";
import skillsData from "../data/skills.json";

function SkillsSection() {
  return (
    <section id="skills" className="space-y-6 scroll-mt-24">
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight border-l-4 border-[#6d28d9] dark:border-[#8b5cf6] pl-4">
          Skills & Tech Stack
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-mono text-sm mt-1">
          Teknologi yang sering saya gunakan:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#16113a] p-6 rounded-2xl border border-purple-100 dark:border-purple-950/40 shadow-sm space-y-3"
          >
            <h3 className="font-bold text-sm font-mono text-[#6d28d9] dark:text-[#a78bfa] uppercase tracking-wider">
              {item.kategori}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.list.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-50 dark:bg-[#0b071e] text-slate-700 dark:text-slate-300 text-xs font-mono rounded-lg border border-purple-100/50 dark:border-purple-950/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
