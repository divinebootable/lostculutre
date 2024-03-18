import React from 'react';

import { cards } from '../utils/data';
import ContestantCard from '../components/contestantCard/card';

function Contestant() {
  return (
    <div className="contestants">
      {cards.map((card) => (
        <ContestantCard key={card.id} item={card} />
      ))}
    </div>
  );
}
export default Contestant;
