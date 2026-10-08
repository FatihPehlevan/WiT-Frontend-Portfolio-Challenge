import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="bg-dark-background h-full pt-6">
      <Header />
      <div className="w-4/5  mx-auto flex flex-col gap-0 lg:max-w-7xl">
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
