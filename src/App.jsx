import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';

function App() {
  return (
    <div className="bg-dark-background h-dvh pt-6">
      <div className="w-4/5  mx-auto flex flex-col gap-6">
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
    </div>
  );
}

export default App;
