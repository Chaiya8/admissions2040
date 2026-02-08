import React from 'react';
import Link from 'next/link';

const COMMUNITY_CHANNELS = [
  {
    id: 1,
    name: "general",
    slug: "general",
    description: "Introduce yourself and connect with others on the journey.",
    members: "2,400",
    styles: "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-orange-500/30 text-orange-400"
  },
  {
    id: 2,
    name: "scholarships",
    slug: "scholarships",
    description: "Share and discuss current scholarship opportunities and deadlines.",
    members: "1,850",
    styles: "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-orange-500/30 text-orange-400"
  },
  {
    id: 3,
    name: "essay-review",
    slug: "essay-review",
    description: "Get peer feedback and constructive criticism on your drafts.",
    members: "1,200",
    styles: "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-orange-500/30 text-orange-400"
  }
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#121417] text-white p-10">
      
      <div className="text-center mb-16">
        <span className="bg-orange-500/10 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase border border-orange-500/20">
          Community Channel
        </span>
        {/* Fixed apostrophe using &apos; */}
        <h1 className="text-5xl font-serif mt-6 mb-4 italic">You&apos;re Not Alone in This</h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">
          Join channels, ask questions, and build real connections with peers who understand the process.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {COMMUNITY_CHANNELS.map((channel) => (
          <Link 
            key={channel.id} 
            href={`/community/${channel.slug}`}
            className={`group block border rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-1 ${channel.styles}`}
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
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Join Channel
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}