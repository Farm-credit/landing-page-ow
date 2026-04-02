const cards = [
  {
    id: 1,
    icon: "./icon1.PNG",
    title: "Transparency",
    description:
      "Every transaction is recorded on-chain, providing complete visibility and accountability.",
  },
  {
    id: 2,
    icon: "./icon2.PNG",
    title: "Simplicity",
    description:
      "Verified projects with measurable CO₂ offset and environmental benefits.",
  },
  {
    id: 3,
    icon: "./icon3.PNG",
    title: "Real Impact",
    description:
      "Donate or purchase carbon credits in seconds with just a few clicks.",
  },
  {
    id: 4,
    icon: "./icon4.PNG",
    title: "Proof of Impact",
    description:
      "Digital certificates and NFT receipts that prove your contribution forever.",
  },
];

export default function WhyFarmcredit() {
  return (
    <section className="flex gap-8 mx-24 my-24 md:mx-8 sm:block sm:mx-0 sm:my-0 sm:p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-black w-2/5 shrink-0 sm:w-full sm:mb-6">
        Why <br /> Farmcredit
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-9 sm:grid-cols-2 sm:gap-4">
        {cards.map((card) => (
          <div key={card.id} className="w-60 sm:w-40">
            <img src={card.icon} alt={card.title} className="mb-2" />
            <h5 className="text-black text-2xl font-semibold px-3 mt-0 mb-1">
              {card.title}
            </h5>
            <p className="text-gray-500 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
