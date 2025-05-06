"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Ultra Silver Package",
    price: "₦76,000",
    frequency: "One time",
    features: [
      "Consultation - Risk Assessment/History",
      "Complete Blood Count",
      "Fasting Blood Sugar",
      "Urinalysis, Urine MCS, Stool MCS",
      "ECG & Chest X-ray",
      "Cervical Smear (Ladies)/PSA (Men)",
      "Clinical Breast Examination",
    ],
    highlight: false,
  },
  {
    name: "Ultra Gold Package",
    price: "₦126,000",
    frequency: "One time",
    features: [
      "All Silver Package features",
      "Stool Occult Blood",
      "Spirometry",
      "Bone Profile - Mg, Ca",
      "Thyroid Function Test - TSH, T3, T4",
      "Breast Ultrasound Scan",
    ],
    highlight: true,
  },
  {
    name: "Ultra Platinum Package",
    price: "₦250,000",
    frequency: "One time",
    features: [
      "All Silver & Gold Package features",
      "Tonometry",
      "Physician Review",
    ],
    highlight: false,
  },
];

export default function PackagesPage() {
  return (
    <section className="py-16 bg-white min-h-[80vh]">
      <div className="ultramed-container">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#08354d] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Transparent Healthcare Costs
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Affordable Health Packages for You and Your Family. We offer clear, competitive pricing for our medical services and packages. Compare our packages below and choose the one that best fits your needs.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              className={`rounded-2xl p-8 shadow-lg bg-[#f4f9f9] flex flex-col items-center border-2 transition-all ${pkg.highlight ? 'border-primary scale-105 bg-white' : 'border-gray-200'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <h2 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-primary' : 'text-[#08354d]'}`}>{pkg.name}</h2>
              <div className="text-3xl font-extrabold mb-1">{pkg.price}</div>
              <div className="text-sm text-gray-500 mb-4">{pkg.frequency}</div>
              <ul className="text-gray-700 text-left mb-6 space-y-2 w-full max-w-xs">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              {pkg.highlight && (
                <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-semibold mb-2">Most Popular</div>
              )}
              <button className="mt-auto bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition">Choose Package</button>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-gray-500 text-sm">Need help choosing a package? <a href="/services" className="text-primary underline">Contact our team</a>.</span>
        </motion.div>
      </div>
    </section>
  );
} 