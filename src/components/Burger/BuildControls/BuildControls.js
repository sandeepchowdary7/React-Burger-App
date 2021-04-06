import React from 'react';

import classes from './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls = [
    {'label': 'Salad', 'type':'salad'},
    {'label': 'Cheese', 'type':'cheese'},
    {'label': 'Meat', 'type':'meat'},
    {'label': 'Bacon', 'type':'bacon'}
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingradientAdded(ctrl.type)}
                    removed={() => props.ingradientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button  className={classes.OrderButton} disabled={!props.purchasable}>
                ORDER NOW
            </button>
        </div>
    );
}

export default buildControls;