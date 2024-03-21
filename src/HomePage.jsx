import Navbar from './components/navigation/Navbar';
import { Hero, Cards, About, Tours, Footer, Services } from './components/homepage';

// import Subscription from '../components/Subscription'
// import Navbar from '../partials/NavBar'
// import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}
export default HomePage;
