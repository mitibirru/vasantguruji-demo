"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Sun,
  Brain,
  Heart,
  Users,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Flame,
  Clock,
  BookOpen,
  Zap,
  Hand,
  Music,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const PILLARS = [
  {
    icon: Brain,
    title: "Personal Transformation",
    description:
      "Alleviate anxiety and depression through conscious thought alignment",
    accent: "saffron",
    iconBg: "bg-saffron text-white",
  },
  {
    icon: Heart,
    title: "Physical Healing",
    description:
      "Promote healing and better sleep through mindfulness practice",
    accent: "devotion",
    iconBg: "bg-devotion text-white",
  },
  {
    icon: Users,
    title: "Harmonious Relationships",
    description: "Cultivate deeper connections through positive energy",
    accent: "amber",
    iconBg: "bg-amber text-white",
  },
  {
    icon: Sparkles,
    title: "Spiritual Awakening",
    description: "Achieve profound inner peace through cosmic alignment",
    accent: "sage",
    iconBg: "bg-sage text-white",
  },
] as const;

const PRESET_AFFIRMATION =
  "My thoughts are aligned with cosmic abundance and divine peace.";

const QUOTES = [
  "Your thoughts are tangible energies capable of actively shaping your reality",
  "Raise your hands during worship to attract cosmic energy through your fingertips",
  "The mastery of thoughts and their alignment with positive cosmic energies overcomes all negativity",
  "Thought Yoga bridges ancient Vedic wisdom with the law of attraction",
];

const STREAK_KEY = "thought-yoga-streak";
const LAST_PRACTICE_KEY = "thought-yoga-last-practice";
const MOOD_KEY = "thought-yoga-mood-today";
const AFFIRMATION_KEY = "thought-yoga-affirmation";

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

export default function ThoughtYogaPage() {
  const [streak, setStreak] = useState(0);
  const [affirmation, setAffirmation] = useState(PRESET_AFFIRMATION);
  const [mood, setMood] = useState<number | null>(null);
  const [timerMinutes, setTimerMinutes] = useState(5);
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const completeSession = useCallback(() => {
    if (typeof window === "undefined") return;
    const today = getTodayStr();
    const last = localStorage.getItem(LAST_PRACTICE_KEY);
    let newStreak = parseInt(localStorage.getItem(STREAK_KEY) ?? "0", 10);

    if (last !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().slice(0, 10);

      if (!last || last === yesterdayStr) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }
      localStorage.setItem(LAST_PRACTICE_KEY, today);
      localStorage.setItem(STREAK_KEY, String(newStreak));
      setStreak(newStreak);
    }
  }, []);

  // Load streak and affirmation from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(STREAK_KEY);
    if (saved !== null) setStreak(parseInt(saved, 10) || 0);
    const aff = localStorage.getItem(AFFIRMATION_KEY);
    if (aff) setAffirmation(aff);
    const moodToday = localStorage.getItem(MOOD_KEY);
    if (moodToday) {
      const [date, val] = moodToday.split("|");
      if (date === getTodayStr()) setMood(parseInt(val, 10));
    }
  }, []);

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          completeSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning, completeSession]);

  const handleStartPause = () => {
    if (timeLeft === 0) return;
    setIsRunning((p) => !p);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(timerMinutes * 60);
  };

  const handleTimerSelect = (mins: number) => {
    setTimerMinutes(mins);
    if (!isRunning) setTimeLeft(mins * 60);
  };

  const handleMoodSelect = (val: number) => {
    setMood(val);
    localStorage.setItem(MOOD_KEY, `${getTodayStr()}|${val}`);
    completeSession();
  };

  const handleAffirmationChange = (val: string) => {
    setAffirmation(val);
    localStorage.setItem(AFFIRMATION_KEY, val);
  };

  // Rotate quotes
  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const mm = Math.floor(timeLeft / 60);
  const ss = timeLeft % 60;
  const displayTime = `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  const progress = timerMinutes * 60 > 0 ? 1 - timeLeft / (timerMinutes * 60) : 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section
        className="relative overflow-hidden gradient-sacred py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        aria-label="Thought Yoga Hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-sm tracking-tight">
            Thought Yoga
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white font-medium">
            Master your thoughts. Transform your destiny.
          </p>
          <p className="mt-6 font-serif text-base sm:text-lg text-white/95 leading-relaxed max-w-2xl mx-auto">
            Human thoughts are tangible energies that shape reality and destiny.
            Thought Yoga integrates the law of attraction with ancient Vedic
            wisdom—a practice for personal transformation, healing, harmonious
            relationships, and spiritual awakening.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20" aria-label="Four Pillars">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground text-center mb-12">
            The Four Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, title, description, iconBg }, i) => (
              <Card
                key={title}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-border bg-card border-t-4 border-t-transparent"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  borderTopColor:
                    iconBg === "bg-saffron text-white"
                      ? "var(--saffron)"
                      : iconBg === "bg-devotion text-white"
                        ? "var(--devotion)"
                        : iconBg === "bg-amber text-white"
                          ? "var(--amber)"
                          : "var(--sage)",
                }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center mb-2`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-serif text-foreground">
                    {title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Practice Module */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-surface"
        aria-label="Daily Practice"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground text-center mb-12">
            Daily Practice
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Meditation Timer */}
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <CardTitle className="font-serif">Meditation Timer</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`relative w-48 h-48 rounded-full flex items-center justify-center ${
                      isRunning ? "animate-gentle-glow" : ""
                    }`}
                    style={{
                      background: `conic-gradient(var(--primary-bright) ${progress * 360}deg, var(--border) 0deg)`,
                    }}
                  >
                    <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                      <span className="font-serif text-3xl tabular-nums text-foreground">
                        {displayTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6 flex-wrap justify-center">
                    {[5, 10, 15, 20, 30].map((m) => (
                      <Button
                        key={m}
                        variant={timerMinutes === m ? "bright" : "soft"}
                        size="sm"
                        onClick={() => handleTimerSelect(m)}
                      >
                        {m} min
                      </Button>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button
                      variant="saffron"
                      onClick={handleStartPause}
                      disabled={timeLeft === 0}
                      size="lg"
                    >
                      {isRunning ? (
                        <>
                          <Pause className="w-4 h-4" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Start
                        </>
                      )}
                    </Button>
                    <Button variant="outline" onClick={handleReset}>
                      <RotateCcw className="w-4 h-4" />
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mood Logger & Affirmation */}
            <div className="space-y-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber" />
                    <CardTitle className="font-serif">Mood Logger</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    1 = Distressed · 5 = Blissful
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex gap-3 justify-between">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        onClick={() => handleMoodSelect(val)}
                        className={`flex-1 aspect-square max-w-14 rounded-xl flex items-center justify-center text-xl font-serif transition-all ${
                          mood === val
                            ? "bg-amber border-2 border-amber text-white scale-105 shadow-lg"
                            : "bg-surface border border-border text-muted-foreground hover:border-amber/50"
                        }`}
                        title={
                          val === 1
                            ? "Distressed"
                            : val === 2
                              ? "Uneasy"
                              : val === 3
                                ? "Neutral"
                                : val === 4
                                  ? "Peaceful"
                                  : "Blissful"
                        }
                      >
                        <MoodIndicator level={val} />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <CardTitle className="font-serif">Daily Affirmation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Textarea
                    value={affirmation}
                    onChange={(e) => handleAffirmationChange(e.target.value)}
                    placeholder="Enter your positive affirmation..."
                    rows={4}
                    className="font-serif bg-surface/50"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Streak Tracker */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-surface"
        aria-label="Streak"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
            Your Practice Streak
          </h2>
          <Card className="inline-flex items-center gap-4 px-8 py-6 border-saffron/30 bg-saffron-light/60">
            <Flame
              className="w-16 h-16 text-saffron transition-transform"
              style={{
                transform: `scale(${1 + Math.min(streak * 0.05, 0.5)})`,
              }}
            />
            <span
              className="font-serif text-5xl sm:text-6xl font-bold tabular-nums"
              style={{ color: "var(--primary-bright)" }}
              aria-live="polite"
            >
              {streak}
            </span>
            <span className="text-muted-foreground font-medium">days</span>
          </Card>
          <p className="mt-4 text-sm text-muted-foreground">
            Complete a timer session or log your mood to build your streak
          </p>
        </div>
      </section>

      {/* Philosophical Quotes */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 gradient-warm"
        aria-label="Philosophical Quotes"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground text-center mb-10">
            Teachings
          </h2>
          <div className="min-h-[120px] flex items-center justify-center">
            <blockquote
              key={quoteIndex}
              className="font-serif text-lg sm:text-xl text-foreground italic text-center leading-relaxed animate-fade-in"
            >
              &ldquo;{QUOTES[quoteIndex]}&rdquo;
            </blockquote>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {QUOTES.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === quoteIndex ? "w-6 bg-primary-bright" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Energy Replenishment Guide */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-surface"
        aria-label="Energy Replenishment"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground text-center mb-8">
            Energy Replenishment
          </h2>
          <Card className="gradient-temple border-border">
            <CardContent className="pt-6">
              <p className="font-serif text-foreground leading-relaxed mb-6">
                Raising your hands during worship attracts cosmic energy through
                your fingertips. Clapping during bhajans acts as acupressure
                healing, stimulating energy points in the palms. These
                biomechanical practices replenish your vital energy and align you
                with higher frequencies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-light text-primary">
                  <Hand className="w-5 h-5" />
                  <span className="font-medium">Raise hands for cosmic energy</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-light text-amber">
                  <Music className="w-5 h-5" />
                  <span className="font-medium">Clap during bhajans</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sage-light text-sage">
                  <Zap className="w-5 h-5" />
                  <span className="font-medium">Attract vital energy</span>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Button asChild variant="amber" size="lg">
                  <Link href="/mantras" className="inline-flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Explore Mantra Library
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function MoodIndicator({ level }: { level: number }) {
  const isFrown = level <= 2;
  const mouthCurve = level === 1 ? "w-5" : level === 2 ? "w-4" : level === 3 ? "w-3" : level === 4 ? "w-4" : "w-5";
  const intensity = level === 1 ? "opacity-100" : level === 5 ? "opacity-100" : "opacity-80";
  return (
    <div className={`flex flex-col items-center justify-center ${intensity}`}>
      <div className="flex gap-1 mb-1">
        <div className="w-1 h-1 rounded-full bg-current" />
        <div className="w-1 h-1 rounded-full bg-current" />
      </div>
      {isFrown ? (
        <div className={`${mouthCurve} h-1.5 border-b-2 border-current rounded-b-full`} style={{ transform: "scaleY(-1)" }} />
      ) : (
        <div className={`${mouthCurve} h-1.5 border-t-2 border-current rounded-t-full`} />
      )}
    </div>
  );
}
