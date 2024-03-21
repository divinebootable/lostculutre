// import Cards from '../components/Cards'
import { Hero, About, Tours, Cards, Navbar, Footer, Services } from '../components/homepage';

// import Subscription from '../components/Subscription'
// import Navbar from '../partials/NavBar'
// import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}
export default HomePage;
