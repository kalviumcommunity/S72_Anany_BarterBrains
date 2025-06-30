import React, { useEffect, useState } from "react";
import { Trophy, Target, Zap, Award, Users, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "First Teacher",
    description: "Taught your first skill",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Goal Setter",
    description: "Completed 5 learning goals",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Finished a course in record time",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Users,
    title: "Community Builder",
    description: "Helped 10+ learners",
    color: "from-purple-400 to-pink-500",
  },
];

const Gamification = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/gamification/leaderboard`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch leaderboard");
        return res.json();
      })
      .then((data) => {
        setLeaderboard(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Level Up Your Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Earn points, unlock achievements, and climb the leaderboard as you
            teach and learn new skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Stats */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Level 12</h3>
                <p className="text-indigo-100 mb-4">Skill Explorer</p>
                <div className="bg-white/20 rounded-full h-2 mb-2">
                  <div className="bg-white rounded-full h-2 w-3/4"></div>
                </div>
                <p className="text-sm text-indigo-100">
                  750/1000 XP to Level 13
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">1,250</div>
                <div className="text-sm text-gray-500">Total Points</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="text-sm text-gray-500">Skills Learned</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-sm text-gray-500">Skills Taught</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">156</div>
                <div className="text-sm text-gray-500">Students Helped</div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Recent Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {achievement.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-indigo-600">
                        +50 XP
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress Challenges */}
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
              <h4 className="font-semibold text-gray-900 mb-3">
                This Week's Challenge
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Complete 3 skill exchanges to earn bonus points!
              </p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium text-emerald-600">
                  2/3
                </span>
              </div>
              <div className="bg-white rounded-full h-2">
                <div className="bg-emerald-500 rounded-full h-2 w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Leaderboard
              </h3>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4" />
                <span>This Month</span>
              </div>
            </div>
            <div className="space-y-3">
              {loading ? (
                <div className="text-center py-10">Loading leaderboard...</div>
              ) : error ? (
                <div className="text-center text-red-500 py-10">{error}</div>
              ) : leaderboard.length === 0 ? (
                <div className="text-center py-10">No leaderboard data.</div>
              ) : (
                leaderboard.map((user, index) => (
                  <div
                    key={user._id}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-colors ${
                      index < 3
                        ? "bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200"
                        : "bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0
                          ? "bg-yellow-400 text-yellow-900"
                          : index === 1
                          ? "bg-gray-300 text-gray-700"
                          : index === 2
                          ? "bg-orange-400 text-orange-900"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.avatar || "?"}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">
                        {user.skills} skills taught
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {user.points?.toLocaleString?.() ?? user.points}
                      </p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-6 text-center">
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                View Full Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;
