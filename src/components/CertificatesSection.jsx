import React from "react";
import certificatesData from "../data/certificates.json";

function CertificatesSection() {
  return (
    <section id="certificates" className="space-y-4 scroll-mt-24">
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight border-l-4 border-[#6d28d9] dark:border-[#8b5cf6] pl-4">
        Certificates & Achievements
      </h2>
      <div className="grid gap-3">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-[#16113a] p-5 rounded-xl border border-purple-100 dark:border-purple-950/40 flex justify-between items-center gap-4"
          >
            <div>
              <h4 className="font-bold text-base text-slate-800 dark:text-slate-200">
                {cert.nama}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {cert.penerbit} •{" "}
                <span className="text-xs font-mono">{cert.tahun}</span>
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-[#4ade80] font-semibold shrink-0">
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificatesSection;
