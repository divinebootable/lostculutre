import Tour from './Tour'
import Title from './Title'
import { tours } from './data'

const Tours = () => (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='Shows' />

      <div className='section-center featured-center'>
        {tours.map((tour) => <Tour {...tour} key={tour.id} />)}
      </div>
    </section>
  )
export default Tours
