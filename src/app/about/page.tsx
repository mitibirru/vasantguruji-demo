import {
  MapPin,
  Sprout,
  HandHeart,
  Sun,
  Waves,
  AudioLines,
  ScrollText,
  Award,
  Landmark,
  Trophy,
  Medal,
  Globe,
  Star,
  Mail,
  Phone,
} from "lucide-react";
import { timelineData, credentials } from "@/lib/data/timeline";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sprout: Sprout,
  "hand-heart": HandHeart,
  sun: Sun,
  waves: Waves,
  "audio-lines": AudioLines,
  scroll: ScrollText,
  award: Award,
  landmark: Landmark,
  trophy: Trophy,
  medal: Medal,
  globe: Globe,
  star: Star,
};

const nodeColors = [
  "primary",
  "amber",
  "saffron",
  "devotion",
  "primary",
  "amber",
  "saffron",
  "devotion",
  "primary",
  "amber",
  "saffron",
  "devotion",
] as const;

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero — gradient-sacred: saffron→gold→crimson, bright festival-like */}
      <section
        className="relative w-full overflow-hidden gradient-sacred py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        aria-label="Hero"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-sm tracking-tight leading-tight animate-fade-in">
            Param Pujya Gurudev Vasant Vijay Ji Maharaj
          </h1>
          <p className="mt-4 text-white/95 text-sm sm:text-base md:text-lg animate-fade-in">
            National Saint · UN Ambassador of Peace · Peethadhiswar
          </p>
        </div>
      </section>

      {/* Biographical Intro — bg-surface */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 bg-surface">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-foreground text-base sm:text-lg leading-relaxed text-center animate-slide-up">
            Since childhood, profoundly influenced by the philosophical concepts
            of karma and holistic harmony. By age twenty, initiating grassroots
            peace movements. In 1998, formal renunciation of worldly pleasures
            to attain sainthood.
          </p>
        </div>
      </section>

      {/* Interactive Timeline — Colorful */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background"
        aria-label="Timeline"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground text-center mb-12">
            Life & Legacy
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 -translate-x-px bg-linear-to-b from-primary via-amber to-devotion opacity-60" />

            {timelineData.map((node, index) => {
              const IconComponent = iconMap[node.icon] ?? Star;
              const isLeft = index % 2 === 0;
              const colorKey = nodeColors[index % nodeColors.length];
              const borderColor =
                colorKey === "primary"
                  ? "border-l-primary"
                  : colorKey === "amber"
                    ? "border-l-amber"
                    : colorKey === "saffron"
                      ? "border-l-saffron"
                      : "border-l-devotion";
              const dotBg =
                colorKey === "primary"
                  ? "bg-primary"
                  : colorKey === "amber"
                    ? "bg-amber"
                    : colorKey === "saffron"
                      ? "bg-saffron"
                      : "bg-devotion";
              return (
                <div
                  key={index}
                  className={`relative flex gap-0 sm:gap-4 pb-12 last:pb-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content - alternating left/right on desktop */}
                  <div
                    className={`flex-1 min-w-0 sm:w-[calc(50%-1.5rem)] pl-14 sm:pl-0 ${
                      isLeft ? "sm:pr-6 sm:text-right" : "sm:pl-6 sm:text-left"
                    }`}
                  >
                    <Card
                      className={`hover:shadow-lg transition-shadow border-l-4 ${borderColor} bg-card`}
                    >
                      <CardHeader className="pb-2">
                        <Badge variant="saffron" className="w-fit">
                          {node.year}
                        </Badge>
                        <CardTitle className="mt-3 text-lg sm:text-xl">
                          {node.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-sm sm:text-base leading-relaxed">
                          {node.description}
                        </CardDescription>
                        {node.location && (
                          <div
                            className={`mt-3 flex items-center gap-2 ${
                              isLeft ? "sm:justify-end" : ""
                            }`}
                          >
                            <Badge variant="soft-sage" className="gap-1.5">
                              <MapPin className="w-3.5 h-3.5 shrink-0" />
                              {node.location}
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center: bright colored dot + icon on line */}
                  <div
                    className={`absolute left-6 sm:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full ${dotBg} text-white z-10 shadow-lg border-4 border-background`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-1.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials Grid — BRIGHT badges */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-surface"
        aria-label="Credentials"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground text-center mb-10">
            Honours & Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((cred, i) => (
              <Card key={i} className="border-2 border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-base mb-0">
                      {cred.title}
                    </CardTitle>
                    <Badge variant={getCredentialBadgeVariant(cred.category)}>
                      {cred.category.charAt(0).toUpperCase() +
                        cred.category.slice(1)}
                    </Badge>
                  </div>
                  {cred.year && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {cred.year}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cred.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Notice — warm bg */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-sandalwood-light"
        aria-label="Contact Information"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-foreground text-base sm:text-lg leading-relaxed mb-6">
            Param Pujya Gurudev never meets or speaks to anyone on the phone.
            All inquiries are handled through official channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:support@vasantvijayjimaharaj.com"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Mail className="w-5 h-5" />
              support@vasantvijayjimaharaj.com
            </a>
            <a
              href="tel:+919051390513"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Phone className="w-5 h-5" />
              +91-9051390513
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
