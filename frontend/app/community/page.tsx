import React from 'react';
import Link from 'next/link';

const COMMUNITY_CHANNELS = [
  {
    id: 1,
    name: "general",
    slug: "general",
    description: "Introduce yourself and connect with others on the journey.",
    members: "2,400",
  },
  {
    id: 2,
    name: "scholarships",
    slug: "scholarships",
    description: "Share and discuss current scholarship opportunities and deadlines.",
    members: "1,850",
  },
  {
    id: 3,
    name: "essay-review",
    slug: "essay-review",
    description: "Get peer feedback and constructive criticism on your drafts.",
    members: "1,200",
  },
  {
    id: 4,
    name: "decisions-support",
    slug: "decisions-support",
    description: "Celebrate wins and process tough news with the community.",
    members: "980",
  },
  {
    id: 5,
    name: "first-gen",
    slug: "first-gen",
    description: "A dedicated space for first-generation college students.",
    members: "1,600",
  },
  {
    id: 6,
    name: "financial-aid",
    slug: "financial-aid",
    description: "Navigate FAFSA, CSS Profile, and institutional aid packages.",
    members: "1,400",
  }
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-10 font-sans">
      
      {/* Header section matching your screenshot */}
      <div className="text-center mb-16">
        <span className="bg-orange-500/10 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase border border-orange-500/20">
          Community
        </span>
        <h1 className="text-5xl font-serif mt-6 mb-4 italic">You&apos;re Not Alone in This</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Join channels, ask questions, share advice, and build real connections with peers who get it.
        </p>
      </div>

      {/* Grid for Channels */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {COMMUNITY_CHANNELS.map((channel) => (
          <Link 
            key={channel.id} 
            href={`/community/${channel.slug}`}
            className="group block border border-zinc-800 bg-zinc-900/30 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:bg-zinc-800/50 hover:border-orange-500/30"
          >
            <h2 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors italic mb-4">
              #{channel.name}
            </h2>
            
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
              {channel.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
                {channel.members} members
              </span>
              <span className="text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                Join Channel &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Action Button from screenshot */}
      <div className="flex flex-col items-center gap-8 pt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-3">
          Join the Community &rarr;
        </button>

        {/* Consistent Back Button */}
        <Link 
          href="/" 
          className="text-zinc-600 hover:text-white text-xs transition-colors uppercase tracking-widest font-bold border-b border-transparent hover:border-zinc-500 pb-1"
        >
          &larr; Back to Dashboard
        </Link>
      </div>
    </main>
  );
}