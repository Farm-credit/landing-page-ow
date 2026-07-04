import { OurMarketplace } from "@/components/our-marketplace";
import { LookingToDoMore } from "@/components/looking-to-do-more";

import Footer from "@/components/Footer/Footer";
import FaqSection from "@/components/faq";export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <nav className="bg-amber-400">Nav</nav>
      <main className="flex flex-col">
        <div className="flex gap-4 items-center flex-col sm:flex-row bg-amber-800 w-full py-8">
          <header className="container mx-auto px-4">Body</header>
        </div>
        
        <OurMarketplace />
        <LookingToDoMore />
      </main>
      <footer className="flex gap-[24px] flex-wrap bg-green-700 py-8">
        <div className="container mx-auto px-4">Footer</div>
      </footer>
    </div>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap bg-green-700">
        Footer
      </footer> */}
      <Footer/>
        <FaqSection />
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BlockchainImpactSection } from '@/components/BlockchainImpactSection';
import { WhyFarmCreditSection } from '@/components/WhyFarmCreditSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { MarketplaceSections } from '@/components/MarketplaceSections';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

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
        <FAQSection />      </main>
      <Footer />    </div>  );
}
