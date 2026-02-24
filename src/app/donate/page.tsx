"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Building2,
  Flame,
  UtensilsCrossed,
  HeartPulse,
  ShieldCheck,
  Check,
  IndianRupee,
  Globe,
  Utensils,
  ArrowLeft,
} from "lucide-react";
import { donationFunds } from "@/lib/data/funds";
import {
  formatCompactNumber,
  formatCurrency,
  getProgressPercentage,
} from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

const PRESET_AMOUNTS = [101, 501, 1001, 5001, 11000];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  flame: Flame,
  utensils: UtensilsCrossed,
  "heart-pulse": HeartPulse,
};

const fundColorMap: Record<string, { strip: string; progress: string }> = {
  building: { strip: "bg-saffron", progress: "bg-saffron" },
  flame: { strip: "bg-amber", progress: "bg-amber" },
  utensils: { strip: "bg-sage", progress: "bg-sage" },
  "heart-pulse": { strip: "bg-devotion", progress: "bg-devotion" },
};

const impactMetrics = [
  {
    icon: IndianRupee,
    value: "₹100 Cr+",
    label: "in charitable projects",
  },
  {
    icon: Utensils,
    value: "Millions",
    label: "of meals served annually",
  },
  {
    icon: HeartPulse,
    value: "Mediclaim insurance",
    label: "for thousands",
  },
  {
    icon: Globe,
    value: "100+",
    label: "peace centers globally",
  },
];

export default function DonatePage() {
  const [contributingFundId, setContributingFundId] = useState<string | null>(
    null
  );
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContributeClick = (fundId: string) => {
    setContributingFundId((prev) => (prev === fundId ? null : fundId));
    setSelectedAmount(null);
    setCustomAmount("");
    setShowSuccess(false);
  };

  const handleCompleteDonation = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setContributingFundId(null);
      setSelectedAmount(null);
      setCustomAmount("");
      setShowSuccess(false);
    }, 3000);
  };

  const displayAmount =
    selectedAmount !== null
      ? selectedAmount
      : customAmount
        ? parseFloat(customAmount) || 0
        : 0;

  const hasValidAmount = displayAmount > 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero — gradient-devotion */}
        <section className="text-center mb-12 sm:mb-16 animate-fade-in rounded-2xl overflow-hidden gradient-devotion py-16 sm:py-20 px-6 sm:px-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur mb-6">
            <Heart className="w-12 h-12 text-white" fill="currentColor" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-sm mb-4">
            Support the Mission
          </h1>
          <p className="text-white/95 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Param Pujya Gurudev&apos;s philanthropic reach spans 100+ peace
            centers, millions served annually through charitable programs, and
            Mediclaim insurance worth crores for underserved communities.
            Elevate your spiritual journey through seva.
          </p>
        </section>

        {/* Donation fund cards */}
        <section className="mb-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {donationFunds.map((fund) => {
              const IconComp = iconMap[fund.icon] ?? Building2;
              const colors = fundColorMap[fund.icon] ?? {
                strip: "bg-primary",
                progress: "bg-primary",
              };
              const progressPct = getProgressPercentage(
                fund.raisedAmount,
                fund.targetAmount
              );
              return (
                <Card key={fund.id} className="overflow-hidden border-0 shadow-lg">
                  {/* Bright colored top strip */}
                  <div
                    className={`h-2 ${colors.strip}`}
                  />
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          fund.icon === "building"
                            ? "bg-saffron-light"
                            : fund.icon === "flame"
                              ? "bg-amber-light"
                              : fund.icon === "utensils"
                                ? "bg-sage-light"
                                : "bg-devotion-light"
                        }`}
                      >
                        <IconComp
                          className={`w-6 h-6 ${
                            fund.icon === "building"
                              ? "text-saffron"
                              : fund.icon === "flame"
                                ? "text-amber"
                                : fund.icon === "utensils"
                                  ? "text-sage"
                                  : "text-devotion"
                          }`}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <CardTitle className="text-lg mb-0">
                            {fund.name}
                          </CardTitle>
                          {fund.requiresKYC && (
                            <Badge variant="soft-devotion" className="text-xs">
                              KYC Required
                            </Badge>
                          )}
                        </div>
                        {fund.nameHindi && (
                          <p className="font-serif text-sm text-muted-foreground mt-0.5">
                            {fund.nameHindi}
                          </p>
                        )}
                        <CardDescription className="mt-2">
                          {fund.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    {/* Progress bar with matching fund color */}
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-muted-foreground">
                          {formatCompactNumber(fund.raisedAmount)} raised
                        </span>
                        <span className="font-medium text-foreground">
                          {formatCompactNumber(fund.targetAmount)} target
                        </span>
                      </div>
                      <Progress
                        value={progressPct}
                        indicatorClassName={colors.progress}
                      />
                    </div>

                    <Button
                      variant="soft"
                      size="lg"
                      className="w-full"
                      onClick={() => handleContributeClick(fund.id)}
                    >
                      Contribute
                    </Button>
                  </CardContent>

                  {/* Inline donation form */}
                  {contributingFundId === fund.id && (
                    <div className="border-t border-border bg-surface/50 p-6">
                      {showSuccess ? (
                        <div className="flex flex-col items-center gap-3 py-4 text-devotion animate-fade-in">
                          <div className="w-12 h-12 rounded-full bg-devotion-light flex items-center justify-center">
                            <Check className="w-6 h-6" />
                          </div>
                          <p className="font-serif font-medium">
                            Thank you for your contribution
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Your seva supports the mission.
                          </p>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm font-medium text-foreground mb-3">
                            Select amount
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {PRESET_AMOUNTS.map((amt) => (
                              <Button
                                key={amt}
                                variant={
                                  selectedAmount === amt ? "bright" : "outline"
                                }
                                size="sm"
                                onClick={() => {
                                  setSelectedAmount(amt);
                                  setCustomAmount("");
                                }}
                              >
                                {formatCurrency(amt, fund.currency)}
                              </Button>
                            ))}
                            <div className="relative flex-1 min-w-[100px]">
                              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                              <Input
                                type="number"
                                placeholder="Custom"
                                value={customAmount}
                                onChange={(e) => {
                                  setCustomAmount(e.target.value);
                                  setSelectedAmount(null);
                                }}
                                className="pl-9"
                              />
                            </div>
                          </div>

                          {fund.requiresKYC && (
                            <div className="flex gap-2 p-3 rounded-lg bg-devotion-light/60 border border-devotion/20 mb-4">
                              <ShieldCheck className="w-5 h-5 shrink-0 text-devotion mt-0.5" />
                              <p className="text-sm text-muted-foreground">
                                As per regulatory requirements, Aadhaar card
                                details are mandatory for this contribution. PAN
                                card is optional.
                              </p>
                            </div>
                          )}

                          <Button
                            variant="devotion"
                            size="lg"
                            className="w-full"
                            onClick={handleCompleteDonation}
                            disabled={!hasValidAmount}
                          >
                            Complete Donation
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </section>

        {/* Impact Dashboard — gradient-golden */}
        <section className="py-12 sm:py-16 gradient-golden rounded-2xl px-6 sm:px-8">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-white text-center mb-8">
            Impact Dashboard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impactMetrics.map((metric, i) => {
              const IconComponent = metric.icon;
              return (
                <Card
                  key={i}
                  className="flex flex-col items-center text-center animate-fade-in border-0 bg-white/15 backdrop-blur shadow-lg"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-serif font-bold text-white text-2xl sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="text-sm text-white/90">
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Button variant="link" asChild>
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
