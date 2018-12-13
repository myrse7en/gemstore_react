import React, { Component } from 'react';
import './App.css';
import Home from './views/home';
import Checkout from './views/checkout';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import PRODUCTS from './static/data/products.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      cart: []
    };
  }

  componentWillMount() {
    this.setState({
      products: PRODUCTS
    })
  }

  // add product to cart using an id, function written here bacause state is stored within this component
  addItem= id => {
    // step 1: define empty object, to be set to the proper procuct later
    let item = {};
    let cart = this.state.cart;

    // step 2: loop through products in state and find correct id
    for (let index in this.state.products) {
      if (this.state.products[index].id === id) {
        // step 3: assign correct product into item and break loop
        item = this.state.products[index];
        break;
      }
    }
    // step 4: push item to cart variable and set the state again
    cart.push(item);
    this.setState({
      cart: cart
    });

  console.log(this.state.cart);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home addItem={this.addItem} products={this.state.products} />} />

          <Route exact path='/checkout' render={() => <Checkout />} />
        </Switch>
      </div>
    );
  }
}

export default App;
