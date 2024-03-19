/* eslint-disable react/prop-types */
import React from 'react';

import './card.css';

function ContestantCard({ item }) {
  return (
    <div className="container">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="name">{item.stageName}</span>
        <button type="button" onClick={console.log(item)} className="button">
          {' '}
          Vote
        </button>
      </div>
    </div>
  );
}
export default ContestantCard;
