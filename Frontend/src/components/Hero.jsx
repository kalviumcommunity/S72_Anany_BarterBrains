import React from "react";
import { ArrowRight, Sparkles, Users, BookOpen, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100 opacity-25"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Join 50,000+ skill exchangers worldwide
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Trade Skills,
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Not Money
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Connect with learners and teachers globally. Exchange your
              expertise for new skills in our thriving peer-to-peer education
              community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors font-medium">
                Teach a Skill
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-500">Skills Exchanged</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 w-72 h-40 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6 transform rotate-3">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Web Development
                    </p>
                    <p className="text-sm text-gray-500">Sarah M. • 4.9★</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Teaching React, Node.js, and modern web development practices
                </p>
              </div>

              <div className="absolute top-20 right-0 w-72 h-40 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6 transform -rotate-2">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Digital Marketing
                    </p>
                    <p className="text-sm text-gray-500">Mike R. • 4.8★</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  SEO, social media strategy, and content marketing expertise
                </p>
              </div>

              <div className="absolute bottom-0 left-8 w-72 h-40 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6 transform rotate-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Data Science</p>
                    <p className="text-sm text-gray-500">Lisa K. • 5.0★</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Python, machine learning, and statistical analysis
                </p>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
