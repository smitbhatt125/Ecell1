import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-bordeaux border-t border-vanilla-silk/5 pt-24 pb-12 px-6 md:px-12 lg:px-20">
    <div className="max-w-screen-xl mx-auto">

      {/* Top statement */}
      <div className="mb-16 md:mb-24">
        <h2
          className="font-display font-bold tracking-tighter leading-[0.95] text-vanilla-silk/90"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          This is only<br/>
          <span className="text-vanilla-silk/25">the first chapter.</span>
        </h2>
      </div>

      {/* Nav grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-vanilla-silk/8">
        <div>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-vanilla-silk/30 mb-5">Platform</p>
          <div className="flex flex-col gap-3">
            <Link to="/"           className="text-sm text-vanilla-silk/60 hover:text-vanilla-silk transition-colors">Home</Link>
            <Link to="/about"      className="text-sm text-vanilla-silk/60 hover:text-vanilla-silk transition-colors">About</Link>
            <Link to="/manifesto"  className="text-sm text-vanilla-silk/60 hover:text-vanilla-silk transition-colors">Manifesto</Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-vanilla-silk/30 mb-5">Initiatives</p>
          <div className="flex flex-col gap-3">
            <Link to="/eureka"    className="text-sm text-vanilla-silk/60 hover:text-vanilla-silk transition-colors">Eureka!</Link>
            <Link to="/directory" className="text-sm text-vanilla-silk/60 hover:text-vanilla-silk transition-colors">Directory</Link>
            <Link to="/auth"      className="text-sm text-vanilla-silk/60 hover:text-vanilla-silk transition-colors">Find Your Team</Link>
          </div>
        </div>
        <div className="col-span-2 md:col-span-2 md:text-right">
          <div className="flex md:justify-end items-start gap-3">
            <img
              src="/logo.png"
              alt="DYPSEM E-Cell"
              className="h-10 w-auto grayscale opacity-50 mt-0.5"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div>
              <div className="text-sm font-bold tracking-widest uppercase text-vanilla-silk/50">DYPSEM</div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-dypsem-red mt-0.5">E-CELL</div>
            </div>
          </div>
          <p className="text-xs text-vanilla-silk/30 mt-4 md:max-w-xs md:ml-auto leading-relaxed">
            D.Y. Patil School of Engineering & Management, Kolhapur
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-xs text-vanilla-silk/25">© {new Date().getFullYear()} DYPSEM E-Cell. All rights reserved.</p>
        <p className="text-xs font-semibold tracking-widest uppercase text-dypsem-red/60">
          Build something worth remembering.
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
