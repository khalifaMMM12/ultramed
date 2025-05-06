"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const doctorTypes = [
  "General Practitioner",
  "Cardiologist",
  "Pediatrician",
  "Neurologist",
  "Orthopedic Surgeon",
  "Gynecologist",
  "Other",
];

export default function ScheduleCarePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    purpose: "",
    doctor: "",
    notes: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or API
  }

  return (
    <section className="py-16 bg-white min-h-[80vh]">
      <div className="ultramed-container max-w-xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#08354d] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Schedule Care
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Book an appointment online and let us know how we can help you. Fill out the form below and our team will get in touch to confirm your visit.
        </motion.p>
        {submitted ? (
          <motion.div
            className="bg-primary/10 border border-primary rounded-xl p-8 text-center text-primary font-semibold text-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for scheduling your care! We will contact you soon to confirm your appointment.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#f4f9f9] rounded-xl shadow-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#08354d]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#08354d]">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#08354d]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#08354d]">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#08354d]">Time</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#08354d]">Type of Doctor/Specialist</label>
                <select
                  name="doctor"
                  value={form.doctor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="">Select...</option>
                  {doctorTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#08354d]">Purpose of Visit</label>
              <textarea
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Describe the reason for your visit..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#08354d]">Additional Notes (Optional)</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Any other information you'd like us to know?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full font-semibold text-lg shadow hover:bg-primary/90 transition"
            >
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </section>
  );
} 