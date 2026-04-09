"use client";

import { useState, useMemo } from "react";
import { publications } from "@/data/publications";
import PublicationCard from "@/components/publication-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, SortDesc, Calendar } from "lucide-react";

const Publications = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"year" | "type" | "recent">("recent");

  // Get unique types and years for filters
  const uniqueTypes = useMemo(() => {
    const types = Array.from(new Set(publications.map(pub => pub.type)));
    return types.sort();
  }, []);

  const uniqueYears = useMemo(() => {
    const years = Array.from(new Set(publications.map(pub => pub.year)));
    return years.sort((a, b) => b - a);
  }, []);

  // Filter and sort publications
  const filteredPublications = useMemo(() => {
    let filtered = [...publications];

    // Apply type filter
    if (selectedType !== "all") {
      filtered = filtered.filter(pub => pub.type === selectedType);
    }

    // Apply year filter
    if (selectedYear !== "all") {
      filtered = filtered.filter(pub => pub.year === parseInt(selectedYear));
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "year":
          return b.year - a.year;
        case "type":
          return a.type.localeCompare(b.type);
        case "recent":
        default:
          // Sort by featured first, then by year descending
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.year - a.year;
      }
    });

    return filtered;
  }, [selectedType, selectedYear, sortBy]);

  return (
    <section id="publications" className="px-6 sm:px-8 lg:px-10 pt-10 pb-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Simplified Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-3">
            Publications
          </h2>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-10">
          {/* Type Filter */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("all")}
              className="text-xs"
            >
              All ({publications.length})
            </Button>
            {uniqueTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
                className="text-xs capitalize"
              >
                {type} ({publications.filter(p => p.type === type).length})
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* Year Filter */}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-slate-600" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="text-sm border border-slate-200 rounded-md px-3 py-1 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Years</option>
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year} ({publications.filter(p => p.year === year).length})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <SortDesc className="h-4 w-4 text-slate-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-sm border border-slate-200 rounded-md px-3 py-1 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="recent">Recent First</option>
                <option value="year">Year</option>
                <option value="type">Type</option>
              </select>
            </div>
          </div>
        </div>

        {/* Publications Grid */}
        {filteredPublications.length > 0 ? (
          <div className="grid gap-6">
            {filteredPublications.map((publication, index) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                featured={publication.featured}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No publications found matching the current filters.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSelectedType("all");
                setSelectedYear("all");
                setSortBy("recent");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Publications;
