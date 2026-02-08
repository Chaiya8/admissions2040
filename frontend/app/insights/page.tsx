import React from 'react';
import Link from 'next/link';

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-10 font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <span className="bg-amber-500/10 text-amber-500 text-xs font-bold px-3 py-1 rounded-full uppercase border border-amber-500/20">
          Insights
        </span>
        <h1 className="text-5xl font-serif mt-6 mb-4 italic">Community Trends</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Aggregated data from community submissions &mdash; see patterns and make informed decisions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Decision Breakdown Chart */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-sm font-bold mb-8 uppercase tracking-widest text-zinc-500">Decision Breakdown</h3>
            <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
              {/* CSS Donut Chart */}
              <div className="w-full h-full rounded-full border-12 border-zinc-800 border-t-emerald-500 border-r-amber-500 border-b-rose-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold italic font-serif">842</span>
                <span className="text-[10px] text-zinc-600 uppercase font-bold">Total</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-3 mt-10">
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-500">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Accepted
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-500">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div> Waitlisted
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-500">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div> Rejected
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-500">
                <div className="w-2 h-2 rounded-full bg-zinc-700"></div> Pending
              </div>
            </div>
          </div>

          {/* Most Submitted Schools Bar Chart */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-sm font-bold mb-8 uppercase tracking-widest text-zinc-500">Most Submitted Schools</h3>
            <div className="space-y-5">
              {[
                { name: 'Howard', width: '92%' },
                { name: 'Spelman', width: '82%' },
                { name: 'Stanford', width: '74%' },
                { name: 'MIT', width: '68%' },
                { name: 'Columbia', width: '58%' },
                { name: 'Morehouse', width: '52%' }
              ].map((school) => (
                <div key={school.name} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">
                    <span>{school.name}</span>
                  </div>
                  <div className="h-3 bg-zinc-800/50 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-600/60" style={{ width: school.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Aid Distribution */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-sm font-bold mb-8 uppercase tracking-widest text-zinc-500">Financial Aid Distribution</h3>
            <div className="flex items-end justify-between h-40 gap-3">
              {[
                { label: 'Full Ride', h: '65%' },
                { label: '$30k+', h: '85%' },
                { label: '$15-30k', h: '95%' },
                { label: '< $15k', h: '50%' },
                { label: 'None', h: '30%' }
              ].map((bar) => (
                <div key={bar.label} className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-emerald-600/40 border-t border-emerald-500/30 rounded-t-sm" style={{ height: bar.h }}></div>
                  <span className="text-[9px] text-zinc-600 uppercase font-bold whitespace-nowrap">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* School Lookup Section */}
        <section className="space-y-8 pt-12">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight">School Lookup &mdash; Common Data Set</h2>
            <p className="text-zinc-500 text-sm">Search for a school to see acceptance rates, test score ranges, financial aid, and more.</p>
          </div>
          
          {/* Active Search Bar showing "Howard" */}
          <div className="relative max-w-md">
            <input 
              type="text" 
              readOnly 
              value="howard" 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 text-sm italic text-amber-500 focus:outline-none"
            />
          </div>

          {/* Howard University Detail Card */}
          <div className="border border-zinc-800 bg-zinc-900/40 rounded-3xl p-10 space-y-10">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif italic">Howard University</h2>
                <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  <span>Washington, D.C.</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                  <span className="text-amber-600">Private / HBCU</span>
                </div>
              </div>
              <button className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold hover:text-white transition-colors">
                &larr; Back to search
              </button>
            </div>

            {/* Core Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Acceptance Rate', value: '30%', highlighted: true },
                { label: 'Applicants', value: '37,000', highlighted: false },
                { label: 'Enrolled', value: '2,400', highlighted: false },
                { label: 'Grad Rate', value: '63%', highlighted: false }
              ].map((stat) => (
                <div key={stat.label} className={`p-8 rounded-2xl border ${stat.highlighted ? 'border-amber-500/20 bg-amber-500/5' : 'border-zinc-800/50 bg-zinc-900/20'} text-center space-y-3`}>
                  <p className="text-[10px] uppercase text-zinc-500 tracking-widest font-bold">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.highlighted ? 'text-amber-500' : 'text-zinc-200'}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Test Ranges Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-zinc-800/40 rounded-xl text-center bg-zinc-900/10">
                <p className="text-[9px] uppercase text-zinc-600 font-bold tracking-widest mb-2">SAT Range (Mid 50%)</p>
                <p className="text-base font-bold text-zinc-400">1100 &mdash; 1300</p>
              </div>
              <div className="p-6 border border-zinc-800/40 rounded-xl text-center bg-zinc-900/10">
                <p className="text-[9px] uppercase text-zinc-600 font-bold tracking-widest mb-2">ACT Range (Mid 50%)</p>
                <p className="text-base font-bold text-zinc-400">23 &mdash; 28</p>
              </div>
              <div className="p-6 border border-zinc-800/40 rounded-xl text-center bg-zinc-900/10">
                <p className="text-[9px] uppercase text-zinc-600 font-bold tracking-widest mb-2">Avg GPA</p>
                <p className="text-base font-bold text-zinc-400">3.5</p>
              </div>
            </div>

            {/* Bottom Content Grid */}
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 pt-10 border-t border-zinc-800/50">
              <div className="space-y-6 w-full">
                <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Top Majors</h4>
                <div className="flex flex-wrap gap-3">
                  {['Biology', 'Nursing', 'Communications', 'Political Science'].map(major => (
                    <span key={major} className="text-[10px] bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 px-4 py-1.5 rounded-full uppercase font-bold">
                      {major}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 w-full lg:text-right">
                <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Financial Aid</h4>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-500 uppercase font-bold">Avg Aid: <span className="text-zinc-200">$24,000</span></p>
                  <p className="text-xs text-zinc-500 uppercase font-bold">Net Price: <span className="text-zinc-200">$28,500</span></p>
                </div>
              </div>
            </div>

            {/* Footer Metadata */}
            <div className="flex flex-col md:flex-row justify-between items-center text-[9px] text-zinc-600 font-bold uppercase tracking-widest pt-6 gap-4">
              <div className="flex gap-6">
                <span>Retention: <span className="text-zinc-400">87%</span></span>
                <span>Student Body: <span className="text-zinc-400">12,677</span></span>
                <span>Undergrads: <span className="text-zinc-400">9,689</span></span>
              </div>
              <a href="https://howard.edu" target="_blank" rel="noreferrer" className="text-amber-700 hover:text-amber-500 transition-colors">howard.edu</a>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-center pt-20">
          <Link href="/" className="text-zinc-600 hover:text-white text-[10px] transition-colors uppercase tracking-widest font-bold border-b border-transparent hover:border-zinc-500 pb-1">
            &larr; Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}