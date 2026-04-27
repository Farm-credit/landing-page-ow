const projects = [
  {
    title: 'Rainforest Restoration',
    location: 'Kano, Nigeria',
    impact: '10,000 trees planted | 2,500 tons CO₂ offset',
    price: 'Price per Ton: $10',
  },
  {
    title: 'Rainforest Restoration',
    location: 'Kano, Nigeria',
    impact: '10,000 trees planted | 2,500 tons CO₂ offset',
    price: 'USD 10',
  },
  {
    title: 'Rainforest Restoration',
    location: 'Kano, Nigeria',
    impact: '10,000 trees planted | 2,500 tons CO₂ offset',
    price: 'USD 10',
  },
];

const projectImage =
  'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop';

export function MarketplaceSections() {
  return (
    <>
      <section id="projects" className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-x-0 top-0 h-16 -translate-y-1/2 rounded-[50%] bg-white sm:h-24 lg:h-32" />

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-2xl font-normal text-[#565656] sm:text-3xl">Our Marketplace</p>
            <h2 className="mt-7 text-5xl font-extrabold leading-none text-[#082910] sm:text-6xl lg:text-[58px]">
              Featured Projects
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-8">
            {projects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="overflow-hidden rounded-md bg-[#E4E1E0] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="h-64 bg-cover bg-center sm:h-80 md:h-52 lg:h-64"
                  style={{ backgroundImage: `url(${projectImage})` }}
                  aria-hidden="true"
                />
                <div className="px-4 pb-8 pt-7 sm:px-6">
                  <h3 className="text-2xl font-extrabold leading-tight text-black lg:text-[26px]">{project.title}</h3>
                  <p className="mt-2 text-xl leading-8 text-black">{project.location}</p>
                  <p className="text-xl leading-8 text-black">{project.impact}</p>
                  <p className="mt-1 text-xl font-extrabold leading-8 text-black">{project.price}</p>
                  <button
                    type="button"
                    className="mt-2 h-9 min-w-36 rounded-lg bg-black px-8 text-sm font-extrabold text-white transition hover:bg-[#F9A15A] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9A15A]"
                  >
                    RETIRE
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#projects"
              className="inline-flex h-16 min-w-52 items-center justify-center rounded-2xl bg-[#F9A15A] px-9 text-base font-medium text-black transition hover:-translate-y-0.5 hover:bg-[#e89048] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9A15A]"
            >
              Go to Marketplace
            </a>
          </div>
        </div>
      </section>

      <section id="get-started" className="relative flex min-h-[330px] w-full items-end justify-center overflow-hidden py-12 text-center text-white sm:min-h-[420px] lg:min-h-[480px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center px-6">
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[56px]">
            Looking To Do More? Plant Trees Today
          </h2>
          <p className="sr-only">Support additional tree planting projects through Farmcredit.</p>
          <a
            href="#projects"
            className="mt-8 inline-flex h-16 min-w-44 items-center justify-center rounded-2xl bg-[#F9A15A] px-8 text-base font-medium text-black transition hover:-translate-y-0.5 hover:bg-[#e89048] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Plant Trees &gt;
          </a>
        </div>
      </section>
    </>
  );
}
