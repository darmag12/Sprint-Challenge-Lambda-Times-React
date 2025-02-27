import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  // console.log('Cards.js:',props)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((card) => {
            return (
                  <>
                    <Card key={card.headline}  card={card}/>
                  </>
            )
          })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

////// my proptypes ////////

Cards.propTypes = {
  
cards: PropTypes.arrayOf(PropTypes.shape)

}

export default Cards;