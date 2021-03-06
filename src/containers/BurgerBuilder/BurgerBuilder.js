import React, { Component } from "react";
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'

import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from "../../components/UI/Modal/Modal";
import Ordersummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGRADIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    bacon: 1,
    meat: 1.50
}

 class BurgerBuilder extends Component {
     state = {
         ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
         },
         totalPrice: 4,
         purchasable: false,
         purchasing: false
     }

     updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum+el;
            }, 0);
        this.setState({purchasable: sum > 0})
     }

     addIngradientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngradients = { ...this.state.ingredients } 
        updatedIngradients[type] = updatedCount;
        const newPrice = INGRADIENT_PRICES[type] + this.state.totalPrice;
        this.setState({totalPrice: newPrice, ingredients: updatedIngradients});
        this.updatePurchaseState(updatedIngradients);
     }

     removeIngradientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngradients = { ...this.state.ingredients } 
        updatedIngradients[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGRADIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngradients});
        this.updatePurchaseState(updatedIngradients);
     }

     purchaseeeHandler = () => {
         this.setState({purchasing: true})
     }

     closePurchaseeeHandler = () => {
         this.setState({purchasing: false})
     }

     continuePurchaseeeHandler = () => {
         alert('You Continue');
     }

     render () {
         const disabledInfo = { ...this.state.ingredients};
         for(let key in disabledInfo) {
             disabledInfo[key] = disabledInfo[key] <= 0 ;
         }
         return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.closePurchaseeeHandler}>
                    <Ordersummary 
                    ingredients={this.state.ingredients} 
                    closePurchaseeeHandler={this.closePurchaseeeHandler}
                    continuePurchaseeeHandler={this.continuePurchaseeeHandler}
                    price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingradientAdded={this.addIngradientHandler} 
                    ingradientRemoved={this.removeIngradientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseeeHandler}
                    purchasable={this.state.purchasable}
                />
            </Aux>
         );
     }
 }

export default BurgerBuilder;