import { MarketplaceCard } from "./marketplace-card";
import { MARKETPLACE_ITEMS } from "@/lib/constants";

export function OurMarketplace() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Our Marketplace
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Explore our diverse marketplace offerings designed to help you
            succeed. From digital products to professional services, we have
            everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MARKETPLACE_ITEMS.map((item) => (
            <MarketplaceCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
