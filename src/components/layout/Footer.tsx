import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Flame, Mail, Phone, Instagram, Youtube, Twitter } from "lucide-react";
import { socialLinks } from "@/lib/data/media";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full gradient-sacred flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="text-sm font-semibold text-foreground block">
                  Vasant Vijay Ji Maharaj
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  National Saint
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-serif">
              Peethadhiswar of Shri Parsw Padmavati Shakti Peeth Teerth Dham,
              Krishnagiri. First Jain saint appointed UN Ambassador of Peace.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/shop", label: "Sacred Shop" },
                { href: "/mantras", label: "Mantra Library" },
                { href: "/thought-yoga", label: "Thought Yoga" },
                { href: "/events", label: "Events" },
                { href: "/donate", label: "Donate" },
                { href: "/media", label: "Media Hub" },
                { href: "/about", label: "About Gurudev" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
              Krishnagiri Dham
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                Shree Parshwa Padmavathi Shaktipeet Tirth Dham<br />
                Krishnagiri, Tamil Nadu 635001
              </p>
              <p className="text-xs">90 km from Bengaluru &bull; 265 km from Chennai</p>
              <p className="text-xs text-devotion font-medium pt-1">
                Black clothing and leather items are not permitted within the temple premises.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {socialLinks.email}
              </a>
              <a
                href={`tel:${socialLinks.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {socialLinks.phone}
              </a>
              <div className="flex items-center gap-2 pt-3">
                {[
                  { href: socialLinks.youtube, Icon: Youtube },
                  { href: socialLinks.instagram, Icon: Instagram },
                  { href: socialLinks.twitter, Icon: Twitter },
                ].map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-sandalwood-light hover:bg-primary-light text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shri Parsw Padmavati Shakti Peeth Teerth Dham. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 font-serif italic">
            &ldquo;Your thoughts shape your destiny&rdquo; — Thought Yoga
          </p>
        </div>
      </div>
    </footer>
  );
}
