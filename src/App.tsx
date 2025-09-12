import { useState, useEffect } from "react";
import gsap from "gsap";

import Preloader from "./components/Preloader";
import Banner2 from "./components/Banne2";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TopNav from "./components/TopNav";
import Video from "./components/Video";
import { BrowserRouter as Router  } from "react-router-dom";
// import TiltedCard from "./TiltedCard";
import NewsEvents from "./components/NewsEvents";
// import LogoLoop from "../reactBits/LogoLoop/LogoLoop";
import LogoSlider from "./components/LogoSlider";
// import CardNav from "../reactBits/CardNav/CardNav";
// import Participatios from "./components/Participatios";
// import VerticalMarquee from "./components/VerticalMarquee";
function App() {

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to("#preloader", {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => setLoading(false),
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <Preloader />; 
  }

  return (
    <>
    <Router>
      
      <div>
        <div>
          <Video />
        </div>
        <TopNav />
        <Navbar />    
        <Hero />
        <Banner />
        <Banner2 />
        <Services />
        <div className="w-full bg-black">
  <img 
    src="/src/assets/map.jpg" 
    alt="map" 
    className="w-full object-contain h-[70vh] "
  />
</div>
        <NewsEvents />
       <LogoSlider />
        <Carousel />
        <Footer />
      </div>

    </Router>
    </>
  );
}

export default App;
