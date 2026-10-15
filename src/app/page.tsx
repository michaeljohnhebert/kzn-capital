import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import MarqueeBar from '@/components/MarqueeBar';
import About from '@/components/About';
import Strategy from '@/components/Strategy';
import Team from '@/components/Team';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeBar />
        <About />
        <Strategy />
        <Team />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
