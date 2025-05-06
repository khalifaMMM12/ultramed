"use client";

import { motion } from "framer-motion";
import { HeartPulse, Baby, Brain, Bone } from "lucide-react";

const departments = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    subtitle: "Keeping Your Heart Strong",
    description: "Our Cardiology Department provides advanced diagnostic and treatment options for heart conditions.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    subtitle: "Caring for Your Little Ones",
    description: "The health of your child is our priority. Our Pediatric Department offers comprehensive medical care for infants, children, and adolescents, providing expert guidance for all stages of growth and development.",
  },
  {
    icon: Brain,
    title: "Neurology",
    subtitle: "Expert Care for the Brain & Nervous System",
    description: "For disorders of the brain, spine, and nervous system, trust our Neurology Department. Our specialists are equipped with the latest technology and knowledge to diagnose, treat, and manage neurological conditions with precision and care.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    subtitle: "Precision Treatment for Bone & Joint Health",
    description: "Whether it's a sports injury or a chronic joint condition, our Orthopedic Department specializes in providing targeted treatment for bone, muscle, and joint issues, ensuring you get back to doing the things you love.",
  },
];

export default function DepartmentsPage() {
  return (
    <section className="py-16 bg-white min-h-[80vh]">
      <div className="ultramed-container">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#08354d] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Top Departments Offering Specialized Care
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Choose from our expert departments, staffed by top specialists in their fields.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {departments.map((dept, idx) => (
            <motion.div
              key={dept.title}
              className="rounded-xl p-8 shadow-md bg-[#f4f9f9] flex items-start gap-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <dept.icon className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-primary mb-1">{dept.subtitle}</h2>
                <h3 className="text-2xl font-bold text-[#08354d] mb-2">{dept.title}</h3>
                <p className="text-gray-700 text-base">{dept.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 