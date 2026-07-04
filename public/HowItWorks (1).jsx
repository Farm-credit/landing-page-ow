import React from "react";

const steps = [
  {
    id: 1,
    image: "./htw-img1.PNG",
    title: "Select A Project",
    description:
      "Choose from verified carbon credit programs or tree planting initiatives around the world.",
  },
  {
    id: 2,
    image: "./htw-img2.PNG",
    title: "Pay With Crypto",
    description:
      "Seamlessly purchase carbon offsets using your preferred cryptocurrency — fast, secure, and transparent.",
  },
  {
    id: 3,
    image: "./htw-img3.PNG",
    title: "Receive Your Proof",
    description:
      "Get profitable proof of your offset, secured and tracked on the blockchain for full accountability.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-16 my-16 md:mx-8 sm:mx-4">
      {/* Header */}
      <div className="flex justify-between items-center gap-8 mb-10 flex-wrap">
        <h2 className="text-5xl font-bold whitespace-nowrap md:text-4xl sm:text-3xl">
          How It Works
        </h2>
        <p className="text-gray-500 font-semibold max-w-lg leading-relaxed text-sm">
          Farmcredit makes climate action seamless: choose a project, pay with
          crypto, and receive profitable proof of your offset — all secured and
          tracked on the blockchain.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-5 lg:grid-cols-2 sm:grid-cols-1">
        {steps.map((step) => (
          <div key={step.id} className="p-3">
            <img
              src={step.image}
              alt={step.title}
              className="w-full rounded-3xl block"
            />
            <h3 className="text-4xl font-light mt-3 mb-1 md:text-3xl">
              {step.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
