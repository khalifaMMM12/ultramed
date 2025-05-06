import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";

export function AnnouncementsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="ultramed-container">
        <h2 className="text-2xl font-bold text-[#08354d] mb-8">Announcements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Announcement */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Friend gives the gift of life as a living liver donor
              </h3>
              <Link href="/stories/liver-donor">
                <Button variant="outline" className="flex items-center gap-2">
                  <Play className="h-4 w-4 text-primary" />
                  Watch Video
                </Button>
              </Link>
            </div>
          </div>

          {/* Second Announcement */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Updated Visitor and Mask Policy at UltraMed Hospital
              </h3>
              <p className="text-gray-600 mb-4">May 4, 2025</p>
              <Link href="/policies/visitor-policy">
                <Button variant="outline" className="flex items-center gap-2">
                  Learn More
                  <ChevronRight className="h-4 w-4 text-primary" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
