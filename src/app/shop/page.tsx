import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Sparkles, Package } from "lucide-react";
import { products } from "@/lib/data/products";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Sacred Shop",
  description:
    "Divinely energized items blessed through 25 years of mantra sadhana",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero with Gurudev */}
      <header className="relative overflow-hidden bg-[#1a0f05]">
        <div className="absolute inset-0 gradient-golden opacity-90" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end pt-16 pb-12 sm:pt-20 sm:pb-16 lg:px-20">
            <div className="text-center lg:text-left z-10 animate-fade-in pb-4">
              <Badge variant="bright" className="mb-5 px-4 py-1.5 text-sm shadow-lg">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Blessed Through 25 Years of Sadhana
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Sacred Shop
              </h1>
              <p className="mt-4 text-white/90 font-serif text-lg sm:text-xl max-w-xl">
                Divinely energized items personally consecrated by Param Pujya Gurudev
                through Vedic Mantra Sadhana and Thought Yoga principles
              </p>
            </div>
            <div className="relative hidden lg:block w-[220px] h-[280px] animate-slide-up">
              <Image
                src="/guruji.jpeg"
                alt="Param Pujya Gurudev in prayer"
                fill
                className="object-contain object-bottom mix-blend-lighten drop-shadow-2xl rounded-3xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bright/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 bg-background"
        aria-label="Product listings"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {products.map((product, i) => (
              <Card
                key={product.slug}
                className="group overflow-hidden transition-shadow duration-300 hover:shadow-xl animate-fade-in border-border bg-card"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative">
                  <div className="relative aspect-[4/5] w-full bg-surface overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {product.badge && (
                    <Badge
                      variant="bright"
                      className="absolute top-4 left-4 gap-1.5 shadow-md"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 sm:p-7">
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                    {product.subtitle}
                  </p>
                  <p className="mt-4 text-devotion font-bold text-xl">
                    {formatCurrency(product.price, product.currency)}
                  </p>
                  <CardFooter className="p-0 mt-5">
                    <Button variant="saffron" asChild className="w-full sm:w-auto">
                      <Link href={`/shop/${product.slug}`} className="inline-flex items-center gap-2">
                        View Details
                        <span>→</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section with Gurudev */}
      <section
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 gradient-temple overflow-hidden"
        aria-label="Trust & authenticity"
      >
        <div className="relative mx-auto max-w-4xl z-10">
          <div className="flex flex-col items-center text-center animate-slide-up">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
              <Badge variant="bright" className="px-5 py-2.5 text-sm gap-2 shadow-md">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                Personally Consecrated
              </Badge>
              <Badge variant="devotion" className="px-5 py-2.5 text-sm gap-2 shadow-md">
                <Sparkles className="w-5 h-5 shrink-0" />
                Vedic Mantra Sadhana
              </Badge>
              <Badge variant="saffron" className="px-5 py-2.5 text-sm gap-2 shadow-md">
                <Package className="w-5 h-5 shrink-0" />
                Sacred Packaging
              </Badge>
            </div>
            <p className="font-serif text-foreground/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              Every item is personally consecrated by Param Pujya Gurudev through
              Vedic Mantra Sadhana and Thought Yoga principles
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
