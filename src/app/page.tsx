import { BlockchainImpactSection } from '@/components/BlockchainImpactSection';
import { WhyFarmCreditSection } from '@/components/WhyFarmCreditSection';

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col w-full">
      <nav className="bg-amber-400 w-full p-4 hidden">Nav</nav>
      {/* We are removing the grid layout to support full-width sections properly */}
      <main className="flex flex-col w-full flex-1">
        {/* Dummy placeholder for the section before to test the top curve */}
        <div className="w-full bg-white h-screen flex items-center justify-center border-b border-gray-100">
          <h1 className="text-4xl text-gray-400">Previous Section</h1>
        </div>

        <BlockchainImpactSection />
        <WhyFarmCreditSection />
        
      </main>
      <footer className="w-full p-8 bg-green-700 hidden">
        Footer
      </footer>
    </div>
  );
}
