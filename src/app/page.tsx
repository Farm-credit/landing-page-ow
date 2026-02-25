import FaqSection from "@/components/faq";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen  ">
      <nav className="bg-amber-400">Nav</nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row bg-amber-800 flex-1 w-full">
          <header className="row-start-1">Body</header>
        </div>
        <FaqSection />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap bg-green-700">
        Footer
      </footer>
    </div>
  );
}
