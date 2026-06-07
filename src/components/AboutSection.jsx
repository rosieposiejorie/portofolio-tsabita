import React from "react";
import profileData from "../data/profile.json";

function AboutSection() {
  return (
    <section id="about" className="space-y-4 scroll-mt-24">
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight border-l-4 border-[#6d28d9] dark:border-[#8b5cf6] pl-4">
        About Me
      </h2>
      <div className="bg-white dark:bg-[#16113a] p-6 md:p-8 rounded-2xl border border-purple-100 dark:border-purple-950/40 shadow-sm">
        <p className="leading-relaxed text-slate-600 dark:text-slate-300">
          {profileData.bio} Sebagai mahasiswa TRKJ Politeknik Negeri
          Lhokseumawe, saya berkomitmen untuk terus mengeksplorasi teknologi
          baru demi menghadirkan solusi digital yang efisien dan aman.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
