import React from "react";
import profileData from "../data/profile.json";

function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-10 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-500/10 dark:text-[#a78bfa] border border-purple-200 dark:border-purple-500/20">
          <span className="w-2 h-2 rounded-full bg-[#16a34a] dark:bg-[#4ade80] animate-pulse"></span>
          Open for Projects / Internship
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Halo, Saya{" "}
          <span className="bg-gradient-to-r from-[#6d28d9] to-purple-500 dark:from-[#8b5cf6] dark:to-[#4ade80] bg-clip-text text-transparent">
            {profileData.nama}
          </span>
        </h1>

        <p className="text-lg md:text-xl font-mono text-purple-700 dark:text-purple-300">
          {profileData.peran}
        </p>

        <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
          {profileData.bio}
        </p>
      </div>

      <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-purple-300 dark:border-purple-900 shadow-xl shadow-purple-500/5">
        <img
          src={profileData.foto}
          alt="Foto Profil"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection;
