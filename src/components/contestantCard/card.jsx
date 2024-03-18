import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';

function ContestantCard({ card }) {
  return (
    <Link>
      <div className="catCard">
        <img src="contestant.img" alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.stageName}</span>
      </div>
    </Link>
  );
}
export default ContestantCard;
