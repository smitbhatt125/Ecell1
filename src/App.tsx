import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Manifesto from './pages/Manifesto'
import Eureka from './pages/Eureka'
import Auth from './pages/Auth'
import Directory from './pages/Directory'

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-dypsem-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/eureka" element={<Eureka />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/directory" element={<Directory />} />
          {/* Register is an external link, but we might want a quick redirect route if needed, otherwise it's just an external href */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
