import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  ThumbsUp,
  Eye,
  Clock,
  User,
  Search,
  Filter,
  Plus,
} from "lucide-react";

const categories = [
  "All",
  "Teaching Tips",
  "Course Structure",
  "Student Engagement",
  "Skill Exchange",
  "Tools & Resources",
];

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/community/posts`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setDiscussions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter by category and search
  const filteredDiscussions = discussions.filter((discussion) => {
    const categoryMatch =
      selectedCategory === "All" || discussion.category === selectedCategory;
    const searchMatch =
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.author.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Community Forum
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow teachers and learners. Share experiences, ask
            questions, and get advice from our vibrant community.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* New Discussion Button */}
            <button className="w-full mb-6 inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium">
              <Plus className="w-4 h-4 mr-2" />
              New Discussion
            </button>

            {/* Categories */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Community Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Discussions</span>
                  <span className="font-medium">2,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-medium">8,923</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Answered Questions</span>
                  <span className="font-medium">1,834</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              <button className="inline-flex items-center px-4 py-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-10">Loading discussions...</div>
              ) : error ? (
                <div className="text-center text-red-500 py-10">{error}</div>
              ) : filteredDiscussions.length === 0 ? (
                <div className="text-center py-10">No discussions found.</div>
              ) : (
                filteredDiscussions.map((discussion) => (
                  <div
                    key={discussion._id}
                    className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                        {discussion.avatar || "?"}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title and Category */}
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          {discussion.isAnswered && (
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex-shrink-0">
                              Answered
                            </span>
                          )}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span>{discussion.author}</span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                            {discussion.category}
                          </span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{discussion.timeAgo}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {discussion.tags &&
                            discussion.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md"
                              >
                                #{tag}
                              </span>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{discussion.likes} likes</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{discussion.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  Previous
                </button>
                <button className="px-3 py-2 bg-indigo-600 text-white rounded-md">
                  1
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  2
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  3
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
