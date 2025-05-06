"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Heart, Award, Users, Shield } from "lucide-react";

const stats = [
  { icon: <Heart className="h-6 w-6" />, label: "Years of Excellence", value: "10+" },
  { icon: <Users className="h-6 w-6" />, label: "Patients Treated", value: "50,000+" },
  { icon: <Award className="h-6 w-6" />, label: "Specialists", value: "100+" },
  { icon: <Shield className="h-6 w-6" />, label: "Success Rate", value: "99%" },
];

const features = [
  {
    title: "Our Mission",
    description: "To provide accessible, high-quality healthcare services that improve the well-being of our community through advanced medical technology and compassionate care.",
  },
  {
    title: "Our Vision",
    description: "To be the leading healthcare provider in Nigeria, setting new standards in medical excellence and patient care while making healthcare accessible to all.",
  },
  {
    title: "Our Values",
    description: "We are committed to integrity, excellence, compassion, and innovation in all aspects of our healthcare delivery.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="ultramed-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#08354d] mb-6">
              About UltraMed Healthcare
            </h1>
            <p className="text-lg text-gray-600">
              Your trusted partner in healthcare excellence, providing comprehensive medical services with a focus on quality, accessibility, and patient-centered care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="ultramed-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#08354d] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="ultramed-container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#08354d] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="ultramed-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#08354d] mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-[#08354d] mb-2">Location</h3>
                <p className="text-gray-600">No 57, 4th Avenue, Gwarinpa Estate, Abuja</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-[#08354d] mb-2">Phone</h3>
                <p className="text-gray-600">09090099775</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-[#08354d] mb-2">Email</h3>
                <p className="text-gray-600">info@ultramed.com</p>
              </div>
            </div>
            {/* Embedded Google Map */}
            <div id="map" className="rounded-xl overflow-hidden shadow-lg mb-8 border border-gray-200 scroll-mt-40">
              <iframe
                title="UltraMed Hospital Location"
                src="https://www.google.com/maps?q=No+57+4th+Avenue+Gwarinpa+Estate+Abuja+Nigeria&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=No+57+4th+Avenue+Gwarinpa+Estate+Abuja+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-primary/90 transition text-lg"
            >
              Directions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 