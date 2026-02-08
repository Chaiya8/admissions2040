import React from 'react';
import Link from 'next/link';

const TIP_CATEGORIES = [
  { 
    id: 'common', 
    title: 'Common App Essays', 
    tips: [
      { title: 'Start with a Vivid Moment', text: 'Open with a specific scene or moment that draws the reader in. Admissions officers read thousands of essays — make yours unforgettable from the first line.' },
      { title: 'Show, Don&apos;t Tell', text: 'Instead of saying &quot;I&apos;m resilient,&quot; show a moment where you demonstrated resilience. Use details, dialogue, and sensory language.' },
      { title: 'Be Authentically You', text: 'Don&apos;t write what you think they want to hear. The best essays reveal your genuine voice, values, and perspective.' },
      { title: 'End with Growth', text: 'Your conclusion should show how the experience shaped you and connect to who you&apos;re becoming. Avoid cliché endings.' }
    ]
  },
  { 
    id: 'scholarship', 
    title: 'Scholarship Essays', 
    tips: [
      { title: 'Answer the Prompt Directly', text: 'Scholarship committees are looking for specific qualities. Address every part of the prompt and tie your experiences to their mission.' },
      { title: 'Quantify Your Impact', text: 'Use numbers to show your contributions: &quot;organized 12 workshops serving 200+ students&quot; is more powerful than &quot;helped many students.&quot;' },
      { title: 'Connect to Your Future Goals', text: 'Explain how the scholarship will help you achieve specific goals and how those goals align with the organization&apos;s values.' },
      { title: 'Proofread Ruthlessly', text: 'Typos and grammar errors signal carelessness. Read your essay aloud, have someone else review it, and check every detail.' }
    ]
  },
  { 
    id: 'college', 
    title: 'College-Specific Essays', 
    tips: [
      { title: 'Do Deep Research', text: 'Mention specific professors, programs, clubs, or courses. Show that you&apos;ve gone beyond the brochure and know what makes the school unique.' },
      { title: 'Explain the Why Fit', text: 'Don&apos;t just list what the school offers — explain why those specific things matter to you and how they connect to your goals.' },
      { title: 'Avoid Generic Praise', text: 'Your school has a beautiful campus and great academics could apply anywhere. Be specific about what draws you to THIS school.' },
      { title: 'Show What You&apos;ll Contribute', text: 'Colleges want to know what you&apos;ll bring to their community. Highlight how your unique perspective and experiences will enrich campus life.' }
    ]
  }
];

export default function TipsPage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-10 font-sans">
      
      {/* Header section */}
      <div className="text-center mb-12">
        <span className="bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/20">
          Application Toolkit
        </span>
        <h1 className="text-5xl font-serif mt-6 mb-4">
          Application Tips &amp; <span className="text-orange-500 italic">Essays That Worked</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Real advice, real essays, and real strategies from students who made it in. Learn how to craft your story and stand out.
        </p>
      </div>

      {/* Navigation Toggles */}
      <div className="flex justify-center gap-3 mb-16">
        <button className="bg-amber-500 text-black px-6 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-amber-500/20">
          Essay Tips
        </button>
        <button className="bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 px-6 py-2 rounded-lg font-bold text-sm border border-white/5 transition-all">
          Activities
        </button>
        <button className="bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 px-6 py-2 rounded-lg font-bold text-sm border border-white/5 transition-all">
          Essays That Worked
        </button>
      </div>

      {/* The Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {TIP_CATEGORIES.map((cat) => (
          <div key={cat.id} className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl font-bold tracking-tight">{cat.title}</h2>
            </div>

            <div className="space-y-8">
              {cat.tips.map((tip, index) => (
                <div key={index} className="group">
                  <h3 className="text-white font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home - Fixes the unused Link warning */}
      <div className="flex justify-center">
        <Link href="/" className="text-zinc-500 hover:text-white text-sm transition-colors uppercase tracking-widest font-bold">
          &larr; Back to Dashboard
        </Link>
      </div>
    </main>
  );
}