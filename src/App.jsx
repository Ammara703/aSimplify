import Navbar from "./Components/Navbar.jsx";
import Header from "./Components/Header.jsx";
import Services from "./Components/Services.jsx";
import About from "./Components/About.jsx";
import Working from "./Components/Working.jsx";
import Review from "./Components/Review.jsx";
import Team from "./Components/Team.jsx";
import Team_data from "./Team_data";
import Career from "./Components/Career.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const team = Team_data.map((item) => {
    return (
      <Team
        key={item.id}
        img={item.img}
        h1={item.h1}
        position={item.position}
        p={item.p}
        twitter={item.twitter}
        facebook={item.facebook}
        linkedin={item.linkedin}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Working />
      <Review />
      {/*---------------- Team------------------- */}
      <div className="team-section wrapper">
        <h1 className="lg-heading">our team</h1>
        <section className="team-card-wrapper">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            arrows={true}
          >
            {team}
          </Slider>
        </section>
      </div>
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
