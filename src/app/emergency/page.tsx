"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PhoneCall, AlertTriangle } from "lucide-react";

export default function EmergencyPage() {
  const [showPulse, setShowPulse] = useState(false);

  return (
    <section className="py-16 bg-white min-h-[80vh] flex items-center justify-center">
      <div className="ultramed-container max-w-2xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#08354d] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Emergency Services
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          In a medical emergency, every second counts. Our dedicated emergency team is available 24/7 to provide immediate care and support. If you or a loved one needs urgent medical attention, don't hesitate to contact us right away.
        </motion.p>
        <div className="flex flex-col items-center gap-8">
          {/* Wow factor: Animated alert pulse */}
          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.2, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{ zIndex: 0 }}
            >
              <div className="w-32 h-32 rounded-full bg-red-500/20" />
            </motion.div>
            <motion.button
              className="relative z-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-8 py-5 rounded-full shadow-lg transition focus:outline-none focus:ring-4 focus:ring-red-300"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowPulse(true);
                window.location.href = 'tel:09090099775';
              }}
            >
              <PhoneCall className="h-7 w-7 animate-pulse" />
              Contact Ambulance
            </motion.button>
          </div>
          <AnimatePresence>
            {showPulse && (
              <motion.div
                className="mt-4 flex items-center justify-center gap-2 text-red-600 font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <AlertTriangle className="h-5 w-5 animate-bounce" />
                Calling ambulance now...
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 