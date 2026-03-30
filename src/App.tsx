import { useState } from "react";
import { AmbientBackground } from "./components/layout/AmbientBackground";
import { GlowFollower } from "./components/layout/GlowFollower";
import { MouseSpotlight } from "./components/layout/MouseSpotlight";
import { Navbar } from "./components/layout/Navbar";
import { PageLoader } from "./components/layout/PageLoader";
import { TechBackdrop } from "./components/layout/TechBackdrop";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { WhyWorkWithMe } from "./components/sections/WhyWorkWithMe";

function App() {
  const [pageReady, setPageReady] = useState(false);

  return (
    <div className="relative min-h-screen bg-canvas">
      <PageLoader onExitComplete={() => setPageReady(true)} />
      <AmbientBackground />
      <TechBackdrop />
      <Navbar />
      <MouseSpotlight />
      <GlowFollower />
      <main className="relative">
        <Hero pageReady={pageReady} />
        <About />
        <WhyWorkWithMe />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/[0.06] px-4 py-8 text-center text-sm text-white/35 md:px-6 md:text-base">
        © {new Date().getFullYear()} — Hecho con React, Tailwind y Framer Motion
      </footer>
    </div>
  );
}

export default App;
