import Title from './Title'
import Service from './Service'
import { services } from './data'

const Services = () => (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => <Service {...service} key={service.id} />)}
      </div>
    </section>
  )
export default Services
