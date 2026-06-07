import React, { useState } from "react";
// Import ikon menu hambuger, ikon tutup (close), dan ikon lampu
import { FaBars, FaXmark, FaSun, FaMoon } from "react-icons/fa6";

function Navbar({ darkMode, setDarkMode }) {
  // State untuk mengontrol buka/tutup menu di HP
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi smooth scroll: tutup menu dulu, lalu scroll ke section
  const handleNavClick = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300); // Tunggu animasi menu tutup selesai (300ms) baru scroll
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#fafafa]/80 dark:bg-[#0b071e]/80 border-b border-purple-100 dark:border-purple-950/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* LOGO BRAND */}
        <span className="font-mono font-bold text-lg tracking-wider text-[#6d28d9] dark:text-[#8b5cf6]">
          RISKI.DEV
        </span>

        {/* MENU DESKTOP (Muncul hanya di layar besar / md ke atas) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600 dark:text-slate-300">
          <a
            href="#about"
            className="hover:text-[#6d28d9] dark:hover:text-[#8b5cf6] transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-[#6d28d9] dark:hover:text-[#8b5cf6] transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#6d28d9] dark:hover:text-[#8b5cf6] transition-colors"
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="hover:text-[#6d28d9] dark:hover:text-[#8b5cf6] transition-colors"
          >
            Certificates
          </a>

          {/* Tombol Saklar Lampu Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl border border-purple-100 dark:border-purple-950 text-[#6d28d9] dark:text-[#4ade80] hover:bg-purple-50 dark:hover:bg-[#16113a] transition-all cursor-pointer"
          >
            {darkMode ? (
              <FaSun className="text-base" />
            ) : (
              <FaMoon className="text-base" />
            )}
          </button>
        </div>

        {/* KONTROL MOBILE (Hanya muncul di layar HP / di bawah ukuran md) */}
        <div className="flex md:hidden items-center gap-4">
          {/* Tombol Saklar Lampu Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-[#6d28d9] dark:text-[#4ade80] bg-purple-50 dark:bg-[#16113a] transition-all cursor-pointer"
          >
            {darkMode ? (
              <FaSun className="text-sm" />
            ) : (
              <FaMoon className="text-sm" />
            )}
          </button>

          {/* Tombol Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-[#16113a] transition-all cursor-pointer"
          >
            {isOpen ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* =========================================================
          DROPDOWN MENU MOBILE (Hanya muncul di HP pas isOpen = true)
         ========================================================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-[#0b071e] border-b border-purple-100 dark:border-purple-950/50 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 font-medium text-sm text-slate-600 dark:text-slate-300">
          <button
            onClick={() => handleNavClick("#about")}
            className="py-1 text-left hover:text-[#6d28d9] dark:hover:text-[#8b5cf6] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("#skills")}
            className="py-1 text-left hover:text-[#6d28d9] dark:hover:text-[#8b5cf6] transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick("#projects")}
            className="py-1 text-left hover:text-[#6d28d9] dark:hover:text-[#8b5cf6] transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick("#certificates")}
            className="py-1 text-left hover:text-[#6d28d9] dark:hover:text-[#8b5cf6] transition-colors"
          >
            Certificates
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
