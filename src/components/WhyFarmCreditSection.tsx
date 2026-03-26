import React from 'react';
import { UserRound, Cloud, Verified, Crown } from 'lucide-react';

export function WhyFarmCreditSection() {
  const features = [
    {
      title: 'Transparency',
      description: 'Every transaction is recorded on-chain, providing complete visibility and accountability.',
      icon: (
        <div className="flex flex-col items-center">
          <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-2.5 h-2.5 text-blue-300 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-white">
            <UserRound className="w-6 h-6" />
          </div>
        </div>
      )
    },
    {
      title: 'Simplicity',
      description: 'Verified projects with measurable CO2 offset and environmental benefits.',
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-slate-950 flex items-center justify-center text-slate-950 relative mt-4">
          <Cloud className="w-6 h-6 fill-slate-950" />
        </div>
      )
    },
    {
      title: 'Real Impact',
      description: 'Donate or purchase carbon credits in seconds with just a few clicks.',
      icon: (
        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-slate-950 relative mt-2">
          <Verified className="w-10 h-10 text-slate-950 fill-blue-100" />
          <span className="absolute text-[8px] font-bold text-slate-950 mt-0.5">FREE</span>
        </div>
      )
    },
    {
      title: 'Proof of Impact',
      description: 'Digital certificates and NFT receipts that prove your contribution forever.',
      icon: (
        <div className="flex flex-col items-center">
          <div className="flex gap-1 mb-1">
            {[...Array(3)].map((_, i) => (
              <svg key={i} className="w-2.5 h-2.5 text-blue-200 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <div className="text-slate-950">
            <Crown className="w-10 h-10 fill-slate-950" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 relative z-0">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Title */}
          <div className="pt-8 lg:pt-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Why<br />Farmcredit
            </h2>
          </div>

          {/* Right Column - Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <div className="mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#0F172A]">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Black curve at the bottom as seen in Image 4 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'translateY(1px)' }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-12 md:h-24">
          <path d="M0,100 L0,80 Q720,0 1440,80 L1440,100 Z" fill="#000000" />
        </svg>
      </div>
    </section>
  );
}
