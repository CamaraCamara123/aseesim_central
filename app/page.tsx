"use client"
import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/events/index';
import Expert from './components/Bureau/index';
import Gallery from './components/MainEvents/index';
import Newsletter from './components/Newsletter/Newsletter';



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
