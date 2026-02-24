"use client";

import { useState, useCallback } from "react";
import {
  Music,
  RotateCcw,
  AudioWaveform,
  Shield,
  Sparkles,
  Check,
  Target,
  Hand,
} from "lucide-react";
import { mantras, mantraCategoryLabels } from "@/lib/data/mantras";
import type { Mantra } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CATEGORY_BADGE_VARIANTS: Record<
  string,
  "sage" | "devotion" | "amber" | "saffron" | "bright"
> = {
  health: "sage",
  "obstacle-removal": "devotion",
  planetary: "amber",
  protection: "saffron",
  prosperity: "bright",
  devotional: "devotion",
};

function getCategoryBadgeVariant(category: string) {
  return CATEGORY_BADGE_VARIANTS[category] ?? "outline";
}

const ALL_CATEGORIES = "all";
const categories = [ALL_CATEGORIES, ...Object.keys(mantraCategoryLabels)];

export default function MantrasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORIES);
  const [selectedMantra, setSelectedMantra] = useState<Mantra | null>(null);
  const [jaapCount, setJaapCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isTapping, setIsTapping] = useState(false);

  const filteredMantras = mantras.filter(
    (m) => selectedCategory === ALL_CATEGORIES || m.category === selectedCategory
  );

  const targetRepetitions = selectedMantra?.requiredRepetitions ?? 108;

  const handleOpenPlayer = useCallback((mantra: Mantra) => {
    setSelectedMantra(mantra);
    setJaapCount(0);
    setIsComplete(false);
  }, []);

  const handleJaapTap = useCallback(() => {
    if (!selectedMantra) return;
    setIsTapping(true);
    const newCount = jaapCount + 1;
    setJaapCount(newCount);
    if (newCount >= targetRepetitions) {
      setIsComplete(true);
    }
    setTimeout(() => setIsTapping(false), 150);
  }, [selectedMantra, jaapCount, targetRepetitions]);

  const handleReset = useCallback(() => {
    setJaapCount(0);
    setIsComplete(false);
  }, []);

  const progressPercent = targetRepetitions > 0 ? Math.min(100, (jaapCount / targetRepetitions) * 100) : 0;
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-golden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-sm tracking-tight">
            Mantra Library
          </h1>
          <p className="mt-3 font-sans text-white/95 text-base sm:text-lg">
            Divinely accomplished mantras from 25 years of intensive sadhana
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
            <p className="font-serif text-white text-sm sm:text-base leading-relaxed flex items-start gap-2 text-left">
              <Shield className="w-5 h-5 shrink-0 mt-0.5" />
              <span>
                Each mantra is recorded with precise phonetic pronunciation by Param Pujya Gurudev,
                ensuring authentic spiritual efficacy.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-20 py-4 px-4 sm:px-6 lg:px-8 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "bright" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className="shrink-0 rounded-full"
              >
                {cat === ALL_CATEGORIES ? "All" : mantraCategoryLabels[cat]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Mantra Cards Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMantras.map((mantra, i) => (
              <Card
                key={mantra.id}
                className="group overflow-hidden border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant={getCategoryBadgeVariant(mantra.category)}>
                      {mantraCategoryLabels[mantra.category]}
                    </Badge>
                    {mantra.acousticFidelity && (
                      <Badge variant="soft-primary" className="gap-1">
                        <AudioWaveform className="w-3.5 h-3.5" />
                        High Fidelity
                      </Badge>
                    )}
                    <Badge variant="secondary">{mantra.duration}</Badge>
                  </div>

                  <CardTitle className="font-serif text-foreground">
                    {mantra.title}
                  </CardTitle>
                  {mantra.titleHindi && (
                    <p className="text-sm text-muted-foreground mt-0.5 font-serif" dir="rtl">
                      {mantra.titleHindi}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {mantra.description}
                  </p>

                  {mantra.prescribedFor.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {mantra.prescribedFor.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded bg-surface text-muted-foreground text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <Button
                    variant="saffron"
                    onClick={() => handleOpenPlayer(mantra)}
                    className="mt-5 w-full"
                  >
                    <Music className="w-4 h-4" />
                    Open Player
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phonetic Purity Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border">
        <div className="mx-auto max-w-3xl">
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-amber shrink-0 mt-0.5" />
                <div>
                  <CardTitle className="font-serif text-foreground mb-2">
                    Phonetic Purity
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike publicly available mantras that may be incorrectly pronounced, every
                    recording in this library preserves the absolute phonetic purity achieved through
                    Param Pujya Gurudev&apos;s 25 years of dedicated sadhana.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Audio Player Panel (Fixed Bottom) */}
      {selectedMantra && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border shadow-2xl animate-slide-up"
          style={{ maxHeight: "90vh" }}
        >
          <div className="max-w-4xl mx-auto overflow-y-auto gradient-temple" style={{ maxHeight: "90vh" }}>
            <Card className="m-4 sm:m-6 border-border bg-transparent border-0 shadow-none">
              <CardContent className="p-4 sm:p-6 pt-6">
                {/* Mantra Title */}
                <div className="text-center mb-6">
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                    {selectedMantra.title}
                  </h2>
                  {selectedMantra.titleHindi && (
                    <p className="text-muted-foreground text-sm mt-1 font-serif" dir="rtl">
                      {selectedMantra.titleHindi}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-3">
                    Complete {targetRepetitions} repetitions for full spiritual benefit
                  </p>
                </div>

                {/* YouTube Embed */}
                <div className="rounded-xl overflow-hidden bg-black aspect-video max-w-2xl mx-auto mb-6">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedMantra.youtubeId}?autoplay=1`}
                    title={selectedMantra.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Jaap Mala - Centerpiece */}
                <div className="flex flex-col items-center relative">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6">
                    {/* Progress Ring */}
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 120 120"
                      aria-hidden
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-border"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="var(--primary-bright)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="transition-all duration-300"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                      />
                    </svg>

                    {/* Counter Display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-primary tabular-nums">
                        {jaapCount}
                      </span>
                      <span className="text-muted-foreground text-sm">/ {targetRepetitions}</span>
                    </div>
                  </div>

                  {/* Completion Celebration - Golden celebration */}
                  {isComplete && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none animate-fade-in z-10 bg-background/90 rounded-full">
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(24)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-3 rounded-sm animate-gentle-glow"
                            style={{
                              backgroundColor: "var(--primary-bright)",
                              left: `${20 + (i % 8) * 10}%`,
                              top: `${30 + (i % 6) * 8}%`,
                              transform: `rotate(${i * 15}deg)`,
                              animationDelay: `${(i % 5) * 80}ms`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="relative flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary-bright border-2 border-primary shadow-lg text-white">
                          <Check className="w-6 h-6" />
                          <span className="font-serif font-semibold text-lg">
                            Complete! Divine blessings upon you
                          </span>
                        </div>
                        <Sparkles className="w-10 h-10 text-primary-bright animate-gentle-glow" style={{ color: "var(--primary-bright)" }} />
                      </div>
                    </div>
                  )}

                  {/* TAP Button */}
                  <Button
                    variant="bright"
                    size="lg"
                    onClick={handleJaapTap}
                    disabled={isComplete}
                    className={`
                      h-32! w-32! sm:h-36! sm:w-36! rounded-full!
                      relative flex items-center justify-center gap-2
                      font-serif text-xl font-bold
                      transition-transform duration-100 select-none
                      ${isComplete ? "cursor-default opacity-70" : "shadow-lg hover:shadow-xl active:scale-95"}
                      ${isTapping ? "scale-95" : "scale-100"}
                    `}
                  >
                    <Hand className="w-8 h-8 sm:w-10 sm:h-10" />
                    <span>TAP</span>
                  </Button>

                  {/* Reset Button */}
                  <Button
                    variant="ghost"
                    onClick={handleReset}
                    className="mt-4 text-muted-foreground hover:text-foreground"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </Button>
                </div>

                {/* Target Icon */}
                <div className="mt-4 flex justify-center">
                  <Target className="w-5 h-5 text-primary/70" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
