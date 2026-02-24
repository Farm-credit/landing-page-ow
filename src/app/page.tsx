import { OurMarketplace } from "@/components/our-marketplace";
import { LookingToDoMore } from "@/components/looking-to-do-more";

export default function Home() {
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
  );
}
