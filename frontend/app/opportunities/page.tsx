import React from 'react';
import Link from 'next/link';

const OPPORTUNITIES = [
  {
    id: 1,
    title: "QuestBridge National College Match",
    provider: "QuestBridge",
    description: "Full four-year scholarships to top colleges for outstanding low-income high school seniors.",
    tags: ["Full Scholarship", "Low-Income", "Top Schools"],
    category: "Scholarship",
    badge: "Full Ride",
    date: "Sep 26, 2026",
    location: "Nationwide"
  },
  {
    id: 2,
    title: "LEDA Scholars Program",
    provider: "LEDA",
    description: "Intensive summer program preparing high-achieving, under-resourced students for top colleges.",
    tags: ["Summer Program", "College Prep", "Mentorship"],
    category: "Pipeline Program",
    badge: "",
    date: "Mar 15, 2026",
    location: "Princeton, NJ"
  },
  {
    id: 3,
    title: "Gates Scholarship",
    provider: "Gates Foundation",
    description: "Covers full cost of attendance for exceptional minority students pursuing any major.",
    tags: ["Full Ride", "STEM", "Minority Students"],
    category: "Scholarship",
    badge: "Full Cost of Attendance",
    date: "Sep 15, 2026",
    location: "Nationwide"
  }
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-10 font-sans">
      
      {/* Header section matching Community style */}
      <div className="text-center mb-16">
        <span className="bg-amber-500/10 text-amber-500 text-xs font-bold px-3 py-1 rounded-full uppercase border border-amber-500/20">
          Opportunities
        </span>
        <h1 className="text-5xl font-serif mt-6 mb-4 italic">Admissions Opportunities</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Scholarships, pipeline programs, and summer experiences curated for underrepresented students.
        </p>
      </div>

      {/* Grid matching Community style */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {OPPORTUNITIES.map((opp) => (
          <div 
            key={opp.id} 
            className="group block border border-zinc-800 bg-zinc-900/30 rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-800/50 hover:border-amber-500/30 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                {opp.category}
              </span>
              {opp.badge && (
                <span className="text-[10px] font-bold text-amber-600 uppercase">
                  $ {opp.badge}
                </span>
              )}
            </div>

            <h2 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors mb-2">
              {opp.title}
            </h2>
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-tighter">{opp.provider}</p>
            
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {opp.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {opp.tags.map((tag, i) => (
                <span key={i} className="text-[9px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded-md border border-white/5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
              <span>{opp.date}</span>
              <span>{opp.location}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Persistent Back Button for all pages */}
      <div className="flex justify-center pb-10">
        <Link 
          href="/" 
          className="text-zinc-500 hover:text-white text-sm transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
        >
          &larr; Back to Dashboard
        </Link>
      </div>
    </main>
  );
}