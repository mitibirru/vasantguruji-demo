import { Mantra } from "../types";

export const mantras: Mantra[] = [
  {
    id: "dhanvantari-siddha",
    title: "Dhanvantari Siddha Mantra",
    titleHindi: "धन्वंतरि सिद्ध मंत्र",
    description:
      "A powerful healing mantra prescribed for health restoration and eradication of diseases. Listen three times to invoke the divine healing energy of Lord Dhanvantari.",
    category: "health",
    youtubeId: "iF6jif7TsNY",
    duration: "11:42",
    requiredRepetitions: 3,
    prescribedFor: [
      "Health restoration",
      "Disease eradication",
      "Physical healing",
      "Mental wellness",
    ],
    acousticFidelity: true,
  },
  {
    id: "nakoda-bhairav",
    title: "Nakoda Bhairav Mantra",
    titleHindi: "नाकोडा भैरव मंत्र — कष्ट हरम स्तुति",
    description:
      "The Kast Haram Stuti — a supremely powerful incantation for removing severe obstacles. Prescribed for 108 consecutive days of devoted listening to witness miraculous divine interventions.",
    category: "obstacle-removal",
    youtubeId: "2TgLKoVeE2w",
    duration: "15:30",
    requiredRepetitions: 108,
    prescribedFor: [
      "Obstacle removal",
      "Relief from suffering",
      "Divine protection",
      "Miraculous interventions",
    ],
    acousticFidelity: true,
  },
  {
    id: "navgraha-shanti",
    title: "Navgraha Shanti Mantra",
    titleHindi: "नवग्रह शांति मंत्र",
    description:
      "Specific mantras to mitigate the negative astrological effects of Mars (Mangal), Saturn (Shani), Rahu, and Ketu. Harmonizes the nine planetary influences on your life.",
    category: "planetary",
    youtubeId: "nnYRS5iaSxU",
    duration: "22:15",
    requiredRepetitions: 27,
    prescribedFor: [
      "Planetary harmony",
      "Shani Dosh remedy",
      "Mangal Dosh remedy",
      "Rahu-Ketu balance",
    ],
    acousticFidelity: true,
  },
  {
    id: "aatma-raksha",
    title: "Aatma Raksha Mantra",
    titleHindi: "आत्म रक्षा मंत्र",
    description:
      "A focused incantation for personal spiritual protection, shielding the practitioner from negative energies and psychic disturbances.",
    category: "protection",
    youtubeId: "OByIKmmo5tA",
    duration: "9:18",
    requiredRepetitions: 27,
    prescribedFor: [
      "Personal protection",
      "Spiritual shielding",
      "Negative energy removal",
      "Inner peace",
    ],
    acousticFidelity: true,
  },
  {
    id: "padmavati-batisa",
    title: "Padmavati Batisa & Ganga Mantra",
    titleHindi: "पद्मावती बत्तीसा एवं गंगा मंत्र",
    description:
      "Dedicated to Goddess Padmavati and the sacred Ganga. Prescribed for resolving Vastu Dosh (architectural energy imbalances) and Pitra Dosh (ancestral karmic debts) through 27 repetition cycles.",
    category: "prosperity",
    youtubeId: "GloCIkJpFL8",
    duration: "18:45",
    requiredRepetitions: 27,
    prescribedFor: [
      "Vastu Dosh remedy",
      "Pitra Dosh resolution",
      "Goddess Padmavati blessings",
      "Home purification",
    ],
    acousticFidelity: true,
  },
];

export const mantraCategoryLabels: Record<string, string> = {
  health: "Health & Healing",
  "obstacle-removal": "Obstacle Removal",
  planetary: "Planetary Remedies",
  protection: "Spiritual Protection",
  prosperity: "Prosperity & Blessings",
  devotional: "Devotional",
};
