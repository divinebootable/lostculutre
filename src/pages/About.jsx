// import React from 'react'
import {Footer,Navbar } from '../components/homepage';


function About() {
  
  const myStyle = {
    color: '#ffae00',
    fontWeight: 'bold',
  };
  return <>
 
<Navbar/>

  <div className="container">
    <div className="top-div">
      <h2><span style={myStyle} >About</span> Us </h2>
      <p>Reclaiming the Rhythm of Cameroon.</p>
      
        <p>Raka International SA, with its unwavering commitment to integrity, innovation, and cultural preservation, saw a spark fading in the embers of Cameroonian music. The younger generation, captivated by foreign tunes, seemed to forget the vibrant melodies that echoed through village squares and resonated in ancestral spirits. Thus, Lost Culture was born, a music contest designed to rekindle the flame of tradition and ignite a passion for local sounds in a new generation.</p>
        
          <p>Lost Culture is a testament to Raka International SA’s core values. Their dedication to integrity shines through in the transparent judging process, ensuring fairness and fostering trust. Their innovative spirit fuels the contest’s dynamism, constantly seeking new ways to celebrate Cameroonian music and engage diverse audiences. And their unwavering belief in accountability extends beyond the competition, guiding Raka International SA to support the careers of promising musicians, nurture young talent, and ensure the sustainability of this cultural revitalization initiative.</p>
          
            <p>But Lost Culture is more than just nostalgia. It’s a platform for innovation, where tradition and modernity waltz hand-in-hand. Raka International SA, ever attuned to the ever-evolving music scene, understands the transformative power of fresh perspectives. The contest encourages musicians to reinterpret the past with a modern twist, blending familiar beats with electronic whispers and digital echoes. This fusion creates a soundscape that transcends generations, resonating with both seasoned music lovers and curious newcomers.</p>
          
    </div>
    <div className="left-div">
      <h2>Bringing Out The Best</h2>
      <p>This is the left div content.</p>
    </div>
    <div className="right-div">
      <h2>Still about Lost Culture</h2>
      
      
        <p>Lost Culture is not merely a competition; it’s a journey through the forgotten corners of Cameroon’s musical landscape. Aspiring musicians are invited to rediscover the whispers of their ancestors, weave tales of their heritage into contemporary rhythms, and reimagine the sounds that define their identity. They become the threads that mend the tapestry of a culture threatened by time, their voices echoing in a symphony of revival.</p>
      
        <p>Lost Culture is a melody reborn, avibrant testament to the enduring power of music. It’s a bridge built by Raka International SA, connecting generations through the rhythm of shared heritage and the harmony of creative expression. In every beat, every note, and every soul-stirring performance, Lost Culture reminds us that even the faintest whispers of the past can become the roar of a cultural renaissance.</p>
    </div>
   </div>   
       
   <Footer/>
 
  </>
}

export default About