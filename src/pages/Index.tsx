import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

const Index = () => (
  <div className="-mt-16">
    <Hero />
    <About />
    <Services />
    <Courses />
    <Products />
    <Contact />
  </div>
);

export default Index;
