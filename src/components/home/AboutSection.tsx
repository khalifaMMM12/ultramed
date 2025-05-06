import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#f4f9f9] to-white">
      <div className="ultramed-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=700&q=80"
              alt="Doctor with patient"
              className="rounded-lg h-64 object-cover w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=700&q=80"
              alt="Hospital building"
              className="rounded-lg h-64 object-cover w-full mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=700&q=80"
              alt="Medical research"
              className="rounded-lg h-64 object-cover w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1571772996211-2f02974a9f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=700&q=80"
              alt="Healthcare professional"
              className="rounded-lg h-64 object-cover w-full mt-8"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#08354d] mb-6">
              UltraMed combines the best of head and heart.
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With UltraMed, you have access to compassionate clinical care in our
              hospitals and clinics, leading-edge research through our renowned medical
              professionals, and a comprehensive network that allows you to get care closer to home.
              Wherever you are, we are here to reimagine what's possible as a partner in your health.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As Abuja's premier healthcare provider, we are committed to the health and wellness of our
              patients and communities. Our proactive focus on healthy-based, personalized care reflects our
              belief that our purpose is bigger than healthcare; we change the course of people's lives.
            </p>
            <Link href="/care-services/locations">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Find a Location
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
