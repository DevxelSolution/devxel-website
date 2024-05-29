import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import '../styles/globals.css'
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Offer from "@/components/Offer";

export default function HomePage() {
  return (
    <>
    <NavBar/>
      <Hero/>
      <AboutUs/>
      <Offer/>
      {/* <Services/> */}
    </>
  );
}
