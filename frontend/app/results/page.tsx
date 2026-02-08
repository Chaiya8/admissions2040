import React from 'react';
import Link from 'next/link';

const RESULTS_DATA = [
  {
    id: 1,
    school: "Stanford University",
    slug: "stanford-university",
    major: "Computer Science",
    status: "Accepted",
    date: "Mar 2026",
    stats: { gpa: "3.95", test: "1520 SAT", aid: "Full Ride" },
    user: "Maria G.",
    // Matching the dark green theme from your screenshot
    styles: "border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400"
  },
  {
    id: 2,
    school: "MIT",
    slug: "mit",
    major: "Mechanical Engineering",
    status: "Waitlisted",
    date: "Mar 2026",
    stats: { gpa: "3.88", test: null, aid: null },
    user: "Anonymous",
    styles: "border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 text-amber-400"
  },
  {
    id: 3,
    school: "Columbia University",
    slug: "columbia",
    major: "Political Science",
    status: "Rejected",
    date: "Mar 2026",
    stats: { gpa: "3.90", test: "1480 SAT", aid: null },
    user: "Anonymous",
    styles: "border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400"
  }
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-10">
      
      {/* Header section based on your screenshot */}
      <div className="text-center mb-16">
        <span className="bg-amber-500/10 text-amber-500 text-xs font-bold px-3 py-1 rounded-full uppercase">
          🎓 Results
        </span>
        <h1 className="text-5xl font-serif mt-6 mb-4">Admissions Outcomes</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          See real decisions from community members. Share yours anonymously or publicly — every data point helps.
        </p>
      </div>

      {/* The Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESULTS_DATA.map((card) => (
          <Link 
            key={card.id} 
            href={`/results/${card.slug}`}
            className={`block border rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 ${card.styles}`}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-bold px-2 py-1 rounded-md border border-current uppercase tracking-tighter">
                {card.status === "Accepted" ? "✓ " : card.status === "Rejected" ? "✕ " : "◴ "}
                {card.status}
              </span>
              <span className="text-xs opacity-60 font-medium">{card.date}</span>
            </div>

            <h2 className="text-xl font-bold text-white leading-tight">{card.school}</h2>
            <p className="text-sm opacity-70 mb-6">{card.major}</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="opacity-50">GPA:</span>
                <span className="text-white font-bold">{card.stats.gpa}</span>
              </div>
              {card.stats.test && (
                <div className="flex justify-between">
                  <span className="opacity-50">Test:</span>
                  <span className="text-white font-bold">{card.stats.test}</span>
                </div>
              )}
              {card.stats.aid && (
                <div className="flex justify-between">
                  <span className="opacity-50">Aid:</span>
                  <span className="text-orange-400 font-bold">{card.stats.aid}</span>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
              <span className="text-[10px] opacity-40 uppercase tracking-widest">{card.user}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}