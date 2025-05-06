import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-16">
      <div className="text-center max-w-md mx-auto p-6">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
