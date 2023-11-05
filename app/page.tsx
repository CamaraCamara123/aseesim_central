"use client"
import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/events/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/Newsletter';
import Projects from './components/Projects/Projects';



export default function Home() {
  return (
    <main>
      <Banner />
      <Cook />
      <Features />
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  )
}
