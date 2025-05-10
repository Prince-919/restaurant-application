import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Qualities from "../components/Qualities";
import Reservation from "../components/Reservation";
import Team from "../components/Team";
import WhoAreWe from "../components/WhoAreWe";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Home;
