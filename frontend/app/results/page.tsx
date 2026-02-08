import React from 'react';
import Link from 'next/link';

const OUTCOMES = [
  {
    id: 1,
    school: "Stanford University",
    major: "Computer Science",
    status: "Accepted",
    date: "Mar 2026",
    gpa: "3.95",
    test: "1520 SAT",
    aid: "Full Ride",
    user: "Maria G.",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    id: 2,
    school: "MIT",
    major: "Mechanical Engineering",
    status: "Waitlisted",
    date: "Mar 2026",
    gpa: "3.88",
    test: "1490 SAT",
    aid: "---",
    user: "Anonymous",
    statusColor: "text-amber-500 bg-amber-500/10 border-amber-500/20"
  },
  {
    id: 3,
    school: "Howard University",
    major: "Biology",
    status: "Accepted",
    date: "Feb 2026",
    gpa: "3.72",
    test: "---",
    aid: "$28,000/yr",
    user: "Jordan T.",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    id: 4,
    school: "Columbia University",
    major: "Political Science",
    status: "Rejected",
    date: "Mar 2026",
    gpa: "3.90",
    test: "1480 SAT",
    aid: "---",
    user: "Anonymous",
    statusColor: "text-rose-500 bg-rose-500/10 border-rose-500/20"
  }
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-10 font-sans">
      <div className="text-center mb-16">
        <span className="bg-orange-500/10 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase border border-orange-500/20">
          Results
        </span>
        <h1 className="text-5xl font-serif mt-6 mb-4 italic text-zinc-100">Admissions Outcomes</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Real decisions from community members. View profiles to understand the stats and activities behind the results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
           <div className="w-10 h-5 bg-orange-500 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
           </div>
           <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Showing all</span>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors">
          + Share Your Result
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {OUTCOMES.map((item) => (
          <div key={item.id} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${item.statusColor}`}>
                  {item.status}
                </span>
                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{item.date}</span>
              </div>
              <div>
                <h2 className="text-xl font-serif italic text-zinc-200">{item.school}</h2>
                <p className="text-sm text-zinc-500 mt-1">{item.major}</p>
              </div>
              <div className="space-y-1.5 pt-4 border-t border-zinc-800/50">
                <p className="text-xs text-zinc-500">GPA: <span className="text-zinc-300 font-bold">{item.gpa}</span></p>
                <p className="text-xs text-zinc-500">Test: <span className="text-zinc-300 font-bold">{item.test}</span></p>
                <p className="text-xs text-zinc-500">Aid: <span className="text-orange-400 font-bold">{item.aid}</span></p>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-6">
              <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{item.user}</span>
              <button className="text-[10px] text-orange-400 font-bold uppercase tracking-widest hover:text-orange-300">
           <Link 
  href="/results/student" 
  className="text-[10px] text-orange-400 font-bold uppercase tracking-widest hover:text-orange-300 transition-colors"
>
  View Full Profile &rarr;
</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pb-10">
        <Link href="/" className="text-zinc-500 hover:text-white text-xs transition-colors uppercase tracking-widest font-bold">
          &larr; Back to Dashboard
        </Link>
      </div>
    </main>
  );
}