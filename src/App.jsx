import { useState } from "react";

// Import Semua Komponen Tampilan
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";

import profileData from "./data/profile.json";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen font-sans transition-colors duration-300 bg-[#fafafa] text-[#1e1b4b] dark:bg-[#0b071e] dark:text-[#f1f0fb]">
        {/* 1. Navbar bawa state Dark Mode */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-6 space-y-32 py-16">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="border-t border-purple-100 dark:border-purple-950/30 py-8 text-center text-xs font-mono text-slate-400">
          <p>© 2026 {profileData.nama}. Built with React & Tailwind v4.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
