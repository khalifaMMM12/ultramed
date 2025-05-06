"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Stethoscope, HeartPulse, Syringe, UserCheck } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Comprehensive Check-ups",
    description: "Routine and preventive health screenings for all ages, ensuring you stay ahead of potential health issues.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    description: "Personalized care plans for diabetes, hypertension, and other chronic conditions, with ongoing support.",
  },
  {
    icon: Syringe,
    title: "Vaccinations & Immunizations",
    description: "Protect yourself and your family with our full range of recommended vaccines and immunizations.",
  },
  {
    icon: UserCheck,
    title: "Specialist Referrals",
    description: "Access to a network of top specialists for advanced care when you need it most.",
  },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="py-16 bg-white min-h-[80vh]">
      <div className="ultramed-container">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#08354d] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Explore Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className={`rounded-xl p-8 shadow-md bg-[#f4f9f9] flex items-start gap-6 cursor-pointer transition-all border-2 ${selected === idx ? 'border-primary scale-105' : 'border-transparent'}`}
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelected(idx)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <service.icon className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-[#08354d] mb-2">{service.title}</h2>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Interactive element: Details panel */}
        <motion.div
          className="max-w-2xl mx-auto bg-primary/10 rounded-xl p-8 text-center shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-primary mb-2">{services[selected].title}</h3>
          <p className="text-gray-700 mb-4">{services[selected].description}</p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 