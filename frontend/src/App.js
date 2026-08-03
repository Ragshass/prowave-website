import "@/App.css";
import useLenis from "@/hooks/useLenis";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Marquee from "@/components/site/Marquee";
import Products from "@/components/site/Products";
import WhyProwave from "@/components/site/WhyProwave";
import Catalogue from "@/components/site/Catalogue";
import Location from "@/components/site/Location";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsappButton from "@/components/site/WhatsappButton";

function App() {
  useLenis();

  return (
    <div className="App bg-background text-foreground" data-testid="prowave-app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Products />
        <WhyProwave />
        <Catalogue />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
      <Toaster position="bottom-center" theme="dark" richColors />
    </div>
  );
}

export default App;
