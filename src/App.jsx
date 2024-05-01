import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HelpSection from "./components/HelpSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import TrySection from "./components/TrySection";

function App() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection/>
      <HelpSection/>
      <FeatureSection/>
      <Testimonials/>
      <TrySection/>
      <Footer/>
    </div>
  );
}

export default App;
