"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const totalItems = useCartStore((s) => s.totalItems());
  const totalPrice = useCartStore((s) => s.totalPrice());

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-8">
          Your Sacred Cart
        </h1>

        {items.length === 0 ? (
          <div className="gradient-warm flex flex-col items-center justify-center py-20 sm:py-28 rounded-2xl text-center animate-fade-in">
            <div className="rounded-full bg-primary-bright/20 p-8 mb-6">
              <ShoppingBag className="w-20 h-20 text-primary" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl text-foreground mb-2">
              Your sacred cart awaits
            </p>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-sm">
              Discover sacred offerings and add them to your cart to begin your
              spiritual journey.
            </p>
            <Button variant="saffron" asChild size="lg">
              <Link href="/shop" className="inline-flex items-center gap-2">
                Continue Shopping
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Cart items */}
            <div className="lg:col-span-2 space-y-0">
              {items.map((item, index) => (
                <div key={item.product.slug}>
                  <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6">
                    <div className="product-image-placeholder shrink-0 w-full sm:w-32 aspect-square rounded-lg" />
                    <div className="flex-1 min-w-0">
                      {item.product.badge && (
                        <Badge
                          variant="bright"
                          className="inline-block mb-2"
                        >
                          {item.product.badge}
                        </Badge>
                      )}
                      <h2 className="font-serif text-lg font-semibold text-foreground">
                        {item.product.name}
                      </h2>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {item.product.subtitle}
                      </p>
                      <p className="mt-2 text-primary font-bold">
                        {formatCurrency(
                          item.product.price * item.quantity,
                          item.product.currency
                        )}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center rounded-lg border border-border bg-surface">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(
                                item.product.slug,
                                Math.max(0, item.quantity - 1)
                              )
                            }
                            aria-label="Decrease quantity"
                            className="rounded-l-lg rounded-r-none"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-3 py-1.5 text-sm font-medium min-w-8 text-center border-x border-border">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(
                                item.product.slug,
                                item.quantity + 1
                              )
                            }
                            aria-label="Increase quantity"
                            className="rounded-r-lg rounded-l-none"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button
                          variant="soft-devotion"
                          size="sm"
                          onClick={() => removeItem(item.product.slug)}
                          aria-label="Remove item"
                          className="text-devotion hover:bg-devotion-light"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </article>
                  {index < items.length - 1 && <Separator />}
                </div>
              ))}
            </div>

            {/* Right: Order summary — gradient-temple Card */}
            <div className="lg:col-span-1">
              <Card className="gradient-temple sticky top-8 border-2 border-primary-bright/40 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    Order Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-2xl text-devotion font-bold">
                        {formatCurrency(totalPrice, "INR")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Items</span>
                      <span className="font-medium">{totalItems}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                    Items blessed through Vedic Mantra Sadhana
                  </p>
                  {/* Proceed to Checkout — most eye-catching element */}
                  <Button variant="devotion" size="lg" asChild className="mt-6 w-full">
                    <Link href="/checkout" className="flex items-center justify-center gap-2">
                      Proceed to Checkout
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </Button>
                  <Button variant="link" asChild className="mt-4 w-full justify-center">
                    <Link href="/shop" className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Continue Shopping
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
