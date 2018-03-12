import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad' , type: 'salad'},
    { label: 'Bacon' , type: 'bacon'},
    { label: 'Cheese' , type: 'cheese'},
    { label: 'Meat' , type: 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {/* <br/><br/><br/><br/><br/><br/> */}
      <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(
          crtl => (
            <BuildControl
              key={crtl.label}
              label={crtl.label}
              added={() => props.ingredientAdded(crtl.type)}
              removed={() => props.ingredientRemoved(crtl.type)}
              disabled={props.disabled[crtl.type]}/>
          )
        )
      }
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>ORDER NOW
      </button>
  </div>

);

export default buildControls;
