import { useState, useEffect, useMemo } from 'react';
import { supabase, type Profile } from '../lib/supabase';
import { Link } from 'react-router-dom';

const ROLE_TAGS = ['All', 'Tech', 'Design', 'Business/Strategy', 'Marketing', 'Ideation'];
const YEAR_TAGS = ['All', '1st', '2nd', '3rd', '4th'];

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const getBadgeClass = (role: string) => {
  if (role === 'Tech') return 'badge-tech';
  if (role === 'Design') return 'badge-design';
  if (role === 'Business/Strategy') return 'badge-biz';
  if (role === 'Marketing') return 'badge-mktg';
  if (role === 'Ideation') return 'badge-ideation';
  return 'badge-biz';
};

export default function Directory() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('All');
  const [year, setYear] = useState('All');

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) setProfiles(data);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(() =>
    profiles.filter(p => {
      const matchRole = role === 'All' || p.role === role;
      const matchYear = year === 'All' || p.year === year;
      const matchSearch =
        p.full_name.toLowerCase().includes(search.toLowerCase()) ||
        p.branch.toLowerCase().includes(search.toLowerCase());
      return matchRole && matchYear && matchSearch;
    }),
    [profiles, role, year, search]
  );

  return (
    <div className="min-h-screen bg-bordeaux pt-28 pb-24">
      {/* Hero */}
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto mb-16">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-dypsem-red mb-4">The people</p>
        <h1 className="font-display font-bold tracking-tighter leading-[0.95] mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
          Find your people.
        </h1>
        <p className="text-vanilla-silk/50 text-lg font-light max-w-xl">Different skills. Different perspectives. One team.</p>
      </div>

      {/* Filters */}
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto mb-12 space-y-4">
        {/* Search */}
        <div className="relative max-w-md">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-vanilla-silk/30 pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or branch..."
            className="w-full bg-deep-burgundy/60 border border-vanilla-silk/10 focus:border-vanilla-silk/30 rounded-xl pl-11 pr-5 py-3.5 text-sm text-vanilla-silk placeholder-vanilla-silk/30 focus:outline-none transition-colors"
          />
        </div>

        {/* Role filter pills */}
        <div className="flex flex-wrap gap-2">
          {ROLE_TAGS.map(r => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                role === r
                  ? 'bg-vanilla-silk text-bordeaux'
                  : 'bg-deep-burgundy/50 text-vanilla-silk/50 border border-vanilla-silk/10 hover:border-vanilla-silk/30 hover:text-vanilla-silk'
              }`}
            >
              {r}
            </button>
          ))}
          <div className="w-px h-6 bg-vanilla-silk/10 self-center mx-1" />
          {YEAR_TAGS.map(y => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                year === y
                  ? 'bg-dypsem-red text-white'
                  : 'bg-deep-burgundy/50 text-vanilla-silk/50 border border-vanilla-silk/10 hover:border-vanilla-silk/30 hover:text-vanilla-silk'
              }`}
            >
              {y === 'All' ? 'All Years' : `${y} Year`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-32">
            <div className="w-10 h-10 border-2 border-dypsem-red border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-32 text-center">
            <div className="text-6xl md:text-8xl font-display font-bold text-vanilla-silk/6 mb-6 leading-none">
              Empty.
            </div>
            <h3 className="text-2xl font-bold text-vanilla-silk/50 mb-3">No one's here yet for this.</h3>
            <p className="text-vanilla-silk/35 mb-10">Be the first to bring this role to the table.</p>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 px-6 py-3 bg-vanilla-silk text-bordeaux font-bold rounded-full hover:bg-white transition-colors text-sm"
            >
              Create your profile <Arrow />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((profile, idx) => (
              <div
                key={profile.id}
                className="student-card rounded-2xl p-7 flex flex-col gap-0 group"
              >
                {/* Index + Role */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-semibold text-vanilla-silk/20 font-display">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${getBadgeClass(profile.role)}`}>
                    {profile.role}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-display font-bold text-vanilla-silk mb-1 leading-tight">
                  {profile.full_name}
                </h3>
                <p className="text-xs text-vanilla-silk/40 font-semibold tracking-wide uppercase mb-8">
                  {profile.year} Year · {profile.branch}
                </p>

                {/* Email CTA */}
                <div className="mt-auto pt-5 border-t border-vanilla-silk/8">
                  {profile.email ? (
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center justify-between text-sm font-medium text-vanilla-silk/50 hover:text-vanilla-silk transition-colors group/link"
                    >
                      <span className="truncate mr-2">{profile.email}</span>
                      <Arrow />
                    </a>
                  ) : (
                    <span className="text-xs text-vanilla-silk/20 font-medium">Email not available</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
