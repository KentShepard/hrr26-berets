import React from 'react';
import Item from './Item.jsx';

var PopularItems = (props) => {
  if (props.products) {
    return (
      <div className="popular-items container">
        {props.products.map(product =>
          <Item onClick={props.onClick} product={product} key={product._id}/>
        )}
      </div>)
  }
    return (
      <div classname="popular-items container">
        No products here!
      </div>
      )
}


//render one box for each item
//we want three now but could handle more or less
//onClick passed from parent component allows user to follow url link to walmart product page
//When styling make sure products are arranged horizontally.


export default PopularItems;
