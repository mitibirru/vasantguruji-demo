import {
  Calendar,
  MapPin,
  Radio,
  Clock,
  AlertTriangle,
  ExternalLink,
  Tv,
} from "lucide-react";
import { events } from "@/lib/data/events";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const headerGradients = [
  "gradient-sacred",
  "gradient-golden",
  "gradient-devotion",
  "gradient-sacred",
];

const broadcastSchedule = [
  { name: "Sanskar TV", time: "10:30 PM daily", icon: Tv },
  { name: "Thought Yoga YouTube", time: "Live at 3:00 PM", icon: Radio },
  { name: "Sanskar TV Live", time: "4:00 PM", icon: Tv },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero — gradient-golden */}
      <section className="gradient-golden py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-sm mb-4">
            Sacred Events & Gatherings
          </h1>
          <p className="text-white/95 text-base sm:text-lg leading-relaxed">
            Join millions of devotees across the globe in transformative
            spiritual assemblies
          </p>
        </div>
      </section>

      {/* Event Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16" aria-label="Events">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => {
              const geopoint =
                "geopoint" in event ? event.geopoint : undefined;
              const headerGradient =
                headerGradients[index % headerGradients.length];

              return (
                <Card
                  key={event.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow animate-slide-up border-0 shadow-lg"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  {/* BRIGHT colored header gradient */}
                  <div
                    className={`h-28 sm:h-32 ${headerGradient} flex items-end justify-between p-4`}
                  >
                    {event.isLiveBroadcast && (
                      <Badge variant="devotion" className="shadow-md">
                        <Radio className="w-3.5 h-3.5 mr-1.5" />
                        Live Broadcast Available
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 pt-0">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 shrink-0 text-amber" />
                      <span className="text-amber font-bold">
                        {formatDate(event.date)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 shrink-0" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 shrink-0 text-sage" />
                      <span className="text-sage font-medium">
                        {event.location}
                      </span>
                    </div>

                    {event.attireRestrictions &&
                      event.attireRestrictions.length > 0 && (
                        <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-light border-2 border-amber/40">
                          <AlertTriangle className="w-5 h-5 shrink-0 text-amber mt-0.5" />
                          <div>
                            <p className="text-sm font-bold text-foreground">
                              Dress code notice
                            </p>
                            <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside">
                              {event.attireRestrictions.map((rule, i) => (
                                <li key={i}>{rule}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-3 pt-0">
                    {event.registrationOpen ? (
                      <Button variant="saffron">Register Now</Button>
                    ) : (
                      <Button variant="outline" disabled>
                        Coming Soon
                      </Button>
                    )}
                    {geopoint && (
                      <Button variant="soft-sage" asChild>
                        <a
                          href={`https://www.google.com/maps?q=${geopoint.lat},${geopoint.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          Get Directions
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Broadcast Schedule — gradient-temple */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        aria-label="Daily Broadcast Schedule"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground text-center mb-10">
            Daily Broadcast Schedule
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {broadcastSchedule.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.name}
                  className="text-center gradient-temple border-0 shadow-md"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-primary font-bold">
                      {item.time}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
