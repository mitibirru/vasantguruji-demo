import { EventInstance } from "../types";

export const events: EventInstance[] = [
  {
    id: "kalash-mahayagya-2025",
    title: "11,000 Kalash Mahayagya",
    description:
      "A monumental spiritual assembly featuring 11,000 sacred Kalash in a grand Vedic Yagya ceremony. Join millions of devotees in this historic event led by Param Pujya Gurudev Vasant Vijay Ji Maharaj.",
    date: "2025-09-22",
    time: "09:00",
    location: "Indore, Madhya Pradesh, India",
    geopoint: { lat: 22.7196, lng: 75.8577 },
    isLiveBroadcast: true,
    registrationOpen: true,
    imageUrl: "/events/kalash-mahayagya.jpg",
  },
  {
    id: "navratri-mahotsav-2025",
    title: "Grand Navratri Mahotsav",
    description:
      "The grandest Navratri celebration recognized by the World Book of Records UK for the largest Navratri Pandal. Devotees from Russia, America, Africa, Europe, Australia, London, Nepal, and Mauritius gather for nine nights of divine worship.",
    date: "2025-10-02",
    time: "18:00",
    location: "Indore, Madhya Pradesh, India",
    geopoint: { lat: 22.7196, lng: 75.8577 },
    isLiveBroadcast: true,
    attireRestrictions: ["No black clothing", "No leather items"],
    registrationOpen: true,
    imageUrl: "/events/navratri.jpg",
  },
  {
    id: "krishnagiri-darshan-daily",
    title: "Daily Darshan — Krishnagiri Dham",
    description:
      "Visit the Shree Parshwa Padmavathi Shaktipeet Tirth Dham, the 365-ft tall sacred complex adorned with marble and glass interiors. Includes Goshala visit and Bhojanshala (Jain meal service).",
    date: "2025-12-31",
    time: "06:00",
    location: "Krishnagiri, Tamil Nadu, India",
    geopoint: { lat: 12.5186, lng: 78.2137 },
    isLiveBroadcast: false,
    attireRestrictions: ["No black clothing", "No leather items"],
    registrationOpen: true,
    imageUrl: "/events/krishnagiri-dham.jpg",
  },
  {
    id: "thought-yoga-retreat-2025",
    title: "Thought Yoga Intensive Retreat",
    description:
      "A seven-day immersive residential retreat focused on mastering the principles of Thought Yoga — harnessing the power of positive thoughts to transform your destiny through guided meditation, mantra sadhana, and personal mentorship.",
    date: "2025-11-15",
    time: "07:00",
    location: "Vindhyachal Ashram, Uttar Pradesh, India",
    geopoint: { lat: 25.0711, lng: 83.0584 },
    isLiveBroadcast: false,
    registrationOpen: true,
    imageUrl: "/events/retreat.jpg",
  },
];
