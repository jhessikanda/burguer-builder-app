import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummay from '../../components/Burguer/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurguerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((currSum, el) => {
            return currSum + el;
        }, 0);

    this.setState({purchaseable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);

}

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    alert('You Continue')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    //disabledInfo = {salad: true, meat: false...}
    for (let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0)
    }

    return(
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummay
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}/>
        </Modal>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
          />
      </Aux>
    );
  }
}

export default BurguerBuilder;
