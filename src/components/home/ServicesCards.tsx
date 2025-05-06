"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Stethoscope, FlaskConical, Scissors } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Our expert physicians offer comprehensive health check-ups, preventive care, and treatments for all ages. Whether it's managing chronic conditions or addressing everyday health concerns.",
  },
  {
    icon: Scissors,
    title: "Specialized Surgery",
    description:
      "Receive top-tier surgical care from our team of experienced surgeons. From minimally invasive procedures to complex surgeries, our specialists deliver safe, effective solutions to ensure the best possible outcomes.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Diagnostics & Laboratory Services",
    description:
      "Accurate diagnosis is the foundation of effective treatment. Our state-of-the-art diagnostic facilities and laboratory services provide fast, reliable results so you can get the care you need without delay.",
  },
  {
    icon: Baby,
    title: "Maternity & Childbirth Care",
    description:
      "Your journey to motherhood deserves the best care. From prenatal check-ups to postnatal support, our maternity services offer compassionate, expert care for both mother and baby, ensuring a healthy, safe delivery.",
  },
];

export function ServicesCards() {
  return (
    <>
      <section className="pt-6 pb-16 md:pt-16 bg-white -mt-8">
      <div className="ultramed-container">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#08354d] mb-4">Our Comprehensive Medical Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of medical services tailored to meet your healthcare needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-0 bg-[#f4f9f9]"
              >
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                  <service.icon className="h-10 w-10 text-primary" />
              </div>
                <div>
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-2xl font-bold text-[#08354d] mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-gray-700 text-base">
                      {service.description}
                </CardDescription>
                  </CardContent>
            </div>
          </Card>
            ))}
            </div>
        </div>
      </section>
      {/* Approved by section */}
      <section className="py-8 bg-[#f4f9f9]">
        <div className="ultramed-container">
          <div className="mb-4 text-center">
            <span className="uppercase tracking-wider text-primary font-semibold text-sm">Approved by</span>
        </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Upload your images to public/approved/org1.png, org2.png, org3.png, org4.png, org5.png */}
            <img src="/approved/org1.png" alt="Approving Organization 1" className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded-lg shadow p-2" />
            <img src="/approved/org2.png" alt="Approving Organization 2" className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded-lg shadow p-2" />
            <img src="/approved/org3.png" alt="Approving Organization 3" className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded-lg shadow p-2" />
            <img src="/approved/org4.png" alt="Approving Organization 4" className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded-lg shadow p-2" />
            <img src="/approved/org5.png" alt="Approving Organization 5" className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 bg-white rounded-lg shadow p-2" />
      </div>
    </div>
      </section>
    </>
  );
}
