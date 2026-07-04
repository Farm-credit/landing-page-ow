const steps = [
  {
    title: 'Select A Project',
    description: 'Choose from verified carbon credit programs or tree planting initiatives around the world.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Pay With Crypto',
    description: 'Complete your purchase instantly using stablecoins or other cryptocurrencies.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Get Blockchain Proof',
    description: 'Receive an NFT certificate with permanent, verifiable proof of your contribution.',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative w-full overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-16 -translate-y-1/2 rounded-[50%] bg-white sm:h-24 lg:h-32" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <h2 className="text-5xl font-semibold tracking-normal text-[#23272A] sm:text-6xl lg:text-[68px] lg:leading-none">
            How It Works
          </h2>
          <p className="max-w-[560px] text-lg font-semibold leading-8 text-[#697188] sm:text-xl lg:pt-1">
            Farmcredit makes climate action seamless: choose a project, pay with crypto, and receive verifiable
            proof of your offset-all secured and tracked on the blockchain
          </p>
        </div>

        <div className="mt-16 grid gap-9 md:grid-cols-3 lg:mt-24 lg:gap-10">
          {steps.map((step) => (
            <article
              key={step.title}
              className="group flex flex-col transition duration-300 ease-out hover:-translate-y-1"
            >
              <div
                className="min-h-[360px] overflow-hidden rounded-3xl bg-cover bg-center shadow-sm transition duration-300 group-hover:shadow-xl sm:min-h-[460px] md:min-h-[330px] lg:min-h-[440px]"
                style={{ backgroundImage: `url(${step.image})` }}
                aria-hidden="true"
              />
              <div className="pt-7">
                <h3 className="text-3xl font-normal leading-tight text-[#23272A] sm:text-4xl md:text-[32px] lg:text-[36px]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[430px] text-lg font-semibold leading-7 text-[#697188] sm:text-xl md:text-base lg:text-xl">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 translate-y-1/2 rounded-[50%] bg-white sm:h-24 lg:h-32" />
    </section>
  );
}
