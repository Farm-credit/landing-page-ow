import React from 'react';

export function BlockchainImpactSection() {
  return (
    <section className="relative w-full overflow-hidden text-white flex flex-col items-center justify-center py-32 md:py-48 bg-black">
      {/* Background Image with dark overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/farm_blockchain_bg.png)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Top Curve Overlay (white) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'translateY(-1px)' }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-12 md:h-24">
          <path d="M0,0 L1440,0 L1440,20 Q720,100 0,20 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-5xl text-center flex flex-col items-center gap-8 mt-12 mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white max-w-4xl leading-tight">
          Leveraging Blockchain for Scalable Climate Impact
        </h2>
        <div className="space-y-6 text-sm sm:text-base md:text-lg lg:text-[19px] text-white/90 max-w-3xl leading-relaxed text-center font-medium">
          <p>
            A new wave of innovation is reshaping how the voluntary carbon market operates. Alongside emerging frameworks and
            regulations, blockchain technology is driving greater transparency, efficiency, and trust.
          </p>
          <p>
            This transformation is essential — the VCM must scale tenfold in the coming years if humanity is to meet its climate goals.
            Modernizing the entire carbon market infrastructure is key to making it both high-integrity and future-ready.
          </p>
        </div>
      </div>

      {/* Bottom Curve Overlay (white) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'translateY(1px)' }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-12 md:h-24">
          <path d="M0,100 L0,20 Q720,100 1440,20 L1440,100 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
