import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BlockchainImpactSection } from '@/components/BlockchainImpactSection';
import { WhyFarmCreditSection } from '@/components/WhyFarmCreditSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { MarketplaceSections } from '@/components/MarketplaceSections';

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex flex-col w-full flex-1">
        <Hero />
        <BlockchainImpactSection />
        <WhyFarmCreditSection />
        <HowItWorksSection />
        <MarketplaceSections />
      </main>
      <footer className="w-full p-8 bg-green-700 hidden">
        Footer
      </footer>
    </div>
  );
}
