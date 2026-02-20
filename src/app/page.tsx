import BlockchainVerification from "@/components/blockchain-verification";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <nav className="bg-amber-400 p-4">Nav</nav>
      <main className="flex flex-col">
        <BlockchainVerification />
      </main>
      <footer className="p-4 bg-green-700">
        Footer
      </footer>
    </div>
  );
}
