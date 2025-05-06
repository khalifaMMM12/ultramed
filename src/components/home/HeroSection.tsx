"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, Shield, Clock } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Heart,
    title: "Expert Care",
    description: "Access to top medical professionals",
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "State-of-the-art medical facilities",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock medical assistance",
  },
];

export function HeroSection() {
  // Parallax effect for the background image
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const element = document.querySelector(".parallax-bg") as HTMLElement;
      if (element) {
        element.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[110vh] md:min-h-[90vh] flex items-center overflow-hidden bg-[#f4f9f9] mb-12">
      {/* Background with parallax effect */}
      <div 
        className="parallax-bg absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="ultramed-container relative z-10 pb-16 md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 pt-20 md:pt-0"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-[#08354d] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Health,<br />
              <span className="text-primary">Our Priority</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience world-class healthcare with UltraMed. Our team of expert 
              medical professionals is dedicated to providing you with the highest 
              quality care and support.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/schedule-care">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
                >
                  Schedule Care
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about-us#map">
                    <Button
                  size="lg"
                      variant="outline"
                  className="rounded-full px-8"
                    >
                  Find Location
                  <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#08354d] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                </div>
              </div>
                </motion.div>
              ))}
          </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div className="absolute -z-10 bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-48 h-48 bg-[#08354d]/5 rounded-full blur-2xl" />
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
