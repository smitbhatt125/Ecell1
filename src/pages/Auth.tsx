import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const branches = [
  'Computer Engineering',
  'Information Technology',
  'Artificial Intelligence & Data Science',
  'Electronics & Telecommunication',
  'Civil Engineering',
  'Mechanical Engineering'
];

const roles = ['Tech', 'Design', 'Business/Strategy', 'Marketing', 'Ideation'];

const Auth = () => {
  const [view, setView] = useState<'choice' | 'login' | 'signup'>('choice');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [year, setYear] = useState('1st');
  const [branch, setBranch] = useState(branches[0]);
  const [role, setRole] = useState(roles[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (view === 'login') {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
        navigate('/directory');
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              year: year,
              branch: branch,
              role: role,
            }
          }
        });
        
        if (signUpError) throw signUpError;
        navigate('/directory');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (view === 'choice') {
    return (
      <div className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative">
        <div className="absolute top-0 right-[20%] w-px h-full trajectory-line opacity-20 hidden lg:block"></div>
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-center">
            Who are you building with?
          </h1>
          <p className="text-xl md:text-2xl text-vanilla-silk/60 font-light text-center mb-16">
            You don't need a team before you start.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/eureka"
              className="group flex flex-col items-start p-10 md:p-16 rounded-3xl bg-deep-burgundy border border-vanilla-silk/10 hover:border-dypsem-red hover:bg-dypsem-red/10 transition-all duration-300 text-left relative overflow-hidden"
            >
              <h2 className="text-2xl font-bold tracking-widest text-vanilla-silk/50 uppercase mb-8 group-hover:text-dypsem-red transition-colors">I ALREADY HAVE A TEAM</h2>
              <div className="mt-auto">
                <span className="text-3xl md:text-5xl font-display font-bold flex items-center gap-4 group-hover:-translate-y-2 transition-transform">
                  We're ready to build. <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </Link>

            <button 
              onClick={() => setView('signup')}
              className="group flex flex-col items-start p-10 md:p-16 rounded-3xl bg-vanilla-silk text-bordeaux hover:bg-white transition-all duration-300 text-left relative overflow-hidden"
            >
              <h2 className="text-2xl font-bold tracking-widest text-bordeaux/50 uppercase mb-8 group-hover:text-bordeaux/80 transition-colors">I NEED TEAMMATES</h2>
              <div className="mt-auto">
                <span className="text-3xl md:text-5xl font-display font-bold flex items-center gap-4 group-hover:-translate-y-2 transition-transform">
                  Help me find my people. <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </button>
          </div>

          <div className="mt-16 text-center">
            <button onClick={() => setView('login')} className="text-vanilla-silk/60 hover:text-vanilla-silk font-medium text-lg transition-colors">
              Already have a profile? Log in
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] flex flex-col justify-center px-6 py-20 relative">
      <div className="max-w-xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-5xl font-display font-bold mb-4">
            {view === 'login' ? 'Welcome back.' : 'Tell us what you bring.'}
          </h1>
          <p className="text-xl text-vanilla-silk/60 font-light">
            {view === 'login' ? 'Your idea is still waiting.' : 'Your profile helps other students find potential teammates.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {view === 'signup' && (
            <div className="space-y-6 animate-fade-up">
              <div>
                <label className="block text-sm font-semibold tracking-wider uppercase text-vanilla-silk/50 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-deep-burgundy border-b-2 border-vanilla-silk/20 px-4 py-4 text-lg text-vanilla-silk focus:outline-none focus:border-dypsem-red focus:bg-deep-burgundy/80 transition-all rounded-t-lg"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold tracking-wider uppercase text-vanilla-silk/50 mb-2">Year</label>
                  <select 
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-deep-burgundy border-b-2 border-vanilla-silk/20 px-4 py-4 text-lg text-vanilla-silk focus:outline-none focus:border-dypsem-red focus:bg-deep-burgundy/80 transition-all rounded-t-lg appearance-none"
                  >
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold tracking-wider uppercase text-vanilla-silk/50 mb-2">Role / Skill</label>
                  <select 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-deep-burgundy border-b-2 border-vanilla-silk/20 px-4 py-4 text-lg text-vanilla-silk focus:outline-none focus:border-dypsem-red focus:bg-deep-burgundy/80 transition-all rounded-t-lg appearance-none"
                  >
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold tracking-wider uppercase text-vanilla-silk/50 mb-2">Branch</label>
                <select 
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full bg-deep-burgundy border-b-2 border-vanilla-silk/20 px-4 py-4 text-lg text-vanilla-silk focus:outline-none focus:border-dypsem-red focus:bg-deep-burgundy/80 transition-all rounded-t-lg appearance-none"
                >
                  {branches.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold tracking-wider uppercase text-vanilla-silk/50 mb-2">College Email</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-deep-burgundy border-b-2 border-vanilla-silk/20 px-4 py-4 text-lg text-vanilla-silk focus:outline-none focus:border-dypsem-red focus:bg-deep-burgundy/80 transition-all rounded-t-lg"
                placeholder="student@dypsem.edu.in"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold tracking-wider uppercase text-vanilla-silk/50 mb-2">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-deep-burgundy border-b-2 border-vanilla-silk/20 px-4 py-4 text-lg text-vanilla-silk focus:outline-none focus:border-dypsem-red focus:bg-deep-burgundy/80 transition-all rounded-t-lg"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-dypsem-red/10 border-l-4 border-dypsem-red text-vanilla-silk text-sm">
              {error}
            </div>
          )}

          <div className="pt-6">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 rounded-full bg-vanilla-silk hover:bg-white text-bordeaux font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
            >
              {loading ? 'Processing...' : (view === 'login' ? 'Log In' : 'Create Profile')} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <button 
            onClick={() => {
              setView(view === 'login' ? 'signup' : 'login');
              setError(null);
            }} 
            className="text-vanilla-silk/60 hover:text-vanilla-silk font-medium transition-colors"
          >
            {view === 'login' ? "Don't have a profile? Create one →" : "Already have a profile? Log In →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
