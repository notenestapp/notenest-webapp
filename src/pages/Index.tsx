import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Sparkles, BookOpen, Trophy, Users, ArrowRight, Download, CheckCircle2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Index() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-900 font-sans selection:bg-notenest-green selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 px-8 md:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-notenest-yellow/10 rounded-b-[4rem] -z-10 transform -skew-y-2 origin-top-left"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-bounce">
              <Sparkles className="w-5 h-5 text-notenest-yellow" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-200">NoteNest 2.0 is here!</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight">
              Making learning <span className="text-notenest-green relative inline-block">
                fun.
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-notenest-yellow opacity-70" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-medium">
              Turn your notes and PDFs into a structured, interactive learning journey. Upload your material, and let NoteNest do the organizational work.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://console.mynotenest.app" 
                className="bg-notenest-blue text-white font-bold text-base md:text-lg py-3 px-8 md:py-4 md:px-10 rounded-full shadow-[0_6px_0_rgb(29,78,216)] hover:shadow-[0_2px_0_rgb(29,78,216)] hover:translate-y-[4px] transition-all w-full sm:w-auto text-center"
              >
                Start Your Journey
              </a>
              <a 
                href="#download" 
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 font-bold text-lg py-4 px-10 rounded-full shadow-[0_6px_0_rgb(229,231,235)] dark:shadow-[0_6px_0_rgb(55,65,81)] hover:shadow-[0_2px_0_rgb(229,231,235)] dark:hover:shadow-[0_2px_0_rgb(55,65,81)] hover:translate-y-[4px] transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" /> Get the App
              </a>
            </div>
          </div>

          {/* Floating UI Elements Decor */}
          <div className="hidden md:block absolute top-40 left-10 w-32 h-32 bg-notenest-green/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="hidden md:block absolute bottom-20 right-10 w-40 h-40 bg-notenest-blue/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </section>

        {/* Product Loop Roadmap */}
        <section className="py-24 px-8 md:px-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">How it works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">From passive reading to active mastering.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-notenest-green hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-notenest-green/10 dark:bg-notenest-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-black text-notenest-green">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Upload & Structure</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Upload an entire course PDF or lecture notes. NoteNest automatically creates Sections, Learning Items, and Tests.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-notenest-blue hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-notenest-blue/10 dark:bg-notenest-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-black text-notenest-blue">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Learn & Practice</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Follow a visual roadmap. Read simplified explanations and immediately practice what you've learned. Confused? Ask the Contextual AI Tutor.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-notenest-yellow hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-notenest-yellow/10 dark:bg-notenest-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-black text-notenest-yellow">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Test & Progress</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Take Section Tests and Full Exams. Watch your progress bar fill up as you master the material step by step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gamification Section */}
        <section className="py-24 px-8 md:px-12 bg-notenest-blue text-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Level up your brain.
              </h2>
              <p className="text-xl text-blue-100 mb-8 font-medium">
                Studying doesn't have to be boring. Earn XP, maintain your daily learning streak, and climb the leaderboard.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  { icon: <Trophy className="text-notenest-yellow w-6 h-6" />, text: "Earn XP for meaningful learning activities" },
                  { icon: <CheckCircle2 className="text-notenest-green w-6 h-6" />, text: "Build powerful daily learning Streaks" },
                  { icon: <Users className="text-white w-6 h-6" />, text: "Compete on the Weekly Study Leaderboard" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm transform hover:scale-105 transition-transform cursor-default">
                    {item.icon}
                    <span className="font-bold text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 relative">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 mb-4">
                  <h3 className="text-gray-900 dark:text-white font-bold text-xl">Weekly Leaderboard</h3>
                  <span className="bg-notenest-yellow text-white text-xs font-bold px-2 py-1 rounded-md">LIVE</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "Student A", xp: "1,240 XP", color: "text-notenest-yellow" },
                    { rank: 2, name: "Student B", xp: "1,180 XP", color: "text-gray-400" },
                    { rank: 3, name: "Student C", xp: "1,050 XP", color: "text-amber-600 dark:text-amber-500" },
                  ].map((player, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className={`font-black text-xl ${player.color}`}>#{player.rank}</span>
                        <span className="font-bold text-gray-800 dark:text-gray-200">{player.name}</span>
                      </div>
                      <span className="font-bold text-notenest-blue dark:text-blue-400">{player.xp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social / Challenge Section */}
        <section className="py-24 px-8 md:px-12 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Study with Friends</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto mb-16">
              Create Study Circles to discuss concepts, share resources, and challenge your friends to take a test. Assessment is now a social activity!
            </p>
            
            <div className="bg-notenest-yellow/20 dark:bg-notenest-yellow/10 rounded-3xl p-8 md:p-12 border-4 border-notenest-yellow max-w-4xl mx-auto relative transform -skew-x-2 hover:skew-x-0 transition-transform duration-500">
              <div className="transform skew-x-2">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Challenge a Friend! 🥊</h3>
                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium mb-8">
                  Create a test from your learning items, invite a friend, and see who scores higher. 
                  <br/><span className="font-bold text-notenest-green">You: 84%</span> vs <span className="font-bold text-gray-500 dark:text-gray-400">Friend: 78%</span>
                </p>
                <a 
                  href="https://console.mynotenest.app" 
                  className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-base md:text-lg py-3 px-8 md:py-4 md:px-10 rounded-full shadow-[0_6px_0_rgb(31,41,55)] dark:shadow-[0_6px_0_rgb(209,213,219)] hover:shadow-[0_2px_0_rgb(31,41,55)] dark:hover:shadow-[0_2px_0_rgb(209,213,219)] hover:translate-y-[4px] transition-all"
                >
                  Create a Challenge
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section id="download" className="py-24 px-8 md:px-12 bg-notenest-green text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Take NoteNest anywhere.</h2>
            <p className="text-xl text-green-100 font-medium mb-10">
              Download the NoteNest Android app and keep your learning streak alive on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#" 
                className="bg-white text-gray-900 font-bold text-base md:text-xl py-3 px-8 md:py-4 md:px-12 rounded-full shadow-[0_6px_0_rgb(209,213,219)] hover:shadow-[0_2px_0_rgb(209,213,219)] hover:translate-y-[4px] transition-all flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" /> Download Android App
              </a>
            </div>
            <p className="mt-6 text-green-200 font-medium">Coming soon to the Google Play Store!</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}