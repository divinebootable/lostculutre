
import { Hero,Cards,About,Tours,Navbar,Footer,Services } from './components/homepage'

// import Subscription from '../components/Subscription'
// import Navbar from '../partials/NavBar'
// import { Link } from 'react-router-dom'
function HomePage() {
  return <>
       <Navbar />
      <Hero />
      <Cards />
      <About />
      <Services />
      <Tours />
      {/* <Subscription/> */}
      <Footer />
    </>
  
}
export default HomePage