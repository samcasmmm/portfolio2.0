import {
  About,
  Contact,
  Experience,
  Tech,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from '@/components';

export default function Home() {
  return (
    <main className='relative z-0 bg-primary min-h-screen'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}
