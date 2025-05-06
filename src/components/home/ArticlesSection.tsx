import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "6 Ways to Help Children After a Hurricane",
    category: "MENTAL HEALTH",
    description: "Storms cause a lot of big emotions, for you and your kids.",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    link: "/health-talk/help-children-after-hurricane",
  },
  {
    id: 2,
    title: "6 Tips for Coping with Traumatic Events",
    category: "MENTAL HEALTH",
    description: "Learn effective strategies to manage stress during difficult times.",
    imageUrl: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    link: "/health-talk/coping-with-traumatic-events",
  },
  {
    id: 3,
    title: "How to Prevent and Treat Mosquito Bites",
    category: "HEALTH & WELLNESS",
    description: "Protect yourself and your family from mosquito-borne illnesses.",
    imageUrl: "https://images.unsplash.com/photo-1564507004663-fd97bbb00d83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    link: "/health-talk/prevent-treat-mosquito-bites",
  },
];

export function ArticlesSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="ultramed-container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Live well, your way.</h2>
          <p className="text-white/80">
            Popular articles, events and classes curated with your wellness in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-white text-gray-800 overflow-hidden flex flex-col h-full border-none"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardDescription className="text-primary font-semibold text-xs tracking-wide">
                  {article.category}
                </CardDescription>
                <CardTitle className="text-lg font-bold">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-600 text-sm">{article.description}</p>
              </CardContent>
              <CardFooter className="mt-auto pt-0">
                <Link href={article.link}>
                  <Button variant="link" className="text-primary p-0 h-auto flex items-center">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/health-talk">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              View All UltraMed Health Talk Articles
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
