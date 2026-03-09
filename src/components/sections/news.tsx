import { news } from "@/data/news";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";

const News = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getNewsTypeVariant = (type: string) => {
    switch (type) {
      case 'news':
        return 'default';
      case 'update':
        return 'secondary';
      case 'award':
        return 'success';
      case 'talk':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getNewsTypeLabel = (type: string) => {
    switch (type) {
      case 'news':
        return 'News';
      case 'update':
        return 'Update';
      case 'award':
        return 'Award';
      case 'talk':
        return 'Talk';
      default:
        return type;
    }
  };

  return (
    <section id="news" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4">
            News & Updates
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Latest announcements, research milestones, and project updates
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {news.map((item, index) => (
            <Card
              key={item.id}
              className={`
                p-6 hover:shadow-md transition-all duration-300 border-slate-200
                ${index === 0 ? 'ring-2 ring-indigo-100 bg-indigo-50/30' : 'bg-white'}
              `}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant={getNewsTypeVariant(item.type)} className="text-xs">
                      {getNewsTypeLabel(item.type)}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      {formatDate(item.date)}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.content}
                  </p>

                  {item.url && (
                    <Button variant="outline" size="sm" asChild className="w-fit">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs"
                      >
                        Learn More
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>

                {index === 0 && (
                  <div className="hidden sm:block">
                    <div className="bg-indigo-100 text-indigo-500 px-3 py-1 rounded-full text-xs font-medium">
                      Latest
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <Button variant="ghost" size="lg">
            View All News
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;