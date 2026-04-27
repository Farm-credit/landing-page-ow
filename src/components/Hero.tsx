'use client';

import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="text-[#F9A15A] block mb-2">Offset Carbon. Plant Trees.</span>
            <span className="text-white">Pay with Crypto.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
            Buy verified carbon credits and donate to tree planting projects with blockchain-backed proof. 
            Make an impact with transparency you can trust.
          </p>

          <button className="bg-[#F9A15A] hover:bg-[#e89048] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Decorative Leaf Icon (Matching the design) */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-20 hidden lg:block pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F9A15A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-7 7c-1.15 0-2.21-.26-3.14-.72" />
          <path d="M11 20c0-3 2-5 5-5" />
        </svg>
      </div>

      {/* Curved Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0 120L1440 120L1440 20C1440 20 1080 120 720 120C360 120 0 20 0 20L0 120Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
