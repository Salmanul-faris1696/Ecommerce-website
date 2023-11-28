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
import { CartContextProvider } from "./context/CartContext";
import { useState } from 'react';
import Cart from "./components/Cart";

function App() {

  const [ showCart , setShowCart] =useState<any>(false);

  return (
    <>

    <CartContextProvider>

   <main>
      <Navbar setShowCart = {setShowCart}/>
      <MobileNav setShowCart = {setShowCart}/>
      <Hero/>
      <Category/>
      <FeatureSection/>
      <FeatureSection2/>
      <Banner/>
      <BlogSections/>
      <Newsletter/>
      <Footer/>
      <FooterEnd/>
      {
        showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>

      }
      
   </main>
    </CartContextProvider>
      
        
    </>
  )
}

export default App
