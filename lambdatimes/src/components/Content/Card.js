import React from 'react';
import { cardData } from '../../data';
import PropTypes from 'prop-types'

const Card = props => {
  console.log('Card.js:',props)
  return (
    
    <div className="card" key={props.card.headline}>
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt='card'/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

//////// my proptypes start here ///////
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
