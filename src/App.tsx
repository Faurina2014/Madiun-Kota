import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickServices } from './components/QuickServices';
import { JelajahSection } from './components/JelajahSection';
import { GprKomdigi } from './components/GprKomdigi';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
export function App() {
  // Accessibility states
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (highContrast) body.classList.add('contrast-125');else body.classList.remove('contrast-125');
    if (largeText) body.classList.add('text-lg');else body.classList.remove('text-lg');
    if (grayscale) body.classList.add('grayscale');else body.classList.remove('grayscale');
  }, [highContrast, largeText, grayscale]);
  return <div className={`min-h-screen bg-[#FAFAFA] font-sans text-dark selection:bg-primary selection:text-white transition-all duration-300`}>
      <Navbar />

      <main>
        <HeroSection />
        <QuickServices />
        <JelajahSection />
        <GprKomdigi />
        <NewsSection />
      </main>

      <Footer />
      <FloatingButtons accessibility={{
      highContrast,
      setHighContrast,
      largeText,
      setLargeText,
      grayscale,
      setGrayscale
    }} />
    </div>;
}