import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav className="flex items-center justify-between px-10 py-6 bg-zinc-900">
        <div className="text-xl font-bold text-orange-400">Pathway</div>

        <div className="hidden md:flex gap-6 text-sm">
          {/* Use Link instead of <a> for internal pages */}
          <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <Link href="/opportunities" className="hover:text-orange-400 transition-colors">Opportunities</Link>
          <Link href="/results" className="hover:text-orange-400 transition-colors">Results</Link>
          <Link href="/tips" className="hover:text-orange-400 transition-colors">Tips</Link>
          <Link href="/insights" className="hover:text-orange-400 transition-colors">Insights</Link>
          <Link href="/community" className="hover:text-orange-400 transition-colors">Community</Link>
        </div>

        <button className="bg-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all">
          Join Now
        </button>
      </nav>

      {/* HERO */}
      <section className="relative px-10 py-32 bg-[url('/hero.jpg')] bg-cover">
        <div className="max-w-3xl">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">
            Empowering Educational Equity
          </span>

          <h1 className="mt-6 text-6xl font-bold">
            Your Community for{" "}
            <span className="text-orange-500">College Admissions</span> Success
          </h1>

          <p className="mt-6 text-zinc-300">
            A peer-driven platform where students share opportunities,
            admissions outcomes, and support each other with privacy built in.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600 transition-all">
              Get Started →
            </button>

            {/* This makes your main button go to the opportunities folder */}
            <Link href="/opportunities">
              <button className="bg-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-700 transition-all">
                Explore Opportunities
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}