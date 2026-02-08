import React from 'react';

// This is just sample data for the MVP
const OPPORTUNITIES = [
  {
    id: 1,
    school: "Stanford University",
    major: "Computer Science",
    status: "Accepted",
    date: "Mar 2026",
    stats: { gpa: "3.95", test: "1520 SAT", aid: "Full Ride" },
    user: "Maria G.",
    color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
  },
  {
    id: 2,
    school: "MIT",
    major: "Mechanical Engineering",
    status: "Waitlisted",
    date: "Mar 2026",
    stats: { gpa: "3.88", test: null, aid: null },
    user: "Anonymous",
    color: "border-amber-500/30 bg-amber-500/5 text-amber-400"
  },
  // Add more here...
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="bg-amber-500/10 text-amber-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          🎓 Opportunities
        </span>
        <h1 className="text-4xl md:text-5xl font-serif mt-4 mb-4">Admissions Outcomes</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          See real decisions from community members. Share yours anonymously or publicly — every data point helps.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {OPPORTUNITIES.map((item) => (
          <div 
            key={item.id} 
            className={`border rounded-xl p-5 flex flex-col justify-between transition-all hover:scale-[1.02] ${item.color}`}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-current capitalize">
                  {item.status}
                </span>
                <span className="text-xs opacity-60">{item.date}</span>
              </div>

              <h3 className="text-lg font-bold text-white">{item.school}</h3>
              <p className="text-sm opacity-80 mb-4">{item.major}</p>

              <div className="space-y-1 text-sm">
                <p className="text-white/60">GPA: <span className="text-white font-medium">{item.stats.gpa}</span></p>
                {item.stats.test && (
                  <p className="text-white/60">Test: <span className="text-white font-medium">{item.stats.test}</span></p>
                )}
                {item.stats.aid && (
                  <p className="text-white/60">Aid: <span className="text-amber-400 font-medium">{item.stats.aid}</span></p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs opacity-50 italic">{item.user}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}