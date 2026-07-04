"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "What are carbon credits?",
    answer:
      "Carbon credits represent a reduction of one metric ton of CO₂ emissions. By purchasing carbon credits, you're funding projects that reduce or remove greenhouse gases from the atmosphere.",
  },
  {
    id: "02",
    question: "How does blockchain proof work?",
    answer:
      "Each carbon credit is tokenized on-chain, creating an immutable record of its origin, retirement, and ownership. This eliminates double-counting and provides transparent, verifiable proof of your impact.",
  },
  {
    id: "03",
    question: "Which cryptocurrencies are accepted?",
    answer:
      "We currently accept ETH, USDC, USDT, and several other ERC-20 tokens. More payment options are being added regularly — check our supported assets page for the latest list.",
  },
  {
    id: "04",
    question: "How is my donation verified?",
    answer:
      "Every donation is recorded on-chain and matched to certified carbon offset projects. You receive a verifiable NFT receipt that proves your contribution and the corresponding emissions reduction.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("01");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="relative w-full bg-[#f0f0eb] pt-16 pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#07260E] mb-10">
          Frequently Asked Question
        </h2>

        <div className="bg-white rounded-2xl overflow-hidden divide-y divide-gray-100 shadow-sm mb-16">
          {faqs.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div key={id} className="px-6 sm:px-10 py-6 sm:py-8">
                <div className="flex items-start gap-5 sm:gap-8">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-300 w-10 sm:w-14 lg:w-16 shrink-0 leading-tight">
                    {id}
                  </span>

                  <div className="flex-1 min-w-0">
                    <button
                      onClick={() => toggle(id)}
                      className="w-full flex items-center gap-3 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="flex-1 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-snug">
                        {question}
                      </span>
                      <span
                        className={cn(
                          "w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-base font-bold transition-colors shrink-0",
                          isOpen
                            ? "bg-gray-900 text-white"
                            : "bg-transparent text-gray-400 border border-gray-200",
                        )}
                      >
                        <Plus
                          className={cn(
                            "w-4 h-4 transition-transform duration-500 ease-in-out",
                            isOpen ? "rotate-45" : "rotate-0",
                          )}
                        />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed">
                          {answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="relative h-16 sm:h-24 lg:h-32 overflow-visible bg-[#111111]"
        style={{ border: "none", outline: "none", boxShadow: "none" }}
      >
        <svg
          viewBox="0 0 1200 128"
          preserveAspectRatio="none"
          className="absolute w-full block"
          style={{
            top: "-2px",
            left: 0,
            height: "calc(100% + 2px)",
            border: "none",
            outline: "none",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L1200,0 L1200,128 Q600,-100 0,128 Z" fill="#f0f0eb" />
        </svg>
      </div>
    </section>
  );
}
