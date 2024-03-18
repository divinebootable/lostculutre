/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';

function ContestantCard({ item }) {
  return (
    <Link>
      <div className="container">
        <div className="catCard">
          <img src={item.img} alt="" />
          <span className="name">{item.stageName}</span>
          <button type="button" className="button">
            {' '}
            Vote
          </button>
        </div>
      </div>
    </Link>
  );
}
export default ContestantCard;
