import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./style.css";

//------سبد خرید= cartitems
class App extends React.Component {
  state = { products: [], cartitems: [] };

  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
        })
      );
  }

  handeladdtocart = (product) => {
    this.setState((prevState) => {
      let cartitems = prevState.cartitems;

      let productexist = false;
      cartitems.forEach((item) => {
        if (item.id === product.id) {
          productexist = true;
          item.count++;
        }
      });
      //سه نقطه یعنی به آن اضافه شود
      if (!productexist) {
        cartitems = [...cartitems, { ...product, count: 1 }];
        //اینجا آبجکت برمی گردانیم
        //done: [task, ...prevState.done],
      }

      return { cartitems };
    });
  };
  //-------------------
  handleremove = (item) => {
    this.setState((state) => {
      const cartitems = state.cartitems.filter((p) => p.id !== item.id);
      return { cartitems };
    });
  };

  render() {
    return (
      <div className="main">
        <Products
          products={this.state.products}
          handeladdtocart={this.handeladdtocart}
        />
        <Cart
          cartitems={this.state.cartitems}
          handleremove={this.handleremove}
        />
      </div>
    );
  }
}

export default App;
