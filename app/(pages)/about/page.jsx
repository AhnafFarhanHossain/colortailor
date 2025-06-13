"use client";

import { Sparkles, Palette, Heart, Users, Target, Zap } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-rose-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-red-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.9))] -z-10 opacity-20"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>

      <main className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-16">
            {/* Icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl">
                <Heart className="w-12 h-12 text-white" />
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-red-800 bg-clip-text text-transparent">
                About{" "}
              </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  ColorTailor
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Empowering creators, designers, and dreamers with AI-powered color magic
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our <span className="text-red-600">Mission</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At ColorTailor, we believe that every creative vision deserves the perfect palette. 
                  Our AI-powered platform transforms simple keywords into stunning color combinations, 
                  making professional color theory accessible to everyone.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're a seasoned designer, a budding artist, or someone who simply loves 
                  beautiful colors, ColorTailor is here to inspire and elevate your creative journey.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">10K+</div>
                  <div className="text-sm text-gray-600">Palettes Generated</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Happy Users</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-red-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Color Magic in Action
                </h3>
                <div className="space-y-4">
                  {/* Example palettes */}
                  <div className="flex rounded-2xl overflow-hidden shadow-lg">
                    <div className="flex-1 h-16 bg-gradient-to-r from-orange-400 to-red-500"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-red-500 to-pink-500"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                  </div>
                  <div className="text-center text-sm text-gray-600 font-mono">"Sunset Dreams"</div>
                  
                  <div className="flex rounded-2xl overflow-hidden shadow-lg">
                    <div className="flex-1 h-16 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-cyan-500 to-blue-400"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                    <div className="flex-1 h-16 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                  </div>
                  <div className="text-center text-sm text-gray-600 font-mono">"Ocean Breeze"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">ColorTailor</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our platform the go-to choice for color enthusiasts worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI understands color theory, mood, and context to generate palettes that truly resonate with your vision.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Get professional-quality color palettes in seconds. No more hours spent tweaking colors manually.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Designer-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Export in multiple formats, copy hex codes instantly, and integrate seamlessly into your workflow.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unlimited Creativity</h3>
              <p className="text-gray-600 leading-relaxed">
                From "bold" to "serene", from "vintage" to "futuristic" - every keyword unlocks new possibilities.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free to Use</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful color palettes shouldn't cost a fortune. Our core features are completely free.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Always Improving</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously update our AI models and add new features based on user feedback and industry trends.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Magic?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who trust ColorTailor for their color palette needs
            </p>
            <a 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-xl hover:bg-gray-50 transition-colors duration-300 font-semibold text-lg shadow-lg"
            >
              <Palette className="w-6 h-6 mr-3" />
              Start Creating Now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
