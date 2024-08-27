import React from 'react';

export default function myPortfolioItems(props) {
    return (
      <div className="portfolioItem"
           onClick={() => {
             if (props.url) {
             }
           }}>
        <h3>{props.name}</h3>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <div style={{ backgroundImage: `url(${props.image})` }} className='bgImage' />
        </a>
      </div>
    );
  }