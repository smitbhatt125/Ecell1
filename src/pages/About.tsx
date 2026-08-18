const About = () => {
  return (
    <div className="w-full flex flex-col">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-12">
            We're building this for the students who want to build.
          </h1>
          <div className="text-xl md:text-2xl text-vanilla-silk/70 leading-relaxed font-light space-y-6 max-w-3xl">
            <p>DYPSEM E-Cell is a student-focused entrepreneurship initiative at D.Y. Patil School of Engineering & Management, Kolhapur.</p>
            <p>This is our first chapter.</p>
            <p>We're starting by taking on the National Entrepreneurship Challenge and creating the systems, community and opportunities students need to participate meaningfully.</p>
            <p>The goal isn't to make everyone an entrepreneur.</p>
            <p className="text-vanilla-silk font-medium">The goal is to make sure that students who want to try don't have to figure everything out alone.</p>
          </div>
        </div>
      </section>

      {/* WHY NOW? */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-deep-burgundy border-y border-vanilla-silk/10">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-dusty-rose">Why now?</h2>
          <div className="text-xl md:text-2xl text-vanilla-silk/80 leading-relaxed font-light space-y-6">
            <p>Because ideas rarely arrive at convenient times.</p>
            <p>And because college is one of the few places where you can experiment, fail, learn and try again while surrounded by people with completely different skills.</p>
            <p className="font-medium">We're building an environment where that actually happens.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE WANT TO BUILD */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <div className="flex flex-col gap-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold text-vanilla-silk/20">
            <div className="hover:text-vanilla-silk transition-colors duration-500 cursor-default">More ideas leaving notebooks.</div>
            <div className="hover:text-vanilla-silk transition-colors duration-500 cursor-default">More students finding their people.</div>
            <div className="hover:text-vanilla-silk transition-colors duration-500 cursor-default">More experiments before graduation.</div>
            <div className="hover:text-dypsem-red transition-colors duration-500 cursor-default">More reasons to build.</div>
          </div>
        </div>
      </section>

      {/* WHAT STUDENTS GET */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-bordeaux border-t border-vanilla-silk/10 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-t from-deep-burgundy/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            <div className="border-t-2 border-dypsem-red pt-8">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-vanilla-silk/50 mb-4">01. People</h3>
              <p className="text-xl font-medium text-vanilla-silk leading-relaxed">Meet students who think differently and bring different skills.</p>
            </div>
            <div className="border-t-2 border-vanilla-silk/20 pt-8">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-vanilla-silk/50 mb-4">02. Opportunities</h3>
              <p className="text-xl font-medium text-vanilla-silk leading-relaxed">Get involved in entrepreneurship challenges and initiatives.</p>
            </div>
            <div className="border-t-2 border-vanilla-silk/20 pt-8">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-vanilla-silk/50 mb-4">03. Experience</h3>
              <p className="text-xl font-medium text-vanilla-silk leading-relaxed">Learn by actually working on ideas instead of only reading about them.</p>
            </div>
            <div className="border-t-2 border-vanilla-silk/20 pt-8">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-vanilla-silk/50 mb-4">04. Community</h3>
              <p className="text-xl font-medium text-vanilla-silk leading-relaxed">Find people who want to build, experiment and compete.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
