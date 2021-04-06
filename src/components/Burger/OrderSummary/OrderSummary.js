import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const ordersummary = (props) => {
    const ingradientSummary = Object.keys(props.ingredients)
                    .map(igKey => {
                        return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
                    });
    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A delious burger with the following ingradients:</p>
            <ul>
                {ingradientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.closePurchaseeeHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continuePurchaseeeHandler}>CONTINUE</Button>
        </Aux>
    );
}

export default ordersummary;