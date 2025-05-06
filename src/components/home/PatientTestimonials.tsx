"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aisha B.",
    avatar: "/avatars/aisha.jpg", // Place this image in public/avatars/aisha.jpg or use a placeholder
    quote:
      "UltraMed provided exceptional care during my surgery. The doctors and nurses were compassionate and attentive every step of the way.",
  },
  {
    name: "John D.",
    avatar: "/avatars/john.jpg", // Place this image in public/avatars/john.jpg or use a placeholder
    quote:
      "From booking my appointment to follow-up, the process was seamless. I felt truly cared for and listened to.",
  },
  {
    name: "Ngozi E.",
    avatar: "/avatars/ngozi.jpg", // Place this image in public/avatars/ngozi.jpg or use a placeholder
    quote:
      "The pediatric team at UltraMed made my child feel comfortable and safe. I highly recommend their services to any parent!",
  },
];

export function PatientTestimonials() {
  return (
    <section className="py-16 bg-[#f4f9f9]">
      <div className="ultramed-container">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#08354d] mb-4">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from patients who trusted UltraMed with their care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <blockquote className="italic text-gray-700 mb-4">“{t.quote}”</blockquote>
              <div className="font-semibold text-primary text-lg">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 