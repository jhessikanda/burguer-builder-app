import React from 'react';
import classes from './Burguer.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) //array of the keys
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurguerIngredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => { //previous, current
        return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  console.log(transformedIngredients);

  return(
    <div className={classes.Burguer}>
      <BurguerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurguerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burguer;
