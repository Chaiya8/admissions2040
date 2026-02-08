import React from 'react';
import Link from 'next/link';

export default function studentpage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-10 font-sans">
      
      <Link href="/results" className="text-zinc-500 hover:text-white text-[10px] uppercase font-bold flex items-center gap-2 mb-10 transition-colors">
        &larr; Back to Results
      </Link>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="flex items-start gap-6 bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800/50">
          <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700">
             <span className="text-emerald-500 text-2xl font-bold">G</span>
          </div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Accepted</span>
              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">Full Ride</span>
            </div>
            <h1 className="text-4xl font-serif italic">Stanford University</h1>
            <p className="text-sm text-zinc-500 font-bold uppercase tracking-tighter">
              Computer Science &mdash; Mar 2026 &mdash; <span className="text-zinc-300">Maria G.</span>
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl text-center">
            <p className="text-[9px] uppercase text-zinc-500 font-bold mb-2">Unweighted GPA</p>
            <p className="text-2xl font-bold">3.95</p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl text-center">
            <p className="text-[9px] uppercase text-zinc-500 font-bold mb-2">Weighted GPA</p>
            <p className="text-2xl font-bold">4.3</p>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl text-center">
            <p className="text-[9px] uppercase text-zinc-500 font-bold mb-2">SAT</p>
            <p className="text-2xl font-bold">1520</p>
          </div>
        </div>

        {/* Classes Section */}
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-amber-500">AP / Advanced Classes</h3>
          <div className="flex flex-wrap gap-2">
            {['AP CS A', 'AP Calculus BC', 'AP Physics C', 'AP English Lit', 'AP US History'].map(cls => (
              <span key={cls} className="text-[10px] bg-zinc-800/50 text-zinc-400 border border-zinc-700 px-3 py-1 rounded-md font-bold uppercase">
                {cls}
              </span>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-amber-500">Extracurricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Robotics Club President", "Girls Who Code Chapter Lead", 
              "Varsity Soccer", "Church Youth Group Mentor", 
              "Summer Research @ Local University"
            ].map(ec => (
              <div key={ec} className="bg-zinc-900/20 border border-zinc-800 p-4 rounded-xl text-xs font-bold text-zinc-300">
                &bull; {ec}
              </div>
            ))}
          </div>
        </section>

        {/* Essays Section */}
        <div className="space-y-4 pt-4">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-amber-500">Essay Approach</h3>
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl italic text-sm text-zinc-400">
            &quot;Wrote about building an app for her grandmother&apos;s neighborhood watch&quot;
          </div>
        </div>

        {/* Advice Box */}
        <div className="bg-amber-500/5 border border-amber-500/20 p-8 rounded-3xl space-y-4">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-amber-500 italic">Their Advice</h3>
          <p className="text-sm italic text-zinc-300 leading-relaxed">
            &quot;Be authentic. My essay wasn&apos;t about some grand achievement &mdash; it was about helping my abuela&apos;s neighbors feel safe. Show who you really are.&quot;
          </p>
        </div>

        <div className="flex justify-center pt-10">
          <Link href="/results" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all">
            Back to All Results
          </Link>
        </div>
      </div>
    </main>
  );
}