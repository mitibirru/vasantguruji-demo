"use client";

import { useState } from "react";
import {
  Play,
  ExternalLink,
  Youtube,
  Tv,
  Radio,
  Clock,
  Instagram,
  Twitter,
  Globe,
  Mail,
  Phone,
  X,
  Facebook,
} from "lucide-react";
import {
  mediaChannels,
  featuredVideos,
  socialLinks,
} from "@/lib/data/media";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function MediaPage() {
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof featuredVideos)[0] | null
  >(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 gradient-sacred px-6 py-16 rounded-2xl" aria-label="Media Hub Hero">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
            Media Hub
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-white/95 max-w-2xl leading-relaxed font-serif">
            All teachings, discourses, and spiritual content — unified in one
            place.
          </p>
          <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
            Content is aggregated from multiple YouTube channels and TV
            broadcasts. Explore our curated library of discourses, mantras,
            motivational talks, and divine blessings.
          </p>
        </section>

        <Separator className="mb-12" />

        {/* Video Player (expanded when video selected) */}
        {selectedVideo && (
          <>
            <section
              className="mb-12"
              aria-label="Video Player"
            >
              <Card className="overflow-hidden border-border bg-card shadow-xl">
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setSelectedVideo(null)}
                    className="absolute top-3 right-3 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition-colors border-0"
                    aria-label="Close player"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-lg sm:text-xl font-semibold text-foreground">
                      {selectedVideo.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedVideo.channel} · {selectedVideo.category}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedVideo(null)}
                    className="shrink-0"
                  >
                    <X className="w-4 h-4" />
                    Close
                  </Button>
                </CardContent>
              </Card>
            </section>

            <Separator className="mb-12" />
          </>
        )}

        {/* Featured Videos Grid */}
        <section className="mb-20" aria-label="Featured Videos">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-6">
            Featured Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <Card
                key={video.id}
                className="group overflow-hidden border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                    <span className="rounded-full bg-saffron p-3 text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current" />
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif font-semibold text-foreground line-clamp-2 group-hover:text-saffron transition-colors">
                    {video.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge
                      variant={video.channel.includes("TV") ? "sage" : "devotion"}
                      className="gap-1"
                    >
                      {video.channel.includes("TV") ? (
                        <Tv className="w-3.5 h-3.5" />
                      ) : (
                        <Youtube className="w-3.5 h-3.5" />
                      )}
                      {video.channel}
                    </Badge>
                    <Badge variant="soft-amber">{video.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Channels Directory */}
        <section className="mb-20" aria-label="Channels Directory">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-6">
            Channels Directory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaChannels.map((channel) => (
              <Card
                key={channel.id}
                className="flex overflow-hidden border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div
                  className="w-2 sm:w-3 shrink-0"
                  style={{ backgroundColor: channel.thumbnailColor }}
                  aria-hidden
                />
                <div className="flex-1 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="font-serif text-foreground text-base">
                      {channel.name}
                    </CardTitle>
                    <Badge
                      variant={
                        channel.platform === "YouTube"
                          ? "devotion"
                          : "sage"
                      }
                      className="gap-1"
                    >
                      {channel.platform === "YouTube" ? (
                        <Youtube className="w-3.5 h-3.5" />
                      ) : (
                        <Tv className="w-3.5 h-3.5" />
                      )}
                      {channel.platform}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {channel.focus}
                  </p>
                  <Button
                    variant="link"
                    size="sm"
                    className="mt-4 p-0 h-auto font-semibold text-saffron hover:text-saffron/80"
                    asChild
                  >
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      Visit Channel
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Daily Broadcast Schedule */}
        <section className="mb-20" aria-label="Daily Broadcast Schedule">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-6">
            Daily Broadcast Schedule
          </h2>
          <Card className="gradient-temple border-border overflow-hidden">
            <ul className="divide-y divide-border/50">
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 sm:p-5">
                <span className="flex items-center gap-2 text-muted-foreground shrink-0">
                  <Clock className="w-4 h-4" />
                  <strong className="text-primary font-bold">10:30 PM</strong>
                </span>
                <span className="font-medium text-foreground">Sanskar TV</span>
                <span className="text-sm text-muted-foreground">
                  Discourses and Shrimadbhagwat Katha
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 sm:p-5">
                <span className="flex items-center gap-2 text-muted-foreground shrink-0">
                  <Clock className="w-4 h-4" />
                  <strong className="text-primary font-bold">3:00 PM</strong>
                </span>
                <span className="font-medium text-foreground">
                  Thought Yoga YouTube
                </span>
                <span className="text-sm text-muted-foreground">Live Broadcast</span>
                <Badge variant="devotion" className="gap-1 w-fit">
                  <Radio className="w-3 h-3" />
                  Live
                </Badge>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 sm:p-5">
                <span className="flex items-center gap-2 text-muted-foreground shrink-0">
                  <Clock className="w-4 h-4" />
                  <strong className="text-primary font-bold">4:00 PM</strong>
                </span>
                <span className="font-medium text-foreground">
                  Sanskar TV Live
                </span>
                <span className="text-sm text-muted-foreground">Live Broadcast</span>
                <Badge variant="devotion" className="gap-1 w-fit">
                  <Radio className="w-3 h-3" />
                  Live
                </Badge>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 sm:p-5">
                <span className="flex items-center gap-2 text-muted-foreground shrink-0">
                  <Tv className="w-4 h-4" />
                </span>
                <span className="font-medium text-foreground">mana TV</span>
                <span className="text-sm text-muted-foreground">
                  Global broadcast for international viewers
                </span>
              </li>
            </ul>
          </Card>
        </section>

        <Separator className="mb-12" />

        {/* Social Connect Section */}
        <section className="mb-8" aria-label="Social Connect">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-6">
            Connect With Us
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl leading-relaxed">
            Param Pujya Gurudev never meets or speaks to anyone on the phone.
            All inquiries are handled through the official support channels
            below.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card className="overflow-hidden border-border bg-card hover:border-saffron/40 hover:shadow-lg transition-all">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4"
              >
                <span className="rounded-full p-3 bg-saffron-light">
                  <Instagram className="w-8 h-8 text-saffron" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  Instagram
                </span>
              </a>
            </Card>
            <Card className="overflow-hidden border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all">
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4"
              >
                <span className="rounded-full p-3 bg-primary-light">
                  <Twitter className="w-8 h-8 text-primary" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  Twitter
                </span>
              </a>
            </Card>
            <Card className="overflow-hidden border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4"
              >
                <span className="rounded-full p-3 bg-primary-light">
                  <Facebook className="w-8 h-8 text-primary" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  Facebook
                </span>
              </a>
            </Card>
            <Card className="overflow-hidden border-border bg-card hover:border-devotion/40 hover:shadow-lg transition-all">
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4"
              >
                <span className="rounded-full p-3 bg-devotion-light">
                  <Youtube className="w-8 h-8 text-devotion" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  YouTube
                </span>
              </a>
            </Card>
            <Card className="overflow-hidden border-border bg-card hover:border-sage/40 hover:shadow-lg transition-all">
              <a href={`mailto:${socialLinks.email}`} className="flex flex-col items-center gap-2 p-4">
                <span className="rounded-full p-3 bg-sage-light">
                  <Mail className="w-8 h-8 text-sage" />
                </span>
                <span className="text-sm font-medium text-foreground text-center">
                  Email
                </span>
              </a>
            </Card>
            <Card className="overflow-hidden border-border bg-card hover:border-amber/40 hover:shadow-lg transition-all">
              <a href={`tel:${socialLinks.phone.replace(/\s/g, "")}`} className="flex flex-col items-center gap-2 p-4">
                <span className="rounded-full p-3 bg-amber-light">
                  <Phone className="w-8 h-8 text-amber" />
                </span>
                <span className="text-sm font-medium text-foreground text-center">
                  Phone
                </span>
              </a>
            </Card>
            <Card className="overflow-hidden border-border bg-card hover:border-sage/40 hover:shadow-lg transition-all">
              <a
                href={socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4"
              >
                <span className="rounded-full p-3 bg-sage-light">
                  <Globe className="w-8 h-8 text-sage" />
                </span>
                <span className="text-sm font-medium text-foreground text-center">
                  Website
                </span>
              </a>
            </Card>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              {socialLinks.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              {socialLinks.phone}
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}
