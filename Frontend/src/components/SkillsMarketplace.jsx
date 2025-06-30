import React, { useEffect, useState } from "react";
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  ChevronDown,
  MapPin,
} from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "Design",
  "Marketing",
  "Data Science",
  "Mobile Development",
  "Writing",
];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const SkillsMarketplace = () => {
  const [skills, setSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/skills`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Optionally filter by category/level if backend supports it
  const filteredSkills = skills.filter((skill) => {
    const categoryMatch =
      selectedCategory === "All" || skill.category === selectedCategory;
    // If you add level to backend, filter here as well
    return categoryMatch;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through thousands of skills taught by experts from around the
            world. Find your perfect learning match today.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search skills, topics, or teachers..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-6 bg-white rounded-xl border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 text-sm rounded-full transition-colors ${
                          selectedCategory === category
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Level
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-4 py-2 text-sm rounded-full transition-colors ${
                          selectedLevel === level
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Skills Grid */}
        {loading ? (
          <div className="text-center py-10">Loading skills...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill) => (
              <div
                key={skill._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Image (placeholder) */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      "https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&w=400"
                    }
                    alt={skill.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                      {skill.category || "General"}
                    </span>
                  </div>
                  {/* Level placeholder */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                      {skill.level || "All Levels"}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {skill.name}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {skill.description || "No description provided."}
                  </p>
                  {/* Teacher Info placeholder */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      ?
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Unknown Teacher
                      </p>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-500">-</span>
                      </div>
                    </div>
                  </div>
                  {/* Tags placeholder */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {/* No tags from backend yet */}
                  </div>
                  {/* Stats placeholder */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>-</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>-</span>
                      </div>
                    </div>
                  </div>
                  {/* Location placeholder */}
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>-</span>
                  </div>
                  {/* Price and Action placeholder */}
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-indigo-600">-</div>
                    <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                      Learn Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors font-medium">
            Load More Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarketplace;
