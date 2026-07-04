import Image from "next/image";
import { cn } from "@/lib/utils";

interface MarketplaceCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export function MarketplaceCard({
  image,
  title,
  description,
  className,
}: MarketplaceCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
