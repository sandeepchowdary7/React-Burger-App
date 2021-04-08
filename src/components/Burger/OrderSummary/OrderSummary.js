import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

class Ordersummary extends Component {
    render() {
        const ingradientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>);
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delious burger with the following ingradients:</p>
                <ul>
                    {ingradientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.closePurchaseeeHandler}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continuePurchaseeeHandler}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default Ordersummary;