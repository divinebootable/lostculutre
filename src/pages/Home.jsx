/* eslint-disable no-unused-vars  */
import React, { useState } from 'react';

import Hero from 'src/components/hero/Hero';
import Navbar from 'src/components/navbar/Navbar';
import Background from 'src/components/background/Background';

import './Home.css';

const Home = () => {
  const heroData = [
    { test1: 'Dive into', text2: 'What you love' },
    { test1: 'Indulge', text2: 'Your passions' },
    { test1: 'Give into', text2: 'your passions' },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default Home;
