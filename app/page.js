'use client';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import History from './Components/History';
import Vision from './Components/Vision';
import Executives from './Components/Executives';
import Cluster from './Components/Cluster';
import Teams from './Components/Teams';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Advisors from './Components/Advisors';
import Airange from './Components/Airange';
import HallOfFame from './Components/HallOfFame';

// Define the Home component
function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <History />
      <Advisors />
      <Executives />
      <Teams />
      <Airange />
      <HallOfFame />
      <Cluster />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

// Export the component
export default Home;
