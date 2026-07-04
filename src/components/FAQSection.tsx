'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are carbon credits?',
    answer:
      "Carbon credits represent a reduction of one metric ton of CO₂ emissions. By purchasing carbon credits, you're funding projects that reduce or remove greenhouse gases from the atmosphere.",
  },
  {
    question: 'How does blockchain proof work?',
    answer:
      'Each purchase is recorded on-chain and linked to a digital certificate, giving you a permanent record that can be independently verified.',
  },
  {
    question: 'Which cryptocurrencies are accepted?',
    answer:
      'Farmcredit supports stablecoin payments and selected major cryptocurrencies so contributors can complete climate actions quickly.',
  },
  {
    question: 'How is my donation verified?',
    answer:
      'Project partners report planting and offset activity, then Farmcredit attaches those records to your certificate for transparent impact tracking.',
  },
];

type FAQItemProps = {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function FAQItem({ index, question, answer, isOpen, onToggle }: FAQItemProps) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-[#ECEFF1] bg-white last:border-b-0">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="grid w-full grid-cols-[64px_1fr_48px] items-center gap-5 px-6 py-11 text-left transition hover:bg-[#FAFAFA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#F9A15A] sm:grid-cols-[96px_1fr_56px] sm:px-10 md:grid-cols-[110px_1fr_64px] md:px-14 lg:px-16 lg:py-16"
      >
        <span className="text-5xl font-extrabold leading-none text-[#9B9DA3] sm:text-6xl">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-2xl font-extrabold leading-tight text-black sm:text-3xl lg:text-[42px]">
          {question}
        </span>
        <span
          className={`flex h-12 w-12 items-center justify-center justify-self-end rounded-full transition duration-300 sm:h-14 sm:w-14 ${
            isOpen ? 'bg-black text-white' : 'bg-[#F5F6F7] text-black'
          }`}
          aria-hidden="true"
        >
          <ChevronDown className={`h-6 w-6 transition duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-12 pl-[106px] pr-8 text-xl leading-8 text-[#5F6066] sm:pl-[176px] sm:pr-24 sm:text-2xl md:pl-[220px] lg:max-w-[1260px] lg:pb-16 lg:text-[26px] lg:leading-10">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-[#F2F3F4] px-6 pb-36 pt-20 sm:px-8 sm:pb-48 sm:pt-28 lg:pb-64">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center text-4xl font-extrabold leading-tight text-[#082910] sm:text-5xl lg:text-[56px]">
          Frequently Asked Question
        </h2>

        <div className="mt-16 overflow-hidden bg-white sm:mt-20">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 translate-y-1/2 rounded-[50%] bg-black sm:h-44 lg:h-64" />
    </section>
  );
}
