import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA_CONTENT } from "@/lib/constants";

export function LookingToDoMore() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
            {CTA_CONTENT.headline}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
            {CTA_CONTENT.description}
          </p>
          <Link
            href={CTA_CONTENT.buttonLink}
            className="group inline-flex items-center gap-2 px-8 py-4 text-base md:text-lg font-semibold text-primary-foreground bg-primary rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95"
            aria-label="Get started with our services"
          >
            {CTA_CONTENT.buttonText}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
