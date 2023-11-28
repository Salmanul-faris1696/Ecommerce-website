import MobileNav from "./components/MobileNav"
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Category from "./components/Category";
import FeatureSection from "./components/FeatureSection";
import { FeatureSection2 } from "./components/FeatureSection2";
import Banner from "./components/Banner";
import BlogSections from "./components/BlogSections";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FooterEnd from './components/FooterEnd';

function App() {

  return (
    <>
   <main>
      <Navbar/>
      <MobileNav/>
      <Hero/>
      <Category/>
      <FeatureSection/>
      <FeatureSection2/>
      <Banner/>
      <BlogSections/>
      <Newsletter/>
      <Footer/>
      <FooterEnd/>
   </main>
      
        
    </>
  )
}

export default App
