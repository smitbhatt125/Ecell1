import { ArrowRight } from 'lucide-react';

const Eureka = () => {
  return (
    <div className="w-full flex flex-col">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8">
            Your idea is only the beginning.
          </h1>
          <h2 className="text-2xl md:text-3xl font-display italic text-dusty-rose mb-12">
            Eureka! — part of our National Entrepreneurship Challenge journey.
          </h2>
          <div className="text-xl md:text-2xl text-vanilla-silk/70 leading-relaxed font-light space-y-6 max-w-3xl">
            <p>Eureka! is IIT Bombay's flagship business-plan competition.</p>
            <p>For DYPSEM students, it is part of the larger entrepreneurship journey we're undertaking through the National Entrepreneurship Challenge.</p>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-deep-burgundy border-y border-vanilla-silk/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-20 max-w-3xl leading-tight">
            An idea becomes stronger when someone challenges it.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            <div className="group border-t border-vanilla-silk/20 pt-8">
              <span className="text-dusty-rose font-display text-4xl mb-6 block italic">01</span>
              <h3 className="text-2xl font-semibold mb-4 text-vanilla-silk">IDEA</h3>
              <p className="text-vanilla-silk/60 text-lg">What problem are you solving?</p>
            </div>
            <div className="group border-t border-vanilla-silk/20 pt-8">
              <span className="text-dusty-rose font-display text-4xl mb-6 block italic">02</span>
              <h3 className="text-2xl font-semibold mb-4 text-vanilla-silk">TEAM</h3>
              <p className="text-vanilla-silk/60 text-lg">Who needs to build it with you?</p>
            </div>
            <div className="group border-t border-vanilla-silk/20 pt-8">
              <span className="text-dusty-rose font-display text-4xl mb-6 block italic">03</span>
              <h3 className="text-2xl font-semibold mb-4 text-vanilla-silk">VALIDATION</h3>
              <p className="text-vanilla-silk/60 text-lg">What evidence supports your assumptions?</p>
            </div>
            <div className="group border-t border-vanilla-silk/20 pt-8">
              <span className="text-dusty-rose font-display text-4xl mb-6 block italic">04</span>
              <h3 className="text-2xl font-semibold mb-4 text-vanilla-silk">PITCH</h3>
              <p className="text-vanilla-silk/60 text-lg">Can you explain the opportunity clearly?</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-[10%] md:left-1/2 md:-translate-x-1/2 w-px trajectory-line opacity-20 hidden md:block"></div>
        
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-24 text-center">Our journey</h2>
          
          <div className="space-y-24">
            
            {/* STEP 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0">
                <span className="text-dypsem-red font-display text-sm tracking-widest uppercase mb-2 block">Step 01</span>
                <h3 className="text-3xl font-display font-bold text-vanilla-silk">Start</h3>
              </div>
              <div className="hidden md:flex w-10 h-10 rounded-full border border-vanilla-silk/20 bg-bordeaux z-10 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-vanilla-silk/50 group-hover:bg-dypsem-red transition-colors"></div>
              </div>
              <div className="md:w-[45%]">
                <p className="text-xl text-vanilla-silk/60">Register your interest.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between group">
              <div className="md:w-[45%] text-left mb-4 md:mb-0">
                <span className="text-dypsem-red font-display text-sm tracking-widest uppercase mb-2 block">Step 02</span>
                <h3 className="text-3xl font-display font-bold text-vanilla-silk">Build your profile</h3>
              </div>
              <div className="hidden md:flex w-10 h-10 rounded-full border border-vanilla-silk/20 bg-bordeaux z-10 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-vanilla-silk/50 group-hover:bg-dypsem-red transition-colors"></div>
              </div>
              <div className="md:w-[45%] md:text-right">
                <p className="text-xl text-vanilla-silk/60">Tell the community what you bring.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0">
                <span className="text-dypsem-red font-display text-sm tracking-widest uppercase mb-2 block">Step 03</span>
                <h3 className="text-3xl font-display font-bold text-vanilla-silk">Find your people</h3>
              </div>
              <div className="hidden md:flex w-10 h-10 rounded-full border border-vanilla-silk/20 bg-bordeaux z-10 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-vanilla-silk/50 group-hover:bg-dypsem-red transition-colors"></div>
              </div>
              <div className="md:w-[45%]">
                <p className="text-xl text-vanilla-silk/60">Connect with students who complement your skills.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between group">
              <div className="md:w-[45%] text-left mb-4 md:mb-0">
                <span className="text-dypsem-red font-display text-sm tracking-widest uppercase mb-2 block">Step 04</span>
                <h3 className="text-3xl font-display font-bold text-vanilla-silk">Build</h3>
              </div>
              <div className="hidden md:flex w-10 h-10 rounded-full border border-vanilla-silk/20 bg-bordeaux z-10 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-vanilla-silk/50 group-hover:bg-dypsem-red transition-colors"></div>
              </div>
              <div className="md:w-[45%] md:text-right">
                <p className="text-xl text-vanilla-silk/60">Work on the idea with your team.</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0">
                <span className="text-dypsem-red font-display text-sm tracking-widest uppercase mb-2 block">Step 05</span>
                <h3 className="text-3xl font-display font-bold text-vanilla-silk">Take it forward</h3>
              </div>
              <div className="hidden md:flex w-10 h-10 rounded-full border border-dypsem-red bg-bordeaux z-10 items-center justify-center shadow-[0_0_15px_rgba(115,27,31,0.5)]">
                <div className="w-3 h-3 rounded-full bg-dypsem-red"></div>
              </div>
              <div className="md:w-[45%]">
                <p className="text-xl text-vanilla-silk/60">Follow the current NEC/Eureka requirements and submission process.</p>
                
                <div className="mt-8">
                  <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-vanilla-silk text-bordeaux font-bold rounded-full hover:bg-white transition-all text-sm">
                    Open Registration Form <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-vanilla-silk/40 mt-3">You'll be redirected to the official Google Form in a new tab.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Eureka;
