import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BookingForm from './components/BookingForm'
import Services from './components/Services'
import Cars from './components/Cars'
import Features from './components/Features'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <Navbar />
      </header>
      <main>
      <HeroSection />
      <BookingForm />
      <Services />
      <Cars />
      <Features />
      <Subscription />
      </main>
      <footer>
        <Footer />
      </footer>
      </>
  )
}

export default App
