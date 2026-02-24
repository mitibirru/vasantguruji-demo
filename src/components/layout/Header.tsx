"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Menu,
  X,
  Flame,
  Sun,
  BookOpen,
  Music,
  Calendar,
  Heart,
  Play,
} from "lucide-react";

const navLinks = [
  { href: "/shop", label: "Sacred Shop", icon: ShoppingBag },
  { href: "/mantras", label: "Mantras", icon: Music },
  { href: "/thought-yoga", label: "Thought Yoga", icon: Sun },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/donate", label: "Donate", icon: Heart },
  { href: "/media", label: "Media", icon: Play },
  { href: "/about", label: "About", icon: BookOpen },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-full gradient-sacred flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Flame className="w-5 h-5 text-white animate-diya" />
            </div>
            <div className="leading-tight">
              <span className="text-sm font-semibold tracking-wide text-foreground block">
                Vasant Vijay Ji
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Maharaj
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-saffron font-medium transition-colors rounded-lg hover:bg-saffron-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <ShoppingBag className="w-5 h-5" />
              </Button>
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 justify-center text-[10px]" variant="devotion">
                  {totalItems}
                </Badge>
              )}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="max-w-7xl mx-auto px-4 py-2 space-y-0.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
