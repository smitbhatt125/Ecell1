import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Manifesto = () => {
  return (
    <div className="w-full flex flex-col bg-bordeaux text-center md:text-left selection:bg-dypsem-red selection:text-white">
      
      {/* 1 */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 border-b border-vanilla-silk/5 relative">
        <div className="absolute top-0 right-1/4 w-[1px] h-[50vh] trajectory-line opacity-30 hidden md:block"></div>
        <div className="max-w-6xl mx-auto md:mx-0">
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-display font-bold leading-[0.9] tracking-tighter mb-16 uppercase text-vanilla-silk hover:text-white transition-colors duration-700">
            We don't believe<br/>
            <span className="text-dypsem-red">in waiting until</span><br/>
            you're ready.
          </h1>
          <p className="text-2xl md:text-4xl font-light text-vanilla-silk/60 max-w-3xl border-l-2 border-dusty-rose pl-6 md:pl-10">
            Because ready is usually a moving target.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 bg-deep-burgundy/20 border-b border-vanilla-silk/5">
        <div className="max-w-6xl mx-auto md:mx-0 md:ml-auto">
          <h1 className="text-5xl sm:text-6xl md:text-[6rem] lg:text-[8rem] font-display font-bold leading-[0.9] tracking-tighter mb-16 uppercase text-right hover:text-dusty-rose transition-colors duration-700">
            We believe in<br/>
            the first attempt.
          </h1>
          <div className="text-xl md:text-3xl font-light text-vanilla-silk/60 space-y-4 text-right">
            <p>The rough prototype.</p>
            <p>The awkward pitch.</p>
            <p>The idea that changes three times.</p>
            <p className="text-vanilla-silk/90 font-medium">The meeting where nobody knows exactly what they're doing yet.</p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 border-b border-vanilla-silk/5">
        <div className="max-w-6xl mx-auto md:mx-0">
          <h1 className="text-5xl sm:text-6xl md:text-[6rem] lg:text-[8rem] font-display font-bold leading-[0.9] tracking-tighter mb-16 uppercase hover:text-dypsem-red transition-colors duration-700">
            We believe<br/>
            the right people<br/>
            <span className="text-vanilla-silk/40">change ideas.</span>
          </h1>
          <div className="text-xl md:text-3xl font-light text-vanilla-silk/60 space-y-6 max-w-4xl">
            <p>A developer sees a problem differently from a designer.</p>
            <p>A business student asks a different question.</p>
            <p>A marketer sees a different opportunity.</p>
            <p className="text-vanilla-silk/90 mt-12 pt-8 border-t border-vanilla-silk/20">
              A team turns those differences into something none of them could have built alone.
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 bg-deep-burgundy/40 border-b border-vanilla-silk/5 relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-dypsem-red/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-[6rem] lg:text-[7rem] font-display font-bold leading-[1] tracking-tighter mb-16 uppercase">
            We believe DYPSEM<br/>
            students should build.
          </h1>
          <div className="text-2xl md:text-4xl font-light text-vanilla-silk/70 space-y-6">
            <p>Not because every idea needs to become a company.</p>
            <p className="font-medium text-vanilla-silk">But because building teaches you things that theory cannot.</p>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-32 bg-dypsem-red text-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-display font-bold leading-[0.8] tracking-tighter mb-20 text-white opacity-90 mix-blend-overlay break-words">
            SO START.
          </h1>
          
          <div className="text-2xl md:text-4xl font-medium text-white space-y-6 mb-24">
            <p>Bring the idea.</p>
            <p>Bring the skill.</p>
            <p>Bring the curiosity.</p>
            <p>Find your people.</p>
            <p className="text-4xl md:text-6xl font-display font-bold mt-12 italic opacity-80">Make the first move.</p>
          </div>

          <Link to="/auth" className="inline-flex justify-center items-center gap-4 px-12 py-6 bg-bordeaux hover:bg-black text-vanilla-silk font-bold text-xl rounded-full transition-all hover:scale-105 shadow-2xl group">
            Find Your Team <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default Manifesto;
