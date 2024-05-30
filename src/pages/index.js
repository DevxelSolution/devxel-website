import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import '../styles/globals.css'
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Offer from "@/components/Offer";
import ContactRobo from "@/components/ContactRobo";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import Footer from "@/components/Footer";
// ..

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <NavBar/>
    <ContactRobo/>
      <Hero/>
      <AboutUs/>
      <Offer/>
      <Footer />
      {/* <Services/> */}
    </>
  );
}
