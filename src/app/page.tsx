import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Award,
  Medal,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Radio,
  Heart,
  Flame,
  BookOpen,
} from "lucide-react";
import { credentials } from "@/lib/data/timeline";
import { products } from "@/lib/data/products";
import { events } from "@/lib/data/events";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function getCredentialBadgeVariant(
  category: string
): "saffron" | "amber" | "devotion" | "sage" {
  switch (category) {
    case "diplomatic":
      return "saffron";
    case "record":
      return "amber";
    case "award":
      return "devotion";
    case "spiritual":
    default:
      return "sage";
  }
}

function getCredentialBorderColor(category: string): string {
  switch (category) {
    case "diplomatic":
      return "border-l-saffron";
    case "record":
      return "border-l-amber";
    case "award":
      return "border-l-devotion";
    case "spiritual":
    default:
      return "border-l-sage";
  }
}

function formatCategoryLabel(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export default function Home() {
  const featuredEvents = events.slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero with Gurudev Image */}
      <section
        className="relative w-full overflow-hidden bg-[#1a0f05]"
        aria-label="Hero"
      >
        <div className="absolute inset-0 gradient-sacred opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,0,0,0.6)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 items-center py-12 sm:py-20 lg:py-28">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in z-10">
              <Badge variant="bright" className="mb-6 px-4 py-1.5 text-sm shadow-lg">
                <Flame className="w-4 h-4 mr-1.5 animate-diya" />
                National Saint · UN Peace Ambassador
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-lg">
                Param Pujya Gurudev<br />
                <span className="text-primary-bright">Vasant Vijay Ji</span><br />
                Maharaj
              </h1>
              <p className="mt-6 font-serif text-lg sm:text-xl text-white/85 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Peethadhiswar of Shri Parsw Padmavati Shakti Peeth Teerth Dham, Krishnagiri
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild variant="bright" size="xl" className="shadow-xl">
                  <Link href="/shop" className="gap-2">
                    Explore Sacred Shop
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="border-2 border-white/80 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white backdrop-blur-sm"
                >
                  <Link href="/thought-yoga" className="gap-2">
                    Begin Thought Yoga
                    <Flame className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Gurudev Image */}
            <div className="relative flex justify-center lg:justify-end animate-slide-up -mt-2 sm:mt-0">
              <div className="relative w-[260px] h-[330px] sm:w-[380px] sm:h-[475px] lg:w-[440px] lg:h-[550px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary-bright/30 via-transparent to-transparent z-10" />
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary-bright/20 via-transparent to-saffron/20 blur-2xl" />
                <Image
                  src="/guruji.jpeg"
                  alt="Param Pujya Gurudev Vasant Vijay Ji Maharaj in prayer"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl rounded-3xl mix-blend-lighten"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Ticker */}
      <section
        className="overflow-hidden bg-primary-bright py-4"
        aria-label="Credentials Ticker"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...credentials, ...credentials].map((cred, i) => (
            <span
              key={`${i}-${cred.title}`}
              className="inline-flex items-center gap-3 mx-6 text-white font-semibold text-sm sm:text-base"
            >
              <span className="opacity-90">{cred.title}</span>
              {cred.year && (
                <span className="text-white/80 text-xs">({cred.year})</span>
              )}
              <span className="text-white/60">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* Credentials Section */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 gradient-temple"
        aria-label="Credentials"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            Honours & Achievements
          </h2>
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-6 min-w-max">
              {credentials.map((cred, i) => (
                <Card
                  key={i}
                  className={`shrink-0 w-80 border-l-4 ${getCredentialBorderColor(cred.category)} bg-card shadow-md animate-slide-up`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      {cred.category === "diplomatic" && (
                        <Globe className="w-5 h-5 shrink-0 mt-0.5 text-saffron" />
                      )}
                      {cred.category === "record" && (
                        <Medal className="w-5 h-5 shrink-0 mt-0.5 text-amber" />
                      )}
                      {cred.category === "award" && (
                        <Award className="w-5 h-5 shrink-0 mt-0.5 text-devotion" />
                      )}
                      {cred.category === "spiritual" && (
                        <Star className="w-5 h-5 shrink-0 mt-0.5 text-sage" />
                      )}
                      <div className="space-y-2">
                        <Badge variant={getCredentialBadgeVariant(cred.category)}>
                          {formatCategoryLabel(cred.category)}
                        </Badge>
                        <CardTitle className="text-base font-bold text-foreground">
                          {cred.title}
                        </CardTitle>
                        {cred.year && (
                          <CardDescription className="text-xs font-medium">
                            {cred.year}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {cred.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 gradient-warm"
        aria-label="Sacred Offerings"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            Sacred Offerings
          </h2>
          <div className="grid sm:grid-cols-2 gap-10 lg:gap-14">
            {products.map((product, i) => (
              <Card
                key={product.slug}
                className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow animate-fade-in border-0"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="product-image-placeholder w-full h-[300px] rounded-t-lg" />
                <CardHeader>
                  <Badge variant="bright" className="w-fit mb-2">
                    {product.badge}
                  </Badge>
                  <CardTitle className="text-xl sm:text-2xl font-bold">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-devotion">
                    {formatCurrency(product.price, product.currency)}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                    {product.story.slice(0, 150)}...
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild variant="saffron">
                    <Link href={`/shop/${product.slug}`} className="gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Yoga Teaser */}
      <section
        className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 gradient-golden"
        aria-label="Thought Yoga"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center gap-4 mb-10">
            <BookOpen className="w-14 h-14 text-white/90" />
            <Flame className="w-12 h-12 text-white/90" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8 drop-shadow-md">
            Thought Yoga — Transform Your Destiny
          </h2>
          <blockquote className="font-serif text-xl sm:text-2xl text-white/95 italic mb-12 leading-relaxed">
            Harness the power of positive thoughts to shape your reality. Thought
            Yoga teaches you to channel your mental energy toward peace,
            prosperity, and spiritual awakening.
          </blockquote>
          <Button
            asChild
            size="xl"
            className="bg-white text-primary hover:bg-white/90 shadow-xl"
          >
            <Link href="/thought-yoga" className="gap-2">
              Begin Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface"
        aria-label="Upcoming Events"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            Upcoming Events
          </h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {featuredEvents.map((event) => (
              <Card
                key={event.id}
                className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-primary bg-card"
              >
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-lg font-bold">
                      {event.title}
                    </CardTitle>
                    {event.isLiveBroadcast && (
                      <Badge className="inline-flex items-center gap-1 bg-devotion-bright text-white border-0">
                        <Radio className="w-3 h-3" />
                        Live
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="flex items-center gap-2 text-sm font-bold text-amber">
                      <Calendar className="w-4 h-4 shrink-0" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 shrink-0" />
                      {event.location}
                    </span>
                  </div>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/events" className="gap-2 font-semibold">
                      View Events
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section
        className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 gradient-devotion overflow-hidden"
        aria-label="Support the Mission"
      >
        <div className="relative mx-auto max-w-2xl text-center z-10">
          <Heart className="w-16 h-16 mx-auto text-white/95 mb-8" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-md">
            Support the Mission
          </h2>
          <p className="font-serif text-white/95 text-base sm:text-lg leading-relaxed mb-12">
            Param Pujya Gurudev&apos;s charitable trusts reach millions through
            Goshala care, Bhojanshala, education, and humanitarian relief. Your
            contribution sustains this divine mission across 100+ global peace centers.
          </p>
          <Button
            asChild
            size="xl"
            className="bg-white text-devotion hover:bg-white/90 hover:text-devotion shadow-xl font-bold"
          >
            <Link href="/donate" className="gap-2">
              Contribute Now
              <Heart className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
