import React, { useState } from "react";
import projectsData from "../data/projects.json";

function ProjectsSection() {
  // State untuk menyimpan data project yang sedang aktif di popup modal
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="space-y-4 scroll-mt-24">
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight border-l-4 border-[#6d28d9] dark:border-[#8b5cf6] pl-4">
        Featured Projects
      </h2>

      {/* GRID KARTU PROYEK */}
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-white dark:bg-[#16113a] border border-purple-100 dark:border-purple-950/40 rounded-2xl overflow-hidden group flex flex-col justify-between cursor-pointer hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
          >
            <div>
              {/* Image Container */}
              <div className="aspect-square bg-purple-100 dark:bg-[#0b071e] overflow-hidden relative">
                <img
                  src={
                    project.gambar ||
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
                  }
                  alt={project.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 dark:bg-[#0b071e]/90 px-4 py-2 rounded-xl text-xs font-mono font-bold shadow-md">
                    🔍 Lihat Detail
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl font-bold group-hover:text-[#6d28d9] dark:group-hover:text-[#a78bfa] transition-colors">
                  {project.judul}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {project.deskripsi}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================================
          POPUP MODAL DETAIL PROYEK (Hanya muncul jika state terisi)
         ========================================================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-fade-in">
          {/* Card Modal Box */}
          <div className="bg-white dark:bg-[#16113a] max-w-2xl w-full rounded-2xl overflow-hidden border border-purple-100 dark:border-purple-950/60 shadow-2xl flex flex-col max-h-[90vh]">
            {/* Gambar Besar di Modal */}
            <div className="h-52 bg-purple-100 dark:bg-[#0b071e] relative shrink-0">
              <img
                src={
                  selectedProject.gambar ||
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
                }
                alt={selectedProject.judul}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Konten Detail */}
            <div className="p-6 md:p-8 space-y-4 overflow-y-auto">
              <h3 className="font-display text-2xl font-bold">
                {selectedProject.judul}
              </h3>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-xs font-mono rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {selectedProject.deskripsi}
              </p>

              {/* Tombol Aksi */}
              <div className="pt-4 flex justify-end gap-3 border-t border-purple-100 dark:border-purple-950/40">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-[#0b071e] cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl text-sm font-semibold font-mono bg-[#6d28d9] text-white hover:bg-[#5b21b6] dark:bg-[#8b5cf6] dark:text-[#0b071e] dark:hover:bg-[#a78bfa] shadow-md transition-colors"
                >
                  View Repository →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
