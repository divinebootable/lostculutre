import Title from './Title';
import aboutImg from '../../assets/images/about.jpeg';

const About = () => (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
          Lost Culture is not merely a competition; it’s a journey through the forgotten corners of Cameroon’s musical landscape. Aspiring musicians are invited to rediscover the whispers of their ancestors, weave tales of their heritage into contemporary rhythms, and reimagine the sounds that define their identity. They become the threads that mend the tapestry of a culture threatened by time, their voices echoing in a symphony of revival.
          </p>
          <p>
          Imagine a tapestry woven from forgotten melodies, where ancient rhythms pulse beneath layers of modern beats. This tapestry is Lost Culture, a vibrant initiative conceived and orchestrated by Raka International SA, Cameroon’s champion of musical heritage.


          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
export default About;
