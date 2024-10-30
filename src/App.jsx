import './App.css'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Analytics } from "@vercel/analytics/react"




function App() {

  return (
    <div className='space-y-6'>
    <Analytics/>
    <div className='lg:h-screen'>
      <Header/>
      <Hero/>
    </div>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}

export default App
