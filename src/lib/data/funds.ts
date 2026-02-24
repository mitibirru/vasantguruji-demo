import { DonationFund } from "../types";

export const donationFunds: DonationFund[] = [
  {
    id: "mandir-nirman",
    name: "Shri Mandir Nirman",
    nameHindi: "श्री मंदिर निर्माण",
    description:
      "Support the architectural construction and expansion of temple infrastructure at the Krishnagiri Dham — designed to accommodate the growing global community and preserve the spiritual legacy of Jainism and Sanatan Dharma for future generations.",
    targetAmount: 100000000,
    raisedAmount: 67450000,
    currency: "INR",
    icon: "building",
    requiresKYC: true,
  },
  {
    id: "akhand-jyoti",
    name: "Akhand Jyoti Prajjvalan",
    nameHindi: "अखण्ड ज्योति प्रज्ज्वलन",
    description:
      "Support the uninterrupted, eternal burning of the sacred Akhand Jyoti flame — a continuous beacon of divine light symbolizing the perpetual presence of spiritual wisdom and cosmic energy.",
    targetAmount: 100000,
    raisedAmount: 78500,
    currency: "INR",
    icon: "flame",
    requiresKYC: false,
  },
  {
    id: "ann-prasadam",
    name: "Shri Ann Prasadam & Anna Dhan",
    nameHindi: "श्री अन्न प्रसादम एवं अन्न दान",
    description:
      "Ensure the continuous distribution of sanctified food (Prasadam) to devotees and the underprivileged. Every contribution sustains the Bhojanshala at Krishnagiri Dham, which serves traditional Jain meals to thousands daily.",
    targetAmount: 100000,
    raisedAmount: 91200,
    currency: "INR",
    icon: "utensils",
    requiresKYC: false,
  },
  {
    id: "medical-welfare",
    name: "Medical & Social Welfare",
    nameHindi: "चिकित्सा एवं समाज कल्याण",
    description:
      "Fund Mediclaim insurance policies and ration distribution reaching millions annually. Your contribution directly supports healthcare access and nutritional security for underserved communities across India.",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    currency: "INR",
    icon: "heart-pulse",
    requiresKYC: false,
  },
];
