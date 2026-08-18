import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const links = [
    { label: 'About', to: '/about' },
    { label: 'Manifesto', to: '/manifesto' },
    { label: 'Eureka!', to: '/eureka' },
    { label: 'Directory', to: '/directory' },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <>
      {/* Main bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bordeaux/95 backdrop-blur-lg border-b border-vanilla-silk/5 py-3' : 'py-6'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src="/logo.png"
              alt="DYPSEM E-Cell"
              className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="leading-none">
              <div className="text-sm font-bold tracking-widest uppercase text-vanilla-silk">DYPSEM</div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-dypsem-red mt-0.5">E-CELL</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(l.to) ? 'text-vanilla-silk' : 'text-vanilla-silk/45 hover:text-vanilla-silk'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/auth"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dypsem-red text-white text-sm font-semibold tracking-wide hover:bg-dypsem-red/85 transition-all shadow-[0_0_20px_rgba(115,27,31,0.4)] hover:shadow-[0_0_30px_rgba(115,27,31,0.6)]"
            >
              Find Your Team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>

            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-vanilla-silk"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span className="flex flex-col gap-[6px] w-5">
                <span className={`block h-px bg-vanilla-silk transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-px bg-vanilla-silk transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-vanilla-silk transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bordeaux flex flex-col transition-transform duration-500 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 gap-2 mt-20">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              className={`block text-4xl font-display font-bold py-3 border-b border-vanilla-silk/8 transition-all duration-300 ${
                isActive(l.to) ? 'text-vanilla-silk' : 'text-vanilla-silk/30 hover:text-vanilla-silk'
              } ${open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="px-8 pb-12 flex flex-col gap-4">
          <Link to="/auth" className="btn-primary justify-center text-center text-base">
            <span>Find Your Team</span>
          </Link>
          <Link to="/auth" className="btn-ghost justify-center text-center text-base">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
