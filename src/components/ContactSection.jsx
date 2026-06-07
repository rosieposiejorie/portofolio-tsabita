import React from "react";
import profileData from "../data/profile.json";
// 1. Import ikon resmi dari react-icons
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa6";

function ContactSection() {
  const { kontak } = profileData;

  return (
    <section
      id="contact"
      className="scroll-mt-24 text-center max-w-xl mx-auto py-10 space-y-6"
    >
      <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
        Mari Terhubung!
      </h2>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        Punya project menarik, tawaran magang, atau sekadar ingin berdiskusi
        seputar Web & Apps? Silakan hubungi saya melalui platform di bawah ini.
      </p>

      {/* TOMBOL KONTAK DENGAN IKON RESMI SVG */}
      <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
        {/* Tombol Email */}
        <a
          href={`mailto:${kontak?.email}`}
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-[#6d28d9] text-white hover:bg-[#5b21b6] dark:bg-[#8b5cf6] dark:text-[#0b071e] dark:hover:bg-[#a78bfa] shadow-lg shadow-purple-500/10 cursor-pointer"
        >
          <FaEnvelope className="text-base" /> Email
        </a>

        {/* Tombol GitHub */}
        {kontak?.github && (
          <a
            href={kontak.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-slate-900 text-white border border-slate-800 hover:bg-slate-800 dark:bg-[#16113a] dark:text-purple-300 dark:border-purple-950 dark:hover:bg-[#16113a]/70 cursor-pointer"
          >
            <FaGithub className="text-base" /> GitHub
          </a>
        )}

        {/* Tombol LinkedIn */}
        {kontak?.linkedin && (
          <a
            href={kontak.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-[#0077b5] text-white hover:bg-[#006297] dark:bg-[#16113a] dark:text-purple-300 dark:border-purple-950 dark:hover:bg-[#16113a]/70 cursor-pointer"
          >
            <FaLinkedin className="text-base text-white dark:text-purple-300" />{" "}
            LinkedIn
          </a>
        )}

        {/* Tombol Instagram */}
        {kontak?.instagram && (
          <a
            href={kontak.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-[#e1306c] text-white hover:bg-[#c1255c] dark:bg-[#16113a] dark:text-purple-300 dark:border-purple-950 dark:hover:bg-[#16113a]/70 cursor-pointer"
          >
            <FaInstagram className="text-base" /> Instagram
          </a>
        )}
      </div>
    </section>
  );
}

export default ContactSection;
