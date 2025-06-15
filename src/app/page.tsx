import AboutUs from "./components/about/about";
import Banner from "./components/banner/banner";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Services from "./components/services/services";
import Works from "./components/works/works";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
     
       <section id="home">
          <Banner />
        </section>

        <section id="about-us">
          <AboutUs />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="works">
          <Works />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <Footer />
      
    </div>
  );
}
