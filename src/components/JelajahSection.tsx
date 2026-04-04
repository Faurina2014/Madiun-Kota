import React, { useState, createElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Briefcase, Utensils } from 'lucide-react';
export function JelajahSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [{
    id: 'wisata',
    title: 'Wisata',
    icon: Briefcase,
    href: 'https://madiunkota.go.id/wisata/'
  }, {
    id: 'kuliner',
    title: 'Kuliner',
    icon: Utensils,
    href: 'https://madiunkota.go.id/kuliner/'
  }];
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  return <section className="py-16 bg-[#e6ece1] relative overflow-hidden border-y border-primary/20">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Side - Carousel */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="bg-[#d4dfc3] rounded-t-3xl py-4 px-8 border-b-2 border-primary/10">
              <h2 className="font-poppins text-2xl md:text-3xl font-black text-primary text-center tracking-wide">
                JELAJAH KOTA MADIUN
              </h2>
            </div>

            <div className="bg-accent/80 rounded-b-3xl p-8 flex-1 flex items-center justify-center relative min-h-[300px]">
              <button onClick={prevSlide} className="absolute left-4 z-10 p-2 hover:bg-black/10 rounded-full transition-colors">
                <ChevronLeft className="w-8 h-8 text-dark" />
              </button>

              <AnimatePresence mode="wait">
                <motion.a key={activeSlide} href={slides[activeSlide].href} target="_blank" rel="noopener noreferrer" initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.8
              }} transition={{
                duration: 0.3
              }} className="flex flex-col items-center justify-center group">
                  {createElement(slides[activeSlide].icon, {
                  className: 'w-32 h-32 text-primary mb-6 group-hover:scale-110 transition-transform duration-300',
                  strokeWidth: 1.5
                })}
                  <h3 className="font-poppins text-3xl font-black text-primary tracking-wider">
                    {slides[activeSlide].title}
                  </h3>
                </motion.a>
              </AnimatePresence>

              <button onClick={nextSlide} className="absolute right-4 z-10 p-2 hover:bg-black/10 rounded-full transition-colors">
                <ChevronRight className="w-8 h-8 text-dark" />
              </button>
            </div>
          </div>

          {/* Right Side - Tentang Madiun */}
          <div className="w-full lg:w-1/2 flex gap-6">
            {/* Vertical Text */}
            <div className="bg-[#d4dfc3] rounded-full px-4 py-8 flex items-center justify-center shrink-0">
              <h2 className="font-poppins text-2xl md:text-3xl font-black text-primary tracking-widest" style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)'
            }}>
                TENTANG MADIUN
              </h2>
            </div>

            {/* Description Box */}
            <div className="bg-transparent border-2 border-primary/30 rounded-xl p-6 md:p-10 flex-1 relative flex items-center">
              <p className="text-primary text-lg md:text-xl font-medium leading-relaxed text-justify relative z-10">
                Kota Madiun merupakan salah satu kota yang berada di Provinsi
                Jawa Timur, Indonesia. Kota ini menempati posisi sebagai kota
                terbesar keempat di Jawa Timur setelah Surabaya, Malang, dan
                Kediri. Secara geografis, Kota Madiun terletak sekitar 150 km di
                sebelah barat Surabaya, sekitar 90 km di sebelah timur
                Surakarta, serta kurang lebih 33 km di sebelah tenggara Ngawi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Mascot */}
      <div className="absolute bottom-0 right-0 w-64 md:w-96 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <img src="/maskote_pendekar.png" alt="" className="w-full h-auto grayscale" />
      </div>
    </section>;
}