"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ChevronRight } from "lucide-react";
import { products } from "@/lib/data/products";
import { mantras } from "@/lib/data/mantras";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);
  const addItem = useCartStore((s) => s.addItem);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <h1 className="font-serif text-2xl font-semibold text-foreground mb-3">
          Product not found
        </h1>
        <p className="text-muted-foreground mb-6 text-center">
          The item you&apos;re looking for may have been moved or is no longer
          available.
        </p>
        <Button asChild>
          <Link href="/shop" className="inline-flex items-center gap-2">
            Back to Shop
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product as Product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const relatedMantra = product.relatedMantraSlug
    ? mantras.find((m) => m.id === product.relatedMantraSlug)
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Image */}
          <div className="animate-fade-in lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary-bright/50 shadow-lg">
              <div
                className="product-image-placeholder w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]"
                aria-hidden
              />
              {product.badge && (
                <Badge
                  variant="bright"
                  className="absolute top-4 left-4 gap-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  {product.badge}
                </Badge>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:pt-2 animate-slide-up space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              {product.name}
            </h1>
            <p className="text-muted-foreground text-lg">{product.subtitle}</p>

            {/* Price — VERY LARGE */}
            <p className="text-3xl text-devotion font-bold">
              {formatCurrency(product.price, product.currency)}
            </p>

            {/* Add to Sacred Cart — bright crimson, eye-catching */}
            <div>
              <Button
                variant="devotion"
                size="lg"
                onClick={handleAddToCart}
                className="w-full sm:w-auto"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to cart
                  </>
                ) : (
                  "Add to Sacred Cart"
                )}
              </Button>
              {addedToCart && (
                <p className="mt-3 text-sm text-devotion font-medium animate-fade-in">
                  Item added. Continue shopping or proceed to checkout.
                </p>
              )}
            </div>

            {/* Energized By certificate — gradient-temple with bright gold border */}
            <Card className="gradient-temple border-2 border-primary-bright shadow-md">
              <CardContent className="px-5 py-4 flex items-start gap-3">
                <Sparkles className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <span className="font-semibold text-primary text-sm">Energized By</span>
                  <p className="mt-1 text-foreground/90 text-sm leading-relaxed">
                    {product.energizedBy}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Story */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                The Story
              </h2>
              <p className="font-serif text-muted-foreground text-base leading-relaxed">
                {product.story}
              </p>
            </section>

            {/* Motivation */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                Why This Matters
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {product.motivation}
              </p>
            </section>

            {/* Spiritual Benefits — bright sage check icons */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Spiritual Benefits
              </h2>
              <ul className="space-y-3">
                {product.spiritualBenefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-sage-light flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-sage" />
                    </span>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Specifications — warm alternating rows */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Specifications
              </h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0 ? "bg-surface" : "bg-sandalwood-light/50"
                        }
                      >
                        <td className="px-4 py-3 font-medium text-muted-foreground w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-foreground">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Mantra Link — soft-amber */}
            {relatedMantra && (
              <section className="pt-8 border-t border-border">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Recommended Mantra
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Enhance your practice with this sacred mantra:
                </p>
                <Button variant="soft-amber" asChild>
                  <Link
                    href="/mantras"
                    className="inline-flex items-center gap-2"
                  >
                    {relatedMantra.title}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
